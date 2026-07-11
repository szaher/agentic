# Module 6: Agent Harnesses and Runtime Systems — Design Spec

**Date:** 2026-07-09
**Status:** Draft
**Academy:** LLM Agents Academy

## Overview

A new Module 6 covering the agent harness as a runtime layer — the execution substrate that turns agent architectures into running systems. This module fills a gap between Module 4 (Agent Architectures) and the current Module 6 (Design Patterns), creating the curriculum spine:

**architecture → runtime → patterns → frameworks → orchestration → production**

### Module Description

The runtime layer that turns agent architectures into executable systems — managing the agent loop, tool dispatch, context and state flow, persistence, observability, error recovery, and human intervention across real production harnesses.

### Prerequisites

Module 4: Agent Architectures. Students need to know what ReAct, plan-and-execute, routing, handoffs, and workflow patterns are before learning how a harness implements them.

### Scope

- **12 lessons, ~8–10 hours total**
- **Approach:** Concept-First Layered (Approach A). Teach the harness as a stack of concerns bottom-up, build a harness as synthesis, then map to the real ecosystem.
- **Depth:** Conceptual + ecosystem map, with build-your-own as the teaching spine (not the whole module).
- **Frontier:** Stable production core (lessons 1–10) + clearly marked frontier appendix (lesson 12, part 2).

### Renumbering Impact

Inserting this module as Module 6 requires renumbering all subsequent modules:

| Current | New | Title |
|---------|-----|-------|
| Module 6 | Module 7 | Agent Design Patterns |
| Module 7 | Module 8 | Memory & Knowledge |
| Module 8 | Module 9 | Agent Frameworks & SDKs |
| Module 9 | Module 10 | Multi-Modal Agents |
| Module 10 | Module 11 | Multi-Agent Systems |
| Module 11 | Module 12 | Evaluation & Testing |
| Module 12 | Module 13 | Production, Deployment & Safety |
| Module 13 | Module 13 | Advanced Patterns & Real-World Applications |

### The Eight Harness Concerns

Every agent harness must solve these eight concerns. This is the organizing framework for the entire module.

1. **Loop execution** — the observe-think-act cycle
2. **Tool dispatch** — resolving model tool-call requests into function executions
3. **Context management** — assembling what the model sees each turn
4. **State and goals** — persisting structured data and tracking objectives
5. **Control flow** — routing, branching, graph traversal, workflow transitions
6. **Persistence** — checkpointing, resumability, durable execution
7. **Observability** — traces, logs, metrics, evaluation, replay
8. **Human intervention** — approval gates, escalation, oversight, emergency stop

### Recurring Case Study: Research Assistant

A single "research assistant" agent appears across lessons 1–10 to provide continuity:

- **Lesson 1:** Identify missing harness concerns in a naive implementation
- **Lesson 2:** Trace one run through the loop
- **Lesson 3:** Dispatch a search tool and a calculator tool
- **Lesson 4:** Manage goal, memory, and context pressure when sources grow
- **Lesson 5:** Add routing that separates search from summarization
- **Lesson 6:** Checkpoint after each source; crash and resume
- **Lesson 7:** Approval gate before sending an email summary
- **Lesson 8:** Trace a run to find where a wrong summary originated
- **Lesson 9:** Build the minimal harness that runs this agent
- **Lesson 10:** Extend with state, checkpoints, tracing, and the approval gate

---

## Lesson Designs

### Lesson 1: What Is an Agent Harness?

**Slug:** `01-what-is-an-agent-harness`
**Estimated time:** 40 min
**Difficulty:** Intermediate

**Learning objectives:**

- Define the agent harness as a distinct runtime layer, separate from the model, tools, and application code.
- Identify the eight core concerns every harness must solve: loop execution, tool dispatch, context management, state/goals, control flow, persistence, observability, and human intervention.
- Distinguish between the harness layer and adjacent layers.
- Explain why "just calling the API in a while loop" breaks down in production.

**Layer boundaries:**

- **Model API:** Produces model outputs and tool-call requests.
- **Tool layer:** Actual capabilities, functions, APIs, and external services.
- **Harness / runtime:** Controls the loop, validates actions, manages state, calls tools, persists progress, traces behavior, and gates human intervention.
- **Application layer:** User experience, business logic, product workflow.
- **Orchestration layer:** Broader coordination across agents, workflows, services, and deployment environments.

**Key concepts:**

- The harness as the "operating system" for an agent — it manages the lifecycle the way an OS manages processes.
- The eight-concern stack: loop → tools → context/state → control flow → persistence → observability → human intervention.
- Why the harness is invisible when things work and the first thing you debug when they don't.
- The spectrum from "no harness" (raw API calls) to "full runtime" (managed execution with durable state).

