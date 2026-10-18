export const BUSINESS = {
  hours: { open: true, start: "08:00", end: "20:00" },
  phone: "+254714899200",
  whatsapp: "+254714899200",
  tillPaybillLabel: "Till/Paybill TBD",
} as const;

export const ESTATES = [
  { id: "ngoingwa", name: "Ngoingwa", eta: "15 min", deliveryFee: 0 },
  { id: "section9", name: "Section 9", eta: "15 min", deliveryFee: 0 },
  { id: "makongeni", name: "Makongeni", eta: "30 min", deliveryFee: 0 },
  { id: "kiboko", name: "Kiboko", eta: "20 min", deliveryFee: 0 },
  { id: "landless", name: "Landless", eta: "30 min", deliveryFee: 0 },
  { id: "thikatown", name: "Thika Town", eta: "20 min", deliveryFee: 0 },
  { id: "bluepost", name: "Blue Post", eta: "20 min", deliveryFee: 0 },
  { id: "garissa", name: "Garissa Road", eta: "30 min", deliveryFee: 0 },
] as const;

export const BRANDS = [
  { id: "progas", name: "Pro-Gas", logo: "/img/pro gas.jpg", supportedSizes: ["6kg", "13kg", "50kg"] },
  { id: "kgas", name: "K-Gas", logo: "/img/K gas.jpg", supportedSizes: ["6kg", "13kg", "50kg"] },
  { id: "total", name: "Total Energies", logo: "/img/Total Gas 6 kg.jpg", supportedSizes: ["6kg", "13kg", "50kg"] },
  { id: "afrigas", name: "Afrigas", logo: "/img/Afrigas 13kg.jpg", supportedSizes: ["6kg", "13kg", "50kg"] },
  { id: "rubis", name: "Rubis", logo: "/img/rubis-gas-scaled-1.png", supportedSizes: ["6kg", "13kg", "50kg"] },
  { id: "seagas", name: "SeaGas", logo: "/img/images.jpg", supportedSizes: ["6kg", "13kg"] },
] as const;

export const ACCESSORIES = [
  { id: "hose", name: "High-Pressure Safety Hose", price: 400, image: "/img/images (1).jpg" },
  { id: "regulator", name: "Low-Pressure Gas Regulator", price: 850, image: "/img/images (2).jpg" },
  { id: "burner", name: "Heavy-Duty Burner", price: 0, image: "/img/images (3).jpg" },
  { id: "cookertop", name: "Cooker Top", price: 0, image: "/img/images (4).jpg" },
] as const;

export const CYLINDER_PRICES = {
  refill: {
    progas: { "6kg": 1180, "13kg": 2550, "50kg": 9800 },
    kgas: { "6kg": 1180, "13kg": 2550, "50kg": 9800 },
    total: { "6kg": 1200, "13kg": 2650, "50kg": 9900 },
    afrigas: { "6kg": 1180, "13kg": 2550, "50kg": 9800 },
    rubis: { "6kg": 1180, "13kg": 2550, "50kg": 9800 },
    seagas: { "6kg": 1180, "13kg": 2550 },
  },
  new_set: {
    progas: { "6kg": 4850, "13kg": 6500, "50kg": 14500 },
    kgas: { "6kg": 4850, "13kg": 6500, "50kg": 14500 },
    total: { "6kg": 4950, "13kg": 6650, "50kg": 14700 },
    afrigas: { "6kg": 4850, "13kg": 6500, "50kg": 14500 },
    rubis: { "6kg": 4850, "13kg": 6500, "50kg": 14500 },
    seagas: { "6kg": 4850, "13kg": 6500 },
  },
} as const;
