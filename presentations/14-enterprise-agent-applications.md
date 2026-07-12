---
marp: true
theme: academy
header: 'LLM Agents Academy'
footer: 'Module 14: Enterprise Agent Applications'
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

# Enterprise Agent Applications

## Module 14: Applying Agent Patterns to Enterprise Verticals

<!-- Title slide. This module applies the four-layer template from Module 13 to enterprise verticals with production-grade governance. -->

---

# Agenda

- **Part 1** — What makes enterprise different
- **Part 2** — Data agents and the semantic layer
- **Part 3** — Knowledge, support, DevOps, and workflow agents
- **Part 4** — Governance, risk, and compliance
- **Part 5** — Adoption: rollout, evaluation, and ROI

<!-- Speaker note: Module 14 is the applied enterprise deep-dive. Each part maps to one or more lessons. -->

---

<!-- _class: section-divider -->
<!-- _header: '' -->
<!-- _footer: '' -->

# Part 1

## The Enterprise Agent Landscape

What makes enterprise deployment fundamentally different from prototype agents.

---

# Five Differences from Prototypes

| Concern | Prototype | Enterprise |
|---------|-----------|------------|
| **Data access** | Open APIs, sample data | Governed org data, row-level security |
| **Identity** | API key | User-impersonation, SSO, RBAC |
| **Compliance** | None | GDPR, HIPAA, SOX, audit trails |
| **Workflows** | Standalone | Approval chains, escalation, handoffs |
| **Change mgmt** | Developer decides | Training, phased rollout, feedback |

<!-- Speaker note: Enterprise is not "bigger model." It's organizational integration. -->

---

# Enterprise Readiness Checklist

Six dimensions to evaluate before deploying:

1. **Governance Model** — Who owns the agent? Who is accountable?
2. **Permission Framework** — How does the agent inherit user permissions?
3. **Observability** — What metrics and alerts detect problems?
4. **HITL Intervention** — Where are the approval gates?
5. **Evaluation Strategy** — How do you measure success?
6. **Rollout Plan** — Who are the early adopters?

<!-- Speaker note: No single dimension is sufficient. All six must be addressed. -->

---

# Enterprise Agent Maturity Model

<div class="mermaid">
graph LR
    C[Copilot] -->|"Trust earned"| A[Assistant] -->|"Governance proven"| AU[Autonomous Agent]
    C --- CG["Suggests only<br/>Human executes<br/>Minimal governance"]
    A --- AG["Acts with gates<br/>Approval for high-risk<br/>Moderate governance"]
    AU --- AUG["Acts independently<br/>Policy boundaries<br/>Comprehensive governance"]
    style C fill:#e8f5e9,stroke:#4caf50
    style A fill:#fff9c4,stroke:#fbc02d
    style AU fill:#ffccbc,stroke:#f4511e
</div>

> **Start with Copilot.** Autonomy is earned through demonstrated reliability, not granted upfront.

<!-- Speaker note: Most enterprise deployments begin at Copilot and graduate over months. -->

---

# Enterprise Evaluation Criteria

Beyond task success rate and accuracy:

| Metric | What It Measures |
|--------|-----------------|
| **ROI** | Time saved, error reduction, throughput gain |
| **Adoption rate** | % of target users actively using the agent |
| **Compliance score** | Policy violations per 1,000 actions |
| **Incident rate** | Problems requiring human intervention |

<!-- Speaker note: Technical correctness is necessary but not sufficient. Business impact matters. -->

---

<!-- _class: section-divider -->
<!-- _header: '' -->
<!-- _footer: '' -->

# Part 2

## Data Agents and the Semantic Layer

Agents that query, analyze, and explain data.

---

# Data Agent vs Data Chatbot

| Dimension | Chatbot | Data Agent |
|-----------|---------|------------|
| Workflow | One-shot Q&A | Multi-step analysis with planning |
| Query strategy | Single SQL query | Iterative refinement |
| Validation | Weak or absent | Evidence trails, verification |
| Human oversight | Optional | Required for write operations |

