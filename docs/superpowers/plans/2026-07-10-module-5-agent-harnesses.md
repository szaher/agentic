# Module 5: Agent Harnesses and Runtime Systems — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Insert a new Module 5 (Agent Harnesses and Runtime Systems) into the LLM Agents Academy, renumber existing modules 5–12 to 6–13, and create 12 MDX lessons covering the agent harness as a runtime layer.

**Architecture:** The module teaches the harness as a stack of eight runtime concerns (loop → tools → context/state → control flow → persistence → observability → human intervention). Lessons 1–8 are conceptual with code examples, lessons 9–10 are hands-on build labs, and lessons 11–12 cover ecosystem comparison and selection. A recurring "research assistant" case study threads through lessons 1–10. All content follows existing MDX patterns: `##` headings only, `<MermaidDiagram>` for diagrams, `<CodeBlock>` for code, prose-based with blockquote callouts, 4-question frontmatter quizzes (except lab lessons).

**Tech Stack:** MDX, Mermaid, Python (code examples), Next.js (platform — no changes needed)

## Global Constraints

- Do NOT modify any `src/`, `__tests__/`, or root config files (except `academy.config.ts` for the color array).
- Use `##` headings only inside lesson bodies — never `#`.
- Every `<MermaidDiagram>` must have a `chart` prop with valid Mermaid syntax.
- Every `<CodeBlock>` must have `code`, `language`, and `filename` props. Use the existing project's `<CodeBlock>` prop style exactly: `<CodeBlock code={...} language="python" filename="example.py" />`. Do not use children-based code blocks — the component expects code passed via the `code` prop as a template literal.
- Cross-references use prose form: `Module N (Title)` or `Module N, Lesson N`.
- Frontmatter quizzes have exactly 4 options per question, 0-based `correctIndex`.
- Lab lessons (09, 10) omit frontmatter quizzes.
- Average lesson target: 350–500 lines. Lab lessons: 700–900 lines.
- Python code examples use type hints and are self-contained (no framework imports).
- Design spec: `docs/superpowers/specs/2026-07-09-agent-harnesses-runtime-design.md`
- **Commit policy:** Commit after each task if using incremental commits; otherwise keep changes staged and commit once after all quality gates pass in Task 14.

---

## File Structure

### Files to create

```
content/module-5/
  meta.json                           # Module metadata with 12 lessons
  01-what-is-an-agent-harness.mdx     # Lesson 1: define the harness layer
  02-agent-loop-internals.mdx         # Lesson 2: loop mechanics
  03-tool-dispatch.mdx                # Lesson 3: dispatch pipeline
  04-context-goals-state.mdx          # Lesson 4: four state domains
  05-control-flow.mdx                 # Lesson 5: loops/routers/graphs/workflows
  06-persistence-checkpointing.mdx    # Lesson 6: durability
  07-human-in-the-loop.mdx            # Lesson 7: intervention points
  08-observability.mdx                # Lesson 8: traces/logs/evals/replay
  09-build-minimal-harness.mdx        # Lesson 9: build lab
  10-extend-harness.mdx               # Lesson 10: extend lab
  11-ecosystem-map.mdx                # Lesson 11: ecosystem comparison
  12-choosing-and-frontier.mdx        # Lesson 12: selection + frontier
```

### Files to modify

```
content/module-5/  → rename to content/module-6/   (+ update meta.json id: 5→6)
content/module-6/  → rename to content/module-7/   (+ update meta.json id: 6→7)
content/module-7/  → rename to content/module-8/   (+ update meta.json id: 7→8)
content/module-8/  → rename to content/module-9/   (+ update meta.json id: 8→9)
content/module-9/  → rename to content/module-10/  (+ update meta.json id: 9→10)
content/module-10/ → rename to content/module-11/  (+ update meta.json id: 10→11)
content/module-11/ → rename to content/module-12/  (+ update meta.json id: 11→12)
content/module-12/ → rename to content/module-13/  (+ update meta.json id: 12→13)

academy.config.ts                     # Add 13th entry to moduleColors array

content/**/*.mdx                      # Update all "Module N" cross-references
                                      # (82 files, hundreds of references)
```

---

### Task 1: Renumber Existing Modules 5–12 → 6–13

**Files:**
- Modify: `content/module-5/` through `content/module-12/` (rename directories)
- Modify: `content/module-{6..13}/meta.json` (update `id` fields)
- Modify: `content/**/*.mdx` and `content/**/*.md`, `content/**/*.json`, `docs/**/*.md` (update all cross-references)
- Modify: `academy.config.ts` (add 13th color entry)

**Interfaces:**
- Consumes: nothing
- Produces: Renumbered module directories with consecutive IDs 1–4, 6–13 (gap at 5 for the new module). All cross-references updated. Navigation and routing continue to work.

- [ ] **Step 0: Preflight safety checks**

Verify all source directories exist, the target directory does not, and the working tree is clean:

```bash
cd /Users/szaher/go/src/github.com/szaher/saad/learn/agents
ls content/module-{5,6,7,8,9,10,11,12}/meta.json
test ! -d content/module-13 && echo "OK: module-13 does not exist" || echo "ABORT: module-13 already exists"
git status --short
```

Expected: all 8 meta.json files listed, module-13 does not exist, working tree is clean (or only has expected staged changes). If module-13 exists or the tree has unrelated changes, stop and resolve before proceeding.

- [ ] **Step 1: Rename directories from highest to lowest**

This order avoids naming conflicts (if we renamed module-5 first, it would collide with module-6 before module-6 is renamed).

```bash
cd /Users/szaher/go/src/github.com/szaher/saad/learn/agents
mv content/module-12 content/module-13
mv content/module-11 content/module-12
mv content/module-10 content/module-11
mv content/module-9 content/module-10
mv content/module-8 content/module-9
mv content/module-7 content/module-8
mv content/module-6 content/module-7
mv content/module-5 content/module-6
```

- [ ] **Step 2: Update meta.json `id` fields in each renamed module**

```bash
cd /Users/szaher/go/src/github.com/szaher/saad/learn/agents
perl -i -pe 's/"id": 12/"id": 13/' content/module-13/meta.json
perl -i -pe 's/"id": 11/"id": 12/' content/module-12/meta.json
perl -i -pe 's/"id": 10/"id": 11/' content/module-11/meta.json
perl -i -pe 's/"id": 9/"id": 10/'  content/module-10/meta.json
perl -i -pe 's/"id": 8/"id": 9/'   content/module-9/meta.json
perl -i -pe 's/"id": 7/"id": 8/'   content/module-8/meta.json
perl -i -pe 's/"id": 6/"id": 7/'   content/module-7/meta.json
perl -i -pe 's/"id": 5/"id": 6/'   content/module-6/meta.json
```

- [ ] **Step 3: Update cross-references in all MDX files**

Uses temporary `§` markers to prevent double-replacement (e.g., "Module 5" → "Module 6" then "Module 6" → "Module 7" would corrupt the original "Module 5" reference). The `\b` word boundary ensures "Module 10" is not confused with "Module 1".

Process from highest to lowest number, then strip markers:

