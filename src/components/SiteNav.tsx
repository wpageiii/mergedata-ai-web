import Image from "next/image";
import Link from "next/link";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070A1A]/50 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-3 sm:px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3 font-semibold text-white">
          <Image
            src="/legacy/md-main-logo.svg"
            alt="MergeData"
            width={120}
            height={24}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-zinc-200 md:flex">
          <Link href="#home" className="hover:text-white">
            Home
          </Link>
          <Link href="#how" className="hover:text-white">
            How it Works
          </Link>
          <Link href="#integrations" className="hover:text-white">
            Integrations
          </Link>
          <Link href="#about" className="hover:text-white">
            About Us
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/signup"
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20 hover:bg-white/5 md:inline-flex"
          >
            Sign Up
          </Link>
          <Link
            href="/signin"
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20 hover:bg-white/5 md:inline-flex"
          >
            Sign In
          </Link>
          <Link
            href="#demo"
            className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-200"
          >
            Request a demo
          </Link>
        </div>
      </div>
    </header>
  );
}
