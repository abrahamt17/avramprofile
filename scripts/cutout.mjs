/**
 * One-off helper: removes the plain studio backdrop from a portrait and
 * writes a transparent WebP. Usage:
 *   node scripts/cutout.mjs <input.jpg> <output.webp>
 *
 * It flood-fills from the top and side edges through pixels that look like
 * the backdrop (light and nearly colourless), so skin, hair and a dark shirt
 * are kept. Works for a plain light-grey or white background only.
 */
import sharp from "sharp";

const [input, output] = process.argv.slice(2);
const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width: w, height: h } = info;

const isBackdrop = (i) => {
  const r = data[i], g = data[i + 1], b = data[i + 2];
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  // Light and close to neutral grey. Skin is far more saturated; hair and shirt are far darker.
  return max - min < 22 && (r + g + b) / 3 > 135;
};

const mask = new Uint8Array(w * h).fill(255); // 255 = keep
const stack = [];
const push = (x, y) => {
  if (x < 0 || y < 0 || x >= w || y >= h) return;
  const p = y * w + x;
  if (mask[p] === 0 || !isBackdrop(p * 4)) return;
  mask[p] = 0;
  stack.push(p);
};
for (let x = 0; x < w; x++) push(x, 0);
for (let y = 0; y < h; y++) { push(0, y); push(w - 1, y); }
while (stack.length) {
  const p = stack.pop();
  const x = p % w, y = (p - x) / w;
  for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) if (dx || dy) push(x + dx, y + dy);
}

// Soften the edge, then pull it in slightly so no grey halo remains.
const soft = await sharp(Buffer.from(mask), { raw: { width: w, height: h, channels: 1 } }).blur(1.6).extractChannel(0).raw().toBuffer();
for (let p = 0; p < w * h; p++) {
  const a = Math.max(0, Math.min(1, (soft[p] / 255 - 0.55) / 0.4));
  data[p * 4 + 3] = Math.round(a * 255);
}

await sharp(data, { raw: { width: w, height: h, channels: 4 } }).webp({ quality: 88, alphaQuality: 90 }).toFile(output);
console.log(`cutout: ${output} (${w}x${h})`);
