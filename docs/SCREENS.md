# Buildans Gas Suppliers - Screens
Last updated: 2026-10-18

## Purpose
Per-screen spec: layout, components, states, acceptance criteria.

## Screen 1: Home (/)
- Header: logo, live status badge, call/WhatsApp
- Hero: banner with headline
- Estate picker: scrollable chips, persist choice, update ETA
- Action cards: Swap cylinder, New cylinder + kit
- Accessories carousel
- Social proof cards (TikTok/Instagram)
- CTA: Proceed to configurator

Acceptance: Reaches configurator in = 2 taps after estate pick.

## Screen 2: Configurator (/order/configure)
- Mode toggle (refill/new_set)
- Size selection (6/13/50kg)
- Brand grid
- Safety upgrades (hose +400, regulator +850)
- Sticky footer with live total + proceed

Acceptance: Live total updates correctly; new_set hides duplicate upgrades.

## Screen 3: Checkout (/checkout)
- Area/estate/landmark/house, phone (normalized to 2547XXXXXXXX)
- Payment tabs (M-Pesa STK, Pay on Delivery)
- Order summary with lines, fees, total
- Confirm & Dispatch button (disabled until valid, loading prevents double submit)

Acceptance: Form validation works; total matches server (in full build).

## Screen 4: Tracking (/track/[orderId])
- Stepper with live updates (Realtime + polling fallback)
- Rider card after dispatch (call/WhatsApp tel:/wa.me)
- EPRA safety accordion
- Reorder for returning customers

## Admin (/admin)
- Live orders list, assign rider dropdown, status buttons (Dispatched/Arriving/Delivered/Cancelled)
- Sound on new order
- Password/magic-link protected

