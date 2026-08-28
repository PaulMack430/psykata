# Claude Technical Advisor for Startups

A multi-turn AI advisor that helps startup founders choose the right Claude architecture for their use case — and shows exactly why.

Built by [Paul Maclean](https://github.com/PaulMack430) as part of a suite of tools for making AI infrastructure decisions concrete and fast.

---

## What It Does

Founders describe their problem in plain language. The advisor returns a specific architecture recommendation with working code, cost estimate, and tradeoff analysis — grounded in a curated knowledge base of real Claude patterns.

**Example inputs that work well:**

- *"We're building a chatbot for customer support. 1K tickets/day. Budget is tight."*
- *"We need real-time search over documents. Latency under 100ms."*
- *"We're running batch analytics on historical data. Speed doesn't matter."*
- *"We want to build an AI code reviewer that posts GitHub comments."*

The advisor asks follow-up questions, refines its recommendation across turns, and surfaces concrete code examples — not generic advice.

---

## Claude Patterns This Demonstrates

This is a working implementation of the patterns that matter most when building production Claude applications:

**RAG (Knowledge Base)** — Structured `knowledge_base.json` covers streaming, caching, batch processing, tool use, structured output, cost optimization, and startup-specific patterns. Claude cites specific patterns by name when it recommends them.

**Prompt Caching** — The knowledge base loads once and is cached with `cache_control: {type: 'ephemeral'}`. On the first query you'll see `cache_creation_input_tokens` in the response; on subsequent queries those tokens are served from cache at ~10% of the original cost.

**Tool Use** — Claude calls `fetch_code_example` to pull working snippets for the recommended pattern. The tool call is visible in the flow, making it easy to extend with additional tools.

**Streaming** — Responses render token-by-token using SSE. The advisor feels responsive even when generating detailed recommendations.

**Structured Output** — Returns JSON with `recommendation`, `pattern`, `code_example`, and `cost_estimate` fields. Predictable output makes it easy to build on top of.

**Multi-turn Conversation** — Follow-up questions refine the recommendation. The advisor maintains context across turns without re-sending the knowledge base.

---

## Quick Start

```bash
pip install anthropic
export ANTHROPIC_API_KEY="sk-ant-..."
```

**Interactive mode** (multi-turn conversation):
```bash
python advisor.py
```

**Single demo query** (shows the full flow in one shot):
```bash
python advisor.py --demo
```

The demo mode runs a customer support scenario and prints the full JSON recommendation — useful for seeing the output structure before going interactive.

---

## How It Works

```
User describes their problem
        ↓
Advisor reads cached knowledge base
        ↓
Advisor recommends a specific Claude pattern
        ↓
Advisor calls fetch_code_example tool
        ↓
Returns JSON: recommendation + code + cost estimate
        ↓
User asks follow-up → advisor refines
```

The knowledge base (`knowledge_base.json`) is the source of truth. The advisor doesn't hallucinate patterns — it cites what's in the KB and tells you when a scenario falls outside it.

---

## Extending It

### Add your own patterns

Edit `knowledge_base.json` to add patterns from your own production systems. The advisor will cite them the same way it cites the built-in ones. The more specific the pattern (real latency numbers, real cost figures, real failure modes), the more useful the recommendation.

### Add more tools

```python
def get_available_tools():
    return [
        fetch_code_example,      # Already implemented
        estimate_costs,          # Calculate real pricing for their scale
        check_model_fit,         # Haiku vs Sonnet vs Opus for this use case
        find_similar_pattern,    # Surface related patterns from the KB
    ]
```

### Deploy it

Wrap `advisor.py` in a FastAPI endpoint and you have a live API. The frontend folder has a React + Vite interface ready to connect to it.

---

## Part of a Larger Suite

This advisor is one of four tools built around the same problem: founders make bad AI architecture decisions because the real costs and tradeoffs aren't visible upfront.

| Tool | What it does |
|---|---|
| **Technical Advisor** (this repo) | Multi-turn conversation — ask anything about Claude patterns |
| [**Claude vs The Field**](https://github.com/PaulMack430/claude-vs-llama-comparison) | Side-by-side TCO comparison across 7 models with hallucination rate data |
| **AI Cost Calculator** | Input your traffic and use case — get architecture + monthly cost breakdown |
| **AI Path Forward** | Situational roadmap — phased plan based on where you are and where you're going |

---

## Stack

- **Backend:** Python + Anthropic SDK (`claude-sonnet-4-6`)
- **Frontend:** React + Vite
- **Patterns:** RAG, prompt caching, tool use, streaming, structured output, multi-turn
