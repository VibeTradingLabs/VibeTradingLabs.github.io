# VibeTrading.dev Homepage  
## Component Structure Specification (Implementation-Ready)

---

# 0. Scope & Goals

**Page:** `/` (Homepage)  
**Goal:** Minimal, framework-first, developer-oriented landing page.

Homepage must answer:

1) What is VibeTrading?  
2) What does it do?  
3) How do I start?

Everything deeper goes to Docs.

**Primary CTAs:**
- Get Started → `/docs/getting-started`
- GitHub → external link

**Constraints:**
- 2–3 screen scroll max on desktop
- Code example visible within one scroll
- No marketing-heavy language
- Mobile-first responsive

---

# 1. Page Layout Skeleton

## AppShell

- Header
- Main
- Footer

---

## Header

**Left**
- Logo (SVG)
- Project name: VibeTrading

**Right**
- Docs → `/docs`
- Examples → `/examples`
- GitHub → external (new tab)
- Optional: Theme toggle

Height: ~56–64px  
Keep navigation minimal (max 3–4 items).

---

## Main Sections (Top-to-Bottom Order)

1. HeroSection  
2. CapabilitiesSection  
3. QuickstartSection  
4. ArchitectureSection  
5. FooterCTASection  

---

## Footer

- MIT License
- Copyright
- Links: Docs / GitHub / Community (optional)

---

# 2. Component Tree (React / Next.js)

```txt
<HomePage>
  <AppShell>
    <Header />
    <Main>
      <HeroSection />
      <CapabilitiesSection />
      <QuickstartSection />
      <ArchitectureSection />
      <FooterCTASection />
    </Main>
    <Footer />
  </AppShell>
</HomePage>
3. Component Specifications
3.1 HeroSection
Layout: Two-column (desktop), stacked (mobile)

Left Column
H1: VibeTrading

Subtitle:
Open-source trading framework for generating, backtesting, and deploying strategies across exchanges.

Supporting lines:
Generate strategies.
Run them anywhere.
Backtest natively.

Buttons:

Get Started → /docs/getting-started

GitHub → external

Right Column (Optional)
Short code teaser (6–10 lines)

Goal: User understands product in under 5 seconds.

3.2 CapabilitiesSection
Layout: 2x2 grid (desktop), single column (mobile)

Four cards:

1. Strategy Generation
Generate structured strategies from prompts or templates.
Output is framework-compatible and validated.

Docs: /docs/concepts/strategy-generation

2. Multi-Exchange Support
Run the same strategy across exchanges through adapters.
Write once. Run anywhere.

Docs: /docs/concepts/exchange-adapters

3. Built-in Backtesting
Backtest using the same strategy logic used for live trading.
No duplicate implementation.

Docs: /docs/concepts/backtesting

4. Agent-Compatible
Expose VibeTrading as a skill so agents generate strategies within a structured schema.

Docs: /docs/agent-integration/skill

3.3 QuickstartSection (Critical Section)
Content order:

Section title: Quickstart

Install snippet

Minimal runnable example

Docs CTA

Install
pip install vibetrading
Example
from vibetrading import generate_strategy, BacktestEngine

strategy = generate_strategy("""
RSI(14) < 30
ATR stop loss
Max leverage 3x
""")

engine = BacktestEngine(strategy)
engine.run("BTCUSDT", timeframe="1h")
Requirements:

Copy-to-clipboard button

Syntax highlighting

No unnecessary explanations

CTA below:

Read the Docs → /docs/getting-started

3.4 ArchitectureSection
Layout: Two-column (desktop)

Left
Title: Architecture

Short explanation (max 3 sentences)

Right
Minimal structural diagram:

Strategy Layer
↓
Signal Layer (optional)
↓
Risk Layer
↓
Execution Layer (Exchange Adapters)
↓
Backtest Engine

Keep diagram clean and text-based.

3.5 FooterCTASection
Title:

Start building with a unified trading framework.

Buttons:

Get Started → /docs/getting-started

GitHub → external

Keep concise.

3.6 Footer
Content:

MIT License

© <year> VibeTrading

Docs link

GitHub link

Optional: Community link

4. Shared UI Components
CodeBlock
Props:

language: string

code: string

showCopy: boolean (default true)

Behavior:

Copy button copies entire snippet

Optional toast feedback

ExternalLink
Props:

href

children

newTab (default true)

5. Responsiveness & UX
Mobile:

Hero stacks vertically

Code blocks full width

Horizontal scroll enabled for code

Desktop:

Max width: 960–1100px

Accessibility:

aria-label for buttons

Accessible copy button

Performance:

Avoid heavy animations

No large background images

6. Optional Analytics Events
cta_get_started_click

cta_github_click

quickstart_copy_install

quickstart_copy_example

nav_docs_click

7. Suggested File Structure (Next.js)
app/
  page.tsx
  layout.tsx

components/
  shell/
    AppShell.tsx
    Header.tsx
    Footer.tsx

  home/
    HeroSection.tsx
    CapabilitiesSection.tsx
    QuickstartSection.tsx
    ArchitectureSection.tsx
    FooterCTASection.tsx

  ui/
    CodeBlock.tsx
    ExternalLink.tsx
8. Definition of Done
Homepage renders all 5 sections

Primary CTA routes correctly

GitHub opens in new tab

Code snippets are copyable

Page fits within ~2–3 scrolls

No long-form philosophy on homepage

Performance optimized

End of specification.