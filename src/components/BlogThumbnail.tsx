import React from "react";

/* ── Shared defs reused across diagrams ─────────────── */
function SharedDefs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`bg-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#131B28" />
        <stop offset="100%" stopColor="#1E2A3A" />
      </linearGradient>
      <linearGradient id={`accent-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FF3B30" />
        <stop offset="100%" stopColor="#FF8C42" />
      </linearGradient>
    </defs>
  );
}

/* ── Arrow + AI pill used by all diagrams ─────────────── */
function FlowArrow({ id, cx }: { id: string; cx: number }) {
  return (
    <g>
      <line
        x1={cx - 34}
        y1={135}
        x2={cx + 34}
        y2={135}
        stroke="#FF3B30"
        strokeWidth="2"
        strokeDasharray="5 3"
        opacity="0.7"
      />
      <polygon
        points={`${cx + 34},135 ${cx + 22},128 ${cx + 22},142`}
        fill="#FF3B30"
        opacity="0.9"
      />
      <rect
        x={cx - 22}
        y={119}
        width={44}
        height={20}
        rx="10"
        fill="rgba(255,59,48,0.15)"
        stroke="#FF3B30"
        strokeWidth="1.2"
      />
      <text
        x={cx}
        y={133}
        fill="#FF8C42"
        fontSize="10"
        fontWeight="bold"
        textAnchor="middle"
        fontFamily="monospace"
      >
        AI
      </text>
      {/* sparkle dots */}
      <circle cx={cx - 38} cy={112} r="2.5" fill="#FF8C42" opacity="0.5" />
      <circle cx={cx - 26} cy={105} r="1.5" fill="#FF3B30" opacity="0.45" />
      <circle cx={cx + 32} cy={108} r="2" fill="#FF8C42" opacity="0.45" />
    </g>
  );
}

