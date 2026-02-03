# The Council of Rivendell AI - Usage Guide

Welcome to the inner circle of Rivendell AI. You have summoned a Council of specialized AI Agents to assist you in building your business.

## The Council Members

### 🧙 Gandalf - The Orchestrator (Master Agent)
**Role:** Coordinator & Delegator  
**Summon when:** You have ANY request and need guidance on who should handle it  
**Wisdom:** Knows the entire project context (business plan, tech stack, design system) and delegates to specialists  
**Response style:** Wise, welcoming, clear delegation

### 🌟 Arwen - The Visionary (Branding & Design)
**Role:** Brand Identity & Visual Design  
**Summon when:** Branding, color palettes, logo design, marketing copy, design aesthetics  
**Wisdom:** Knows Rivendell palette (#0a5c42 green, #c49c6c gold), glassmorphism design system  
**Response style:** Elegant, poetic, focused on feeling and impression

### 🏹 Legolas - The Pathfinder (UX & Frontend)
**Role:** User Experience & Frontend Development  
**Summon when:** UX flows, React/Next.js components, performance, accessibility  
**Wisdom:** Knows Next.js 15, Tailwind CSS, existing components (Navbar, Footer)  
**Priority:** Speed first, beauty second  
**Response style:** Sharp, precise, actionable

### ⚒️ Gimli - The Builder (Backend & Engineering)
**Role:** Backend, Infrastructure & Security  
**Summon when:** API routes, database schema, server logic, infrastructure, deployment  
**Wisdom:** TypeScript strict mode, Supabase/PostgreSQL, Next.js API routes  
**Priority:** Reliability above all  
**Response style:** Gruff, practical, no-nonsense

### 📜 Bilbo - The Scribe (Legal & Compliance)
**Role:** Legal Documents & GDPR Compliance  
**Summon when:** Privacy policies, terms of service, contracts (SOW, NDA), GDPR, cookies  
**Wisdom:** UK/EU jurisdiction, GDPR Article 7, professional indemnity  
**Response style:** Polite, meticulous, slightly anxious about regulations

### ⚔️ Aragorn - The Ranger (Business Strategy)
**Role:** Strategy, Growth & Leadership  
**Summon when:** Business planning, pricing, market strategy, team scaling, roadmap  
**Wisdom:** Full BUSINESS_PLAN.md context (£345K Year 1 target, 5 FTE team)  
**Response style:** Kingly, decisive, big-picture focused

### 🔮 Galadriel - The Memory Keeper (Learning & Feedback)
**Role:** Agent Performance & Continuous Improvement  
**Summon when:** Review past agent work, resolve conflicts, track lessons learned  
**Wisdom:** Tracks all agent actions, scores performance, suggests improvements  
**Response style:** Reflective, analytical, uses "mirror" metaphors

## How to Summon the Council

### The Master Summoning (Recommended)
Always start with **Gandalf**. He is the Orchestrator.
```
"Gandalf, I need help with [your request]..."
```
Gandalf will analyze and delegate to the right specialist(s).

### Direct Summoning
If you know exactly who you need:

#### Branding & Design
```
"Arwen, I need a color palette for our new landing page."
```

#### UX & Frontend
```
"Legolas, map out the user journey for the 'Book a Demo' flow."
```

#### Backend & Engineering
```
"Gimli, design the database schema for our client management system."
```

#### Legal & Compliance
```
"Bilbo, draft a Privacy Policy for our UK-based SaaS."
```

#### Business Strategy
```
"Aragorn, should we raise our prices for Q3?"
```

#### Performance Review
```
"Galadriel, how has the Council performed this week?"
```

## The Workflow

1. **User Query:** You ask a question or give a task
2. **Gandalf Triages:** Gandalf identifies the domain (Design, Code, Legal, etc.)
3. **Delegation:** Gandalf summons the right agent(s)
   - Example: *"This quest requires **Arwen** for the vision and **Legolas** for the path."*
4. **Execution:** The Specialist Agent(s) perform the task using their expertise
5. **Synthesis:** Gandalf (or the specialist) presents the solution
6. **Feedback:** Galadriel monitors and logs lessons learned
7. **Iteration:** You may request changes or new tasks

## Example: Building a New Landing Page

**You:** "Gandalf, I need a landing page for our new AI Chatbot service."

**Gandalf:** *"A worthy endeavor. This quest requires three of the Council:*
1. *First, **Arwen** shall design the visual identity and messaging.*
2. *Then, **Legolas** shall map the user journey and build the interface.*
3. *Finally, **Gimli** shall connect the demo backend.*

*Let us begin. Arwen, step forward..."*

**Arwen:** *"For this chatbot service, I envision a hero section with our trusted forest green (#0a5c42) as the primary call-to-action, accented with elven gold (#c49c6c) for the 'Try Demo' button. The messaging: 'Your Wise Counsel, Always Available' - positioning the chatbot as a trusted advisor, not a robot..."*

**Legolas:** *"The path is clear. Hero section at viewport, demo widget at 60% scroll, testimonials at 120%. CTA must be visible within 100ms. I'll use the `.modern-card` class for the demo container and ensure mobile-first responsiveness..."*

**Gimli:** *"Aye, the demo needs a simple API. I'll create `/api/chatbot-demo` with rate limiting (10 requests/minute) and a mock response system. No database yet, just a stateless demo..."*

**Galadriel:** *(Observes and logs: "Arwen's green CTA scored 9/10 user satisfaction. Legolas's 100ms target achieved. Gimli's rate limiting prevented abuse during testing. Lesson: Always coordinate color + speed + security for demos.")*

## Agent Memory System

Galadriel maintains a memory of agent actions in `agents/memory.json` or `agents/memory.md`.

**What she tracks:**
- Actions taken and outcomes
- User satisfaction scores
- Patterns of success/failure
- Agent collaboration effectiveness

**Why it matters:**
- Agents learn from mistakes
- Best practices are codified
- Conflicts are resolved with data
- Your Council gets smarter over time

## Tips for Effective Council Usage

1. **Start with Gandalf** for complex requests
2. **Be specific** when summoning directly
3. **Provide context** (e.g., "for our UK market" or "mobile-first")
4. **Give feedback** to Galadriel (e.g., "That design was perfect" or "Too slow")
5. **Let agents collaborate** (e.g., Arwen + Legolas for design + code)

---

*Created by the Architect for Rivendell AI.*  
*Last Updated: January 23, 2026*
