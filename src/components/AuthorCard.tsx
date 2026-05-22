interface Props {
  author: string;
  authorTitle: string;
}

export default function AuthorCard({ author, authorTitle }: Props) {
  return (
    <div className="mt-12 pt-8 border-t border-[#2D3F55] flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-[#0D1829] flex items-center justify-center flex-shrink-0">
        <svg width="30" height="30" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          <path d="M8 4.5C5.5 4.5 5 6.5 5 8V28C5 30 5.5 31.5 8 31.5C9.5 31.5 10.5 31 32 19.5C33.5 18.8 34 18.4 34 18C34 17.6 33.5 17.2 32 16.5C10.5 5 9.5 4.5 8 4.5Z" fill="#FF3B30"/>
          <path d="M5 21C8.5 19.5 15 18 23 19C28.5 19.7 31.5 19.3 34.5 18.7V20.5C31.5 21.1 28.5 21.5 23 20.8C15 19.8 8.5 21.3 5 22.8Z" fill="#0D1829"/>
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