**Diagrams:**

- Layered architecture: Application → Harness → Model API / Tools / Memory / Environment.
- The eight-concern stack as a vertical layer diagram.

**Exercises:**

- Given a 30-line "raw API loop" agent, identify which harness concerns are missing and what breaks first in production.
- Classify five real agent failures as harness-layer vs model-layer vs tool-layer problems.

**Case study:** Identify missing harness concerns in a naive research assistant that searches, summarizes, and emails results using raw API calls.

---

### Lesson 2: The Agent Loop Internals

**Slug:** `02-agent-loop-internals`
**Estimated time:** 50 min
**Difficulty:** Intermediate

**Learning objectives:**

- Trace the execution of a single agent turn through the full loop: receive input → build context → call model → parse response → dispatch action → observe result → decide to continue or stop.
- Identify the decision points where the harness controls behavior: when to stop, when to retry, when to escalate.
- Compare loop implementations: simple while-loop, event-driven, coroutine-based, graph-based.
- Explain how turn budgets, token limits, and timeout policies are harness-level loop controls.

**Vocabulary — run, turn, step:**

- **Run:** One full execution attempt toward a user goal.
- **Turn:** One model interaction within the run (context in → response out).
- **Step:** One runtime action or transition: a model call, tool call, handoff, checkpoint, or human approval.

This vocabulary is used consistently throughout the module and maps directly to how SDKs expose execution. OpenAI Agents SDK exposes a `Runner` with sync, async, and streamed run methods. LangGraph exposes graph invocations. The vocabulary helps students read SDK documentation fluently.

**Key concepts:**

- The canonical loop: `while not done: context → model → parse → act → observe → update`.
- Turn lifecycle: pre-turn hooks → context assembly → model call → response parsing → action validation → tool execution → post-turn hooks → termination check.
- Loop termination strategies: max turns, token budget, explicit stop signal, goal satisfaction, timeout.
- The difference between a run, a turn, and a step.
- Streaming vs batch loop execution.

**Diagrams:**

- Flowchart of a single turn through the loop with all decision points.
- Comparison of loop shapes: while-loop, event loop, graph traversal.

**Code examples:**

- Pseudocode for the canonical loop with annotated decision points.
- Short side-by-side snippets showing how Claude Agent SDK, OpenAI Agents SDK, and LangGraph each express the same loop differently (not full tutorials — just loop shape comparison).

**Case study:** Trace one full run of the research assistant through 4 turns: search → search → calculate → respond. Annotate each turn with the harness decisions made.

---

### Lesson 3: Tool Dispatch and Action Validation

**Slug:** `03-tool-dispatch`
**Estimated time:** 45 min
**Difficulty:** Intermediate

**Learning objectives:**

- Explain how the harness resolves a model's tool-call request into an actual function execution.
- Describe the tool dispatch pipeline: parse tool call → validate parameters → check permissions → execute → capture result → format for model.
- Distinguish between static tool registration (fixed at startup) and dynamic capability discovery (MCP, runtime registries).
- Identify where action validation, rate limiting, and sandboxing fit in the dispatch pipeline.

**Key concepts:**

- The dispatch table: mapping tool names to implementations.
- Parameter validation: schema checking before execution.
- Permission boundaries: which tools the agent is allowed to call, under what conditions.
- Parallel vs sequential tool execution and how the harness manages concurrency.
- Error capture and result formatting: turning exceptions, timeouts, and partial results into model-readable observations.
- MCP as dynamic capability discovery and remote tool/resource access — not just a tool dispatcher, but a protocol for connecting AI applications to external systems including tools, data sources, and workflows. Within tool dispatch, MCP provides: tool listing, capability negotiation, invocation, result/error return, and security boundaries.
- Structured tool calls vs fragile text parsing: why production harnesses always use typed schemas.

**Diagrams:**

- Tool dispatch pipeline flowchart: model output → parse → validate → permission check → execute → format → return to model.
- Static registry vs dynamic MCP discovery comparison.

**Code examples:**

- A minimal tool dispatcher: dictionary of functions, schema validation, error wrapping.
- How MCP tool dispatch differs from local function dispatch.

**Case study:** The research assistant dispatches a `web_search` tool and a `calculator` tool, showing the full dispatch pipeline for each — including a schema validation failure and error recovery.

---

### Lesson 4: Context, Goals, Memory, and State

**Slug:** `04-context-goals-state`
**Estimated time:** 50 min
**Difficulty:** Intermediate

**Learning objectives:**

