"use client";

import { useState, useCallback } from "react";

interface Token {
  type: string;
  value: string;
}

function tokenizePython(code: string): Token[] {
  const tokens: Token[] = [];
  const keywords = new Set([
    "from", "import", "def", "class", "return", "if", "else", "elif",
    "for", "while", "in", "not", "and", "or", "True", "False", "None",
    "with", "as", "try", "except", "raise", "pass", "lambda", "yield",
  ]);

  let i = 0;
  while (i < code.length) {
    if (code.slice(i, i + 3) === '"""' || code.slice(i, i + 3) === "'''") {
      const quote = code.slice(i, i + 3);
      let end = code.indexOf(quote, i + 3);
      if (end === -1) end = code.length - 3;
      tokens.push({ type: "string", value: code.slice(i, end + 3) });
      i = end + 3;
      continue;
    }

    if (code[i] === '"' || code[i] === "'") {
      const quote = code[i];
      let j = i + 1;
      while (j < code.length && code[j] !== quote) {
        if (code[j] === "\\") j++;
        j++;
      }
      tokens.push({ type: "string", value: code.slice(i, j + 1) });
      i = j + 1;
      continue;
    }

    if (code[i] === "#") {
      let j = i;
      while (j < code.length && code[j] !== "\n") j++;
      tokens.push({ type: "comment", value: code.slice(i, j) });
      i = j;
      continue;
    }

    if (/\d/.test(code[i])) {
      let j = i;
      while (j < code.length && /[\d.xXa-fA-F]/.test(code[j])) j++;
      tokens.push({ type: "number", value: code.slice(i, j) });
      i = j;
      continue;
    }

    if (/[a-zA-Z_]/.test(code[i])) {
      let j = i;
      while (j < code.length && /[a-zA-Z0-9_]/.test(code[j])) j++;
      const word = code.slice(i, j);
      let lookAhead = j;
      while (lookAhead < code.length && code[lookAhead] === " ") lookAhead++;

      if (keywords.has(word)) {
        tokens.push({ type: "keyword", value: word });
      } else if (code[lookAhead] === "(") {
        tokens.push({ type: "function", value: word });
      } else if (word[0] === word[0].toUpperCase() && word[0] !== word[0].toLowerCase()) {
        tokens.push({ type: "class", value: word });
      } else {
        tokens.push({ type: "plain", value: word });
      }
      i = j;
      continue;
    }

    if ("=<>!+-*/%&|^~".includes(code[i])) {
      tokens.push({ type: "operator", value: code[i] });
      i++;
      continue;
    }

    if ("()[]{}:.,;@".includes(code[i])) {
      tokens.push({ type: "punctuation", value: code[i] });
      i++;
      continue;
    }

    tokens.push({ type: "plain", value: code[i] });
    i++;
  }

  return tokens;
}

function tokenizeBash(code: string): Token[] {
  const tokens: Token[] = [];
  const keywords = new Set(["pip", "npm", "npx", "yarn", "sudo", "apt", "brew"]);

  let i = 0;
  while (i < code.length) {
    if (code[i] === "#") {
      let j = i;
      while (j < code.length && code[j] !== "\n") j++;
      tokens.push({ type: "comment", value: code.slice(i, j) });
      i = j;
      continue;
    }

    if (code[i] === '"' || code[i] === "'") {
      const quote = code[i];
      let j = i + 1;
      while (j < code.length && code[j] !== quote) {
        if (code[j] === "\\") j++;
        j++;
      }
      tokens.push({ type: "string", value: code.slice(i, j + 1) });
      i = j + 1;
      continue;
    }

    if (/[a-zA-Z_\-]/.test(code[i])) {
      let j = i;
      while (j < code.length && /[a-zA-Z0-9_\-.]/.test(code[j])) j++;
      const word = code.slice(i, j);
      if (keywords.has(word)) {
        tokens.push({ type: "function", value: word });
      } else {
        tokens.push({ type: "plain", value: word });
      }
      i = j;
      continue;
    }

    tokens.push({ type: "plain", value: code[i] });
    i++;
  }

  return tokens;
}

function highlightCode(code: string, language: string): Token[] {
  switch (language) {
    case "python":
      return tokenizePython(code);
    case "bash":
    case "shell":
      return tokenizeBash(code);
    default:
      return [{ type: "plain", value: code }];
  }
}

interface CodeBlockProps {
  language: string;
  code: string;
  showCopy?: boolean;
  label?: string;
}

export default function CodeBlock({
  language,
  code,
  showCopy = true,
  label,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [code]);

  const tokens = highlightCode(code, language);

  return (
    <div className="group relative border border-[var(--border-primary)] bg-[var(--bg-code)]">
      {label && (
        <div className="border-b border-[var(--border-primary)] px-4 py-2">
          <span className="text-xs text-[var(--text-tertiary)]">{label}</span>
        </div>
      )}

      <div className="relative">
        {showCopy && (
          <button
            onClick={handleCopy}
            className="absolute right-3 top-3 z-10 flex h-7 w-7 items-center justify-center border border-[var(--border-primary)] bg-[var(--bg-primary)] text-[var(--text-tertiary)] opacity-0 transition-all hover:text-[var(--text-primary)] group-hover:opacity-100"
            aria-label="Copy code to clipboard"
          >
            {copied ? (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            )}
          </button>
        )}

        <pre className="code-scrollbar overflow-x-auto p-4 font-mono text-[13px] leading-relaxed">
          <code>
            {tokens.map((token, i) => (
              <span key={i} className={`token-${token.type}`}>
                {token.value}
              </span>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
