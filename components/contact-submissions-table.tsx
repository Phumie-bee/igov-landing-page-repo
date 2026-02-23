"use client";

import { useState } from "react";
import { X, Mail, Clock, Tag, FileText } from "lucide-react";

interface Submission {
  id: string;
  email: string;
  reason: string;
  details: string;
  createdAt: string | Date;
}

export default function ContactSubmissionsTable({
  submissions,
  pageOffset,
}: {
  submissions: Submission[];
  pageOffset: number;
}) {
  const [selected, setSelected] = useState<Submission | null>(null);

  return (
    <>
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
              {submissions.map((sub, i) => (
                <tr
                  key={sub.id}
                  onClick={() => setSelected(sub)}
                  className={`border-b border-zinc-100 hover:bg-zinc-50/60 transition-colors cursor-pointer ${
                    i % 2 === 0 ? "bg-white" : "bg-zinc-50/30"
                  }`}
                >
                  <td className="px-6 py-4 text-zinc-400 font-mono text-xs">
                    {pageOffset + i + 1}
                  </td>
                  <td className="px-6 py-4 text-zinc-600">{sub.email}</td>
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

      {/* Detail Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-100">
              <h2 className="text-lg font-bold text-zinc-900">
                Submission Details
              </h2>
              <button
                onClick={() => setSelected(null)}
                className="p-1.5 rounded-lg hover:bg-zinc-100 transition-colors text-zinc-400 hover:text-zinc-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal body */}
            <div className="px-6 py-5 space-y-5">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${selected.email}`}
                    className="text-sm text-zinc-800 hover:text-[#079f6f] underline decoration-zinc-300 hover:decoration-[#079f6f] transition-colors"
                  >
                    {selected.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Tag className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                    Reason
                  </p>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
                    {selected.reason}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-violet-50 flex items-center justify-center shrink-0 mt-0.5">
                  <FileText className="w-4 h-4 text-violet-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                    Details
                  </p>
                  <p className="text-sm text-zinc-700 whitespace-pre-wrap leading-relaxed">
                    {selected.details}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                    Submitted
                  </p>
                  <p className="text-sm text-zinc-700">
                    {new Date(selected.createdAt).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal footer */}
            <div className="px-6 py-4 border-t border-zinc-100 flex justify-end">
              <button
                onClick={() => setSelected(null)}
                className="px-4 py-2 text-sm font-medium text-zinc-700 bg-zinc-100 rounded-lg hover:bg-zinc-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
