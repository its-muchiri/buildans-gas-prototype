# Buildans Gas Suppliers - Testing
Last updated: 2026-10-18

## Purpose
Test strategy, run commands, manual QA checklist.

## Suites
- Vitest: unit tests (pricing, utils, validation)
- Playwright: e2e (happy path: estate?config?checkout?track)

## Commands (to be configured)
- 
pm run test / 
pm run test:unit
- 
pm run test:e2e

## Manual QA Checklist
- [ ] Mobile 390px layout correct
- [ ] 3-tap reorder flow works (no signup)
- [ ] Estate persistence across sessions
- [ ] Live total updates
- [ ] Phone normalization (07XX/01XX/+254 ? 2547XXXXXXXX)
- [ ] STK timeout ? offer retry or Pay on Delivery
- [ ] Offline: show call/WhatsApp fallback
- [ ] Low-bandwidth performance
- [ ] PWA installable, offline shell works
- [ ] Accessibility: focus visible, labels, aria-live

