# Rivendell ShopOS — Product Requirements Document

**Version:** 1.0
**Date:** February 2026
**Author:** Rivendell AI
**Status:** Draft

---

## 1. Executive Summary

**Rivendell ShopOS** is an all-in-one cloud-based management platform designed specifically for independent mobile phone shops, tech repair centres, and electronics retailers across the UK and EU. It replaces fragmented paper records, Excel spreadsheets, and disconnected tools with a single intelligent system that handles sales, buying/buy-back, inventory, customer management, repairs, and AI-powered reporting.

### Vision

To become the operating system for every independent tech shop — eliminating manual processes, ensuring HMRC compliance, and giving shop owners real-time visibility into every aspect of their business.

### Target Market

- Independent mobile phone shops (UK: ~12,000+ outlets)
- Tech repair centres and phone accessory retailers
- Multi-branch electronics retailers (2–10 locations)
- Buy-back and refurbishment businesses
- Market: UK primary, EU secondary

### Key Differentiators

- **AI-Powered Reporting** — Natural language queries for sales, tax, and performance insights
- **Integrated Buy-Back System** — End-to-end device purchasing with IMEI verification and margin tracking
- **UK Tax Year Alignment** — Automatic HMRC-compliant reporting (April 6 – April 5)
- **Multi-Shop Support** — Inter-branch device transfers, centralised stock visibility
- **Repair Job Tracking** — Full lifecycle from intake to customer notification

---

## 2. Problem Statement

### Current Pain Points

| Problem | Impact |
|---------|--------|
| Paper/Excel-based sales records | Inaccurate daily totals, lost transactions, no audit trail |
| No digital inventory tracking | Stock discrepancies, over-ordering, theft undetected |
| Manual buy-back process | Inconsistent pricing, no margin visibility, compliance risk |
| No IMEI verification | Risk of purchasing stolen devices, legal liability |
| Disconnected repair tracking | Lost customer devices, no status updates, payment disputes |
| No tax-aligned reporting | Manual tax calculations, HMRC penalties, accountant fees |
| Employee performance blind spots | No sales targets, no accountability, no commission tracking |
| Multi-shop chaos | No visibility across branches, manual stock transfers |

### Current Workflow (Typical Shop)

1. Sales recorded in a notebook or basic Excel sheet
2. Buy-back prices negotiated ad-hoc with no market data
3. Inventory counted manually (weekly/monthly)
4. Repairs tracked on paper tickets or WhatsApp messages
5. Tax returns assembled manually at year-end
6. No customer database — repeat customers unrecognised

---

## 3. Target Users & Roles

### User Personas

| Role | Description | Access Level |
|------|-------------|-------------|
| **Shop Owner** | Business owner, needs full visibility and control | Full access — all modules, settings, reports, user management |
| **Manager** | Day-to-day operations lead | Operations access — sales, inventory, repairs, staff targets, reports (no billing/system settings) |
| **Employee** | Sales associate / repair technician | Limited access — process sales, log repairs, view own targets (no reports, no pricing changes) |
| **Customer** | Self-service for buy-back submissions | Public form — submit device details for buy-back quote |

### Permission Matrix

| Feature | Owner | Manager | Employee | Customer |
|---------|-------|---------|----------|----------|
| Dashboard & Reports | ✅ | ✅ | ❌ | ❌ |
| Process Sales | ✅ | ✅ | ✅ | ❌ |
| Modify Prices | ✅ | ✅ | ❌ | ❌ |
| Buy-Back Approval | ✅ | ✅ | ❌ | ❌ |
| Inventory Management | ✅ | ✅ | View Only | ❌ |
| Repair Job Management | ✅ | ✅ | ✅ | View Status |
| Staff & Targets | ✅ | ✅ | View Own | ❌ |
| System Settings | ✅ | ❌ | ❌ | ❌ |
| Submit Buy-Back Form | ❌ | ❌ | ❌ | ✅ |

---

## 4. Core Modules

### 4.1 Sales Management

#### Overview
Digital point-of-sale system tracking every transaction with cash/card split, employee attribution, and automatic tax-year-aligned reporting.

#### Features

**Transaction Recording**
- Record sale with: product, quantity, price, payment method (cash/card/mixed), employee, timestamp
- Auto-generate sequential receipt numbers
- Apply discounts (percentage or fixed amount) with manager approval for >20%
- VAT calculation (standard 20%, reduced 5%, zero-rated)
- Barcode scanning for quick product lookup

