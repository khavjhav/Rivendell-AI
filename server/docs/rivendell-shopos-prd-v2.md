# Rivendell ShopOS — Product Requirements Document

**Version:** 2.0
**Date:** February 2026
**Author:** Rivendell AI
**Status:** Active
**Previous Version:** 1.0 (February 2026)

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Market Opportunity](#2-market-opportunity)
3. [Competitive Landscape](#3-competitive-landscape)
4. [Problem Statement](#4-problem-statement)
5. [Target Users & Roles](#5-target-users--roles)
6. [Core Modules](#6-core-modules)
7. [System Relationships & Automations](#7-system-relationships--automations)
8. [Technical Requirements](#8-technical-requirements)
9. [UK Regulatory Compliance](#9-uk-regulatory-compliance)
10. [Non-Functional Requirements](#10-non-functional-requirements)
11. [UI/UX Requirements](#11-uiux-requirements)
12. [Pricing Strategy](#12-pricing-strategy)
13. [Go-to-Market Strategy](#13-go-to-market-strategy)
14. [Roadmap](#14-roadmap)
15. [Success Metrics](#15-success-metrics)
16. [Glossary](#16-glossary)

---

## 1. Executive Summary

**Rivendell ShopOS** is an all-in-one cloud-based management platform built specifically for independent mobile phone shops, tech repair centres, and electronics retailers across the UK. It replaces fragmented paper records, Excel spreadsheets, and disconnected tools with a single intelligent system that handles sales, buy-back, inventory, customer management, repairs, and AI-powered reporting — all designed around UK compliance requirements.

### Vision

To become the operating system for every independent tech shop in the UK — eliminating manual processes, ensuring HMRC compliance, and giving shop owners real-time visibility into every aspect of their business through the power of AI.

### Target Market

- Independent mobile phone shops (UK: ~12,000+ outlets)
- Tech repair centres and phone accessory retailers
- Multi-branch electronics retailers (2–10 locations)
- Buy-back and refurbishment businesses
- Primary market: United Kingdom | Secondary: EU

### Key Differentiators (v2 — Validated Against 13 Competitors)

| Differentiator | Status |
|---|---|
| AI-Powered Natural Language Reporting | **Unique — no competitor offers this** |
| UK Tax Year Native Alignment (Apr 6 – Apr 5) | **Unique — every competitor uses calendar year** |
| Customer-Facing Buy-Back Form with IMEI pre-check | **Unique — no competitor offers this** |
| Integrated IMEI + Finance + Lock Check with auto-reject | **Unique — no competitor automates this** |
| Device Ageing Reports with AI markdown suggestions | **Unique — no competitor offers this** |
| Full Buy-Back Margin & ROI Tracking | **Unique — no competitor offers buy-back P&L** |
| All-in-One for Phone Shops (POS+Buy-Back+Repair+CRM+AI) | **Only RepairDesk approaches this, without UK compliance or AI** |
| HMRC MTD Native Compliance | **Only Epos Now has partial support — not phone-shop-specific** |
| UK GDPR by Design (ID image retention, SAR workflows) | **No phone-shop POS competitor addresses this** |
| Repair Kanban Board | **RepairDesk has list view; no one has Kanban** |

---

## 2. Market Opportunity

### Market Size

The UK independent mobile phone retail and repair sector represents a substantial and underserved opportunity:

- **~12,000+ independent mobile phone shops** in the UK (OFCOM/industry estimates)
- **UK used phone market:** £2–3 billion annually and growing
- Driven by: environmental awareness, cost-of-living pressures, device longevity trends, Right to Repair legislation
- **Average spend on software tools:** £100–300/month across disconnected tools (POS + repair software + IMEI checkers)
- **Serviceable Addressable Market (SAM):** ~5,000 shops using digital tools (conservative 40% adoption)
- At £79/month Professional tier: **£4.7M ARR** at 5% SAM penetration

### Market Trends

1. **Growing used device market:** UK consumers increasingly buy refurbished. Amazon Renewed, Back Market, and CeX are mainstream.
2. **Device financing checks critical:** Most UK phones sold on carrier contract. Outstanding finance checking is legally and commercially critical for buy-back.
3. **HMRC MTD pressure:** MTD for ITSA rolling out April 2026 — significant compliance pressure on sole traders and small businesses.
4. **Independent shops vs. chains:** CeX (900+ stores), Mazuma, musicMagpie set customer pricing expectations. Independents need equivalent tools to compete.
5. **Consumer expectation of instant quotes:** Online services provide instant buy-back quotes. Walk-in customers expect comparable speed.
6. **B2B wholesale growing:** Independent shops increasingly sell device batches to refurbishment companies — creating demand for B2B reporting and bulk listing.
7. **Sustainability angle:** Right to Repair legislation, extended producer responsibility — refurbished market becoming regulated and professionalised.

---

## 3. Competitive Landscape

### 3.1 Competitor Analysis

#### RepairDesk
- **Price:** $49–99/month (USD, not UK-priced)
- **Focus:** Repair shop management (US-primary)
- **Strengths:** POS + repair ticketing + basic IMEI tracking, multi-store, integrations (QuickBooks, Xero)
- **Weaknesses:** No AI, no UK tax year alignment, no customer-facing buy-back form, no automated IMEI verification with finance check, no device ageing reports, US-centric compliance
- **Verdict:** Closest functional competitor — but lacks every UK-specific and AI feature

#### RepairShopr / Syncro
- **Price:** $139/month/user (expensive for small shops)
- **Focus:** IT MSP management (pivoted away from repair shops)
- **Strengths:** Repair ticketing, customer communication, invoicing
- **Weaknesses:** No IMEI tracking, no buy-back, no inventory management, not suited for phone retail, not UK-focused, expensive
- **Verdict:** Wrong category for phone shops

#### CellSmart POS
- **Price:** $59/month
- **Focus:** Wireless retail POS (US carrier market)
- **Strengths:** POS, IMEI tracking, commission tracking, carrier activation
- **Weaknesses:** Designed for US wireless carrier dealers, no UK carrier integrations, no buy-back workflow, no AI, outdated UI, no UK compliance
- **Verdict:** Most phone-shop-specific US tool — but entirely wrong market

#### mHelpDesk
- **Price:** $169/month
- **Focus:** Field service management
- **Strengths:** Job scheduling, customer communication
- **Weaknesses:** Not designed for retail POS, no IMEI, no inventory, no buy-back, expensive
- **Verdict:** Wrong category entirely

#### iRepair
- **Price:** $29/month
- **Focus:** Basic repair shop management
- **Strengths:** Cheapest option, repair ticketing basics
- **Weaknesses:** Very basic, no inventory, no buy-back, outdated UI, no reporting, no AI
- **Verdict:** Low-end entry point only — no growth path

#### Lightspeed Retail
- **Price:** $89–239/month
- **Focus:** General retail POS
- **Strengths:** Advanced inventory, multi-store, e-commerce, integrations
- **Weaknesses:** Generic retail, no IMEI, no buy-back, no repair tracking, expensive, contract lock-in, no UK tax year support, no AI
- **Verdict:** Over-engineered for phone shops; missing all phone-specific features

#### Square POS
- **Price:** Free (processing fees apply)
- **Focus:** General SMB POS
- **Strengths:** Free entry point, payments included, brand recognition
- **Weaknesses:** No IMEI, no buy-back, no repair management, no UK tax year, no AI, basic inventory
- **Verdict:** Sets the free-tier expectation; not competitive on phone-shop features

#### Epos Now
- **Price:** £39–79/month + hardware + add-ons
- **Focus:** UK retail/hospitality POS
- **Strengths:** UK-based, HMRC MTD partial support, UK VAT handling, Xero/Sage integration
- **Weaknesses:** Generic retail (no IMEI, buy-back, or repair), notorious for aggressive sales tactics and contract lock-in, poor customer service reviews, no AI, no phone-specific features
- **Verdict:** UK's incumbent retail POS — but phone shop owners hate it for lock-in practices

#### Cashier Live
- **Price:** $29–99/month
- **Focus:** UK small retailer POS
- **Strengths:** Simple, UK-focused, affordable
- **Weaknesses:** Very limited features, no phone-specific tools, small company with slow development, no API, no AI
- **Verdict:** Small niche player — not a serious threat

#### RQ by iQmetrix
- **Price:** $100–300+/month (enterprise)
- **Focus:** Enterprise wireless retail (US/Canada carrier dealers)
- **Strengths:** Purpose-built for wireless retail, IMEI tracking, carrier activation management
- **Weaknesses:** US/Canada only, no UK carrier integrations, no buy-back, no repair tracking, enterprise only, very expensive
- **Verdict:** Irrelevant for UK independent shops

### 3.2 Feature Comparison Matrix

| Feature | RepairDesk | CellSmart | Lightspeed | Square | Epos Now | **ShopOS** |
|---|---|---|---|---|---|---|
| **POS / Sales** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Repair Ticketing** | ✅ | ✅ | Basic | ❌ | ❌ | ✅ Kanban |
| **IMEI Tracking** | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ |
| **IMEI Verification API** | Paid add-on | Basic | ❌ | ❌ | ❌ | ✅ Integrated |
| **Finance Check** | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| **Buy-Back Workflow** | Basic | Basic | ❌ | ❌ | ❌ | ✅ Full |
| **Customer Buy-Back Form** | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| **Device Ageing Alerts** | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ AI |
| **Buy-Back Margin/ROI** | ❌ | Basic | ❌ | ❌ | ❌ | ✅ Full |
| **Multi-Store** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Employee Targets/Commission** | Basic | ✅ | Basic | Basic | Basic | ✅ Visual |
| **UK Tax Year (Apr 6)** | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| **HMRC MTD** | ❌ | ❌ | ❌ | ❌ | Partial | ✅ |
| **UK GDPR Compliance** | Partial | ❌ | Partial | Partial | Partial | ✅ Full |
| **AI Natural Language** | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| **Repair Kanban Board** | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| **Barcode Gen + Print** | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ |
| **Customer Notifications** | Email | ❌ | ❌ | ❌ | ❌ | SMS + Email |
| **Offline / PWA** | ❌ | ❌ | ❌ | Partial | ❌ | ✅ PWA |
| **UK Payment (SumUp/Zettle)** | Limited | ❌ | Limited | Square only | Own terminal | ✅ |
| **Starting Price (GBP)** | ~£40/mo | ~£50/mo | ~£75/mo | Free | ~£39/mo | **£39/mo** |

### 3.3 Market Gap Summary

No single platform currently combines:
- Phone-shop-specific POS
- Integrated IMEI verification (blacklist + finance + FRP)
- Full buy-back management with margin tracking
- Repair Kanban tracking
- AI-powered natural language reporting
- UK tax year alignment
- HMRC MTD compliance

**This is a genuine, validated market gap.**

---

## 4. Problem Statement

### Current Pain Points for UK Independent Phone Shop Owners

| # | Problem | Impact |
|---|---------|--------|
| 1 | Paper/Excel-based sales records | Inaccurate daily totals, lost transactions, no audit trail |
| 2 | No digital inventory tracking | Stock discrepancies, over-ordering, theft undetected |
| 3 | Manual buy-back process | Inconsistent pricing, no margin visibility, compliance risk |
| 4 | No IMEI verification | Risk of purchasing stolen devices, legal liability |
| 5 | No finance check on trade-ins | Risk of buying phone with outstanding finance |
| 6 | Disconnected repair tracking | Lost customer devices, no status updates, payment disputes |
| 7 | No UK tax-year reporting | Manual tax calculations, HMRC penalties, expensive accountant fees |
| 8 | Employee performance blind spots | No sales targets, no accountability, manual commission calculation |
| 9 | Multi-shop chaos | No visibility across branches, manual stock transfers on WhatsApp |
| 10 | No customer database | Repeat customers not recognised, no purchase history |
| 11 | VAT returns assembled manually | Error-prone, expensive accountant fees, MTD non-compliance |
| 12 | Stock ageing invisible | Devices bought months ago sit unsold with no alert or depreciation |
| 13 | Compliance anxiety | GDPR, MTD, handling stolen goods — shop owners unsure if compliant |
| 14 | Cost of multiple tools | POS + repair software + IMEI checker + accounting = £200–400/month disconnected |

### Current Typical Workflow

1. Sales recorded in notebook or basic till — no digital receipts
2. Buy-back prices negotiated ad-hoc — no market data, no IMEI check trail
3. Inventory counted manually (weekly/monthly) — always inaccurate
4. Repairs tracked on paper tickets — get lost, no customer notification
5. Tax returns assembled at year-end from paper receipts — weeks of work
6. No customer database — repeat customers start from scratch every visit

---

## 5. Target Users & Roles

### User Personas

| Role | Description | Access Level |
|------|-------------|-------------|
| **Shop Owner** | Business owner, needs full visibility and control | Full access — all modules, settings, reports, user management, billing |
| **Manager** | Day-to-day operations lead for one or more shops | Operations access — sales, inventory, repairs, staff targets, reports (no billing/system settings) |
| **Employee** | Sales associate or repair technician | Limited — process sales, log repairs, view own targets (no pricing changes, no reports) |
| **Customer** | Self-service buy-back form submission | Public — submit device details for buy-back quote only |

### Permission Matrix

| Feature | Owner | Manager | Employee | Customer |
|---------|-------|---------|----------|----------|
| Dashboard & Reports | ✅ | ✅ | ❌ | ❌ |
| Process Sales | ✅ | ✅ | ✅ | ❌ |
| Modify Prices | ✅ | ✅ | ❌ | ❌ |
| Apply Discounts >20% | ✅ | ✅ | Needs approval | ❌ |
| Buy-Back Approval | ✅ | ✅ | ❌ | ❌ |
| View Buy-Back ID Photos | ✅ | ✅ | ❌ | ❌ |
| Inventory Management | ✅ | ✅ | View Only | ❌ |
| Repair Job Management | ✅ | ✅ | ✅ | View Status |
| Staff & Targets | ✅ | ✅ | View Own | ❌ |
| AI Assistant | ✅ | ✅ | ❌ | ❌ |
| System Settings | ✅ | ❌ | ❌ | ❌ |
| Billing & Subscription | ✅ | ❌ | ❌ | ❌ |
| Submit Buy-Back Form | ❌ | ❌ | ❌ | ✅ |
| Data Export | ✅ | ✅ | ❌ | ❌ |
| Audit Log | ✅ | ❌ | ❌ | ❌ |

---

## 6. Core Modules

### 6.1 Sales Management (POS)

#### Overview
Digital point-of-sale system tracking every transaction with cash/card split, employee attribution, VAT calculation, and automatic UK tax-year-aligned reporting.

#### Features

**Transaction Recording**
- Record sale: product, quantity, price, payment method (cash/card/mixed), employee, timestamp
- Auto-generate sequential receipt numbers (e.g., REC-2026-0001)
- Apply discounts (percentage or fixed) — discounts >20% require manager approval
- VAT calculation: standard 20%, reduced 5%, zero-rated 0%
- Barcode scanning for instant product lookup
- Search products by name, SKU, barcode, or IMEI

**Payment Tracking**
- Cash drawer management with opening/closing balance
- Card payment integration: SumUp, Zettle
- Mixed payment (partial cash + partial card) in single transaction
- Daily cash reconciliation report (expected vs actual)
- Refund processing with reason code and manager approval
- Partial refunds with stock reinstatement

**Reporting — UK Tax Year Aligned**
- **Daily Report:** Total sales, cash total, card total, transaction count, avg sale value, VAT collected
- **Weekly Report:** Revenue, units sold, top products, employee performance
- **Monthly Report:** Revenue by category, top-selling products, comparison to previous month and same month last year
- **Quarterly Report:** Aligned to UK tax quarters (Q1: Apr 6–Jul 5, Q2: Jul 6–Oct 5, Q3: Oct 6–Jan 5, Q4: Jan 6–Apr 5)
- **Yearly Report:** Full tax-year summary (Apr 6–Apr 5), quarterly breakdowns, category trends, VAT summary
- **Custom Range:** Date range picker with filterable dimensions (category, employee, payment method, shop)

**Employee Performance**
- Individual sales targets: daily, weekly, monthly
- Real-time progress with visual charts (donut chart of target completion, bar chart of daily sales)
- Commission calculation: configurable percentage tiers (e.g., 2% up to £1000, 3% above £1000)
- Team leaderboard (ranked by sales value or units)
- Performance comparison: current vs previous period, current vs target

#### Data Model

```typescript
Sale {
  id: UUID
  receiptNumber: string          // auto-generated, sequential
  items: SaleItem[]
  subtotal: number
  discount: { type: "percentage" | "fixed", value: number } | null
  vatAmount: number
  total: number
  paymentMethod: "cash" | "card" | "mixed"
  cashAmount: number | null
  cardAmount: number | null
  employeeId: UUID
  shopId: UUID
  tenantId: UUID
  customerId: UUID | null
  createdAt: DateTime
  refundedAt: DateTime | null
  refundReason: string | null
}

SaleItem {
  productId: UUID
  name: string
  sku: string
  quantity: number
  unitPrice: number
  costPrice: number              // for margin calculation
  vatRate: 0 | 5 | 20
  total: number
  imei: string | null            // for serialised devices
}
```

---

### 6.2 Buy-Back & Trade-In System

#### Overview
End-to-end device purchasing workflow — from public customer intake form through IMEI verification, condition grading, margin-tracked purchase, inventory listing, and resale tracking.

#### 6.2.1 Customer-Facing Buy-Back Form

A public SSR-rendered page (shareable link + embeddable widget) that customers fill out before visiting the shop:

**Step 1 — Personal Details**
- Full name
- Mobile number (UK format, verified via OTP)
- Email address
- Full address with Royal Mail postcode lookup

**Step 2 — ID Verification**
- ID type: Passport / Driving Licence / National ID / Other
- ID photo upload (front + back if applicable) — stored encrypted in Cloudflare R2
- GDPR consent checkbox with privacy notice link
- Age confirmation (18+ required)

**Step 3 — Device Details**
- Brand (dropdown: Apple, Samsung, Google, Huawei, OnePlus, Xiaomi, Sony, Nokia, Motorola, Other)
- Model (dynamic dropdown based on brand, from device database)
- IMEI number (15-digit, Luhn algorithm validated, format check)
- Storage capacity
- Colour
- Device condition: Excellent / Good / Fair / Poor (with photo guide for each grade)
- Known issues (free text + common issue checkboxes: cracked screen, battery issue, water damage, etc.)
- Accessories included: original charger, original box, earphones

**Step 4 — Payment Preference**
- Preferred method: Cash (in-store) / Bank Transfer
- If bank transfer: account name, sort code, account number
- Preferred appointment time (optional)

**Post-submission:**
- IMEI check triggered immediately on submission
- Customer receives email confirmation with submission summary
- Shop notified of new buy-back submission
- Auto-rejected submissions trigger immediate customer notification with reason

#### 6.2.2 IMEI Verification Engine

Primary integration: **CheckMEND API** (UK standard — used by UK police forces, GSMA-connected)

**Checks performed:**
1. Blacklist status (stolen/lost — UK Police National Computer via CheckMEND)
2. Network blacklist (carrier-level block)
3. Outstanding finance check (HP/conditional sale agreements — critical for UK market)
4. Find My iPhone / Google FRP activation lock status
5. Network lock / carrier lock status
6. Warranty status
7. Original carrier identification

**Decisioning logic:**
- **AUTO-REJECT:** Blacklisted (stolen) → instant rejection, flag for potential police report
- **AUTO-REJECT:** Financed device (outstanding HP/conditional sale) → reject with explanation
- **FLAG FOR REVIEW:** FRP/iCloud locked → manual review required
- **FLAG FOR REVIEW:** Network locked → manual decision (may reduce price)
- **APPROVED:** Clean device → proceed to pricing

**Audit trail:**
- Full CheckMEND response stored against buy-back record
- "Due diligence certificate" generated for each approved purchase
- Accessible by police if device later reported stolen

#### 6.2.3 In-Store Buy-Back Processing

For walk-in customers (no pre-submission):
1. Staff opens buy-back form in dashboard (populated mode)
2. Scan/enter IMEI → auto-populate device details
3. Run IMEI check (real-time)
4. Condition assessment with photo capture
5. System suggests buy price based on: model, storage, condition, market rates (configurable pricing matrix)
6. Manager/owner sets final buy price
7. Customer details captured (or linked to existing CRM record)
8. Payment processed: cash counted or bank transfer initiated

#### 6.2.4 Pricing & Margin Tracking

- **Buying price:** Set by staff (AI-suggested based on condition/model/market)
- **Selling price:** Recorded when device is resold
- **Per-device profit:** `Selling Price - Buying Price - Any Repair Costs`
- **Margin %:** `(Profit / Selling Price) × 100`
- **Brand-level margin analysis:** Average margin by brand, model, condition grade
- **ROI report:** Monthly/yearly return on buy-back investment

#### 6.2.5 Device Ageing & Alerts

- Device status tracked from purchase date
- **30-day alert:** Flag devices unsold after 30 days
- **60-day alert:** Push notification to owner with suggested price reduction (AI-generated)
- **90-day alert:** Urgent flag — potential dead stock, AI suggests markdown percentage
- **Ageing report:** All devices by age bucket (0–30, 31–60, 61–90, 90+ days)
- **AI suggestion:** "iPhone 13 128GB (Good) — market average has dropped 8% since you bought it. Consider reducing from £280 to £260."

#### 6.2.6 Multi-Shop Device Transfers

- Transfer device between branches with full audit trail
- Transfer record: source shop, destination shop, IMEI, device details, transfer date, employee, reason
- Stock auto-adjusts at both locations on confirmation
- Transfer history on every device record

#### 6.2.7 Investment Reporting

- **Monthly:** Total buy-back spend, number of devices, avg cost per device, avg days to sell
- **Yearly:** Total investment, total resale revenue, overall ROI, by brand breakdown
- **Ageing:** Inventory by age bucket with unrealised value calculation
- **Pipeline:** Devices by status (listed, awaiting repair, ready to sell)

#### Data Model

```typescript
BuyBack {
  id: UUID
  tenantId: UUID
  shopId: UUID
  employeeId: UUID
  // Customer
  customerName: string
  customerPhone: string
  customerEmail: string
  customerAddress: Address
  idType: string
  idImageUrls: string[]          // encrypted R2 URLs
  // Device
  deviceBrand: string
  deviceModel: string
  imei: string
  storage: string
  colour: string
  condition: "excellent" | "good" | "fair" | "poor"
  accessories: string[]
  knownIssues: string[]
  devicePhotos: string[]
  // IMEI verification
  imeiCheckResult: IMEICheckResult
  imeiCheckTimestamp: DateTime
  imeiCertificateUrl: string
  // Pricing
  suggestedBuyPrice: number | null
  buyingPrice: number | null
  sellingPrice: number | null
  repairCost: number | null
  profit: number | null
  marginPercent: number | null
  // Payment
  paymentMethod: "cash" | "bank_transfer"
  bankDetails: BankDetails | null
  paymentReference: string | null
  // Workflow
  status: BuyBackStatus
  rejectionReason: string | null
  notes: string | null
  // Timestamps
  submittedAt: DateTime
  approvedAt: DateTime | null
  purchasedAt: DateTime | null
  listedAt: DateTime | null
  soldAt: DateTime | null
  createdAt: DateTime
  updatedAt: DateTime
}

enum BuyBackStatus {
  SUBMITTED       // customer form submitted
  IMEI_CHECKING   // IMEI verification in progress
  APPROVED        // IMEI clean, awaiting staff processing
  REJECTED        // blacklisted/financed/staff rejected
  PURCHASED       // payment made to customer
  LISTED          // added to inventory for sale
  REPAIR_NEEDED   // needs repair before listing
  SOLD            // resold to end customer
}

IMEICheckResult {
  blacklisted: boolean
  blacklistReason: string | null
  financed: boolean
  financedBy: string | null
  fmiLocked: boolean         // Find My iPhone
  frpLocked: boolean         // Google FRP
  networkLocked: boolean
  carrier: string | null
  warrantyStatus: string
  checkProvider: string      // "checkmend" | "imei.info"
  certificateId: string
  rawResponse: JSON
}
```

---

### 6.3 Inventory & Stock Management

#### Overview
Comprehensive stock management with serialised IMEI tracking for devices, barcode generation, automatic quantity adjustments, and low-stock alerting.

#### Product Categories

| Category | Sub-types | Serialised? |
|---|---|---|
| Phones | New, Refurbished, Used | Yes (IMEI) |
| Tablets | New, Refurbished, Used | Yes (IMEI) |
| Laptops | New, Refurbished, Used | Yes (serial) |
| Smartwatches | New, Used | Optional |
| Accessories | Cables, Cases, Screen Protectors, Chargers, Earphones, Power Banks | No |
| Spare Parts | Screens, Batteries, Charging Ports, Cameras | No |

#### Accessory Attribute System

Flexible key-value attribute system per category:
- **Cables:** Type (Lightning/USB-C/Micro-USB), Length, Brand, Colour
- **Cases:** Compatible model, Material (silicone/leather/clear), Brand, Colour
- **Screen Protectors:** Compatible model, Type (tempered glass/film), Brand
- **Chargers:** Type (wall/car/wireless), Wattage, Brand
- **Earphones:** Type (wired/wireless/TWS), Brand, Connector

#### Barcode System

- **Generation:** Auto-generate Code 128 barcodes for all products/SKUs using `bwip-js`
- **Printing:** Thermal label printing (Zebra ZD220, Brother QL-820NWB compatible)
- **Label templates:** Customisable with shop logo, product name, price, barcode
- **Scanning:** Via USB barcode scanner or phone camera (html5-qrcode) for:
  - Quick sale lookup
  - Stock takes
  - Delivery receiving
  - Inter-shop transfers
- **Batch operations:** Generate and print labels for multiple items at once

#### Stock Management

- **Auto-decrement:** On every sale, stock quantity reduces automatically
- **Auto-increment:** On buy-back purchase, inventory increases automatically
- **Manual adjustment:** With reason code (damaged, lost, found, correction) — manager approval required
- **Stock Take:** Physical count mode — scan items, system compares to expected, generates variance report with discrepancy value
- **Transfer:** Move stock between shops with full audit trail

#### Supplier Management (Phase 2)

- Supplier database with contact details, payment terms
- Purchase orders: create, send, receive
- Auto-increment stock on PO receipt
- Supplier performance tracking (delivery times, accuracy)

#### Alerts

- **Low Stock:** Configurable threshold per product (default: 5 units). Push notification + dashboard badge.
- **Out of Stock:** Immediate notification when quantity = 0
- **Device Ageing:** Cross-reference with buy-back module — flag devices held >30/60/90 days
- **AI Reorder Suggestion:** "Based on sales velocity, order 20 units of Samsung USB-C cables by next Friday"

#### Data Model

```typescript
Product {
  id: UUID
  tenantId: UUID
  shopId: UUID                   // null = shared catalogue
  sku: string                    // auto-generated
  barcode: string                // Code 128
  name: string
  category: ProductCategory
  subCategory: string | null
  brand: string
  model: string | null
  attributes: Record<string, string>  // flexible: colour, size, capacity, etc.
  costPrice: number
  sellingPrice: number
  vatRate: 0 | 5 | 20
  quantity: number
  lowStockThreshold: number
  supplierId: UUID | null
  imei: string | null            // serialised devices only
  condition: "new" | "refurbished" | "used" | null
  buyBackId: UUID | null         // if originated from buy-back
  isActive: boolean
  createdAt: DateTime
  updatedAt: DateTime
}

StockMovement {
  id: UUID
  tenantId: UUID
  shopId: UUID
  productId: UUID
  type: StockMovementType
  quantity: number               // positive = in, negative = out
  balanceBefore: number
  balanceAfter: number
  reference: string              // sale ID, PO number, transfer ID, etc.
  employeeId: UUID
  notes: string | null
  createdAt: DateTime
}

enum StockMovementType {
  SALE | RETURN | BUYBACK_IN | PURCHASE_ORDER | MANUAL_IN | MANUAL_OUT
  TRANSFER_IN | TRANSFER_OUT | WRITE_OFF | STOCK_TAKE_ADJUSTMENT
}
```

---

### 6.4 Customer & CRM Module

#### Overview
Unified customer database linking all interactions — sales, repairs, buy-backs — with automated communication and complete history.

#### Customer Record

- Name, primary phone, secondary phone, email, address
- Tags: VIP, Trade Customer, Problematic, Wholesale Buyer
- Internal notes (staff-only)
- GDPR consent status and timestamp
- Date of first/last visit
- Total spend (lifetime value)

#### Customer Search

Search by: name, phone number, email address, device IMEI (shows linked repair/buy-back), receipt number

#### Customer Timeline

Chronological view of all interactions:
- Sales with receipt numbers and amounts
- Repairs with status and device details
- Buy-backs with device details and amounts paid
- SMS/email notifications sent

#### Repeat Customer Recognition

- POS: search customer by phone/name before sale
- Repair intake: search/link to existing customer
- Buy-back: auto-match on phone number or email

#### Receipt Generation

- Auto-generated on every sale as PDF
- Shop branding: logo, name, address, VAT number, phone
- Contents: itemised list, VAT breakdown, payment method, receipt number, date/time, employee name
- Delivery: auto-emailed to customer, thermal/A4 print option
- Repair receipts: job summary with device details and price breakdown

---

### 6.5 Repair Job Management

#### Overview
Full repair lifecycle tracking with Kanban board, encrypted device credential storage, parts tracking, and automated customer communication.

#### Repair Intake

**Device Details:**
- Customer (link to CRM or quick-create)
- Device: brand, model, IMEI, colour, storage
- **Security info:** PIN, passcode, pattern (stored AES-256 encrypted — visible only to assigned technician)
- Device condition photos at intake (stored in R2)
- Problem description (free text)
- Problem categories: Screen Damage, Battery, Water Damage, Charging Port, Speaker/Mic, Camera, Software, Other
- Product category: Phone, Tablet, Laptop, Watch, Accessory, Other

**Pricing:**
- Diagnostic fee (optional — refunded if customer accepts repair)
- Estimated repair cost (shown to customer, requires approval for variance >20%)
- Parts cost (tracked separately for margin analysis)
- Labour cost
- Advance payment at intake
- Balance due on collection

#### Repair Kanban Board

Visual drag-and-drop board with columns representing repair status:

```
┌──────────────┬──────────────┬───────────────┬──────────────┬──────────────┬──────────────┬──────────────┐
│   Received   │  Diagnosing  │ Awaiting Parts│  Repairing   │   Testing    │  Ready for   │  Collected   │
│              │              │               │              │              │  Collection  │              │
│ [REP-0042]   │ [REP-0039]   │ [REP-0035]    │ [REP-0028]   │ [REP-0021]   │ [REP-0015]   │ [REP-0010]   │
│ iPhone 15    │ Samsung S24  │ iPhone 14 Pro │ Google Pixel │ MacBook Pro  │ iPhone 13    │ iPad Air     │
│ Cracked Screen│ Battery     │ Screen        │ 8 Battery    │ Screen       │ Charging Port│              │
│ John Smith   │ Ahmed Ali    │ Sarah Jones   │ Tom Brown    │ Emma Davis   │ Mark Wilson  │              │
└──────────────┴──────────────┴───────────────┴──────────────┴──────────────┴──────────────┴──────────────┘
```

- Drag cards between columns to update status
- Card shows: ticket number, device, issue summary, customer name, days in shop
- Click card to open full repair details
- Filter by technician, device type, days in shop
- Colour coding: green (on time), amber (approaching deadline), red (overdue)

#### Automated Notifications

| Trigger | Channel | Message |
|---|---|---|
| Repair received | Email | Confirmation with ticket number and estimated completion |
| Status: Diagnosing | SMS | "We've started diagnosing your [device]. We'll update you shortly." |
| Status: Awaiting Parts | SMS | "Parts ordered for your [device]. Estimated completion: [date]." |
| Status: Ready for Collection | SMS + Email | "Your [device] is repaired and ready for collection!" |
| Not collected after 14 days | SMS | "Reminder: your [device] is waiting for collection." |
| 48h post-collection | Email | Satisfaction check with review request |

#### Parts Tracking

- Log parts used per repair (from inventory)
- Auto-decrement spare parts stock
- Parts cost tracked for gross margin calculation
- Low parts stock alerts

#### Repair Reports

- Jobs by status, technician, device category
- Average repair time (intake to ready)
- Revenue: parts + labour breakdown
- Common repair types (ranked by frequency and revenue)
- Technician performance: jobs completed, avg time, revenue generated

#### Data Model

```typescript
RepairJob {
  id: UUID
  tenantId: UUID
  shopId: UUID
  ticketNumber: string           // REP-2026-XXXX
  customerId: UUID
  // Device
  deviceBrand: string
  deviceModel: string
  deviceImei: string | null
  deviceColour: string
  deviceStorage: string | null
  devicePin: string              // AES-256 encrypted
  devicePhotos: string[]         // R2 URLs
  // Problem
  problemDescription: string
  problemCategories: string[]
  productCategory: RepairCategory
  // Pricing
  diagnosticFee: number
  estimatedCost: number
  actualCost: number | null
  partsCost: number
  labourCost: number
  advancePayment: number
  balanceDue: number
  advancePaymentMethod: "cash" | "card" | null
  finalPaymentMethod: "cash" | "card" | null
  // Workflow
  status: RepairStatus
  technicianId: UUID
  estimatedCompletion: DateTime
  completedAt: DateTime | null
  collectedAt: DateTime | null
  notes: string | null
  // Timestamps
  createdAt: DateTime
  updatedAt: DateTime
}

enum RepairStatus {
  RECEIVED | DIAGNOSING | AWAITING_PARTS | REPAIRING | TESTING | READY | COLLECTED | CANCELLED
}
```

---

### 6.6 AI Assistant Module

#### Overview
Conversational AI agent (powered by Anthropic Claude) integrated into the dashboard, enabling shop owners and managers to query business data in plain English, generate reports, and get actionable insights.

#### Natural Language Query Examples

**Sales:**
- "What were total card sales last Tuesday?"
- "Compare this month's revenue to January"
- "Show me the top 10 products sold this tax year"
- "Which employee had the highest sales in the last 30 days?"
- "What's our busiest hour on Saturdays?"

**Tax & Financial:**
- "What's my estimated VAT liability for Q1?"
- "Generate a tax summary for the year ending April 5, 2026"
- "Show cash vs card split for the current tax year"
- "What were total sales in each UK tax quarter this year?"

**Inventory:**
- "Which products are low on stock?"
- "How many iPhone 15 Pro cases do we have across all shops?"
- "What's the total value of current stock?"
- "Show slow-moving inventory (no sale in 30 days)"

**Buy-Back:**
- "What's our average margin on Samsung devices?"
- "Show total buy-back investment this month"
- "Which devices have been in stock for over 60 days?"
- "What's the ROI on our buy-back programme this year?"

**Repairs:**
- "How many repairs are awaiting parts right now?"
- "What's our average repair turnaround time this month?"
- "Show revenue from repairs vs device sales"

**AI-Generated Insights:**
- "Based on current trends, your projected revenue for next month is £X"
- "You have £4,200 tied up in 15 devices aged over 60 days — consider a promotion"
- "iPhone 14 cases are running low — reorder suggestion: 20 units"

#### Implementation

- Chat interface: slide-in panel from dashboard sidebar, or full-page
- Claude API with function calling / tool use for safe, parameterised data retrieval
- All AI-generated SQL is read-only SELECT with row limits (no data modification via AI)
- Context window: includes shop metadata, current date, tax year context, user role
- Conversation history: stored per user, last 30 days
- Response export: save any AI response as PDF or share with accountant
- Rate limits: 50 queries/day (Starter), unlimited (Professional+)

---

## 7. System Relationships & Automations

### Event-Driven Automations

```
Sale Created
  → Inventory: Decrement product stock quantity
  → CRM: Link sale to customer record (if identified)
  → CRM: Generate PDF receipt and email to customer
  → Reports: Update daily/monthly totals in real-time
  → Alerts: Check if any product now below low-stock threshold
  → Employee: Update real-time sales target progress

Buy-Back Purchased
  → Inventory: Create product listing (status: listed)
  → CRM: Create or update customer record
  → Reports: Update buy-back investment tracker
  → IMEI: Store verification result and certificate
  → Notifications: Confirm purchase to customer via email

Repair Status Changed
  → CRM: Update job record with new status and timestamp
  → Notifications: Send status-appropriate SMS/email to customer
  → Reports: Update repair pipeline metrics
  → Follow-up: If COLLECTED, schedule 48-hour satisfaction check

Stock Below Threshold
  → Alerts: Push notification to owner/manager
  → AI: Auto-generate reorder suggestion based on sales velocity
  → Dashboard: Add item to low-stock alert list

Device Transfer Confirmed
  → Source Shop: Decrement stock quantity with audit record
  → Destination Shop: Increment stock quantity with audit record
  → Reports: Both shops' stock reports updated

Buy-Back > 60 Days Unsold
  → AI: Generate price reduction suggestion
  → Alerts: Push notification to owner
  → Reports: Flag in ageing report

Payment Terminal Settled
  → Sales: Match card payments to transactions
  → Reports: Update daily card total with terminal confirmation
```

---

## 8. Technical Requirements

### Technology Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Frontend** | Next.js 15 (App Router) + TypeScript | SSR for buy-back form SEO, App Router for modern patterns, RSC for performance |
| **UI Components** | shadcn/ui + TailwindCSS | Accessible, customisable, consistent design system |
| **Backend API** | Express.js + TypeScript | Flexible, mature, extensive middleware ecosystem |
| **Database** | PostgreSQL (Neon) | ACID compliance, JSON support, full-text search, proven at scale |
| **ORM** | Drizzle ORM | Type-safe, PostgreSQL-native, excellent migrations |
| **Cache** | Redis (Upstash) | Session storage, API caching, real-time pub/sub |
| **Auth** | Auth.js (NextAuth v5) | Email/password + magic link, session management, multi-tenant support |
| **File Storage** | Cloudflare R2 | S3-compatible, no egress fees, edge-native, GDPR-friendly (EU region) |
| **Email** | Resend | Developer-first, React Email templates, excellent deliverability |
| **SMS** | Twilio | Industry standard, UK numbers, reliable delivery |
| **AI** | Anthropic Claude API | Best reasoning for financial queries, tool use for safe data retrieval |
| **Barcode** | bwip-js (gen) + html5-qrcode (scan) | No external dependency, client-side scanning via camera |
| **PDF** | React PDF / Puppeteer | Receipts, reports, due-diligence certificates |
| **Card Payments** | Stripe (billing) + SumUp/Zettle (terminal) | Stripe for subscriptions, SumUp/Zettle for in-store |
| **IMEI** | CheckMEND API | UK police standard, GSMA-connected, finance check included |
| **Hosting** | Vercel (Next.js) + Railway (Express) | Managed, auto-scaling, preview deployments |
| **CI/CD** | GitHub Actions | Free for open-source equivalent, tight GitHub integration |
| **Monitoring** | Sentry + Plausible + BetterStack | Error tracking, privacy-first analytics, uptime monitoring |
| **Address Lookup** | Royal Mail PAF API / Ideal Postcodes | UK postcode → full address, reduces form errors |

### API Integrations

| Integration | Purpose | Priority | Notes |
|---|---|---|---|
| CheckMEND API | IMEI blacklist, finance, FRP check | P0 | UK police standard — essential for UK market |
| SumUp / Zettle API | Card terminal pairing and settlement sync | P0 | Widely used by UK independent shops |
| Resend | Transactional emails (receipts, repair updates, reports) | P0 | |
| Twilio | SMS notifications + OTP for buy-back form | P1 | |
| Anthropic Claude API | AI assistant natural language queries | P1 | |
| Royal Mail PAF / Ideal Postcodes | Address lookup in buy-back form | P1 | |
| HMRC MTD API | VAT return digital filing | P1 | Required for MTD compliance |
| Stripe | SaaS subscription billing for tenants | P0 | |
| Cloudflare R2 | Encrypted file storage (ID images, photos, PDFs) | P0 | |
| Xero / QuickBooks | Accounting integration export | P2 | Phase 2 |
| WhatsApp Business API | Repair status via WhatsApp | P3 | Phase 3 |

---

## 9. UK Regulatory Compliance

### 9.1 HMRC Making Tax Digital (MTD)

**Current Requirements:**
- **MTD for VAT** (mandatory since April 2022 for all VAT-registered businesses): Digital records of all sales and purchases; VAT returns filed digitally via HMRC-compatible software; no manual re-keying (digital links required)
- **MTD for Income Tax Self Assessment (ITSA)** (rolling out from April 2026 for self-employed income >£50,000): Quarterly updates to HMRC; end of period statement; final declaration

**ShopOS Implementation:**
- Direct HMRC MTD API integration for VAT return submission
- All sales digitally recorded with VAT breakdown at time of transaction
- Digital links: automated data flow between POS → reports → VAT return (no manual steps)
- Support: standard VAT, flat rate scheme, annual accounting
- Quarterly VAT summary aligned to HMRC-assigned VAT periods
- One-click VAT return preparation with review-before-submit workflow
- MTD bridging for legacy data import

### 9.2 UK GDPR — Data Protection

**Lawful basis for data processing:**
- Buy-back ID photos: Legal obligation (Theft Act 1968 due diligence) + Legitimate interest (fraud prevention)
- Sales records: Contract performance + Legal obligation (HMRC 7-year requirement)
- Customer contact data: Consent (marketing) + Contract performance (receipts, repair updates)
- Repair device credentials (PIN): Contract performance (repair service delivery)

**Data Retention Policy:**
| Data Type | Retention Period | Basis |
|---|---|---|
| Sales records | 7 years | HMRC legal requirement |
| Buy-back ID images | 2 years | Fraud prevention / due diligence |
| Customer contact data | 3 years after last interaction | Legitimate interest |
| Repair photos (device condition) | 6 months after collection | Contract / dispute resolution |
| Device PINs/passcodes | Deleted on collection | Contract performance only |
| IMEI check results | 5 years | Legal obligation (stolen goods) |
| Audit logs | 7 years | Legal obligation |

**Technical implementation:**
- Encrypted storage for all personal data (AES-256 at rest, TLS 1.3 in transit)
- ID images in Cloudflare R2 (EU region) with time-limited signed URLs (15 min expiry)
- Access logging for every ID image view (who, when, from what IP)
- Automated purge jobs for each data type at retention limit
- GDPR-compliant privacy notice on buy-back form
- Cookie consent management (essential cookies only, no tracking without consent)
- Subject Access Request (SAR) workflow — compile and export all customer data within 30 days
- Right to erasure — delete customer data subject to legal retention exceptions
- Data Processing Agreement template provided to shop owners (ShopOS = processor, shop = controller)
- Data Protection Impact Assessment (DPIA) documentation for buy-back ID processing

### 9.3 IMEI Checking — Legal Framework

**Legal context:**
- **Theft Act 1968, Section 22:** Handling stolen goods is a criminal offence; reasonable due diligence is a defence
- **NMPCU (National Mobile Phone Crime Unit):** Works with CheckMEND/GSMA to identify stolen devices
- **Outstanding finance:** Devices on HP/conditional sale legally belong to the finance company — buying them is handling stolen property

**ShopOS compliance:**
- CheckMEND integration as primary IMEI checker (UK police standard)
- Mandatory IMEI check before every buy-back (enforced in UI — cannot proceed without)
- Auto-rejection of blacklisted devices with logging
- Auto-rejection of financed devices with customer explanation
- Due diligence certificate generated and stored for each approved purchase
- Police report flag for blacklisted devices (owner prompted)
- Audit trail accessible by law enforcement on request (with appropriate legal process)

### 9.4 UK Tax Year

```
Tax Year: 6 April (Year N) → 5 April (Year N+1)

Q1:  6 April    → 5 July       (Spring)
Q2:  6 July     → 5 October    (Summer)
Q3:  6 October  → 5 January    (Autumn)
Q4:  6 January  → 5 April      (Winter)

Current rates:
- VAT Standard: 20%
- VAT Reduced:  5%
- VAT Zero:     0%
- Corporation Tax: 25% (profits >£250k), 19% (profits <£50k)
- Income Tax: 20% basic, 40% higher, 45% additional
```

All ShopOS reports default to tax-year view with calendar-year as secondary option.

---

## 10. Non-Functional Requirements

### Performance Targets

| Metric | Target |
|--------|--------|
| Page load (LCP) | < 2 seconds |
| API response time (p95) | < 200ms |
| Search results | < 500ms |
| Report generation (any range) | < 5 seconds |
| AI assistant response | < 8 seconds |
| Barcode scan to product lookup | < 300ms |
| Concurrent users supported | 500+ (multi-tenant) |
| Products per shop | 10,000+ |
| System uptime | 99.9% (monthly) |

### Security

- All data encrypted at rest (AES-256) and in transit (TLS 1.3)
- Device PINs/passcodes: AES-256 encrypted, key stored separately, only decrypted on technician view
- ID images: Encrypted in Cloudflare R2, accessed only via 15-minute signed URLs, every access logged
- RBAC enforced at API middleware level (not just UI)
- Row-level tenant isolation: every DB query includes `WHERE tenant_id = ?`
- Rate limiting: public buy-back form (10 req/min/IP), API (100 req/min/user), AI (50 queries/day Starter)
- Input validation: Zod schemas on every API endpoint
- Audit log for all sensitive operations: price changes, refunds, ID image access, data exports, user management
- Session timeout: 8 hours (configurable per shop)
- IMEI check certificate stored permanently (cannot be deleted — police requirement)

### Multi-Tenancy

- Full tenant isolation at database level (tenant_id on all tables)
- Tenant-specific settings: branding, receipt templates, tax rates, notification preferences
- Shared product catalogue with per-tenant pricing overrides
- Centralised dashboard for owners with multiple shops
- Per-shop employee management and targets
- Cross-shop reporting for multi-location owners

### Offline / PWA

- Progressive Web App with service worker
- Offline sale queue: transactions cached locally and synced when connection restored
- Local product catalogue cached for offline barcode lookup
- Offline status indicator in UI
- Conflict resolution on sync (timestamp-based)

### Accessibility

- WCAG 2.1 AA compliance
- Full keyboard navigation
- Screen reader compatible (ARIA labels throughout)
- High contrast mode
- Minimum touch target: 44×44px (tablet/mobile POS use)
- Multi-language ready (i18n structure — English UK primary)

---

## 11. UI/UX Requirements

### Design Principles

1. **Speed-first:** < 3 taps to complete a sale from product search to receipt
2. **Glanceable dashboard:** All key metrics visible without scrolling on 1080p screen
3. **Touch-optimised:** Designed for tablet POS use as well as desktop
4. **Dark-mode default:** Reduces eye strain in shop environments (LED lighting)
5. **Forgiving:** Undo/confirm for destructive actions, easy corrections
6. **Consistent:** Same patterns, same icons, same terminology across all modules

### Key Screens

| Screen | Purpose | Key Interactions |
|---|---|---|
| **Dashboard** | KPI overview, alerts, today's summary | Glanceable metrics, recent transactions, alerts |
| **POS** | Process sales | Barcode scan, cart management, payment, receipt |
| **Buy-Back Wizard** | Process in-store buy-back | Step form, IMEI scan, condition photos |
| **Buy-Back Form** | Customer self-service | Public SSR page, OTP, ID upload |
| **Repair Board** | Kanban repair tracking | Drag-and-drop, status filters, quick view |
| **Inventory Grid** | Stock management | Filter/sort, inline editing, barcode print |
| **Customer Profile** | Customer history | Timeline, linked records, contact |
| **AI Chat** | Natural language queries | Chat interface, export response |
| **Reports** | Analytics and reporting | Date range pickers, charts, export |
| **Settings** | Shop and system config | Shop details, users, integrations, billing |

### Theme

- Dark mode default, light mode toggle
- Brand-customisable accent colour per tenant
- System font stack for performance (no Google Fonts dependency)
- Consistent 8px spacing grid
- Clear visual hierarchy with reduced motion option

---

## 12. Pricing Strategy

Based on competitive analysis of 10 UK and global competitors:

| Tier | Price | Users | Shops | Key Features |
|------|-------|-------|-------|-------------|
| **Starter** | £39/month | 3 | 1 | POS, Inventory, Basic Reports, Receipt Generation, Buy-Back (basic), Barcode |
| **Professional** | £89/month | 10 | 1 | All Starter + Buy-Back (full with IMEI), Repair Kanban, AI Assistant, HMRC MTD, Customer Notifications, Employee Targets |
| **Business** | £159/month | Unlimited | Up to 5 | All Professional + Multi-shop Dashboard, Inter-branch Transfers, Centralised Reporting, Priority Support |
| **Enterprise** | Custom | Unlimited | 5+ | All Business + API Access, White-label, Custom Integrations, Dedicated Account Manager, SLA |

**Annual billing discount:** 2 months free (equivalent to ~17% discount)

**Add-ons:**
- Additional shops (Business): £25/month/shop
- IMEI check credits: Included in Professional+ (usage-billed to Starter at £0.50/check)
- SMS credits: 500 included in Professional+; additional £0.05/SMS
- Onboarding service: £299 (data migration, training, setup)

**Competitive positioning:**
- Cheaper than RepairShopr ($139/user) and mHelpDesk ($169/month)
- Comparable to RepairDesk ($99) but with far more UK-specific value
- More expensive than Square (free) and iRepair ($29) — justified by phone-shop features
- Undercuts Lightspeed ($89+) despite more relevant features

---

## 13. Go-to-Market Strategy

### Target Segment Priority

1. **Phase 1:** Single-shop independent phone/tech retailers, UK, 1–3 staff — most pain, most underserved
2. **Phase 2:** Multi-shop independent retailers (2–5 locations) — highest ARR per customer
3. **Phase 3:** Repair-focused businesses (devices + laptops + tablets) — expand feature set to suit

### Key Messages

| Audience | Message |
|---|---|
| Shop Owner | "Stop losing money on stolen phones. Know your margins. File your VAT in minutes." |
| Finance-conscious owner | "Replace 4 tools with 1. Cut your software costs in half." |
| Compliance-anxious owner | "Built for UK law. HMRC MTD ready. GDPR compliant." |
| Growth-focused owner | "See which shop, which employee, which device earns you the most — in plain English." |

### Acquisition Channels

1. **SEO content:** Target "UK phone shop POS", "repair shop management software UK", "buy back shop software UK", "HMRC MTD repair shop" — greenfield keyword territory
2. **YouTube:** "How to run a phone shop in the UK" — practical tutorials with ShopOS as the tool
3. **Facebook Groups:** UK Phone Shop Owners, Mobile Phone Repair UK — demonstrate with screen recordings, answer questions
4. **Trade shows:** ICT Spring, Mobile News Awards, independent retailer expos
5. **Partner channel:** CheckMEND, SumUp, Zettle — co-marketing as integrated solution
6. **Referral programme:** £50 credit for each referred shop that activates

### Onboarding

- 14-day free trial (no credit card required)
- Guided setup wizard (shop details → products → team → first sale)
- Sample data pre-loaded for evaluation
- Video walkthroughs per module
- Live chat support during business hours
- Onboarding service (paid) for data migration from spreadsheets/old systems

---

## 14. Roadmap

### MVP (Phase 1 — Weeks 1–14)
POS, Inventory, Buy-Back (with IMEI), Repair Kanban, Basic CRM, Receipts, UK Tax Year Reports

### Growth (Phase 2 — Weeks 15–26)
AI Assistant, HMRC MTD, Multi-shop, Employee Targets, SMS/Email Notifications, PWA, SumUp/Zettle Integration, Stripe Billing

### Post-Launch (Months 7–12)

| Feature | Description |
|---------|-------------|
| Supplier Management | Purchase orders, delivery tracking, supplier performance |
| Loyalty Programme | Points-based, tier rewards, referral tracking |
| Xero / QuickBooks Integration | Direct sync for accounting |
| Customer Portal | Self-service: repair tracking, purchase history, buy-back form |
| Multi-Branch Analytics | Comparative dashboards across all shops |
| Advanced Buy-Back Pricing | Market rate API integration, AI-suggested buy prices |

### Year 2+

| Feature | Description |
|---------|-------------|
| B2B Marketplace | Inter-shop device trading platform |
| WhatsApp Integration | Repair status via WhatsApp Business API |
| eBay / Amazon Listing | One-click listing of refurbished devices |
| Trade-In Kiosk Mode | Customer-facing self-service kiosk |
| Staff Scheduling | Shift management integrated with sales data |
| Predictive Pricing | AI buy-back pricing based on live market data |

---

## 15. Success Metrics

### Product Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Sale processing time | < 30 seconds | Average time from scan to receipt |
| Daily reconciliation accuracy | > 99.5% | System total vs actual cash+card |
| Stock accuracy | > 98% | System vs physical count variance |
| Repair turnaround time | < 48 hours | Average intake to ready |
| Customer notification rate | 100% | All repair status changes notified |
| IMEI check rate | 100% | Every buy-back verified |
| System uptime | 99.9% | Monthly availability |
| AI query response time | < 8 seconds | p95 |

### Business Metrics

| Metric | 6-Month Target | 12-Month Target |
|--------|----------------|-----------------|
| Active paying tenants | 50 | 200 |
| MRR | £4,000 | £16,000 |
| ARR | £48,000 | £192,000 |
| NPS | > 50 | > 60 |
| Churn rate | < 5%/month | < 3%/month |
| Avg revenue per tenant | £80/month | £90/month |

---

## 16. Glossary

| Term | Definition |
|------|-----------|
| **IMEI** | International Mobile Equipment Identity — unique 15-digit device identifier |
| **Buy-Back** | Purchasing a used device from a customer for resale |
| **CheckMEND** | UK's primary IMEI checking service, connected to UK Police National Computer |
| **SKU** | Stock Keeping Unit — unique product identifier |
| **POS** | Point of Sale — the checkout/transaction system |
| **FRP** | Factory Reset Protection — Google's anti-theft lock |
| **FMiP** | Find My iPhone — Apple's activation lock system |
| **MTD** | Making Tax Digital — HMRC's digital tax reporting requirement |
| **VAT** | Value Added Tax — UK consumption tax (standard rate: 20%) |
| **HMRC** | His Majesty's Revenue and Customs — UK tax authority |
| **PWA** | Progressive Web App — web app with native-like offline capabilities |
| **OTP** | One-Time Password — SMS verification code |
| **GDPR** | General Data Protection Regulation (UK version: UK GDPR) |
| **SAR** | Subject Access Request — GDPR right to obtain personal data held |
| **DPIA** | Data Protection Impact Assessment — required for high-risk data processing |
| **PAF** | Postcode Address File — Royal Mail's authoritative UK address database |
| **SumUp / Zettle** | Card terminal providers popular with UK small businesses |
| **Kanban** | Visual workflow management using columns representing stages |
| **Tenant** | A business (shop owner) with one or more physical shops on the platform |
| **Drizzle ORM** | TypeScript-native PostgreSQL ORM with type-safe query builder |
| **RSC** | React Server Components — Next.js 15 server-side rendering primitive |
| **HP** | Hire Purchase — UK consumer credit agreement for device financing |

---

*This document supersedes PRD v1.0 (February 2026). It incorporates competitive analysis of 10 market competitors, UK regulatory research (HMRC MTD, UK GDPR, IMEI law), market sizing, pricing strategy, and go-to-market planning.*

*Built by Rivendell AI — Your Subscription-Based Tech Partner*
