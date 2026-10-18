# Buildans Gas Suppliers - AI Context
Last updated: 2026-10-18

## Purpose
Primary AI context: project summary, stack, exact commands, folder map, coding conventions, hard rules, doc index, current phase.

## Project Summary
Mobile-first PWA for Buildans Gas Suppliers (LPG delivery, Thika Kenya). Core flow: Land ? select estate ? choose refill/new set ? enter phone/house ? M-Pesa STK Push or WhatsApp dispatch.

## Tech Stack
Next.js 15 (App Router), TypeScript strict, Tailwind CSS, PWA (Serwist/next-pwa), Zustand, Zod, Supabase, Daraja API, Africa's Talking.

## Commands
- 
pm install - Install dependencies
- 
pm run dev - Start dev server (http://localhost:3000)
- 
pm run build - Build production
- 
pm run start - Start production
- 
pm run lint - Lint code
- 
pm run typecheck - Type check (to be added)

## Folder Map
- src/app/ - App Router pages and layouts
- src/components/ - Reusable components
- src/config/ - Config-driven data (catalog.ts)
- src/lib/ - Utils, validations, helpers
- src/store/ - Zustand stores
- src/types/ - TypeScript types
- public/img/ - Optimized images

## Hard Rules
1. All prices, brands, estates, business info only in src/config/catalog.ts
2. Server recomputes every order total - never trust client totals
3. Secrets never reach client - only NEXT_PUBLIC_* browser-safe
4. Mobile-first at 390px with 44px minimum tap targets
5. Every feature needs test or documented manual-QA step
6. Update relevant docs/*.md in same change
7. Never mark done without passing typecheck, lint, tests
8. Record unknowns in ASSUMPTIONS.md instead of guessing

## Current Phase
Phase 0 - Documentation set (COMPLETE for initial prototype context). See docs/PROGRESS.md for details.

## Read This Before Working On
- X: src/config/catalog.ts for business data
- UI changes: docs/DESIGN_SYSTEM.md, docs/SCREENS.md
- API: docs/API.md, docs/DATA_MODEL.md
- Payments: docs/PAYMENTS_MPESA.md

