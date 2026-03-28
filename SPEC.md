# Ravindra IAS - UPSC Coaching Website

## Project Overview

A modern, responsive, high-conversion UPSC coaching website for "Ravindra IAS" inspired by vajiramandravi.com. The website is built with Next.js 14 App Router, Tailwind CSS, and includes advanced animations using Framer Motion.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Playfair Display, Inter

## Features Implemented

### Pages
- **Home (/)** - Complete landing page with all sections
- **About (/about)** - Company story, timeline, team, values
- **Courses (/courses)** - All course offerings with details
- **Contact (/contact)** - Contact form and information

### Sections (Home Page)
1. **Navigation Bar** - Sticky header with frosted glass effect, mobile menu
2. **Hero Section** - Animated canvas background, stats, CTAs
3. **About Section** - Story, highlights, image grid
4. **Courses Section** - Filterable course cards with pricing
5. **Toppers Section** - Success stories carousel with testimonials
6. **Features Section** - Why choose us with animated cards
7. **Resources Section** - Free study materials
8. **FAQ Section** - Accordion-style frequently asked questions
9. **Contact Section** - Form with validation
10. **Footer** - Full navigation, social links, newsletter

### Design Highlights
- Fully responsive (mobile-first approach)
- Custom cursor styles
- Smooth scroll animations
- Card hover effects with shadows
- Gradient backgrounds
- Professional color scheme (saffron, navy, gold)
- Typography hierarchy with display and body fonts

### Interactive Elements
- Mobile hamburger menu with slide animation
- Course filter tabs
- Topper carousel with auto-rotation
- FAQ accordion with smooth transitions
- Contact form with loading states
- Newsletter subscription
- Hover effects on all interactive elements

## Project Structure

```
ravindra-ias/
├── app/
│   ├── layout.tsx          # Root layout with navbar & footer
│   ├── page.tsx           # Home page
│   ├── about/
│   │   └── page.tsx       # About page
│   ├── courses/
│   │   └── page.tsx       # Courses page
│   ├── contact/
│   │   └── page.tsx       # Contact page
│   └── styles/
│       └── globals.css     # Global styles
├── components/
│   ├── Navbar.tsx         # Navigation component
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero section with canvas
│   ├── AboutSection.tsx   # About section
│   ├── CoursesSection.tsx # Courses section
│   ├── ToppersSection.tsx # Toppers/testimonials
│   ├── FeaturesSection.tsx # Features section
│   ├── ResourcesSection.tsx # Resources section
│   ├── FAQSection.tsx    # FAQ section
│   └── ContactSection.tsx # Contact form
├── lib/
│   ├── data.ts           # Static data
│   ├── animations.ts     # GSAP animation helpers
│   └── utils.ts          # Utility functions
├── styles/
│   └── globals.css       # Global CSS
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript config
├── next.config.js        # Next.js config
└── package.json          # Dependencies
```

## Commands

```bash
npm install     # Install dependencies
npm run dev     # Start development server
npm run build   # Build for production
npm run start   # Start production server
```

## Design Decisions

### Color Palette
- **Saffron (#f97316)**: Primary brand color, CTAs
- **Navy (#0a1929)**: Dark backgrounds, trust
- **Gold (#eab308)**: Accents, highlights
- **White (#ffffff)**: Clean backgrounds

### Typography
- **Playfair Display**: Headlines, display text
- **Inter**: Body text, UI elements

### Responsive Breakpoints
- xs: 320px+
- sm: 375px+
- md: 481px+
- lg: 768px+
- xl: 1024px+
- 2xl: 1280px+

## Improvements Made

1. **Modern UI/UX**: Clean, professional design following current web standards
2. **Responsive Design**: Fully mobile-first approach with proper breakpoints
3. **Performance**: Optimized images, lazy loading, minimal JS
4. **Accessibility**: Semantic HTML, proper ARIA labels
5. **Interactive Elements**: Smooth animations, hover effects, transitions
6. **SEO**: Metadata, Open Graph tags, semantic structure
7. **Code Organization**: Component-based architecture, clean separation

## Live Development

The development server is running at: http://localhost:3000

To view the website:
1. Open http://localhost:3000 in your browser
2. Navigate between pages using the navbar
3. Test responsive design by resizing browser window
