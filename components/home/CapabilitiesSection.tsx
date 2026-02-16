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
    titleKey: "capabilities.multiExchange.title",
    descKey: "capabilities.multiExchange.desc",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
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
    titleKey: "capabilities.agent.title",
    descKey: "capabilities.agent.desc",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1.27A7 7 0 0 1 14 22h-4a7 7 0 0 1-6.73-3H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
        <circle cx="9.5" cy="15.5" r="1" fill="currentColor" />
        <circle cx="14.5" cy="15.5" r="1" fill="currentColor" />
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
