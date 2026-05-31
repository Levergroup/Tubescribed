import { ImageResponse } from "next/og";
import { getPostBySlug, getAllPostSlugs } from "@/lib/mdx";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export default function Image({ params }: { params: { slug: string } }) {
  let title = "TubeScribed Blog";
  let category = "Article";
  let excerpt = "";

  try {
    const post = getPostBySlug(params.slug);
    title = post.title;
    category = post.category;
    excerpt = post.excerpt?.slice(0, 120) ?? "";
  } catch {
    // fallback values above
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#131B28",
          display: "flex",
          flexDirection: "column",
          padding: "64px 72px",
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

        {/* Category pill */}
        <div style={{ display: "flex", marginBottom: "32px", marginTop: "12px" }}>
          <div
            style={{
              background: "rgba(255,59,48,0.15)",
              border: "1px solid rgba(255,59,48,0.35)",
              borderRadius: "20px",
              padding: "8px 22px",
              color: "#FF8C42",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            {category}
          </div>
        </div>

        {/* Post title */}
        <div
          style={{
            fontSize: title.length > 60 ? "44px" : "52px",
            fontWeight: "bold",
            color: "#E8EDF2",
            lineHeight: 1.25,
            maxWidth: "1050px",
            flex: 1,
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          {title}
        </div>

        {/* Excerpt */}
        {excerpt && (
          <div
            style={{
              fontSize: "22px",
              color: "#8BA3B8",
              lineHeight: 1.5,
              maxWidth: "960px",
              marginBottom: "32px",
              display: "flex",
            }}
          >
            {excerpt}
          </div>
        )}

        {/* Bottom branding */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
            <path d="M9.9 10.2 Q9.9 6.8 12.78 8.61 L31.82 20.59 Q34.7 22.4 31.74 24.08 L12.86 34.82 Q9.9 36.5 9.9 33.1 Z" fill="#FF3B30"/>
            <path d="M10.5 30 C14.5 28.5 17.5 27.3 21 26.8 C24 26.3 26.5 24.6 29.8 23.6 C31.6 23.1 32.2 24.6 30.8 25.6 C27.8 27.6 24.5 26.6 21 27.6 C17 28.7 14 30 10.5 30 Z" fill="#131B28"/>
          </svg>
          <span
            style={{
              color: "#8BA3B8",
              fontSize: "22px",
              marginLeft: "12px",
              fontWeight: "600",
            }}
          >
            TubeScribed
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