```bash
cd /Users/szaher/go/src/github.com/szaher/saad/learn/agents
find content/ -name "*.mdx" -exec perl -i -pe '
  s/Module 12\b/Module §13§/g;
  s/Module 11\b/Module §12§/g;
  s/Module 10\b/Module §11§/g;
  s/Module 9\b/Module §10§/g;
  s/Module 8\b/Module §9§/g;
  s/Module 7\b/Module §8§/g;
  s/Module 6\b/Module §7§/g;
  s/Module 5\b/Module §6§/g;
' {} \;

find content/ -name "*.mdx" -exec perl -i -pe 's/§//g' {} \;
```

- [ ] **Step 4: Update cross-references beyond MDX**

References may also exist in meta.json descriptions, docs, scripts, README, or tutorial specs. Search broadly:

```bash
cd /Users/szaher/go/src/github.com/szaher/saad/learn/agents
grep -RIn "Module [5-9]\b\|Module 1[0-2]\b" content/ docs/ --include="*.mdx" --include="*.md" --include="*.json" | grep -v "node_modules" | head -100
```

Inspect results. Apply the same `§`-marker replacement to any non-MDX files that contain stale module numbers. Meta.json `description` fields and doc files are the most likely locations.

- [ ] **Step 5: Verify no stale references remain**

```bash
cd /Users/szaher/go/src/github.com/szaher/saad/learn/agents
# Check that no old "Module 5" references exist outside the future module-5
grep -rn "Module 5" content/module-{1,2,3,4,6,7,8,9,10,11,12,13}/ --include="*.mdx" | head -20
# Should return 0 results
```

- [ ] **Step 6: Add 13th entry to academy.config.ts moduleColors**

The existing array has 12 entries. Add a 13th using `#ed8936` (continuing the repeating color cycle). Open `academy.config.ts` and extend the `moduleColors` array:

```typescript
// Before (12 entries):
moduleColors: ["#68d391", "#4fd1c5", "#63b3ed", "#b794f4", "#ed8936", "#fc8181", "#ecc94b", "#68d391", "#4fd1c5", "#63b3ed", "#b794f4", "#ed8936"]

// After (13 entries — insert "#9f7aea" at index 4 for the new Module 5):
moduleColors: ["#68d391", "#4fd1c5", "#63b3ed", "#b794f4", "#9f7aea", "#ed8936", "#fc8181", "#ecc94b", "#68d391", "#4fd1c5", "#63b3ed", "#b794f4", "#ed8936"]
```

- [ ] **Step 7: Verify renumbering is correct**

```bash
cd /Users/szaher/go/src/github.com/szaher/saad/learn/agents
# Check all meta.json ids match directory numbers
for d in content/module-*/; do
  dir_num=$(basename "$d" | sed 's/module-//')
  meta_id=$(python3 -c "import json; print(json.load(open('${d}meta.json'))['id'])")
  if [ "$dir_num" != "$meta_id" ]; then
    echo "MISMATCH: $d has id=$meta_id"
  fi
done

# Should have no output (all match). Module 5 dir doesn't exist yet — that's expected.
```

- [ ] **Step 8: Commit the renumbering**

```bash
cd /Users/szaher/go/src/github.com/szaher/saad/learn/agents
git add content/ academy.config.ts
git commit -m "Renumber modules 5-12 to 6-13 for new Module 5 insertion

Rename directories, update meta.json ids, update all cross-references
in MDX lesson text, and add 13th moduleColors entry."
```

---

### Task 2: Create Module 5 Scaffold and Lesson 1 (What Is an Agent Harness?)

**Files:**
- Create: `content/module-5/meta.json`
- Create: `content/module-5/01-what-is-an-agent-harness.mdx`

**Interfaces:**
- Consumes: Renumbered modules from Task 1 (Module 5 directory slot is now available)
- Produces: Module 5 meta.json with all 12 lesson entries. Lesson 1 MDX introducing the harness concept, eight concerns, and layer boundaries.

- [ ] **Step 1: Create the module-5 directory and meta.json**

```bash
mkdir -p /Users/szaher/go/src/github.com/szaher/saad/learn/agents/content/module-5
```

Write `content/module-5/meta.json` with the full module metadata. Use the exact structure from the design spec:

```json
{
  "id": 5,
  "title": "Agent Harnesses and Runtime Systems",
  "description": "The runtime layer that turns agent architectures into executable systems — managing the agent loop, tool dispatch, context and state flow, persistence, observability, error recovery, and human intervention across real production harnesses.",
  "color": "#9f7aea",
  "lessons": [
    {
      "slug": "01-what-is-an-agent-harness",
      "title": "What Is an Agent Harness?",
      "description": "Defining the harness as a runtime layer and the eight concerns every harness must solve",
      "estimatedMinutes": 40,
      "diagramTypes": ["architecture", "concept"],
      "hasCode": false,
      "hasQuiz": true
    },
    {
      "slug": "02-agent-loop-internals",
      "title": "The Agent Loop Internals",
      "description": "Runs, turns, steps, and the decision points where the harness controls agent behavior",
      "estimatedMinutes": 50,
      "diagramTypes": ["flowchart"],
      "hasCode": true,
      "hasQuiz": true
    },
    {
      "slug": "03-tool-dispatch",
      "title": "Tool Dispatch and Action Validation",
      "description": "From tool-call request to function execution: dispatch pipelines, MCP discovery, and permission boundaries",
      "estimatedMinutes": 45,
      "diagramTypes": ["flowchart"],
      "hasCode": true,
      "hasQuiz": true
    },
    {
      "slug": "04-context-goals-state",
      "title": "Context, Goals, Memory, and State",
      "description": "The four state domains a harness manages and how context is assembled each turn",
      "estimatedMinutes": 50,
      "diagramTypes": ["architecture", "concept"],
      "hasCode": true,
      "hasQuiz": true
    },
    {
      "slug": "05-control-flow",
      "title": "Control Flow: Loops, Routers, Graphs, and Workflows",
      "description": "Four control flow models, the autonomy spectrum, and handoffs as runtime events",
      "estimatedMinutes": 50,
      "diagramTypes": ["flowchart", "architecture"],
      "hasCode": true,
      "hasQuiz": true
    },
    {
      "slug": "06-persistence-checkpointing",
      "title": "Persistence, Checkpointing, and Resumability",
      "description": "Why runs need durability and how checkpointing enables recovery, inspection, time travel, and human intervention",
      "estimatedMinutes": 45,
      "diagramTypes": ["flowchart", "concept"],
      "hasCode": true,
      "hasQuiz": true
    },
    {
      "slug": "07-human-in-the-loop",
      "title": "Human-in-the-Loop and Intervention Points",
      "description": "Approval gates, escalation triggers, the autonomy-oversight spectrum, and the production triad",
      "estimatedMinutes": 45,
      "diagramTypes": ["flowchart", "concept"],
      "hasCode": true,
      "hasQuiz": true
    },
    {
      "slug": "08-observability",
      "title": "Observability: Traces, Logs, Evals, and Replay",
      "description": "Five observability pillars, trace anatomy, cost/latency tracking, and realistic replay levels",
      "estimatedMinutes": 50,
      "diagramTypes": ["architecture", "flowchart"],
      "hasCode": true,
      "hasQuiz": true
    },
    {
      "slug": "09-build-minimal-harness",
      "title": "Build a Minimal Harness from Scratch",
      "description": "Hands-on: implement the canonical loop, tool registry, context assembly, and termination controls",
      "estimatedMinutes": 60,
      "diagramTypes": [],
      "hasCode": true,
      "hasQuiz": false
    },
    {
      "slug": "10-extend-harness",
      "title": "Extend the Harness: State, Checkpoints, Tracing, and Intervention",
      "description": "Hands-on: add structured state, checkpoint/resume with idempotency, tracing, and an approval gate",
      "estimatedMinutes": 60,
      "diagramTypes": [],
      "hasCode": true,
      "hasQuiz": false
    },
    {
      "slug": "11-ecosystem-map",
      "title": "Ecosystem Map: SDKs, Graph Runtimes, Workflow Runtimes, Multi-Agent Runtimes",
      "description": "Classify and compare production harnesses across the eight concerns",
      "estimatedMinutes": 50,
      "diagramTypes": ["concept"],
      "hasCode": false,
      "hasQuiz": true
    },
    {
      "slug": "12-choosing-and-frontier",
      "title": "Choosing a Harness + Frontier Appendix",
      "description": "Decision framework for harness selection plus emerging runtime directions",
      "estimatedMinutes": 45,
      "diagramTypes": ["flowchart", "concept"],
      "hasCode": false,
      "hasQuiz": true
    }
  ]
}
```

