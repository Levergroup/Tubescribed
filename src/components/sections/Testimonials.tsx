"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "I used to spend 3–4 hours every week turning YouTube content into blog posts and emails. TubeScribed does it in seconds. I honestly can't believe I waited this long.",
    name: "Marcus T.",
    role: "YouTube Creator & Course Builder",
    stars: 5,
  },
  {
    quote: "We manage content for 11 agency clients. The brand workspace feature is a game-changer — every output sounds exactly like each client. Our team size stayed the same but our output tripled.",
    name: "Sarah M.",
    role: "Founder, Social Content Agency",
    stars: 5,
  },
  {
    quote: "As a business coach, I used to re-explain the same frameworks over and over. Now I generate SOPs from my coaching calls and send those instead. My clients actually implement things now.",
    name: "David K.",
    role: "Business Coach & Consultant",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 bg-navy-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">What Users Say</p>
          <h2 className="font-syne font-bold text-3xl lg:text-4xl text-navy-100">
            Real results from real users
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-navy-900 border border-navy-700 rounded-2xl p-6 flex flex-col"
            >
              <Stars count={t.stars} />
              <p className="font-dm-sans text-navy-300 text-sm leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-syne font-semibold text-navy-100 text-sm">{t.name}</p>
                <p className="font-dm-sans text-navy-500 text-xs mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