**Payment Tracking**
- Cash drawer tracking with opening/closing balance
- Card payment integration (SumUp, Zettle, Square)
- Mixed payment support (partial cash + partial card)
- Daily cash reconciliation report
- Refund processing with reason code and manager approval

**Reporting**
- **Daily Report:** Total sales, cash total, card total, transaction count, average sale value
- **Monthly Report:** Revenue breakdown by category, top-selling products, comparison to previous month, employee performance
- **Yearly Report:** Full tax-year summary (April 6 – April 5), quarterly breakdowns, category trends
- **Custom Report:** Date range picker with filterable dimensions

**AI Agent Integration**
- Natural language query: "What were total card sales in January?"
- Auto-calculate tax liability estimates
- Generate end-of-year summaries for accountant
- Anomaly detection: flag unusual transaction patterns
- Predictive: "Based on trends, expected revenue next month is £X"

**Employee Performance**
- Individual sales targets (daily/weekly/monthly)
- Real-time progress tracking with dynamic pie/bar charts
- Commission calculation (configurable percentage tiers)
- Leaderboard view across employees
- Performance comparison: current period vs previous

#### Data Model

```
Sale {
  id: UUID
  receiptNumber: string (auto-generated, sequential)
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
  createdAt: DateTime
  refundedAt: DateTime | null
  refundReason: string | null
}

SaleItem {
  productId: UUID
  name: string
  quantity: number
  unitPrice: number
  vatRate: 0 | 5 | 20
  total: number
}
```

---

### 4.2 Buying & Buy-Back System

#### Overview
End-to-end device purchasing workflow — from customer-facing data entry form through IMEI verification, condition assessment, pricing, and margin tracking.

#### Customer-Facing Buy-Back Form

A public-facing form (embeddable on shop website) that customers fill out to initiate a buy-back:

**Required Fields:**
1. Full Name
2. Phone Number (UK mobile, verified via OTP)
3. Email Address
4. Full Address (with postcode lookup)
5. Photo ID Type (Passport / Driving Licence / National ID)
6. Photo ID Upload (image capture or file upload)
7. Device Brand (dropdown: Apple, Samsung, Google, Huawei, OnePlus, Xiaomi, Other)
8. Device Model (dynamic dropdown based on brand)
9. Device IMEI Number (15-digit, validated format)
10. Device Condition (Excellent / Good / Fair / Poor — with photo guide)
11. Storage Capacity
12. Colour
13. Accessories Included (charger, box, earphones — checkboxes)

**Optional Fields:**
- Preferred payment method (cash / bank transfer)
- Bank details (for bank transfer: sort code, account number, account name)
- Additional notes / known issues

#### IMEI Checker Integration

- **API:** Integration with IMEI verification service (e.g., imei.info API, CheckMEND)
- **Checks performed:**
  - Blacklist status (stolen/lost)
  - Network lock status
  - Warranty status
  - Find My iPhone / Google FRP lock status
  - Original carrier
- **Auto-reject** if device is blacklisted
- **Flag for review** if locked or warranty issues
- Results stored with buy-back record for compliance

#### Pricing & Margin

- Base buy-back price suggestions based on: model, condition, storage, market rates
- Shop owner sets final buying price
- Selling price recorded when device is resold
- **Margin calculation:** `Selling Price - Buying Price = Profit`
- **Margin percentage:** `(Profit / Selling Price) * 100`
- Track profit per device and aggregate margins

#### Multi-Shop Device Transfers

- Transfer devices between branches
- Transfer record: source shop, destination shop, device IMEI, transfer date, reason
- Stock automatically adjusts at both locations
- Transfer history maintained for audit

#### Investment Reporting

- **Monthly Investment Report:** Total spent on buy-backs, number of devices purchased, average cost per device
- **Yearly Investment Report:** Total investment, total revenue from resold devices, overall ROI
- **Ageing Report:** Devices held >30, >60, >90 days — flag for price reduction
- **Category Breakdown:** Investment by brand, model, condition grade

#### Data Model

