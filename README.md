# Buildans Gas Suppliers - Mobile-First PWA
Last updated: 2026-10-18

## Purpose
Production-ready, mobile-first PWA for Buildans Gas Suppliers, an LPG delivery business in Thika, Kenya.

## Tech Stack
- Next.js 15 (App Router), TypeScript (strict), Tailwind CSS
- PWA: web manifest and service worker
- State: Zustand, sessionStorage persistence
- Validation: Zod (shared client/server)
- Backend: Next.js Route Handlers
- Database: Supabase (Postgres + Realtime)
- Payments: Safaricom Daraja API (STK Push)
- SMS: Africa's Talking
- WhatsApp: wa.me deep links
- Testing: Vitest, Playwright

## Getting Started

`ash
npm install
npm run dev
`

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Environment Variables
Copy .env.example to .env.local and fill in the values.

## Scripts
- 
pm run dev - Start development server
- 
pm run build - Build for production
- 
pm run start - Start production server
- 
pm run lint - Run ESLint

