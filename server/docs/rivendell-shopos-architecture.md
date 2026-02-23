# Rivendell ShopOS — Full-Stack System Architecture

**Version:** 1.0
**Date:** February 2026
**Author:** Rivendell AI Engineering
**Status:** Approved for Implementation

---

## Table of Contents

1. [Architecture Overview](#1-architecture-overview)
2. [Monorepo Project Structure](#2-monorepo-project-structure)
3. [Database Schema (PostgreSQL + Drizzle ORM)](#3-database-schema)
4. [API Design](#4-api-design)
5. [Authentication & Authorization](#5-authentication--authorization)
6. [Real-Time Architecture](#6-real-time-architecture)
7. [AI Assistant Architecture](#7-ai-assistant-architecture)
8. [File Storage Architecture](#8-file-storage-architecture)
9. [Payment Architecture](#9-payment-architecture)
10. [Security Architecture](#10-security-architecture)
11. [Deployment Architecture](#11-deployment-architecture)
12. [Performance & Scalability](#12-performance--scalability)
13. [Local Development Setup](#13-local-development-setup)

---

## 1. Architecture Overview

### High-Level Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              CLIENTS                                         │
│                                                                              │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────────────┐  │
│  │  Shop Dashboard  │  │   POS Terminal   │  │  Public Buy-Back Form    │  │
│  │  (Next.js SPA)   │  │  (Next.js PWA)   │  │  (Next.js SSR Page)      │  │
│  └────────┬─────────┘  └────────┬─────────┘  └───────────┬──────────────┘  │
└───────────┼──────────────────────┼────────────────────────┼─────────────────┘
            │                      │                         │
            └──────────────────────┴─────────────────────────┘
                                   │ HTTPS / WSS
                    ┌──────────────▼──────────────┐
                    │      Vercel Edge Network      │
                    │    (CDN + DDoS protection)   │
                    └──────────────┬──────────────┘
                                   │
            ┌──────────────────────┼──────────────────────┐
            │                      │                      │
            ▼                      ▼                      ▼
  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────────┐
  │   Next.js 15     │  │  Express.js API  │  │   WebSocket Server   │
  │   App Router     │  │   (Railway)      │  │  (Socket.IO on Rail) │
  │   (Vercel)       │  │                  │  │                      │
  │                  │  │  REST API        │  │  Real-time events:   │
  │  - Server Comps  │  │  /api/v1/*       │  │  - new sale          │
  │  - SSR buy-back  │  │                  │  │  - stock update      │
  │  - Static pages  │  │  Middleware:     │  │  - repair status     │
  └──────────────────┘  │  - auth          │  │  - POS terminal      │
                         │  - rbac          │  └──────────────────────┘
                         │  - rate-limit    │
                         │  - validation    │
                         └────────┬─────────┘
                                  │
          ┌───────────────────────┼────────────────────────┐
          │                       │                        │
          ▼                       ▼                        ▼
┌──────────────────┐  ┌──────────────────────┐  ┌──────────────────┐
│   PostgreSQL     │  │    Redis (Upstash)    │  │ Cloudflare R2    │
│   (Neon)         │  │                      │  │                  │
│                  │  │  - Sessions          │  │  - ID images     │
│  - Multi-tenant  │  │  - API cache         │  │  - Device photos │
│  - All core data │  │  - Rate limit state  │  │  - Receipt PDFs  │
│  - Drizzle ORM   │  │  - WS pub/sub        │  │  - Report exports│
│  - Migrations    │  │  - Job queues        │  │  Signed URLs     │
└──────────────────┘  └──────────────────────┘  └──────────────────┘

          External APIs
          ┌─────────────────────────────────────────────────────────┐
          │                                                          │
          │  ┌──────────┐  ┌────────┐  ┌──────────┐  ┌──────────┐  │
          │  │CheckMEND │  │ Resend │  │  Twilio  │  │ Claude   │  │
          │  │(IMEI UK) │  │(Email) │  │  (SMS)   │  │  (AI)    │  │
          │  └──────────┘  └────────┘  └──────────┘  └──────────┘  │
          │                                                          │
          │  ┌──────────┐  ┌────────────┐  ┌──────────────────────┐ │
          │  │  Stripe  │  │SumUp/Zettle│  │   Royal Mail PAF     │ │
          │  │(Billing) │  │(Terminals) │  │  (Postcode lookup)   │ │
          │  └──────────┘  └────────────┘  └──────────────────────┘ │
          └─────────────────────────────────────────────────────────┘
```

### Architecture Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Frontend framework | Next.js 15 App Router | SSR for buy-back form SEO + RSC for dashboard performance |
| Backend framework | Express.js | Flexible, mature, extensive middleware, easy to scale |
| Database | PostgreSQL (Neon) | ACID, JSON support, full-text search, serverless-compatible |
| ORM | Drizzle ORM | Type-safe, zero-overhead, excellent PostgreSQL support |
| Cache | Redis (Upstash) | Serverless Redis, session management, pub/sub for WebSockets |
| File storage | Cloudflare R2 | No egress fees, GDPR EU region, S3-compatible |
| Deployment | Vercel + Railway | Managed scaling, preview deployments, cost-effective |
| Monorepo | pnpm workspaces | Fast installs, workspace hoisting, native to Node.js ecosystem |

---

## 2. Monorepo Project Structure

```
rivendell-shopos/
├── apps/
│   ├── web/                          # Next.js 15 App Router
│   │   ├── app/
│   │   │   ├── (dashboard)/          # Authenticated app routes (layout with sidebar)
│   │   │   │   ├── layout.tsx        # Dashboard shell with sidebar + topbar
│   │   │   │   ├── page.tsx          # Dashboard home (KPIs, charts)
│   │   │   │   ├── pos/              # Point of Sale
│   │   │   │   ├── sales/            # Sales reports and history
│   │   │   │   ├── buybacks/         # Buy-back management
│   │   │   │   ├── inventory/        # Stock management
│   │   │   │   ├── repairs/          # Repair Kanban board
│   │   │   │   ├── customers/        # CRM
│   │   │   │   ├── reports/          # Analytics and reporting
│   │   │   │   ├── ai/               # AI assistant chat
│   │   │   │   ├── employees/        # Staff and targets
│   │   │   │   ├── transfers/        # Inter-shop transfers
│   │   │   │   └── settings/         # Shop and system settings
│   │   │   ├── (auth)/               # Unauthenticated routes
│   │   │   │   ├── login/
│   │   │   │   ├── register/
│   │   │   │   └── magic-link/
│   │   │   ├── buy-back/             # Public buy-back form (SSR, no auth)
│   │   │   │   └── [shopSlug]/       # Per-shop public form
│   │   │   ├── api/                  # Next.js API routes (auth callbacks only)
│   │   │   │   └── auth/[...nextauth]/
│   │   │   ├── layout.tsx            # Root layout (fonts, providers)
│   │   │   └── globals.css
│   │   ├── components/
│   │   │   ├── ui/                   # Re-exported shadcn/ui components
│   │   │   ├── pos/                  # POS-specific components
│   │   │   ├── repairs/              # Kanban board components
│   │   │   ├── buybacks/             # Buy-back workflow components
│   │   │   ├── charts/               # Chart components (Recharts/Tremor)
│   │   │   └── shared/               # Shared: DataTable, EmptyState, etc.
│   │   ├── lib/
│   │   │   ├── api-client.ts         # Typed API client (wraps fetch)
│   │   │   ├── auth.ts               # Auth.js configuration
│   │   │   └── hooks/                # Custom React hooks
│   │   ├── middleware.ts              # Next.js middleware (route auth protection)
│   │   ├── next.config.ts
│   │   ├── tailwind.config.ts
│   │   └── package.json
│   │
│   └── api/                          # Express.js REST API
│       ├── src/
│       │   ├── index.ts              # Express app entry point
│       │   ├── routes/
│       │   │   ├── auth.routes.ts
│       │   │   ├── sales.routes.ts
│       │   │   ├── buybacks.routes.ts
│       │   │   ├── products.routes.ts
│       │   │   ├── stock.routes.ts
│       │   │   ├── customers.routes.ts
│       │   │   ├── repairs.routes.ts
│       │   │   ├── ai.routes.ts
│       │   │   ├── reports.routes.ts
│       │   │   ├── imei.routes.ts
│       │   │   ├── transfers.routes.ts
│       │   │   ├── employees.routes.ts
│       │   │   ├── notifications.routes.ts
│       │   │   ├── shops.routes.ts
│       │   │   └── public.routes.ts  # Unauthenticated endpoints
│       │   ├── middleware/
│       │   │   ├── authenticate.ts   # JWT verification
│       │   │   ├── authorize.ts      # RBAC role checking
│       │   │   ├── tenant.ts         # Tenant context injection
│       │   │   ├── validate.ts       # Zod schema validation
│       │   │   ├── rateLimit.ts      # Redis-backed rate limiting
│       │   │   ├── audit.ts          # Audit log writer
│       │   │   └── error.ts          # Global error handler
│       │   ├── services/
│       │   │   ├── imei.service.ts   # CheckMEND integration
│       │   │   ├── email.service.ts  # Resend integration
│       │   │   ├── sms.service.ts    # Twilio integration
│       │   │   ├── ai.service.ts     # Claude API integration
│       │   │   ├── storage.service.ts # R2 file operations
│       │   │   ├── stripe.service.ts  # Stripe subscription
│       │   │   └── payment.service.ts # SumUp/Zettle terminal
│       │   ├── jobs/
│       │   │   ├── ageing-alerts.job.ts    # Daily: flag aged devices
│       │   │   ├── data-retention.job.ts   # Weekly: purge expired data
│       │   │   ├── low-stock.job.ts        # Hourly: check stock levels
│       │   │   └── repair-reminders.job.ts # Daily: uncollected repairs
│       │   └── websocket/
│       │       ├── socket.ts         # Socket.IO setup
│       │       └── handlers/         # Event handlers by namespace
│       ├── tsconfig.json
│       └── package.json
│
├── packages/
│   ├── db/                           # Database package
│   │   ├── src/
│   │   │   ├── schema/
│   │   │   │   ├── tenants.ts
│   │   │   │   ├── shops.ts
│   │   │   │   ├── users.ts
│   │   │   │   ├── products.ts
│   │   │   │   ├── stock-movements.ts
│   │   │   │   ├── sales.ts
│   │   │   │   ├── sale-items.ts
│   │   │   │   ├── buy-backs.ts
│   │   │   │   ├── imei-checks.ts
│   │   │   │   ├── customers.ts
│   │   │   │   ├── repair-jobs.ts
│   │   │   │   ├── repair-parts.ts
│   │   │   │   ├── device-transfers.ts
│   │   │   │   ├── employee-targets.ts
│   │   │   │   ├── notifications.ts
│   │   │   │   ├── audit-logs.ts
│   │   │   │   ├── ai-conversations.ts
│   │   │   │   └── subscriptions.ts
│   │   │   ├── migrations/           # Drizzle Kit generated migrations
│   │   │   ├── seed/                 # Demo data seeders
│   │   │   │   ├── seed.ts
│   │   │   │   └── fixtures/
│   │   │   └── index.ts              # Re-export schema + db client
│   │   ├── drizzle.config.ts
│   │   └── package.json
│   │
│   ├── shared/                       # Shared types and validators
│   │   ├── src/
│   │   │   ├── types/                # TypeScript interfaces
│   │   │   │   ├── sale.types.ts
│   │   │   │   ├── buyback.types.ts
│   │   │   │   ├── product.types.ts
│   │   │   │   ├── repair.types.ts
│   │   │   │   ├── customer.types.ts
│   │   │   │   └── auth.types.ts
│   │   │   ├── validators/           # Zod schemas (used by both API and frontend)
│   │   │   │   ├── sale.schema.ts
│   │   │   │   ├── buyback.schema.ts
│   │   │   │   ├── product.schema.ts
│   │   │   │   └── repair.schema.ts
│   │   │   └── constants/            # Shared constants
│   │   │       ├── tax.ts            # UK tax rates, year boundaries
│   │   │       ├── devices.ts        # Brand/model lists
│   │   │       └── permissions.ts    # RBAC permission definitions
│   │   └── package.json
│   │
│   └── config/                       # Shared tooling config
│       ├── eslint-config/
│       ├── typescript-config/
│       │   ├── base.json
│       │   ├── nextjs.json
│       │   └── node.json
│       └── tailwind-config/
│           └── index.ts
│
├── docker/
│   ├── docker-compose.yml            # Local: PostgreSQL + Redis
│   └── docker-compose.test.yml       # Test: isolated test DB
│
├── .github/
│   └── workflows/
│       ├── ci.yml                    # Lint, test, build on every push
│       ├── preview.yml               # Deploy preview on PR
│       └── deploy.yml                # Deploy to production on release
│
├── docs/
│   ├── rivendell-shopos-prd-v2.md    # Product Requirements (this project)
│   ├── rivendell-shopos-architecture.md  # This document
│   └── rivendell-shopos-implementation-plan.md
│
├── pnpm-workspace.yaml
├── package.json                      # Root scripts + devDependencies
├── turbo.json                        # Turborepo pipeline config (optional)
└── .env.example
```

---

## 3. Database Schema

### Multi-Tenancy Model

Every table includes `tenant_id`. All queries are scoped to the authenticated user's tenant. No cross-tenant data is ever accessible.

```sql
-- Row-level filtering strategy (applied in every query via Drizzle):
-- db.select().from(sales).where(eq(sales.tenantId, ctx.tenantId))
```

### Schema Definitions (Drizzle ORM + PostgreSQL)

```typescript
// packages/db/src/schema/tenants.ts
import { pgTable, uuid, text, timestamp, jsonb, boolean } from "drizzle-orm/pg-core";

export const tenants = pgTable("tenants", {
  id:              uuid("id").primaryKey().defaultRandom(),
  name:            text("name").notNull(),
  slug:            text("slug").notNull().unique(),  // URL-safe identifier
  email:           text("email").notNull(),
  phone:           text("phone"),
  plan:            text("plan").notNull().default("starter"),  // starter | professional | business | enterprise
  stripeCustomerId:    text("stripe_customer_id"),
  stripeSubId:         text("stripe_subscription_id"),
  planStatus:          text("plan_status").default("trial"),   // trial | active | past_due | cancelled
  trialEndsAt:         timestamp("trial_ends_at"),
  settings:            jsonb("settings").default({}),          // branding, preferences
  createdAt:           timestamp("created_at").defaultNow(),
  updatedAt:           timestamp("updated_at").defaultNow(),
});

// packages/db/src/schema/shops.ts
export const shops = pgTable("shops", {
  id:           uuid("id").primaryKey().defaultRandom(),
  tenantId:     uuid("tenant_id").notNull().references(() => tenants.id, { onDelete: "cascade" }),
  name:         text("name").notNull(),
  address:      text("address").notNull(),
  postcode:     text("postcode").notNull(),
  phone:        text("phone"),
  email:        text("email"),
  vatNumber:    text("vat_number"),
  logoUrl:      text("logo_url"),
  slug:         text("slug").notNull(),          // for public buy-back form URL
  settings:     jsonb("settings").default({}),   // per-shop settings
  isActive:     boolean("is_active").default(true),
  createdAt:    timestamp("created_at").defaultNow(),
});

// packages/db/src/schema/users.ts
import { pgEnum } from "drizzle-orm/pg-core";

export const userRoleEnum = pgEnum("user_role", ["owner", "manager", "employee"]);

export const users = pgTable("users", {
  id:               uuid("id").primaryKey().defaultRandom(),
  tenantId:         uuid("tenant_id").notNull().references(() => tenants.id, { onDelete: "cascade" }),
  shopId:           uuid("shop_id").references(() => shops.id), // null = all shops
  email:            text("email").notNull().unique(),
  passwordHash:     text("password_hash"),                      // null if magic-link-only
  name:             text("name").notNull(),
  role:             userRoleEnum("role").notNull().default("employee"),
  phone:            text("phone"),
  avatarUrl:        text("avatar_url"),
  isActive:         boolean("is_active").default(true),
  lastLoginAt:      timestamp("last_login_at"),
  createdAt:        timestamp("created_at").defaultNow(),
  updatedAt:        timestamp("updated_at").defaultNow(),
});

// packages/db/src/schema/customers.ts
export const customers = pgTable("customers", {
  id:             uuid("id").primaryKey().defaultRandom(),
  tenantId:       uuid("tenant_id").notNull().references(() => tenants.id),
  name:           text("name").notNull(),
  phone:          text("phone").notNull(),
  phoneSecondary: text("phone_secondary"),
  email:          text("email"),
  address:        jsonb("address"),              // { line1, line2, city, postcode }
  tags:           text("tags").array().default([]),
  notes:          text("notes"),
  gdprConsent:    boolean("gdpr_consent").default(false),
  gdprConsentAt:  timestamp("gdpr_consent_at"),
  lifetimeValue:  integer("lifetime_value").default(0),  // in pence
  createdAt:      timestamp("created_at").defaultNow(),
  updatedAt:      timestamp("updated_at").defaultNow(),
});

// packages/db/src/schema/products.ts
export const productCategoryEnum = pgEnum("product_category", [
  "phone", "tablet", "laptop", "smartwatch", "accessory", "spare_part", "other"
]);
export const conditionEnum = pgEnum("condition", ["new", "refurbished", "used"]);

export const products = pgTable("products", {
  id:                 uuid("id").primaryKey().defaultRandom(),
  tenantId:           uuid("tenant_id").notNull().references(() => tenants.id),
  shopId:             uuid("shop_id").references(() => shops.id),  // null = shared catalogue
  sku:                text("sku").notNull(),
  barcode:            text("barcode").notNull(),
  name:               text("name").notNull(),
  category:           productCategoryEnum("category").notNull(),
  subCategory:        text("sub_category"),
  brand:              text("brand").notNull(),
  model:              text("model"),
  attributes:         jsonb("attributes").default({}),  // colour, size, capacity, etc.
  costPrice:          integer("cost_price").notNull(),   // in pence
  sellingPrice:       integer("selling_price").notNull(),
  vatRate:            integer("vat_rate").notNull().default(20),  // 0, 5, or 20
  quantity:           integer("quantity").notNull().default(0),
  lowStockThreshold:  integer("low_stock_threshold").default(5),
  supplierId:         uuid("supplier_id"),
  imei:               text("imei").unique(),            // serialised devices
  condition:          conditionEnum("condition"),
  buyBackId:          uuid("buy_back_id"),
  isActive:           boolean("is_active").default(true),
  createdAt:          timestamp("created_at").defaultNow(),
  updatedAt:          timestamp("updated_at").defaultNow(),
}, (t) => ({
  tenantIdx:   index("products_tenant_idx").on(t.tenantId),
  skuIdx:      index("products_sku_idx").on(t.sku),
  barcodeIdx:  index("products_barcode_idx").on(t.barcode),
  imeiIdx:     index("products_imei_idx").on(t.imei),
  categoryIdx: index("products_category_idx").on(t.category),
}));

// packages/db/src/schema/stock-movements.ts
export const stockMovementTypeEnum = pgEnum("stock_movement_type", [
  "sale", "return", "buyback_in", "purchase_order", "manual_in", "manual_out",
  "transfer_in", "transfer_out", "write_off", "stock_take_adjustment"
]);

export const stockMovements = pgTable("stock_movements", {
  id:             uuid("id").primaryKey().defaultRandom(),
  tenantId:       uuid("tenant_id").notNull().references(() => tenants.id),
  shopId:         uuid("shop_id").notNull().references(() => shops.id),
  productId:      uuid("product_id").notNull().references(() => products.id),
  type:           stockMovementTypeEnum("type").notNull(),
  quantity:       integer("quantity").notNull(),      // positive = in, negative = out
  balanceBefore:  integer("balance_before").notNull(),
  balanceAfter:   integer("balance_after").notNull(),
  reference:      text("reference"),                  // sale ID, PO number, etc.
  employeeId:     uuid("employee_id").references(() => users.id),
  notes:          text("notes"),
  createdAt:      timestamp("created_at").defaultNow(),
});

// packages/db/src/schema/sales.ts
export const paymentMethodEnum = pgEnum("payment_method", ["cash", "card", "mixed"]);

export const sales = pgTable("sales", {
  id:               uuid("id").primaryKey().defaultRandom(),
  tenantId:         uuid("tenant_id").notNull().references(() => tenants.id),
  shopId:           uuid("shop_id").notNull().references(() => shops.id),
  receiptNumber:    text("receipt_number").notNull().unique(),
  customerId:       uuid("customer_id").references(() => customers.id),
  employeeId:       uuid("employee_id").notNull().references(() => users.id),
  subtotal:         integer("subtotal").notNull(),        // in pence
  discountType:     text("discount_type"),                // "percentage" | "fixed" | null
  discountValue:    integer("discount_value"),
  vatAmount:        integer("vat_amount").notNull(),
  total:            integer("total").notNull(),
  paymentMethod:    paymentMethodEnum("payment_method").notNull(),
  cashAmount:       integer("cash_amount"),
  cardAmount:       integer("card_amount"),
  terminalRef:      text("terminal_ref"),                 // SumUp/Zettle transaction ID
  notes:            text("notes"),
  refundedAt:       timestamp("refunded_at"),
  refundReason:     text("refund_reason"),
  refundedBy:       uuid("refunded_by").references(() => users.id),
  createdAt:        timestamp("created_at").defaultNow(),
}, (t) => ({
  tenantIdx:  index("sales_tenant_idx").on(t.tenantId),
  shopIdx:    index("sales_shop_idx").on(t.shopId),
  dateIdx:    index("sales_date_idx").on(t.createdAt),
  empIdx:     index("sales_employee_idx").on(t.employeeId),
}));

export const saleItems = pgTable("sale_items", {
  id:           uuid("id").primaryKey().defaultRandom(),
  saleId:       uuid("sale_id").notNull().references(() => sales.id, { onDelete: "cascade" }),
  productId:    uuid("product_id").notNull().references(() => products.id),
  name:         text("name").notNull(),               // snapshot at time of sale
  sku:          text("sku").notNull(),
  imei:         text("imei"),
  quantity:     integer("quantity").notNull(),
  unitPrice:    integer("unit_price").notNull(),       // in pence
  costPrice:    integer("cost_price").notNull(),       // for margin calc
  vatRate:      integer("vat_rate").notNull(),
  total:        integer("total").notNull(),
});

// packages/db/src/schema/buy-backs.ts
export const buyBackStatusEnum = pgEnum("buy_back_status", [
  "submitted", "imei_checking", "approved", "rejected",
  "purchased", "listed", "repair_needed", "sold"
]);

export const buyBacks = pgTable("buy_backs", {
  id:                   uuid("id").primaryKey().defaultRandom(),
  tenantId:             uuid("tenant_id").notNull().references(() => tenants.id),
  shopId:               uuid("shop_id").notNull().references(() => shops.id),
  employeeId:           uuid("employee_id").references(() => users.id),
  // Customer
  customerName:         text("customer_name").notNull(),
  customerPhone:        text("customer_phone").notNull(),
  customerEmail:        text("customer_email"),
  customerAddress:      jsonb("customer_address"),
  idType:               text("id_type").notNull(),
  idImageUrls:          text("id_image_urls").array().default([]),  // encrypted R2 URLs
  idImagesDeleteAt:     timestamp("id_images_delete_at"),           // GDPR retention
  // Device
  deviceBrand:          text("device_brand").notNull(),
  deviceModel:          text("device_model").notNull(),
  imei:                 text("imei").notNull(),
  storage:              text("storage"),
  colour:               text("colour"),
  condition:            text("condition").notNull(),
  accessories:          text("accessories").array().default([]),
  knownIssues:          text("known_issues").array().default([]),
  devicePhotos:         text("device_photos").array().default([]),
  // IMEI
  imeiCheckResult:      jsonb("imei_check_result"),
  imeiCheckAt:          timestamp("imei_check_at"),
  imeiCertificateUrl:   text("imei_certificate_url"),
  // Pricing
  suggestedBuyPrice:    integer("suggested_buy_price"),
  buyingPrice:          integer("buying_price"),
  sellingPrice:         integer("selling_price"),
  repairCost:           integer("repair_cost"),
  // Payment
  paymentMethod:        text("payment_method"),        // "cash" | "bank_transfer"
  bankDetails:          jsonb("bank_details"),          // encrypted
  paymentReference:     text("payment_reference"),
  // Workflow
  status:               buyBackStatusEnum("status").notNull().default("submitted"),
  rejectionReason:      text("rejection_reason"),
  notes:                text("notes"),
  // Timestamps
  submittedAt:          timestamp("submitted_at").defaultNow(),
  approvedAt:           timestamp("approved_at"),
  purchasedAt:          timestamp("purchased_at"),
  listedAt:             timestamp("listed_at"),
  soldAt:               timestamp("sold_at"),
  createdAt:            timestamp("created_at").defaultNow(),
  updatedAt:            timestamp("updated_at").defaultNow(),
}, (t) => ({
  tenantIdx: index("buybacks_tenant_idx").on(t.tenantId),
  imeiIdx:   index("buybacks_imei_idx").on(t.imei),
  statusIdx: index("buybacks_status_idx").on(t.status),
}));

// packages/db/src/schema/repair-jobs.ts
export const repairStatusEnum = pgEnum("repair_status", [
  "received", "diagnosing", "awaiting_parts", "repairing",
  "testing", "ready", "collected", "cancelled"
]);

export const repairJobs = pgTable("repair_jobs", {
  id:                   uuid("id").primaryKey().defaultRandom(),
  tenantId:             uuid("tenant_id").notNull().references(() => tenants.id),
  shopId:               uuid("shop_id").notNull().references(() => shops.id),
  ticketNumber:         text("ticket_number").notNull().unique(),
  customerId:           uuid("customer_id").notNull().references(() => customers.id),
  technicianId:         uuid("technician_id").references(() => users.id),
  // Device
  deviceBrand:          text("device_brand").notNull(),
  deviceModel:          text("device_model").notNull(),
  deviceImei:           text("device_imei"),
  deviceColour:         text("device_colour"),
  deviceStorage:        text("device_storage"),
  devicePin:            text("device_pin"),            // AES-256 encrypted
  devicePhotos:         text("device_photos").array().default([]),
  // Problem
  problemDescription:   text("problem_description").notNull(),
  problemCategories:    text("problem_categories").array().default([]),
  productCategory:      text("product_category").notNull(),
  // Pricing
  diagnosticFee:        integer("diagnostic_fee").default(0),
  estimatedCost:        integer("estimated_cost").notNull(),
  actualCost:           integer("actual_cost"),
  partsCost:            integer("parts_cost").default(0),
  labourCost:           integer("labour_cost").default(0),
  advancePayment:       integer("advance_payment").default(0),
  advancePaymentMethod: text("advance_payment_method"),
  finalPaymentMethod:   text("final_payment_method"),
  // Workflow
  status:               repairStatusEnum("status").notNull().default("received"),
  estimatedCompletion:  timestamp("estimated_completion").notNull(),
  completedAt:          timestamp("completed_at"),
  collectedAt:          timestamp("collected_at"),
  notes:                text("notes"),
  createdAt:            timestamp("created_at").defaultNow(),
  updatedAt:            timestamp("updated_at").defaultNow(),
}, (t) => ({
  tenantIdx:  index("repairs_tenant_idx").on(t.tenantId),
  statusIdx:  index("repairs_status_idx").on(t.status),
  techIdx:    index("repairs_tech_idx").on(t.technicianId),
}));

export const repairParts = pgTable("repair_parts", {
  id:          uuid("id").primaryKey().defaultRandom(),
  repairJobId: uuid("repair_job_id").notNull().references(() => repairJobs.id, { onDelete: "cascade" }),
  productId:   uuid("product_id").references(() => products.id),  // from inventory
  name:        text("name").notNull(),
  quantity:    integer("quantity").notNull(),
  unitCost:    integer("unit_cost").notNull(),
  total:       integer("total").notNull(),
  createdAt:   timestamp("created_at").defaultNow(),
});

// packages/db/src/schema/device-transfers.ts
export const deviceTransfers = pgTable("device_transfers", {
  id:             uuid("id").primaryKey().defaultRandom(),
  tenantId:       uuid("tenant_id").notNull().references(() => tenants.id),
  productId:      uuid("product_id").notNull().references(() => products.id),
  fromShopId:     uuid("from_shop_id").notNull().references(() => shops.id),
  toShopId:       uuid("to_shop_id").notNull().references(() => shops.id),
  imei:           text("imei"),
  initiatedBy:    uuid("initiated_by").notNull().references(() => users.id),
  confirmedBy:    uuid("confirmed_by").references(() => users.id),
  status:         text("status").notNull().default("pending"),  // pending | confirmed | cancelled
  reason:         text("reason"),
  notes:          text("notes"),
  initiatedAt:    timestamp("initiated_at").defaultNow(),
  confirmedAt:    timestamp("confirmed_at"),
});

// packages/db/src/schema/employee-targets.ts
export const employeeTargets = pgTable("employee_targets", {
  id:           uuid("id").primaryKey().defaultRandom(),
  tenantId:     uuid("tenant_id").notNull().references(() => tenants.id),
  shopId:       uuid("shop_id").notNull().references(() => shops.id),
  employeeId:   uuid("employee_id").notNull().references(() => users.id),
  period:       text("period").notNull(),           // "2026-02" for monthly
  periodType:   text("period_type").notNull(),      // "daily" | "weekly" | "monthly"
  targetValue:  integer("target_value").notNull(),  // in pence
  commission: jsonb("commission_tiers").default([]),
  // e.g. [{ upTo: 100000, rate: 2 }, { upTo: null, rate: 3 }] (pence, %)
  createdAt:    timestamp("created_at").defaultNow(),
  updatedAt:    timestamp("updated_at").defaultNow(),
});

// packages/db/src/schema/notifications.ts
export const notifications = pgTable("notifications", {
  id:           uuid("id").primaryKey().defaultRandom(),
  tenantId:     uuid("tenant_id").notNull().references(() => tenants.id),
  type:         text("type").notNull(),             // "sms" | "email"
  to:           text("to").notNull(),               // phone or email
  subject:      text("subject"),
  body:         text("body").notNull(),
  status:       text("status").notNull().default("pending"),  // pending | sent | failed
  provider:     text("provider"),                   // "twilio" | "resend"
  providerId:   text("provider_id"),                // external message ID
  relatedType:  text("related_type"),               // "repair" | "buyback"
  relatedId:    uuid("related_id"),
  error:        text("error"),
  createdAt:    timestamp("created_at").defaultNow(),
  sentAt:       timestamp("sent_at"),
});

// packages/db/src/schema/audit-logs.ts
export const auditLogs = pgTable("audit_logs", {
  id:           uuid("id").primaryKey().defaultRandom(),
  tenantId:     uuid("tenant_id").notNull().references(() => tenants.id),
  userId:       uuid("user_id").references(() => users.id),
  action:       text("action").notNull(),           // "view_id_image" | "process_refund" | etc.
  resourceType: text("resource_type"),              // "buy_back" | "sale" | etc.
  resourceId:   uuid("resource_id"),
  metadata:     jsonb("metadata").default({}),      // IP, user agent, changed fields
  createdAt:    timestamp("created_at").defaultNow(),
}, (t) => ({
  tenantIdx: index("audit_tenant_idx").on(t.tenantId),
  dateIdx:   index("audit_date_idx").on(t.createdAt),
}));

// packages/db/src/schema/ai-conversations.ts
export const aiConversations = pgTable("ai_conversations", {
  id:         uuid("id").primaryKey().defaultRandom(),
  tenantId:   uuid("tenant_id").notNull().references(() => tenants.id),
  userId:     uuid("user_id").notNull().references(() => users.id),
  messages:   jsonb("messages").notNull().default([]),  // {role, content, timestamp}[]
  title:      text("title"),                            // auto-generated from first message
  createdAt:  timestamp("created_at").defaultNow(),
  updatedAt:  timestamp("updated_at").defaultNow(),
});
```

---

## 4. API Design

### Base URL: `/api/v1`

Authentication: Bearer JWT in Authorization header for all non-public endpoints.

### 4.1 Auth Endpoints

| Method | Path | Description | Auth |
|---|---|---|---|
| POST | `/auth/login` | Login with email + password | None |
| POST | `/auth/magic-link` | Request magic link email | None |
| POST | `/auth/magic-link/verify` | Verify magic link token | None |
| POST | `/auth/refresh` | Refresh access token | Refresh token |
| POST | `/auth/logout` | Invalidate session | Required |
| GET | `/auth/me` | Current user + tenant context | Required |
| PUT | `/auth/me` | Update profile/password | Required |

### 4.2 Sales Endpoints

| Method | Path | Description | Min Role |
|---|---|---|---|
| POST | `/sales` | Create a new sale | employee |
| GET | `/sales` | List sales (filterable: date, employee, shop) | manager |
| GET | `/sales/:id` | Get sale details with items | manager |
| POST | `/sales/:id/refund` | Process refund | manager |
| GET | `/sales/receipt/:id` | Get PDF receipt | employee |
| GET | `/sales/summary/daily` | Daily sales summary | manager |
| GET | `/sales/summary/monthly` | Monthly summary (UK tax year) | manager |

### 4.3 Buy-Back Endpoints

| Method | Path | Description | Min Role |
|---|---|---|---|
| POST | `/buybacks` | Create buy-back (in-store) | employee |
| GET | `/buybacks` | List all buy-backs (filterable) | manager |
| GET | `/buybacks/:id` | Get buy-back detail | manager |
| PUT | `/buybacks/:id/status` | Update status (approve/reject/purchase) | manager |
| PUT | `/buybacks/:id/pricing` | Set buying price | manager |
| GET | `/buybacks/:id/certificate` | Download due-diligence certificate | manager |
| POST | `/buybacks/:id/transfer` | Create inter-shop transfer | manager |
| GET | `/buybacks/reports/ageing` | Device ageing report | manager |
| GET | `/buybacks/reports/investment` | Investment and ROI report | owner |

### 4.4 Inventory Endpoints

| Method | Path | Description | Min Role |
|---|---|---|---|
| POST | `/products` | Create product | manager |
| GET | `/products` | List products (filterable: category, brand, status) | employee |
| GET | `/products/:id` | Get product detail | employee |
| PUT | `/products/:id` | Update product | manager |
| DELETE | `/products/:id` | Deactivate product | owner |
| GET | `/products/barcode/:barcode` | Lookup by barcode (POS scan) | employee |
| GET | `/products/imei/:imei` | Lookup by IMEI | employee |
| POST | `/products/:id/barcode` | Generate/print barcode label | manager |
| GET | `/stock/movements` | Stock movement history | manager |
| POST | `/stock/adjustment` | Manual stock adjustment | manager |
| POST | `/stock/take` | Submit stock take results | manager |
| GET | `/stock/low` | Low stock report | manager |

### 4.5 Customer Endpoints

| Method | Path | Description | Min Role |
|---|---|---|---|
| POST | `/customers` | Create customer | employee |
| GET | `/customers` | Search/list customers | employee |
| GET | `/customers/:id` | Customer profile + timeline | employee |
| PUT | `/customers/:id` | Update customer | employee |
| GET | `/customers/:id/export` | GDPR data export (SAR) | owner |
| DELETE | `/customers/:id` | GDPR erasure (with retention exceptions) | owner |

### 4.6 Repair Endpoints

| Method | Path | Description | Min Role |
|---|---|---|---|
| POST | `/repairs` | Create repair job | employee |
| GET | `/repairs` | List repairs (Kanban data) | employee |
| GET | `/repairs/:id` | Get repair detail | employee |
| PUT | `/repairs/:id/status` | Move repair status | employee |
| GET | `/repairs/:id/pin` | View device PIN (audit logged) | employee (own jobs) |
| POST | `/repairs/:id/parts` | Add parts used | employee |
| PUT | `/repairs/:id/pricing` | Update cost | manager |
| POST | `/repairs/:id/collect` | Mark as collected + take payment | employee |
| GET | `/repairs/reports/summary` | Repair pipeline report | manager |

### 4.7 AI Endpoints

| Method | Path | Description | Min Role |
|---|---|---|---|
| POST | `/ai/query` | Natural language query | manager |
| GET | `/ai/conversations` | List conversation history | manager |
| GET | `/ai/conversations/:id` | Get conversation | manager |
| DELETE | `/ai/conversations/:id` | Delete conversation | manager |
| GET | `/ai/conversations/:id/export` | Export conversation as PDF | manager |

### 4.8 Report Endpoints

| Method | Path | Description | Min Role |
|---|---|---|---|
| GET | `/reports/sales/daily` | Daily sales report | manager |
| GET | `/reports/sales/monthly` | Monthly report (tax-year aligned) | manager |
| GET | `/reports/sales/quarterly` | UK tax quarter report | manager |
| GET | `/reports/sales/annual` | Annual tax-year report | owner |
| GET | `/reports/vat` | VAT return summary | owner |
| GET | `/reports/employees` | Employee performance report | manager |
| GET | `/reports/inventory/valuation` | Current stock value report | manager |
| GET | `/reports/export` | Export any report as PDF/XLSX | manager |

### 4.9 IMEI Endpoints

| Method | Path | Description | Min Role |
|---|---|---|---|
| POST | `/imei/check` | Check IMEI via CheckMEND | manager |
| GET | `/imei/:imei/history` | All buy-backs for an IMEI | manager |

### 4.10 Public Endpoints (No auth)

| Method | Path | Description |
|---|---|---|
| GET | `/public/shop/:slug` | Get shop info for buy-back form |
| POST | `/public/buyback/:shopSlug` | Submit customer buy-back form |
| POST | `/public/buyback/otp` | Request OTP for phone verification |
| POST | `/public/buyback/otp/verify` | Verify OTP |
| GET | `/public/repair-status/:ticketNumber` | Customer repair status lookup |

---

## 5. Authentication & Authorization

### JWT Token Structure

```typescript
interface JWTPayload {
  sub: string;          // user ID
  tenantId: string;
  shopId: string | null; // null = access to all shops
  role: "owner" | "manager" | "employee";
  email: string;
  iat: number;
  exp: number;          // 8 hours
}
```

### Middleware Chain

```typescript
// apps/api/src/middleware/authenticate.ts
export const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  const payload = verifyJWT(token);  // throws on invalid/expired
  req.user = payload;

  // Inject tenant-scoped DB context
  req.db = db;  // Drizzle client — all queries must include .where(eq(table.tenantId, req.user.tenantId))
  next();
};

// apps/api/src/middleware/authorize.ts
export const authorize = (minRole: "owner" | "manager" | "employee") => {
  const hierarchy = { employee: 0, manager: 1, owner: 2 };
  return (req, res, next) => {
    if (hierarchy[req.user.role] < hierarchy[minRole]) {
      return res.status(403).json({ error: "Forbidden" });
    }
    next();
  };
};

// Route example:
router.post("/sales/:id/refund",
  authenticate,
  authorize("manager"),
  validate(refundSchema),
  auditLog("process_refund"),
  refundController
);
```

### Auth.js (NextAuth v5) — Frontend

```typescript
// apps/web/lib/auth.ts
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Resend from "next-auth/providers/resend";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        const res = await fetch(`${process.env.API_URL}/api/v1/auth/login`, {
          method: "POST",
          body: JSON.stringify(credentials),
        });
        if (!res.ok) return null;
        return res.json();
      },
    }),
    Resend({ from: "ShopOS <noreply@rivendell.ai>" }), // magic link
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.tenantId = user.tenantId;
        token.role = user.role;
        token.shopId = user.shopId;
      }
      return token;
    },
    session({ session, token }) {
      session.user.tenantId = token.tenantId;
      session.user.role = token.role;
      session.user.shopId = token.shopId;
      return session;
    },
  },
});
```

---

## 6. Real-Time Architecture

### Socket.IO Setup

```typescript
// apps/api/src/websocket/socket.ts
import { Server } from "socket.io";
import { verifyJWT } from "../lib/jwt";

export const createSocketServer = (httpServer) => {
  const io = new Server(httpServer, {
    cors: { origin: process.env.WEB_URL },
    adapter: createRedisAdapter(redis), // Upstash Redis adapter for multi-instance
  });

  io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    const payload = verifyJWT(token);
    socket.data.user = payload;
    // Join tenant-scoped room for isolation
    socket.join(`tenant:${payload.tenantId}`);
    socket.join(`shop:${payload.shopId}`);
    next();
  });

  return io;
};
```

### Events

```typescript
// Event types broadcast to connected clients:

// New sale processed
io.to(`shop:${shopId}`).emit("sale:created", {
  saleId, total, employeeId, timestamp
});

// Repair status changed
io.to(`shop:${shopId}`).emit("repair:status_changed", {
  repairId, ticketNumber, oldStatus, newStatus, customerName
});

// Stock below threshold
io.to(`tenant:${tenantId}`).emit("stock:low", {
  productId, productName, quantity, threshold, shopId
});

// New buy-back submitted
io.to(`shop:${shopId}`).emit("buyback:submitted", {
  buyBackId, deviceBrand, deviceModel, customerName
});

// IMEI check complete
io.to(`shop:${shopId}`).emit("imei:check_complete", {
  buyBackId, imei, status: "approved" | "rejected", reason
});
```

---

## 7. AI Assistant Architecture

### Request Flow

```
User types: "What were total card sales in Q1 of the current tax year?"
    │
    ▼
POST /api/v1/ai/query { message, conversationId? }
    │
    ▼
AI Service receives:
  - User message
  - Conversation history (last 10 turns)
  - Shop context: { shopId, tenantId, shopName, currentDate, taxYearStart, taxYearEnd }
  - Available tools (function definitions)
    │
    ▼
Claude API called with tools:
  - get_sales_report({ from, to, shopId, breakdown: "payment_method" })
  - get_inventory_stats({ shopId })
  - get_buyback_report({ from, to, shopId })
  - get_employee_performance({ from, to, shopId })
    │
    ▼
Claude decides to call: get_sales_report({
  from: "2025-04-06",
  to: "2025-07-05",
  shopId: "...",
  breakdown: "payment_method"
})
    │
    ▼
Tool executes: Drizzle query (SELECT only, scoped to tenantId, row limited)
    │
    ▼
Result returned to Claude: { cardTotal: 15420, cashTotal: 8230, ... }
    │
    ▼
Claude formats response:
"In Q1 of the current tax year (6 April – 5 July 2025), total card sales were
£154.20 and cash sales were £82.30, giving a combined total of £236.50."
    │
    ▼
Response + tool call log stored in ai_conversations table
    │
    ▼
Response returned to client
```

### Safety Constraints

- All tool implementations use parameterised Drizzle queries (no raw SQL)
- Every query includes `where(eq(table.tenantId, tenantId))` — no cross-tenant access
- Row limits enforced: max 1,000 rows returned by any tool
- No INSERT/UPDATE/DELETE operations available to AI
- Tool responses are sanitised before sending to Claude (remove sensitive fields)

---

## 8. File Storage Architecture

### Cloudflare R2 Buckets

```
shopos-files/
├── {tenantId}/
│   ├── id-images/
│   │   └── {buyBackId}/
│   │       ├── id-front.jpg       (AES-256 encrypted at rest)
│   │       └── id-back.jpg
│   ├── repair-photos/
│   │   └── {repairJobId}/
│   │       ├── intake-001.jpg
│   │       └── intake-002.jpg
│   ├── receipts/
│   │   └── {receiptNumber}.pdf
│   ├── reports/
│   │   └── {reportId}.pdf
│   └── logos/
│       └── shop-logo.png
```

### Signed URL Generation

```typescript
// apps/api/src/services/storage.service.ts
export const getSignedUrl = async (key: string, expiresIn = 900) => {
  // 15-minute expiry for ID images — every access audit logged
  const url = await r2.sign(key, { expiresIn });
  await auditLog({ action: "view_file", resourceKey: key, userId });
  return url;
};

export const uploadFile = async (buffer: Buffer, key: string, contentType: string) => {
  await r2.put(key, buffer, {
    httpMetadata: { contentType },
    customMetadata: { uploadedAt: new Date().toISOString() },
  });
  return key;
};
```

### GDPR Lifecycle

```typescript
// Automated by data-retention.job.ts (runs weekly)
const purgeExpiredFiles = async () => {
  // Buy-back ID images: delete after 2 years
  const expiredBuyBacks = await db.select()
    .from(buyBacks)
    .where(lte(buyBacks.idImagesDeleteAt, new Date()));

  for (const bb of expiredBuyBacks) {
    for (const url of bb.idImageUrls) {
      await r2.delete(urlToKey(url));
    }
    await db.update(buyBacks)
      .set({ idImageUrls: [] })
      .where(eq(buyBacks.id, bb.id));
  }
};
```

---

## 9. Payment Architecture

### Stripe (SaaS Billing)

```
Tenant signs up → Stripe Customer created
    │
    ▼
Tenant selects plan → Stripe Subscription created
    │
    ▼
Stripe webhooks → /api/v1/webhooks/stripe
  - customer.subscription.created → activate tenant
  - customer.subscription.updated → update plan/limits
  - invoice.payment_failed → notify owner, suspend after grace period
  - customer.subscription.deleted → deactivate tenant
```

### SumUp / Zettle (In-Store Card Terminals)

```
POS operator clicks "Charge Card: £49.99"
    │
    ▼
POST /api/v1/payments/terminal/initiate
  { amount: 4999, saleId, terminalId }
    │
    ▼
API calls SumUp/Zettle API to initiate payment on terminal
    │
    ▼
Customer taps/inserts card on terminal
    │
    ▼
Webhook: POST /api/v1/webhooks/sumup { transactionId, status, amount }
    │
    ▼
On success: sale.cardAmount updated, sale.status = "completed", receipt sent
On failure: POS shows error, staff can retry or switch to cash
```

---

## 10. Security Architecture

### Defence in Depth

```
Layer 1: Vercel Edge (DDoS, bot protection, WAF)
Layer 2: Next.js middleware (route auth, redirects)
Layer 3: Express middleware (authenticate, authorize, rate-limit, validate)
Layer 4: Service layer (business logic, audit logging)
Layer 5: Database (tenant_id isolation on every query)
Layer 6: Data at rest (AES-256 encryption, Cloudflare R2 encryption)
```

### Key Security Controls

```typescript
// Rate limiting (Redis-backed)
const rateLimits = {
  publicBuyBackForm: rateLimit({ windowMs: 60_000, max: 10 }),   // 10/min per IP
  apiAuthenticated:  rateLimit({ windowMs: 60_000, max: 100 }),   // 100/min per user
  aiQueries:         rateLimit({ windowMs: 86_400_000, max: 50 }), // 50/day (Starter)
  loginAttempts:     rateLimit({ windowMs: 900_000, max: 5 }),    // 5 in 15 min
};

// Helmet.js security headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'nonce-{nonce}'"],
      imgSrc: ["'self'", "data:", "*.r2.cloudflarestorage.com"],
      connectSrc: ["'self'", "*.railway.app", "*.neon.tech"],
    },
  },
  hsts: { maxAge: 63072000, includeSubDomains: true },
}));

// Input validation on every route
const createSaleSchema = z.object({
  items: z.array(z.object({
    productId: z.string().uuid(),
    quantity: z.number().int().positive().max(1000),
  })).min(1),
  paymentMethod: z.enum(["cash", "card", "mixed"]),
  cashAmount: z.number().optional(),
  cardAmount: z.number().optional(),
  customerId: z.string().uuid().optional(),
});

// AES-256 encryption for sensitive fields
import { createCipheriv, createDecipheriv } from "crypto";
export const encrypt = (text: string): string => { /* ... */ };
export const decrypt = (encrypted: string): string => { /* ... */ };
// Used for: device PINs, bank account details
```

---

## 11. Deployment Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    GitHub Repository                         │
│                                                              │
│  main branch ──────────────────────────────→ Production      │
│  release/* ─────────────────────────────────→ Production     │
│  PR branches ──────────────────────────────→ Preview Env     │
└──────────────────────────────────────────────────────────────┘
                         │
              GitHub Actions CI/CD
                         │
       ┌─────────────────┴─────────────────┐
       │                                    │
       ▼                                    ▼
┌─────────────────┐               ┌─────────────────────┐
│  Vercel         │               │  Railway            │
│  (Next.js web)  │               │  (Express API)      │
│                 │               │                     │
│  - Production   │               │  - Production svc   │
│  - Previews     │               │  - Staging svc      │
│  - Edge CDN     │               │  - Auto-scaling     │
│  - SSL          │               │  - SSL              │
└────────┬────────┘               └──────────┬──────────┘
         │                                    │
         └──────────────┬─────────────────────┘
                        │
           ┌────────────┴────────────┐
           │                         │
           ▼                         ▼
  ┌─────────────────┐    ┌──────────────────────┐
  │ Neon PostgreSQL │    │   Upstash Redis      │
  │                 │    │                      │
  │ - Main branch   │    │ - Sessions           │
  │ - Dev branch    │    │ - API cache          │
  │ - Serverless    │    │ - WebSocket pub/sub  │
  │ - Auto-scaling  │    │ - Rate limit state   │
  └─────────────────┘    └──────────────────────┘

Monitoring Stack:
  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
  │    Sentry    │  │  Plausible   │  │  BetterStack │
  │ Error track  │  │  Analytics   │  │  Uptime mon  │
  └──────────────┘  └──────────────┘  └──────────────┘
```

### GitHub Actions Workflow

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: ["*"]
  pull_request:
    branches: [main]

jobs:
  lint-and-typecheck:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
      - run: pnpm install --frozen-lockfile
      - run: pnpm lint
      - run: pnpm type-check

  test:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:16
        env:
          POSTGRES_DB: shopos_test
          POSTGRES_PASSWORD: test
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
      - run: pnpm install --frozen-lockfile
      - run: pnpm db:migrate:test
      - run: pnpm test:unit
      - run: pnpm test:integration

  build:
    runs-on: ubuntu-latest
    needs: [lint-and-typecheck, test]
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
      - run: pnpm install --frozen-lockfile
      - run: pnpm build

  deploy-preview:
    if: github.event_name == 'pull_request'
    needs: [build]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: vercel deploy --env preview  # auto-deploys to Vercel preview

  deploy-production:
    if: github.ref == 'refs/heads/main'
    needs: [build]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: pnpm db:migrate:prod        # run Drizzle migrations
      - run: vercel deploy --prod        # deploy Next.js
      - run: railway deploy              # deploy Express API
```

---

## 12. Performance & Scalability

### Caching Strategy

```typescript
// Redis cache with intelligent invalidation
const CACHE_TTL = {
  dashboard_summary: 60,       // 1 minute (near-real-time)
  product_catalogue: 300,      // 5 minutes
  reports_daily: 3600,         // 1 hour
  reports_monthly: 86400,      // 24 hours
  device_model_list: 604800,   // 1 week (rarely changes)
};

// Cache key pattern: {tenantId}:{resource}:{params}
// Invalidation: on write, invalidate tenant-scoped cache keys
const invalidateOnSale = (tenantId: string, shopId: string) => {
  redis.del(`${tenantId}:dashboard:${shopId}`);
  redis.del(`${tenantId}:reports:daily:${shopId}`);
};
```

### Database Indexing

```sql
-- Critical indexes for POS performance
CREATE INDEX sales_created_at_shop ON sales(shop_id, created_at DESC);
CREATE INDEX sales_employee_period ON sales(employee_id, created_at);
CREATE INDEX products_barcode ON products(barcode) WHERE is_active = true;
CREATE INDEX products_imei ON products(imei) WHERE imei IS NOT NULL;
CREATE INDEX buybacks_status_shop ON buy_backs(shop_id, status);
CREATE INDEX buybacks_imei ON buy_backs(imei);
CREATE INDEX repairs_status_shop ON repair_jobs(shop_id, status);
CREATE INDEX customers_phone ON customers(tenant_id, phone);

-- Full-text search
CREATE INDEX products_search ON products USING gin(
  to_tsvector('english', name || ' ' || brand || ' ' || coalesce(model, ''))
);
CREATE INDEX customers_search ON customers USING gin(
  to_tsvector('english', name || ' ' || phone || ' ' || coalesce(email, ''))
);
```

---

## 13. Local Development Setup

### Prerequisites

- Node.js 20+
- pnpm 9+
- Docker Desktop

### Docker Compose

```yaml
# docker/docker-compose.yml
version: "3.8"
services:
  postgres:
    image: postgres:16-alpine
    ports:
      - "5432:5432"
    environment:
      POSTGRES_DB: shopos_dev
      POSTGRES_USER: shopos
      POSTGRES_PASSWORD: shopos_dev_password
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    command: redis-server --appendonly yes

volumes:
  postgres_data:
```

### Environment Variables

```bash
# .env.example

# Database
DATABASE_URL=postgresql://shopos:shopos_dev_password@localhost:5432/shopos_dev

# Redis
REDIS_URL=redis://localhost:6379

# Auth
NEXTAUTH_SECRET=your-secret-here-min-32-chars
NEXTAUTH_URL=http://localhost:3000

# API
API_URL=http://localhost:4000
API_SECRET=shared-secret-between-web-and-api

# External Services
CHECKMEND_API_KEY=
RESEND_API_KEY=
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=+441234567890
ANTHROPIC_API_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
CLOUDFLARE_ACCOUNT_ID=
CLOUDFLARE_R2_ACCESS_KEY=
CLOUDFLARE_R2_SECRET_KEY=
CLOUDFLARE_R2_BUCKET=shopos-files
SUMUP_API_KEY=
IDEAL_POSTCODES_API_KEY=
ENCRYPTION_KEY=32-byte-hex-key-for-aes-256

# Next.js
NEXT_PUBLIC_API_URL=http://localhost:4000
NEXT_PUBLIC_WS_URL=ws://localhost:4000
```

### Setup Commands

```bash
# 1. Clone and install
git clone https://github.com/rivendell-ai/shopos.git
cd shopos
pnpm install

# 2. Start Docker services
docker compose -f docker/docker-compose.yml up -d

# 3. Set up environment
cp .env.example .env.local
# Edit .env.local with your API keys

# 4. Run database migrations and seed
pnpm db:migrate
pnpm db:seed

# 5. Start all apps (Next.js + Express)
pnpm dev
# Web: http://localhost:3000
# API: http://localhost:4000

# Other useful commands:
pnpm build          # Build all apps
pnpm test           # Run all tests
pnpm test:e2e       # Run Playwright E2E tests
pnpm lint           # Lint all packages
pnpm type-check     # TypeScript check all packages
pnpm db:studio      # Open Drizzle Studio (DB GUI)
pnpm db:migrate     # Run pending migrations
pnpm db:generate    # Generate new migration from schema changes
```

---

*Built by Rivendell AI Engineering — Your Subscription-Based Tech Partner*
*Architecture v1.0 — February 2026*
