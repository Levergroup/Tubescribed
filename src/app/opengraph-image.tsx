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
            <path d="M6 4L32 18L6 32V4Z" fill="#FF3B30" />
            <path
              d="M4 20C8 18.5 14 17 22 18.5C18 18 12 19.5 8 21.5L4 20Z"
              fill="white"
            />
            <path
              d="M8 15C13 13 20 13.5 28 16C22 14 15 14.5 10 16.5L8 15Z"
              fill="white"
            />
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
