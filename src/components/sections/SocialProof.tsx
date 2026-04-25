import { METRICS } from "@/lib/constants";

export function SocialProof() {
  return (
    <section className="py-12 bg-navy-800 border-t border-b border-navy-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          <p className="text-navy-400 text-sm font-dm-sans shrink-0 text-center sm:text-left">Trusted by content creators,<br className="hidden sm:block" /> agencies &amp; coaches</p>
          <div className="w-px h-8 bg-navy-700 hidden sm:block shrink-0" />
          <div className="flex gap-3 overflow-x-auto pb-1 sm:pb-0 no-scrollbar w-full sm:w-auto">
            {METRICS.map((metric) => (<span key={metric} className="shrink-0 bg-navy-900 border border-navy-700 text-navy-100 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap">{metric}</span>))}
          </div>
        </div>
      </div>
    </section>
  );
}
