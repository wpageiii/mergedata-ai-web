import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-semibold text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
              <span className="text-sm">MD</span>
            </span>
            <span>MergeData.ai</span>
          </div>
          <p className="text-base text-zinc-300">
            Unified analytics without the glue code. Connect sources, normalize data, and deliver clean tables
            to your warehouse.
          </p>
          <p className="text-sm text-zinc-500">© {new Date().getFullYear()} MergeData.ai</p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
          <div className="space-y-3">
            <div className="text-sm font-semibold text-white">Product</div>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="#features" className="hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#security" className="hover:text-white">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold text-white">Company</div>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <a href="mailto:hello@mergedata.ai" className="hover:text-white">
                  hello@mergedata.ai
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold text-white">Legal</div>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
