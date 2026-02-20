"use client";

import Link from "next/link";
import ExternalLink from "@/components/ui/ExternalLink";
import CodeBlock from "@/components/ui/CodeBlock";
import { useI18n } from "@/lib/i18n/context";

const GITHUB_URL = "https://github.com/VibeTradingLabs/vibetrading";

const heroCode = `from vibetrading import StrategyGenerator, BacktestEngine

generator = StrategyGenerator(model="gpt-4o", temperature=0.2)
code = generator.generate(
    "BTC SMA crossover: long when SMA(10) > SMA(50), "
    "short when SMA(10) < SMA(50), 3x leverage"
)

engine = BacktestEngine(
    start_time="2025-01-01",
    end_time="2025-06-01",
    interval="1h",
    exchange="hyperliquid",
    initial_balances={"USDC": 10_000},
)
results = engine.run(code)`;

export default function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="py-20 md:py-28 lg:py-32">
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Text */}
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
              {t("hero.tag")}
            </p>

            <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-[var(--text-primary)] md:text-5xl">
              VibeTrading
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
              {t("hero.subtitle")}
            </p>

            <div className="mt-4 flex flex-col gap-0.5 font-mono text-sm text-[var(--text-tertiary)]">
              <span>{t("hero.line1")}</span>
              <span>{t("hero.line2")}</span>
              <span>{t("hero.line3")}</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/docs/getting-started"
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

          {/* Right — Code teaser */}
          <div className="hidden lg:block">
            <CodeBlock language="python" code={heroCode} showCopy={false} />
          </div>
        </div>
      </div>
    </section>
  );
}
