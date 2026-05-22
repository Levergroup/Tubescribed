import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "TubeScribed — Turn YouTube Videos Into Branded Business Assets";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#131B28",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top gradient accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #FF3B30, #FF8C42)",
          }}
        />

        {/* Logo row */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "36px" }}>
          <svg width="64" height="64" viewBox="0 0 36 36" fill="none">
            <path d="M8 4.5C5.5 4.5 5 6.5 5 8V28C5 30 5.5 31.5 8 31.5C9.5 31.5 10.5 31 32 19.5C33.5 18.8 34 18.4 34 18C34 17.6 33.5 17.2 32 16.5C10.5 5 9.5 4.5 8 4.5Z" fill="#FF3B30"/>
            <path d="M5 21C8.5 19.5 15 18 23 19C28.5 19.7 31.5 19.3 34.5 18.7V20.5C31.5 21.1 28.5 21.5 23 20.8C15 19.8 8.5 21.3 5 22.8Z" fill="#131B28"/>
          </svg>
          <span
            style={{
              fontSize: "44px",
              fontWeight: "bold",
              color: "white",
              marginLeft: "18px",
              letterSpacing: "-0.5px",
            }}
          >
            TubeScribed
          </span>
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: "54px",
            fontWeight: "bold",
            color: "#E8EDF2",
            textAlign: "center",
            maxWidth: "920px",
            lineHeight: 1.2,
            marginBottom: "28px",
          }}
        >
          Turn YouTube Videos Into Branded Business Assets
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: "24px",
            color: "#8BA3B8",
            textAlign: "center",
          }}
        >
          Transcripts · SOPs · Blog Posts · Email Sequences
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: "36px",
            color: "#3D5166",
            fontSize: "20px",
          }}
        >
          tubescribed.com
        </div>
      </div>
    ),
    { ...size }
  );
}
