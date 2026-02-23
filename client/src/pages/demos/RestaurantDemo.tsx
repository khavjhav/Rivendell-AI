import { useState } from "react";
import { DemoLayout } from "@/components/demo/DemoLayout";
import { StatCard } from "@/components/demo/StatCard";
import { DemoDataTable, type DataTableColumn } from "@/components/demo/DemoDataTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { Info, Clock, Users as UsersIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  restaurantSidebarConfig,
  restaurantStats,
  revenueData,
  liveOrders,
  tables,
  popularItems,
  kitchenOrders,
  type LiveOrder,
  type PopularItem,
  type TableInfo,
  type KitchenOrder,
} from "@/data/demo/restaurant-data";

// ---------------------------------------------------------------------------
// Chart Configuration
// ---------------------------------------------------------------------------

const chartConfig = {
  revenue: { label: "Revenue", color: "hsl(var(--chart-1))" },
  orders: { label: "Orders", color: "hsl(var(--chart-2))" },
} satisfies ChartConfig;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const pageTitles: Record<string, string> = {
  dashboard: "Dashboard",
  orders: "Orders",
  tables: "Tables",
  menu: "Menu",
  kitchen: "Kitchen Display",
  staff: "Staff",
  reports: "Reports",
  settings: "Settings",
};

function orderStatusBadge(status: LiveOrder["status"]) {
  switch (status) {
    case "new":
      return (
        <Badge className="bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 border-0">
          New
        </Badge>
      );
    case "preparing":
      return (
        <Badge className="bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 border-0">
          Preparing
        </Badge>
      );
    case "ready":
      return (
        <Badge className="bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 border-0">
          Ready
        </Badge>
      );
    case "served":
      return (
        <Badge className="bg-gray-500/10 text-gray-500 hover:bg-gray-500/20 border-0">
          Served
        </Badge>
      );
  }
}

// ---------------------------------------------------------------------------
// Table Column Definitions
// ---------------------------------------------------------------------------

const orderColumns: DataTableColumn<LiveOrder>[] = [
  { key: "id", header: "Order ID" },
  { key: "table", header: "Table" },
  {
    key: "items",
    header: "Items",
    className: "text-right",
    render: (row) => row.items.toString(),
  },
  { key: "total", header: "Total", className: "text-right" },
  {
    key: "status",
    header: "Status",
    render: (row) => orderStatusBadge(row.status),
  },
  {
    key: "time",
    header: "Time",
    className: "text-muted-foreground text-right",
  },
];

const popularItemColumns: DataTableColumn<PopularItem>[] = [
  { key: "name", header: "Item" },
  {
    key: "orders",
    header: "Orders",
    className: "text-right",
    render: (row) => row.orders.toString(),
  },
  { key: "revenue", header: "Revenue", className: "text-right" },
];

// ---------------------------------------------------------------------------
// DashboardPage
// ---------------------------------------------------------------------------

function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {restaurantStats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            changeType={stat.changeType}
            icon={stat.icon}
          />
        ))}
      </div>

      {/* Revenue chart + Live orders */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Revenue Bar Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Weekly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <BarChart
                data={revenueData}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="day"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                />
                <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar
                  dataKey="revenue"
                  fill="hsl(var(--chart-1))"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="orders"
                  fill="hsl(var(--chart-2))"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Live Orders */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-base">Live Orders</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[340px] px-6 pb-6">
              <div className="space-y-3">
                {liveOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between rounded-lg border p-3"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{order.id}</span>
                        {orderStatusBadge(order.status)}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {order.table} &middot; {order.items} items &middot;{" "}
                        {order.time}
                      </p>
                    </div>
                    <span className="text-sm font-semibold">{order.total}</span>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      {/* Popular Items */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Popular Items</CardTitle>
        </CardHeader>
        <CardContent>
          <DemoDataTable<PopularItem>
            columns={popularItemColumns}
            data={popularItems}
          />
        </CardContent>
      </Card>
    </div>
  );
}

// ---------------------------------------------------------------------------
// OrdersPage
// ---------------------------------------------------------------------------

function OrdersPage() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">All Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <DemoDataTable<LiveOrder> columns={orderColumns} data={liveOrders} />
        </CardContent>
      </Card>
    </div>
  );
}

// ---------------------------------------------------------------------------
// TablesPage
// ---------------------------------------------------------------------------

function tableStatusBorder(status: TableInfo["status"]) {
  switch (status) {
    case "available":
      return "border-emerald-500/50";
    case "occupied":
      return "border-amber-500/50";
    case "reserved":
      return "border-blue-500/50";
  }
}

