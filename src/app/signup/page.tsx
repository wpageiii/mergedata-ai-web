import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = { title: "Sign Up" };

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteNav />
      <main className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">Sign Up</h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-300">
          Placeholder page. We can wire this to your auth provider (Clerk/Auth0/Cognito) when ready.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-full bg-white/5 px-5 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/10"
          >
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
