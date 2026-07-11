import { describe, expect, it } from "vitest";
import { buildSystemPrompt } from "@/lib/claude";

describe("buildSystemPrompt", () => {
  it("includes tutor role", () => {
    const prompt = buildSystemPrompt();
    expect(prompt).toContain("expert tutor");
  });

  it("includes academy topic guidance", () => {
    const prompt = buildSystemPrompt();
    expect(prompt).toContain("LLM agents");
  });

  it("includes mermaid instruction", () => {
    const prompt = buildSystemPrompt();
    expect(prompt).toContain("mermaid");
  });

  it("includes module context when provided", () => {
    const prompt = buildSystemPrompt({ moduleTitle: "Foundations of LLM Agents", lessonTitle: "The Agent Loop" });
    expect(prompt).toContain("Foundations of LLM Agents");
    expect(prompt).toContain("The Agent Loop");
  });
});
