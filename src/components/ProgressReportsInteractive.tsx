"use client";
import { useState, useEffect, useRef } from "react";

const SCORE_TARGETS = [47, 112, 203];

export function TimeSavedCalculator() {
  const [videos, setVideos] = useState(10);
  const totalMins = videos * 45;
  const hrs = Math.floor(totalMins / 60);
  const mins = totalMins % 60;
  const hoursDisplay = mins > 0 ? `${hrs}h ${mins}min` : `${hrs}h`;
  const yearHrs = Math.round((totalMins / 60) * 12);
  const piecesPerMonth = videos * 5;

  return (
    <div className="bg-navy-800 border border-navy-700 rounded-2xl p-8 lg:p-10">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <label className="font-syne font-semibold text-navy-100 text-base">
            Videos processed per month
          </label>
          <span className="font-syne font-bold text-3xl gradient-text">{videos}</span>
        </div>
        <input
          type="range"
          min={1}
          max={100}
          value={videos}
          onChange={(e) => setVideos(Number(e.target.value))}
          className="w-full h-2 rounded-full cursor-pointer"
          style={{ accentColor: "#FF3B30" }}
        />
        <div className="flex justify-between text-navy-500 text-xs mt-2 font-dm-sans">
          <span>1 video</span>
          <span>100 videos</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Hours saved / month", value: hoursDisplay },
          { label: "Hours back per year", value: `${yearHrs}h` },
          { label: "Library pieces / month", value: `~${piecesPerMonth}` },
        ].map(({ label, value }) => (
          <div key={label} className="bg-navy-900 border border-navy-700 rounded-xl p-5 text-center">
            <p className="font-dm-sans text-navy-400 text-xs uppercase tracking-wider mb-2">{label}</p>
            <p className="font-syne font-bold text-3xl text-navy-100">{value}</p>
          </div>
        ))}
      </div>
      <p className="font-dm-sans text-navy-500 text-xs mt-5 text-center">
        Based on 45 min average manual processing time per video · ~5 AI outputs per transcript
      </p>
    </div>
  );
}

export function LibraryScoreCounter() {
  const [started, setStarted] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const steps = 50;
    const interval = 1600 / steps;
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const eased = 1 - Math.pow(1 - frame / steps, 3);
      setCounts(SCORE_TARGETS.map((t) => Math.round(t * eased)));
      if (frame >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [started]);

  const milestones = [
    { month: "Month 1", label: "First report" },
    { month: "Month 3", label: "Momentum builds" },
    { month: "Month 6", label: "Compound asset" },
  ];

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {milestones.map((m, i) => (
        <div
          key={m.month}
          className="bg-navy-900 border border-navy-700 rounded-2xl p-6 text-center hover:border-brand-red transition-colors duration-300"
        >
          <p className="font-dm-sans text-navy-400 text-xs uppercase tracking-wider mb-4">{m.month}</p>
          <p className="font-syne font-bold text-6xl text-navy-100 mb-1 tabular-nums">{counts[i]}</p>
          <p className="font-dm-sans text-navy-500 text-xs mb-3">content pieces</p>
          <span className="inline-block bg-navy-800 border border-navy-700 text-brand-red text-xs px-3 py-1 rounded-full font-medium">
            {m.label}
          </span>
        </div>
      ))}
    </div>
  );
}
