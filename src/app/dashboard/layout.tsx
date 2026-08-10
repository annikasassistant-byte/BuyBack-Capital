import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BuyBack Capital – Investor Dashboard",
  description:
    "Investor area for BuyBack Capital. Share the public landing page with prospects instead of this dashboard.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
