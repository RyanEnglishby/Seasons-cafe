import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { LOCATION, SITE_NAME } from "@/data/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Note: next/og renders through Satori, which only draws fonts explicitly
// loaded as binary data via the `fonts` option — it can't reach the site's
// own Fraunces/Inter next/font files or any system font. This intentionally
// uses Satori's built-in default rather than an unused `fontFamily` that
// would silently do nothing. Load a bundled font file here later for an
// exact match to the site's serif headings.

export default function OpengraphImage() {
  const logoDataUrl = `data:image/png;base64,${readFileSync(
    join(process.cwd(), "public/images/logo.png"),
  ).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#faf5ec",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #ddc0a0",
            borderRadius: 4,
          }}
        >
          <img src={logoDataUrl} width={110} height={110} style={{ marginBottom: 24 }} alt="" />
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 8, color: "#7c532a", marginBottom: 28 }}>
            {LOCATION.town.toUpperCase()} · {LOCATION.county.toUpperCase()}
          </div>
          <div style={{ display: "flex", fontSize: 96, fontWeight: 600, color: "#2a2723" }}>{SITE_NAME}</div>
          <div style={{ display: "flex", fontSize: 30, color: "#55504a", marginTop: 28 }}>
            Homemade baking, honest coffee, simple food
          </div>
        </div>
      </div>
    ),
    size,
  );
}
