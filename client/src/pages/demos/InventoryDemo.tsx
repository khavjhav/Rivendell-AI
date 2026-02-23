import { useState } from "react";
import { DemoLayout } from "@/components/demo/DemoLayout";
import type { DemoSidebarConfig } from "@/components/demo/DemoSidebar";
import { StatCard } from "@/components/demo/StatCard";
import { DemoDataTable, type DataTableColumn } from "@/components/demo/DemoDataTable";
import {
  inventoryStats,
  products,
  stockMovements,
  categoryStock,
  lowStockItems,
  suppliers,
  type Product,
  type StockMovement,
  type Supplier,
} from "@/data/demo/inventory-data";
import {
  LayoutDashboard,
  Package,
  FolderTree,
  ShoppingCart,
  Truck,
  AlertTriangle,
  BarChart3,
  ArrowDown,
  ArrowUp,
  RefreshCw,
  Star,
  PoundSterling,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

// ---------------------------------------------------------------------------
// Sidebar configuration
// ---------------------------------------------------------------------------

const sidebarConfig: DemoSidebarConfig = {
  groups: [
    {
      label: "Inventory",
      items: [
        { label: "Dashboard", icon: LayoutDashboard, page: "dashboard" },
        { label: "Products", icon: Package, page: "products" },
        { label: "Categories", icon: FolderTree, page: "categories" },
        { label: "Purchase Orders", icon: ShoppingCart, page: "purchase-orders" },
        { label: "Suppliers", icon: Truck, page: "suppliers" },
      ],
    },
    {
      label: "Alerts",
      items: [
        { label: "Low Stock", icon: AlertTriangle, page: "low-stock", badge: "23" },
        { label: "Reports", icon: BarChart3, page: "reports" },
      ],
    },
  ],
  user: { name: "James Wilson", email: "james@inventory.demo", initials: "JW" },
};

// ---------------------------------------------------------------------------
// Chart config
// ---------------------------------------------------------------------------

const stockChartConfig: ChartConfig = {
  inStock: { label: "In Stock", color: "hsl(var(--chart-3))" },
  lowStock: { label: "Low Stock", color: "hsl(var(--chart-2))" },
  outOfStock: { label: "Out of Stock", color: "hsl(var(--chart-4))" },
};

// ---------------------------------------------------------------------------
// Status badge helper
// ---------------------------------------------------------------------------

function StatusBadge({ status }: { status: string }) {
  const colorMap: Record<string, string> = {
    "in-stock": "bg-emerald-500/10 text-emerald-500",
    "low-stock": "bg-amber-500/10 text-amber-500",
    "out-of-stock": "bg-red-500/10 text-red-500",
  };
  const labelMap: Record<string, string> = {
    "in-stock": "In Stock",
    "low-stock": "Low Stock",
    "out-of-stock": "Out of Stock",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${colorMap[status] ?? ""}`}
    >
      {labelMap[status] ?? status}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Movement type badge helper
// ---------------------------------------------------------------------------

function MovementTypeBadge({ type }: { type: StockMovement["type"] }) {
  if (type === "in") {
    return (
      <Badge variant="outline" className="gap-1 bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
        <ArrowDown className="h-3 w-3" /> In
      </Badge>
    );
  }
  if (type === "out") {
    return (
      <Badge variant="outline" className="gap-1 bg-red-500/10 text-red-500 border-red-500/20">
        <ArrowUp className="h-3 w-3" /> Out
      </Badge>
    );
  }
  return (
    <Badge variant="outline" className="gap-1 bg-amber-500/10 text-amber-500 border-amber-500/20">
      <RefreshCw className="h-3 w-3" /> Adjustment
    </Badge>
  );
}

// ---------------------------------------------------------------------------
// Star rating helper
// ---------------------------------------------------------------------------

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"
          }`}
        />
      ))}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Page: Dashboard
// ---------------------------------------------------------------------------

