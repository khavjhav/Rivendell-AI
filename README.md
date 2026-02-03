# ⚜ Rivendell AI - Premium Portfolio & Services Website

A premium, modern website for Rivendell AI built with **React + Vite + Wouter**, featuring elegant LOTR-inspired design with smooth animations, responsive layout, and functional EmailJS contact forms.

## ✨ Features

- 🏰 **LOTR Rivendell Theme** - Elven-inspired design with elegant serif typography and gold accents
- ⚡ **React + Vite** - Lightning-fast development and production builds
- 🎨 **Tailwind CSS + Shadcn/UI** - Utility-first styling with premium UI components
- 🎬 **Framer Motion** - Smooth page transitions and interactive animations
- 📱 **Fully Responsive** - Mobile-first design optimized for all devices
- 📧 **EmailJS Integration** - Contact forms send emails directly (no backend needed)
- 🔐 **GDPR Compliant** - Privacy Policy, GDPR Compliance, and Terms of Service pages
- 🎯 **Minimalist Design** - Clean, premium interface inspired by Apple & premium tech brands
- 📄 **Multiple Pages** - Home, Services, Portfolio, About, Process, Contact, Pricing, + Legal pages
- 🔄 **Auto Scroll to Top** - Smooth navigation between pages

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18 + TypeScript + Vite 7 |
| **Routing** | Wouter (lightweight router) |
| **UI/Components** | Shadcn/UI + Radix UI |
| **Animations** | Framer Motion |
| **Styling** | Tailwind CSS 3 + Custom CSS |
| **Forms** | React Hook Form + Zod validation |
| **Email** | EmailJS + Templates |
| **Icons** | Lucide React |
| **Themes** | Next-themes (dark mode ready) |
| **Backend** | Express.js + Drizzle ORM (optional) |
| **Database** | PostgreSQL (optional) |

## 📁 Project Structure

```
rivendell-ai/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx           # Hero & service overview
│   │   │   ├── Services.tsx       # Detailed service cards
│   │   │   ├── Portfolio.tsx      # Work showcase
│   │   │   ├── About.tsx          # Company story & values
│   │   │   ├── Process.tsx        # Methodology & steps
│   │   │   ├── Pricing.tsx        # Subscription packages
│   │   │   ├── Contact.tsx        # Contact form + info
│   │   │   ├── Privacy.tsx        # Privacy Policy
│   │   │   ├── GDPR.tsx           # GDPR Compliance
│   │   │   ├── Terms.tsx          # Terms of Service
│   │   │   └── not-found.tsx      # 404 page
│   │   ├── components/
│   │   │   ├── layout.tsx         # Navbar & Footer with legal links
│   │   │   ├── LoadingScreen.tsx  # Animated splash screen
│   │   │   └── ui/                # Shadcn/UI components
│   │   ├── hooks/
│   │   │   └── use-contact.ts     # EmailJS contact form logic
│   │   ├── lib/
│   │   │   ├── utils.ts           # Utility functions (cn, classnames)
│   │   │   └── queryClient.ts     # React Query config
│   │   └── App.tsx                # Router setup
│   └── vite.config.ts             # Vite configuration
├── server/
│   ├── index.ts                   # Express server (optional)
│   └── db.ts                      # Drizzle ORM setup
├── shared/
│   ├── schema.ts                  # Database schema
│   └── routes.ts                  # API route definitions
├── .env.local                     # Environment variables (EmailJS config)
└── package.json                   # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17+ or higher
- **npm** or **yarn** package manager

### Installation

1. **Clone or navigate to project:**
```bash
cd "d:\dev\New folder (2)\Rivendell-AI"
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create `.env.local` with EmailJS credentials:**
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_ADMIN_TEMPLATE_ID=your_admin_template_id
VITE_EMAILJS_USER_TEMPLATE_ID=your_user_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_ADMIN_EMAIL=admin@rivendellai.com
```

4. **Start development server:**
```bash
npm run dev
```

5. **Open in browser:**
- Frontend: [http://localhost:5173](http://localhost:5173) (or next available port)

## 📦 Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Vite dev server (auto-reloads) |
| `npm run build` | Production build |
| `npm run start` | Run production build |
| `npm run check` | TypeScript type checking |
| `npm run db:push` | Sync Drizzle schema with DB |

## 📧 Contact Form Setup

### EmailJS Integration

The contact form uses **EmailJS** to send emails directly from the browser - **no backend required**.

**Form sends 2 emails per submission:**
1. ✉️ **Admin notification** → Receives inquiry details
2. ✉️ **User confirmation** → Customer gets acknowledgment

**Fields collected:**
- Name (required)
- Email (required + validation)
- Company (optional)
- Service Interest (optional)
- Message (required)

**Setup steps:**
1. Create EmailJS account at [emailjs.com](https://www.emailjs.com)
2. Set up 2 email templates (admin & user confirmation)
3. Add credentials to `.env.local`
4. Form works automatically!

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Rivendell Green | `#0a5c42` | Primary accent |
| Deep Forest | `#1a3a2e` | Secondary |
| Elven Gold | `#c49c6c` | Gold highlights |
| Night | `#0f1b18` | Dark backgrounds |
| Cream | `#f5f1e8` | Light text |