> A chatbot answers questions. A data agent executes analytical workflows.

<!-- Speaker note: The distinction sets expectations for what the system can do. -->

---

# Why Data Agents Need a Semantic Layer

*"What was our revenue in EMEA last quarter?"*

Without a semantic layer, the agent faces ambiguity:

- **Revenue** — Gross? Net? ARR? Bookings?
- **EMEA** — Which countries? Middle East? Africa?
- **Quarter** — Fiscal or calendar? When does Q1 start?
- **Table** — `invoices`, `transactions`, `orders`, or a view?
- **Permissions** — Can this user see all EMEA data?

**The semantic layer provides canonical answers to all of these.**

<!-- Speaker note: This is the #1 failure mode. Syntactically correct, semantically wrong queries. -->

---

# Semantic Layer Components

1. **Metric definitions** — `revenue = SUM(amount_usd) WHERE status = 'completed'`
2. **Entity definitions** — `active_customer = last_login ≥ 30 days ago AND paid`
3. **Business glossary** — Canonical term → SQL expression mapping
4. **Join specifications** — How tables relate and at what grain
5. **Permission-aware views** — Row/column security pre-applied
6. **Canonical dimensions** — Time, geography, product, customer segment

> Without a semantic layer, every data agent query is a gamble.

---

# Write-Action Autonomy Tiers

| Tier | Action | Risk | Approval |
|------|--------|------|----------|
| 1 | Read-only query | Low | No |
| 2 | Derived analysis | Low-Med | No |
| 3 | Recommended action | Medium | Human decides |
| 4 | Write-back / modification | High | Human approves |
| 5 | Pipeline modification | Very High | Approval + audit |

> **Most production data agents operate at Tier 1-2.** Start read-only.

<!-- Speaker note: Tiers 4-5 are rare and require significant governance infrastructure. -->

---

# Data Agent Runtime Architecture

<div class="mermaid">
graph TB
    User[User Question] --> Context[Context Assembly]
    Context --> Schema[Schema Metadata]
    Context --> Semantic[Semantic Layer]
    Context --> Perms[Permission Rules]
    Context --> Agent[Agent Core]
    Agent --> Tools[Tool Dispatch]
    Tools --> QE[Query Engines]
    Tools --> SM[Semantic Models]
    Agent --> Guard[Guardrails]
    Guard --> RO[Read-Only Mode]
    Guard --> QV[Query Validation]
    Guard --> CL[Cost Limits]
    Agent --> HITL{HITL Gate}
    HITL -->|Write| Approve[Human Approval]
    HITL -->|Read| Execute[Execute]
    style Context fill:#e6f3ff,stroke:#4a90e2
    style Guard fill:#ffe6e6,stroke:#e74c3c
</div>

<!-- Speaker note: This maps directly to the Module 5 harness architecture with data-specific layers. -->

---

# Reliability Limits

> **38% pass@1** — Best frontier model on complex enterprise tasks
> — 2026 Data Agent Benchmark (arXiv:2603.20576)

**Common failure modes:**
- Hallucinating table or column names
- Ignoring metric definitions from the semantic layer
- Generating semantically wrong but syntactically valid queries
- Misinterpreting join requirements
- Violating permission boundaries

**Data agents are not a solved problem.** Human oversight and evidence trails are essential.

<!-- Speaker note: Cite arXiv:2603.20576. Vendor benchmarks often use simplified schemas. -->

---

<!-- _class: section-divider -->
<!-- _header: '' -->
<!-- _footer: '' -->

# Part 3

## Enterprise Verticals

Knowledge, DevOps, and workflow agents.

---

# Knowledge and Support Agents

**Unique enterprise challenges:**

| Challenge | Impact |
|-----------|--------|
| Proprietary access | Agent must enforce source-level permissions |
| Source staleness | Must track freshness and warn about old sources |
| Source fragmentation | Multi-source retrieval and triangulation |
| Quality variance | Must score sources (policy=1.0, wiki=0.5, Slack=0.3) |

