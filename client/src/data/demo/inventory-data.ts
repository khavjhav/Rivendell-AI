// ---------------------------------------------------------------------------
// Inventory Management Demo – Mock Data
// ---------------------------------------------------------------------------

export interface Product {
  id: number;
  sku: string;
  name: string;
  category: "Electronics" | "Accessories" | "Parts" | "Cables";
  quantity: number;
  reorderPoint: number;
  unitCost: number;
  totalValue: number;
  status: "in-stock" | "low-stock" | "out-of-stock";
  lastRestocked: string;
}

export interface StockMovement {
  id: number;
  product: string;
  type: "in" | "out" | "adjustment";
  quantity: number;
  date: string;
  reference: string;
}

export interface Supplier {
  id: number;
  name: string;
  contact: string;
  products: number;
  leadTime: string;
  rating: number;
}

export interface CategoryStock {
  category: string;
  inStock: number;
  lowStock: number;
  outOfStock: number;
  totalValue: number;
}

export interface LowStockItem {
  id: number;
  name: string;
  sku: string;
  currentQty: number;
  reorderPoint: number;
  suggestedOrder: number;
  supplier: string;
  severity: "warning" | "critical";
}

// ---------------------------------------------------------------------------
// Stats
// ---------------------------------------------------------------------------

export const inventoryStats = {
  totalSKUs: {
    value: "1,247",
    change: "+12 this week",
    changeType: "positive" as const,
  },
  stockValue: {
    value: "\u00a3284,500",
    change: "+3.2% from last month",
    changeType: "positive" as const,
  },
  lowStockAlerts: {
    value: "23",
    change: "+5 since yesterday",
    changeType: "negative" as const,
  },
  ordersPending: {
    value: "8",
    change: "3 arriving today",
    changeType: "neutral" as const,
  },
};

// ---------------------------------------------------------------------------
// Products
// ---------------------------------------------------------------------------

export const products: Product[] = [
  {
    id: 1,
    sku: "PHN-001",
    name: "Wireless Bluetooth Headphones",
    category: "Electronics",
    quantity: 342,
    reorderPoint: 50,
    unitCost: 24.99,
    totalValue: 8546.58,
    status: "in-stock",
    lastRestocked: "2026-02-18",
  },
  {
    id: 2,
    sku: "PHN-002",
    name: "USB-C Charging Hub",
    category: "Electronics",
    quantity: 18,
    reorderPoint: 30,
    unitCost: 34.5,
    totalValue: 621.0,
    status: "low-stock",
    lastRestocked: "2026-02-10",
  },
  {
    id: 3,
    sku: "ACC-010",
    name: "Silicone Phone Case",
    category: "Accessories",
    quantity: 500,
    reorderPoint: 100,
    unitCost: 4.75,
    totalValue: 2375.0,
    status: "in-stock",
    lastRestocked: "2026-02-15",
  },
  {
    id: 4,
    sku: "PRT-005",
    name: "Replacement LCD Screen 6.1\"",
    category: "Parts",
    quantity: 0,
    reorderPoint: 20,
    unitCost: 89.99,
    totalValue: 0,
    status: "out-of-stock",
    lastRestocked: "2026-01-22",
  },
  {
    id: 5,
    sku: "CBL-003",
    name: "USB-C to Lightning Cable 1m",
    category: "Cables",
    quantity: 275,
    reorderPoint: 50,
    unitCost: 6.99,
    totalValue: 1922.25,
    status: "in-stock",
    lastRestocked: "2026-02-20",
  },
  {
    id: 6,
    sku: "PHN-003",
    name: "Portable Power Bank 10000mAh",
    category: "Electronics",
    quantity: 8,
    reorderPoint: 25,
    unitCost: 18.5,
    totalValue: 148.0,
    status: "low-stock",
    lastRestocked: "2026-02-05",
  },
  {
    id: 7,
    sku: "ACC-015",
    name: "Tempered Glass Screen Protector",
    category: "Accessories",
    quantity: 420,
    reorderPoint: 80,
    unitCost: 2.99,
    totalValue: 1255.8,
    status: "in-stock",
    lastRestocked: "2026-02-12",
  },
  {
    id: 8,
    sku: "PRT-012",
    name: "Battery Pack Li-Ion 4000mAh",
    category: "Parts",
    quantity: 5,
    reorderPoint: 15,
    unitCost: 12.75,
    totalValue: 63.75,
    status: "low-stock",
    lastRestocked: "2026-01-28",
  },
  {
    id: 9,
    sku: "CBL-007",
    name: "HDMI 2.1 Cable 2m",
    category: "Cables",
    quantity: 190,
    reorderPoint: 40,
    unitCost: 9.49,
    totalValue: 1803.1,
    status: "in-stock",
    lastRestocked: "2026-02-14",
  },
  {
    id: 10,
    sku: "PHN-008",
    name: "Smart Fitness Tracker",
    category: "Electronics",
    quantity: 0,
    reorderPoint: 35,
    unitCost: 45.0,
    totalValue: 0,
    status: "out-of-stock",
    lastRestocked: "2026-01-15",
  },
  {
    id: 11,
    sku: "ACC-022",
    name: "Wireless Charging Pad",
    category: "Accessories",
    quantity: 64,
    reorderPoint: 30,
    unitCost: 14.99,
    totalValue: 959.36,
    status: "in-stock",
    lastRestocked: "2026-02-17",
  },
  {
    id: 12,
    sku: "CBL-011",
    name: "Ethernet Cat6 Cable 5m",
    category: "Cables",
    quantity: 12,
    reorderPoint: 25,
    unitCost: 7.25,
    totalValue: 87.0,
    status: "low-stock",
    lastRestocked: "2026-02-01",
  },
];

