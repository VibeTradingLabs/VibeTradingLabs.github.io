const layers = [
  { name: "Strategy Layer", description: "Define trading logic" },
  { name: "Signal Layer", description: "Optional signal pipeline", optional: true },
  { name: "Risk Layer", description: "Position sizing & limits" },
  { name: "Execution Layer", description: "Exchange adapters" },
  { name: "Backtest Engine", description: "Validate with historical data" },
];

export default function ArchitectureSection() {
  return (
    <section className="border-t border-[var(--border-primary)] py-20 md:py-24">
      <div className="section-container">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — Text */}
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
              Architecture
            </p>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[var(--text-primary)] md:text-3xl">
              Modular Pipeline
            </h2>
            <p className="max-w-md leading-relaxed text-[var(--text-secondary)]">
              Strategies flow through a modular pipeline — from generation to
              signal processing, risk management, and exchange execution. The
              same code runs in backtest and live modes.
            </p>
          </div>

          {/* Right — Diagram */}
          <div className="flex justify-center lg:justify-end lg:pt-8">
            <div className="w-full max-w-[260px] font-mono text-sm">
              {layers.map((layer, index) => (
                <div key={layer.name}>
                  <div className="border border-[var(--border-primary)] px-4 py-3 text-center">
                    <span className="text-[var(--text-primary)]">
                      {layer.name}
                    </span>
                    {layer.optional && (
                      <span className="ml-1 text-xs text-[var(--text-tertiary)]">
                        (opt)
                      </span>
                    )}
                    <p className="mt-0.5 text-xs text-[var(--text-tertiary)]">
                      {layer.description}
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