**Every answer must include source grounding**: citation, metadata, confidence, triangulation.

---

# Three Escalation Triggers

<div class="mermaid">
graph TD
    A[Customer Message] --> B{Policy Trigger?}
    B -->|Yes| C[Escalate: Legal/VIP/Regulated]
    B -->|No| D{Sentiment Trigger?}
    D -->|Yes| E[Escalate: Frustrated Customer]
    D -->|No| F[Generate Answer]
    F --> G{Confidence Check}
    G -->|Low| H[Escalate: Uncertain]
    G -->|High| I[Return Grounded Answer]
    C --> J[Human Specialist]
    E --> J
    H --> J
    style J fill:#ffebee,stroke:#b71c1c
    style I fill:#e8f5e9,stroke:#1b5e20
</div>

All three triggers operate in parallel. First one to fire causes escalation.

---

# The Flywheel Effect

More tickets → More resolutions → More KB articles → Better performance → Faster resolutions → More trust

**Formalize it:**
1. Agent resolves ticket successfully
2. Agent drafts a knowledge base article
3. Quality scoring filters low-value articles
4. Human review before promotion
5. Approved article enters the retrieval pool

> Each resolved ticket improves future performance.

---

# DevOps Safety Tiers

| Tier | Examples | Autonomy |
|------|----------|----------|
| **Read-only** | Query logs, check metrics, list pods | Auto-execute |
| **Reversible** | Scale replicas, toggle flags, restart | Execute with logging |
| **Irreversible** | Delete resources, DB schema changes | Human approval required |

**The blast-radius pattern from Module 12:** match autonomy to reversibility.

<!-- Speaker note: DevOps agents operate where errors have real consequences: downtime, data loss, revenue. -->

---

# Incident Response Agent Flow

<div class="mermaid">
sequenceDiagram
    participant M as Monitor
    participant A as Agent
    participant R as Runbook DB
    participant I as Infrastructure
    participant H as On-Call Engineer
    M->>A: Alert fired
    A->>A: Classify severity (P1-P4)
    A->>I: Gather logs, metrics
    A->>R: Match runbook
    A->>I: Execute safe remediation
    alt Resolved
        A->>A: Close incident
    else Persists
        A->>H: Escalate with full context
    end
</div>

<!-- Speaker note: Key value: reduces MTTR by automating routine steps and gathering context before escalation. -->

---

# Workflow Agents

**Different from research/coding agents:**

| Workflow Agent | Research Agent |
|----------------|----------------|
| Well-defined processes | Novel problems |
| Reliable execution | Creative solutions |
| Process completion rate | Solution quality |
| Rules break down → escalate | Wrong reasoning → iterate |

**Value proposition:** consistent, auditable execution of structured steps.

---

# Approval Chain Orchestration

<div class="mermaid">
flowchart TD
    Start[Request] --> Check{Amount?}
    Check -->|Under $1K| Auto[Auto-Approve]
    Check -->|$1K-$10K| Mgr[Manager]
    Check -->|Over $10K| VP[VP]
    Mgr --> MgrD{Approved?}
    MgrD -->|Yes| Process[Process]
    MgrD -->|No| Reject[Reject]
    MgrD -->|No response 48h| VP
    VP --> VPD{Approved?}
    VPD -->|Yes| Process
    VPD -->|No| Reject
    Auto --> Process
    style Process fill:#68d391,stroke:#2f855a
    style Reject fill:#fc8181,stroke:#c53030
</div>

**Segregation of duties:** requester ≠ approver, approver ≠ processor.

---

<!-- _class: section-divider -->
<!-- _header: '' -->
<!-- _footer: '' -->

# Part 4

## Governance, Risk, and Compliance

The unified GRC framework for enterprise agents.

---

# Three Identity Models