```
BuyBack {
  id: UUID
  customerName: string
  customerPhone: string
  customerEmail: string
  customerAddress: Address
  idType: string
  idImageUrl: string
  deviceBrand: string
  deviceModel: string
  imei: string
  imeiCheckResult: IMEICheckResult
  condition: "excellent" | "good" | "fair" | "poor"
  storage: string
  colour: string
  accessories: string[]
  buyingPrice: number
  sellingPrice: number | null
  margin: number | null
  paymentMethod: "cash" | "bank_transfer"
  bankDetails: BankDetails | null
  status: "submitted" | "imei_checking" | "approved" | "rejected" | "purchased" | "listed" | "sold"
  shopId: UUID
  employeeId: UUID
  transferHistory: Transfer[]
  createdAt: DateTime
  soldAt: DateTime | null
}
```

---

### 4.3 Inventory & Accessory Management

#### Overview
Comprehensive stock management with barcode support, automatic quantity adjustments, low-stock alerts, and detailed sub-categorisation for accessories.

#### Product Categories

**Primary Categories:**
- Phones (new & refurbished)
- Tablets
- Laptops
- Smartwatches & Wearables
- Accessories
- Spare Parts (screens, batteries, etc.)

**Accessory Sub-Categories:**
- **Cables:** Type (Lightning, USB-C, Micro-USB), Length (0.5m, 1m, 2m, 3m), Brand, Colour, Price
- **Cases:** Device model, Material (silicone, leather, clear), Brand, Colour, Price
- **Screen Protectors:** Device model, Type (tempered glass, film), Brand, Price
- **Chargers:** Type (wall, car, wireless), Wattage, Brand, Price
- **Earphones/Headphones:** Type (wired, wireless, TWS), Brand, Price
- **Power Banks:** Capacity (mAh), Brand, Price

#### Barcode System

- **Generation:** Auto-generate unique barcodes (Code 128 or QR) for each product/SKU
- **Printing:** Print labels via thermal printer (Zebra, Brother compatible)
- **Scanning:** Barcode scan for:
  - Quick sale processing
  - Stock takes
  - Receiving deliveries
  - Inter-shop transfers
- **Batch printing:** Generate labels for multiple items at once

#### Stock Management

- **Auto-decrement:** Stock quantity decreases automatically on sale
- **Auto-increment:** Stock increases on purchase order receipt or buy-back
- **Stock Take:** Physical count mode — scan items, compare to system, generate variance report
- **Stock History:** Full audit trail of every quantity change (sale, return, adjustment, transfer, write-off)

#### Alerts & Notifications

- **Low Stock Alert:** Configurable threshold per product (default: 5 units)
- **Out of Stock:** Immediate notification when quantity hits 0
- **Reorder Suggestion:** AI-suggested reorder quantities based on sales velocity
- **Expiry/Ageing:** Flag refurbished devices held too long

#### Data Model

```
Product {
  id: UUID
  sku: string (auto-generated)
  barcode: string
  name: string
  category: ProductCategory
  subCategory: string | null
  brand: string
  model: string | null
  specifications: Record<string, string> (flexible key-value: colour, size, capacity, etc.)
  costPrice: number
  sellingPrice: number
  vatRate: 0 | 5 | 20
  quantity: number
  lowStockThreshold: number
  shopId: UUID
  supplierId: UUID | null
  imei: string | null (for phones/tablets)
  condition: "new" | "refurbished" | "used" | null
  createdAt: DateTime
  updatedAt: DateTime
}

StockMovement {
  id: UUID
  productId: UUID
  type: "sale" | "purchase" | "return" | "adjustment" | "transfer_in" | "transfer_out" | "write_off"
  quantity: number (positive for in, negative for out)
  reference: string (sale ID, PO number, etc.)
  employeeId: UUID
  notes: string | null
  createdAt: DateTime
}
```

---

### 4.4 Customer & Service Management (CRM)

#### Overview
Relational customer database linked to sales, repairs, and buy-backs — with automated receipts, repair tracking, and customer communications.

#### Customer Database

- **Customer record:** Name, phone (primary + secondary), email, address, notes
- **Linked records:** All sales, repairs, buy-backs associated with customer
- **Search:** By name, phone number, email, or device IMEI
- **Customer history:** Timeline view of all interactions
- **Tags:** VIP, trade customer, problematic, etc.

#### Receipt Generation

- **Auto-generate** digital receipt on every sale
- **Format:** PDF with shop branding (logo, address, VAT number)
- **Contents:** Items, prices, VAT breakdown, payment method, receipt number, date/time
- **Delivery:** Email automatically, option to print (thermal or A4)
- **Scan-to-receipt:** Scan product barcodes, auto-populate receipt

#### Repair Job Tracking

