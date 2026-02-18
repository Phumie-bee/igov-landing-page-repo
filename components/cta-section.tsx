import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Award, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
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
          With your vision and our platform, we can reshape the future of public
          service.
        </p>
        <Button
          size="lg"
          className="bg-[#079f6f] text-white hover:bg-[#028751] text-base font-semibold px-10 h-14 group"
          asChild
        >
          <Link href="/request-demo">
            Request a Demo
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
        <p className="text-sm text-zinc-400 mt-8">
          By Connexxion Telecom & Solutions
        </p>
      </div>
    </section>
  );
}
