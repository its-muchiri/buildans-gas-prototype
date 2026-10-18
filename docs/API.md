# Buildans Gas Suppliers - API
Last updated: 2026-10-18

## Purpose
Route specs with methods, paths, Zod schemas, errors, auth, rate limits.

| Route | Method | Purpose | Notes |
|---|---|---|---|
| /api/orders | POST | Create order; validate with Zod; recompute total server-side; insert; trigger payment/notifications | Rate limit, sanitize input |
| /api/mpesa/stkpush | POST | Get Daraja token, send STK Push, store CheckoutRequestID | Idempotent by orderId |
| /api/mpesa/callback | POST | Verify callback, update payment status idempotently, trigger SMS | Secure (verify source) |
| /api/orders/[id] | GET | Public order status only (no sensitive data) | Read-only |
| /api/admin/orders/[id]/status | POST | Update order status (dispatch/delivered/cancelled) | Protected (admin auth) |