### Typography

- **Serif Font**: `Playfair Display` (headings - elegant, formal)
- **Sans Font**: `Inter` (body text - clean, readable)
- **Monospace**: System monospace (code)

## 📄 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, services preview, main CTA |
| Services | `/services` | 6 detailed service cards |
| Portfolio | `/portfolio` | Featured projects showcase |
| About | `/about` | Company story, values, team |
| Process | `/process` | 5-step methodology |
| Pricing | `/pricing` | 3 subscription tiers |
| Contact | `/contact` | EmailJS contact form + info |
| Privacy | `/privacy` | Data collection & usage |
| GDPR | `/gdpr` | Compliance & security |
| Terms | `/terms` | Service terms & conditions |

## 🔐 Legal & Compliance

All legal pages include:
- ✅ **GDPR Compliant** - Data processing transparency
- ✅ **Privacy Policy** - Data collection disclosure
- ✅ **Terms of Service** - Service agreements
- ✅ **Accessible Links** - Footer navigation to legal docs

## 🎬 Animation Features

- **Page Transitions** - Smooth fade/slide animations via Framer Motion
- **Scroll Animations** - Elements animate on viewport entry
- **Button Interactions** - Hover & tap feedback
- **Loading Screen** - Elegant splash screen with logo animation
- **Auto Scroll to Top** - Smooth scroll when navigating to new pages

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All pages fully responsive with mobile-first approach.

## 🌐 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | Latest ✅ |
| Firefox | Latest ✅ |
| Safari | Latest ✅ |
| Edge | Latest ✅ |

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Push to GitHub, connect to Vercel
```

### Other Platforms
```bash
npm run build
npm run start
```

## 📚 Dependencies

### Core
- `react` - UI library
- `react-dom` - React rendering
- `vite` - Build tool
- `typescript` - Type safety

### Routing & Forms
- `wouter` - Lightweight router
- `react-hook-form` - Form state
- `@hookform/resolvers` - Form validation
- `zod` - Schema validation

### UI & Styling
- `tailwindcss` - Utility CSS
- `radix-ui/*` - Headless components
- `shadcn/ui` - Premium components
- `lucide-react` - Icons

### Animations & Effects
- `framer-motion` - Smooth animations
- `next-themes` - Dark mode support

### Email & Data
- `@emailjs/browser` - Email service
- `@tanstack/react-query` - Data fetching

## 🔧 Environment Variables

Create `.env.local`:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_wjojtji
VITE_EMAILJS_ADMIN_TEMPLATE_ID=template_b1r6x8w
VITE_EMAILJS_USER_TEMPLATE_ID=template_rwwwhcq
VITE_EMAILJS_PUBLIC_KEY=RbGzAWX7KcOx83kFo
VITE_ADMIN_EMAIL=privacy@rivendellai.co.uk
```

⚠️ **Note:** `.env.local` is in `.gitignore` - never commit!

## 📞 Support & Contact

- **Email**: info@rivendellai.co.uk
- **Phone**: +44 7376 971045
- **Address**: The Last Homely House, San Francisco, CA & Remote Worldwide

## 📄 License

© 2026 Rivendell AI Limited. All rights reserved.

Company No. 16948146 | Registered in England and Wales

---

**Built with ⚜ by Rivendell AI**

*"True power lies not in speed, but in wisdom."*
