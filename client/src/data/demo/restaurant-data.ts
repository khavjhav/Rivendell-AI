// Restaurant Management Demo — Mock Data
// All data is fictional and for demonstration purposes only.

import {
  LayoutDashboard,
  ShoppingBag,
  Grid3X3,
  UtensilsCrossed,
  ChefHat,
  Users,
  BarChart3,
  Settings,
  PoundSterling,
  TrendingUp,
  Percent,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { DemoSidebarConfig } from "@/components/demo/DemoSidebar";

// ---------------------------------------------------------------------------
// Interfaces
// ---------------------------------------------------------------------------

export interface RestaurantStat {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: LucideIcon;
}

export interface RevenueDataPoint {
  day: string;
  revenue: number;
  orders: number;
}

export interface LiveOrder {
  id: string;
  table: string;
  items: number;
  total: string;
  status: "new" | "preparing" | "ready" | "served";
  time: string;
}

export interface TableInfo {
  id: string;
  seats: number;
  status: "available" | "occupied" | "reserved";
  guests?: number;
  order?: string;
  reservedFor?: string;
}

export interface PopularItem {
  name: string;
  orders: number;
  revenue: string;
}

export interface KitchenOrder {
  id: string;
  table: string;
  items: string[];
  status: "new" | "cooking" | "ready";
  elapsedMin: number;
  priority: "normal" | "rush";
}

// ---------------------------------------------------------------------------
// Sidebar Configuration
// ---------------------------------------------------------------------------

export const restaurantSidebarConfig: DemoSidebarConfig = {
  groups: [
    {
      label: "Main",
      items: [
        { label: "Dashboard", icon: LayoutDashboard, page: "dashboard" },
        { label: "Orders", icon: ShoppingBag, page: "orders", badge: "12" },
        { label: "Tables", icon: Grid3X3, page: "tables" },
        { label: "Menu", icon: UtensilsCrossed, page: "menu" },
      ],
    },
    {
      label: "Operations",
      items: [
        { label: "Kitchen Display", icon: ChefHat, page: "kitchen" },
        { label: "Staff", icon: Users, page: "staff" },
        { label: "Reports", icon: BarChart3, page: "reports" },
        { label: "Settings", icon: Settings, page: "settings" },
      ],
    },
  ],
  user: {
    name: "Marco Rossi",
    email: "marco@bellavita.co.uk",
    initials: "MR",
  },
};

// ---------------------------------------------------------------------------
// Stats
// ---------------------------------------------------------------------------

export const restaurantStats: RestaurantStat[] = [
  {
    title: "Today's Revenue",
    value: "\u00A33,847",
    change: "+12.5%",
    changeType: "positive",
    icon: PoundSterling,
  },
  {
    title: "Orders",
    value: "156",
    change: "+8.3%",
    changeType: "positive",
    icon: ShoppingBag,
  },
  {
    title: "Avg Ticket",
    value: "\u00A324.66",
    change: "+3.2%",
    changeType: "positive",
    icon: TrendingUp,
  },
  {
    title: "Table Utilisation",
    value: "78%",
    change: "+5.1%",
    changeType: "positive",
    icon: Percent,
  },
];

// ---------------------------------------------------------------------------
// Revenue Chart Data (7 days)
// ---------------------------------------------------------------------------

export const revenueData: RevenueDataPoint[] = [
  { day: "Mon", revenue: 2840, orders: 112 },
  { day: "Tue", revenue: 3120, orders: 128 },
  { day: "Wed", revenue: 2960, orders: 118 },
  { day: "Thu", revenue: 3450, orders: 142 },
  { day: "Fri", revenue: 4280, orders: 176 },
  { day: "Sat", revenue: 5120, orders: 198 },
  { day: "Sun", revenue: 3847, orders: 156 },
];

// ---------------------------------------------------------------------------
// Live Orders
// ---------------------------------------------------------------------------

export const liveOrders: LiveOrder[] = [
  { id: "ORD-001", table: "T5", items: 4, total: "\u00A368.50", status: "preparing", time: "12 min ago" },
  { id: "ORD-002", table: "T12", items: 2, total: "\u00A334.00", status: "ready", time: "8 min ago" },
  { id: "ORD-003", table: "Bar", items: 3, total: "\u00A322.50", status: "served", time: "25 min ago" },
  { id: "ORD-004", table: "T3", items: 5, total: "\u00A389.00", status: "preparing", time: "5 min ago" },
  { id: "ORD-005", table: "T8", items: 1, total: "\u00A315.00", status: "new", time: "1 min ago" },
  { id: "ORD-006", table: "T1", items: 3, total: "\u00A345.50", status: "served", time: "32 min ago" },
  { id: "ORD-007", table: "T9", items: 2, total: "\u00A328.00", status: "ready", time: "3 min ago" },
  { id: "ORD-008", table: "T15", items: 4, total: "\u00A372.00", status: "preparing", time: "7 min ago" },
];

// ---------------------------------------------------------------------------
// Tables (16 tables)
// ---------------------------------------------------------------------------

export const tables: TableInfo[] = [
  { id: "T1", seats: 4, status: "occupied", guests: 3, order: "\u00A345.50" },
  { id: "T2", seats: 2, status: "available" },
  { id: "T3", seats: 6, status: "occupied", guests: 5, order: "\u00A389.00" },
  { id: "T4", seats: 4, status: "reserved", reservedFor: "Smith, 7:30 PM" },
  { id: "T5", seats: 4, status: "occupied", guests: 4, order: "\u00A368.50" },
  { id: "T6", seats: 2, status: "available" },
  { id: "T7", seats: 8, status: "reserved", reservedFor: "Johnson Party, 8:00 PM" },
  { id: "T8", seats: 2, status: "occupied", guests: 1, order: "\u00A315.00" },
  { id: "T9", seats: 4, status: "occupied", guests: 2, order: "\u00A328.00" },
  { id: "T10", seats: 2, status: "available" },
  { id: "T11", seats: 6, status: "available" },
  { id: "T12", seats: 4, status: "occupied", guests: 2, order: "\u00A334.00" },
  { id: "T13", seats: 2, status: "available" },
  { id: "T14", seats: 4, status: "reserved", reservedFor: "Williams, 8:30 PM" },
  { id: "T15", seats: 6, status: "occupied", guests: 4, order: "\u00A372.00" },
  { id: "T16", seats: 8, status: "available" },
];

// ---------------------------------------------------------------------------
// Popular Items
// ---------------------------------------------------------------------------

export const popularItems: PopularItem[] = [
  { name: "Margherita Pizza", orders: 45, revenue: "\u00A3585" },
  { name: "Beef Burger", orders: 38, revenue: "\u00A3570" },
  { name: "Caesar Salad", orders: 32, revenue: "\u00A3384" },
  { name: "Fish & Chips", orders: 28, revenue: "\u00A3392" },
  { name: "Tiramisu", orders: 24, revenue: "\u00A3192" },
];

// ---------------------------------------------------------------------------
// Kitchen Orders (for Kitchen Display page)
// ---------------------------------------------------------------------------

export const kitchenOrders: KitchenOrder[] = [
  {
    id: "ORD-001",
    table: "T5",
    items: ["2x Margherita Pizza", "1x Caesar Salad", "1x Tiramisu"],
    status: "cooking",
    elapsedMin: 12,
    priority: "normal",
  },
  {
    id: "ORD-004",
    table: "T3",
    items: ["3x Beef Burger", "1x Fish & Chips", "1x Onion Rings"],
    status: "cooking",
    elapsedMin: 5,
    priority: "normal",
  },
  {
    id: "ORD-005",
    table: "T8",
    items: ["1x Grilled Salmon"],
    status: "new",
    elapsedMin: 1,
    priority: "normal",
  },
  {
    id: "ORD-008",
    table: "T15",
    items: ["2x Lamb Shank", "1x Mushroom Risotto", "1x Bruschetta"],
    status: "cooking",
    elapsedMin: 7,
    priority: "rush",
  },
  {
    id: "ORD-009",
    table: "T2",
    items: ["1x Prawn Linguine", "1x Garlic Bread"],
    status: "ready",
    elapsedMin: 18,
    priority: "normal",
  },
  {
    id: "ORD-010",
    table: "T6",
    items: ["2x Sunday Roast"],
    status: "new",
    elapsedMin: 0,
    priority: "normal",
  },
];