// ---------------------------------------------------------------------------
// Stock Movements
// ---------------------------------------------------------------------------

export const stockMovements: StockMovement[] = [
  { id: 1, product: "Wireless Bluetooth Headphones", type: "in", quantity: 150, date: "2026-02-18", reference: "PO-2041" },
  { id: 2, product: "USB-C Charging Hub", type: "out", quantity: 45, date: "2026-02-17", reference: "SO-8823" },
  { id: 3, product: "Silicone Phone Case", type: "in", quantity: 300, date: "2026-02-15", reference: "PO-2038" },
  { id: 4, product: "Replacement LCD Screen 6.1\"", type: "out", quantity: 20, date: "2026-02-14", reference: "SO-8819" },
  { id: 5, product: "Portable Power Bank 10000mAh", type: "adjustment", quantity: -3, date: "2026-02-13", reference: "ADJ-0112" },
  { id: 6, product: "Tempered Glass Screen Protector", type: "in", quantity: 200, date: "2026-02-12", reference: "PO-2035" },
  { id: 7, product: "HDMI 2.1 Cable 2m", type: "out", quantity: 60, date: "2026-02-11", reference: "SO-8810" },
  { id: 8, product: "Smart Fitness Tracker", type: "out", quantity: 35, date: "2026-02-10", reference: "SO-8807" },
  { id: 9, product: "USB-C to Lightning Cable 1m", type: "in", quantity: 100, date: "2026-02-09", reference: "PO-2032" },
  { id: 10, product: "Battery Pack Li-Ion 4000mAh", type: "adjustment", quantity: -2, date: "2026-02-08", reference: "ADJ-0109" },
];

// ---------------------------------------------------------------------------
// Suppliers
// ---------------------------------------------------------------------------

export const suppliers: Supplier[] = [
  { id: 1, name: "TechSource Global", contact: "orders@techsourceglobal.com", products: 38, leadTime: "5-7 days", rating: 5 },
  { id: 2, name: "CableCo Direct", contact: "supply@cablecodirect.com", products: 22, leadTime: "3-5 days", rating: 4 },
  { id: 3, name: "PartsDepot UK", contact: "info@partsdepotuk.co.uk", products: 15, leadTime: "7-10 days", rating: 3 },
  { id: 4, name: "AccessoryHub Ltd", contact: "trade@accessoryhub.co.uk", products: 41, leadTime: "2-4 days", rating: 5 },
  { id: 5, name: "ElectroParts Europe", contact: "b2b@electroparts.eu", products: 29, leadTime: "10-14 days", rating: 2 },
];

// ---------------------------------------------------------------------------
// Category Stock
// ---------------------------------------------------------------------------

export const categoryStock: CategoryStock[] = [
  { category: "Electronics", inStock: 342, lowStock: 26, outOfStock: 35, totalValue: 94520 },
  { category: "Accessories", inStock: 984, lowStock: 18, outOfStock: 5, totalValue: 46380 },
  { category: "Parts", inStock: 120, lowStock: 45, outOfStock: 12, totalValue: 68750 },
  { category: "Cables", inStock: 477, lowStock: 12, outOfStock: 3, totalValue: 32100 },
  { category: "Peripherals", inStock: 215, lowStock: 9, outOfStock: 2, totalValue: 42750 },
];

// ---------------------------------------------------------------------------
// Low Stock Items
// ---------------------------------------------------------------------------

export const lowStockItems: LowStockItem[] = [
  { id: 1, name: "USB-C Charging Hub", sku: "PHN-002", currentQty: 18, reorderPoint: 30, suggestedOrder: 50, supplier: "TechSource Global", severity: "warning" },
  { id: 2, name: "Portable Power Bank 10000mAh", sku: "PHN-003", currentQty: 8, reorderPoint: 25, suggestedOrder: 75, supplier: "TechSource Global", severity: "critical" },
  { id: 3, name: "Battery Pack Li-Ion 4000mAh", sku: "PRT-012", currentQty: 5, reorderPoint: 15, suggestedOrder: 40, supplier: "PartsDepot UK", severity: "critical" },
  { id: 4, name: "Ethernet Cat6 Cable 5m", sku: "CBL-011", currentQty: 12, reorderPoint: 25, suggestedOrder: 60, supplier: "CableCo Direct", severity: "warning" },
  { id: 5, name: "Replacement LCD Screen 6.1\"", sku: "PRT-005", currentQty: 0, reorderPoint: 20, suggestedOrder: 30, supplier: "PartsDepot UK", severity: "critical" },
  { id: 6, name: "Smart Fitness Tracker", sku: "PHN-008", currentQty: 0, reorderPoint: 35, suggestedOrder: 50, supplier: "ElectroParts Europe", severity: "critical" },
];
