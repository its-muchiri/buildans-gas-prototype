# Buildans Gas Suppliers - Data Model
Last updated: 2026-10-18

## Purpose
Tables, columns, RLS, enums, order lifecycle.

## Tables (Supabase)
### orders
- id (uuid/text), created_at, estate_id, address_details, phone (normalized), mode (refill|new_set)
- items (jsonb), subtotal, delivery_fee, total, payment_method (mpesa|cod), payment_status (pending|paid|failed|refunded)
- status (received|dispatched|arriving|delivered|cancelled), rider_id, mpesa_checkout_id, mpesa_receipt

### riders
- id, name, phone, bike_reg, active

## RLS
Clients read only their own order via unguessable ID; no direct writes. All writes via server routes with service role key.

## Order Lifecycle
received ? (if paid/dispatching) dispatched ? arriving ? delivered (or cancelled)

