import type { Metadata } from "next";
import { I18nProvider } from "@/lib/i18n/context";
import "./globals.css";

export const metadata: Metadata = {
  title: "VibeTrading — Open-source Trading Framework",
  description:
    "Open-source trading framework for generating, backtesting, and deploying strategies across exchanges.",
  keywords: [
    "trading framework",
    "backtesting",
    "strategy generation",
    "multi-exchange",
    "open-source",
    "python",
    "vibetrading",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
