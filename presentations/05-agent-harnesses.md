---
marp: true
theme: academy
header: 'LLM Agents Academy'
footer: 'Module 5: Agent Harnesses and Runtime Systems'
paginate: true
---

<script type="module">
import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";
mermaid.initialize({ startOnLoad: true, theme: "base", themeVariables: { primaryColor: "#e0f0ff", primaryTextColor: "#151515", primaryBorderColor: "#0066cc", lineColor: "#0066cc", secondaryColor: "#daf2f2", tertiaryColor: "#f2f2f2", noteBkgColor: "#fef0f0", noteTextColor: "#151515", fontFamily: "Red Hat Text, sans-serif" }});
</script>

<!-- _class: lead -->
<!-- _paginate: false -->
<!-- _header: '' -->
<!-- _footer: '' -->

# Agent Harnesses and Runtime Systems

## Module 5: The Runtime Layer That Executes Agent Architectures

<!-- This is the title slide. Introduces the runtime infrastructure that makes agent architectures executable. -->

---

# Agenda

- The harness layer and where it fits
- Eight operational concerns
- The harness spectrum
- Building a harness from scratch
- Ecosystem comparison
- Choosing a harness
- Frontier outlook

<!-- Speaker note: Use this agenda to orient the audience. This module bridges architectural patterns with production deployment. -->

---

<!-- _class: section-divider -->
<!-- _header: '' -->
<!-- _footer: '' -->

# Part 1

## The Harness Layer

Understanding what harnesses do and why they matter.

<!-- Section divider: Foundations of the runtime layer. -->

---

# What Is an Agent Harness?

The runtime layer between agent architectures and execution — like an operating system for a single agent.

**Core responsibilities:**
- Lifecycle management (start, run, stop)
- Memory and context handling
- I/O coordination (tools, model calls)
- Error handling and recovery

> "Invisible when things work, the first thing you debug when they don't."

<!-- Speaker note: Emphasize that harnesses handle the operational concerns that architectures abstract away. -->

---

# The Agent Stack

<div class="mermaid">
graph TB
    A[Application Logic] --> B[Orchestration Layer]
    B --> C[Agent Harness]
    C --> D[Model API]
    C --> E[Tool Registry]
    
    style C fill:#e0f0ff,stroke:#0066cc,stroke-width:3px
</div>

The harness sits between orchestration logic and execution primitives. It manages the "how" while architectures define the "what."

<!-- Speaker note: Point out that the harness is highlighted -- this is the layer we're focusing on today. -->

---

# The Eight Concerns

Every production agent harness must address these operational concerns:

1. **Loop Execution** -- when to run, when to stop
2. **Tool Dispatch** -- request → execution
3. **Context Management** -- what the model sees
4. **State and Goals** -- progress and objectives
5. **Control Flow** -- loops, graphs, handoffs
6. **Persistence** -- checkpoints for resumability
7. **Observability** -- traces, cost, replay
8. **Human Intervention** -- approval, escalation, override

<!-- Speaker note: These eight concerns form the evaluation framework we'll use throughout this module. -->

---

# Loop Execution

Controls the agent's execution cycle -- when to run the model, when to stop, and how to handle termination conditions.

**Key decisions:**
- Maximum steps or iterations
- Timeout configuration
- Stop conditions (goal achieved, error, human signal)
- Run/Turn/Step vocabulary

**Without loop control:** Infinite loops, runaway costs, stuck agents.

<!-- Speaker note: Loop execution is the simplest concern but critical -- get this wrong and nothing else matters. -->

---

# Loop Execution Flow

<div class="mermaid">
flowchart TD
    A[Start] --> B[Call Model]
    B --> C{Tool Call?}
    C -->|Yes| D[Execute Tool]
    D --> E{Continue?}
    E -->|Yes| B
    E -->|No| F[End]
    C -->|No| F
</div>

The basic loop: call model → check for tool calls → execute → check continuation → repeat or end.

<!-- Speaker note: Trace the flow. The "Continue?" decision is where max steps, timeouts, and stop conditions apply. -->

---

# Tool Dispatch

