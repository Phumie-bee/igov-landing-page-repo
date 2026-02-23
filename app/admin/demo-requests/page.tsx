import { getDemoRequests } from "@/lib/actions";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarCheck,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import DemoRequestsTable from "@/components/demo-requests-table";

export const dynamic = "force-dynamic";

export default async function AdminDemoRequestsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; search?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page || "1", 10));
  const search = params.search || "";

  const result = await getDemoRequests(page, search);
  const requests = result.data ?? [];
  const totalPages = result.totalPages ?? 1;
  const total = result.total ?? 0;

  const buildUrl = (p: number, s?: string) => {
    const sp = new URLSearchParams();
    if (p > 1) sp.set("page", String(p));
    if (s) sp.set("search", s);
    const qs = sp.toString();
    return `/admin/demo-requests${qs ? `?${qs}` : ""}`;
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <div className="bg-white border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <CalendarCheck className="w-5 h-5 text-blue-700" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-zinc-900">Demo Requests</h1>
              <p className="text-sm text-zinc-500">
                {total} total request{total !== 1 && "s"}
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
        {/* Search */}
        <form method="GET" className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              name="search"
              defaultValue={search}
              placeholder="Search by name, email, or organization..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 bg-white text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#079f6f]/30 focus:border-[#079f6f] transition-all"
            />
          </div>
        </form>

        {requests.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-zinc-200">
            <CalendarCheck className="w-12 h-12 text-zinc-300 mx-auto mb-4" />
            <p className="text-zinc-400 text-lg">
              {search
                ? "No requests match your search."
                : "No demo requests yet."}
            </p>
            {search && (
              <Link
                href="/admin/demo-requests"
                className="text-sm text-[#079f6f] hover:underline mt-2 inline-block"
              >
                Clear search
              </Link>
            )}
          </div>
        ) : (
          <>
            <DemoRequestsTable
              requests={requests}
              pageOffset={(page - 1) * 10}
            />

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-6">
                <p className="text-sm text-zinc-500">
                  Page {page} of {totalPages}
                </p>
                <div className="flex items-center gap-2">
                  {page > 1 ? (
                    <Link
                      href={buildUrl(page - 1, search)}
                      className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-zinc-700 bg-white border border-zinc-200 rounded-lg hover:bg-zinc-50 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Previous
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-zinc-300 bg-zinc-50 border border-zinc-100 rounded-lg cursor-not-allowed">
                      <ChevronLeft className="w-4 h-4" />
                      Previous
                    </span>
                  )}

                  {page < totalPages ? (
                    <Link
                      href={buildUrl(page + 1, search)}
                      className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-zinc-700 bg-white border border-zinc-200 rounded-lg hover:bg-zinc-50 transition-colors"
                    >
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-zinc-300 bg-zinc-50 border border-zinc-100 rounded-lg cursor-not-allowed">
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
