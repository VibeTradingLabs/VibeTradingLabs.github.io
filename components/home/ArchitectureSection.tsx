"use client";

import { useI18n } from "@/lib/i18n/context";
import type { TranslationKey } from "@/lib/i18n/translations";

const layers: {
  nameKey: TranslationKey;
  descKey: TranslationKey;
  optional?: boolean;
  feedback?: boolean;
}[] = [
  { nameKey: "architecture.layer.strategy", descKey: "architecture.layer.strategy.desc" },
  { nameKey: "architecture.layer.backtest", descKey: "architecture.layer.backtest.desc" },
  { nameKey: "architecture.layer.analysis", descKey: "architecture.layer.analysis.desc" },
  { nameKey: "architecture.layer.evolution", descKey: "architecture.layer.evolution.desc", feedback: true },
];

export default function ArchitectureSection() {
  const { t } = useI18n();

  return (
    <section className="border-t border-[var(--border-primary)] py-20 md:py-24">
      <div className="section-container">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — Text */}
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
              {t("architecture.label")}
            </p>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[var(--text-primary)] md:text-3xl">
              {t("architecture.title")}
            </h2>
            <p className="max-w-md leading-relaxed text-[var(--text-secondary)]">
              {t("architecture.desc")}
            </p>
          </div>

          {/* Right — Diagram */}
          <div className="flex justify-center lg:justify-end lg:pt-8">
            <div className="flex items-start gap-0">
              <div className="w-full max-w-[260px] font-mono text-sm">
                {layers.map((layer, index) => (
                  <div key={layer.nameKey}>
                    <div className="border border-[var(--border-primary)] px-4 py-3 text-center">
                      <span className="text-[var(--text-primary)]">
                        {t(layer.nameKey)}
                      </span>
                      <p className="mt-0.5 text-xs text-[var(--text-tertiary)]">
                        {t(layer.descKey)}
                      </p>
                    </div>
                    {index < layers.length - 1 && (
                      <div className="flex justify-center py-1">
                        <span className="text-[var(--text-tertiary)]">&darr;</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {/* Feedback arrow */}
              <div className="relative ml-2 flex h-full items-center">
                <svg
                  width="40"
                  height="200"
                  viewBox="0 0 40 200"
                  fill="none"
                  className="text-[var(--text-tertiary)]"
                >
                  <path
                    d="M20 190 L20 180 Q20 10 20 10 L20 10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 3"
                  />
                  <polyline
                    points="14,16 20,6 26,16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
                <span className="absolute left-[44px] top-1/2 -translate-y-1/2 -rotate-0 whitespace-nowrap text-[10px] text-[var(--text-tertiary)]">
                  feedback
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
