import { z } from "zod";

export const phoneSchema = z
  .string()
  .transform((v) => v.replace(/[\s\-()]/g, ""))
  .refine((v) => v.startsWith("+254") || v.startsWith("254") || v.startsWith("0"), {
    message: "Invalid Kenyan phone number",
  })
  .transform((v) => {
    if (v.startsWith("+254")) return v.replace("+", "");
    if (v.startsWith("0")) return "254" + v.slice(1);
    return v;
  })
  .refine((v) => /^254(7|1)\d{8}$/.test(v), {
    message: "Invalid Kenyan phone number format",
  });

export const orderCreateSchema = z.object({
  mode: z.enum(["refill", "new_set"]),
  size: z.enum(["6kg", "13kg", "50kg"]),
  brand: z.string().min(1),
  estateId: z.string().min(1),
  address: z.string().min(3),
  phone: phoneSchema,
  upgrades: z.object({
    hose: z.boolean(),
    regulator: z.boolean(),
  }),
  paymentMethod: z.enum(["mpesa", "cod"]),
});

export type OrderCreateInput = z.infer<typeof orderCreateSchema>;
