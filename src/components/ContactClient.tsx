"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";
import { CheckCircle2, Mail, MessageCircle } from "lucide-react";

export function ContactClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    if (!name || !email || !message) return;
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-navy-900">
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">
            Contact
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-syne font-bold text-4xl lg:text-5xl text-navy-100 mb-6 leading-tight">
            We&apos;d love to <GradientText>hear from you</GradientText>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="font-dm-sans text-navy-400 text-xl leading-relaxed">
            Support questions, partnership inquiries, or just want to say hi — send us a message and we&apos;ll reply within one business day.
          </motion.p>
        </div>
      </section>

      <section className="pb-32 bg-navy-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="flex items-start gap-4 bg-navy-800 border border-navy-700 rounded-2xl p-5">
              <Mail size={18} className="text-brand-red shrink-0 mt-0.5" />
              <div>
                <p className="font-syne font-semibold text-navy-100 text-sm mb-1">Email support</p>
                <a href="mailto:support@tubescribed.com" className="font-dm-sans text-navy-400 text-sm hover:text-navy-100 transition-colors">support@tubescribed.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-navy-800 border border-navy-700 rounded-2xl p-5">
              <MessageCircle size={18} className="text-brand-red shrink-0 mt-0.5" />
              <div>
                <p className="font-syne font-semibold text-navy-100 text-sm mb-1">Response time</p>
                <p className="font-dm-sans text-navy-400 text-sm">Within 1 business day</p>
              </div>
            </div>
          </div>

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-navy-800 border border-navy-700 rounded-2xl p-10 text-center">
              <CheckCircle2 size={40} className="text-green-400 mx-auto mb-4" />
              <h2 className="font-syne font-bold text-navy-100 text-xl mb-2">Message sent!</h2>
              <p className="font-dm-sans text-navy-400 text-sm">We&apos;ll get back to you within one business day.</p>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-navy-800 border border-navy-700 rounded-2xl p-7 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-dm-sans text-navy-300 text-sm mb-2 block">Name</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Your name" className="w-full bg-navy-900 border border-navy-600 rounded-xl px-4 py-3 text-navy-100 placeholder-navy-500 text-sm focus:outline-none focus:border-brand-red transition-colors" />
                </div>
                <div>
                  <label className="font-dm-sans text-navy-300 text-sm mb-2 block">Email</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your@email.com" className="w-full bg-navy-900 border border-navy-600 rounded-xl px-4 py-3 text-navy-100 placeholder-navy-500 text-sm focus:outline-none focus:border-brand-red transition-colors" />
                </div>
              </div>
              <div>
                <label className="font-dm-sans text-navy-300 text-sm mb-2 block">Subject</label>
                <select value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full bg-navy-900 border border-navy-600 rounded-xl px-4 py-3 text-navy-100 text-sm focus:outline-none focus:border-brand-red transition-colors appearance-none">
                  <option value="">Select a topic</option>
                  <option value="support">Technical support</option>
                  <option value="billing">Billing question</option>
                  <option value="agency">Agency / team plan</option>
                  <option value="partnership">Partnership inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="font-dm-sans text-navy-300 text-sm mb-2 block">Message</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} placeholder="Tell us what you need..." className="w-full bg-navy-900 border border-navy-600 rounded-xl px-4 py-3 text-navy-100 placeholder-navy-500 text-sm focus:outline-none focus:border-brand-red transition-colors resize-none" />
              </div>
              <button onClick={handleSubmit} disabled={!name || !email || !message} className="btn-gradient text-white font-semibold px-6 py-3 rounded-xl w-full disabled:opacity-40 disabled:cursor-not-allowed text-sm">
                Send Message
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
