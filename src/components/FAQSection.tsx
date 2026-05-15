interface FAQ {
  question: string;
  answer: string;
}

export default function FAQSection({ faqs }: { faqs: FAQ[] }) {
  return (
    <section className="mt-12 pt-8 border-t border-[#2D3F55]">
      <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="group bg-[#243447] border border-[#2D3F55] rounded-xl overflow-hidden"
          >
            <summary className="flex items-center justify-between p-5 cursor-pointer text-white font-medium hover:text-[#FF8C42] transition-colors list-none">
              {faq.question}
              <span className="text-[#FF3B30] group-open:rotate-180 transition-transform flex-shrink-0 ml-4">
                ▼
              </span>
            </summary>
            <div className="px-5 pb-5 text-[#94A3B8] text-sm leading-relaxed">{faq.answer}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