- Distinguish between the four state domains a harness manages: context window (what the model sees now), goals (what the agent is trying to achieve), conversation memory (history), and agent state (structured data persisted across turns).
- Explain how the harness assembles the context window from system prompt, goal instructions, conversation history, tool results, and retrieved knowledge.
- Describe context window pressure and the strategies harnesses use to manage it: truncation, summarization, sliding window, priority ranking.
- Identify how goals flow through the harness: initial goal → sub-goal decomposition → goal tracking → goal completion signals.

**Key concepts:**

- Context assembly as a harness responsibility: the model doesn't decide what it sees — the harness does.
- The context budget: system prompt + instructions + history + tool results + retrieved context must fit within the window.
- Goal representations: natural language instructions, structured task objects, hierarchical goal trees.
- State vs context: state persists across turns and sessions; context is assembled fresh each turn from state + new inputs.
- Message history management: append-only logs, summarization checkpoints, importance-weighted pruning.
- How different harnesses expose state:
  - **OpenAI Agents SDK:** `RunContextWrapper` for runtime dependencies (not passed to the LLM), sessions for cross-run conversation continuity.
  - **LangGraph:** Graph state channels for per-run state, checkpointers for persistence, stores for cross-thread long-term memory.
  - **Claude Agent SDK / Anthropic API:** Conversation message history, tool_use/tool_result blocks, MCP-provided tool and resource context.

**Diagrams:**

- Context assembly pipeline: sources → priority ranking → budget allocation → final context window.
- Four state domains: context window, goals, memory, agent state — showing what persists vs what is assembled per turn.

**Case study:** The research assistant has searched 4 sources. Context pressure forces the harness to choose: truncate early results, summarize them, or drop the least relevant. Show how different strategies change the model's next output.

---

### Lesson 5: Control Flow — Loops, Routers, Graphs, and Workflows

**Slug:** `05-control-flow`
**Estimated time:** 50 min
**Difficulty:** Intermediate

**Learning objectives:**

- Classify the four control flow models a harness can implement: linear loop, conditional router, directed graph, and state machine/workflow.
- Map each model to the architectures from Module 4, with appropriate nuance about where architectures can evolve beyond their default control flow shape.
- Identify when the harness controls flow (deterministic edges, routing rules) vs when the model controls flow (LLM-decided next step, dynamic tool selection).
- Describe how handoffs work at the runtime level: context transfer, tool scope changes, and identity switching between sub-agents.

**Architecture → control flow mapping (with nuance):**

- **ReAct** → usually linear loop.
- **Plan-and-execute** → loop plus explicit planning state; may evolve into graph or workflow once planning, execution, validation, and replanning are separated into distinct runtime nodes.
- **Routing / handoffs** → conditional router.
- **LangGraph-style systems** → directed graph / state graph.
- **Deterministic business processes** → workflow / state machine.

**Key concepts:**

- Linear loop: the simplest control flow — repeat until done. ReAct runs on this shape with think-act-observe termination logic.
- Conditional router: a dispatch node that inspects input or state and routes to one of N handlers. The harness evaluates the condition, not the model (though the model may produce the signal the router reads).
- Directed graph: nodes are processing steps, edges define transitions. The harness walks the graph, executing each node. LangGraph is the canonical example.
- State machine / workflow: explicit states with defined transitions and guards. The harness enforces that only valid transitions occur.
- The autonomy spectrum: fully autonomous (model decides everything) → guided (harness constrains choices) → deterministic (harness decides everything, model executes within nodes).
- Handoffs as runtime events: context serialization, tool scope narrowing/widening, identity and instruction switching. OpenAI Agents SDK explicitly manages handoffs as a runtime concept within the agent loop.

**Diagrams:**

- Four control flow shapes side by side: loop, router, graph, state machine.
- The autonomy spectrum with real examples placed along it.
- Handoff sequence diagram: Agent A → harness → context transfer → Agent B.

**Case study:** The research assistant now has a router separating "search" requests from "summarize" requests, showing how control flow changes the runtime shape without changing the model.

---

### Lesson 6: Persistence, Checkpointing, and Resumability

**Slug:** `06-persistence-checkpointing`
**Estimated time:** 45 min
**Difficulty:** Intermediate

**Learning objectives:**

- Explain why agent runs need persistence — not only for failure recovery, but also for inspection, time travel, auditability, and human intervention.
- Distinguish between three persistence scopes: turn-level (retry a single model call), run-level (resume a multi-step run), and session-level (continue across user interactions).
- Describe how checkpointing works at the harness level: snapshot state → serialize → store → restore → resume from last checkpoint.
- Identify the trade-offs between checkpointing strategies: full state snapshots vs incremental deltas vs event sourcing.

**Key concepts:**

