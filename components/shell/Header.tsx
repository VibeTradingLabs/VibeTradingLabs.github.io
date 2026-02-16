"use client";

import { useState } from "react";
import Link from "next/link";
import ExternalLink from "@/components/ui/ExternalLink";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useI18n } from "@/lib/i18n/context";

const GITHUB_URL = "https://github.com/VibeTradingLabs";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useI18n();

  return (
    <header className="border-b border-[var(--border-primary)] bg-[var(--bg-primary)]">
      <div className="section-container flex h-14 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-tight text-[var(--text-primary)]"
        >
          VibeTrading.dev
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-xs font-medium uppercase tracking-widest text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          >
            {t("nav.home")}
          </Link>
          <Link
            href="/docs"
            className="text-xs font-medium uppercase tracking-widest text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          >
            {t("nav.docs")}
          </Link>
          <Link
            href="/examples"
            className="text-xs font-medium uppercase tracking-widest text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          >
            {t("nav.examples")}
          </Link>
          <ExternalLink
            href={GITHUB_URL}
            className="text-xs font-medium uppercase tracking-widest text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          >
            GitHub
          </ExternalLink>
          <LanguageSwitcher />
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-9 w-9 items-center justify-center text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] md:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="4" y1="16" x2="20" y2="16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="border-t border-[var(--border-primary)] bg-[var(--bg-primary)] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/docs"
              className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.docs")}
            </Link>
            <Link
              href="/examples"
              className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.examples")}
            </Link>
            <ExternalLink
              href={GITHUB_URL}
              className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              GitHub
            </ExternalLink>
            <div className="pt-2 border-t border-[var(--border-primary)]">
              <LanguageSwitcher />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