Validates requests, routes to implementations, handles errors. Three phases:

1. **Validate** -- check tool exists, arguments are well-formed
2. **Execute** -- invoke the implementation with parsed arguments
3. **Format Result** -- convert output to model-readable format

**Must handle:**
- Unknown tools or malformed arguments
- Timeouts and exceptions during execution
- Result serialization and size limits

<!-- Speaker note: Tool dispatch is where theory meets reality -- the model's request format rarely matches your implementation directly. -->

---

# Context Management

Assembles what the model sees each turn -- the input to every model call.

**Components:**
- System prompt (role, instructions, constraints)
- Message history (conversation so far)
- Tool schemas (what tools are available)
- Injected context (retrieved facts, working state)

**Critical decision:** Token budget enforcement and history pruning strategies.

<!-- Speaker note: Context management is one of the hardest concerns to get right. Too much context causes cost/latency issues; too little causes quality degradation. -->

---

# State and Goals

Separate from conversational context -- tracks objectives, working memory, and progress indicators.

**State includes:**
- Current objective or task description
- Working memory (intermediate results, facts gathered)
- Progress indicators (steps completed, subtasks remaining)

**Why separate from messages?**
- Enables resume from interrupted runs
- Supports multi-session workflows
- Allows model to forget conversation details without losing task state

<!-- Speaker note: This distinction is critical for long-running agents. Conversation history grows without bound; state should be compact and actionable. -->

---

# Control Flow

Determines what happens after each tool call. Four levels of complexity:

1. **Simple loop** -- always return to model
2. **State machine** -- conditional transitions based on tool results
3. **Directed graph** -- declarative routing with multiple paths
4. **Workflow** -- durable orchestration with retry and branching logic

**Trade-off:** Flexibility vs. debuggability. Simple loops are easy to reason about; workflows handle complex cases but are harder to debug.

<!-- Speaker note: Most agents start with a simple loop and add complexity only when needed. Don't over-engineer control flow. -->

---

# Control Flow Patterns

<div class="mermaid">
graph LR
    A[Loop] --> B[Model]
    B --> C[Tool]
    C --> B
    
    D[Graph] --> E[Model]
    E --> F{Router}
    F --> G[Tool A]
    F --> H[Tool B]
    G --> E
    H --> E
    
    I[Workflow] --> J[Step 1]
    J --> K{Condition}
    K --> L[Step 2a]
    K --> M[Step 2b]
    L --> N[Step 3]
    M --> N
</div>

Left: simple loop. Center: graph with conditional routing. Right: workflow with branching.

<!-- Speaker note: Show the progression from simple to complex. Each pattern solves different problems. -->

---

# Persistence

Checkpoints state to survive crashes, deploys, and interruptions. Critical for long-running agents and human-in-the-loop workflows.

**Checkpoint contains:**
- Serialized message history
- Current state and goals
- Step counter and metadata
- Tool results and intermediate artifacts

**Without persistence:** Lost work on every crash, no multi-session support, can't pause for human review.

<!-- Speaker note: Persistence is often overlooked in demos but essential in production. -->

---

# Observability

Traces, structured logs, cost tracking, and replay capability. The "what happened and why" layer.

**Core capabilities:**
- Trace every model call, tool invocation, and decision point
- Track token usage and cost per run
- Enable replay from checkpoints for debugging

> "Without observability, debugging is guesswork."

<!-- Speaker note: Observability is the production triad's foundation -- you cannot intervene wisely or replay effectively without it. -->

---

# Human Intervention

Approval gates, escalation triggers, and manual overrides. Cross-cutting concern that couples persistence + control flow + observability.

**Intervention types:**
- **Approval gates** -- require human consent before proceeding (e.g., before executing destructive actions)
- **Escalation triggers** -- notify humans when conditions are met (e.g., cost threshold exceeded)
- **Manual overrides** -- allow humans to redirect or terminate agent behavior

**Essential for:** Agents that take consequential actions (e.g., code deployment, data modification, customer communication).

<!-- Speaker note: Intervention is the safety valve. Every production agent needs a way for humans to step in. -->

