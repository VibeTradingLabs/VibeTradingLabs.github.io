import Link from "next/link";
import ExternalLink from "@/components/ui/ExternalLink";
import CodeBlock from "@/components/ui/CodeBlock";

const GITHUB_URL = "https://github.com/VibeTradingLabs";

const heroCode = `from vibetrading import generate_strategy, BacktestEngine

strategy = generate_strategy("""
RSI(14) < 30
ATR stop loss
Max leverage 3x
""")

engine = BacktestEngine(strategy)
engine.run("BTCUSDT", timeframe="1h")`;

export default function HeroSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32">
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Text */}
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
              Open-source trading framework
            </p>

            <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-[var(--text-primary)] md:text-5xl">
              VibeTrading
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
              Open-source trading framework for generating, backtesting, and
              deploying strategies across exchanges.
            </p>

            <div className="mt-4 flex flex-col gap-0.5 font-mono text-sm text-[var(--text-tertiary)]">
              <span>Generate strategies.</span>
              <span>Run them anywhere.</span>
              <span>Backtest natively.</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/docs/getting-started"
                className="inline-flex items-center justify-center rounded-none border border-[var(--text-primary)] bg-[var(--text-primary)] px-7 py-3 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-transparent hover:text-[var(--text-primary)]"
                aria-label="Get started with VibeTrading"
              >
                Get Started
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
