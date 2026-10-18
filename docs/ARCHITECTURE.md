# Buildans Gas Suppliers - Architecture
Last updated: 2026-10-18

## Purpose
Folder structure, data-flow, rendering, state, integrations.

## Folder Structure
- src/app/ (routes), src/components/, src/config/, src/lib/, src/store/, src/types/, public/img/

## Key Integrations
- Next.js App Router + Route Handlers (API)
- Supabase (Postgres + Realtime) for orders/riders
- Daraja API (M-Pesa STK Push) + callbacks
- Africa's Talking (SMS)
- WhatsApp wa.me deep links

## Data Flow (High Level)
Client (Next/React) ? Route Handlers ? Supabase (service role) ? Daraja/AT ? Client via Realtime/polling.

## Rendering
SSG/SSR where beneficial; client components for interactive flows. Use next/image with WebP/AVIF.

## State
Zustand with order draft persisted to sessionStorage.

