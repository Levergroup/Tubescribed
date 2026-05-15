interface Props {
  author: string;
  authorTitle: string;
}

export default function AuthorCard({ author, authorTitle }: Props) {
  return (
    <div className="mt-12 pt-8 border-t border-[#2D3F55] flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF3B30] to-[#FF8C42] flex items-center justify-center text-white font-bold flex-shrink-0">
        {author.charAt(0)}
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
