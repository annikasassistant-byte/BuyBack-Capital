import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { defaultBuybackContent } from "@/lib/cms/defaults";
import type { BrandContent, ChromeHeaderContent } from "@/lib/cms/types";

type SiteHeaderProps = {
  header?: ChromeHeaderContent;
  brand?: Pick<BrandContent, "monogram" | "namePrimary" | "nameAccent">;
};

export function SiteHeader({
  header = defaultBuybackContent.chrome.header,
  brand = defaultBuybackContent.site.brand,
}: SiteHeaderProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="container flex items-center justify-between py-5">
        <BrandMark light brand={brand} />
        <nav className="flex items-center gap-3">
          <Link
            href={header.navHref}
            className="rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-2 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition hover:bg-primary-foreground/20"
          >
            {header.navLabel}
          </Link>
        </nav>
      </div>
    </header>
  );
}
