"use client";

import Link from "next/link";
import CodeBlock from "@/components/ui/CodeBlock";
import { useI18n } from "@/lib/i18n/context";

const installCode = `pip install vibetrading`;

const exampleCode = `import vibetrading.strategy
import vibetrading.backtest
import vibetrading.tools

# Generate strategy from a prompt
generator = vibetrading.strategy.StrategyGenerator(model="gpt-4o")
code = generator.generate(
    "BTC SMA crossover: long when SMA(10) > SMA(50), "
    "short when SMA(10) < SMA(50), 3x leverage"
)

# Download data & backtest
data = vibetrading.tools.download_data(["BTC"], interval="1h")
results = vibetrading.backtest.run(code, data=data)
print(results["metrics"])`;

export default function QuickstartSection() {
  const { t } = useI18n();

  return (
    <section className="border-t border-[var(--border-primary)] py-20 md:py-24" id="quickstart">
      <div className="section-container">
        <div className="mx-auto max-w-2xl">
          <p className="mb-12 text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
            {t("quickstart.label")}
          </p>

          <div className="space-y-6">
            {/* Install */}
            <div>
              <p className="mb-2 text-xs font-medium text-[var(--text-tertiary)]">
                {t("quickstart.install")}
              </p>
              <CodeBlock language="bash" code={installCode} />
            </div>

            {/* Example */}
            <div>
              <p className="mb-2 text-xs font-medium text-[var(--text-tertiary)]">
                {t("quickstart.example")}
              </p>
              <CodeBlock language="python" code={exampleCode} />
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href="https://docs.vibetrading.dev/"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-primary)] underline underline-offset-4 decoration-[var(--border-secondary)] transition-colors hover:decoration-[var(--text-primary)]"
              >
                {t("quickstart.readDocs")} &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