| Model | How It Works | Best For |
|-------|-------------|----------|
| **User-impersonation** | Agent inherits user's exact permissions | Data agents, knowledge agents |
| **Service account** | Agent has its own defined scope | Batch jobs, cross-team workflows |
| **Hybrid** | Base permissions + user-delegated access | Complex multi-role workflows |

> **Default to user-impersonation** unless the agent acts on behalf of the organization.

---

# Five-Tier Autonomy Framework

<div class="mermaid">
graph TD
    T1[Tier 1: Read-Only] --> G1[Basic audit]
    T2[Tier 2: Derived Analysis] --> G2[Output validation]
    T3[Tier 3: Recommended Action] --> G3[Human approval + rollback plan]
    T4[Tier 4: Write-Back] --> G4[Multi-level approval + full audit]
    T5[Tier 5: Structural Change] --> G5[Executive approval + DR plan]
    style T1 fill:#e8f5e9,stroke:#4caf50
    style T2 fill:#fff9c4,stroke:#fbc02d
    style T3 fill:#ffe0b2,stroke:#fb8c00
    style T4 fill:#ffccbc,stroke:#f4511e
    style T5 fill:#ffcdd2,stroke:#e53935
</div>

Each tier has escalating governance requirements. Start at Tier 1-2 in production.

---

# Agent Audit Logging

Five questions every audit log must answer:

1. **Who** requested the action?
2. **What** did the agent do? (tool calls, queries, modifications)
3. **Why** did it do it? (reasoning chain, decision rationale)
4. **What changed?** (before/after state for writes)
5. **When?** (timestamps for every action)

**Why agent audit is harder:** reasoning is probabilistic, tool calls may be exploratory, capturing "why" requires structured trace logs.

---

# PII Handling Framework

| Step | Action | Example |
|------|--------|---------|
| **1. Detection** | Identify PII in inputs and outputs | Names, SSN, email, health records |
| **2. Masking** | Redact or anonymize | `[REDACTED]`, `****1234`, tokenization |
| **3. Retention** | Policy-driven storage duration | Balance regulatory requirements vs operational needs |
| **4. Deletion** | Right to erasure (GDPR Art. 17) | Find and remove PII from all storage |

> Design for deletion from the start. Retrofitting is expensive.

---

# Regulatory Compliance Map

| Framework | Key Agent Implications |
|-----------|----------------------|
| **GDPR** | PII detection, masking, consent, right-to-deletion, cross-border limits |
| **HIPAA** | Minimum necessary PHI access, encryption, breach notification |
| **SOX** | Immutable audit trails, segregation of duties, 7-year retention |
| **PCI-DSS** | Cardholder data encryption, access monitoring |
| **FERPA** | Student record privacy, consent for disclosure |
| **FINRA** | Communications archiving, supervisory review, 6-year retention |

<!-- Speaker note: Retention periods and notification timelines should be verified against current regulatory text. -->

---

# Policy Engine Architecture

<div class="mermaid">
graph LR
    User[Request] --> Harness[Agent Harness]
    Harness --> PE[Policy Engine]
    PE --> Pre{Pre-Action Check}
    Pre -->|Allowed| Tool[Execute Tool]
    Pre -->|Denied| Block[Block + Log]
    Tool --> Post{Post-Action Validation}
    Post -->|Valid| Audit[Audit Log]
    Post -->|Violation| Roll[Rollback + Alert]
    Audit --> Resp[Response]
    PE -.-> Rules[(Policy Rules DB)]
    style PE fill:#bbdefb,stroke:#1976d2
    style Block fill:#ffcdd2,stroke:#e53935
    style Roll fill:#ffcdd2,stroke:#e53935
</div>

Pre-action prevents violations. Post-action catches what slipped through.

---

# Compliance Scoring

| Metric | Target | How to Measure |
|--------|--------|---------------|
| Policy violation rate | < 0.1% | Sample 1,000 actions monthly |
| PII exposure rate | 0 | Scan all responses with NER |
| Audit completeness | 100% | Check all actions have full trails |
| Escalation accuracy | > 95% | Review escalation and non-escalation decisions |

