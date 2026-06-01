interface FAQ {
  question: string;
  answer: string;
}

export default function FAQSection({ faqs }: { faqs: FAQ[] }) {
  return (
    <section className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="group bg-gray-50 border border-gray-200 rounded-xl overflow-hidden"
          >
            <summary className="flex items-center justify-between p-5 cursor-pointer text-gray-900 font-medium hover:text-[#FF3B30] transition-colors list-none">
              {faq.question}
              <span className="text-[#FF3B30] group-open:rotate-180 transition-transform flex-shrink-0 ml-4 text-xs">
                ▼
              </span>
            </summary>
            <div className="px-5 pb-5 pt-4 text-gray-600 text-sm leading-relaxed border-t border-gray-200">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
