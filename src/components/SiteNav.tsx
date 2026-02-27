import Link from "next/link";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-white">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
            <span className="text-sm">MD</span>
          </span>
          <span>MergeData.ai</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-zinc-200 md:flex">
          <Link href="#features" className="hover:text-white">
            Features
          </Link>
          <Link href="#how" className="hover:text-white">
            How it works
          </Link>
          <Link href="#security" className="hover:text-white">
            Security
          </Link>
          <Link href="/pricing" className="hover:text-white">
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20 hover:bg-white/5 md:inline-flex"
          >
            Talk to us
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
