import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <BrandMark size="sm" />
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            BuyBack Capital – Private Debt für Working Capital im Re-Commerce.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm">
          <Link href="/" className="font-medium text-foreground transition hover:text-primary">
            Landing Page
          </Link>
          <Link
            href="/dashboard"
            className="font-medium text-foreground transition hover:text-primary"
          >
            Dashboard
          </Link>
          <a
            href="https://wa.me/491732142293"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground transition hover:text-primary"
          >
            Kontakt
          </a>
        </div>
      </div>
    </footer>
  );
}
