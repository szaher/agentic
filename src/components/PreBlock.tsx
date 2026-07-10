"use client";

import React from "react";
import CodeBlock from "./CodeBlock";

function extractText(node: unknown): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
    return extractText(node.props.children);
  }
  return "";
}

export default function PreBlock({ children, ...props }: React.ComponentPropsWithoutRef<"pre">) {
  if (React.isValidElement(children)) {
    const childProps = children.props as Record<string, unknown>;
    const className = (childProps?.className as string) || "";
    if (className.startsWith("language-")) {
      const language = className.replace("language-", "");
      const code = extractText(childProps.children);
      if (code) {
        return <CodeBlock code={code} language={language} />;
      }
    }
  }
  return <pre {...props}>{children}</pre>;
}