- [ ] **Step 2: Write Lesson 1 MDX — What Is an Agent Harness?**

Create `content/module-5/01-what-is-an-agent-harness.mdx`. Target: 350–450 lines.

**Required content structure:**

```
---
title: "What Is an Agent Harness?"
quiz: (4 questions — see content spec below)
---

## Overview
- The harness is invisible when things work and the first thing you debug when they don't.
- Set the scene: raw API calls vs managed runtime.
- Introduce the "research assistant" case study that threads through the module.

## The Harness Layer
- Define the harness as the runtime layer between agent architectures and execution.
- OS analogy: the harness manages the agent lifecycle the way an OS manages processes.
- <MermaidDiagram> showing 5 layers: Application → Orchestration → Harness → Model API + Tools + Memory + Environment

## The Five Adjacent Layers
- Model API: produces outputs and tool-call requests.
- Tool layer: actual capabilities, functions, APIs.
- Harness / runtime: controls loop, validates actions, manages state, calls tools, persists, traces, gates intervention.
- Application layer: UX, business logic, product workflow.
- Orchestration layer: coordination across agents, workflows, services, deployment.

## The Eight Harness Concerns
- Numbered list with one paragraph each explaining what the concern is and why it matters.
  1. Loop execution
  2. Tool dispatch
  3. Context management
  4. State and goals
  5. Control flow
  6. Persistence
  7. Observability
  8. Human intervention
- <MermaidDiagram> showing the eight-concern stack as a vertical layer diagram.

## The Harness Spectrum
- From "no harness" (raw API calls) to "full runtime" (managed execution with durable state).
- Where different approaches fall: raw while loop → thin SDK → graph runtime → workflow engine.

## Case Study: The Missing Concerns
- Present a 30-line Python "research assistant" as a naive raw API loop.
- <CodeBlock> with the raw loop code.
- Walk through what's missing: no error recovery, no state, no checkpointing, no tracing, no approval gates.
- Ask: what breaks first in production?

## Exercise: Classify Agent Failures
- Five agent failure scenarios (presented as a numbered list with >blockquote descriptions).
- For each: is it a harness-layer, model-layer, or tool-layer problem?
- Answers in a >blockquote reveal at the end.

## Summary
- The harness is the runtime layer you need to understand before you can evaluate frameworks.
- Preview: next lesson opens the agent loop and traces a single turn through all decision points.
```

**Frontmatter quiz questions:**

```yaml
quiz:
  - question: "What distinguishes the harness layer from the model API layer?"
    options:
      - "The harness generates text, while the model API manages the loop"
      - "The harness controls the agent lifecycle — loop execution, tool dispatch, state management, and observability — while the model API produces outputs and tool-call requests"
      - "The harness is a cloud service, while the model API runs locally"
      - "There is no distinction — harness and model API are the same layer"
    correctIndex: 1
  - question: "Which of the eight harness concerns is most directly responsible for preventing a 20-step agent run from restarting at step 1 after a crash?"
    options:
      - "Tool dispatch"
      - "Context management"
      - "Persistence"
      - "Loop execution"
    correctIndex: 2
  - question: "A raw while-loop agent fails to catch a tool timeout, retries the same tool call infinitely, and burns through the token budget. Which harness concerns are missing?"
    options:
      - "Only observability — the agent cannot see the timeout"
      - "Loop execution (no termination controls) and tool dispatch (no error handling) and observability (no cost tracking)"
      - "Only tool dispatch — the tool should handle its own timeouts"
      - "Only human intervention — a human should stop the agent"
    correctIndex: 1
  - question: "Why is human intervention listed as its own harness concern rather than part of control flow?"
    options:
      - "Because human intervention requires its own UI framework"
      - "Because intervention requires coupling persistence (to checkpoint state), control flow (to pause execution), and observability (to present context) — it is a cross-cutting concern important enough for its own treatment"
      - "Because human intervention only happens in multi-agent systems"
      - "Because control flow is only about routing, not about pausing"
    correctIndex: 1
```

**Key MermaidDiagram — five-layer architecture:**

```
graph TB
    APP["Application Layer<br/>(UX, business logic, product workflow)"]
    ORCH["Orchestration Layer<br/>(multi-agent coordination, deployment)"]
    HARNESS["Harness / Runtime Layer<br/>(loop, tools, state, control flow,<br/>persistence, observability, HITL)"]
    MODEL["Model API<br/>(LLM calls, tool-call requests)"]
    TOOLS["Tool Layer<br/>(functions, APIs, external services)"]
    MEM["Memory / Knowledge<br/>(vector stores, databases)"]
    ENV["Environment<br/>(file system, network, user)"]

    APP --> ORCH
    ORCH --> HARNESS
    HARNESS --> MODEL
    HARNESS --> TOOLS
    HARNESS --> MEM
    HARNESS --> ENV

    style HARNESS fill:#9f7aea,stroke:#6b46c1,color:#fff
```

**Key CodeBlock — the naive research assistant (case study):**

```python
import anthropic

client = anthropic.Anthropic()

def research(question: str) -> str:
    messages = [{"role": "user", "content": question}]
    while True:
        response = client.messages.create(
            model="claude-sonnet-4-20250514",
            max_tokens=1024,
            tools=[{"name": "web_search", ...}, {"name": "calculator", ...}],
            messages=messages,
        )
        if response.stop_reason == "end_turn":
            return response.content[0].text
        for block in response.content:
            if block.type == "tool_use":
                result = call_tool(block.name, block.input)  # no validation
                messages.append({"role": "assistant", "content": response.content})
                messages.append({"role": "user", "content": [
                    {"type": "tool_result", "tool_use_id": block.id, "content": result}
                ]})
```

- [ ] **Step 3: Verify the module loads correctly**

```bash
cd /Users/szaher/go/src/github.com/szaher/saad/learn/agents
pnpm validate
```

