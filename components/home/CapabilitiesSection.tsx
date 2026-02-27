"use client";

import { useI18n } from "@/lib/i18n/context";
import type { TranslationKey } from "@/lib/i18n/translations";

const capabilities: {
  titleKey: TranslationKey;
  descKey: TranslationKey;
  icon: React.ReactNode;
}[] = [
  {
    titleKey: "capabilities.strategyGen.title",
    descKey: "capabilities.strategyGen.desc",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    titleKey: "capabilities.analysis.title",
    descKey: "capabilities.analysis.desc",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    titleKey: "capabilities.backtesting.title",
    descKey: "capabilities.backtesting.desc",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    titleKey: "capabilities.evolution.title",
    descKey: "capabilities.evolution.desc",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
  },
];

export default function CapabilitiesSection() {
  const { t } = useI18n();

  return (
    <section className="border-t border-[var(--border-primary)] py-20 md:py-24">
      <div className="section-container">
        <p className="mb-12 text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
          {t("capabilities.label")}
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {capabilities.map((cap) => (
            <div
              key={cap.titleKey}
              className="border border-[var(--border-primary)] p-8"
            >
              <div className="mb-4 text-[var(--text-tertiary)]">
                {cap.icon}
              </div>
              <h3 className="mb-2 text-base font-semibold text-[var(--text-primary)]">
                {t(cap.titleKey)}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                {t(cap.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
