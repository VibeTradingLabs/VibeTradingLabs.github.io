const capabilities = [
  {
    title: "Strategy Generation",
    description:
      "Generate structured strategies from prompts or templates. Output is framework-compatible and validated.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Multi-Exchange Support",
    description:
      "Run the same strategy across exchanges through adapters. Write once. Run anywhere.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Built-in Backtesting",
    description:
      "Backtest using the same strategy logic used for live trading. No duplicate implementation.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Agent-Compatible",
    description:
      "Expose VibeTrading as a skill so agents generate strategies within a structured schema.",
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
  return (
    <section className="border-t border-[var(--border-primary)] py-20 md:py-24">
      <div className="section-container">
        <p className="mb-12 text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
          Core Capabilities
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="border border-[var(--border-primary)] p-8"
            >
              <div className="mb-4 text-[var(--text-tertiary)]">
                {cap.icon}
              </div>
              <h3 className="mb-2 text-base font-semibold text-[var(--text-primary)]">
                {cap.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
