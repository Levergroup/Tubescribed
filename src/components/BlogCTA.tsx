interface Props {
  variant?: 'default' | 'final';
}

export default function BlogCTA({ variant = 'default' }: Props) {
  return (
    <div className="my-8 p-6 bg-[#1E2A3A] rounded-xl">
      {variant === 'final' ? (
        <>
          <p className="text-white font-semibold text-lg mb-1">
            Ready to stop doing this manually?
          </p>
          <p className="text-gray-300 text-sm mb-4">
            TubeScribed turns any YouTube video into a clean transcript and 15 branded business
            assets — in seconds. Try it free, no credit card needed.
          </p>
        </>
      ) : (
        <>
          <p className="text-white font-semibold mb-1">Stop copy-pasting your transcripts.</p>
          <p className="text-gray-300 text-sm mb-4">
            TubeScribed turns any YouTube video into a blog post, SOP, email sequence, or social
            content — in your brand voice.
          </p>
        </>
      )}
      <a
        href="https://app.tubescribed.com/signup"
        className="inline-block px-5 py-2.5 rounded-lg font-semibold text-white bg-[#FF3B30] hover:bg-[#E63528] transition-colors text-sm"
      >
        Try Free — No Credit Card →
      </a>
    </div>
  );
}