/* ─────────────────────────────────────────────────────
   DIAGRAM 1 — Webinar → Blog Post
───────────────────────────────────────────────────── */
function WebinarToBlogSVG() {
  return (
    <svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <SharedDefs id="w2b" />
      <rect width="480" height="270" fill="url(#bg-w2b)" />

      {/* ── Source: monitor / screen ── */}
      <rect x="52" y="72" width="130" height="94" rx="8" fill="#2C3E52" stroke="#3D5166" strokeWidth="1.5" />
      {/* screen area */}
      <rect x="62" y="80" width="110" height="68" rx="4" fill="#1E2A3A" />
      {/* slide stripes on screen (presentation feel) */}
      <rect x="70" y="87" width="55" height="4" rx="2" fill="url(#accent-w2b)" opacity="0.6" />
      <rect x="70" y="97" width="90" height="3" rx="1.5" fill="#3D5166" />
      <rect x="70" y="104" width="82" height="3" rx="1.5" fill="#3D5166" />
      <rect x="70" y="111" width="88" height="3" rx="1.5" fill="#3D5166" />
      {/* play overlay circle */}
      <circle cx="155" cy="128" r="14" fill="rgba(255,59,48,0.18)" stroke="rgba(255,59,48,0.4)" strokeWidth="1" />
      <polygon points="150,121 150,135 163,128" fill="#FF3B30" opacity="0.85" />
      {/* stand */}
      <rect x="103" y="166" width="24" height="9" rx="2" fill="#3D5166" />
      <rect x="88" y="175" width="54" height="5" rx="2.5" fill="#3D5166" />
      {/* label */}
      <text x="117" y="200" fill="#8BA3B8" fontSize="11" textAnchor="middle" fontFamily="sans-serif" opacity="0.75">
        Webinar
      </text>

      {/* ── Flow arrow ── */}
      <FlowArrow id="w2b" cx={240} />

      {/* ── Output: document ── */}
      <rect x="298" y="72" width="110" height="132" rx="8" fill="#2C3E52" stroke="#3D5166" strokeWidth="1.5" />
      {/* dog-ear */}
      <polygon points="378,72 408,102 378,102" fill="#1E2A3A" />
      <line x1="378" y1="72" x2="378" y2="102" stroke="#3D5166" strokeWidth="1" />
      <line x1="378" y1="102" x2="408" y2="102" stroke="#3D5166" strokeWidth="1" />
      {/* gradient title bar */}
      <rect x="308" y="86" width="58" height="5" rx="2.5" fill="url(#accent-w2b)" opacity="0.75" />
      {/* body lines */}
      <rect x="308" y="100" width="80" height="3" rx="1.5" fill="#8BA3B8" opacity="0.45" />
      <rect x="308" y="109" width="73" height="3" rx="1.5" fill="#8BA3B8" opacity="0.4" />
      <rect x="308" y="118" width="78" height="3" rx="1.5" fill="#8BA3B8" opacity="0.4" />
      <rect x="308" y="127" width="62" height="3" rx="1.5" fill="#8BA3B8" opacity="0.35" />
      <line x1="308" y1="138" x2="388" y2="138" stroke="#3D5166" strokeWidth="0.8" opacity="0.6" />
      <rect x="308" y="146" width="52" height="3" rx="1.5" fill="#8BA3B8" opacity="0.3" />
      <rect x="308" y="155" width="68" height="3" rx="1.5" fill="#8BA3B8" opacity="0.3" />
      <rect x="308" y="164" width="45" height="3" rx="1.5" fill="#8BA3B8" opacity="0.25" />
      {/* label */}
      <text x="353" y="225" fill="#8BA3B8" fontSize="11" textAnchor="middle" fontFamily="sans-serif" opacity="0.75">
        Blog Post
      </text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────
   DIAGRAM 2 — Video → SOP (numbered steps)
───────────────────────────────────────────────────── */
function VideoToSOPSVG() {
  return (
    <svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <SharedDefs id="v2s" />
      <rect width="480" height="270" fill="url(#bg-v2s)" />

      {/* ── Source: video play button ── */}
      <circle cx="117" cy="135" r="56" fill="#2C3E52" stroke="#3D5166" strokeWidth="1.5" />
      <circle cx="117" cy="135" r="44" fill="#1E2A3A" />
      {/* play triangle */}
      <circle cx="117" cy="135" r="26" fill="rgba(255,59,48,0.15)" stroke="rgba(255,59,48,0.35)" strokeWidth="1.5" />
      <polygon points="109,124 109,146 130,135" fill="#FF3B30" opacity="0.9" />
      {/* label */}
      <text x="117" y="210" fill="#8BA3B8" fontSize="11" textAnchor="middle" fontFamily="sans-serif" opacity="0.75">
        Training Video
      </text>

      {/* ── Flow arrow ── */}
      <FlowArrow id="v2s" cx={240} />

      {/* ── Output: SOP numbered steps ── */}
      <rect x="290" y="70" width="130" height="138" rx="8" fill="#2C3E52" stroke="#3D5166" strokeWidth="1.5" />
      {/* Gradient header bar */}
      <rect x="290" y="70" width="130" height="22" rx="8" fill="url(#accent-v2s)" opacity="0.7" />
      <rect x="290" y="82" width="130" height="10" rx="0" fill="url(#accent-v2s)" opacity="0.7" />
      <text x="355" y="86" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif" opacity="0.9">
        STANDARD OPERATING PROCEDURE
      </text>
      {/* Steps */}
      {[
        { y: 106, num: "01", w: 72 },
        { y: 130, num: "02", w: 88 },
        { y: 154, num: "03", w: 64 },
        { y: 178, num: "04", w: 78 },
      ].map(({ y, num, w }) => (
        <g key={num}>
          <rect x="300" y={y - 10} width="16" height="16" rx="4" fill="rgba(255,59,48,0.2)" stroke="#FF3B30" strokeWidth="1" opacity="0.8" />
          <text x="308" y={y + 2} fill="#FF8C42" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
            {num}
          </text>
          <rect x="324" y={y - 4} width={w} height="4" rx="2" fill="#8BA3B8" opacity="0.45" />
          <rect x="324" y={y + 4} width={w - 10} height="3" rx="1.5" fill="#8BA3B8" opacity="0.3" />
        </g>
      ))}
      {/* label */}
      <text x="355" y="228" fill="#8BA3B8" fontSize="11" textAnchor="middle" fontFamily="sans-serif" opacity="0.75">
        SOP Document
      </text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────
   DIAGRAM 3 — YouTube → FAQ
───────────────────────────────────────────────────── */
function YouTubeToFAQSVG() {
  return (
    <svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <SharedDefs id="yt2f" />
      <rect width="480" height="270" fill="url(#bg-yt2f)" />

      {/* ── Source: YouTube-style player ── */}
      <rect x="42" y="85" width="148" height="100" rx="10" fill="#2C3E52" stroke="#3D5166" strokeWidth="1.5" />
      <rect x="52" y="93" width="128" height="74" rx="5" fill="#1E2A3A" />
      {/* red progress bar at bottom of player */}
      <rect x="52" y="160" width="128" height="4" rx="0" fill="#3D5166" />
      <rect x="52" y="160" width="48" height="4" rx="0" fill="#FF3B30" opacity="0.8" />
      {/* play button */}
      <rect x="96" y="114" width="44" height="30" rx="6" fill="rgba(255,59,48,0.85)" />
      <polygon points="108,121 108,137 128,129" fill="white" opacity="0.95" />
      {/* label */}
      <text x="116" y="204" fill="#8BA3B8" fontSize="11" textAnchor="middle" fontFamily="sans-serif" opacity="0.75">
        YouTube Video
      </text>

      {/* ── Flow arrow ── */}
      <FlowArrow id="yt2f" cx={240} />

      {/* ── Output: Q&A pairs ── */}
      {/* Q bubble */}
      <rect x="290" y="75" width="148" height="52" rx="10" fill="#2C3E52" stroke="#3D5166" strokeWidth="1.5" />
      {/* Q label chip */}
      <rect x="298" y="84" width="20" height="20" rx="5" fill="rgba(255,59,48,0.2)" stroke="#FF3B30" strokeWidth="1" />
      <text x="308" y="99" fill="#FF3B30" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
        Q
      </text>
      {/* Q content lines */}
      <rect x="326" y="88" width="100" height="4" rx="2" fill="#8BA3B8" opacity="0.5" />
      <rect x="326" y="98" width="82" height="4" rx="2" fill="#8BA3B8" opacity="0.4" />
      {/* tail */}
      <polygon points="305,127 298,138 316,127" fill="#2C3E52" stroke="#3D5166" strokeWidth="1" />

      {/* A bubble */}
      <rect x="290" y="148" width="148" height="52" rx="10" fill="#1E2A3A" stroke="#3D5166" strokeWidth="1.5" />
      {/* A label chip */}
      <rect x="298" y="157" width="20" height="20" rx="5" fill="rgba(255,140,66,0.2)" stroke="#FF8C42" strokeWidth="1" />
      <text x="308" y="172" fill="#FF8C42" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
        A
      </text>
      {/* A content lines */}
      <rect x="326" y="161" width="100" height="4" rx="2" fill="#8BA3B8" opacity="0.45" />
      <rect x="326" y="171" width="88" height="4" rx="2" fill="#8BA3B8" opacity="0.35" />
      {/* tail */}
      <polygon points="305,148 298,138 316,148" fill="#1E2A3A" stroke="#3D5166" strokeWidth="1" />

      {/* label */}
      <text x="364" y="220" fill="#8BA3B8" fontSize="11" textAnchor="middle" fontFamily="sans-serif" opacity="0.75">
        FAQ Document
      </text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────
   DIAGRAM 4 — Tool Comparison Grid
───────────────────────────────────────────────────── */
function Check({ cx, cy, val }: { cx: number; cy: number; val: boolean | null }) {
  if (val === true) return (
    <g>
      <circle cx={cx} cy={cy} r="9" fill="rgba(74,222,128,0.15)" />
      <text x={cx} y={cy + 4} fontSize="11" textAnchor="middle" fontFamily="sans-serif" fill="#4ADE80" fontWeight="bold">✓</text>
    </g>
  );
  if (val === false) return (
    <g>
      <circle cx={cx} cy={cy} r="9" fill="rgba(248,113,113,0.15)" />
      <text x={cx} y={cy + 4} fontSize="11" textAnchor="middle" fontFamily="sans-serif" fill="#F87171" fontWeight="bold">✕</text>
    </g>
  );
  return <rect x={cx - 9} y={cy - 2.5} width="18" height="5" rx="2.5" fill="rgba(255,140,66,0.4)" />;
}

function ToolComparisonSVG() {
  const tools: { name: string; cols: (boolean | null)[]; hi?: boolean }[] = [
    { name: "TubeScribed", cols: [true, true, true, true], hi: true },
    { name: "Tactiq",      cols: [true, null, false, false] },
    { name: "Otter.ai",    cols: [true, null, null,  false] },
    { name: "Descript",    cols: [true, true, null,  false] },
    { name: "NoteGPT",     cols: [false, false, false, false] },
    { name: "ChatGPT",     cols: [false, true, null, false] },
  ];
  const colXs = [196, 268, 340, 412];
  const colLabels = ["TRANSCRIPT", "CLEANUP", "CONTENT", "BRAND VOICE"];
  return (
    <svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="bg-tc" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#131B28" />
          <stop offset="100%" stopColor="#1E2A3A" />
        </linearGradient>
        <linearGradient id="accent-tc" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF3B30" />
          <stop offset="100%" stopColor="#FF8C42" />
        </linearGradient>
      </defs>
      <rect width="480" height="270" fill="url(#bg-tc)" />
      {/* Title */}
      <text x="240" y="24" fill="#E2E8F0" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
        YouTube Transcript Tools — Side-by-Side
      </text>
      {/* Column headers */}
      <text x="96" y="44" fill="#94A3B8" fontSize="7.5" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">TOOL</text>
      {colLabels.map((h, i) => (
        <text key={h} x={colXs[i]} y="44" fill="#94A3B8" fontSize="7.5" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">{h}</text>
      ))}
      <line x1="24" y1="50" x2="456" y2="50" stroke="#2D3F55" strokeWidth="1" />
      {/* Rows */}
      {tools.map((tool, ri) => {
        const cy = 50 + ri * 33 + 18;
        return (
          <g key={tool.name}>
            {tool.hi && <rect x="24" y={cy - 14} width="432" height="28" rx="5" fill="rgba(255,59,48,0.10)" stroke="rgba(255,59,48,0.28)" strokeWidth="1" />}
            <text x="96" y={cy + 4} fill={tool.hi ? "#FF8C42" : "#8BA3B8"} fontSize={tool.hi ? "10" : "9"} fontWeight={tool.hi ? "700" : "400"} textAnchor="middle" fontFamily="sans-serif">{tool.name}</text>
            {tool.cols.map((v, ci) => <Check key={ci} cx={colXs[ci]} cy={cy} val={v} />)}
            {!tool.hi && ri < tools.length - 1 && <line x1="24" y1={cy + 14} x2="456" y2={cy + 14} stroke="#2D3F55" strokeWidth="0.5" opacity="0.5" />}
          </g>
        );
      })}
      {/* Bottom accent bar */}
      <rect x="24" y="254" width="432" height="2" rx="1" fill="url(#accent-tc)" opacity="0.3" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────
   FALLBACK — generic category thumbnail
───────────────────────────────────────────────────── */
function CategoryFallbackSVG({ category }: { category: string }) {
  const label = category || "Article";
  return (
    <svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <SharedDefs id="fb" />
      <rect width="480" height="270" fill="url(#bg-fb)" />
      {/* Centered gradient circle */}
      <circle cx="240" cy="125" r="64" fill="rgba(255,59,48,0.08)" stroke="rgba(255,59,48,0.2)" strokeWidth="1.5" />
      <circle cx="240" cy="125" r="44" fill="rgba(255,59,48,0.12)" stroke="rgba(255,59,48,0.25)" strokeWidth="1" />
      {/* Play/document icon */}
      <polygon points="228,108 228,142 258,125" fill="url(#accent-fb)" opacity="0.8" />
      {/* Category label */}
      <rect x="186" y="200" width="108" height="22" rx="11" fill="rgba(255,59,48,0.15)" stroke="rgba(255,59,48,0.3)" strokeWidth="1" />
      <text x="240" y="215" fill="#FF8C42" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">
        {label}
      </text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────
   EXPORTED COMPONENT — maps slug → diagram
───────────────────────────────────────────────────── */
const SLUG_MAP: Record<string, React.ReactElement> = {
  "convert-webinar-to-blog-post": <WebinarToBlogSVG />,
  "video-to-sop-ai": <VideoToSOPSVG />,
  "youtube-to-faq-generator": <YouTubeToFAQSVG />,
  "best-youtube-transcript-tools-2026": <ToolComparisonSVG />,
};

export default function BlogThumbnail({
  slug,
  category,
}: {
  slug: string;
  category: string;
}) {
  return SLUG_MAP[slug] ?? <CategoryFallbackSVG category={category} />;
}
