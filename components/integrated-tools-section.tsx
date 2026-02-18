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
  DollarSign,
  FileText,
  Database,
} from "lucide-react";

const integratedTools = [
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
  { icon: DollarSign, name: "Budgeting" },
  { icon: FileText, name: "Documentation" },
  { icon: Database, name: "Repository" },
];

export default function IntegratedToolsSection() {
  return (
    <section
      id="tools"
      className="pt-10 pb-16 px-20 md:pt-14 md:pb-20 bg-zinc-50 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-10">
          <span className="bg-[#079f6f]/10 text-[#056b4a] font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full">
            Platform Features
          </span>

          <p className="text-lg text-zinc-600 max-w-3xl mx-auto my-4">
            Comprehensive tools designed for seamless public sector operations.
          </p>
        </div>
      </div>

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
                className="flex items-center justify-center gap-4 px-6 py-4 bg-white rounded-2xl border border-zinc-200 shadow-sm min-w-[240px] shrink-0 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-[#079f6f]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#079f6f]" />
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
        <div className="flex gap-6 animate-[marquee-right_40s_linear_infinite] pl-20">
          {[...integratedTools.slice(10), ...integratedTools.slice(10)].map(
            (tool, index) => {
              const Icon = tool.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 px-6 py-4 bg-white rounded-2xl border border-zinc-200 shadow-sm min-w-[240px] shrink-0 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 bg-[#079f6f]/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#079f6f]" />
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
    </section>
  );
}
