"use client";

import { useState, useEffect, useCallback } from "react";
import ExternalLink from "@/components/ui/ExternalLink";

export default function AnnouncementBanner() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="border-b border-[var(--border-primary)] bg-[var(--bg-secondary)]">
        <div className="section-container flex items-center justify-center py-3">
          <button
            onClick={() => setOpen(true)}
            className="group flex items-center gap-3 text-sm transition-colors"
          >
            <span className="shrink-0 rounded-full bg-[var(--text-primary)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-white">
              New
            </span>
            <span className="font-medium text-[var(--text-primary)] group-hover:underline group-hover:underline-offset-4">
              VibeTrading Is Now Open Source
            </span>
            <span className="text-[var(--text-tertiary)] transition-transform group-hover:translate-x-0.5">
              &rarr;
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="relative mx-4 w-full max-w-lg rounded-none border border-[var(--border-primary)] bg-[var(--bg-primary)] p-8 shadow-xl sm:p-10">
            <button
              onClick={close}
              className="absolute right-4 top-4 text-[var(--text-tertiary)] transition-colors hover:text-[var(--text-primary)]"
              aria-label="Close"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M5 5l10 10M15 5L5 15" />
              </svg>
            </button>

            <h2 className="text-xl font-bold tracking-tight text-[var(--text-primary)] sm:text-2xl">
              VibeTrading Is Now Open Source
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-[var(--text-secondary)]">
              <p>
                We&apos;ve open-sourced the core VibeTrading library.
              </p>

              <p>
                As vibe coding and agent-based development continue to grow,
                VibeTrading is now positioned as a developer-first,
                agent-compatible trading framework.
              </p>

              <p>
                Our original product now serves as an official application built
                on top of the VibeTrading open-source library:
              </p>
              <ExternalLink
                href="https://app.vibetrading.dev"
                className="inline-block font-medium text-[var(--text-primary)] underline underline-offset-4 decoration-[var(--border-secondary)] transition-colors hover:decoration-[var(--text-primary)]"
              >
                app.vibetrading.dev
              </ExternalLink>
            </div>

            <div className="mt-8 flex gap-4">
              <ExternalLink
                href="https://github.com/VibeTradingLabs/vibetrading"
                className="inline-flex items-center justify-center rounded-none border border-[var(--text-primary)] bg-[var(--text-primary)] px-6 py-2.5 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-transparent hover:text-[var(--text-primary)]"
              >
                View on GitHub
              </ExternalLink>
              <button
                onClick={close}
                className="inline-flex items-center justify-center rounded-none border border-[var(--border-secondary)] px-6 py-2.5 text-xs font-medium uppercase tracking-widest text-[var(--text-primary)] transition-colors hover:border-[var(--text-primary)]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
