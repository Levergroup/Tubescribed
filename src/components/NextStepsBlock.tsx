interface NextStep {
  label: string;
  description: string;
  href: string;
}

interface Props {
  steps: NextStep[];
}

export default function NextStepsBlock({ steps = [] }: Props) {
  if (!steps.length) return null;
  return (
    <div className="my-12 p-6 bg-[#243447] border border-[#2D3F55] rounded-xl">
      <h2 className="text-white font-bold text-lg mb-4">What to Do Next</h2>
      <ul className="space-y-3">
        {steps.map((step, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-[#FF3B30] font-bold mt-0.5">→</span>
            <div>
              <a href={step.href} className="text-white font-medium hover:text-[#FF8C42]">
                {step.label}
              </a>
              <p className="text-[#94A3B8] text-sm">{step.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
