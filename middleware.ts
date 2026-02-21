import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    const authHeader = request.headers.get("authorization");

    if (authHeader) {
      try {
        const encoded = authHeader.split(" ")[1];
        const decoded = Buffer.from(encoded, "base64").toString("utf-8");
        const separatorIndex = decoded.indexOf(":");
        const user = decoded.slice(0, separatorIndex);
        const password = decoded.slice(separatorIndex + 1);

        if (user === "admin" && password === process.env.ADMIN_PASSWORD) {
          return NextResponse.next();
        }
      } catch {
        // Invalid auth header, fall through to 401
      }
    }

    return new NextResponse("Unauthorized", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Admin Area"' },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
