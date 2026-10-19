import Link from "next/link";
import Image from "next/image";
import { ESTATES, BUSINESS, ACCESSORIES } from "@/config/catalog";

export default function HomePage() {
  const whatsappUrl = `https://wa.me/${BUSINESS.whatsapp.replace("+", "")}?text=Hello%20Permalli%20Gas%2C%20I%20need%20a%20cylinder%20refill`;
  const callUrl = `tel:${BUSINESS.phone}`;

  return (
    <div className="bg-[var(--background)] font-sans text-[var(--foreground)] flex flex-col min-h-screen transition-colors">
      <header className="fixed top-0 w-full z-50 pt-safe bg-[var(--surface)]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(11,28,48,0.06)] dark:shadow-[0_1px_8px_rgba(0,0,0,0.4)] border-b border-[var(--border)]">
        <div className="bg-[#002859] dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-800 text-white px-4 py-1.5 flex items-center justify-between text-center">
          <div className="flex items-center justify-center gap-1.5 w-full">
            <span className="material-symbols-outlined text-[#FE7112] text-sm leading-none">bolt</span>
            <p className="text-[10px] font-semibold text-white truncate">
              Express Delivery in 20-30 Mins • Ngoingwa, Landless & Thika Environs
            </p>
          </div>
        </div>
        <div className="h-20 px-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Image
              alt="Permalli Gas Suppliers Logo"
              className="h-9 w-auto object-contain rounded-lg"
              src="/img/pro gas.jpg"
              width={44}
              height={36}
            />
            <div className="flex flex-col">
              <span className="font-headline text-base font-bold text-[var(--foreground)] tracking-tight leading-none">
                Permalli Gas Suppliers
              </span>
              <div className="flex items-center gap-1 text-[var(--foreground)]/70 text-xs mt-1">
                <span className="material-symbols-outlined text-[#FE7112] text-sm leading-none">location_on</span>
                <span className="font-medium">Ngoingwa, Thika</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Link
              href="https://www.google.com/maps?q=Ngoingwa+Thika+Kenya"
              target="_blank"
              className="w-11 h-11 rounded-full flex items-center justify-center text-[var(--foreground)] relative hover:bg-[var(--surface-variant)] transition-colors"
              aria-label="Open location on map"
            >
              <span className="material-symbols-outlined text-lg leading-none">pin_drop</span>
            </Link>
            <Link
              href={callUrl}
              className="w-11 h-11 rounded-full flex items-center justify-center text-[var(--foreground)] relative hover:bg-[var(--surface-variant)] transition-colors"
            >
              <span className="material-symbols-outlined text-lg leading-none">call</span>
            </Link>
            <Link
              href={whatsappUrl}
              className="w-11 h-11 rounded-full flex items-center justify-center text-[var(--foreground)] relative hover:bg-[var(--surface-variant)] transition-colors"
            >
              <span className="material-symbols-outlined text-lg leading-none">chat</span>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col relative w-full pt-28 pb-24">
        <div className="flex flex-col w-full gap-6 px-4">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#002859] via-[#0f3d7a] to-[#002859] dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-white p-6 shadow-xl">
            <div className="relative z-10 flex flex-col gap-3">
              <h1 className="font-headline text-2xl md:text-3xl font-bold leading-tight tracking-tight">
                Premium LPG Delivery. Trusted Across Thika.
              </h1>
              <p className="text-sm text-white/90 max-w-[280px]">
                Fast, safe & reliable gas refills and new cylinders delivered to your doorstep in 20-30 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 pt-1">
                <Link
                  href="/order/configure"
                  className="flex items-center justify-center gap-1.5 bg-[#FE7112] text-[#5a2200] font-semibold text-sm px-4 py-3 rounded-xl shadow-md active:scale-95 transition-all text-center"
                >
                  <span className="material-symbols-outlined text-base">bolt</span>
                  Order Now - From KSh 1,180
                </Link>
                <Link
                  href={whatsappUrl}
                  className="flex items-center justify-center gap-1.5 bg-white/15 backdrop-blur-sm text-white font-semibold text-sm px-4 py-3 rounded-xl active:scale-95 transition-all text-center"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  Quick WhatsApp
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm text-[var(--foreground)] flex items-center gap-1">
                <span className="material-symbols-outlined text-[#FE7112] text-base">near_me</span>
                Delivery Locations
              </span>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
              {ESTATES.slice(0, 8).map((estate) => (
                <button
                  key={estate.id}
                  className="shrink-0 flex items-center gap-1 px-3 py-2 rounded-full bg-[var(--surface-variant)] text-[var(--foreground)] text-xs font-medium hover:opacity-90 transition-colors border border-[var(--border)]"
                >
                  <span className="material-symbols-outlined text-xs">location_on</span>
                  {estate.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-[var(--surface)] rounded-2xl p-4 shadow-sm flex flex-col gap-3 border border-[var(--border)]">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#FE7112]/10 text-[#FE7112] p-1 rounded-lg">
                      <span className="material-symbols-outlined text-lg">swap_horiz</span>
                    </span>
                    <span className="font-bold text-base text-[var(--foreground)]">Gas Refill</span>
                  </div>
                  <p className="text-sm text-[var(--foreground)]/70 mt-1">
                    Exchange your empty cylinder for a certified safety-tested full unit.
                  </p>
                </div>
                <Image
                  className="w-20 h-20 rounded-xl object-cover bg-[var(--surface-variant)] shrink-0"
                  src="/img/pro gas.jpg"
                  alt="Gas cylinder refill"
                  width={80}
                  height={80}
                />
              </div>
              <Link
                href="/order/configure?mode=refill"
                className="w-full mt-1 bg-[#FE7112] hover:bg-[#F46A06] text-[#5a2200] font-semibold text-sm py-3 rounded-xl shadow-sm active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base">local_gas_station</span>
                Order Refill Swap (from KSh 1,180)
              </Link>
            </div>

            <div className="bg-[var(--surface)] rounded-2xl p-4 shadow-sm flex flex-col gap-3 border border-[var(--border)]">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#002859]/10 dark:bg-[#4d7cfe]/20 text-[#002859] dark:text-[#4d7cfe] p-1 rounded-lg">
                      <span className="material-symbols-outlined text-lg">inventory_2</span>
                    </span>
                    <span className="font-bold text-base text-[var(--foreground)]">Complete New Set</span>
                  </div>
                  <p className="text-sm text-[var(--foreground)]/70 mt-1">
                    Brand new cylinder + gas + regulator + hose + burner.
                  </p>
                </div>
                <Image
                  className="w-20 h-20 rounded-xl object-cover bg-[var(--surface-variant)] shrink-0"
                  src="/img/images (2).jpg"
                  alt="Complete gas set"
                  width={80}
                  height={80}
                />
              </div>
              <Link
                href="/order/configure?mode=new_set"
                className="w-full mt-1 bg-[#002859] dark:bg-[#4d7cfe] hover:opacity-90 text-white font-semibold text-sm py-3 rounded-xl shadow-sm active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base">add_shopping_cart</span>
                Get Complete Kit (from KSh 4,850)
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-headline text-base font-semibold text-[var(--foreground)]">Gas Accessories & Appliances</h3>
              <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
                {ACCESSORIES.map((item) => (
                  <div key={item.id} className="min-w-[160px] bg-[var(--surface)] rounded-2xl border border-[var(--border)] shadow-sm overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={160}
                      height={120}
                      className="w-full h-24 object-cover"
                    />
                    <div className="p-3 flex flex-col gap-1.5">
                      <span className="text-xs font-medium text-[var(--foreground)] line-clamp-2">{item.name}</span>
                      <span className="text-sm font-semibold text-[#FE7112]">KSh {item.price}</span>
                      <Link
                        href="/order/configure"
                        className="text-xs font-semibold text-[#002859] dark:text-[#4d7cfe] hover:underline"
                      >
                        Add to order
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
