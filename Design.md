VibeTrading.dev
Website Design Document

Positioning: Framework-First, Developer-Oriented, Minimal

1. Product Positioning
Core Identity

VibeTrading is an open-source trading framework for generating, backtesting, and deploying multi-exchange strategies.

It is:

Framework-first

Strategy-centric

Exchange-agnostic

Backtest-native

Agent-compatible (via skill exposure)

It is not:

A SaaS platform

A signal-selling product

An AI hype project

A marketing-heavy trading site

2. Website Philosophy
Guiding Principles

Keep the homepage simple and direct.

Avoid architectural philosophy on the first screen.

Focus on developer clarity.

Provide runnable examples early.

Move deeper thinking to Docs and Concepts pages.

Homepage answers only:

What is it?

What does it do?

How do I start?

3. Target Audience

Primary:

Developers building trading systems

Quant engineers

AI agent builders

OpenClaw / agent framework users

Secondary:

Advanced traders who can read Python

Infra-level Web3 builders

4. Website Structure
Top-Level Navigation

Home

Docs

Examples

GitHub

Blog (optional)

Community (optional)

Keep navigation minimal.

5. Homepage Structure
Section 1 — Hero
Title

VibeTrading

Subtitle

Open-source trading framework for generating, backtesting, and deploying strategies across exchanges.

Supporting Line

Generate strategies.
Run them anywhere.
Backtest natively.

Buttons

Get Started

GitHub

No additional marketing claims.

Section 2 — Core Capabilities

Four equally weighted blocks:

1. Strategy Generation

Create structured trading strategies from prompts or templates.

Output is:

Framework-compatible

Execution-ready

Backtest-ready

2. Multi-Exchange Support

Deploy the same strategy across different exchanges.

Exchange logic is abstracted through adapters.

Write once. Run anywhere.

3. Built-in Backtesting

Backtest strategies using the same code used for live trading.

No separate implementation required.

4. Agent-Compatible

Expose the framework as a skill for autonomous agents.

Agents generate strategies within a structured schema defined by the framework.

Section 3 — Quick Example (Critical Section)

A single, clear, runnable example:

from vibetrading import generate_strategy, BacktestEngine

strategy = generate_strategy("""
RSI(14) < 30
ATR stop loss
Max leverage 3x
""")

engine = BacktestEngine(strategy)
engine.run("BTCUSDT", timeframe="1h")


The example should demonstrate:

Strategy generation

Unified engine usage

Backtest-native workflow

Keep it short and readable.

Section 4 — Architecture Overview (Simple Diagram)

Minimal visual representation:

Strategy Layer
↓
Signal Layer (optional)
↓
Risk Layer
↓
Execution Layer (Exchange Adapters)
↓
Backtest Engine

Keep explanation under 5 sentences.

Avoid buzzwords.

Section 5 — Design Principles

Short bullet list:

Strategy-first abstraction

Exchange-agnostic execution

Backtest-native architecture

Modular signal pipeline

Human and agent compatible

No long paragraphs.

Section 6 — Call to Action

Start building strategies with a unified framework.

[ Get Started ]
[ View on GitHub ]

6. Docs Structure

All deeper logic moves into Docs.

Docs Sidebar Structure
Getting Started

Installation

First Strategy

Running a Backtest

Deploying to Exchange

Core Concepts

Strategy Interface

Strategy Generation Engine

Exchange Adapter Layer

Backtest Engine

Risk Management Module

Signal Pipeline

Agent Skill Exposure

Agent Integration

Using VibeTrading as a Skill

OpenClaw Integration

Structured Strategy Schema

Agent Strategy Constraints

Advanced

Custom Exchange Adapter

Custom Signal Provider

Portfolio Management

Performance Metrics

Extending the Framework

API Reference

Strategy

BacktestEngine

ExchangeAdapter

RiskModule

generate_strategy()

7. Messaging Guidelines
Tone

Calm

Technical

Clear

Direct

No hype

Avoid

“Revolutionary”

“AI-powered future”

“Next generation quant”

“Autonomous wealth engine”

Use

Framework

Strategy

Backtest

Adapter

Unified

Modular

8. Agent Positioning Strategy

Important:

On homepage:

Agent support is a feature.

In documentation:

Agent integration is an architectural layer.

This preserves:

Framework-first identity

Long-term infra positioning

Ecosystem flexibility

9. Long-Term Scalability Consideration

The website should allow expansion without repositioning:

Future additions:

RL integration

Multi-agent orchestration

Portfolio allocator

Strategy marketplace

Performance evaluation framework

None of these should require changing homepage positioning.

10. Visual Style Guidelines

Design Direction:

Clean

White or dark minimal

Developer-first

Monospace code emphasis

No excessive animation

Inspirations:

FastAPI

PyTorch

LangChain

Tailwind Docs

Code blocks should visually dominate over marketing graphics.

11. Summary

VibeTrading.dev website should:

Present a clear, simple framework identity

Emphasize usability and structure

Show runnable examples quickly

Avoid over-explaining architecture on the homepage

Move philosophical depth into documentation

Core Homepage Message:

VibeTrading is a unified, open-source trading framework for generating, backtesting, and deploying multi-exchange strategies.

Everything else is detail.