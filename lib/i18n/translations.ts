export const locales = ["en", "es", "zh-CN", "zh-TW", "ja", "ko"] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  "zh-CN": "简体中文",
  "zh-TW": "繁體中文",
  ja: "日本語",
  ko: "한국어",
};

export const htmlLang: Record<Locale, string> = {
  en: "en",
  es: "es",
  "zh-CN": "zh-Hans",
  "zh-TW": "zh-Hant",
  ja: "ja",
  ko: "ko",
};

const translations = {
  // ── Navigation ──
  "nav.home": {
    en: "Home",
    es: "Inicio",
    "zh-CN": "首页",
    "zh-TW": "首頁",
    ja: "ホーム",
    ko: "홈",
  },
  "nav.docs": {
    en: "Docs",
    es: "Documentación",
    "zh-CN": "文档",
    "zh-TW": "文件",
    ja: "ドキュメント",
    ko: "문서",
  },
  "nav.examples": {
    en: "Examples",
    es: "Ejemplos",
    "zh-CN": "示例",
    "zh-TW": "範例",
    ja: "サンプル",
    ko: "예제",
  },

  // ── Hero Section ──
  "hero.tag": {
    en: "Open-source trading framework",
    es: "Framework de trading de código abierto",
    "zh-CN": "开源交易框架",
    "zh-TW": "開源交易框架",
    ja: "オープンソース取引フレームワーク",
    ko: "오픈소스 트레이딩 프레임워크",
  },
  "hero.subtitle": {
    en: "Open-source trading framework for generating, backtesting, analyzing, and evolving strategies with LLM-powered feedback.",
    es: "Framework de código abierto para generar, hacer backtesting, analizar y evolucionar estrategias con retroalimentación potenciada por LLM.",
    "zh-CN": "用于生成、回测、分析和进化策略的开源交易框架，由 LLM 驱动反馈闭环。",
    "zh-TW": "用於生成、回測、分析和進化策略的開源交易框架，由 LLM 驅動反饋閉環。",
    ja: "LLMフィードバックによる戦略の生成・バックテスト・分析・進化のためのオープンソース取引フレームワーク。",
    ko: "LLM 피드백으로 전략 생성, 백테스트, 분석, 진화를 위한 오픈소스 트레이딩 프레임워크.",
  },
  "hero.line1": {
    en: "Generate strategies.",
    es: "Genera estrategias.",
    "zh-CN": "生成策略。",
    "zh-TW": "生成策略。",
    ja: "戦略を生成。",
    ko: "전략을 생성.",
  },
  "hero.line2": {
    en: "Backtest instantly.",
    es: "Backtesting instantáneo.",
    "zh-CN": "即时回测。",
    "zh-TW": "即時回測。",
    ja: "即座にバックテスト。",
    ko: "즉시 백테스트.",
  },
  "hero.line3": {
    en: "Evolve with AI.",
    es: "Evoluciona con IA.",
    "zh-CN": "AI 驱动进化。",
    "zh-TW": "AI 驅動進化。",
    ja: "AIで進化。",
    ko: "AI로 진화.",
  },
  "hero.getStarted": {
    en: "Get Started",
    es: "Comenzar",
    "zh-CN": "快速开始",
    "zh-TW": "快速開始",
    ja: "はじめる",
    ko: "시작하기",
  },

  // ── Capabilities Section ──
  "capabilities.label": {
    en: "Core Capabilities",
    es: "Capacidades principales",
    "zh-CN": "核心能力",
    "zh-TW": "核心能力",
    ja: "コア機能",
    ko: "핵심 기능",
  },
  "capabilities.strategyGen.title": {
    en: "Strategy Generation",
    es: "Generación de estrategias",
    "zh-CN": "策略生成",
    "zh-TW": "策略生成",
    ja: "戦略生成",
    ko: "전략 생성",
  },
  "capabilities.strategyGen.desc": {
    en: "Generate structured strategies from prompts or templates. Output is framework-compatible and validated.",
    es: "Genera estrategias estructuradas desde prompts o plantillas. La salida es compatible con el framework y validada.",
    "zh-CN": "从提示词或模板生成结构化策略。输出与框架兼容且经过验证。",
    "zh-TW": "從提示詞或模板生成結構化策略。輸出與框架相容且經過驗證。",
    ja: "プロンプトやテンプレートから構造化された戦略を生成。出力はフレームワーク互換で検証済み。",
    ko: "프롬프트 또는 템플릿에서 구조화된 전략을 생성. 출력은 프레임워크 호환 및 검증됨.",
  },
  "capabilities.analysis.title": {
    en: "Backtest Analysis",
    es: "Análisis de backtesting",
    "zh-CN": "回测分析",
    "zh-TW": "回測分析",
    ja: "バックテスト分析",
    ko: "백테스트 분석",
  },
  "capabilities.analysis.desc": {
    en: "LLM evaluates backtest results: scores performance (1-10), identifies weaknesses, and suggests actionable improvements.",
    es: "El LLM evalúa los resultados del backtesting: puntúa el rendimiento (1-10), identifica debilidades y sugiere mejoras accionables.",
    "zh-CN": "LLM 评估回测结果：评分（1-10）、识别弱点、提供可操作的改进建议。",
    "zh-TW": "LLM 評估回測結果：評分（1-10）、識別弱點、提供可操作的改進建議。",
    ja: "LLMがバックテスト結果を評価：パフォーマンスをスコアリング（1-10）、弱点を特定し、改善策を提案。",
    ko: "LLM이 백테스트 결과를 평가: 성과 점수(1-10), 약점 식별, 실행 가능한 개선 제안.",
  },
  "capabilities.backtesting.title": {
    en: "Built-in Backtesting",
    es: "Backtesting integrado",
    "zh-CN": "内置回测",
    "zh-TW": "內建回測",
    ja: "組み込みバックテスト",
    ko: "내장 백테스트",
  },
  "capabilities.backtesting.desc": {
    en: "Backtest using the same strategy logic used for live trading. No duplicate implementation.",
    es: "Backtesting usando la misma lógica de estrategia del trading en vivo. Sin implementación duplicada.",
    "zh-CN": "使用与实盘交易相同的策略逻辑进行回测。无需重复实现。",
    "zh-TW": "使用與實盤交易相同的策略邏輯進行回測。無需重複實現。",
    ja: "本番取引と同じ戦略ロジックでバックテスト。重複実装不要。",
    ko: "실거래와 동일한 전략 로직으로 백테스트. 중복 구현 불필요.",
  },
  "capabilities.evolution.title": {
    en: "Strategy Evolution",
    es: "Evolución de estrategias",
    "zh-CN": "策略进化",
    "zh-TW": "策略進化",
    ja: "戦略進化",
    ko: "전략 진화",
  },
  "capabilities.evolution.desc": {
    en: "One call to iteratively improve strategies. Generate → backtest → analyze → regenerate with feedback, automatically.",
    es: "Una sola llamada para mejorar estrategias iterativamente. Generar → backtesting → analizar → regenerar con retroalimentación, automáticamente.",
    "zh-CN": "一次调用迭代优化策略。生成 → 回测 → 分析 → 反馈再生成，全自动闭环。",
    "zh-TW": "一次調用迭代優化策略。生成 → 回測 → 分析 → 反饋再生成，全自動閉環。",
    ja: "一度の呼び出しで戦略を反復改善。生成→バックテスト→分析→フィードバックで再生成を自動化。",
    ko: "한 번의 호출로 전략을 반복 개선. 생성 → 백테스트 → 분석 → 피드백 재생성, 자동으로.",
  },

  // ── Quickstart Section ──
  "quickstart.label": {
    en: "Quickstart",
    es: "Inicio rápido",
    "zh-CN": "快速开始",
    "zh-TW": "快速開始",
    ja: "クイックスタート",
    ko: "빠른 시작",
  },
  "quickstart.install": {
    en: "Install",
    es: "Instalar",
    "zh-CN": "安装",
    "zh-TW": "安裝",
    ja: "インストール",
    ko: "설치",
  },
  "quickstart.example": {
    en: "Example",
    es: "Ejemplo",
    "zh-CN": "示例",
    "zh-TW": "範例",
    ja: "サンプル",
    ko: "예제",
  },
  "quickstart.readDocs": {
    en: "Read the Docs",
    es: "Leer la documentación",
    "zh-CN": "阅读文档",
    "zh-TW": "閱讀文件",
    ja: "ドキュメントを読む",
    ko: "문서 읽기",
  },

  // ── Architecture Section ──
  "architecture.label": {
    en: "Architecture",
    es: "Arquitectura",
    "zh-CN": "架构",
    "zh-TW": "架構",
    ja: "アーキテクチャ",
    ko: "아키텍처",
  },
  "architecture.title": {
    en: "Modular Pipeline",
    es: "Pipeline modular",
    "zh-CN": "模块化管道",
    "zh-TW": "模組化管道",
    ja: "モジュラーパイプライン",
    ko: "모듈형 파이프라인",
  },
  "architecture.desc": {
    en: "Strategies flow through a modular pipeline — from generation to backtesting, LLM-powered analysis, and iterative evolution. Each iteration feeds analysis back to the generator.",
    es: "Las estrategias fluyen a través de un pipeline modular — desde la generación hasta el backtesting, análisis potenciado por LLM y evolución iterativa. Cada iteración retroalimenta el análisis al generador.",
    "zh-CN": "策略通过模块化管道流转 — 从生成到回测、LLM 驱动分析和迭代进化。每轮迭代将分析反馈给生成器。",
    "zh-TW": "策略透過模組化管道流轉 — 從生成到回測、LLM 驅動分析和迭代進化。每輪迭代將分析反饋給生成器。",
    ja: "戦略はモジュラーパイプラインを通じて流れます — 生成からバックテスト、LLM分析、反復進化まで。各反復で分析がジェネレーターにフィードバックされます。",
    ko: "전략은 모듈형 파이프라인을 통해 흐릅니다 — 생성에서 백테스트, LLM 분석, 반복 진화까지. 각 반복에서 분석이 생성기로 피드백됩니다.",
  },
  "architecture.layer.strategy": {
    en: "Strategy Layer",
    es: "Capa de estrategia",
    "zh-CN": "策略层",
    "zh-TW": "策略層",
    ja: "戦略レイヤー",
    ko: "전략 레이어",
  },
  "architecture.layer.strategy.desc": {
    en: "Define trading logic",
    es: "Define la lógica de trading",
    "zh-CN": "定义交易逻辑",
    "zh-TW": "定義交易邏輯",
    ja: "取引ロジックを定義",
    ko: "트레이딩 로직 정의",
  },
  "architecture.layer.backtest": {
    en: "Backtest Engine",
    es: "Motor de backtesting",
    "zh-CN": "回测引擎",
    "zh-TW": "回測引擎",
    ja: "バックテストエンジン",
    ko: "백테스트 엔진",
  },
  "architecture.layer.backtest.desc": {
    en: "Simulate on historical data",
    es: "Simular con datos históricos",
    "zh-CN": "在历史数据上模拟",
    "zh-TW": "在歷史數據上模擬",
    ja: "過去のデータでシミュレーション",
    ko: "과거 데이터로 시뮬레이션",
  },
  "architecture.layer.analysis": {
    en: "Analysis Layer",
    es: "Capa de análisis",
    "zh-CN": "分析层",
    "zh-TW": "分析層",
    ja: "分析レイヤー",
    ko: "분석 레이어",
  },
  "architecture.layer.analysis.desc": {
    en: "LLM scores & suggests fixes",
    es: "LLM puntúa y sugiere correcciones",
    "zh-CN": "LLM 评分并建议改进",
    "zh-TW": "LLM 評分並建議改進",
    ja: "LLMがスコアリングと改善提案",
    ko: "LLM 점수 및 개선 제안",
  },
  "architecture.layer.evolution": {
    en: "Evolution Loop",
    es: "Bucle de evolución",
    "zh-CN": "进化循环",
    "zh-TW": "進化循環",
    ja: "進化ループ",
    ko: "진화 루프",
  },
  "architecture.layer.evolution.desc": {
    en: "Feedback → regenerate → repeat",
    es: "Retroalimentación → regenerar → repetir",
    "zh-CN": "反馈 → 再生成 → 循环",
    "zh-TW": "反饋 → 再生成 → 循環",
    ja: "フィードバック→再生成→繰り返し",
    ko: "피드백 → 재생성 → 반복",
  },
  "architecture.optional": {
    en: "opt",
    es: "opc",
    "zh-CN": "可选",
    "zh-TW": "可選",
    ja: "任意",
    ko: "선택",
  },

  // ── Footer CTA ──
  "footerCta.title": {
    en: "Start building with a unified trading framework.",
    es: "Comienza a construir con un framework de trading unificado.",
    "zh-CN": "开始使用统一的交易框架进行构建。",
    "zh-TW": "開始使用統一的交易框架進行構建。",
    ja: "統一された取引フレームワークで構築を始めましょう。",
    ko: "통합 트레이딩 프레임워크로 구축을 시작하세요.",
  },

  // ── Footer ──
  "footer.license": {
    en: "MIT License",
    es: "Licencia MIT",
    "zh-CN": "MIT 许可证",
    "zh-TW": "MIT 授權條款",
    ja: "MITライセンス",
    ko: "MIT 라이선스",
  },
} as const;

export type TranslationKey = keyof typeof translations;

export function getTranslation(key: TranslationKey, locale: Locale): string {
  return translations[key][locale];
}

export default translations;
