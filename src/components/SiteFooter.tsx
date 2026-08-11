import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { defaultBuybackContent } from "@/lib/cms/defaults";
import type {
  BrandContent,
  ChromeFooterContent,
  ContactContent,
} from "@/lib/cms/types";

type SiteFooterProps = {
  footer?: ChromeFooterContent;
  brand?: Pick<BrandContent, "monogram" | "namePrimary" | "nameAccent">;
  contact?: ContactContent;
};

export function SiteFooter({
  footer = defaultBuybackContent.chrome.footer,
  brand = defaultBuybackContent.site.brand,
}: SiteFooterProps) {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <BrandMark size="sm" brand={brand} />
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            {footer.tagline}
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm">
          {footer.links.map((link) => {
            const isExternal = /^https?:\/\//.test(link.href);
            if (isExternal) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground transition hover:text-primary"
                >
                  {link.label}
                </a>
              );
            }
            return (
              <Link
                key={link.label}
                href={link.href}
                className="font-medium text-foreground transition hover:text-primary"
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