> Compliance scoring is continuous, not a one-time certification.

---

<!-- _class: section-divider -->
<!-- _header: '' -->
<!-- _footer: '' -->

# Part 5

## Enterprise Adoption

Staged rollout, evaluation, and ROI.

---

# Staged Rollout

<div class="mermaid">
graph TB
    S1["Shadow Mode<br/>5 users, compare outputs"] -->|"90%+ match<br/>0 violations"| S2["Pilot with HITL<br/>20 users, approve every action"]
    S2 -->|"85%+ approval<br/>500+ tasks"| S3["Staged Rollout<br/>100 users, high-risk gates only"]
    S3 -->|"95% completion<br/>0 incidents"| S4["Full Deployment<br/>All users, policy-based"]
    S4 -.->|Regression| S3
    S3 -.->|Safety incident| S2
    style S1 fill:#e2e8f0,stroke:#475569
    style S2 fill:#dbeafe,stroke:#1e40af
    style S3 fill:#d1fae5,stroke:#065f46
    style S4 fill:#dcfce7,stroke:#166534,stroke-width:3px
</div>

**Rollback paths exist.** Regression → reduce scope. Safety incident → increase oversight.

---

# ROI Framework

**What to measure:**

- **Time saved** — `(hours_before − hours_after) × tasks/month × hourly_cost`
- **Error reduction** — error rate delta × cost per error
- **Throughput** — tasks/day before vs after
- **Quality** — consistency, compliance, user satisfaction

**How to prove value:**

1. Measure baseline without agent
2. Run controlled pilot with clear exit criteria
3. Compare same metrics during pilot
4. Calculate lift: `(pilot − baseline) / baseline`
5. Project annual value

> Stakeholders trust pilot data from their own systems more than industry benchmarks.

---

# Evaluation Harness

The Lab (Lesson 07) builds an evaluation harness that checks:

| Check | What It Tests |
|-------|--------------|
| **Query correctness** | Did the agent access the right tables? |
| **Permission compliance** | Did it stay within boundaries? |
| **PII compliance** | Did it avoid exposing PII? |
| **Evidence completeness** | Did it log all required audit data? |
| **Regression detection** | Score dropped > 5% from baseline? |

Run in CI/CD before deploying agent updates.

---

<!-- _class: section-divider -->
<!-- _header: '' -->
<!-- _footer: '' -->

# Key Takeaways

---

# What Makes an Agent Enterprise-Ready?

1. **Governance** — Clear identity, permissions, and audit trails
2. **Safety** — Enforced boundaries that prevent dangerous actions
3. **Quality** — Evaluation that proves correctness and detects regressions
4. **Trust** — Transparent reasoning with evidence trails
5. **Adoption** — Staged rollout that proves value before scaling

> Enterprise deployment is not about building a different kind of agent. It's about wrapping agent patterns in governance, evaluation, and rollout processes.

---

# Module 14 at a Glance

| Lesson | Key Concept |
|--------|-------------|
| 01 Enterprise Landscape | Five enterprise differences, maturity model |
| 02 Data Agents | Semantic layer, autonomy tiers, 38% benchmark |
| 03 Knowledge/Support | Source grounding, escalation, flywheel |
| 04 DevOps | Safety tiers (read-only/reversible/irreversible) |
| 05 Workflow | Approval chains, segregation of duties |
| 06 GRC | Identity models, audit, PII, regulatory compliance |
| 07 Adoption Lab | End-to-end design, evaluation harness, rollout |

---

<!-- _class: lead -->
<!-- _paginate: false -->
<!-- _header: '' -->
<!-- _footer: '' -->

# Questions?

Module 14: Enterprise Agent Applications

**Lab exercise:** Pick a vertical, design tool definitions, governance model, evaluation harness, and rollout plan.
