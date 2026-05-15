interface Props {
  content: string;
}

export default function TableOfContents({ content }: Props) {
  const headings = content
    .split('\n')
    .filter((line) => line.startsWith('## '))
    .map((line) => ({
      text: line.replace('## ', ''),
      id: line
        .replace('## ', '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-'),
    }));

  if (headings.length < 2) return null;

  return (
    <nav className="bg-[#243447] border border-[#2D3F55] rounded-xl p-5">
      <p className="text-white font-semibold text-sm mb-4">In This Article</p>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className="text-[#94A3B8] text-sm hover:text-[#FF3B30] transition-colors block py-0.5"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
