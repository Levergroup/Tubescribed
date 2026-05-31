interface Props {
  author: string;
  authorTitle: string;
}

export default function AuthorCard({ author, authorTitle }: Props) {
  return (
    <div className="mt-12 pt-8 border-t border-[#2D3F55] flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-[#0D1829] flex items-center justify-center flex-shrink-0">
        <svg width="30" height="30" viewBox="0 0 40 40" fill="none" aria-hidden="true">
          <mask id="ts-authorcard">
            <rect width="40" height="40" fill="white" />
            <path d="M10.5 30 C14.5 28.5 17.5 27.3 21 26.8 C24 26.3 26.5 24.6 29.8 23.6 C31.6 23.1 32.2 24.6 30.8 25.6 C27.8 27.6 24.5 26.6 21 27.6 C17 28.7 14 30 10.5 30 Z" fill="black" />
          </mask>
          <path d="M9.9 10.2 Q9.9 6.8 12.78 8.61 L31.82 20.59 Q34.7 22.4 31.74 24.08 L12.86 34.82 Q9.9 36.5 9.9 33.1 Z" fill="#FF3B30" mask="url(#ts-authorcard)" />
        </svg>
      </div>
      <div>
        <p className="text-white font-semibold">{author}</p>
        <p className="text-[#94A3B8] text-sm">{authorTitle}</p>
        <p className="text-[#94A3B8] text-sm mt-2">
          The TubeScribed team helps creators, agencies, and coaches turn YouTube content into
          business assets using AI.
        </p>
      </div>
    </div>
  );
}
