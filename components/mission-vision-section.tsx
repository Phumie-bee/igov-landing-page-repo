import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Target,
  Eye,
  ArrowRight,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Lightbulb,
  Heart,
  Globe,
} from "lucide-react";

export default function MissionVisionSection() {
  return (
    <section id="about" className="py-20 md:py-28 px-6 bg-zinc-50">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="bg-[#079f6f]/10 text-[#056b4a] px-3 py-1 rounded-full  font-semibold text-sm uppercase tracking-wider">
              About iGOV
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mt-4 mb-6">
              Committed to Excellence, Always Innovating
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed mb-8">
              Seamless governance is our promise to you. What doesn't meet
              public sector standards is refined until it does.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#079f6f]/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-[#079f6f]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">
                    Our Mission
                  </h3>
                  <p className="text-zinc-600">
                    We provide world-class, compliant groupware solutions to
                    public sector entities, combining seamless communication
                    with business intelligence to maximize growth and reduce
                    costs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#079f6f]/10 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-[#079f6f]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">
                    Our Vision
                  </h3>
                  <p className="text-zinc-600">
                    To be the trusted, industry-leading platform for public
                    sector collaboration, known for innovation, reliability, and
                    dedication to transforming government operations.
                  </p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-[#079f6f] text-white hover:bg-[#028751] font-semibold mt-8 group"
              asChild
            >
              <Link href="/get-started">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Right Content - Values Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: Shield,
                label: "Security First",
                color: "bg-blue-50",
                iconColor: "text-blue-600",
              },
              {
                icon: Zap,
                label: "Efficiency",
                color: "bg-yellow-50",
                iconColor: "text-yellow-600",
              },
              {
                icon: Users,
                label: "Collaboration",
                color: "bg-purple-50",
                iconColor: "text-purple-600",
              },
              {
                icon: TrendingUp,
                label: "Growth",
                color: "bg-green-50",
                iconColor: "text-green-600",
              },
              {
                icon: Lightbulb,
                label: "Innovation",
                color: "bg-orange-50",
                iconColor: "text-orange-600",
              },
              {
                icon: Heart,
                label: "Service Excellence",
                color: "bg-red-50",
                iconColor: "text-red-600",
              },
              {
                icon: Globe,
                label: "Connectivity",
                color: "bg-cyan-50",
                iconColor: "text-cyan-600",
              },
              {
                icon: Target,
                label: "Results-Driven",
                color: "bg-pink-50",
                iconColor: "text-pink-600",
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className={`${value.color} p-6 rounded-xl hover:shadow-lg transition-all group cursor-pointer`}
                >
                  <Icon
                    className={`w-8 h-8 ${value.iconColor} mb-3 group-hover:scale-110 transition-transform`}
                  />
                  <h4 className="font-bold text-zinc-900">{value.label}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