- The durability problem: a 20-step agent run that fails at step 17 should not restart from step 1.
- Five motivations for persistence:
  1. **Failure recovery** — resume after crashes.
  2. **Human intervention** — pause for approval, resume after decision.
  3. **Inspection** — examine agent state at any point in the run.
  4. **Time travel** — return to a prior checkpoint and re-execute with different inputs or tools.
  5. **Auditability** — prove what the agent did, when, and why.
- Checkpoint anatomy: agent state + message history + goal progress + pending tool calls + control flow position.
- Serialization boundaries — what can be checkpointed vs what cannot:
  - Cannot: open network connections, live file handles, in-flight tool executions, ephemeral authentication state, provider-side context caches, non-serializable runtime objects.
  - Design principle: **a production harness should checkpoint intent and state, not fragile runtime objects.**
- Checkpoint storage: in-memory (development), database (production), distributed store (multi-agent).
- Resume strategies: replay from checkpoint, skip completed steps, re-validate before continuing.
- How real harnesses implement persistence:
  - **LangGraph:** Checkpointers persist thread-level graph state (conversation continuity, HITL, time travel, fault tolerance). Stores persist longer-term application-defined memory across threads.
  - **OpenAI Agents SDK:** Sessions for cross-run conversation continuity.
  - **Custom:** Event-sourced logs with state reconstruction.
- Cost implications: checkpointing lets you resume without re-running (and re-paying for) completed steps.

**Diagrams:**

- Timeline of a 10-step run with checkpoints, showing failure at step 7 and resume from checkpoint at step 5.
- Persistence scope diagram: turn → run → session, with what each level saves.
- **Production triad** connecting diagram: Persistence enables intervention. Intervention creates pause/resume events. Observability explains and audits both.

**Case study:** The research assistant runs a 5-source search. After 3 sources, the process is interrupted. Checkpointing lets it resume from source 4 without re-searching 1–3.

---

### Lesson 7: Human-in-the-Loop and Intervention Points

**Slug:** `07-human-in-the-loop`
**Estimated time:** 45 min
**Difficulty:** Intermediate

**Learning objectives:**

- Identify the five common intervention points in an agent run: pre-action approval, post-action review, goal modification, escalation on uncertainty, and emergency stop.
- Explain how the harness implements intervention: pause execution → serialize state → present to human → receive decision → resume or abort.
- Describe the design trade-off between autonomy and oversight: fully autonomous (no human), approval gates (human approves specific actions), supervised (human reviews every step), human-directed (human drives, agent assists).
- Compare how different harnesses expose human intervention.

**Key concepts:**

