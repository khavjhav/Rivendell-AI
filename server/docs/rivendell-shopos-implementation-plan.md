# Rivendell ShopOS — Full-Stack Implementation Plan

**Version:** 1.0
**Date:** February 2026
**Author:** Rivendell AI Engineering
**Status:** Ready for Execution

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Phase 0 — Foundation (Weeks 1–2)](#2-phase-0--foundation-weeks-12)
3. [Phase 1 — Core POS & Inventory (Weeks 3–6)](#3-phase-1--core-pos--inventory-weeks-36)
4. [Phase 2 — Buy-Back & IMEI (Weeks 7–10)](#4-phase-2--buy-back--imei-weeks-710)
5. [Phase 3 — CRM & Repair Management (Weeks 11–14)](#5-phase-3--crm--repair-management-weeks-1114)
6. [Phase 4 — Reporting & AI Assistant (Weeks 15–18)](#6-phase-4--reporting--ai-assistant-weeks-1518)
7. [Phase 5 — Multi-Shop & Advanced (Weeks 19–22)](#7-phase-5--multi-shop--advanced-weeks-1922)
8. [Phase 6 — Compliance & Launch (Weeks 23–26)](#8-phase-6--compliance--launch-weeks-2326)
9. [Post-Launch Roadmap](#9-post-launch-roadmap)
10. [CI/CD Pipeline Design](#10-cicd-pipeline-design)
11. [Testing Strategy](#11-testing-strategy)
12. [Environment Strategy](#12-environment-strategy)
13. [Team Structure](#13-team-structure)
14. [Risk Register](#14-risk-register)
15. [Infrastructure Budget](#15-infrastructure-budget)
16. [Sprint Calendar](#16-sprint-calendar)

---

## 1. Project Overview

### Product Vision

Rivendell ShopOS is the UK's first all-in-one operating system for independent phone shops — combining POS, buy-back with IMEI verification, repair Kanban, inventory, CRM, and AI-powered reporting in a single HMRC-compliant platform.

### Key Success Metrics

| Metric | 6-Month Target | 12-Month Target |
|--------|----------------|-----------------|
| Active paying tenants | 50 | 200 |
| MRR | £4,000 | £16,000 |
| System uptime | 99.9% | 99.9% |
| NPS score | > 50 | > 60 |
| Monthly churn | < 5% | < 3% |
| Sale processing time | < 30 sec | < 20 sec |
| IMEI check rate | 100% of buy-backs | 100% |

### Timeline Overview

```
Week 1-2:   Phase 0 — Foundation (monorepo, DB, auth, CI/CD)
Week 3-6:   Phase 1 — Core POS & Inventory
Week 7-10:  Phase 2 — Buy-Back & IMEI
Week 11-14: Phase 3 — CRM & Repair Management
Week 15-18: Phase 4 — Reporting & AI Assistant
Week 19-22: Phase 5 — Multi-Shop & Advanced Features
Week 23-26: Phase 6 — Compliance, Beta, & Launch
            → Public Launch
Month 7-12: Phase 7 — Post-Launch Features
Year 2+:    Phase 8 — Advanced AI & Marketplace
```

---

## 2. Phase 0 — Foundation (Weeks 1–2)

### Goal
Establish the complete technical foundation — monorepo, database, authentication, CI/CD, and design system — so every subsequent phase can build without rework.

### Sprint 1 (Week 1): Infrastructure & Monorepo

**Tasks:**

- [ ] Initialise pnpm monorepo with workspaces (`apps/web`, `apps/api`, `packages/db`, `packages/shared`, `packages/config`)
- [ ] Configure Turborepo for parallel builds and caching
- [ ] Set up `packages/config`: shared ESLint, Prettier, TypeScript base configs, Tailwind base config
- [ ] Scaffold `apps/web` — Next.js 15 with App Router, TypeScript, TailwindCSS, shadcn/ui
- [ ] Scaffold `apps/api` — Express.js with TypeScript, ts-node-dev for hot reload
- [ ] Set up Docker Compose for local PostgreSQL and Redis
- [ ] Configure Neon PostgreSQL project (production + dev branches)
- [ ] Configure Upstash Redis project
- [ ] Set up Cloudflare R2 bucket with appropriate CORS and lifecycle policies
- [ ] Create `.env.example` with all required environment variables documented
- [ ] Set up GitHub repository with branch protection rules on `main`
- [ ] Configure GitHub Actions CI: lint → type-check → build (runs on every push)
- [ ] Set up Vercel project linked to GitHub (auto-deploys `main` to production, PRs to preview)
- [ ] Set up Railway project for Express API (production + staging services)

**Acceptance criteria:**
- `pnpm dev` starts both Next.js (port 3000) and Express (port 4000)
- GitHub Actions CI passes on the initial commit
- Vercel shows a working preview deployment
- Railway shows a running API health check (`GET /health → 200 OK`)

### Sprint 2 (Week 2): Database, Auth & Design System

**Tasks:**

- [ ] Design and implement complete Drizzle ORM schema (`packages/db/src/schema/`) — all 16 tables
- [ ] Run `drizzle-kit generate` and test first migration
- [ ] Create database seeder with demo tenant, shop, owner user, sample products, and sales
- [ ] Implement Auth.js (NextAuth v5) with Credentials provider (email/password) and Resend magic link
- [ ] Implement JWT generation in Express API (`/api/v1/auth/login`, `/api/v1/auth/refresh`)
- [ ] Implement `authenticate` and `authorize` middleware in Express
- [ ] Implement `validate` middleware using Zod schemas from `packages/shared`
- [ ] Implement Redis-backed rate limiting middleware
- [ ] Implement audit logging middleware
- [ ] Set up shadcn/ui component library in `apps/web`: Button, Card, Table, Form, Dialog, Input, Select, Badge, Toast, Sidebar, Sheet, Dropdown
- [ ] Implement dashboard shell layout (sidebar + topbar) with active nav state
- [ ] Implement login page with email/password form and magic link option
- [ ] Implement route protection in Next.js middleware (redirect to login if unauthenticated)
- [ ] Set up Sentry for error tracking in both Next.js and Express
- [ ] Configure BetterStack uptime monitoring

**Acceptance criteria:**
- Full database schema deployed to Neon dev branch
- Owner can log in, sees dashboard shell with sidebar navigation
- JWT auth works end-to-end (login → token → protected API call)
- Demo seed data loads without errors
- Sentry captures a test error from both apps

---

## 3. Phase 1 — Core POS & Inventory (Weeks 3–6)

### Goal
Ship the core point-of-sale and inventory management system — the daily workflow for every shop.

### Sprint 3 (Week 3-4): Inventory Management

**Tasks:**

- [ ] Product CRUD API (`/api/v1/products`) with Zod validation and RBAC
- [ ] Stock movement recording (auto-triggered on all quantity changes)
- [ ] Product list page with DataTable (sortable, filterable by category/brand/status)
- [ ] Product detail/edit form with attribute system (flexible key-value for accessories)
- [ ] Product creation wizard (category selection → attributes → pricing → barcode)
- [ ] Barcode generation using `bwip-js` (Code 128) — server-side rendering to PNG
- [ ] Barcode label preview and print function (thermal printer compatible)
- [ ] Batch barcode printing UI (select multiple products, generate print sheet)
- [ ] Product search by name, SKU, barcode, IMEI (full-text search + indexed)
- [ ] Low stock threshold configuration per product
- [ ] Low stock report page
- [ ] Stock movement history for each product
- [ ] Manual stock adjustment form (reason code + manager approval workflow)
- [ ] Inventory valuation report (total cost value + total retail value of current stock)

**Acceptance criteria:**
- Manager can create, edit, and deactivate products across all categories
- Products auto-decrement when stock adjustments are saved
- Barcode labels generate and print correctly for a sample product
- Search returns results in < 500ms for a catalogue of 500 products
- Low stock alert appears on dashboard when a product hits threshold

### Sprint 4 (Week 5-6): Point of Sale

**Tasks:**

- [ ] POS page layout (product search + cart + payment panel)
- [ ] Product lookup by barcode scan (USB scanner → keydown event) and name search
- [ ] Cart management: add, remove, change quantity, inline price edit (manager)
- [ ] Discount application: percentage or fixed amount; >20% requires manager approval (PIN or role check)
- [ ] VAT calculation: auto-calculate at 0%, 5%, or 20% per product
- [ ] Payment panel: cash entry (change calculator), card button (SumUp/Zettle stub), mixed payment
- [ ] Receipt number generation (sequential per shop: `REC-{YEAR}-{SHOP}-{SEQ}`)
- [ ] Receipt PDF generation using React PDF or Puppeteer (shop logo, itemised, VAT breakdown)
- [ ] Receipt email delivery via Resend (auto-send if customer linked)
- [ ] Customer quick-link in POS (search by phone/name, or create new)
- [ ] Sale records stored with full audit trail (employee, timestamp, items, payment split)
- [ ] Daily cash reconciliation report (opening balance → sales → closing → variance)
- [ ] Sales history list with receipt download
- [ ] Refund flow: select sale, select items, reason code, manager approval, stock reinstatement
- [ ] POS keyboard shortcuts (Enter to add to cart, Tab to payment, F1 for new sale)

**Acceptance criteria:**
- Operator can complete a full sale from product scan to receipt email in under 30 seconds
- Cash change is calculated correctly for all payment scenarios
- Refund correctly restocks the returned product(s)
- Receipt PDF matches shop branding and includes full VAT breakdown
- Daily cash reconciliation shows expected vs actual to the penny

---

## 4. Phase 2 — Buy-Back & IMEI (Weeks 7–10)

### Goal
Deliver the flagship differentiator — a complete, IMEI-verified buy-back system with customer-facing form and margin tracking.

### Sprint 5 (Week 7-8): Customer Buy-Back Form & IMEI Integration

**Tasks:**

- [ ] CheckMEND API integration service (`imei.service.ts`) — check blacklist, finance, FRP, carrier lock
- [ ] IMEI check result caching in Redis (24-hour TTL to avoid duplicate API calls)
- [ ] IMEI check result storage in `imei_checks` table (permanent audit record)
- [ ] Auto-decisioning logic: auto-reject if blacklisted or financed; flag if locked
- [ ] Due diligence certificate generation (PDF with IMEI, timestamp, result, shop details)
- [ ] Public buy-back form — Next.js SSR page at `/buy-back/[shopSlug]`
  - Step 1: Personal details (name, phone OTP verification, email, address with postcode lookup)
  - Step 2: ID upload (type selection, camera/file upload, GDPR consent)
  - Step 3: Device details (brand/model dropdowns, IMEI entry + format validation)
  - Step 4: Condition assessment (grade selection with photo guide, accessories, known issues)
  - Step 5: Payment preference (cash or bank transfer)
  - Step 6: Confirmation screen with submission summary
- [ ] Royal Mail PAF / Ideal Postcodes integration for address autocomplete
- [ ] Twilio OTP: send SMS on phone number entry, verify before form progression
- [ ] ID image upload to Cloudflare R2 (encrypted at rest, GDPR retention metadata set)
- [ ] Auto-IMEI check on submission with status update
- [ ] Email confirmation to customer on submission
- [ ] Shop dashboard notification (toast + WebSocket event) on new buy-back submission

**Acceptance criteria:**
- Customer can complete the full buy-back form on mobile in under 5 minutes
- IMEI is checked against CheckMEND within 30 seconds of submission
- Blacklisted devices are auto-rejected with customer email notification
- ID images stored encrypted in R2 with 2-year deletion metadata
- Shop receives real-time dashboard notification on new submission

### Sprint 6 (Week 9-10): Buy-Back Processing & Margin Tracking

**Tasks:**

- [ ] Buy-back management dashboard (list view with status filters and search)
- [ ] Buy-back detail page (full submission, IMEI result, ID image viewer with audit log)
- [ ] In-store buy-back flow (staff version — same data, faster entry with IMEI scan)
- [ ] Approval/rejection workflow with reason codes
- [ ] Pricing engine: pricing matrix by brand/model/condition/storage (manager configurable)
- [ ] AI price suggestion (simple formula-based suggestion in Phase 2, Claude-powered in Phase 4)
- [ ] Payment recording: cash payment or bank transfer reference
- [ ] Auto-create product listing when buy-back status moves to "purchased"
- [ ] Margin calculator: buying price, repair cost, selling price → profit and margin %
- [ ] Inter-shop transfer workflow (initiate → confirm at destination → stock adjusts)
- [ ] Device ageing tracker: timestamp when listed, calculate days in stock
- [ ] Ageing alerts: 30/60/90-day thresholds with dashboard flags and notifications
- [ ] Buy-back investment report (monthly spend, devices bought, avg cost, avg days to sell)
- [ ] ROI report (total investment vs total revenue, by brand breakdown)
- [ ] Due diligence certificate download from buy-back detail page

**Acceptance criteria:**
- Manager can process a buy-back from approval to stock listing in under 3 minutes
- Margin is calculated correctly and displayed per device and in aggregate
- Device ageing alerts appear on dashboard for devices over threshold
- Investment report shows accurate totals aligned to UK tax year
- Inter-shop transfer correctly adjusts stock at both locations with audit trail

---

## 5. Phase 3 — CRM & Repair Management (Weeks 11–14)

### Goal
Deliver the customer relationship module and Kanban repair tracking — solving the paper ticket problem and automating customer communication.

### Sprint 7 (Week 11-12): CRM & Customer Management

**Tasks:**

- [ ] Customer database CRUD API with Zod validation
- [ ] Customer search: by name, phone, email, IMEI (full-text + indexed)
- [ ] Customer list page with DataTable (search, sort, tag filters)
- [ ] Customer profile page: contact details, tags, notes, GDPR consent status
- [ ] Customer timeline: chronological list of all sales, repairs, buy-backs
- [ ] Lifetime value calculation (total spend across all transactions)
- [ ] Customer quick-create from POS and repair intake (name + phone minimum)
- [ ] Auto-link customer to buy-back records via phone/email match
- [ ] GDPR Subject Access Request (SAR) workflow — export all customer data as JSON
- [ ] GDPR right to erasure — delete with legal retention exceptions (7-year HMRC data kept)
- [ ] Customer receipt history (all receipts downloadable from customer profile)
- [ ] Customer tagging system: VIP, Trade, Wholesale, Problematic (manager+)
- [ ] Customer import from CSV (for shops migrating from spreadsheets)
- [ ] Customer notes (staff-only, never visible to customer)
- [ ] Customer merge (combine duplicate records)

**Acceptance criteria:**
- Staff can find any customer in under 3 seconds by phone number
- Customer profile shows complete interaction timeline with linked records
- SAR export generates a complete JSON file of all customer data within 5 seconds
- Erasure workflow correctly removes personal data while keeping anonymised sales records

### Sprint 8 (Week 13-14): Repair Kanban Board

**Tasks:**

- [ ] Repair job creation form: customer link, device details, problem description, pricing, estimated completion
- [ ] Encrypted PIN storage (AES-256 encrypt on save, decrypt only on explicit view with audit log)
- [ ] Device photo capture at intake (camera API or file upload → R2 storage)
- [ ] Kanban board page with 7 status columns (Received → Diagnosing → Awaiting Parts → Repairing → Testing → Ready → Collected)
- [ ] Drag-and-drop status transitions using `@dnd-kit/core` (accessible, keyboard-navigable)
- [ ] Repair card: ticket number, device, issue summary, customer name, days in shop, status colour coding
- [ ] Repair detail modal/page: full details, photos, PIN access, status history, parts used, payment
- [ ] Status history log (who changed to what and when)
- [ ] Technician assignment per repair job
- [ ] Parts used recording: link to inventory product, quantity, auto-decrement stock
- [ ] Colour coding: green (on time), amber (>80% of estimated time), red (overdue)
- [ ] Filter Kanban by: technician, device type, days in shop, overdue
- [ ] Collection flow: confirm collection, record final payment method
- [ ] Automated SMS/email notifications on status changes (Twilio + Resend)
- [ ] 48-hour post-collection satisfaction check email
- [ ] 14-day uncollected device reminder SMS
- [ ] Repair reports: jobs by status, average turnaround time, revenue by repair type, technician performance

**Acceptance criteria:**
- Technician can drag a repair card between columns with immediate status update and customer notification
- Customer receives SMS within 2 minutes of status change
- Device PIN is only accessible to assigned technician and is audit logged
- Repair parts correctly decrement from inventory stock
- Kanban board loads 100 active repairs without performance degradation

---

## 6. Phase 4 — Reporting & AI Assistant (Weeks 15–18)

### Goal
Deliver the reporting engine with UK tax year alignment and the AI natural language assistant — the key commercial differentiators.

### Sprint 9 (Week 15-16): Reporting Engine

**Tasks:**

- [ ] UK tax year utility functions (`packages/shared/src/constants/tax.ts`):
  - `getTaxYear(date)` → `{ start: Date, end: Date, label: string }`
  - `getTaxQuarter(date)` → quarter number and date range
  - `isInTaxYear(date, year)` → boolean
- [ ] Dashboard KPI cards: today's sales, today's transactions, active repairs, low stock count, pending buy-backs, cash vs card split
- [ ] Sales overview chart (daily bars for last 30 days, line for trend)
- [ ] Daily sales report: total, cash, card, transaction count, avg sale value, VAT
- [ ] Weekly report: revenue, units sold, top 10 products, employee performance
- [ ] Monthly report: full breakdown by category, comparison to previous month and same month last year
- [ ] Quarterly report: aligned to UK tax quarters with year-over-year comparison
- [ ] Annual tax-year report (April 6 – April 5): full summary for accountant
- [ ] VAT report: sales by VAT rate, output VAT, ready for HMRC return
- [ ] Employee performance report: sales vs target, commission calculation, leaderboard
- [ ] Inventory valuation report: stock by category with cost and retail value
- [ ] Slow-moving stock report: products with no sales in 30/60/90 days
- [ ] Buy-back ageing report: devices by age bucket with unrealised value
- [ ] Export all reports as PDF or XLSX
- [ ] Scheduled email reports (daily digest, weekly summary) via cron + Resend

**Acceptance criteria:**
- All reports default to UK tax year (April 6 – April 5) with calendar year as secondary option
- Report data is accurate to the penny when tested against seed data
- PDF exports include shop branding and are professionally formatted
- Monthly report loads in under 3 seconds for a full year of data
- Employee commission calculation matches manual calculation across all tier scenarios

### Sprint 10 (Week 17-18): AI Assistant

**Tasks:**

- [ ] Claude API integration service (`ai.service.ts`) with tool use / function calling
- [ ] Define AI tools (function definitions for Claude):
  - `get_sales_report({ from, to, shopId, breakdown })`
  - `get_inventory_stats({ shopId, category })`
  - `get_buyback_report({ from, to, shopId })`
  - `get_employee_performance({ from, to, shopId, employeeId })`
  - `get_repair_stats({ from, to, shopId, status })`
  - `get_low_stock({ shopId, threshold })`
  - `get_aged_devices({ shopId, days })`
- [ ] System prompt construction with shop context (name, date, tax year, available data)
- [ ] All tool implementations: Drizzle SELECT queries only, parameterised, tenant-scoped, row-limited
- [ ] AI chat endpoint (`POST /api/v1/ai/query`) with streaming response
- [ ] Conversation history management (store last 30 days in `ai_conversations` table)
- [ ] AI chat UI: slide-in panel from dashboard, message history, loading state, error handling
- [ ] Suggested queries shown to new users (clickable examples)
- [ ] Response export: save AI response + data as PDF
- [ ] Rate limiting: 50 queries/day (Starter), unlimited (Professional+) — Redis counter
- [ ] AI insight generator: nightly job to generate proactive insights (aged stock, slow sellers, low stock)
- [ ] Insights panel on dashboard showing AI-generated alerts

**Acceptance criteria:**
- AI responds to "What were total card sales in Q1 of the current tax year?" with accurate figures
- AI uses tool calling correctly — never generates numbers from thin air
- Streaming response appears character-by-character in UI (< 1s to first token)
- Rate limiting correctly blocks Starter users at 50 queries/day
- All AI queries are read-only — no data modification is possible via AI
- Cross-tenant isolation verified: AI cannot access another tenant's data

---

## 7. Phase 5 — Multi-Shop & Advanced (Weeks 19–22)

### Goal
Activate multi-tenant multi-shop capabilities, integrate card terminals, and add PWA offline support.

### Sprint 11 (Week 19-20): Multi-Shop & Real-Time

**Tasks:**

- [ ] Shop management page: list, add, edit, deactivate shops within a tenant
- [ ] Shop selector in topbar (owner can switch between shops)
- [ ] Centralised multi-shop dashboard: KPI cards for all shops combined, per-shop breakdown table
- [ ] Per-shop employee management (assign employees to specific shops or all shops)
- [ ] Per-shop settings: receipt template, notification preferences, VAT scheme, branding
- [ ] Cross-shop inventory visibility (see stock at other branches)
- [ ] Inter-shop transfer UI (initiate from source shop, confirm at destination)
- [ ] Consolidated reporting across all shops with per-shop drill-down
- [ ] WebSocket real-time events: new sale, stock alert, repair status change, buy-back submission
- [ ] Dashboard live updates without page refresh
- [ ] Multi-shop report: comparative table (revenue, units, avg transaction by shop)

**Acceptance criteria:**
- Owner with 3 shops sees combined KPIs and can drill down to each shop
- Inter-shop transfer correctly adjusts stock at both shops simultaneously
- Real-time sale notification appears on all logged-in dashboard users within 2 seconds
- Per-shop employee can only see their assigned shop's data

### Sprint 12 (Week 21-22): Payments & PWA

**Tasks:**

- [ ] SumUp terminal integration: pair terminal, initiate payment from POS, receive webhook callback
- [ ] Zettle terminal integration (same pattern as SumUp)
- [ ] Payment terminal status indicator in POS (connected/disconnected)
- [ ] Card payment reconciliation: match terminal settlements to sales
- [ ] Stripe subscription billing: plans, customer portal, upgrade/downgrade, webhooks
- [ ] Billing page in settings (current plan, usage, payment history, upgrade CTA)
- [ ] Plan limits enforcement: feature gating based on tenant plan (Starter vs Professional vs Business)
- [ ] PWA setup: `manifest.json`, service worker registration, install prompt
- [ ] Offline sale queue: IndexedDB storage, background sync API
- [ ] Offline product catalogue: service worker cache for product data
- [ ] Offline status indicator in topbar
- [ ] Conflict resolution on sync (server timestamp wins, flag conflicts for review)
- [ ] Employee target setting UI (manager sets daily/weekly/monthly targets per employee)
- [ ] Target progress widgets: donut chart (% of target), daily bar chart
- [ ] Commission calculation display (real-time as sales are processed)
- [ ] Team leaderboard page

**Acceptance criteria:**
- Card payment from POS to SumUp terminal to receipt completes in under 60 seconds
- App installs as PWA on Android and iOS and works offline for basic POS
- Offline sale syncs correctly when connection is restored
- Stripe webhooks correctly activate/deactivate tenant features on plan changes
- Employee target progress updates in real-time as sales are processed

---

## 8. Phase 6 — Compliance & Launch (Weeks 23–26)

### Goal
Complete UK compliance, run beta with real shops, fix issues, and launch.

### Sprint 13 (Week 23-24): HMRC MTD & GDPR

**Tasks:**

- [ ] HMRC MTD API integration for VAT return digital filing
  - OAuth 2.0 flow for HMRC API connection
  - VAT obligations retrieval (assigned VAT periods from HMRC)
  - VAT return preparation (calculate from sales data for the period)
  - Review-before-submit UI (itemised VAT summary, confirm before sending)
  - Digital submission with HMRC confirmation reference
  - Audit log of all MTD submissions
- [ ] VAT period management: track which periods have been submitted
- [ ] MTD digital links compliance: automated data flow verification (no manual re-keying)
- [ ] Flat Rate Scheme support in VAT calculation
- [ ] GDPR compliance audit:
  - [ ] Data retention automated jobs running and verified
  - [ ] SAR export tested with real data shapes
  - [ ] Right to erasure tested with HMRC retention exceptions
  - [ ] Privacy notice on buy-back form reviewed by legal template
  - [ ] Data Processing Agreement template for shop owners
  - [ ] Cookie consent (essential cookies only, no analytics without consent)
- [ ] DPIA documentation for buy-back ID image processing
- [ ] Pen test: run OWASP ZAP against staging environment
- [ ] Security audit: review all API endpoints for:
  - [ ] Missing auth/RBAC checks
  - [ ] SQL injection (parameterised queries verified)
  - [ ] Cross-tenant data leakage
  - [ ] Rate limiting gaps
  - [ ] Insecure direct object references

**Acceptance criteria:**
- VAT return for a test period submits successfully to HMRC sandbox
- All data retention jobs verified to delete correct data at correct times
- OWASP ZAP scan shows no high-severity findings
- Cross-tenant isolation test: no query from tenant A can return data from tenant B

### Sprint 14 (Week 25-26): Beta & Launch

**Tasks:**

- [ ] Beta programme: recruit 5–10 independent phone shops (free Professional for 3 months)
- [ ] Onboarding flow: setup wizard (shop details → add products → add team → first sale)
- [ ] Demo/sandbox environment with pre-loaded data (for sales demos)
- [ ] Data migration tool: CSV import for products, customers from legacy systems
- [ ] Help centre: Intercom or Crisp integration for live chat support
- [ ] Documentation: key workflows with screenshots (add product, process sale, buy-back, repair)
- [ ] Video walkthroughs: 5 short videos (POS, buy-back, repair board, reports, AI assistant)
- [ ] Performance testing: simulate 100 concurrent users, verify < 200ms p95 API response
- [ ] Load testing: 10,000 products, 12 months of sales data — verify report performance
- [ ] Production deployment checklist:
  - [ ] SSL certificates verified
  - [ ] Environment variables set (production, not dev)
  - [ ] Database migrations run on production
  - [ ] Monitoring alerts configured (Sentry, BetterStack)
  - [ ] Backup strategy verified (Neon automatic backups)
  - [ ] Runbook for common incidents
- [ ] Soft launch: invite list only
- [ ] Public launch: Product Hunt, UK phone shop communities, SEO content published

**Acceptance criteria:**
- All 5–10 beta shops using system daily without critical bugs
- 0 data loss or tenant isolation incidents during beta
- API p95 response time < 200ms under 100 concurrent users
- Onboarding wizard tested with a non-technical shop owner (< 20 mins to first sale)

---

## 9. Post-Launch Roadmap

### Phase 7 (Months 7–9): Business Growth Features

| Feature | Sprint | Description |
|---|---|---|
| Supplier Management | 15 | Supplier DB, purchase orders, delivery tracking, auto-stock-increment on receipt |
| Loyalty Programme | 15 | Points per purchase, tier rewards, referral bonus tracking |
| Xero Integration | 16 | Direct sales and VAT data sync to Xero |
| QuickBooks Integration | 16 | Alternative accounting sync |
| Customer Portal | 17 | Self-service: repair status tracking, purchase history, buy-back form |
| Advanced Buy-Back Pricing | 17 | Market rate API (Back Market, musicMagpie) for real-time suggested buy prices |
| Multi-Branch Analytics | 18 | Comparative dashboards: which shop is top performer, why |

### Phase 8 (Months 10–12): Platform Expansion

| Feature | Sprint | Description |
|---|---|---|
| WhatsApp Business API | 19 | Repair status via WhatsApp (wider than SMS) |
| eBay Listing | 19 | One-click listing of refurbished devices to eBay |
| Amazon Marketplace | 20 | Amazon Renewed listing integration |
| B2B Wholesale Mode | 20 | Bulk device listing for wholesale buyers, B2B pricing tiers |
| Staff Scheduling | 21 | Shift management integrated with sales performance data |
| Advanced GDPR | 21 | Automated SAR handling, privacy dashboard for customers |

### Phase 9 (Year 2+): AI & Scale

| Feature | Description |
|---|---|
| Predictive Buy-Back Pricing | AI model trained on market data — suggest buy prices that maximise margin |
| Demand Forecasting | AI predicts which devices will sell in the next 30 days based on season/trends |
| Trade-In Kiosk | Customer-facing self-service kiosk mode (touchscreen, no staff needed) |
| Insurance Claim Integration | Partner with device insurance providers for direct claim submission |
| Footfall Analytics | Camera integration for conversion rate and peak hour tracking |
| ShopOS API (Public) | Open API for third-party integrations and white-label partners |

---

## 10. CI/CD Pipeline Design

### Pipeline Overview

```
Push to any branch
    │
    ▼
┌───────────────────────────────────────────┐
│         GitHub Actions: CI Pipeline        │
│                                           │
│  Job 1: Quality Gates (parallel)          │
│    ├── pnpm lint (ESLint + Prettier)      │
│    ├── pnpm type-check (tsc --noEmit)     │
│    └── pnpm audit (security vulnerabilities) │
│                                           │
│  Job 2: Test (after Job 1 passes)         │
│    ├── Start PostgreSQL + Redis (Docker)  │
│    ├── pnpm db:migrate:test               │
│    ├── pnpm test:unit (Vitest)            │
│    └── pnpm test:integration (Supertest)  │
│                                           │
│  Job 3: Build (after Job 2 passes)        │
│    ├── pnpm build:web (Next.js)           │
│    └── pnpm build:api (tsc)               │
└───────────────────────────────────────────┘
    │
    ├── If PR → Preview deployment
    │     ├── Vercel: Deploy Next.js preview
    │     ├── Railway: Deploy API to staging
    │     └── Post preview URL to PR comment
    │
    └── If merged to main → Production deployment
          ├── pnpm db:migrate:prod (Drizzle Kit)
          ├── Vercel: Deploy Next.js production
          ├── Railway: Deploy API production
          └── Notify team on success/failure (Slack)
```

### Database Migration Safety

```bash
# Drizzle migration process (safe, no data loss)
pnpm db:generate    # Generate migration SQL from schema changes
pnpm db:check       # Verify migration is safe (no destructive changes)
pnpm db:migrate:staging  # Apply to staging first
# Manual review period (1 hour minimum for production)
pnpm db:migrate:prod     # Apply to production

# Rollback strategy:
# 1. Drizzle migrations are append-only (safe forward)
# 2. For emergency rollback: restore from Neon point-in-time backup
# 3. Application-level: feature flags to disable new features while data is migrated
```

### Branch Strategy

```
main (production)
  └── develop (staging — merge target for PRs)
        ├── feature/pos-barcode-scanning
        ├── feature/buyback-form
        ├── fix/imei-validation
        └── chore/update-drizzle
```

### Pre-commit Hooks (Husky + lint-staged)

```json
{
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{json,md,css}": ["prettier --write"],
    "packages/db/src/schema/**": ["pnpm db:generate"]
  }
}
```

---

## 11. Testing Strategy

### Test Pyramid

```
       ┌──────────────┐
       │   E2E Tests  │  Playwright — 20 tests, critical flows only
       │  (slowest)   │  ~5 mins to run
       ├──────────────┤
       │ Integration  │  Supertest — 150 tests, all API endpoints
       │    Tests     │  ~3 mins to run
       ├──────────────┤
       │  Unit Tests  │  Vitest — 300+ tests, utilities, services
       │  (fastest)   │  ~30 seconds to run
       └──────────────┘
```

### Unit Tests (Vitest)

Target: 80% coverage of business logic

```typescript
// Example: UK tax year utility tests
describe("getTaxYear", () => {
  it("returns correct tax year for a date in Q1", () => {
    expect(getTaxYear(new Date("2025-05-01"))).toEqual({
      start: new Date("2025-04-06"),
      end: new Date("2026-04-05"),
      label: "2025-2026"
    });
  });

  it("correctly handles April 5 (last day of tax year)", () => {
    expect(getTaxYear(new Date("2026-04-05"))).toEqual({
      start: new Date("2025-04-06"),
      end: new Date("2026-04-05"),
      label: "2025-2026"
    });
  });

  it("correctly handles April 6 (first day of new tax year)", () => {
    expect(getTaxYear(new Date("2026-04-06"))).toEqual({
      start: new Date("2026-04-06"),
      end: new Date("2027-04-05"),
      label: "2026-2027"
    });
  });
});

// Example: IMEI Luhn algorithm validation
describe("validateIMEI", () => {
  it("validates a correct IMEI", () => {
    expect(validateIMEI("490154203237518")).toBe(true);
  });

  it("rejects an invalid IMEI", () => {
    expect(validateIMEI("490154203237519")).toBe(false);
  });

  it("rejects non-15-digit strings", () => {
    expect(validateIMEI("12345")).toBe(false);
  });
});
```

### Integration Tests (Supertest)

Test database with isolated transactions per test, rolled back after each test.

```typescript
// Example: Sale creation integration test
describe("POST /api/v1/sales", () => {
  it("creates a sale and decrements stock", async () => {
    const product = await seedProduct({ quantity: 10 });
    const response = await request(app)
      .post("/api/v1/sales")
      .set("Authorization", `Bearer ${employeeToken}`)
      .send({
        items: [{ productId: product.id, quantity: 2 }],
        paymentMethod: "cash",
        cashAmount: 4999,
      });

    expect(response.status).toBe(201);
    expect(response.body.receiptNumber).toMatch(/^REC-/);

    const updatedProduct = await db.select().from(products).where(eq(products.id, product.id));
    expect(updatedProduct[0].quantity).toBe(8);  // decremented by 2
  });

  it("requires manager approval for discount > 20%", async () => {
    const response = await request(app)
      .post("/api/v1/sales")
      .set("Authorization", `Bearer ${employeeToken}`)
      .send({ discount: { type: "percentage", value: 25 }, /* ... */ });

    expect(response.status).toBe(403);
    expect(response.body.error).toMatch(/manager approval/i);
  });

  it("enforces tenant isolation", async () => {
    const otherTenantProduct = await seedProduct({ tenantId: otherTenantId });
    const response = await request(app)
      .post("/api/v1/sales")
      .set("Authorization", `Bearer ${employeeToken}`)
      .send({ items: [{ productId: otherTenantProduct.id, quantity: 1 }], /* ... */ });

    expect(response.status).toBe(404);  // product not found for this tenant
  });
});
```

### E2E Tests (Playwright)

Cover only the most critical user journeys:

1. **Full sale flow:** Login → POS → scan product → add to cart → process payment → receipt sent
2. **Buy-back form:** Navigate to public form → fill all steps → IMEI check → submission → shop notified
3. **Repair Kanban:** Create repair job → drag through 3 status changes → customer SMS received
4. **AI query:** Login → AI chat → ask "What were today's sales?" → receive accurate response
5. **Multi-shop switch:** Owner → switch shop → verify dashboard shows correct shop data

### Test Data Strategy

```typescript
// Factory functions for test data
const factories = {
  tenant: (overrides = {}) => ({
    name: "Test Phone Shop",
    plan: "professional",
    ...overrides,
  }),

  product: (overrides = {}) => ({
    name: "iPhone 15 Pro Case",
    category: "accessory",
    brand: "Apple",
    sellingPrice: 1999,  // £19.99 in pence
    costPrice: 599,
    vatRate: 20,
    quantity: 50,
    ...overrides,
  }),

  sale: (employeeId, items) => ({
    items,
    paymentMethod: "card",
    cardAmount: items.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0),
    employeeId,
  }),
};
```

### Coverage Targets

| Layer | Target | Tool |
|---|---|---|
| API routes | 90% | Vitest + Supertest |
| Business logic (services) | 85% | Vitest |
| Database queries | 80% | Integration tests |
| Next.js components | 70% | Vitest + Testing Library |
| Critical flows (E2E) | 5 flows | Playwright |

---

## 12. Environment Strategy

### Environment Matrix

| Environment | Frontend | Backend API | Database | When |
|---|---|---|---|---|
| **Local dev** | localhost:3000 | localhost:4000 | Docker PostgreSQL | Daily development |
| **Preview** | Vercel preview URL | Railway staging | Neon dev branch | Every PR |
| **Staging** | staging.shopos.app | api-staging.railway.app | Neon staging branch | Pre-production testing |
| **Production** | app.shopos.app | api.railway.app | Neon main branch | Live |

### Environment Variables per Environment

```bash
# Production-only additions:
SENTRY_DSN=...
SENTRY_ENVIRONMENT=production
CHECKMEND_API_KEY=[live key]
STRIPE_SECRET_KEY=[live key, starts with sk_live_]
TWILIO_ACCOUNT_SID=[live credentials]
HMRC_API_CLIENT_ID=[production OAuth client]
HMRC_API_CLIENT_SECRET=[production OAuth secret]
```

### Feature Flags

Simple tenant-plan-based feature gating (no external feature flag service needed for MVP):

```typescript
// packages/shared/src/constants/permissions.ts
export const PLAN_FEATURES = {
  starter: ["pos", "inventory", "basic_reports", "buyback_basic", "barcode"],
  professional: ["pos", "inventory", "full_reports", "buyback_full", "imei_check",
                 "repairs", "ai_assistant", "mtd", "sms_notifications", "barcode"],
  business: ["pos", "inventory", "full_reports", "buyback_full", "imei_check",
             "repairs", "ai_assistant", "mtd", "sms_notifications", "barcode",
             "multi_shop", "inter_shop_transfers", "consolidated_reports"],
  enterprise: ["*"],  // all features
};

export const hasFeature = (plan: string, feature: string): boolean =>
  PLAN_FEATURES[plan]?.includes(feature) || PLAN_FEATURES[plan]?.includes("*") || false;
```

---

## 13. Team Structure

### Recommended Team for Building ShopOS

| Role | Qty | Responsibility |
|---|---|---|
| **Tech Lead / Full-Stack** | 1 | Architecture ownership, code review, DevOps, complex features |
| **Frontend Developer** | 1–2 | Next.js pages, UI components, POS interface, Kanban board, AI chat UI |
| **Backend Developer** | 1–2 | Express API, Drizzle ORM queries, external integrations (CheckMEND, Twilio, Claude API) |
| **QA Engineer** | 1 | Test suite maintenance, E2E automation, beta testing coordination |
| **UI/UX Designer** | 0.5 (part-time) | Design system, wireframes for complex flows (buy-back wizard, Kanban, reports) |

### Working Practices

- **2-week sprints** with planning, daily standups, and retrospectives
- **PR reviews:** Minimum 1 reviewer required, tech lead for architecture changes
- **Definition of Done:** Tested (unit + integration), reviewed, deployed to staging, acceptance criteria verified
- **Documentation:** Every API endpoint documented (inline comments or Swagger), key decisions in ADR (Architecture Decision Records)

### Outsourcing Candidates

| Task | When | Why |
|---|---|---|
| UK GDPR legal review of buy-back form and privacy notices | Phase 6 | Specialist knowledge, one-time |
| Pen testing / security audit | Phase 6 | Independent, specialist |
| HMRC MTD API integration setup | Phase 6 | Complex OAuth, HMRC sandbox testing |
| Logo / brand design | Phase 0 | One-time |
| Video walkthroughs | Phase 6 | Professional production quality |

---

## 14. Risk Register

| # | Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|---|
| 1 | **CheckMEND API cost** becomes prohibitive at scale | Medium | High | Negotiate volume pricing upfront; add IMEI.info as fallback; pass-through cost on Starter tier |
| 2 | **HMRC MTD API complexity** delays Phase 6 | High | Medium | Start MTD OAuth integration in Phase 5 (not Phase 6); use HMRC sandbox from day 1; allocate buffer sprint |
| 3 | **Offline sync data conflicts** (PWA) cause data inconsistency | Medium | High | Use server timestamp as source of truth; queue offline actions with optimistic UI; extensive testing of conflict scenarios |
| 4 | **Multi-tenant data leakage** via missing tenant_id filters | Medium | Critical | Code review checklist for every DB query; integration test that exhaustively checks cross-tenant isolation; Drizzle schema helper that enforces tenant scoping |
| 5 | **UK GDPR non-compliance** for ID image handling | Low | Critical | Legal review in Phase 6; DPIA completed before beta; automated retention deletion verified in testing |
| 6 | **SumUp/Zettle integration** more complex than expected | High | Medium | Build POS payment as "record card payment" first (Phase 1), terminal integration as Phase 5 enhancement |
| 7 | **AI hallucination** in financial reporting | Medium | High | All AI queries use function calling (real DB data); never allow Claude to generate numbers without a tool call; show data source alongside AI response |
| 8 | **Performance degradation** on reports with large datasets | Medium | Medium | Database indexing strategy implemented from day 1; reports tested with 12+ months of realistic seed data in Phase 4 |
| 9 | **Customer adoption resistance** (shops like paper) | High | Medium | Prioritise 30-second sale flow; free trial with no credit card; local demo visits for UK shops; champion user in each beta shop |
| 10 | **Neon PostgreSQL cold start latency** on serverless | Low | Medium | Use Neon connection pooling (PgBouncer); consider fixed compute for production if cold starts become an issue |

---

## 15. Infrastructure Budget

### Monthly Running Costs (Production)

| Service | Tier | Monthly Cost |
|---|---|---|
| Vercel | Pro | $20 |
| Railway | Hobby → Pro at scale | $20–50 |
| Neon PostgreSQL | Launch → Scale | $19–69 |
| Upstash Redis | Pay-as-you-go | $10–20 |
| Cloudflare R2 | Pay-as-you-go (first 10GB free) | $5–15 |
| Resend | Pro (50k emails/mo) | $20 |
| Twilio SMS | Pay-as-you-go (UK SMS ~£0.04/msg) | $20–80 |
| Anthropic Claude API | Claude Haiku for tools, Sonnet for chat | $50–200 |
| CheckMEND API | Per-check (volume-dependent) | $50–150 |
| Sentry | Team | $26 |
| BetterStack | Free → Starter | $0–25 |
| Plausible | Starter | $9 |
| GitHub | Free (public) / Team | $0–4 |
| Domain + SSL | Yearly ÷ 12 | $2 |
| **Total Estimated** | | **$251–670/month** |

### Revenue to Cover Costs

- At Starter (£39/mo): need 7 tenants to cover minimum infra costs
- At Professional (£89/mo): need 4 tenants to cover maximum infra costs
- **Break-even (50 tenants, avg £80/mo): £4,000 MRR vs ~£500 infra = 87.5% gross margin**

### Development Investment Estimate

| Team | Duration | Estimate |
|---|---|---|
| 2 developers (FT) × 6 months | Phase 0–6 | £60,000–90,000 |
| 1 tech lead × 6 months | Phase 0–6 | £45,000–60,000 |
| Part-time designer × 6 months | Phase 0–6 | £10,000–15,000 |
| Part-time QA × 6 months | Phase 1–6 | £15,000–20,000 |
| Legal (GDPR) | One-time | £2,000–5,000 |
| Security audit | One-time | £2,000–5,000 |
| **Total Estimated Dev Cost** | | **£134,000–195,000** |

---

## 16. Sprint Calendar

```
2026 SPRINT CALENDAR — RIVENDELL SHOPOS

FEBRUARY 2026
╔══════════════════════════════════════════════════════════╗
║  Sprint 1 (Feb 2–15): PHASE 0 — Infrastructure          ║
║  • Monorepo, CI/CD, Vercel, Railway, Neon, Upstash       ║
║  ✓ Milestone: Dev environment running, CI green          ║
╠══════════════════════════════════════════════════════════╣
║  Sprint 2 (Feb 16–Mar 1): PHASE 0 — DB + Auth           ║
║  • Drizzle schema, Auth.js, JWT, shadcn/ui               ║
║  ✓ Milestone: Login working, dashboard shell             ║
╚══════════════════════════════════════════════════════════╝

MARCH 2026
╔══════════════════════════════════════════════════════════╗
║  Sprint 3 (Mar 2–15): PHASE 1 — Inventory               ║
║  • Products CRUD, barcodes, stock management             ║
║  ✓ Milestone: Manager can add products, print barcodes   ║
╠══════════════════════════════════════════════════════════╣
║  Sprint 4 (Mar 16–29): PHASE 1 — POS                    ║
║  • Sales flow, receipt, refunds, reconciliation          ║
║  ✓ Milestone: First complete sale with receipt           ║
╚══════════════════════════════════════════════════════════╝

APRIL 2026
╔══════════════════════════════════════════════════════════╗
║  Sprint 5 (Mar 30–Apr 12): PHASE 2 — Buy-Back Form      ║
║  • CheckMEND, OTP, ID upload, public form                ║
║  ✓ Milestone: Customer submits buy-back, IMEI checked    ║
╠══════════════════════════════════════════════════════════╣
║  Sprint 6 (Apr 13–26): PHASE 2 — Buy-Back Processing    ║
║  • Approval flow, pricing, margin tracking, ageing       ║
║  ✓ Milestone: Full buy-back lifecycle + investment report ║
╚══════════════════════════════════════════════════════════╝

MAY 2026
╔══════════════════════════════════════════════════════════╗
║  Sprint 7 (Apr 27–May 10): PHASE 3 — CRM                ║
║  • Customer DB, timeline, GDPR, search                   ║
║  ✓ Milestone: Customer profile with full history         ║
╠══════════════════════════════════════════════════════════╣
║  Sprint 8 (May 11–24): PHASE 3 — Repair Kanban          ║
║  • Kanban board, SMS notifications, parts tracking       ║
║  ✓ Milestone: Repair job moves through all statuses      ║
╚══════════════════════════════════════════════════════════╝

JUNE 2026
╔══════════════════════════════════════════════════════════╗
║  Sprint 9 (May 25–Jun 7): PHASE 4 — Reports             ║
║  • UK tax year reports, VAT, employee performance        ║
║  ✓ Milestone: Annual tax-year report with correct totals ║
╠══════════════════════════════════════════════════════════╣
║  Sprint 10 (Jun 8–21): PHASE 4 — AI Assistant           ║
║  • Claude API, tool use, chat UI, rate limiting          ║
║  ✓ Milestone: AI correctly answers financial query       ║
╚══════════════════════════════════════════════════════════╝

JULY 2026
╔══════════════════════════════════════════════════════════╗
║  Sprint 11 (Jun 22–Jul 5): PHASE 5 — Multi-Shop         ║
║  • Shop management, centralised dashboard, WebSockets    ║
║  ✓ Milestone: Owner sees all shops, real-time updates    ║
╠══════════════════════════════════════════════════════════╣
║  Sprint 12 (Jul 6–19): PHASE 5 — Payments + PWA         ║
║  • SumUp/Zettle, Stripe billing, offline mode            ║
║  ✓ Milestone: Card terminal payment end-to-end           ║
╚══════════════════════════════════════════════════════════╝

AUGUST 2026
╔══════════════════════════════════════════════════════════╗
║  Sprint 13 (Jul 20–Aug 2): PHASE 6 — MTD + GDPR         ║
║  • HMRC API, VAT submission, GDPR audit, pen test        ║
║  ✓ Milestone: VAT return submitted to HMRC sandbox       ║
╠══════════════════════════════════════════════════════════╣
║  Sprint 14 (Aug 3–16): PHASE 6 — Beta + Launch          ║
║  • 5–10 beta shops, performance testing, launch          ║
║  ✓ MILESTONE: PUBLIC LAUNCH 🚀                           ║
╚══════════════════════════════════════════════════════════╝

KEY MILESTONES:
  Week 2:  Development environment running, CI green
  Week 4:  First complete POS sale with receipt
  Week 6:  First complete buy-back with IMEI check
  Week 8:  First repair job through Kanban to collection
  Week 10: All reports generating with UK tax year alignment
  Week 12: AI assistant answering financial queries correctly
  Week 14: Multi-shop working with real-time updates
  Week 16: Card terminal integrated, PWA installed on mobile
  Week 18: VAT return submitted to HMRC sandbox
  Week 20: Beta shops onboarded and using system daily
  Week 26: 🚀 PUBLIC LAUNCH
```

---

*This implementation plan is version 1.0 and should be reviewed and updated at the end of each sprint based on actual velocity and findings.*

*Built by Rivendell AI — Your Subscription-Based Tech Partner*
