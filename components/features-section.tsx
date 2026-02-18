import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Globe, Users, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Streamlined Operations",
    description:
      "An extensive toolset—e-Messaging, e-Office, workflows, task management, budgeting and more—that eliminates paperwork and cuts operational inefficiency.",
  },
  {
    icon: Globe,
    title: "Economic Intelligence",
    description:
      "Advanced algorithms automate and structure data to power government economic, social, and business intelligence systems with minimal effort.",
  },
  {
    icon: Users,
    title: "Strategic Collaboration",
    description:
      "Purpose-built collaboration that enhances decision-making and organizational effectiveness across every level of public service.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28 px-6 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <span className="bg-[#079f6f]/10 text-[#056b4a] px-3 py-1 rounded-full font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mt-4 mb-4">
            Built for What Public Sector Needs
          </h2>
          <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
            From knowledge sharing to economic in telligence, iGOV covers the
            full spectrum of public sector operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-zinc-200 hover:border-[#079f6f] transition-all hover:shadow-xl group rounded-4xl"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#079f6f]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#079f6f] transition-colors">
                    <Icon className="w-8 h-8 text-[#079f6f] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <Link
                    href="#"
                    className="text-[#079f6f] font-semibold inline-flex items-center group-hover:gap-2 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
