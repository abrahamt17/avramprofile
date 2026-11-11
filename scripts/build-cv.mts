/**
 * Generates the three CV PDFs in public/cv from src/content/cv.ts.
 * Run with `npm run cv` (also runs before every build).
 *
 * The layout is deliberately plain so applicant tracking systems can read it:
 * one column, real text, standard fonts, no tables, images or icons.
 */
import { createWriteStream, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import PDFDocument from "pdfkit";
import { cvVariants } from "../src/content/cv.ts";
import { profile } from "../src/content/profile.ts";

const outDir = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "cv");
mkdirSync(outDir, { recursive: true });

const MARGIN = 46;
const INK = "#111111";
const GREY = "#555555";
const RULE = "#bbbbbb";

/** The built-in PDF fonts cover Western European text only, so a few letters are simplified. */
function plain(text: string): string {
  return text.replace(/[șş]/g, "s").replace(/[țţ]/g, "t").replace(/ă/g, "a").replace(/[ȘŞ]/g, "S").replace(/[ȚŢ]/g, "T");
}

function build(variant: (typeof cvVariants)[number]): Promise<number> {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: "A4",
      margin: MARGIN,
      bufferPages: true,
      info: {
        Title: `${profile.name} — CV — ${variant.label}`,
        Author: profile.name,
        Subject: `Curriculum vitae: ${variant.label}`,
        Keywords: variant.skills.flatMap((group) => group.items).join(", "),
      },
    });
    const stream = createWriteStream(join(outDir, variant.fileName));
    doc.pipe(stream);

    const width = doc.page.width - MARGIN * 2;
    const t = (text: string) => plain(text);

    // Header
    doc.font("Helvetica-Bold").fontSize(21).fillColor(INK).text(t(profile.name), { width });
    doc.font("Helvetica").fontSize(11.5).text(t(variant.headline), { width });
    doc.moveDown(0.25);
    doc
      .fontSize(9)
      .fillColor(GREY)
      .text(
        t(`${profile.location}  |  ${profile.links.linkedin.replace("https://www.", "")}  |  ${profile.links.github.replace("https://", "")}`),
        { width },
      );
    if (profile.email) doc.text(profile.email, { width });

    doc.moveDown(0.7);
    doc.font("Helvetica").fontSize(9.8).fillColor(INK).text(t(variant.summary), { width, lineGap: 1.6 });

    const sectionTitle = (title: string) => {
      doc.moveDown(0.9);
      doc.font("Helvetica-Bold").fontSize(9.5).fillColor(INK).text(t(title.toUpperCase()), MARGIN, doc.y, { width, characterSpacing: 0.8 });
      const y = doc.y + 1.5;
      doc.moveTo(MARGIN, y).lineTo(MARGIN + width, y).lineWidth(0.6).strokeColor(RULE).stroke();
      doc.y = y + 5;
    };

    for (const section of variant.sections) {
      sectionTitle(section.title);
      section.entries.forEach((entry, index) => {
        if (index > 0) doc.moveDown(0.55);
        // Keep an entry's heading with at least some of its body.
        if (doc.y > doc.page.height - MARGIN - 60) doc.addPage();

        doc.font("Helvetica").fontSize(9);
        const periodWidth = entry.period ? doc.widthOfString(t(entry.period)) + 12 : 0;
        const top = doc.y;
        doc.font("Helvetica-Bold").fontSize(10.3).fillColor(INK).text(t(entry.heading), MARGIN, top, { width: width - periodWidth });
        const after = doc.y;
        if (entry.period) {
          doc.font("Helvetica").fontSize(9).fillColor(GREY).text(t(entry.period), MARGIN, top + 1, { width, align: "right" });
        }
        doc.y = after;
        if (entry.sub) {
          doc.font("Helvetica-Oblique").fontSize(9.2).fillColor(GREY).text(t(entry.sub), MARGIN, doc.y + 1, { width, lineGap: 1 });
        }
        doc.moveDown(0.2);
        for (const bullet of entry.bullets) {
          const y = doc.y;
          doc.font("Helvetica").fontSize(9.6).fillColor(INK).text("•", MARGIN + 2, y);
          doc.text(t(bullet), MARGIN + 13, y, { width: width - 13, lineGap: 1.4 });
        }
      });
    }

    sectionTitle("Skills");
    for (const group of variant.skills) {
      doc
        .font("Helvetica-Bold")
        .fontSize(9.6)
        .fillColor(INK)
        .text(t(`${group.title}: `), MARGIN, doc.y, { width, continued: true, lineGap: 1.6 })
        .font("Helvetica")
        .text(t(group.items.join(", ")));
    }

    const pages = doc.bufferedPageRange().count;
    doc.end();
    stream.on("finish", () => resolve(pages));
    stream.on("error", reject);
  });
}

for (const variant of cvVariants) {
  const pages = await build(variant);
  console.log(`cv: ${variant.fileName} (${pages} page${pages === 1 ? "" : "s"})`);
}
