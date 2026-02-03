# Rivendell AI Agent Architecture

> This file defines the 3-layer architecture that all Council agents follow.

## The 3-Layer Architecture

**Layer 1: Directive (What to do)**
- Markdown instructions in each agent file defining goals, inputs, tools, outputs, and edge cases
- Natural language SOPs that define the "what" and "why"
- Living documents that evolve with learnings

**Layer 2: Orchestration (Decision making)**
- The AI agent's job: intelligent routing and decision-making
- Read directives, call execution tools in the right order, handle errors
- Ask for clarification when needed, update directives with learnings
- Glue between intent and execution

**Layer 3: Execution (Doing the work)**
- Deterministic code/tools (when available)
- For web dev: Next.js commands, Tailwind classes, existing components
- For design: Figma plugins, design tokens, CSS classes
- Reliable, testable, predictable outputs

## Why This Works

LLMs are probabilistic. Business logic should be deterministic. This architecture separates the two:
- **90% accuracy per step = 59% success over 5 steps** (all AI)
- **95% accuracy per step + deterministic execution = ~95% success** (hybrid approach)

**Solution:** Push complexity into deterministic patterns (CSS classes, reusable components, documented processes). The AI focuses on decision-making and routing.

## Operating Principles

### 1. Check for Tools First
Before creating new patterns, check existing:
- **Design:** Existing CSS classes in `CSS_REFERENCE.md`
- **Frontend:** Existing components in `src/components/`
- **Backend:** Existing API patterns
- **Legal:** Existing contract templates

Only create new patterns if none exist or if they don't fit the use case.

### 2. Self-Anneal When Things Break
- Read error message and understand root cause
- Fix the pattern/component/directive
- Test the fix (unless it uses paid APIs—check with user first)
- Update the agent directive with what you learned
- **Example:** Hit a performance issue → Research Next.js optimization → Update pattern → Test → Document in directive

### 3. Update Directives as You Learn
Directives are living documents. When you discover:
- API constraints or limits
- Better approaches or patterns
- Common errors or pitfalls
- Timing expectations or dependencies

**Update the agent file** with this knowledge. But never overwrite core directives without asking.

## Self-Annealing Loop

Errors are learning opportunities:
1. **Identify** the error
2. **Fix** the root cause (code, pattern, or process)
3. **Test** the fix
4. **Document** the learning in the agent directive
5. **System is now stronger**

## File Organization

### Deliverables vs Intermediates

**Deliverables (What users see):**
- Deployed Next.js site (Vercel)
- Google Sheets/Docs (business plans, tracking)
- Design files (Figma, brand assets)
- Git repository (code)

**Intermediates (Processing artifacts):**
- `.next/` build cache
- `node_modules/` dependencies
- `.tmp/` temporary processing files
- Local markdown notes

### Directory Structure

```
Rivendell-ai-next/
├── agents/              # Agent configurations (Layer 1 directives)
│   ├── Gandalf.md
│   ├── Arwen.md
│   └── ...
├── src/
│   ├── app/            # Next.js pages
│   ├── components/     # Reusable components (Layer 3 execution)
│   └── lib/            # Utility functions
├── directives/         # (Optional) Additional SOPs
├── .env                # Environment variables
└── BUSINESS_PLAN.md    # Business context
```

### Key Principle
- **Local files** are for development/processing
- **Deliverables** live in deployed environments or cloud
- Everything in `.next/` and `node_modules/` can be regenerated

## Agent Workflow

Each agent follows this pattern:

1. **Receive Request** (from Gandalf or user)
2. **Check Directive** (what are my instructions for this?)
3. **Check Existing Tools** (do we have components/patterns for this?)
4. **Execute** (use existing patterns or create new ones)
5. **Validate** (test the output)
6. **Learn** (if errors occurred, update directive)
7. **Deliver** (present the solution)

## Summary

The Council sits between human intent (directives) and deterministic execution (code/patterns). Each agent:
- **Reads** instructions from their directive
- **Makes** decisions about approach
- **Uses** existing tools/patterns where possible
- **Handles** errors through self-annealing
- **Improves** the system continuously

**Be pragmatic. Be reliable. Self-anneal.**
