import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Zap,
  Globe,
  Users,
  Mail,
  Building2,
  Workflow,
  CheckSquare,
  DollarSign,
  FileText,
  Database,
  BarChart3,
  ShoppingCart,
  GraduationCap,
  Video,
  UserCheck,
  Megaphone,
  Clock,
  Key,
  PenTool,
  Send,
  Inbox,
  StickyNote,
  RefreshCw,
  Target,
  Eye,
  TrendingUp,
  Shield,
  Lightbulb,
  Heart,
  Award,
  ArrowRight,
} from "lucide-react";
import iGov_heroImage2 from "../public/Federal_Secretariat.png";
import Image from "next/image";

const integratedTools = [
  { icon: Mail, name: "e-Messaging" },
  { icon: Building2, name: "e-Office" },
  { icon: Workflow, name: "Workflows" },
  { icon: Send, name: "Correspondence" },
  { icon: Inbox, name: "Emails" },
  { icon: StickyNote, name: "Memos" },
  { icon: RefreshCw, name: "Circulars" },
  { icon: CheckSquare, name: "Task Management" },
  { icon: Video, name: "Meetings" },
  { icon: UserCheck, name: "Attendance" },
  { icon: Megaphone, name: "Announcements" },
  { icon: ShoppingCart, name: "Requisition" },
  { icon: Clock, name: "Reminders" },
  { icon: Key, name: "e-Token" },
  { icon: PenTool, name: "e-Signature" },
  { icon: GraduationCap, name: "Trainings" },
  { icon: DollarSign, name: "Budgeting" },
  { icon: FileText, name: "Documentation" },
  { icon: Database, name: "Repository" },
];

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

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[50vh] flex items-center">
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
                The all-in-one groupware powering modern
                government—collaboration, communication, and intelligence in a
                single platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#079f6f] text-white hover:bg-[#028751] text-base font-semibold px-8 h-14 group"
                  asChild
                >
                  <Link href="https://app.igov.com/portal">
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

      {/* Integrated Tools Section */}
      <section
        id="tools"
        className="pt-10 pb-16 px-20 md:pt-14 md:pb-20 bg-zinc-50 overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-10">
            <span className="bg-[#079f6f]/10 text-[#056b4a] font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full">
              Platform Features
            </span>

            <p className="text-lg text-zinc-600 max-w-3xl mx-auto my-4">
              Comprehensive tools designed for seamless government operations.
            </p>
          </div>
        </div>

        {/* Sliding Row 1 - scrolls left */}
        <div className="relative mb-6 -mx-6">
          <div className="flex gap-6 animate-[marquee-left_40s_linear_infinite] pl-6">
            {[
              ...integratedTools.slice(0, 10),
              ...integratedTools.slice(0, 10),
            ].map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div
                  key={index}
                  className="flex items-center justify-center gap-4 px-6 py-4 bg-white rounded-2xl border border-zinc-200 shadow-sm min-w-[240px] shrink-0 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 bg-[#079f6f]/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#079f6f]" />
                  </div>
                  <span className="text-sm font-semibold text-zinc-800 whitespace-nowrap">
                    {tool.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sliding Row 2 - scrolls right, offset */}
        <div className="relative -mx-6">
          <div className="flex gap-6 animate-[marquee-right_40s_linear_infinite] pl-20">
            {[...integratedTools.slice(10), ...integratedTools.slice(10)].map(
              (tool, index) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 px-6 py-4 bg-white rounded-2xl border border-zinc-200 shadow-sm min-w-[240px] shrink-0 hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 bg-[#079f6f]/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#079f6f]" />
                    </div>
                    <span className="text-sm font-semibold text-zinc-800 whitespace-nowrap">
                      {tool.name}
                    </span>
                  </div>
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-28 px-6 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="bg-[#079f6f]/10 text-[#056b4a] px-3 py-1 rounded-full font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mt-4 mb-4">
              Built for What Government Needs
            </h2>
            <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
              From knowledge sharing to economic intelligence, iGOV covers the
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

      {/* Mission & Vision Section */}
      <section className="py-20 md:py-28 px-6 bg-zinc-50">
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
                      sector collaboration, known for innovation, reliability,
                      and dedication to transforming government operations.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-[#079f6f] text-white hover:bg-[#028751] font-semibold mt-8 group"
                asChild
              >
                <Link href="#contact">
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

      {/* CTA Section with Background */}
      <section id="contact" className="relative py-20 md:py-28 px-6">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-zinc-900">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNGgydi0yaC0ydjJ6bTAgOHYyaDJ2LTJoLTJ6bS00IDRoMnYtMmgtMnYyem0wLThoMnYtMmgtMnYyem0wIDRoMnYtMmgtMnYyem00LTRoMnYtMmgtMnYyem0tOCA0aDJ2LTJoLTJ2MnptMC04aDJ2LTJoLTJ2MnptMCA0aDJ2LTJoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Award className="w-16 h-16 text-[#079f6f] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-zinc-300 mb-10 max-w-2xl mx-auto">
            With your vision and our platform, we can reshape the future of
            public sector governance.
          </p>
          <Button
            size="lg"
            className="bg-[#079f6f] text-white hover:bg-[#028751] text-base font-semibold px-10 h-14 group"
            asChild
          >
            <Link href="https://app.igov.com/portal">
              Request a Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <p className="text-sm text-zinc-400 mt-8">
            By Connexxion Telecom & Solutions
          </p>
        </div>
      </section>
    </div>
  );
}
