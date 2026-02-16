"use client";

import Link from "next/link";
import ExternalLink from "@/components/ui/ExternalLink";
import { useI18n } from "@/lib/i18n/context";

const GITHUB_URL = "https://github.com/VibeTradingLabs";

export default function FooterCTASection() {
  const { t } = useI18n();

  return (
    <section className="border-t border-[var(--border-primary)] py-20 md:py-24">
      <div className="section-container">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)] md:text-3xl">
            {t("footerCta.title")}
          </h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="https://docs.vibetrading.dev/"
              className="inline-flex items-center justify-center rounded-none border border-[var(--text-primary)] bg-[var(--text-primary)] px-7 py-3 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-transparent hover:text-[var(--text-primary)]"
              aria-label="Get started with VibeTrading"
            >
              {t("hero.getStarted")}
            </Link>

            <ExternalLink
              href={GITHUB_URL}
              className="inline-flex items-center justify-center rounded-none border border-[var(--border-secondary)] px-7 py-3 text-xs font-medium uppercase tracking-widest text-[var(--text-primary)] transition-colors hover:border-[var(--text-primary)]"
            >
              GitHub
            </ExternalLink>
          </div>
        </div>
      </div>
    </section>
  );
}
