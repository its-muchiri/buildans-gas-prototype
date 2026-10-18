"use client";

import { useState } from "react";
import Link from "next/link";

export default function CheckoutPage() {
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [estate, setEstate] = useState("ngoingwa");
  const [paymentMethod, setPaymentMethod] = useState<"mpesa" | "cod">("mpesa");

  const isValid = phone.trim().length > 8 && address.trim().length > 5;

  return (
    <div className="bg-[var(--background)] font-sans text-[#0b1c30] flex flex-col min-h-screen">
      <header className="fixed top-0 w-full z-50 pt-safe bg-white/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(11,28,48,0.06)]">
        <div className="h-16 px-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Link href="/order/configure" className="w-11 h-11 rounded-full flex items-center justify-center text-[#0b1c30] hover:bg-[#eff4ff]">
              <span className="material-symbols-outlined text-lg">arrow_back</span>
            </Link>
            <h1 className="font-headline text-base font-bold text-[#002859] tracking-tight truncate">Checkout</h1>
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col relative w-full pt-16 pb-28">
        <div className="px-4 flex flex-col gap-6 mt-4">
          <section className="bg-white rounded-xl p-4 shadow-sm flex flex-col gap-3">
            <h2 className="font-headline text-base font-bold text-[#002859]">Delivery Details</h2>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#002859]">Estate/Area</label>
              <select
                value={estate}
                onChange={(e) => setEstate(e.target.value)}
                className="w-full h-12 bg-[#eff4ff] text-[#0b1c30] text-sm rounded-lg px-3 focus:outline-none focus:bg-[#dce9ff]"
              >
                <option value="ngoingwa">Ngoingwa</option>
                <option value="section9">Section 9</option>
                <option value="makongeni">Makongeni</option>
                <option value="kiboko">Kiboko</option>
                <option value="landless">Landless</option>
                <option value="thikatown">Thika Town</option>
                <option value="bluepost">Blue Post</option>
                <option value="garissa">Garissa Road</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#002859]">House/Apartment Details & Landmark</label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="e.g. House B4, Near Shell Ngoingwa, Gate Blue"
                className="w-full bg-[#eff4ff] text-[#0b1c30] text-sm rounded-lg p-3 focus:outline-none focus:bg-[#dce9ff] resize-none"
                rows={2}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#002859]">Phone Number (Safaricom)</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="07XX XXX XXX or 01XX XXX XXX"
                className="w-full h-12 bg-[#eff4ff] text-[#0b1c30] text-sm rounded-lg px-3 focus:outline-none focus:bg-[#dce9ff]"
              />
            </div>
          </section>

          <section className="bg-white rounded-xl p-4 shadow-sm flex flex-col gap-3">
            <h2 className="font-headline text-base font-bold text-[#002859]">Payment Method</h2>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setPaymentMethod("mpesa")}
                className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-sm font-semibold transition-all ${
                  paymentMethod === "mpesa" ? "bg-[#00A859] text-white shadow-sm" : "bg-[#eff4ff] text-[#434750]"
                }`}
              >
                M-Pesa STK Push
              </button>
              <button
                onClick={() => setPaymentMethod("cod")}
                className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-sm font-semibold transition-all ${
                  paymentMethod === "cod" ? "bg-[#002859] text-white shadow-sm" : "bg-[#eff4ff] text-[#434750]"
                }`}
              >
                Pay on Delivery
              </button>
            </div>
          </section>

          <section className="bg-white rounded-xl p-4 shadow-sm flex flex-col gap-2">
            <h2 className="font-headline text-base font-bold text-[#002859]">Order Summary</h2>
            <div className="flex justify-between text-sm text-[#434750]">
              <span>Subtotal</span>
              <span>KSh 2,550</span>
            </div>
            <div className="flex justify-between text-sm text-[#434750]">
              <span>Delivery Fee</span>
              <span>KSh 0</span>
            </div>
            <div className="flex justify-between text-base font-bold text-[#002859] pt-2 border-t border-[#e2e8f0]">
              <span>Total</span>
              <span>KSh 2,550</span>
            </div>
          </section>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#e2e8f0] p-4">
        <Link
          href={isValid ? "/track/BGS-84920" : "#"}
          className={`w-full flex items-center justify-center font-semibold py-3 rounded-lg active:scale-95 transition-all ${
            isValid
              ? "bg-[#00A859] hover:bg-[#00994d] text-white"
              : "bg-[#cbd5e1] text-[#64748b] cursor-not-allowed"
          }`}
        >
          ? Confirm & Dispatch Rider
        </Link>
      </div>
    </div>
  );
}
