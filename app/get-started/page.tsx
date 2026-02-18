"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Send, CheckCircle } from "lucide-react";
import Link from "next/link";

const contactReasons = [
  "Request a Demo",
  "General Inquiry",
  "Partnership Opportunity",
  "Technical Support",
  "Pricing Information",
  "Media / Press Inquiry",
];

export default function GetStartedPage() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center px-6 pt-20">
        <Card className="max-w-lg w-full border-zinc-200 shadow-xl">
          <CardContent className="p-10 text-center">
            <div className="w-16 h-16 bg-[#079f6f]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-[#079f6f]" />
            </div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-3">
              Thank You!
            </h2>
            <p className="text-zinc-600 mb-8">
              We've received your message and will get back to you shortly at{" "}
              <span className="font-semibold text-zinc-800">{email}</span>.
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
    <div className="min-h-screen bg-zinc-50 pt-20">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="bg-[#079f6f]/10 text-[#056b4a] px-3 py-1 rounded-full font-semibold text-sm uppercase tracking-wider">
            Get Started
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mt-4 mb-4">
            Let's Get You Started
          </h1>
          <p className="text-lg text-zinc-600 max-w-xl mx-auto">
            Fill out the form below and our team will reach out to help you get
            the most out of iGOV.
          </p>
        </div>

        {/* Form Card */}
        <Card className="border-zinc-200 shadow-xl">
          <CardContent className="p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
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

              {/* Reason Dropdown */}
              <div>
                <label
                  htmlFor="reason"
                  className="block text-sm font-semibold text-zinc-800 mb-2"
                >
                  Reason for Contact
                </label>
                <select
                  id="reason"
                  required
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition-colors focus:border-[#079f6f] focus:ring-2 focus:ring-[#079f6f]/20 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2371717a%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-size-[16px] bg-position-[right_12px_center] bg-no-repeat"
                >
                  <option value="" disabled>
                    Select a reason...
                  </option>
                  {contactReasons.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              {/* Details Textarea */}
              <div>
                <label
                  htmlFor="details"
                  className="block text-sm font-semibold text-zinc-800 mb-2"
                >
                  Additional Details
                </label>
                <textarea
                  id="details"
                  required
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  rows={5}
                  placeholder="Tell us more about what you're looking for..."
                  className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-colors focus:border-[#079f6f] focus:ring-2 focus:ring-[#079f6f]/20 resize-none"
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                disabled={loading}
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
                    Submit
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
