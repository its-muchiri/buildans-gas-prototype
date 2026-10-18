"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { BRANDS, CYLINDER_PRICES, ACCESSORIES } from "@/config/catalog";

type Size = "6kg" | "13kg" | "50kg";

function ConfigureContent() {
  const searchParams = useSearchParams();
  const modeParam = searchParams.get("mode");
  const [mode, setMode] = useState<"refill" | "new_set">(modeParam === "new_set" ? "new_set" : "refill");
  const [size, setSize] = useState<Size>("13kg");
  const [brand, setBrand] = useState("progas");
  const [upgrades, setUpgrades] = useState({ hose: false, regulator: false });

  const brandKey = brand as keyof typeof CYLINDER_PRICES.refill;
  const priceTable = mode === "refill" ? CYLINDER_PRICES.refill[brandKey] : CYLINDER_PRICES.new_set[brandKey];
  const basePrice = priceTable ? (priceTable as Record<Size, number>)[size] ?? 0 : 0;

  let total = basePrice;
  if (mode === "refill") {
    if (upgrades.hose) total += ACCESSORIES.find((a) => a.id === "hose")?.price ?? 0;
    if (upgrades.regulator) total += ACCESSORIES.find((a) => a.id === "regulator")?.price ?? 0;
  }

  return (
    <div className="bg-[var(--background)] font-sans text-[#0b1c30] flex flex-col min-h-screen">
      <header className="fixed top-0 w-full z-50 pt-safe bg-white/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(11,28,48,0.06)]">
        <div className="h-16 px-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Link href="/" className="w-11 h-11 rounded-full flex items-center justify-center text-[#0b1c30] hover:bg-[#eff4ff]">
              <span className="material-symbols-outlined text-lg">arrow_back</span>
            </Link>
            <h1 className="font-headline text-base font-bold text-[#002859] tracking-tight truncate">LPG Configurator</h1>
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col relative w-full pt-16 pb-28">
        <div className="px-4 flex flex-col gap-6 mt-4">
          <section className="bg-white p-1 rounded-xl shadow-sm">
            <div className="grid grid-cols-2 gap-1">
              <button
                onClick={() => setMode("refill")}
                className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-sm font-semibold transition-all ${
                  mode === "refill" ? "bg-[#002859] text-white shadow-sm" : "text-[#434750] hover:bg-[#eff4ff]"
                }`}
              >
                <span className="material-symbols-outlined text-base">published_with_changes</span>
                Refill (Swap)
              </button>
              <button
                onClick={() => setMode("new_set")}
                className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-sm font-semibold transition-all ${
                  mode === "new_set" ? "bg-[#002859] text-white shadow-sm" : "text-[#434750] hover:bg-[#eff4ff]"
                }`}
              >
                <span className="material-symbols-outlined text-base">inventory_2</span>
                New Complete Set
              </button>
            </div>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-headline text-base font-bold text-[#002859]">1. Select Cylinder Size</h2>
            <div className="grid grid-cols-3 gap-2">
              {(["6kg", "13kg", "50kg"] as const).map((s) => {
                const priceTableVal = mode === "refill" ? CYLINDER_PRICES.refill[brandKey] : CYLINDER_PRICES.new_set[brandKey];
                const sPrice = priceTableVal ? (priceTableVal as Record<Size, number>)[s] ?? 0 : 0;
                return (
                  <div
                    key={s}
                    onClick={() => setSize(s)}
                    className={`relative cursor-pointer rounded-xl p-3 shadow-sm transition-all ${
                      size === s ? "bg-[#d7e2ff] ring-2 ring-[#002859]" : "bg-white hover:shadow-md"
                    }`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <span className="font-headline text-base font-bold text-[#002859]">{s}</span>
                      <span className="text-xs text-[#434750] mt-0.5">
                        {s === "6kg" ? "Compact" : s === "13kg" ? "Family" : "Commercial"}
                      </span>
                    </div>
                    <div className="mt-2 text-center">
                      <span className="text-xs text-[#434750]">KSh</span>
                      <span className="text-sm font-bold text-[#002859] ml-0.5">{sPrice}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-headline text-base font-bold text-[#002859]">2. Select Brand</h2>
            <div className="grid grid-cols-2 gap-2">
              {BRANDS.map((b) => (
                <div
                  key={b.id}
                  onClick={() => setBrand(b.id)}
                  className={`cursor-pointer rounded-xl p-3 transition-all ${
                    brand === b.id ? "bg-[#d7e2ff] ring-2 ring-[#002859]" : "bg-white shadow-sm hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Image src={b.logo} alt={b.name} width={40} height={40} className="rounded-lg object-cover" />
                    <span className="font-semibold text-sm text-[#002859]">{b.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {mode === "refill" && (
            <section className="flex flex-col gap-3">
              <h2 className="font-headline text-base font-bold text-[#002859]">3. Safety Upgrades</h2>
              <div className="flex flex-col gap-2">
                <label className="flex items-center justify-between bg-white p-3 rounded-xl shadow-sm cursor-pointer">
                  <div>
                    <span className="font-semibold text-sm text-[#002859]">High-Pressure Safety Hose</span>
                    <span className="text-xs text-[#434750] block">+KSh {ACCESSORIES.find((a) => a.id === "hose")?.price}</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={upgrades.hose}
                    onChange={(e) => setUpgrades({ ...upgrades, hose: e.target.checked })}
                    className="w-5 h-5"
                  />
                </label>
                <label className="flex items-center justify-between bg-white p-3 rounded-xl shadow-sm cursor-pointer">
                  <div>
                    <span className="font-semibold text-sm text-[#002859]">Low-Pressure Gas Regulator</span>
                    <span className="text-xs text-[#434750] block">+KSh {ACCESSORIES.find((a) => a.id === "regulator")?.price}</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={upgrades.regulator}
                    onChange={(e) => setUpgrades({ ...upgrades, regulator: e.target.checked })}
                    className="w-5 h-5"
                  />
                </label>
              </div>
            </section>
          )}
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#e2e8f0] p-4 flex items-center justify-between gap-3 z-50">
        <div>
          <span className="text-xs text-[#434750]">Total</span>
          <div className="text-lg font-bold text-[#002859]">KSh {total}</div>
        </div>
        <Link
          href="/checkout"
          className="flex-1 flex items-center justify-center bg-[#FE7112] hover:bg-[#F46A06] text-[#5a2200] font-semibold py-3 rounded-lg active:scale-95 transition-all"
        >
          Proceed to Delivery Address
        </Link>
      </div>
    </div>
  );
}

export default function ConfigurePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[var(--background)] flex items-center justify-center">Loading...</div>}>
      <ConfigureContent />
    </Suspense>
  );
}