function DashboardPage() {
  const movementColumns: DataTableColumn<StockMovement>[] = [
    { key: "product", header: "Product" },
    {
      key: "type",
      header: "Type",
      render: (row) => <MovementTypeBadge type={row.type} />,
    },
    { key: "quantity", header: "Quantity" },
    { key: "date", header: "Date" },
    { key: "reference", header: "Reference" },
  ];

  return (
    <div className="space-y-6">
      {/* Stat cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total SKUs"
          value={inventoryStats.totalSKUs.value}
          change={inventoryStats.totalSKUs.change}
          changeType={inventoryStats.totalSKUs.changeType}
          icon={Package}
        />
        <StatCard
          title="Stock Value"
          value={inventoryStats.stockValue.value}
          change={inventoryStats.stockValue.change}
          changeType={inventoryStats.stockValue.changeType}
          icon={PoundSterling}
        />
        <StatCard
          title="Low Stock Alerts"
          value={inventoryStats.lowStockAlerts.value}
          change={inventoryStats.lowStockAlerts.change}
          changeType={inventoryStats.lowStockAlerts.changeType}
          icon={AlertTriangle}
        />
        <StatCard
          title="Orders Pending"
          value={inventoryStats.ordersPending.value}
          change={inventoryStats.ordersPending.change}
          changeType={inventoryStats.ordersPending.changeType}
          icon={ShoppingCart}
        />
      </div>

      {/* Chart + Low Stock panel */}
      <div className="grid gap-4 lg:grid-cols-7">
        {/* Bar chart */}
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Stock by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={stockChartConfig} className="h-[280px] w-full">
              <BarChart data={categoryStock} accessibilityLayer>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="category" tickLine={false} axisLine={false} tickMargin={8} />
                <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="inStock" fill="var(--color-inStock)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="lowStock" fill="var(--color-lowStock)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="outOfStock" fill="var(--color-outOfStock)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Low stock alerts */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-500" />
              Low Stock Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lowStockItems.slice(0, 5).map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium truncate">{item.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.currentQty} / {item.reorderPoint} units
                    </p>
                  </div>
                  <span
                    className={`inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                      item.severity === "critical"
                        ? "bg-red-500/10 text-red-500"
                        : "bg-amber-500/10 text-amber-500"
                    }`}
                  >
                    {item.severity}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent stock movements */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Stock Movements</CardTitle>
        </CardHeader>
        <CardContent>
          <DemoDataTable columns={movementColumns} data={stockMovements} />
        </CardContent>
      </Card>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page: Products
// ---------------------------------------------------------------------------

function ProductsPage() {
  const [tab, setTab] = useState("all");

  const filteredProducts = products.filter((p) => {
    if (tab === "all") return true;
    if (tab === "in-stock") return p.status === "in-stock";
    if (tab === "low-stock") return p.status === "low-stock";
    if (tab === "out-of-stock") return p.status === "out-of-stock";
    return true;
  });

  const columns: DataTableColumn<Product>[] = [
    { key: "sku", header: "SKU", className: "font-mono text-xs" },
    { key: "name", header: "Name" },
    { key: "category", header: "Category" },
    { key: "quantity", header: "Quantity", className: "text-right" },
    { key: "reorderPoint", header: "Reorder Point", className: "text-right" },
    {
      key: "unitCost",
      header: "Unit Cost",
      className: "text-right",
      render: (row) => <span>\u00a3{row.unitCost.toFixed(2)}</span>,
    },
    {
      key: "totalValue",
      header: "Total Value",
      className: "text-right",
      render: (row) => <span>\u00a3{row.totalValue.toLocaleString("en-GB", { minimumFractionDigits: 2 })}</span>,
    },
    {
      key: "status",
      header: "Status",
      render: (row) => <StatusBadge status={row.status} />,
    },
  ];

  return (
    <div className="space-y-4">
      <Tabs value={tab} onValueChange={setTab}>
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="in-stock">In Stock</TabsTrigger>
          <TabsTrigger value="low-stock">Low Stock</TabsTrigger>
          <TabsTrigger value="out-of-stock">Out of Stock</TabsTrigger>
        </TabsList>

        <TabsContent value={tab} className="mt-4">
          <DemoDataTable columns={columns} data={filteredProducts} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page: Low Stock
// ---------------------------------------------------------------------------

function LowStockPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Low Stock Alerts</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {lowStockItems.map((item) => {
          const pct = item.reorderPoint > 0 ? Math.round((item.currentQty / item.reorderPoint) * 100) : 0;
          return (
            <Card key={item.id}>
              <CardContent className="p-5 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-medium leading-tight">{item.name}</p>
                    <p className="text-xs text-muted-foreground font-mono">{item.sku}</p>
                  </div>
                  <span
                    className={`shrink-0 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                      item.severity === "critical"
                        ? "bg-red-500/10 text-red-500"
                        : "bg-amber-500/10 text-amber-500"
                    }`}
                  >
                    {item.severity}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Current: {item.currentQty}</span>
                    <span>Reorder: {item.reorderPoint}</span>
                  </div>
                  <Progress value={pct} className="h-2" />
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-xs text-muted-foreground">Suggested Order</p>
                    <p className="font-medium">{item.suggestedOrder} units</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Supplier</p>
                    <p className="font-medium truncate">{item.supplier}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page: Suppliers
// ---------------------------------------------------------------------------

function SuppliersPage() {
  const columns: DataTableColumn<Supplier>[] = [
    { key: "name", header: "Name" },
    { key: "contact", header: "Contact" },
    { key: "products", header: "Products", className: "text-right" },
    { key: "leadTime", header: "Lead Time" },
    {
      key: "rating",
      header: "Rating",
      render: (row) => <StarRating rating={row.rating} />,
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Suppliers</h2>
      <DemoDataTable columns={columns} data={suppliers} />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page router helper
// ---------------------------------------------------------------------------

const pageTitles: Record<string, string> = {
  dashboard: "Dashboard",
  products: "Products",
  categories: "Categories",
  "purchase-orders": "Purchase Orders",
  suppliers: "Suppliers",
  "low-stock": "Low Stock",
  reports: "Reports",
};

function renderPage(page: string) {
  switch (page) {
    case "dashboard":
      return <DashboardPage />;
    case "products":
      return <ProductsPage />;
    case "low-stock":
      return <LowStockPage />;
    case "suppliers":
      return <SuppliersPage />;
    default:
      return <DashboardPage />;
  }
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

export default function InventoryDemo() {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <DemoLayout
      config={sidebarConfig}
      activePage={activePage}
      onNavigate={setActivePage}
      breadcrumbs={[
        { label: "Inventory Management" },
        { label: pageTitles[activePage] ?? "Dashboard" },
      ]}
      productName="StockFlow"
      accentColor="#6366f1"
    >
      {renderPage(activePage)}
    </DemoLayout>
  );
}