Expected: Module 5 appears in validation output. No errors for meta.json or lesson 01.

- [ ] **Step 4: Commit**

```bash
git add content/module-5/
git commit -m "Add Module 5 scaffold and Lesson 1: What Is an Agent Harness?"
```

---

### Task 3: Lesson 2 — The Agent Loop Internals

**Files:**
- Create: `content/module-5/02-agent-loop-internals.mdx`

**Interfaces:**
- Consumes: Harness concept and eight concerns from Lesson 1
- Produces: Run/turn/step vocabulary, canonical loop structure, turn lifecycle, termination strategies. Used by all subsequent lessons.

- [ ] **Step 1: Write Lesson 2 MDX**

Target: 400–500 lines. Required sections:

```
## Overview
- Connect to Lesson 1: you know what a harness is; now open the loop and trace a single turn.
- Preview: by the end, you can read any SDK's loop and identify every decision point.

## Vocabulary: Runs, Turns, and Steps
- Define run, turn, step precisely. Use a DataTable or bold-term list.
- Map to SDK terminology: OpenAI's Runner, LangGraph's graph invocation.

## The Canonical Loop
- Present the loop as: while not done: context → model → parse → act → observe → update
- <MermaidDiagram> flowchart of a single turn with all decision points.
- <CodeBlock language="python" filename="canonical_loop.py"> pseudocode with annotated decision points.

## Turn Lifecycle
- Pre-turn hooks → context assembly → model call → response parsing → action validation → tool execution → post-turn hooks → termination check.
- Explain each phase in one paragraph.

## Loop Termination Strategies
- Max turns, token budget, explicit stop signal, goal satisfaction, timeout.
- Table comparing when each is appropriate.

## Loop Shapes
- Simple while-loop, event-driven, coroutine-based, graph-based.
- <MermaidDiagram> comparing 3 loop shapes side by side.
- Short code snippets showing how Claude Agent SDK, OpenAI Agents SDK, and LangGraph express the same loop differently (3 <CodeBlock> components, ~10 lines each).

## Streaming vs Batch Execution
- When tokens stream vs when the harness waits for full responses.
- Implications for tool dispatch timing.

## Case Study: Tracing a Research Assistant Run
- 4-turn run: search → search → calculate → respond.
- Annotate each turn with harness decisions: what context was assembled, what termination check ran, why it continued.

## Summary
- Preview Lesson 3: now that you understand the loop, the next lesson opens tool dispatch.
```

**Frontmatter quiz — 4 questions covering:** run vs turn vs step distinction, turn lifecycle ordering, when to use max-turns vs goal-satisfaction termination, and what happens when a streaming response includes a tool call mid-stream.

- [ ] **Step 2: Run validation**

```bash
pnpm validate
```

- [ ] **Step 3: Commit**

```bash
git add content/module-5/02-agent-loop-internals.mdx
git commit -m "Add Lesson 2: The Agent Loop Internals"
```

---

### Task 4: Lesson 3 — Tool Dispatch and Action Validation

**Files:**
- Create: `content/module-5/03-tool-dispatch.mdx`

**Interfaces:**
- Consumes: Loop structure and turn lifecycle from Lesson 2
- Produces: Tool dispatch pipeline model, static vs dynamic registration, MCP as capability discovery. Referenced by Lesson 9 (build lab).

- [ ] **Step 1: Write Lesson 3 MDX**

Target: 400–500 lines. Required sections:

```
## Overview
- Connect to Module 3 (Tool Use & Function Calling): that module taught how tools work from the model's perspective; this lesson shows how the harness orchestrates tool execution.

## The Dispatch Pipeline
- parse tool call → validate parameters → check permissions → execute → capture result → format for model
- <MermaidDiagram> flowchart of the full pipeline.

## The Dispatch Table
- Mapping tool names to implementations.
- <CodeBlock language="python" filename="dispatch_table.py"> showing a dict-based tool registry with schema validation.

## Parameter Validation
- Schema checking before execution.
- <CodeBlock> showing JSON Schema validation on tool inputs.

## Permission Boundaries
- Which tools the agent can call, under what conditions.
- Static permission lists vs dynamic policy evaluation.

## Parallel vs Sequential Tool Execution
- When tools can run concurrently. How the harness manages concurrency.

## Error Capture and Result Formatting
- Turning exceptions, timeouts, and partial results into model-readable observations.
- <CodeBlock> showing error wrapping.

## MCP: Dynamic Capability Discovery
- MCP is not just a tool dispatcher — it is a protocol for connecting AI applications to external systems.
- Tool listing, capability negotiation, invocation, result/error return, security boundaries.
- <MermaidDiagram> comparing static registry vs MCP dynamic discovery.
- <CodeBlock> showing how MCP tool dispatch differs from local function dispatch.

## Structured Tool Calls vs Text Parsing
- Why production harnesses always use typed schemas.

## Case Study: Dispatching Search and Calculator
- The research assistant dispatches web_search (succeeds) and calculator (schema validation fails on first attempt, succeeds on retry).
- Show the full pipeline for each.

## Summary
- Preview Lesson 4: tools produce results, but where do those results go? Next: context, goals, and state.
```

**Frontmatter quiz — 4 questions covering:** dispatch pipeline ordering, when MCP discovery is preferred over static registration, what happens when parameter validation fails, and parallel vs sequential dispatch tradeoffs.

- [ ] **Step 2: Run validation and commit**

```bash
pnpm validate
git add content/module-5/03-tool-dispatch.mdx
git commit -m "Add Lesson 3: Tool Dispatch and Action Validation"
```

---

### Task 5: Lesson 4 — Context, Goals, Memory, and State

**Files:**
- Create: `content/module-5/04-context-goals-state.mdx`

**Interfaces:**
- Consumes: Loop and dispatch pipeline from Lessons 2–3
- Produces: Four-state-domain model (context window, goals, memory, agent state), context assembly pipeline. Referenced by Lessons 6 (persistence) and 9–10 (build labs).

- [ ] **Step 1: Write Lesson 4 MDX**

Target: 400–500 lines. Required sections:

```
## Overview
- The model doesn't decide what it sees — the harness does.

## The Four State Domains
- Context window (what the model sees now)
- Goals (what the agent is trying to achieve)
- Conversation memory (history)
- Agent state (structured data persisted across turns)
- <MermaidDiagram> showing the four domains: what persists vs what is assembled per turn.

## Context Assembly
- System prompt + goal instructions + history + tool results + retrieved knowledge → context window.
- <MermaidDiagram> pipeline: sources → priority ranking → budget allocation → final window.
- <CodeBlock language="python" filename="context_assembly.py"> showing a context builder function.

## The Context Budget
- Token budget arithmetic: system prompt takes X, history takes Y, leaving Z for tool results.
- Strategies: truncation, summarization, sliding window, priority ranking.

## Goal Representations
- Natural language instructions, structured task objects, hierarchical goal trees.
- How goals flow: initial goal → sub-goal decomposition → tracking → completion signals.

## State vs Context
- State persists across turns and sessions; context is assembled fresh each turn from state + new inputs.

## How Harnesses Expose State
- OpenAI Agents SDK: RunContextWrapper (not passed to LLM) + sessions.
- LangGraph: state channels + checkpointers + stores.
- Claude Agent SDK: conversation history + tool_use/tool_result blocks + MCP context.
- Short code snippets for each (3 <CodeBlock> components).

## Case Study: Context Pressure
- Research assistant has searched 4 sources. Context budget is full.
- Show 3 strategies (truncate, summarize, drop least relevant) and how each changes the model's next output.

## Summary
- Preview Lesson 5: you know what's in the context and state. Next: how the harness controls what happens next — control flow.
```

