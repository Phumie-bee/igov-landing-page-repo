import { getContactSubmissions } from "@/lib/actions";
import Link from "next/link";
import { ArrowLeft, MessageSquare } from "lucide-react";

export default async function AdminContactSubmissionsPage() {
  const result = await getContactSubmissions();
  const submissions = result.data ?? [];

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <div className="bg-white border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-zinc-900">
                Contact Submissions
              </h1>
              <p className="text-sm text-zinc-500">
                {submissions.length} total submission
                {submissions.length !== 1 && "s"}
              </p>
            </div>
          </div>
          <Link
            href="/admin"
            className="inline-flex items-center text-sm text-zinc-400 hover:text-zinc-700 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Admin
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        {submissions.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-zinc-200">
            <MessageSquare className="w-12 h-12 text-zinc-300 mx-auto mb-4" />
            <p className="text-zinc-400 text-lg">No contact submissions yet.</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-zinc-50 border-b border-zinc-200">
                    <th className="text-left px-6 py-4 font-semibold text-zinc-600">
                      #
                    </th>
                    <th className="text-left px-6 py-4 font-semibold text-zinc-600">
                      Email
                    </th>
                    <th className="text-left px-6 py-4 font-semibold text-zinc-600">
                      Reason
                    </th>
                    <th className="text-left px-6 py-4 font-semibold text-zinc-600">
                      Details
                    </th>
                    <th className="text-left px-6 py-4 font-semibold text-zinc-600">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((sub: any, i: number) => (
                    <tr
                      key={sub.id}
                      className={`border-b border-zinc-100 hover:bg-zinc-50/60 transition-colors ${
                        i % 2 === 0 ? "bg-white" : "bg-zinc-50/30"
                      }`}
                    >
                      <td className="px-6 py-4 text-zinc-400 font-mono text-xs">
                        {i + 1}
                      </td>
                      <td className="px-6 py-4 text-zinc-600">
                        <a
                          href={`mailto:${sub.email}`}
                          className="hover:text-[#079f6f] transition-colors underline decoration-zinc-300 hover:decoration-[#079f6f]"
                        >
                          {sub.email}
                        </a>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
                          {sub.reason}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-zinc-500 max-w-[320px]">
                        <span className="line-clamp-2">{sub.details}</span>
                      </td>
                      <td className="px-6 py-4 text-zinc-400 whitespace-nowrap">
                        {new Date(sub.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