- Intervention as a first-class harness concern (concern #8), not an afterthought bolted onto the application layer.
- The approval gate pattern: the harness checks a policy before executing an action — if the policy says "requires approval," the run pauses and waits for human input.
- Intervention and persistence are coupled: you can only pause for human input if you can checkpoint and resume (the production triad from Lesson 6).
- Escalation triggers: confidence thresholds, action risk classification, cost limits, anomaly detection.
- The UX of intervention: synchronous (blocking, human is waiting) vs asynchronous (human reviews later, agent is paused).
- Designing intervention policies: which actions need approval, under what conditions, and how to prevent intervention fatigue.

**Framework comparison (guardrails vs HITL, carefully distinguished):**

- **LangGraph / LangChain:** Interrupts, breakpoints, and HITL middleware for pausing execution and waiting for a decision. The middleware checks a proposed tool call against a configurable policy, pauses execution, and waits for a human decision when review is required.
- **OpenAI Agents SDK:** Guardrails are automated runtime checks around inputs/outputs/tools. HITL approvals are a distinct built-in flow for sensitive tool calls: runs pause with interruptions, surface pending approvals, serialize `RunState`, and resume after approval or rejection. Review UI, notification, policy design, and approval queues remain application responsibilities.
- **Custom harnesses:** Policy checks, approval queues, saved run state, and resume commands.

Guardrails and human-in-the-loop are related but distinct mechanisms. Guardrails are automated runtime checks; HITL is a pause-for-human-decision pattern. A harness may use both.

**Diagrams:**

- The autonomy spectrum with intervention density: autonomous → approval gates → supervised → human-directed.
- Sequence diagram: agent requests action → harness checks policy → pauses for approval → human approves → harness resumes execution.
- Decision matrix: action risk × reversibility → intervention level.

**Case study:** The research assistant wants to send an email summarizing its findings. The harness pauses for human approval before the send action, showing the full pause → checkpoint → present → decision → resume cycle.

---

### Lesson 8: Observability — Traces, Logs, Evals, and Replay

**Slug:** `08-observability`
**Estimated time:** 50 min
**Difficulty:** Intermediate

**Learning objectives:**

- Explain why agent observability is harder than traditional application observability: non-determinism, multi-step reasoning, tool side effects, and the gap between "model thought X" and "the right answer was Y."
- Describe the five observability pillars for agent harnesses: structured logs, distributed traces, evaluation metrics, cost/latency tracking, and run replay.
- Trace a single agent run through its observability output: which events are logged, how they connect into a trace, what metrics they produce.
- Identify where observability instrumentation lives in the harness: pre/post hooks on model calls, tool dispatch, state changes, and control flow transitions.

**Key concepts:**

- Traces as the primary observability primitive: a trace is a tree of spans representing one complete run — model calls, tool invocations, state transitions, and human interventions are all spans within the trace.
- Structured logging vs unstructured: every log event should carry run ID, turn number, span ID, event type, and timing — free-form print statements are not observability.
- The four diagnostic questions for any agent failure: What did the model see? (context) What did it decide? (response) What happened? (execution) Was it right? (evaluation)
- **Cost and latency as observability concerns:** Production agents need "how expensive was this run?" and "how long did each step take?" alongside "what happened?" LangSmith frames observability as spanning from individual traces to production-wide performance metrics.
- Evaluation as runtime observability: not just offline benchmarks, but per-run scoring — did this run achieve its goal? How many turns? What was the cost? Were there errors?
- **Three levels of replay** (realistic, not overpromising):
  1. **Trace replay:** Inspect exactly what happened — read-only walkthrough of a recorded run.
  2. **State replay:** Resume or re-run from a checkpoint with live model calls. Results may differ due to non-determinism.
  3. **Deterministic replay attempt:** Re-execute with captured inputs, recorded tool outputs as mocks, and seeds where available. Useful for debugging but not guaranteed identical due to model non-determinism.
- How real harnesses instrument:
  - **OpenAI Agents SDK:** Built-in tracing with span types for LLM generations, tool calls, handoffs, guardrails, and custom events.
  - **LangGraph + LangSmith:** Trace capture, run comparison, evaluation scoring, production monitoring dashboards.
  - **OpenTelemetry GenAI conventions:** A portability layer (not a harness) with semantic fields for conversation IDs, system instructions, input/output messages, retrieval documents, tool definitions, tool calls, tool results, usage, and evaluation scores.
  - **Custom:** Structured JSON event logs with trace/span IDs and OpenTelemetry export.

**Diagrams:**

- Trace tree for a multi-turn agent run: root span → turn spans → model call / tool call / state update child spans.
- The five observability pillars mapped to harness hook points.
- Replay levels: trace replay (read-only) → state replay (live, from checkpoint) → deterministic replay (mocked tools).

**Case study:** A research run produces a wrong summary. Walk through the trace to find the root cause: the harness's context assembly step dropped a key search result due to budget pressure. The eval score flagged degradation. State replay from the checkpoint with a larger context budget confirms the fix.

---

### Lesson 9: Build a Minimal Harness from Scratch

**Slug:** `09-build-minimal-harness`
**Estimated time:** 60 min
**Difficulty:** Intermediate-Advanced

**Learning objectives:**

- Implement a working agent harness in ~100–150 lines of Python (excluding tool definitions and tests) that executes the canonical loop: context assembly → model call → response parsing → tool dispatch → observation → termination check.
- Wire up a tool registry with schema validation and error wrapping.
- Manage a message history that grows across turns and feeds back into context assembly.
- Add loop controls: max turns, token budget tracking, and explicit stop signals.

**What students build:**

- A `Harness` class (or set of functions) with:
  - `run(goal: str) → RunResult` — the outer loop.
  - `assemble_context(goal, history, tool_results) → messages` — context assembly.
  - `dispatch_tool(tool_call) → observation` — tool dispatch with validation.
  - A tool registry: `register_tool(name, fn, schema)`.
  - Termination logic: max turns, stop tool, token counter.
- Three registered tools: a deterministic search stub (for reproducibility), a calculator, and a "done" tool that signals completion.
- The research assistant case study as the test scenario: give it a goal, watch it search, calculate, and produce a final answer.

**Design constraints (explicitly stated to students):**

- No persistence, no checkpointing, no tracing — those come in Lesson 10.
- No framework dependencies — raw API calls to an LLM provider.
- Use structured tool calls (typed schemas), not fragile text parsing.
- Use deterministic stub tools so the lesson is reproducible.
- The point is to feel the pressure that creates a harness, not to build a production system.

**Pedagogical approach:**

- Incremental build: start with a 20-line loop that just calls the model, then add tool dispatch, then add context assembly, then add termination controls.
- At each step, run the agent and observe what breaks without the new capability.
- End with a working agent that can solve a multi-step research question.

**Case study:** The research assistant, running on the harness students just built, searches 3 sources, calculates a statistic, and produces a final answer.

---

### Lesson 10: Extend the Harness — State, Checkpoints, Tracing, and Intervention

**Slug:** `10-extend-harness`
**Estimated time:** 60 min
**Difficulty:** Advanced

**Learning objectives:**

- Add structured agent state that persists across turns and is separate from the message history.
- Implement checkpoint-and-resume: serialize harness state to a file, restore it, and continue from where the run left off.
- Add tracing instrumentation: structured log events for every model call, tool dispatch, and state change, with run ID, turn number, and timing.
- Implement a simple approval gate: before executing a designated "high-risk" tool, pause the run and wait for human confirmation.
- Handle idempotency on resume: ensure completed tool calls are not re-executed after a checkpoint restore.

**What students build (extending Lesson 9):**

- `AgentState` — a serializable dictionary that tools can read and write, separate from message history.
- `checkpoint(run_id, turn) → file` and `restore(run_id) → HarnessState` — JSON-based checkpoint/resume with completed-step tracking for idempotency.
- `TracingContext` — a context manager that emits structured JSON events for each span (model call, tool call, state mutation), with run ID, turn number, span ID, and timing.
- An approval gate on one tool: when the agent wants to call `send_email`, the harness pauses, checkpoints, emits an approval request, and waits for a decision before proceeding or aborting.

**Idempotency on resume:**

- The checkpoint records which tool calls have completed and their results.
- On restore, the harness checks completed steps before re-dispatching — a tool call that already succeeded is skipped and its cached result is returned.
- This prevents side effects (duplicate emails, duplicate API calls) after crash recovery.

**Approval gate framing:**

The approval gate is conceptually: **pause → checkpoint → emit approval request → receive decision → resume.** The CLI `y/n` prompt is just the simplest local implementation. Production runtimes implement this as an interrupt/resume problem with external approval queues, webhook callbacks, or UI-driven review flows.

**Pedagogical approach:**

- Start from the working Lesson 9 harness.
- Add state first — run the agent, observe that tools can now share structured data across turns.
- Add checkpointing — kill the process mid-run, restart, resume from checkpoint, verify it continues correctly and does not repeat completed steps.
- Add tracing — re-run, inspect the trace output, find which turn was most expensive.
- Add the approval gate — run with a goal that triggers `send_email`, experience the pause/resume cycle.
- End with the framing: "Your harness now has the core version of 6 of the 8 concerns. Production frameworks add stronger implementations of advanced control flow, distributed persistence, protocol interoperability, deployment, and observability."

**Case study:** Full run: search 3 sources, store findings in agent state, checkpoint after each source, trace the full run, attempt to email the summary (approval gate fires), human approves, run completes. Then: simulate a crash after source 2, restore from checkpoint, verify sources 1–2 are not re-fetched (idempotency) and source 3 proceeds.

---

### Lesson 11: Ecosystem Map — SDKs, Graph Runtimes, Workflow Runtimes, Multi-Agent Runtimes

**Slug:** `11-ecosystem-map`
**Estimated time:** 50 min
**Difficulty:** Intermediate

**Learning objectives:**

- Classify production harnesses into four categories based on their runtime model: lightweight SDKs, graph runtimes, workflow/orchestration runtimes, and multi-agent runtimes.
- Map each category to the eight harness concerns and identify where each is strong, weak, or silent.
- Compare at least seven real harnesses across the categories using a structured evaluation framework.
- Identify ecosystem trend lines: convergence toward durable execution, protocol-native tool access (MCP), and standardized agent interoperability (A2A).

**Harness categories:**

**Agent SDKs / Model-adjacent runtimes** — Runtimes that sit close to the model API, ranging from lower-level tool-calling interfaces to fully managed agent loops with built-in tools, hooks, and observability.

- **Lower-level model APIs:**
  - **Anthropic Messages API + tool_use:** The developer manages the loop, context, and tool dispatch; the API provides structured tool calling via tool_use/tool_result blocks.
- **Managed agent SDKs:**
  - **OpenAI Agents SDK:** Managed agent loop via Runner, tool execution, handoffs, guardrails, tracing, sessions.
  - **Claude Agent SDK:** Full agent runtime providing the same tools, agent loop, and context management that power Claude Code — including built-in tools, hooks, subagents, MCP, permissions, sessions, cost tracking, and OpenTelemetry observability. Distinct from the raw Messages API.
- **UI/app agent SDKs:**
  - **Vercel AI SDK:** Streaming-first, multi-provider, tool calling, structured outputs.

**Graph runtimes** — Agents modeled as directed graphs with explicit nodes, edges, and state. The harness walks the graph, managing state transitions, persistence, and human intervention.

- **LangGraph:** State graph, checkpointers, stores, interrupts, streaming, LangSmith observability, durable execution.

**Workflow / orchestration runtimes** — Deterministic or semi-deterministic pipelines where the harness enforces execution order, retries, and step-level control.

- **Temporal + LLM integrations:** Durable workflow execution with activity-level retry and timeout.
- **Prefect / Airflow + agent steps:** DAG-based orchestration with agent nodes.
- **Custom event-driven pipelines.**

**Multi-agent runtimes** — Harnesses designed to coordinate multiple agents with communication, delegation, and shared state.

- **CrewAI:** Role-based agent teams with task delegation and shared memory.
- **AG2 / AutoGen lineage:** Conversational multi-agent patterns with group chat orchestration. Note: the original Microsoft AutoGen repository is in maintenance mode; AG2 continues the multi-agent group chat patterns.
- **OpenAI Agents SDK handoffs:** Lightweight multi-agent via agent-to-agent handoff within a single runtime.

**Comparison framework (structured table):**

| Concern | OpenAI Agents SDK | Anthropic Messages API | Claude Agent SDK | LangGraph | CrewAI | AG2 / AutoGen | Custom |
|---------|------------------|----------------------|-----------------|-----------|--------|--------------|--------|
| Loop execution | Managed Runner | Developer-managed | Managed loop | Graph walker | Task executor | Chat manager | Your code |
| Tool dispatch | Built-in | tool_use API blocks | Built-in + MCP | Node-based | Tool delegation | Function map | Your code |
| Context/state | RunContext + sessions | Messages array | Managed context | State channels | Shared memory | Chat history | Your code |
| Control flow | Linear + handoffs | Developer-managed | Linear + hooks | Graph edges | Sequential/hierarchical | Conversation turns | Your code |
| Persistence | Sessions | External | File checkpointing + session continuity; external for full run-state durability | Checkpointers + stores | External | External | Your code |
| Human intervention | Guardrails + built-in HITL approvals | External | Permissions + hooks | Interrupts + breakpoints | External | Human proxy agent | Your code |
| Observability | Built-in tracing | External | OpenTelemetry + cost tracking | LangSmith | External | External | Your code |
| Multi-agent | Handoffs | External | External | Subgraphs | Native crews | Native groups | Your code |
| Deployment model | Local process / hosted | Any (API client) | Local process / CLI | Local / LangGraph Platform | Local process | Local process | Any |
| Protocol support | Native tools | tool_use protocol | MCP native | MCP adapters | MCP adapters | Custom tool APIs | Any |

**Key insight:** "Custom" appears in every row because every harness is ultimately custom code making decisions about these eight concerns. Frameworks shift where the customization happens — from "you write the loop" to "you configure the graph" — but the concerns don't disappear.

**Ecosystem snapshot:** This comparison reflects the framework landscape as of the module review date. Agent SDK capabilities change quickly; verify persistence, HITL, tracing, MCP, and deployment support against current docs before making production decisions. MCP and A2A are both evolving open standards — protocol-native runtime claims should be treated as time-sensitive.

**Diagrams:**

- 2×2 matrix: runtime complexity (low → high) × multi-agent support (single → multi), with harnesses plotted.
- Ecosystem evolution timeline: raw API calls → thin SDKs → graph runtimes → durable orchestration → protocol-native runtimes.

---

### Lesson 12: Choosing a Harness + Frontier Appendix

**Slug:** `12-choosing-and-frontier`
**Estimated time:** 45 min
**Difficulty:** Intermediate-Advanced

#### Part 1: Choosing a Harness (production-grounded)

**Learning objectives:**

- Apply a structured decision framework to select a harness for a given project.
- Identify the warning signs of harness mismatch: over-engineering and under-engineering.

**Decision framework flowchart:**

1. **How many agents?** Single → skip multi-agent runtimes. Multiple with coordination → consider multi-agent runtimes or graph runtimes with subgraph support.
2. **How complex is the control flow?** Single loop → lightweight SDK. Conditional routing or handoffs → SDK with handoff support or graph runtime. Complex branching with state → graph runtime or workflow engine.
3. **Do you need durable execution?** No (short runs, acceptable to retry) → any runtime. Yes (long runs, expensive steps, human gates) → graph runtime with checkpointers or workflow engine.
4. **What does your team know?** Existing LangChain investment → LangGraph. OpenAI-first stack → OpenAI Agents SDK. Anthropic-first → Claude Agent SDK or Messages API + custom harness. Workflow engineering background → Temporal or similar.
5. **What are the deployment constraints?** Serverless / stateless → lightweight SDK with external state. Long-running processes acceptable → graph runtime or workflow engine. Existing orchestration platform → integrate agent steps into that platform.

**Anti-patterns:**

- Using LangGraph for a 3-turn single-tool agent (over-engineering).
- Using raw API calls for a 20-step workflow with human approval gates (under-engineering).
- Choosing a framework because of hype rather than fit.
- Building a custom harness when an existing one covers your concerns well.
- Using a multi-agent framework when a single agent with good tools would suffice.

#### Part 2: Frontier Appendix (clearly marked as emerging/experimental)

**Learning objectives:**

- Describe three emerging runtime directions and assess their maturity.

**Not required for the capstone. Clearly labeled as emerging/experimental.**

**1. Protocol-native runtimes**

- MCP as a first-class runtime primitive: harnesses that discover and connect to tool/resource servers dynamically, rather than registering tools at startup.
- A2A as agent-to-agent runtime fabric: harnesses that discover, negotiate with, and delegate to other agents via a standard protocol, rather than hardcoded multi-agent topologies.
- **MCP maturity:** Production-adopted and increasingly mature for tool/resource connectivity, but production readiness depends on security, permissions, identity, observability, and server quality. MCP is an open standard with visible production adoption, but it does not solve the whole harness problem by itself.
- **A2A maturity:** Early-stage with reference implementations and SDKs. An open standard for agent-to-agent communication, positioned in the frontier appendix rather than the production core.

**2. Autonomous goal decomposition and self-directed execution**

- Agents that receive high-level goals and decompose them into sub-goals, sub-tasks, and execution plans without human-authored task breakdowns.
- Runtime implications: the harness must manage goal trees, track progress across sub-goals, handle partial completion, and decide when to re-plan.
- **Maturity:** Demonstrated in research and early products (AutoGPT-style systems, Devin, Claude Code); reliability and controllability remain open challenges.

**3. Long-running agent operating systems**

- Agents that persist across days or weeks, maintaining state, learning from interactions, and operating semi-autonomously.
- Runtime implications: session management at scale, memory consolidation, credential/permission management over time, cost budgeting across long horizons.
- **Maturity:** Early experiments (Claude Code sessions, Devin workspaces, custom enterprise systems); no standardized runtime yet.

**Each frontier topic includes:** What the runtime concern is, why current harnesses don't fully solve it, what a solution might look like, and current maturity.

**Diagrams:**

- Harness selection flowchart (decision framework from Part 1).
- Frontier maturity radar: protocol-native / goal decomposition / long-running OS, plotted on research → experimental → early production → mature.

**Module closing:**

- Connect forward to Module 9 (Frameworks & SDKs) where students will use these harnesses hands-on.
- Connect back to Module 4 (Architectures): "You now know what architectures exist and how the runtime layer executes them. Next, you'll learn the design patterns that make them maintainable."

---

## Module Metadata (meta.json)

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

## Cross-References and Forward/Backward Links

### Backward references (this module uses):

- **Module 1, Lesson 4** (The Agent Loop): Introductory loop concept — this module deepens it at the runtime level.
- **Module 3** (Tool Use & Function Calling): MCP, function calling basics — this module shows how the harness orchestrates tool dispatch.
- **Module 4** (Agent Architectures): ReAct, plan-and-execute, routing, workflows — this module shows how the runtime implements each.

### Forward references (other modules reference this):

- **Module 7** (Design Patterns, renumbered): Tool registry, middleware/hooks, context management, checkpointing patterns plug into the harness layer taught here.
- **Module 9** (Frameworks & SDKs, renumbered): Hands-on framework walkthroughs build on the runtime mental model from this module. Students know what to look for in each framework.
- **Module 11** (Multi-Agent Systems, renumbered): Multi-agent orchestration patterns are runtime-level coordination concerns.
- **Module 12** (Evaluation & Testing, renumbered): Evaluation harnesses use the tracing and observability concepts from Lesson 8.
- **Module 13** (Production, Deployment & Safety, renumbered): Production reliability patterns (retries, circuit breakers, monitoring) extend the harness-level concerns from Lessons 6–8.

## Implementation Notes

- All code examples use Python (the academy's primary language).
- Lessons 9–10 use raw LLM API calls (no framework dependency).
- Deterministic tool stubs in Lesson 9 ensure reproducibility.
- The ecosystem comparison table in Lesson 11 should be maintained as frameworks evolve; include version/date stamps.
- The frontier appendix in Lesson 12 should be reviewed quarterly for maturity updates.
- Renumbering existing modules requires updating: directory names, meta.json `id` fields, all cross-references in lesson MDX content, tutorial spec references, and navigation configuration.