**Frontmatter quiz — 4 questions covering:** state vs context distinction, what OpenAI's RunContextWrapper is (and isn't), context budget allocation strategy, and the consequence of dropping tool results from context.

- [ ] **Step 2: Run validation and commit**

```bash
pnpm validate
git add content/module-5/04-context-goals-state.mdx
git commit -m "Add Lesson 4: Context, Goals, Memory, and State"
```

---

### Task 6: Lesson 5 — Control Flow

**Files:**
- Create: `content/module-5/05-control-flow.mdx`

**Interfaces:**
- Consumes: Loop, dispatch, and state from Lessons 2–4; architecture patterns from Module 4
- Produces: Four control flow models (loop, router, graph, state machine), autonomy spectrum, handoff mechanics. Referenced by Lessons 9–10 (build labs) and 11 (ecosystem map).

- [ ] **Step 1: Write Lesson 5 MDX**

Target: 400–500 lines. Required sections:

```
## Overview
- Module 4 taught the architecture shapes; this lesson shows how the harness implements them at runtime.

## Four Control Flow Models
- Linear loop, conditional router, directed graph, state machine/workflow.
- <MermaidDiagram> showing all four side by side.

## Architecture → Control Flow Mapping
- ReAct → usually linear loop
- Plan-and-execute → loop + planning state; may evolve into graph/workflow
- Routing/handoffs → conditional router
- LangGraph-style → directed graph
- Deterministic business processes → state machine
- Use nuanced language: "usually" and "may evolve" — not rigid 1:1 mappings.

## The Autonomy Spectrum
- Fully autonomous → guided → deterministic.
- <MermaidDiagram> showing the spectrum with real examples.
- When harness controls flow vs model controls flow.

## Handoffs as Runtime Events
- Context serialization, tool scope narrowing/widening, identity switching.
- <MermaidDiagram> sequence diagram: Agent A → harness → context transfer → Agent B.
- How OpenAI Agents SDK manages handoffs within the agent loop.

## Case Study: Adding a Router
- Research assistant now has a router: "search" requests → search handler, "summarize" requests → summarize handler.
- Same model, different runtime shape.

## Summary
- Preview Lesson 6: control flow determines what happens; persistence determines what survives.
```

**Frontmatter quiz — 4 questions covering:** which control flow model LangGraph uses, when a plan-and-execute agent outgrows a linear loop, what changes in a handoff at the runtime level, and harness-driven vs model-driven control.

- [ ] **Step 2: Run validation and commit**

```bash
pnpm validate
git add content/module-5/05-control-flow.mdx
git commit -m "Add Lesson 5: Control Flow — Loops, Routers, Graphs, and Workflows"
```

---

### Task 7: Lesson 6 — Persistence, Checkpointing, and Resumability

**Files:**
- Create: `content/module-5/06-persistence-checkpointing.mdx`

**Interfaces:**
- Consumes: State model from Lesson 4, control flow from Lesson 5
- Produces: Persistence motivations, checkpoint anatomy, serialization boundaries, production triad concept. Required by Lesson 7 (HITL depends on persistence) and Lesson 10 (build lab).

- [ ] **Step 1: Write Lesson 6 MDX**

Target: 400–500 lines. Required sections:

```
## Overview
- A 20-step run that fails at step 17 should not restart from step 1.

## Five Motivations for Persistence
1. Failure recovery
2. Human intervention (pause for approval, resume after decision)
3. Inspection (examine state at any point)
4. Time travel (return to prior checkpoint, re-execute)
5. Auditability (prove what the agent did, when, why)

## Three Persistence Scopes
- Turn-level (retry a single model call)
- Run-level (resume a multi-step run)
- Session-level (continue across user interactions)
- <MermaidDiagram> scope diagram.

## Checkpoint Anatomy
- Agent state + message history + goal progress + pending tool calls + control flow position.

## Serialization Boundaries
- What can be checkpointed vs what cannot.
- Cannot: open connections, file handles, in-flight executions, ephemeral auth, provider caches, non-serializable objects.
- Design principle: checkpoint intent and state, not fragile runtime objects.

## Checkpoint Strategies
- Full state snapshots vs incremental deltas vs event sourcing.
- Tradeoffs table.

## How Real Harnesses Implement Persistence
- LangGraph: checkpointers (thread-level state) + stores (cross-thread memory).
- OpenAI Agents SDK: sessions for cross-run continuity.
- Claude Agent SDK: file checkpointing for tool changes; session continuity; external for full run-state.
- Custom: event-sourced logs with state reconstruction.

## The Production Triad
- <MermaidDiagram> connecting diagram:
  - Persistence enables intervention.
  - Intervention creates pause/resume events.
  - Observability explains and audits both.
- This triad connects Lessons 6, 7, and 8.

## Cost Implications
- Checkpointing lets you resume without re-paying for completed steps.

## Case Study: Crash and Resume
- Research assistant runs 5-source search. Crashes after source 3. Resumes from checkpoint at source 4.

## Summary
- Preview Lesson 7: persistence lets you pause. Next: why and how the harness pauses for human decisions.
```

**Frontmatter quiz — 4 questions covering:** persistence vs context distinction, serialization boundary violations, when event sourcing beats full snapshots, and what the production triad connects.

- [ ] **Step 2: Run validation and commit**

```bash
pnpm validate
git add content/module-5/06-persistence-checkpointing.mdx
git commit -m "Add Lesson 6: Persistence, Checkpointing, and Resumability"
```

---

### Task 8: Lesson 7 — Human-in-the-Loop and Intervention Points

**Files:**
- Create: `content/module-5/07-human-in-the-loop.mdx`

**Interfaces:**
- Consumes: Persistence and production triad from Lesson 6
- Produces: Five intervention points, approval gate pattern, autonomy spectrum, guardrails vs HITL distinction. Used by Lesson 10 (build lab).

- [ ] **Step 1: Write Lesson 7 MDX**

Target: 350–450 lines. Required sections:

