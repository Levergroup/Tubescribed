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
          <svg width="64" height="64" viewBox="0 0 40 40" fill="none">
            <path d="M9.9 10.2 Q9.9 6.8 12.78 8.61 L31.82 20.59 Q34.7 22.4 31.74 24.08 L12.86 34.82 Q9.9 36.5 9.9 33.1 Z" fill="#FF3B30"/>
            <path d="M10.5 30 C14.5 28.5 17.5 27.3 21 26.8 C24 26.3 26.5 24.6 29.8 23.6 C31.6 23.1 32.2 24.6 30.8 25.6 C27.8 27.6 24.5 26.6 21 27.6 C17 28.7 14 30 10.5 30 Z" fill="#131B28"/>
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
