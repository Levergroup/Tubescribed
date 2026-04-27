"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { APP_URL } from "@/lib/constants";
import { DollarSign, Clock, TrendingUp, Zap } from "lucide-react";

function Slider({ label, value, min, max, step, unit, onChange }: {
  label: string; value: number; min: number; max: number; step: number; unit: string; onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="font-dm-sans text-navy-300 text-sm">{label}</label>
        <span className="font-syne font-bold text-navy-100 text-sm">{value} {unit}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 bg-navy-700 rounded-full appearance-none cursor-pointer accent-brand-red"
      />
      <div className="flex justify-between mt-1">
        <span className="text-navy-600 text-xs">{min}</span>
        <span className="text-navy-600 text-xs">{max}</span>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, sub, highlight }: {
  icon: React.ElementType; label: string; value: string; sub?: string; highlight?: boolean;
}) {
  return (
    <div className={`bg-navy-800 border rounded-2xl p-6 ${highlight ? "border-brand-red/50" : "border-navy-700"}`}>
      <div className="flex items-center gap-3 mb-3">
        <Icon size={18} className={highlight ? "text-brand-red" : "text-navy-400"} />
        <p className="font-dm-sans text-navy-400 text-sm">{label}</p>
      </div>
      <p className={`font-syne font-bold text-2xl ${highlight ? "text-brand-red" : "text-navy-100"}`}>{value}</p>
      {sub && <p className="font-dm-sans text-navy-500 text-xs mt-1">{sub}</p>}
    </div>
  );
}

export function ROICalculatorClient() {
  const [videosPerMonth, setVideosPerMonth] = useState(8);
  const [minutesPerVideo, setMinutesPerVideo] = useState(20);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [outputsPerVideo, setOutputsPerVideo] = useState(3);

  const manualMinutesPerVideo = minutesPerVideo * 0.5;
  const totalManualHours = (videosPerMonth * manualMinutesPerVideo) / 60;
  const manualCostPerMonth = totalManualHours * hourlyRate;
  const outputsProduced = videosPerMonth * outputsPerVideo;
  const tubescribedCost = 19;
  const monthlySavings = manualCostPerMonth - tubescribedCost;
  const roi = ((monthlySavings / tubescribedCost) * 100).toFixed(0);

  const fmt = (n: number) => n.toLocaleString("en-US", { maximumFractionDigits: 0 });

  return (
    <div className="min-h-screen bg-navy-900">
      <section className="py-24 lg:py-32 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-4">
            ROI Calculator
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-syne font-bold text-4xl lg:text-5xl text-navy-100 mb-6 leading-tight">
            How much is manual transcription <GradientText>costing you?</GradientText>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="font-dm-sans text-navy-400 text-xl leading-relaxed max-w-2xl mx-auto">
            Adjust the sliders below to see your exact hours lost, cost, and ROI from switching to TubeScribed.
          </motion.p>
        </div>
      </section>

      <section className="pb-32 bg-navy-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-navy-800 border border-navy-700 rounded-2xl p-7 space-y-7">
              <h2 className="font-syne font-bold text-navy-100 text-lg">Your situation</h2>
              <Slider label="Videos per month" value={videosPerMonth} min={1} max={50} step={1} unit="videos" onChange={setVideosPerMonth} />
              <Slider label="Average video length" value={minutesPerVideo} min={5} max={60} step={5} unit="min" onChange={setMinutesPerVideo} />
              <Slider label="Your hourly rate (or team cost)" value={hourlyRate} min={15} max={200} step={5} unit="$/hr" onChange={setHourlyRate} />
              <Slider label="Content outputs needed per video" value={outputsPerVideo} min={1} max={15} step={1} unit="outputs" onChange={setOutputsPerVideo} />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="space-y-4">
              <h2 className="font-syne font-bold text-navy-100 text-lg">Your results</h2>
              <div className="grid grid-cols-2 gap-4">
                <StatCard icon={Clock} label="Manual hours/month" value={`${fmt(totalManualHours)}h`} sub={`~30 min/video to transcribe`} />
                <StatCard icon={DollarSign} label="Manual cost/month" value={`$${fmt(manualCostPerMonth)}`} sub={`At $${hourlyRate}/hr`} />
                <StatCard icon={Zap} label="Outputs TubeScribed produces" value={`${fmt(outputsProduced)}`} sub={`${outputsPerVideo} per video`} />
                <StatCard icon={TrendingUp} label="Monthly savings" value={`$${fmt(Math.max(0, monthlySavings))}`} sub={`TubeScribed Pro is $19/mo`} highlight />
              </div>

              <div className="bg-navy-800 border border-brand-red/30 rounded-2xl p-6 text-center">
                <p className="font-dm-sans text-navy-400 text-sm mb-1">Your estimated ROI with TubeScribed</p>
                <p className="font-syne font-bold text-5xl text-brand-red">{Number(roi) > 0 ? `${roi}%` : "—"}</p>
                <p className="font-dm-sans text-navy-500 text-xs mt-2">
                  {Number(roi) > 0
                    ? `$${fmt(Math.max(0, monthlySavings))}/month saved vs $19/month cost`
                    : "Increase videos or hourly rate to see ROI"}
                </p>
              </div>

              <div className="text-center">
                <Button href={`${APP_URL}/signup`} variant="primary" className="w-full py-4 text-lg">
                  Start Saving — Try Free
                </Button>
                <p className="font-dm-sans text-navy-500 text-xs mt-2">1 free transcript, no credit card.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
