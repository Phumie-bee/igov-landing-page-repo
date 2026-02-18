"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  ArrowRight,
  Play,
  CalendarCheck,
  Send,
  CheckCircle,
  Check,
  Monitor,
  Users,
} from "lucide-react";
import DemoImage from "@/public/demo_image.png";

const demoTypes = [
  { label: "Virtual Meeting", value: "virtual" },
  { label: "Physical (On-site)", value: "physical" },
];

const scheduleBenefits = [
  "Personalised walkthrough",
  "Q&A with our experts",
  "Virtual or on-site session",
];

export default function RequestDemoPage() {
  const [view, setView] = useState<"choose" | "video" | "schedule">("choose");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [demoType, setDemoType] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  // ── Success screen ──
  if (submitted) {
    return (
      <div className="min-h-screen bg-linear-to-b from-[#f0faf6] via-zinc-50 to-white flex items-center justify-center px-6">
        <Card className="max-w-lg w-full border-zinc-200/80 shadow-xl rounded-2xl">
          <CardContent className="p-10 text-center">
            <div className="w-16 h-16 bg-[#079f6f]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-[#079f6f]" />
            </div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-3">
              Demo Scheduled!
            </h2>
            <p className="text-zinc-600 mb-8">
              We'll reach out to{" "}
              <span className="font-semibold text-zinc-800">{email}</span> to
              confirm your {demoType === "virtual" ? "virtual" : "on-site"} demo
              session.
            </p>
            <Button
              className="bg-[#079f6f] text-white hover:bg-[#028751] font-semibold group"
              asChild
            >
              <Link href="/">
                Back to Home
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-[#f0faf6] via-zinc-50 to-white">
      {/* Top nav */}
      <div className="flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-zinc-400 hover:text-zinc-700 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        {view !== "choose" && (
          <button
            onClick={() => setView("choose")}
            className="inline-flex items-center text-sm font-medium text-zinc-400 hover:text-zinc-700 transition-colors"
          >
            All Options
          </button>
        )}
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-24">
        {/* ═══ Option Chooser ═══ */}
        {view === "choose" && (
          <div className="animate-fade-in-up">
            {/* Header */}
            <div className="text-center mb-14 pt-6 md:pt-10">
              <span className="inline-block bg-[#079f6f]/10 text-[#056b4a] px-4 py-1.5 rounded-full font-semibold text-xs uppercase tracking-widest mb-5">
                Request a Demo
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-zinc-900 leading-tight mb-5">
                See <span className="font-extrabold">iGOV</span> in Action
              </h1>
              <p className="text-base md:text-lg text-zinc-500 max-w-xl mx-auto leading-relaxed">
                Experience the platform your way.
                <br />
                Watch a walkthrough or schedule a live session with our team.
              </p>
            </div>

            {/* Two Cards */}
            <div className="grid md:grid-cols-2 gap-7 max-w-4xl mx-auto items-stretch">
              {/* ── Watch Video Card ── */}
              <div
                onClick={() => setView("video")}
                className="group cursor-pointer rounded-2xl border border-zinc-200/80 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.03] overflow-hidden flex flex-col"
              >
                {/* Thumbnail */}
                <div className="relative mx-5 mt-5 rounded-xl overflow-hidden bg-zinc-100">
                  <div className="aspect-16/10">
                    <Image
                      src={DemoImage}
                      alt="iGOV Dashboard Preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-[#079f6f] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play
                        className="w-6 h-6 text-white ml-0.5"
                        fill="white"
                      />
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="p-6 pt-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-zinc-900 mb-1.5">
                    Watch Demo Video
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-5">
                    Get a quick overview of iGOV's features and capabilities at
                    your own pace.
                  </p>
                  <div className="mt-auto">
                    <span className="text-[#079f6f] font-semibold inline-flex items-center text-sm group-hover:gap-2 transition-all">
                      Watch Now
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>

              {/* ── Schedule Demo Card ── */}
              <div
                onClick={() => setView("schedule")}
                className="group cursor-pointer rounded-2xl border border-zinc-200/80 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.03] overflow-hidden flex flex-col"
              >
                <div className="p-7 flex flex-col flex-1">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-3.5 mb-7">
                    <div className="w-12 h-12 bg-[#079f6f]/10 rounded-xl flex items-center justify-center shrink-0">
                      <CalendarCheck className="w-6 h-6 text-[#079f6f]" />
                    </div>
                    <h3 className="text-lg font-bold text-zinc-900">
                      Schedule a Live Demo
                    </h3>
                  </div>

                  {/* Benefits checklist */}
                  <div className="space-y-4 mb-8 flex-1">
                    {scheduleBenefits.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#079f6f]/10 flex items-center justify-center shrink-0">
                          <Check
                            className="w-3 h-3 text-[#079f6f]"
                            strokeWidth={3}
                          />
                        </div>
                        <span className="text-sm text-zinc-600">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className="w-full bg-[#079f6f] text-white hover:bg-[#028751] font-semibold h-12 rounded-xl text-sm group/btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setView("schedule");
                    }}
                  >
                    Schedule Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═══ Video View ═══ */}
        {view === "video" && (
          <div className="max-w-3xl mx-auto animate-fade-in-up pt-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-3">
                Demo Video
              </h2>
              <p className="text-zinc-500">
                Watch how iGOV transforms public sector operations.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-zinc-200/80 shadow-lg bg-white">
              <div className="relative w-full aspect-video bg-zinc-900">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="iGOV Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="mt-10 text-center space-y-4">
              <p className="text-zinc-600">
                Want a personalised walkthrough instead?
              </p>
              <Button
                className="bg-[#079f6f] text-white hover:bg-[#028751] font-semibold px-7 h-11 rounded-xl group"
                onClick={() => setView("schedule")}
              >
                Schedule a Live Demo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        )}

        {/* ═══ Schedule Form ═══ */}
        {view === "schedule" && (
          <div className="max-w-2xl mx-auto animate-fade-in-up pt-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-3">
                Schedule a Demo
              </h2>
              <p className="text-zinc-500">
                Fill out the form and we'll set up a live demo session for you.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200/80 bg-white shadow-lg">
              <div className="p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-zinc-700 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-all focus:border-[#079f6f] focus:ring-2 focus:ring-[#079f6f]/20 focus:bg-white"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-zinc-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@organization.gov"
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-all focus:border-[#079f6f] focus:ring-2 focus:ring-[#079f6f]/20 focus:bg-white"
                    />
                  </div>

                  {/* Organization */}
                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-sm font-semibold text-zinc-700 mb-2"
                    >
                      Organization
                    </label>
                    <input
                      id="organization"
                      type="text"
                      required
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="Ministry of Digital Economy"
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-all focus:border-[#079f6f] focus:ring-2 focus:ring-[#079f6f]/20 focus:bg-white"
                    />
                  </div>

                  {/* Demo Type */}
                  <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-3">
                      Demo Format
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {demoTypes.map((dt) => {
                        const selected = demoType === dt.value;
                        const Icon = dt.value === "virtual" ? Monitor : Users;
                        return (
                          <button
                            key={dt.value}
                            type="button"
                            onClick={() => setDemoType(dt.value)}
                            className={`flex items-center gap-3 rounded-xl border-2 px-4 py-3.5 text-sm font-medium transition-all ${
                              selected
                                ? "border-[#079f6f] bg-[#079f6f]/5 text-[#079f6f]"
                                : "border-zinc-200 text-zinc-500 hover:border-zinc-300"
                            }`}
                          >
                            <Icon className="w-5 h-5 shrink-0" />
                            {dt.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-zinc-700 mb-2"
                    >
                      Additional Notes{" "}
                      <span className="text-zinc-400 font-normal">
                        (optional)
                      </span>
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      placeholder="Any specific areas you'd like us to cover?"
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-all focus:border-[#079f6f] focus:ring-2 focus:ring-[#079f6f]/20 focus:bg-white resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading || !demoType}
                    className="w-full bg-[#079f6f] text-white hover:bg-[#028751] text-base font-semibold h-13 rounded-xl group disabled:opacity-60"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      <>
                        Schedule Demo
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
