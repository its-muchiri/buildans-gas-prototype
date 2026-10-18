# Buildans Gas Suppliers - M-Pesa (Daraja)
Last updated: 2026-10-18

## Purpose
Daraja flow, sandbox/prod, idempotency, timeout/retry, errors, go-live.

## Flow
OAuth ? STK Push (with orderId as account ref) ? Callback (verify, update paid) ? Trigger SMS.

## Key Points
- DARAJA_ENV=sandbox/prod
- Idempotent updates by CheckoutRequestID/receipt
- Timeout: offer retry or switch to Pay on Delivery
- Callback must be public (Vercel/ngrok)

