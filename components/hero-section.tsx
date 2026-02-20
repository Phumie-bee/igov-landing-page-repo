import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import iGov_heroImage2 from "../public/Federal_Secretariat.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-[50vh] flex items-center pt-20 pb-6 sm:pt-26 sm:pb-10 lg:pt-28 lg:pb-8">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={iGov_heroImage2}
          alt="Government Building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 via-zinc-900/85 to-zinc-900/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-4 inline-block">
              <span className="bg-[#079f6f] text-white px-4 py-2 text-sm font-semibold uppercase tracking-wider">
                Advanced Groupware Platform
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Smarter governance.{" "}
              <span className="text-[#079f6f]">Real results.</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-200 leading-relaxed mb-6">
              The all-in-one groupware powering modern government—collaboration,
              communication, and intelligence in a single platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#079f6f] text-white hover:bg-[#028751] text-base font-semibold px-8 h-14 group"
                asChild
              >
                <Link href="/request-demo">
                  Request a Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-black hover:bg-gray-200 hover:text-zinc-900 text-base font-semibold px-8 h-14"
                asChild
              >
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