**Job Creation:**
- Customer details (linked to CRM or quick-create)
- Device details: brand, model, IMEI, colour
- **Security info:** PIN/password/pattern (stored encrypted, visible only to technician)
- Problem description (free text + common issue checkboxes)
- Product category: Phone, Tablet, Laptop, Watch, Other
- Estimated completion date
- Photos of device condition at intake

**Pricing & Payment:**
- Diagnostic fee (optional, deducted from repair cost)
- Estimated repair cost (communicated to customer)
- Advance payment (partial payment at drop-off)
- Balance due on collection
- Payment method for each payment (cash/card)

**Repair Status Workflow:**
```
Received → Diagnosing → Awaiting Parts → Repairing → Testing → Ready for Collection → Collected
```

**Notifications:**
- SMS/Email on status change (configurable)
- Automatic email when repair is complete ("Your device is ready for collection")
- Follow-up message 48 hours after collection (satisfaction check)
- Reminder if device not collected within 14 days

**Repair Reports:**
- Jobs by status, technician, product category
- Average repair time
- Revenue from repairs (parts + labour)
- Common repair types (screen replacement, battery, etc.)

#### Data Model

```
Customer {
  id: UUID
  name: string
  phone: string
  phoneSecondary: string | null
  email: string | null
  address: Address | null
  tags: string[]
  notes: string | null
  createdAt: DateTime
}

RepairJob {
  id: UUID
  ticketNumber: string (auto-generated: REP-XXXX)
  customerId: UUID
  deviceBrand: string
  deviceModel: string
  deviceImei: string | null
  deviceColour: string
  devicePin: string (encrypted)
  problemDescription: string
  problemCategories: string[]
  productCategory: "phone" | "tablet" | "laptop" | "watch" | "other"
  photos: string[] (URLs)
  estimatedCost: number
  actualCost: number | null
  advancePayment: number
  balanceDue: number
  status: RepairStatus
  technicianId: UUID
  estimatedCompletion: DateTime
  completedAt: DateTime | null
  collectedAt: DateTime | null
  notes: string | null
  createdAt: DateTime
}
```

---

### 4.5 AI Assistant Module

#### Overview
Conversational AI agent integrated into the platform, allowing shop owners and managers to query business data using natural language.

#### Capabilities

**Sales Queries:**
- "What were total sales last week?"
- "Compare this month's card sales to last month"
- "Show me the top 10 best-selling products this year"
- "Which employee had the highest sales in January?"

**Tax & Financial:**
- "Calculate my estimated tax liability for Q1"
- "Generate a tax summary for the year ending April 2026"
- "What's my total VAT collected this month?"
- "Show cash vs card split for the current tax year"

**Inventory Queries:**
- "Which products are low on stock?"
- "How many iPhone 15 Pro cases do we have?"
- "What's the total value of current stock?"
- "Show me slow-moving inventory (no sales in 30 days)"

**Buy-Back Analysis:**
- "What's our average margin on Samsung devices?"
- "Show total investment in buy-backs this month"
- "Which devices have been in stock for over 60 days?"
- "What's the ROI on our buy-back programme?"

**Performance:**
- "How is [employee name] performing against target?"
- "Show me the team leaderboard for this week"
- "What's our busiest hour on Saturdays?"

#### Implementation

- Chat-style interface within the dashboard
- Context-aware: understands shop-specific data
- Suggests follow-up questions
- Export responses as PDF/Excel
- Conversation history for reference

---

## 5. System Relationships & Automations

### Cross-Module Integrations

```
Sale Created
  → Inventory: Decrement stock quantity
  → CRM: Link sale to customer record
  → CRM: Auto-generate and email receipt
  → Reports: Update daily/monthly totals
  → Alerts: Check if stock below threshold

Buy-Back Completed
  → Inventory: Add device to stock (status: listed)
  → CRM: Create/update customer record
  → Reports: Update investment tracker
  → IMEI: Store verification result

Repair Completed
  → CRM: Update job status
  → Notifications: Send "ready for collection" email/SMS
  → Reports: Update repair revenue
  → Follow-up: Schedule 48-hour satisfaction check

Stock Below Threshold
  → Alerts: Push notification to owner/manager
  → AI: Suggest reorder quantity based on sales velocity
  → Reports: Add to low-stock report

Device Transfer
  → Source Shop: Decrement stock
  → Destination Shop: Increment stock
  → Audit: Log transfer with full details
```

