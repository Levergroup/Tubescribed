interface Props {
  author: string;
  authorTitle: string;
}

export default function AuthorCard({ author, authorTitle }: Props) {
  return (
    <div className="mt-12 pt-8 border-t border-[#2D3F55] flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-[#0D1829] flex items-center justify-center flex-shrink-0">
        <svg width="30" height="30" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          <path d="M8 4C5 4 4.5 6.5 4.5 8L4.5 28C4.5 29.5 5 32 8 32C10 32 11 31.3 32 19.8C33.5 19 34.5 18.5 34.5 18C34.5 17.5 33.5 17 32 16.2C11 4.7 10 4 8 4Z" fill="#FF3B30"/>
          <path d="M1.5 22.5C7 19.5 14 18 21.5 19.5C27 20.5 31 19.8 34 19C33 20.5 30 22.8 22 22C14 21.2 7 24 1.5 26C1 24.5 1 23 1.5 22.5Z" fill="#0D1829"/>
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