---

# The Production Triad

<div class="mermaid">
graph TD
    A[Persistence] <--> B[Observability]
    B <--> C[Human Intervention]
    C <--> A
</div>

These three concerns are tightly coupled:

- You cannot intervene without persisting state to pause
- You cannot intervene wisely without observing what happened
- You cannot replay without persisting the trace

<!-- Speaker note: This triad is the difference between a demo and a production system. -->

---

<!-- _class: section-divider -->
<!-- _header: '' -->
<!-- _footer: '' -->

# Part 2

## The Harness Spectrum

From raw loops to full platforms.

<!-- Transition to understanding harness options. -->

---

# The Harness Spectrum

| Level | What You Get | What's Missing |
|-------|--------------|----------------|
| No Harness (raw loop) | Works for happy path | Everything |
| Thin SDK | API wrapper, message formatting | Loop control, state, persistence |
| Agent Loop SDK | Managed loop + dispatch | State, persistence, observability |
| Graph Runtime | Declarative control flow + state | May lack full persistence/HITL |
| Workflow Runtime | Durable execution + retries | May lack interactive sessions |
| Full Platform | All eight concerns | Less flexibility |

<!-- Speaker note: There's no universally right answer. Choose based on your complexity and operational requirements. -->

---

# Case Study: What Breaks First

Raw-loop research assistant (20 lines of code) that works for the happy path:

