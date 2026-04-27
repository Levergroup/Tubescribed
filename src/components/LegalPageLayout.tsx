import { GradientText } from "@/components/ui/GradientText";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  content: string;
}

export function LegalPageLayout({ title, lastUpdated, content }: LegalPageLayoutProps) {
  const sections = parseSections(content);

  return (
    <div className="min-h-screen bg-navy-900">
      <section className="py-16 lg:py-24 bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-navy-500 text-sm mb-3">Last updated: {lastUpdated}</p>
          <h1 className="font-syne font-bold text-4xl text-navy-100 mb-8">
            <GradientText>{title}</GradientText>
          </h1>

          <div className="prose-legal space-y-6">
            {sections.map((section, i) => (
              <div key={i}>
                {section.type === "h2" && (
                  <h2 className="font-syne font-bold text-navy-100 text-xl mt-10 mb-3">{section.content}</h2>
                )}
                {section.type === "h3" && (
                  <h3 className="font-syne font-semibold text-navy-100 text-base mt-6 mb-2">{section.content}</h3>
                )}
                {section.type === "p" && (
                  <p className="font-dm-sans text-navy-400 text-sm leading-relaxed">{section.content}</p>
                )}
                {section.type === "hr" && (
                  <hr className="border-navy-700 my-6" />
                )}
                {section.type === "bullet" && (
                  <ul className="space-y-1.5">
                    {section.items?.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2 shrink-0" />
                        <span className="font-dm-sans text-navy-400 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.type === "table" && (
                  <div className="overflow-x-auto rounded-xl border border-navy-700">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-navy-800 border-b border-navy-700">
                          {section.headers?.map((h) => (
                            <th key={h} className="text-left px-4 py-3 font-syne font-semibold text-navy-100 text-xs tracking-wide">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.rows?.map((row, ri) => (
                          <tr key={ri} className={`border-b border-navy-700 ${ri % 2 === 0 ? "bg-navy-900" : "bg-navy-800"}`}>
                            {row.map((cell, ci) => (
                              <td key={ci} className="px-4 py-3 font-dm-sans text-navy-400 text-xs">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {section.type === "bold-text" && (
                  <p className="font-dm-sans text-navy-300 text-sm leading-relaxed font-medium">{section.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

type Section =
  | { type: "h2" | "h3" | "p" | "hr" | "bold-text"; content: string; items?: never; headers?: never; rows?: never }
  | { type: "bullet"; items: string[]; content?: never; headers?: never; rows?: never }
  | { type: "table"; headers: string[]; rows: string[][]; content?: never; items?: never };

function parseSections(raw: string): Section[] {
  const lines = raw.split("\n");
  const sections: Section[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) { i++; continue; }

    if (line.startsWith("## ")) {
      sections.push({ type: "h2", content: line.replace("## ", "") });
      i++;
    } else if (line.startsWith("### ")) {
      sections.push({ type: "h3", content: line.replace("### ", "") });
      i++;
    } else if (line === "---") {
      sections.push({ type: "hr", content: "" });
      i++;
    } else if (line.startsWith("| ")) {
      const headers = line.split("|").filter(Boolean).map((s) => s.trim());
      const rows: string[][] = [];
      i++;
      if (lines[i]?.trim().startsWith("|---")) i++;
      while (i < lines.length && lines[i]?.trim().startsWith("|")) {
        rows.push(lines[i].split("|").filter(Boolean).map((s) => s.trim()));
        i++;
      }
      sections.push({ type: "table", headers, rows });
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i]?.trim().startsWith("- ")) {
        items.push(lines[i].trim().replace("- ", ""));
        i++;
      }
      sections.push({ type: "bullet", items });
    } else if (line.startsWith("**") && line.endsWith("**")) {
      sections.push({ type: "bold-text", content: line.replace(/\*\*/g, "") });
      i++;
    } else {
      const cleaned = line.replace(/\*\*/g, "");
      if (cleaned) sections.push({ type: "p", content: cleaned });
      i++;
    }
  }

  return sections;
}
