import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type OrderDraft = {
  mode: "refill" | "new_set";
  size: "6kg" | "13kg" | "50kg";
  brand: string;
  estateId: string;
  address: string;
  phone: string;
  upgrades: { hose: boolean; regulator: boolean };
};

type OrderStore = {
  draft: OrderDraft;
  setDraft: (draft: Partial<OrderDraft>) => void;
  reset: () => void;
};

const initialDraft: OrderDraft = {
  mode: "refill",
  size: "13kg",
  brand: "progas",
  estateId: "ngoingwa",
  address: "",
  phone: "",
  upgrades: { hose: false, regulator: false },
};

export const useOrderStore = create<OrderStore>()(
  persist(
    (set) => ({
      draft: initialDraft,
      setDraft: (draft) => set((state) => ({ draft: { ...state.draft, ...draft } })),
      reset: () => set({ draft: initialDraft }),
    }),
    {
      name: "buildans-order-draft",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
