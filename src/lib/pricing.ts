import { CYLINDER_PRICES, ESTATES, ACCESSORIES } from "@/config/catalog";

export type OrderDraft = {
  mode: "refill" | "new_set";
  size: "6kg" | "13kg" | "50kg";
  brand: string;
  estateId: string;
  address?: string;
  phone?: string;
  upgrades: {
    hose: boolean;
    regulator: boolean;
  };
};

export function calculateTotal(draft: OrderDraft) {
  const estate = ESTATES.find((e) => e.id === draft.estateId);
  const deliveryFee = estate?.deliveryFee ?? 0;
  
  let basePrice = 0;
  const brandKey = draft.brand as keyof typeof CYLINDER_PRICES.refill;
  const size = draft.size as "6kg" | "13kg" | "50kg";
  const priceTable = draft.mode === "refill" 
    ? CYLINDER_PRICES.refill[brandKey] 
    : CYLINDER_PRICES.new_set[brandKey];
  if (priceTable) {
    basePrice = (priceTable as Record<"6kg" | "13kg" | "50kg", number>)[size] ?? 0;
  }
  
  let subtotal = basePrice;
  if (draft.upgrades.hose && draft.mode === "refill") {
    subtotal += ACCESSORIES.find((a) => a.id === "hose")?.price ?? 0;
  }
  if (draft.upgrades.regulator && draft.mode === "refill") {
    subtotal += ACCESSORIES.find((a) => a.id === "regulator")?.price ?? 0;
  }
  
  const total = subtotal + deliveryFee;
  return { lines: [], subtotal, deliveryFee, total };
}
