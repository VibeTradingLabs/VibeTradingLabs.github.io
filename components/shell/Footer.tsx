import ExternalLink from "@/components/ui/ExternalLink";
import Link from "next/link";

const GITHUB_URL = "https://github.com/VibeTradingLabs";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-primary)]">
      <div className="section-container flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <div className="flex items-center gap-4 text-xs text-[var(--text-tertiary)]">
          <span>&copy; {year} VibeTrading</span>
          <span>&middot;</span>
          <span>MIT License</span>
        </div>
        <nav className="flex items-center gap-6 text-xs text-[var(--text-tertiary)]">
          <Link
            href="/docs"
            className="transition-colors hover:text-[var(--text-primary)]"
          >
            Docs
          </Link>
          <ExternalLink
            href={GITHUB_URL}
            className="transition-colors hover:text-[var(--text-primary)]"
          >
            GitHub
          </ExternalLink>
        </nav>
      </div>
    </footer>
  );
}
