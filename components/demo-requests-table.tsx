"use client";

import { useState } from "react";
import {
  X,
  Mail,
  Clock,
  User,
  Building2,
  Monitor,
  Users,
  MessageSquare,
} from "lucide-react";

interface DemoRequest {
  id: string;
  name: string;
  email: string;
  organization: string;
  demoType: string;
  message: string | null;
  createdAt: string | Date;
}

export default function DemoRequestsTable({
  requests,
  pageOffset,
}: {
  requests: DemoRequest[];
  pageOffset: number;
}) {
  const [selected, setSelected] = useState<DemoRequest | null>(null);

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
                  Name
                </th>
                <th className="text-left px-6 py-4 font-semibold text-zinc-600">
                  Email
                </th>
                <th className="text-left px-6 py-4 font-semibold text-zinc-600">
                  Organization
                </th>
                <th className="text-left px-6 py-4 font-semibold text-zinc-600">
                  Type
                </th>
                <th className="text-left px-6 py-4 font-semibold text-zinc-600">
                  Message
                </th>
                <th className="text-left px-6 py-4 font-semibold text-zinc-600">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req, i) => (
                <tr
                  key={req.id}
                  onClick={() => setSelected(req)}
                  className={`border-b border-zinc-100 hover:bg-zinc-50/60 transition-colors cursor-pointer ${
                    i % 2 === 0 ? "bg-white" : "bg-zinc-50/30"
                  }`}
                >
                  <td className="px-6 py-4 text-zinc-400 font-mono text-xs">
                    {pageOffset + i + 1}
                  </td>
                  <td className="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap">
                    {req.name}
                  </td>
                  <td className="px-6 py-4 text-zinc-600">{req.email}</td>
                  <td className="px-6 py-4 text-zinc-600 whitespace-nowrap">
                    {req.organization}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                        req.demoType === "virtual"
                          ? "bg-blue-50 text-blue-700"
                          : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {req.demoType === "virtual" ? (
                        <Monitor className="w-3 h-3" />
                      ) : (
                        <Users className="w-3 h-3" />
                      )}
                      {req.demoType === "virtual" ? "Virtual" : "Physical"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-zinc-500 max-w-55">
                    <span className="line-clamp-2">{req.message || "—"}</span>
                  </td>
                  <td className="px-6 py-4 text-zinc-400 whitespace-nowrap">
                    {new Date(req.createdAt).toLocaleDateString("en-US", {
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
                Demo Request Details
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
                  <User className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                    Name
                  </p>
                  <p className="text-sm font-medium text-zinc-800">
                    {selected.name}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-blue-600" />
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
                <div className="w-9 h-9 rounded-lg bg-violet-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Building2 className="w-4 h-4 text-violet-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                    Organization
                  </p>
                  <p className="text-sm text-zinc-700">
                    {selected.organization}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0 mt-0.5">
                  {selected.demoType === "virtual" ? (
                    <Monitor className="w-4 h-4 text-indigo-600" />
                  ) : (
                    <Users className="w-4 h-4 text-indigo-600" />
                  )}
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                    Demo Type
                  </p>
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                      selected.demoType === "virtual"
                        ? "bg-blue-50 text-blue-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {selected.demoType === "virtual"
                      ? "Virtual Meeting"
                      : "Physical (On-site)"}
                  </span>
                </div>
              </div>

              {selected.message && (
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4 text-rose-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                      Message
                    </p>
                    <p className="text-sm text-zinc-700 whitespace-pre-wrap leading-relaxed">
                      {selected.message}
                    </p>
                  </div>
                </div>
              )}

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
