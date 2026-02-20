import Link from "next/link";
import { CalendarCheck, MessageSquare, ArrowRight } from "lucide-react";

const adminLinks = [
  {
    title: "Demo Requests",
    description: "View all scheduled demo submissions",
    href: "/admin/demo-requests",
    icon: CalendarCheck,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Contact Submissions",
    description: "View all get-started / contact form entries",
    href: "/admin/contact-submissions",
    icon: MessageSquare,
    color: "bg-emerald-100 text-emerald-700",
  },
];

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <div className="bg-white border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-zinc-900">Admin Dashboard</h1>
          <p className="text-zinc-500 mt-2">
            View and manage form submissions from the website.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="grid sm:grid-cols-2 gap-6">
          {adminLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-white rounded-2xl border border-zinc-200 shadow-sm hover:shadow-lg transition-all duration-200 hover:scale-[1.02] p-7 flex flex-col"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${item.color}`}
              >
                <item.icon className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-zinc-900 mb-1">
                {item.title}
              </h2>
              <p className="text-sm text-zinc-500 mb-5 flex-1">
                {item.description}
              </p>
              <span className="text-sm font-semibold text-[#079f6f] inline-flex items-center group-hover:gap-2 transition-all">
                View All
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