### Inventory ↔ CRM Auto-Update

When a sale is processed:
1. Stock quantity automatically decreases
2. If customer is identified, sale is linked to their profile
3. Receipt is generated and emailed
4. If stock hits low threshold, notification is triggered
5. Employee's sales total is updated in real-time

---

## 6. Technical Requirements

### Technology Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18 + TypeScript, TailwindCSS, shadcn/ui |
| **Backend** | Node.js (Express or Fastify), TypeScript |
| **Database** | PostgreSQL (primary), Redis (caching/sessions) |
| **ORM** | Drizzle ORM |
| **Authentication** | JWT + refresh tokens, bcrypt password hashing |
| **File Storage** | AWS S3 or Cloudflare R2 (ID images, repair photos) |
| **Email** | Resend or SendGrid (transactional emails) |
| **SMS** | Twilio (repair notifications, OTP verification) |
| **AI** | Anthropic Claude API (conversational assistant) |
| **Barcode** | bwip-js (generation), html5-qrcode (scanning) |
| **PDF** | @react-pdf/renderer or jsPDF (receipts, reports) |
| **Payments** | SumUp / Zettle API (card terminal integration) |
| **IMEI** | imei.info API or CheckMEND API |
| **Hosting** | Vercel (frontend), Railway or Render (backend), Neon (database) |
| **CI/CD** | GitHub Actions |
| **Monitoring** | Sentry (errors), Plausible (analytics) |

### API Integrations

| Integration | Purpose | Priority |
|-------------|---------|----------|
| IMEI Checker API | Verify device status before buy-back | P0 |
| SumUp/Zettle | Card payment terminal sync | P0 |
| Resend/SendGrid | Transactional emails (receipts, repair updates) | P0 |
| Twilio | SMS notifications (repair status, OTP) | P1 |
| Royal Mail / Postcode API | Address lookup in buy-back form | P1 |
| Anthropic Claude | AI assistant for natural language queries | P1 |
| Companies House API | Business verification (B2B customers) | P2 |
| Xero/QuickBooks | Accounting export | P2 |

### UK Tax Year Logic

```
Tax Year: April 6 (Year N) → April 5 (Year N+1)

Quarter 1: April 6 – July 5
Quarter 2: July 6 – October 5
Quarter 3: October 6 – January 5
Quarter 4: January 6 – April 5

All date-based reports default to tax year alignment.
Calendar year view available as secondary option.
VAT quarters configurable (standard, annual, flat rate).
```

---

## 7. Non-Functional Requirements

### Performance

- Page load: < 2 seconds (LCP)
- API response: < 200ms (95th percentile)
- Search results: < 500ms
- Report generation: < 5 seconds for any date range
- Support 10,000+ products per shop
- Support 100+ concurrent users (multi-shop scenario)

### Security

- All data encrypted at rest (AES-256) and in transit (TLS 1.3)
- Customer PINs/passwords stored with AES encryption (not plaintext)
- Photo ID images stored encrypted in S3 with restricted access
- Role-based access control (RBAC) enforced at API level
- Session timeout: 8 hours (configurable)
- Audit log for all sensitive operations (price changes, refunds, data exports)
- Rate limiting on public endpoints (buy-back form: 10 req/min per IP)

### GDPR Compliance

- **Right to Access:** Customer can request all data held about them
- **Right to Erasure:** Delete customer data on request (with legal retention exceptions)
- **Data Minimisation:** Only collect necessary data
- **Consent:** Explicit opt-in for marketing communications
- **Retention Policy:**
  - Sales records: 7 years (HMRC requirement)
  - Customer data: 3 years after last interaction (unless active)
  - Repair photos: 6 months after collection
  - Buy-back ID images: 2 years (fraud prevention)
- **Data Processing Agreement:** Template for shop owners
- **Cookie Policy:** Essential cookies only (no tracking without consent)

### Accessibility

- WCAG 2.1 AA compliance
- Keyboard navigable
- Screen reader compatible
- High contrast mode support
- Minimum touch target: 44x44px (mobile)

### Multi-Shop Support

- Centralised dashboard with per-shop drill-down
- Shared product catalogue with per-shop pricing overrides
- Inter-shop stock transfers with full audit trail
- Per-shop employee management and targets
- Consolidated reporting across all shops
- Shop-specific settings (address, branding, receipts)

### Mobile Responsiveness

