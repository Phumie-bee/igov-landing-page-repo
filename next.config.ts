import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/**": ["./lib/generated/prisma/**/*"],
  },
};

export default nextConfig;
