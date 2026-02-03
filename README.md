# Rivendell AI - Next.js Website

A premium, modern website for Rivendell AI built with Next.js, TypeScript, and Tailwind CSS. Inspired by LOTR's Rivendell realm and designed with minimalist aesthetics reminiscent of Apple, Google, and Nike.

## Features

- 🏰 **LOTR Rivendell Theme** - Elven-inspired design with elegant typography and nature-inspired colors
- ⚡ **Next.js 15** - Modern React framework with App Router
- 🎨 **Tailwind CSS** - Utility-first styling for rapid development
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ✨ **Smooth Animations** - Elegant transitions and scroll effects
- 🎯 **Minimalist Design** - Clean, modern interface inspired by top tech companies
- 📄 **Multiple Pages** - Home, Services, Packages, About, and Contact pages

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with navbar and footer
│   ├── globals.css         # Global styles and animations
│   ├── page.tsx            # Home page
│   ├── services/
│   │   └── page.tsx        # Services page
│   ├── packages/
│   │   └── page.tsx        # Pricing packages page
│   ├── about/
│   │   └── page.tsx        # About page
│   └── contact/
│       └── page.tsx        # Contact form page
└── components/
    ├── Navbar.tsx          # Navigation component
    └── Footer.tsx          # Footer component
```

## Getting Started

### Prerequisites

- Node.js 18.17+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Run production build
- `npm run lint` - Run ESLint

## Design System

### Color Palette

- **Primary**: `#0a5c42` (Rivendell Green)
- **Secondary**: `#1a3a2e` (Deep Forest)
- **Accent**: `#c49c6c` (Elven Gold)
- **Dark**: `#0f1b18` (Night)
- **Light**: `#f5f1e8` (Cream)

### Typography

- **Serif**: Georgia, Garamond (for headings - "elven-text")
- **Sans**: Inter, system-ui (for body text)

## Components

### Navbar
- Fixed navigation bar with mobile hamburger menu
- Smooth scroll navigation
- Logo with gradient text effect

### Footer
- Multi-column layout with links
- Social media connections
- Contact information

### Custom Styles
- `.btn-primary` - Primary action buttons
- `.btn-secondary` - Secondary action buttons
- `.card` - Reusable card component with backdrop blur
- `.gradient-text` - Accent gradient text effect
- `.elven-text` - Serif font for headings

## Pages

### Home (`/`)
- Hero section with call-to-actions
- Service previews
- Main CTA

### Services (`/services`)
- Detailed service cards (6 services)
- Features list for each service
- CTA for consultation

### Packages (`/packages`)
- 3 subscription tiers
- Feature comparison
- FAQ section
- Highlighted "Most Popular" option

### About (`/about`)
- Company story
- Core values (4 pillars)
- Industries served
- 5-step process
- LOTR Rivendell theme integration

### Contact (`/contact`)
- Contact information cards
- Contact form with validation
- Form state management
- Why choose us section

## Deployment

Deploy easily to Vercel (recommended for Next.js):

```bash
npm run build
# Then push to GitHub and connect to Vercel
```

Or deploy to any Node.js hosting:

```bash
npm run build
npm run start
```

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Hooks** - State management
- **Responsive Design** - Mobile-first approach

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 Rivendell AI. All rights reserved.

## Contact

- Email: contact@rivendellai.com
- Website: Coming Soon
- Location: Global (Remote-First)