- Fully responsive design (mobile-first)
- PWA support for offline sales processing
- Barcode scanning via mobile camera
- Touch-optimised interface for tablet POS use

### Offline Capability

- Queue sales transactions when offline
- Sync automatically when connection restored
- Local barcode scanning (no network required)
- Display cached product/price data
- Visual indicator of offline status

### Data Export

- Export any report as PDF or Excel (.xlsx)
- Bulk export: products, customers, sales (CSV)
- API access for third-party integrations
- Scheduled email reports (daily/weekly/monthly digest)

---

## 8. UI/UX Requirements

### Design Principles

- **Speed-first:** Optimised for rapid transactions (< 3 taps to complete a sale)
- **Glanceable:** Key metrics visible without scrolling on dashboard
- **Consistent:** Uniform patterns across all modules
- **Forgiving:** Undo/confirm for destructive actions, easy corrections

### Key Screens

1. **Dashboard** — KPI cards, today's sales chart, recent transactions, alerts
2. **POS Screen** — Product search/scan, cart, payment, receipt
3. **Inventory Grid** — Filterable product table with inline stock editing
4. **Buy-Back Form** — Step-by-step wizard (customer details → device → IMEI check → pricing)
5. **Repair Board** — Kanban-style board (columns = statuses, cards = jobs)
6. **AI Chat** — Side panel or full-page conversational interface
7. **Reports** — Interactive charts with date range pickers and drill-down
8. **Settings** — Shop details, user management, notifications, integrations

### Theme

- Dark mode by default (reduces eye strain in shop environments)
- Light mode toggle available
- Brand-customisable accent colour
- Clear visual hierarchy with consistent spacing

---

## 9. Future Roadmap

### Phase 2 (Post-Launch)

| Feature | Description |
|---------|-------------|
| **Supplier Management** | Track suppliers, purchase orders, delivery schedules, payment terms |
| **Loyalty Programme** | Points-based system, tier rewards, referral bonuses |
| **Accounting Integration** | Direct Xero/QuickBooks/FreeAgent sync |
| **Multi-Branch Analytics** | Comparative dashboards across all shops |
| **Customer Portal** | Self-service: repair tracking, purchase history, buy-back submissions |

### Phase 3 (Future)

| Feature | Description |
|---------|-------------|
| **Marketplace** | B2B marketplace for inter-shop device trading |
| **Insurance Claims** | Integration with device insurance providers |
| **Trade-In Kiosk** | Customer-facing kiosk mode for self-service trade-ins |
| **Predictive Pricing** | AI-driven buy-back pricing based on market data |
| **WhatsApp Integration** | Automated repair updates via WhatsApp Business API |
| **eBay/Amazon Listing** | One-click listing of refurbished devices to online marketplaces |
| **Staff Scheduling** | Shift management integrated with sales data |
| **Footfall Analytics** | Camera/sensor integration for conversion rate tracking |

---

## 10. Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Sale processing time | < 30 seconds | Average time from scan to receipt |
| Daily reconciliation accuracy | > 99.5% | System total vs actual cash/card |
| Stock accuracy | > 98% | System vs physical count |
| Repair turnaround time | < 48 hours | Average intake to ready |
| Customer notification rate | 100% | All repair status changes notified |
| Buy-back IMEI check rate | 100% | All devices verified before purchase |
| User adoption (per shop) | > 80% of transactions digital | Within 3 months of onboarding |
| System uptime | 99.9% | Monthly availability |

---

## 11. Glossary

| Term | Definition |
|------|-----------|
| **IMEI** | International Mobile Equipment Identity — unique 15-digit device identifier |
| **Buy-Back** | Purchasing a used device from a customer for resale |
| **SKU** | Stock Keeping Unit — unique product identifier |
| **POS** | Point of Sale — the checkout/transaction system |
| **FRP** | Factory Reset Protection — Google's anti-theft lock |
| **MTD** | Making Tax Digital — HMRC's digital tax reporting requirement |
| **VAT** | Value Added Tax — UK consumption tax (standard rate: 20%) |
| **HMRC** | His Majesty's Revenue and Customs — UK tax authority |
| **PWA** | Progressive Web App — web app with native-like offline capabilities |
| **OTP** | One-Time Password — SMS verification code |

---

*This PRD is a living document and will be updated as requirements evolve. All features are subject to prioritisation based on user feedback and business impact.*

*Built by Rivendell AI — Your Subscription-Based Tech Partner*