```
## Overview
- Intervention is concern #8 — a first-class harness concern, not an afterthought.
- Connect to Lesson 6: intervention and persistence are coupled (the production triad).

## Five Intervention Points
1. Pre-action approval
2. Post-action review
3. Goal modification
4. Escalation on uncertainty
5. Emergency stop

## The Approval Gate Pattern
- Policy check → pause → checkpoint → present to human → receive decision → resume or abort.
- <MermaidDiagram> sequence diagram.

## The Autonomy-Oversight Spectrum
- Autonomous → approval gates → supervised → human-directed.
- <MermaidDiagram> spectrum diagram.

## Escalation Triggers
- Confidence thresholds, action risk classification, cost limits, anomaly detection.
- <MermaidDiagram> decision matrix: action risk × reversibility → intervention level.

## Synchronous vs Asynchronous Intervention
- Blocking (human is waiting) vs async (human reviews later, agent is paused).

## Guardrails vs HITL: A Critical Distinction
- Guardrails: automated runtime checks (input validation, output filtering, content safety). Run without human involvement.
- HITL: pause-for-human-decision pattern. Requires persistence to checkpoint and resume.
- A harness may use both. They are complementary, not interchangeable.

## How Harnesses Expose Intervention
- LangGraph: interrupts, breakpoints, HITL middleware.
- OpenAI Agents SDK: guardrails (automated) + built-in HITL approvals (pause, serialize RunState, resume). Review UI and approval queues remain application responsibilities.
- Custom: policy checks, approval queues, saved run state, resume commands.

## Designing Intervention Policies
- Which actions need approval, under what conditions.
- Preventing intervention fatigue.

## Case Study: Email Approval Gate
- Research assistant wants to send email summary. Harness pauses, checkpoints, presents to human, human approves, run completes.

## Summary
- Preview Lesson 8: intervention creates events. Observability explains them.
```

**Frontmatter quiz — 4 questions covering:** guardrails vs HITL distinction, why intervention requires persistence, which intervention point applies when an agent's cost exceeds budget, and synchronous vs asynchronous tradeoffs.

- [ ] **Step 2: Run validation and commit**

```bash
pnpm validate
git add content/module-5/07-human-in-the-loop.mdx
git commit -m "Add Lesson 7: Human-in-the-Loop and Intervention Points"
```

---

### Task 9: Lesson 8 — Observability

**Files:**
- Create: `content/module-5/08-observability.mdx`

**Interfaces:**
- Consumes: All prior concerns (loop, dispatch, state, persistence, intervention)
- Produces: Five observability pillars, trace anatomy, three replay levels, diagnostic questions. Used by Lesson 10 (build lab adds tracing).

- [ ] **Step 1: Write Lesson 8 MDX**

Target: 400–500 lines. Required sections:

```
## Overview
- Agent observability is harder than traditional app observability: non-determinism, multi-step reasoning, tool side effects.
- This is the last conceptual lesson before the build synthesis.

## Five Observability Pillars
1. Structured logs
2. Distributed traces
3. Evaluation metrics
4. Cost and latency tracking
5. Run replay
- <MermaidDiagram> mapping pillars to harness hook points.

## Traces as the Primary Primitive
- A trace is a tree of spans: root → turn → model call / tool call / state update.
- <MermaidDiagram> trace tree for a multi-turn run.

## Structured Logging
- Every log event: run ID, turn number, span ID, event type, timing.
- <CodeBlock language="python" filename="structured_log.py"> showing a structured log entry.

## The Four Diagnostic Questions
1. What did the model see? (context)
2. What did it decide? (response)
3. What happened? (execution)
4. Was it right? (evaluation)

## Cost and Latency as Observability
- "How expensive was this run?" and "how long did each step take?" alongside "what happened?"
- Token usage per turn, model call latency, total run cost.

## Evaluation as Runtime Observability
- Per-run scoring: goal achieved? How many turns? Cost? Errors?
- Not just offline benchmarks.

## Three Levels of Replay
1. Trace replay: read-only walkthrough (inspect what happened).
2. State replay: resume from checkpoint with live model calls (results may differ).
3. Deterministic replay attempt: mocked tools + captured inputs (useful but not guaranteed identical).

## How Harnesses Instrument
- OpenAI Agents SDK: built-in tracing with span types.
- LangGraph + LangSmith: trace capture, run comparison, monitoring dashboards.
- OpenTelemetry GenAI conventions: portability layer with semantic fields.
- Custom: structured JSON event logs with OTel export.

## Case Study: Diagnosing a Wrong Summary
- Research run produces wrong summary. Trace reveals context assembly dropped a key search result due to budget pressure. Eval score flagged it. State replay from checkpoint with larger budget confirms the fix.

## Summary
- You now have the eight-concern mental model. Next: put it together by building a harness from scratch.
```

**Frontmatter quiz — 4 questions covering:** traces vs logs distinction, which replay level guarantees identical results (none), what OpenTelemetry's role is (portability layer, not a harness), and which diagnostic question identifies context assembly bugs.

- [ ] **Step 2: Run validation and commit**

```bash
pnpm validate
git add content/module-5/08-observability.mdx
git commit -m "Add Lesson 8: Observability — Traces, Logs, Evals, and Replay"
```

---

### Task 10: Lesson 9 — Build a Minimal Harness from Scratch (Lab)

**Files:**
- Create: `content/module-5/09-build-minimal-harness.mdx`

**Interfaces:**
- Consumes: All eight concerns from Lessons 1–8. Specifically: loop (L2), dispatch (L3), context assembly (L4), termination (L2).
- Produces: Working `Harness` class in ~100–150 lines. Extended in Lesson 10.

- [ ] **Step 1: Write Lesson 9 MDX (Lab)**

Target: 700–900 lines. No frontmatter quiz (lab lesson).

This is the first build lab. Students incrementally construct a working harness. All code must be complete, runnable, and use deterministic stub tools.

**Required sections with full code:**

```
## Overview
- You've learned the eight concerns conceptually. Now build.
- Design constraints: no persistence, no tracing, no frameworks.
- Use a **fake deterministic model client** (`FakeModelClient`) for all stages: a class that returns scripted tool-call sequences based on keyword matching in input. This keeps stages reproducible and runnable without API credentials.
- Include a short "Swap in a real provider" note at the end showing how to replace `FakeModelClient` with `anthropic.Anthropic()` or `openai.OpenAI()`.

## Stage 1: The Bare Loop (20 lines)
- <CodeBlock language="python" filename="harness_v1.py">
  A minimal while loop that calls the model and prints the response.
  No tools, no context assembly, no termination controls.
- Run it. Observe: it answers once and loops forever (no stop condition).

## Stage 2: Add Tool Dispatch (60 lines)
- <CodeBlock language="python" filename="harness_v2.py">
  Add a tool registry (dict), register three stub tools (web_search, calculator, done).
  Parse tool_use blocks from model response. Dispatch via registry with schema validation.
  Format tool_result and append to messages.
  The "done" tool signals loop termination.
- Tool stubs:
  - web_search: returns deterministic canned results based on query keywords.
  - calculator: evaluates a simple math expression.
  - done: sets a flag to stop the loop.
- Run it with "What is the population of France?" Observe: it searches, gets a result, calls done.

## Stage 3: Add Context Assembly (90 lines)
- <CodeBlock language="python" filename="harness_v3.py">
  Extract context assembly into a function: assemble_context(goal, history) → messages.
  System prompt instructs the agent to use tools and call "done" when finished.
  History management: append model responses and tool results.
- Run with a multi-step question. Observe: context grows correctly across turns.

## Stage 4: Add Loop Controls (100-150 lines)
- <CodeBlock language="python" filename="harness_v4.py">
  Add max_turns, token budget counter, and timeout.
  If max_turns reached, return partial result with warning.
  Track cumulative input/output tokens from API responses.
- Run with max_turns=3 on a question that needs 5 turns. Observe: agent stops after 3 with a partial answer.

## The Complete Minimal Harness
- <CodeBlock language="python" filename="harness.py">
  Full final version: Harness class with run(), assemble_context(), dispatch_tool(), register_tool().
  ~100–150 lines excluding tool definitions.

## Running the Research Assistant
- Give it a real research question. Watch the turns unfold.
- Observe what's missing: no state sharing between tools, no crash recovery, no tracing, no approval gate.
- "You have 4 of the 8 concerns. Lesson 10 adds four more."

## Summary
- Connect to Lesson 10: extend with state, checkpoints, tracing, and an approval gate.
```

