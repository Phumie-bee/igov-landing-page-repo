"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  ArrowRight,
  Play,
  CalendarCheck,
  Send,
  CheckCircle,
  Monitor,
  Users,
} from "lucide-react";

const demoTypes = [
  { label: "Virtual Meeting", value: "virtual" },
  { label: "Physical (On-site)", value: "physical" },
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

  // Success screen after scheduling
  if (submitted) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center px-6">
        <Card className="max-w-lg w-full border-zinc-200 shadow-xl">
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
    <div className="min-h-screen bg-zinc-50">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        {/* Back link */}
        {view !== "choose" && (
          <button
            onClick={() => setView("choose")}
            className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-800 mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
            Back to options
          </button>
        )}

        {/* ─── Option Chooser ─── */}
        {view === "choose" && (
          <>
            <div className="text-center mb-12">
              <span className="bg-[#079f6f]/10 text-[#056b4a] px-3 py-1 rounded-full font-semibold text-sm uppercase tracking-wider">
                Request a Demo
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mt-4 mb-4">
                See iGOV in Action
              </h1>
              <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                Choose how you'd like to experience the platform — watch a
                walkthrough video or schedule a live demo with our team.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Watch Video Card */}
              <Card
                className="border-zinc-200 hover:border-[#079f6f] transition-all hover:shadow-xl group cursor-pointer"
                onClick={() => setView("video")}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#079f6f]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#079f6f] transition-colors">
                    <Play className="w-8 h-8 text-[#079f6f] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">
                    Watch Demo Video
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                    Get a quick overview of iGOV's features and capabilities at
                    your own pace.
                  </p>
                  <span className="text-[#079f6f] font-semibold inline-flex items-center text-sm group-hover:gap-2 transition-all">
                    Watch Now
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </CardContent>
              </Card>

              {/* Schedule Demo Card */}
              <Card
                className="border-zinc-200 hover:border-[#079f6f] transition-all hover:shadow-xl group cursor-pointer"
                onClick={() => setView("schedule")}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#079f6f]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#079f6f] transition-colors">
                    <CalendarCheck className="w-8 h-8 text-[#079f6f] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">
                    Schedule a Demo
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                    Book a live session — virtual or on-site — with our team for
                    a personalised walkthrough.
                  </p>
                  <span className="text-[#079f6f] font-semibold inline-flex items-center text-sm group-hover:gap-2 transition-all">
                    Schedule Now
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </CardContent>
              </Card>
            </div>
          </>
        )}

        {/* ─── Video View ─── */}
        {view === "video" && (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-3">
                Demo Video
              </h2>
              <p className="text-zinc-600">
                Watch how iGOV transforms public sector operations.
              </p>
            </div>

            <Card className="border-zinc-200 shadow-xl overflow-hidden">
              <div className="relative w-full aspect-video bg-zinc-900 flex items-center justify-center">
                {/* Replace the src below with your actual demo video */}
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="iGOV Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Card>

            <div className="text-center mt-8">
              <p className="text-zinc-600 mb-4">
                Want a personalised walkthrough instead?
              </p>
              <Button
                className="bg-[#079f6f] text-white hover:bg-[#028751] font-semibold group"
                onClick={() => setView("schedule")}
              >
                Schedule a Live Demo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        )}

        {/* ─── Schedule Form ─── */}
        {view === "schedule" && (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-3">
                Schedule a Demo
              </h2>
              <p className="text-zinc-600">
                Fill out the form and we'll set up a live demo session for you.
              </p>
            </div>

            <Card className="border-zinc-200 shadow-xl">
              <CardContent className="p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-zinc-800 mb-2"
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
                      className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-colors focus:border-[#079f6f] focus:ring-2 focus:ring-[#079f6f]/20"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-zinc-800 mb-2"
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
                      className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-colors focus:border-[#079f6f] focus:ring-2 focus:ring-[#079f6f]/20"
                    />
                  </div>

                  {/* Organization */}
                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-sm font-semibold text-zinc-800 mb-2"
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
                      className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-colors focus:border-[#079f6f] focus:ring-2 focus:ring-[#079f6f]/20"
                    />
                  </div>

                  {/* Demo Type */}
                  <div>
                    <label className="block text-sm font-semibold text-zinc-800 mb-3">
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
                            className={`flex items-center gap-3 rounded-lg border-2 px-4 py-3.5 text-sm font-medium transition-all ${
                              selected
                                ? "border-[#079f6f] bg-[#079f6f]/5 text-[#079f6f]"
                                : "border-zinc-200 text-zinc-600 hover:border-zinc-300"
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
                      className="block text-sm font-semibold text-zinc-800 mb-2"
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
                      className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-colors focus:border-[#079f6f] focus:ring-2 focus:ring-[#079f6f]/20 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading || !demoType}
                    className="w-full bg-[#079f6f] text-white hover:bg-[#028751] text-base font-semibold h-14 group disabled:opacity-70"
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
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