1. **First failure:** Context overflow when conversation grows (concern #3: context management)
2. **Second failure:** Tool timeout crashes the entire run (concern #2: tool dispatch error handling)
3. **Third failure:** Can't resume interrupted runs (concern #6: persistence)

> "You either choose a harness or build one yourself."

<!-- Speaker note: Share this progression to show why harnesses exist. Every production agent eventually implements most of the eight concerns. -->

---

<!-- _class: section-divider -->
<!-- _header: '' -->
<!-- _footer: '' -->

# Part 3

## Building a Harness

Hands-on construction from raw loop to production.

<!-- Transition to the build labs. -->

---

# The Build Labs (Lessons 9-10)

Progressive case study: research assistant evolves from raw loop to production harness.

**Tools introduced:**
- **FakeModelClient** -- deterministic model stub for reproducible testing
- **State management** -- objectives, working memory, progress tracking
- **Control flow** -- routing based on tool results
- **Extensions** -- persistence, HITL, observability, MCP integration

**Outcome:** A harness that handles all eight concerns for a realistic research agent.

<!-- Speaker note: Emphasize the progressive approach. Start simple, measure, add complexity only when needed. -->

---

# Building Blocks

<div class="mermaid">
graph LR
    A[Raw Loop] --> B[+Dispatch]
    B --> C[+State]
    C --> D[+Control Flow]
    D --> E[+Persistence]
    E --> F[+Observability]
    F --> G[+HITL]
    G --> H[Production Harness]
</div>

Each layer adds one or two concerns. Test at each step before proceeding.

<!-- Speaker note: This layered approach makes debugging easier. If something breaks, you know which layer introduced the issue. -->

---

<!-- _class: section-divider -->
<!-- _header: '' -->
<!-- _footer: '' -->

# Part 4

## The Ecosystem

Understanding existing harness frameworks.

<!-- Transition to ecosystem comparison. -->

---

# Four Harness Categories

**Agent SDKs / Model-Adjacent**
- Anthropic Messages API, OpenAI Agents SDK, Claude Agent SDK, Vercel AI SDK
- Close to the model, minimal abstraction

**Graph Runtimes**
- LangGraph
- Declarative control flow with typed state schemas

**Workflow / Orchestration**
- Temporal, Prefect
- Durable execution with built-in retry and recovery

**Multi-Agent Runtimes**
- CrewAI, AG2, OpenAI handoffs
- Role-based orchestration for multi-agent systems

<!-- Speaker note: Each category solves different problems. Choose based on your use case, not popularity. -->

---

# Ecosystem Positioning

<div class="mermaid">
quadrantChart
    title Harness Complexity vs Multi-Agent Support
    x-axis Low Complexity --> High Complexity
    y-axis Single Agent --> Multi-Agent
    quadrant-1 Complex Multi-Agent
    quadrant-2 Simple Multi-Agent
    quadrant-3 Simple Single-Agent
    quadrant-4 Complex Single-Agent
    Messages API: [0.2, 0.2]
    Claude Agent SDK: [0.3, 0.25]
    OpenAI Agents SDK: [0.35, 0.3]
    LangGraph: [0.7, 0.4]
    Temporal: [0.75, 0.35]
    CrewAI: [0.65, 0.8]
    AG2: [0.7, 0.85]
</div>

<!-- Speaker note: This chart is approximate. Complexity = control flow + state + persistence. Multi-agent = built-in team orchestration. -->

---

# Comparison Highlights

| Concern | SDK | Graph | Workflow | Multi-Agent |
|---------|-----|-------|----------|-------------|
| State | Manual/managed | Typed schemas | Durable | Role-based |
| Persistence | Varies | Checkpointers | Built-in | Task state |
| Observability | Manual/API | LangSmith | Built-in | Task logs |
| HITL | Manual | Interrupt nodes | Manual | Task-level |

*Simplified from full lesson comparison table.*

<!-- Speaker note: No framework is universally best. Evaluate based on which concerns are most critical for your use case. -->

---

<!-- _class: section-divider -->
<!-- _header: '' -->
<!-- _footer: '' -->

# Part 5

## Choosing and Frontier

Decision framework and what's next.

<!-- Final section: practical guidance and future directions. -->

---

# Decision Framework

<div class="mermaid">
flowchart TD
    A[Start] --> B{How many agents?}
    B -->|Multiple| C[Multi-agent runtime]
    B -->|Single| D{Complex control flow?}
    D -->|Yes| E[Graph runtime]
    D -->|No| F{Need durable execution?}
    F -->|Yes| G[Workflow runtime]
    F -->|No| H{What does team know?}
    H --> I[Familiar framework wins]
    
    E --> J{Deployment constraints?}
    G --> J
    C --> J
    J --> K{Managed or self-hosted?}
    K --> L[Choose framework]
</div>

<!-- Speaker note: Walk through this flowchart. The decision tree isn't prescriptive but helps narrow the search space. -->

---

# Anti-Patterns

Common mistakes when choosing or building harnesses:

- **Over-engineering:** Using LangGraph for a 3-turn FAQ bot
- **Under-engineering:** Using raw API loop for a 20-step workflow with error recovery
- **Hype-driven selection:** Choosing based on GitHub stars or conference talks
- **Building custom when a framework fits:** Reinventing persistence or observability
- **Multi-agent when single agent suffices:** Complexity without benefit

<!-- Speaker note: Share examples if you have them. The "framework that fits" criterion is often overlooked. -->

---

# Frontier Outlook

**Production-Adopted:**
- **MCP (Model Context Protocol)** -- dynamic tool discovery, hardening in progress

**Early-Stage:**
- **A2A (Agent-to-Agent Protocol)** -- standardized agent interoperability

**Research/Experimental:**
- **Autonomous goal decomposition** -- agents that break down objectives without human prompting
- **Long-running agent OS** -- persistent agents that survive across sessions and environments

<!-- Speaker note: MCP is production-ready; A2A is early but promising. Autonomous decomposition and agent OS are longer-term research directions. -->

---

# Summary

**Core concepts:**
- The harness is the runtime layer -- 8 concerns every production agent must solve
- Choose your position on the spectrum: raw loop → full platform
- Evaluate frameworks against the eight-concern framework

**Key takeaways:**
- Start simple, measure, evolve
- Persistence + Observability + Intervention = production readiness
- The frontier: protocol-native runtimes, agent interoperability

<!-- Speaker note: Reinforce that harnesses are operational infrastructure. Get the basics right before adding advanced features. -->

---

<!-- _class: lead -->
<!-- _paginate: false -->
<!-- _header: '' -->
<!-- _footer: '' -->

# Questions?

## Thank you

Module 5: Agent Harnesses and Runtime Systems

<!-- End of presentation. -->