Each stage is a progressive snippet showing only the new/changed code. The final `harness.py` `<CodeBlock>` is the complete, self-contained, copy-paste-runnable version using the `FakeModelClient` (no API key needed). Avoid duplicating full code across stages — use progressive diffs with clear annotations of what changed. The key requirement: **each stage is understandable; the final code block is complete and runnable.**

- [ ] **Step 2: Verify all code examples are syntactically valid**

```bash
cd /Users/szaher/go/src/github.com/szaher/saad/learn/agents
pnpm validate
```

- [ ] **Step 3: Commit**

```bash
git add content/module-5/09-build-minimal-harness.mdx
git commit -m "Add Lesson 9: Build a Minimal Harness from Scratch (lab)"
```

---

### Task 11: Lesson 10 — Extend the Harness (Lab)

**Files:**
- Create: `content/module-5/10-extend-harness.mdx`

**Interfaces:**
- Consumes: Working Harness class from Lesson 9. Concepts: state (L4), checkpointing (L6), tracing (L8), HITL (L7), idempotency (L6).
- Produces: Extended harness with AgentState, checkpoint/resume, TracingContext, and approval gate. Demonstrates 6 of 8 concerns.

- [ ] **Step 1: Write Lesson 10 MDX (Lab)**

Target: 700–900 lines. No frontmatter quiz.

Students extend the Lesson 9 harness incrementally. Each extension adds one production concern.

**Required sections with full code:**

```
## Overview
- Start from the Lesson 9 harness. Add four production concerns.

## Extension 1: Structured Agent State
- <CodeBlock language="python" filename="harness_state.py">
  Add AgentState class: a serializable dict that tools can read and write.
  Separate from message history.
  Modify tool dispatch to pass state to tool functions.
  Modify web_search stub to store findings in state.
- Run: tools share data across turns via state. Show state after each turn.

## Extension 2: Checkpoint and Resume with Idempotency
- <CodeBlock language="python" filename="harness_checkpoint.py">
  Add checkpoint(run_id, turn) → file: serialize state + history + completed_steps to JSON.
  Add restore(run_id) → HarnessState: deserialize and resume.
  Track completed tool call IDs in checkpoint. On resume, skip completed calls and return cached results.
- Demo: run for 3 turns, kill mid-run, restore, verify it continues from turn 4 without re-running turns 1–3.

## Extension 3: Tracing
- <CodeBlock language="python" filename="harness_tracing.py">
  Add TracingContext: emits structured JSON events for model calls, tool calls, state mutations.
  Each event: run_id, turn, span_id, event_type, timestamp, duration, token_usage.
  Output to a .jsonl file.
- Run: inspect trace. Find which turn was most expensive. Show a trace excerpt.

## Extension 4: Approval Gate
- <CodeBlock language="python" filename="harness_approval.py">
  Add a send_email tool marked as "requires_approval: true" in the registry.
  Before dispatching a tool with requires_approval, the harness:
    1. Checkpoints current state
    2. Prints proposed action
    3. Waits for y/n input
    4. On approval: continues. On rejection: aborts with reason.
  Frame conceptually as: pause → checkpoint → emit request → receive decision → resume.
  Note: the CLI y/n is the simplest implementation. Production runtimes use approval queues, webhooks, or UIs.

## The Complete Extended Harness
- <CodeBlock language="python" filename="harness_extended.py">
  Full version with all four extensions integrated.

## Full Case Study Run
- Goal: "Research the latest AI agent frameworks and email me a summary."
- Run: search 3 sources → store in state → checkpoint after each → trace all turns → attempt send_email → approval gate fires → human approves → run completes.
- Then: simulate crash after source 2 → restore → verify idempotency (sources 1–2 not re-fetched) → source 3 proceeds → email approval → complete.

## What's Still Missing
- "Your harness has 6 of the 8 concerns. Production frameworks add stronger implementations of advanced control flow, distributed persistence, protocol interoperability, deployment, and observability."
- Connect to Lesson 11: see how real frameworks solve these concerns at scale.

## Summary
```

- [ ] **Step 2: Run validation and commit**

```bash
pnpm validate
git add content/module-5/10-extend-harness.mdx
git commit -m "Add Lesson 10: Extend the Harness — State, Checkpoints, Tracing, and Intervention (lab)"
```

---

### Task 12: Lesson 11 — Ecosystem Map

**Files:**
- Create: `content/module-5/11-ecosystem-map.mdx`

**Interfaces:**
- Consumes: All eight concerns (used as comparison framework), build experience from Lessons 9–10
- Produces: Harness taxonomy (4 categories), comparison table (10 rows × 7+ columns), ecosystem trend lines. Used by Lesson 12 (selection framework).

- [ ] **Step 1: Write Lesson 11 MDX**

Target: 450–550 lines. Required sections:

```
## Overview
- You've built a harness. Now see how the industry solves the same eight concerns.
- Ecosystem snapshot callout: this comparison reflects the landscape as of the module review date. Verify against current docs before production decisions.

## Four Harness Categories

### Agent SDKs / Model-Adjacent Runtimes
- Lower-level model APIs: Anthropic Messages API + tool_use
- Managed agent SDKs: OpenAI Agents SDK, Claude Agent SDK
- UI/app agent SDKs: Vercel AI SDK
- One paragraph each with key capabilities.

### Graph Runtimes
- LangGraph: state graph, checkpointers, stores, interrupts, LangSmith.
- Why graph-based: explicit state transitions, durable execution, visual debugging.

### Workflow / Orchestration Runtimes
- Temporal + LLM integrations, Prefect / Airflow + agent steps.
- When workflow engines complement agent SDKs.

### Multi-Agent Runtimes
- CrewAI, AG2 / AutoGen lineage (note: original Microsoft AutoGen is maintenance-mode), OpenAI Agents SDK handoffs.

## Comparison Table
- Render as a markdown table with 10 rows (8 concerns + deployment model + protocol support) × 7 columns (OpenAI Agents SDK, Anthropic Messages API, Claude Agent SDK, LangGraph, CrewAI, AG2/AutoGen, Custom).
- Use exact values from design spec. Note: Claude Agent SDK persistence = "File checkpointing + session continuity; external for full run-state durability."

## The "Custom" Column
- "Custom" appears in every row because every harness is custom code making decisions about the eight concerns.
- Frameworks shift where customization happens — from "you write the loop" to "you configure the graph."

## Ecosystem Evolution
- <MermaidDiagram> timeline: raw API calls → thin SDKs → graph runtimes → durable orchestration → protocol-native runtimes.
- <MermaidDiagram> 2×2 matrix: runtime complexity × multi-agent support, harnesses plotted.

## Trend Lines
- Convergence toward durable execution.
- Protocol-native tool access (MCP).
- Standardized agent interoperability (A2A).

## Summary
- Preview Lesson 12: you know what's available. Next: how to choose.
```

