"use client";

import { useI18n } from "@/lib/i18n/context";
import type { TranslationKey } from "@/lib/i18n/translations";

const layers: {
  nameKey: TranslationKey;
  descKey: TranslationKey;
  optional?: boolean;
}[] = [
  { nameKey: "architecture.layer.strategy", descKey: "architecture.layer.strategy.desc" },
  { nameKey: "architecture.layer.signal", descKey: "architecture.layer.signal.desc", optional: true },
  { nameKey: "architecture.layer.risk", descKey: "architecture.layer.risk.desc" },
  { nameKey: "architecture.layer.execution", descKey: "architecture.layer.execution.desc" },
  { nameKey: "architecture.layer.backtest", descKey: "architecture.layer.backtest.desc" },
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
            <div className="w-full max-w-[260px] font-mono text-sm">
              {layers.map((layer, index) => (
                <div key={layer.nameKey}>
                  <div className="border border-[var(--border-primary)] px-4 py-3 text-center">
                    <span className="text-[var(--text-primary)]">
                      {t(layer.nameKey)}
                    </span>
                    {layer.optional && (
                      <span className="ml-1 text-xs text-[var(--text-tertiary)]">
                        ({t("architecture.optional")})
                      </span>
                    )}
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
          </div>
        </div>
      </div>
    </section>
  );
}
