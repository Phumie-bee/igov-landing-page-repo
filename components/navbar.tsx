"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import iGov_logo from "../public/iGov_logo.jpeg";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why CNXiGov", href: "#why-cnxigov" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-200/50 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 transition-opacity group-hover:opacity-80">
            <Image
              src={iGov_logo}
              alt="CNXiGov Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <span className="text-xl font-bold text-zinc-900 tracking-tight hidden sm:inline-block group-hover:text-[#079f6f] transition-colors">
            CNXi<span className="text-[#079f6f]">Gov</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#079f6f] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="ghost"
            size="sm"
            className="text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 font-medium"
            asChild
          >
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button
            size="sm"
            className="bg-[#079f6f] text-white hover:bg-[#028751] font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            asChild
          >
            <Link href="/sign-up">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="text-zinc-700 md:hidden p-2 rounded-lg hover:bg-zinc-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-zinc-200 bg-white/95 backdrop-blur-lg px-4 pb-6 pt-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900 hover:bg-zinc-50 rounded-lg"
                style={{
                  animation: mobileOpen
                    ? `slideIn 0.3s ease-out ${index * 0.05}s both`
                    : "none",
                }}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3 px-4">
              <Button
                variant="outline"
                size="sm"
                className="w-full border-zinc-300 text-zinc-700 hover:bg-zinc-50 font-medium"
                asChild
              >
                <Link href="/sign-in">Sign In</Link>
              </Button>
              <Button
                size="sm"
                className="w-full bg-[#079f6f] text-white hover:bg-[#028751] font-medium shadow-md"
                asChild
              >
                <Link href="https://app.cnxigov.com/portal">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}
