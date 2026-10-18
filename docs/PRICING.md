# Buildans Gas Suppliers - Pricing
Last updated: 2026-10-18

## Purpose
calculateTotal logic, catalog shape, server-as-source-of-truth.

## Rule
Server recomputes every order total. Never trust client-sent totals.

## Function
calculateTotal(order) ? { lines, deliveryFee, total } (pure function with unit tests)

## Catalog Shape
All prices/brands/estates in src/config/catalog.ts. Types for ESTATES, BRANDS, CYLINDER_PRICES, ACCESSORIES, BUSINESS.

## Known Prices
- Refill from KSh 1,100
- New set from KSh 4,500
- Safety hose +KSh 400
- Regulator +KSh 850
All others marked // TODO: confirm with owner in ASSUMPTIONS.md

