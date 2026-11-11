import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name} — ${profile.positioning}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0d0e0b",
          color: "#eeebe1",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28 }}>
          <div style={{ width: 22, height: 22, borderRadius: 22, background: "#c5f235" }} />
          {profile.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 76, lineHeight: 1.05, letterSpacing: -3 }}>
          <span>I build with technology,</span>
          <span style={{ color: "#8f8e85" }}>think in products, and turn</span>
          <span style={{ color: "#8f8e85" }}>complex ideas into useful solutions.</span>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#c5f235", letterSpacing: 2 }}>
          AI & TECHNOLOGY · PRODUCT & ENGINEERING · TECHNICAL MARKETING
        </div>
      </div>
    ),
    size,
  );
}
