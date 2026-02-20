import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    const authHeader = request.headers.get("authorization");

    if (authHeader) {
      const encoded = authHeader.split(" ")[1];
      const decoded = atob(encoded);
      const [user, password] = decoded.split(":");

      if (user === "admin" && password === process.env.ADMIN_PASSWORD) {
        return NextResponse.next();
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