**Frontmatter quiz — 4 questions covering:** which category LangGraph belongs to, what distinguishes Claude Agent SDK from Anthropic Messages API, why "Custom" appears in every comparison row, and what MCP provides that static tool registration doesn't.

- [ ] **Step 2: Run validation and commit**

```bash
pnpm validate
git add content/module-5/11-ecosystem-map.mdx
git commit -m "Add Lesson 11: Ecosystem Map — SDKs, Graph Runtimes, Workflow Runtimes, Multi-Agent Runtimes"
```

---

### Task 13: Lesson 12 — Choosing a Harness + Frontier Appendix

**Files:**
- Create: `content/module-5/12-choosing-and-frontier.mdx`

**Interfaces:**
- Consumes: Ecosystem map from Lesson 11, all eight concerns
- Produces: Decision framework flowchart, anti-patterns, three frontier directions. Module closing with forward/backward links to Modules 4 and 8.

- [ ] **Step 1: Write Lesson 12 MDX**

Target: 400–500 lines. Required sections:

```
## Overview
- Two parts: (1) production-grounded selection framework, (2) frontier appendix (optional/emerging).

## Part 1: Choosing a Harness

### Decision Framework
- <MermaidDiagram> flowchart with 5 decision points:
  1. How many agents?
  2. How complex is the control flow?
  3. Do you need durable execution?
  4. What does your team know?
  5. What are the deployment constraints?
- Each decision point maps to recommended harness categories.

### Anti-Patterns
- Over-engineering: LangGraph for a 3-turn single-tool agent.
- Under-engineering: raw API calls for a 20-step workflow with approval gates.
- Hype-driven selection.
- Building custom when existing harness fits.
- Multi-agent framework when single agent suffices.

## Part 2: Frontier Appendix

> This section covers emerging runtime directions. Not required for the capstone. Clearly labeled as experimental.

### Protocol-Native Runtimes
- MCP as first-class runtime primitive: dynamic tool/resource discovery.
- A2A as agent-to-agent runtime fabric.
- MCP maturity: production-adopted, hardening required (security, permissions, identity, observability, server quality).
- A2A maturity: early-stage with reference implementations.

### Autonomous Goal Decomposition
- Agents that decompose high-level goals without human task breakdowns.
- Runtime implications: goal trees, progress tracking, re-planning.
- Maturity: demonstrated in research/early products; reliability and controllability open.

### Long-Running Agent Operating Systems
- Agents persisting across days/weeks.
- Runtime implications: session management at scale, memory consolidation, credential management, cost budgeting.
- Maturity: early experiments; no standardized runtime.

### Frontier Maturity Radar
- <MermaidDiagram> showing maturity levels: research → experimental → early production → mature.

## Module Closing
- Connect back: "Module 4 taught what architectures exist. This module taught how the runtime layer executes them."
- Connect forward: "Module 6 (Agent Design Patterns) teaches reusable patterns inside the runtime. Module 8 (Agent Frameworks & SDKs) gives you hands-on experience with the harnesses you just compared."

## Summary
```

**Frontmatter quiz — 4 questions covering:** which harness type for a long-running workflow with human approval, the over-engineering anti-pattern, MCP maturity assessment, and which frontier direction involves goal trees.

- [ ] **Step 2: Run validation and commit**

```bash
pnpm validate
git add content/module-5/12-choosing-and-frontier.mdx
git commit -m "Add Lesson 12: Choosing a Harness + Frontier Appendix"
```

---

### Task 14: Quality Gates and Final Verification

**Files:**
- Verify: All `content/module-5/*.mdx` files
- Verify: All `content/module-{1..4,6..13}/*.mdx` cross-references
- Verify: `academy.config.ts`

**Interfaces:**
- Consumes: All prior tasks
- Produces: Passing quality gates and verified navigation

- [ ] **Step 1: Run full validation suite**

```bash
cd /Users/szaher/go/src/github.com/szaher/saad/learn/agents
pnpm validate
```

Expected: No errors. All 13 modules validate.

- [ ] **Step 2: Run tests**

```bash
pnpm test
```

Expected: All tests pass.

- [ ] **Step 3: Run linter**

```bash
pnpm lint
```

Expected: No lint errors.

- [ ] **Step 4: Run build**

```bash
pnpm build
```

Expected: Build completes successfully. All 13 modules render. All lesson routes work.

- [ ] **Step 5: Verify MDX component props and heading constraints**

Check that all `<CodeBlock>` components have required props, all `<MermaidDiagram>` components have `chart`, and no raw H1 headings appear in lesson bodies:

```bash
cd /Users/szaher/go/src/github.com/szaher/saad/learn/agents

# Check for CodeBlock components missing required props
grep -RIn "<CodeBlock" content/module-5/ | grep -v "code=" | head -10
grep -RIn "<CodeBlock" content/module-5/ | grep -v "language=" | head -10

# Check for MermaidDiagram components missing chart prop
grep -RIn "<MermaidDiagram" content/module-5/ | grep -v "chart=" | head -10

# Check for raw H1 headings in lesson bodies (should be 0 matches)
# Exclude frontmatter title field — only match lines starting with "# " in body
grep -RIn '^# ' content/module-5/*.mdx | grep -v '^[^:]*:1:' | head -10
```

Expected: No matches from any of these checks. Fix any violations before proceeding.

- [ ] **Step 6: Verify cross-reference correctness**

Spot-check that renumbered references are correct:

```bash
cd /Users/szaher/go/src/github.com/szaher/saad/learn/agents

# Check that no orphan references to "Module 14" or higher exist
grep -rn "Module 14\|Module 15" content/ --include="*.mdx"

# Check that new Module 5 references in other modules don't exist yet
# (no other module should reference "Module 5" with the harness title, since the content is new)
grep -rn "Module 5" content/module-{1,2,3,4,6,7,8,9,10,11,12,13}/ --include="*.mdx" | head -10
# This should return 0 results — no old module references Module 5 as "Harnesses"

# Check consecutive IDs
for d in content/module-*/; do
  dir_num=$(basename "$d" | sed 's/module-//')
  meta_id=$(python3 -c "import json; print(json.load(open('${d}meta.json'))['id'])")
  echo "Dir: module-$dir_num  ID: $meta_id  $([ "$dir_num" = "$meta_id" ] && echo 'OK' || echo 'MISMATCH')"
done
```

Expected: 13 modules, all IDs match directory numbers, consecutive from 1 to 13.

- [ ] **Step 7: Commit any fixes**

If any quality gate fails, fix the issue and commit:

```bash
git add -A
git commit -m "Fix quality gate issues in Module 5 content"
```

- [ ] **Step 8: Final commit if all gates pass**

```bash
git add -A
git status  # Verify nothing unexpected is staged
git commit -m "Complete Module 5: Agent Harnesses and Runtime Systems

12 lessons covering agent harness runtime concepts, two build labs,
ecosystem comparison, and frontier appendix. All quality gates pass."
```
