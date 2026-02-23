"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Mail,
  Building2,
  Workflow,
  Send,
  Inbox,
  StickyNote,
  RefreshCw,
  CheckSquare,
  Video,
  UserCheck,
  Megaphone,
  ShoppingCart,
  Clock,
  Key,
  PenTool,
  GraduationCap,
  FileText,
  Database,
  ChevronRight,
} from "lucide-react";

const integratedTools: { icon: LucideIcon | string; name: string }[] = [
  { icon: Mail, name: "e-Messaging" },
  { icon: Building2, name: "e-Office" },
  { icon: Workflow, name: "Workflows" },
  { icon: Send, name: "Correspondence" },
  { icon: Inbox, name: "Emails" },
  { icon: StickyNote, name: "Memos" },
  { icon: RefreshCw, name: "Circulars" },
  { icon: CheckSquare, name: "Task Management" },
  { icon: Video, name: "Meetings" },
  { icon: UserCheck, name: "Attendance" },
  { icon: Megaphone, name: "Announcements" },
  { icon: ShoppingCart, name: "Requisition" },
  { icon: Clock, name: "Reminders" },
  { icon: Key, name: "e-Token" },
  { icon: PenTool, name: "e-Signature" },
  { icon: GraduationCap, name: "Trainings" },
  { icon: "₦", name: "Budgeting" },
  { icon: FileText, name: "Documentation" },
  { icon: Database, name: "Repository" },
];

// Split tools into 3 rows for mobile/tablet horizontal scroll
const mobileRows = [
  integratedTools.slice(0, 7),
  integratedTools.slice(7, 13),
  integratedTools.slice(13),
];

function ScrollableRow({ row }: { row: typeof integratedTools }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showIndicator, setShowIndicator] = useState(true);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    // Hide indicator once user scrolls a little
    if (el.scrollLeft > 20) {
      setShowIndicator(false);
    } else {
      setShowIndicator(true);
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-3 sm:gap-4 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory"
      >
        {row.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <div
              key={index}
              className="flex items-center justify-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-3 sm:py-3.5 bg-white rounded-full border border-zinc-200 shadow-sm min-w-40 sm:min-w-47.5 shrink-0 snap-start hover:shadow-md transition-shadow"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#079f6f]/10 rounded-lg flex items-center justify-center shrink-0">
                {typeof Icon === "string" ? (
                  <span className="text-base sm:text-lg font-bold text-[#079f6f]">
                    {Icon}
                  </span>
                ) : (
                  <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#079f6f]" />
                )}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-zinc-800 whitespace-nowrap">
                {tool.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Scroll affordance: gradient fade + animated chevron */}
      <div
        className={`pointer-events-none absolute top-0 right-0 h-full w-12 sm:w-16 flex items-center justify-end pr-1 transition-opacity duration-500 ${showIndicator ? "opacity-100" : "opacity-0"}`}
      >
        <div className="absolute inset-0 bg-linear-to-l from-zinc-50 via-zinc-50/80 to-transparent" />
        <div className="relative flex items-center animate-[nudge-right_1.5s_ease-in-out_infinite]">
          <ChevronRight className="w-5 h-5 text-[#079f6f] -mr-2.5 opacity-40" />
          <ChevronRight className="w-5 h-5 text-[#079f6f]" />
        </div>
      </div>
    </div>
  );
}

export default function IntegratedToolsSection() {
  return (
    <section
      id="tools"
      className="pt-10 pb-16 px-4 sm:px-8 lg:px-20 md:pt-14 md:pb-20 bg-zinc-50 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="bg-[#079f6f]/10 text-[#056b4a] font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full">
            Platform Features
          </span>

          <p className="text-base sm:text-lg text-zinc-600 max-w-3xl mx-auto my-4">
            Comprehensive tools designed for seamless public sector operations.
          </p>
        </div>
      </div>

      {/* Mobile/Tablet: 3 horizontally scrollable rows (below lg) */}
      <div className="lg:hidden space-y-3 sm:space-y-4">
        {mobileRows.map((row, rowIndex) => (
          <ScrollableRow key={rowIndex} row={row} />
        ))}
      </div>

      {/* Desktop: sliding marquee rows (lg and above) */}
      <div className="hidden lg:block">
        {/* Sliding Row 1 - scrolls left */}
        <div className="relative mb-6 -mx-6">
          <div className="flex gap-6 animate-[marquee-left_40s_linear_infinite] pl-6">
            {[
              ...integratedTools.slice(0, 10),
              ...integratedTools.slice(0, 10),
            ].map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div
                  key={index}
                  className="flex items-center justify-center gap-4 px-6 py-4 bg-white rounded-full border border-zinc-200 shadow-sm min-w-60 shrink-0 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 bg-[#079f6f]/10 rounded-xl flex items-center justify-center shrink-0">
                    {typeof Icon === "string" ? (
                      <span className="text-lg font-bold text-[#079f6f]">
                        {Icon}
                      </span>
                    ) : (
                      <Icon className="w-5 h-5 text-[#079f6f]" />
                    )}
                  </div>
                  <span className="text-sm font-semibold text-zinc-800 whitespace-nowrap">
                    {tool.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sliding Row 2 - scrolls right, offset */}
        <div className="relative -mx-6">
          <div className="flex gap-6 animate-[marquee-right_40s_linear_infinite] pl-20 text-center">
            {[...integratedTools.slice(10), ...integratedTools.slice(10)].map(
              (tool, index) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 px-6 py-4 bg-white rounded-full border border-zinc-200 shadow-sm min-w-60 shrink-0 hover:shadow-md transition-shadow items-center justify-center"
                  >
                    <div className="w-10 h-10 bg-[#079f6f]/10 rounded-xl flex items-center justify-center shrink-0">
                      {typeof Icon === "string" ? (
                        <span className="text-lg font-bold text-[#079f6f]">
                          {Icon}
                        </span>
                      ) : (
                        <Icon className="w-5 h-5 text-[#079f6f]" />
                      )}
                    </div>
                    <span className="text-sm font-semibold text-zinc-800 whitespace-nowrap">
                      {tool.name}
                    </span>
                  </div>
                );
              },
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
