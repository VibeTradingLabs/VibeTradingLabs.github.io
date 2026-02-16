# VibeTrading

Open-source trading framework for generating, backtesting, and deploying strategies across exchanges.

Generate strategies.  
Run them anywhere.  
Backtest natively.

[Get Started](#quickstart) · [GitHub](https://github.com/your-repo)

---

## Overview

VibeTrading is a unified trading framework designed for structured strategy development.

It provides:

- Strategy generation from prompts or templates
- Multi-exchange compatibility
- Built-in backtesting
- Agent-compatible skill exposure
- Modular signal and risk pipeline

The framework defines the structure.  
Strategies operate within that structure.

---

## Core Capabilities

### Strategy Generation

Generate structured trading strategies that are fully compatible with the framework.

Strategies are:

- Execution-ready
- Backtest-ready
- Schema-validated

---

### Multi-Exchange Support

Deploy the same strategy across different exchanges.

Exchange logic is abstracted through adapters.

Write once. Run anywhere.

---

### Built-in Backtesting

Run backtests using the same strategy class used for live trading.

No duplicate logic.  
No separate backtest implementation.

---

### Agent-Compatible

Expose VibeTrading as a skill inside agent systems.

Agents generate strategies constrained by the framework’s schema, ensuring:

- Structural consistency
- Execution compatibility
- Backtest compatibility

---

## Quickstart

Install:

```bash
pip install vibetrading
