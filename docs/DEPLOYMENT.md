# Buildans Gas Suppliers - Deployment
Last updated: 2026-10-18

## Purpose
Vercel/Supabase setup, env vars, callbacks, PWA verification, rollback.

## Hosting
Vercel (frontend + API routes)

## Database
Supabase (Postgres + RLS + Realtime)

## Steps
1. Create Supabase project, run migrations/schema
2. Configure env vars in Vercel (per .env.example)
3. Set DARAJA_CALLBACK_URL to https://<your-app>.vercel.app/api/mpesa/callback (or ngrok for sandbox)
4. Deploy to Vercel
5. Verify PWA install, Lighthouse scores (mobile =90)
6. Test sandbox STK flow end-to-end

## Rollback
Revert to previous Vercel deployment if issues.

