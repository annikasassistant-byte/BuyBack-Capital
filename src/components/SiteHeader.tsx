import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="container flex items-center justify-between py-5">
        <BrandMark light />
        <nav className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-2 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition hover:bg-primary-foreground/20"
          >
            Investor Area
          </Link>
        </nav>
      </div>
    </header>
  );
}
