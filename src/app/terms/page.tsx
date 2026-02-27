import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteNav />
      <main className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">Terms of service</h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-300">
          Placeholder terms page. Replace with your final legal copy.
        </p>
      </main>
      <Footer />
    </div>
  );
}
