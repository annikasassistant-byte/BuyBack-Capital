import Link from "next/link";

type BrandMarkProps = {
  href?: string;
  light?: boolean;
  size?: "sm" | "md";
};

export function BrandMark({
  href = "/",
  light = false,
  size = "md",
}: BrandMarkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2.5 font-semibold tracking-tight ${
        size === "sm" ? "text-base" : "text-lg"
      } ${light ? "text-primary-foreground" : "text-foreground"}`}
    >
      <span
        className={`flex items-center justify-center rounded-xl text-sm font-bold ${
          size === "sm" ? "h-8 w-8" : "h-9 w-9"
        } ${
          light
            ? "bg-primary-foreground text-primary"
            : "bg-primary text-primary-foreground"
        }`}
      >
        BB
      </span>
      <span>
        BuyBack{" "}
        <span className={light ? "text-primary-foreground/85" : "text-primary"}>
          Capital
        </span>
      </span>
    </Link>
  );
}