function tableStatusBadge(status: TableInfo["status"]) {
  switch (status) {
    case "available":
      return (
        <Badge className="bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 border-0">
          Available
        </Badge>
      );
    case "occupied":
      return (
        <Badge className="bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 border-0">
          Occupied
        </Badge>
      );
    case "reserved":
      return (
        <Badge className="bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 border-0">
          Reserved
        </Badge>
      );
  }
}

function TablesPage() {
  return (
    <div className="space-y-4">
      {/* Legend */}
      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-emerald-500" />
          Available
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-amber-500" />
          Occupied
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-blue-500" />
          Reserved
        </div>
      </div>

      {/* Table Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {tables.map((table) => (
          <Card
            key={table.id}
            className={cn("border-2", tableStatusBorder(table.status))}
          >
            <CardContent className="p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">{table.id}</span>
                {tableStatusBadge(table.status)}
              </div>
              <p className="text-xs text-muted-foreground">
                {table.seats} seats
              </p>
              {table.status === "occupied" && (
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <UsersIcon className="h-3 w-3" />
                    <span>{table.guests} guests</span>
                  </div>
                  <p className="text-sm font-semibold">{table.order}</p>
                </div>
              )}
              {table.status === "reserved" && table.reservedFor && (
                <p className="text-xs text-blue-600">{table.reservedFor}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// KitchenPage
// ---------------------------------------------------------------------------

function kitchenStatusClasses(status: KitchenOrder["status"]) {
  switch (status) {
    case "new":
      return "bg-blue-500/10 text-blue-700 dark:text-blue-400";
    case "cooking":
      return "bg-amber-500/10 text-amber-700 dark:text-amber-400";
    case "ready":
      return "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400";
  }
}

function elapsedTimeColor(min: number) {
  if (min < 10) return "bg-emerald-500/10 text-emerald-600";
  if (min <= 20) return "bg-amber-500/10 text-amber-600";
  return "bg-red-500/10 text-red-600";
}

function KitchenPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {kitchenOrders.map((order) => (
        <Card
          key={order.id}
          className={cn(
            "border-2",
            order.priority === "rush"
              ? "border-red-500"
              : "border-transparent"
          )}
        >
          <CardContent className="p-4 space-y-3">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold">{order.id}</span>
                {order.priority === "rush" && (
                  <Badge variant="destructive" className="text-[10px] px-1.5 py-0">
                    RUSH
                  </Badge>
                )}
              </div>
              <Badge
                className={cn(
                  "border-0 capitalize",
                  kitchenStatusClasses(order.status)
                )}
              >
                {order.status}
              </Badge>
            </div>

            {/* Table + Time */}
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                Table: <span className="font-medium text-foreground">{order.table}</span>
              </span>
              <Badge
                className={cn(
                  "border-0 text-xs",
                  elapsedTimeColor(order.elapsedMin)
                )}
              >
                <Clock className="h-3 w-3 mr-1" />
                {order.elapsedMin} min
              </Badge>
            </div>

            {/* Items */}
            <div className="space-y-1">
              {order.items.map((item, i) => (
                <p key={i} className="text-sm text-muted-foreground">
                  {item}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// PlaceholderPage
// ---------------------------------------------------------------------------

function PlaceholderPage({ title }: { title: string }) {
  return (
    <Card>
      <CardContent className="p-10 flex flex-col items-center justify-center text-center">
        <Info className="h-10 w-10 text-muted-foreground mb-4" />
        <p className="text-lg font-semibold capitalize">{title}</p>
        <p className="text-sm text-muted-foreground mt-1">
          This page is available in the full version.
        </p>
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

export default function RestaurantDemo() {
  const [activePage, setActivePage] = useState("dashboard");

  const breadcrumbs = [
    { label: "Bella Vita" },
    { label: pageTitles[activePage] ?? activePage.charAt(0).toUpperCase() + activePage.slice(1) },
  ];

  return (
    <DemoLayout
      config={restaurantSidebarConfig}
      activePage={activePage}
      onNavigate={setActivePage}
      breadcrumbs={breadcrumbs}
      productName="Bella Vita Restaurant"
      accentColor="#e74c3c"
    >
      {activePage === "dashboard" && <DashboardPage />}
      {activePage === "orders" && <OrdersPage />}
      {activePage === "tables" && <TablesPage />}
      {activePage === "kitchen" && <KitchenPage />}
      {!["dashboard", "orders", "tables", "kitchen"].includes(activePage) && (
        <PlaceholderPage title={activePage} />
      )}
    </DemoLayout>
  );
}
