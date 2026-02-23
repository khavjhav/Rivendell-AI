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
import { PieChart, Pie, Cell } from "recharts";
import { Clock, CalendarDays } from "lucide-react";
import {
  bookingSidebarConfig,
  bookingStats,
  todaySchedule,
  upcomingAppointments,
  revenueByService,
  weekCalendar,
  servicesList,
} from "@/data/demo/booking-data";

// ---------------------------------------------------------------------------
// Chart config
// ---------------------------------------------------------------------------

const chartConfig = {
  revenue: { label: "Revenue" },
  "Colour Services": { label: "Colour", color: "hsl(var(--chart-1))" },
  "Cuts & Styling": { label: "Cuts", color: "hsl(var(--chart-2))" },
  Treatments: { label: "Treatments", color: "hsl(var(--chart-3))" },
  "Men's Grooming": { label: "Men's", color: "hsl(var(--chart-4))" },
  Extensions: { label: "Extensions", color: "hsl(var(--chart-5))" },
} satisfies ChartConfig;

// ---------------------------------------------------------------------------
// Helper — status badge styles
// ---------------------------------------------------------------------------

const appointmentStatusClass: Record<string, string> = {
  confirmed: "bg-emerald-500/10 text-emerald-500",
  pending: "bg-amber-500/10 text-amber-500",
};

const categoryBadgeClass: Record<string, string> = {
  "Colour Services": "bg-pink-500/10 text-pink-500",
  "Cuts & Styling": "bg-blue-500/10 text-blue-500",
  Treatments: "bg-emerald-500/10 text-emerald-500",
  "Men's Grooming": "bg-amber-500/10 text-amber-500",
  Extensions: "bg-purple-500/10 text-purple-500",
};

// ---------------------------------------------------------------------------
// Page: Dashboard
// ---------------------------------------------------------------------------

function DashboardPage() {
  const appointmentColumns: DataTableColumn<(typeof upcomingAppointments)[number]>[] = [
    { key: "id", header: "ID" },
    { key: "date", header: "Date" },
    { key: "time", header: "Time" },
    { key: "client", header: "Client" },
    { key: "service", header: "Service" },
    { key: "staff", header: "Staff" },
    {
      key: "status",
      header: "Status",
      render: (row) => (
        <Badge
          variant="secondary"
          className={appointmentStatusClass[row.status] ?? ""}
        >
          {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
        </Badge>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stat Cards */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {bookingStats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            changeType={stat.change.startsWith("-") ? "negative" : "positive"}
            icon={stat.icon}
          />
        ))}
      </div>

      {/* Today's Schedule + Revenue Pie */}
      <div className="grid gap-4 lg:grid-cols-3">
        {/* Today's Schedule */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Today's Schedule
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[400px] px-6 pb-4">
              <div className="space-y-3 pt-2">
                {todaySchedule.map((apt, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 rounded-lg border p-3"
                  >
                    {/* Time */}
                    <div className="w-14 shrink-0 text-center">
                      <p className="text-sm font-semibold">{apt.time}</p>
                      <p className="text-xs text-muted-foreground">
                        {apt.duration}m
                      </p>
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        {apt.client}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {apt.service} &middot; {apt.staff}
                      </p>
                    </div>

                    {/* Status badge */}
                    <Badge
                      variant="secondary"
                      className={
                        apt.status === "completed"
                          ? "bg-muted text-muted-foreground"
                          : apt.status === "in-progress"
                            ? "bg-emerald-500/10 text-emerald-500 animate-pulse"
                            : "bg-blue-500/10 text-blue-500"
                      }
                    >
                      {apt.status === "in-progress"
                        ? "In Progress"
                        : apt.status.charAt(0).toUpperCase() + apt.status.slice(1)}
                    </Badge>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Revenue by Service — Donut chart */}
        <Card className="lg:col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold">
              Revenue by Service
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="mx-auto h-[260px] w-full">
              <PieChart accessibilityLayer>
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      formatter={(value) => `£${Number(value).toLocaleString("en-GB")}`}
                    />
                  }
                />
                <Pie
                  data={revenueByService}
                  dataKey="revenue"
                  nameKey="service"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                >
                  {revenueByService.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
              </PieChart>
            </ChartContainer>
            {/* Legend */}
            <div className="mt-2 space-y-1.5">
              {revenueByService.map((entry) => (
                <div key={entry.service} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div
                      className="h-3 w-3 rounded-full shrink-0"
                      style={{ backgroundColor: entry.fill }}
                    />
                    <span className="text-muted-foreground truncate">
                      {entry.service}
                    </span>
                  </div>
                  <span className="font-medium">
                    £{entry.revenue.toLocaleString("en-GB")}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Appointments Table */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-semibold flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            Upcoming Appointments
          </CardTitle>
        </CardHeader>
        <CardContent>
          <DemoDataTable columns={appointmentColumns} data={upcomingAppointments} />
        </CardContent>
      </Card>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page: Calendar (signature page — weekly view)
// ---------------------------------------------------------------------------

function CalendarPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Weekly Calendar</h2>
      <Card>
        <CardContent className="p-0 overflow-x-auto">
          <div className="min-w-[700px]">
            {/* Header row */}
            <div className="grid grid-cols-[80px_repeat(6,1fr)] border-b">
              <div className="p-3 text-sm text-muted-foreground" />
              {weekCalendar.days.map((day) => (
                <div
                  key={day}
                  className="p-3 text-sm font-medium text-center border-l"
                >
                  {day}
                </div>
              ))}
            </div>
            {/* Time grid */}
            <div className="relative">
              {weekCalendar.hours.map((hour) => (
                <div
                  key={hour}
                  className="grid grid-cols-[80px_repeat(6,1fr)] h-[60px] border-b"
                >
                  <div className="p-2 text-xs text-muted-foreground">
                    {hour}
                  </div>
                  {[0, 1, 2, 3, 4, 5].map((d) => (
                    <div key={d} className="border-l relative" />
                  ))}
                </div>
              ))}
              {/* Appointment blocks overlaid */}
              {weekCalendar.appointments.map((apt, i) => {
                const top = (apt.startHour - 9) * 60;
                const height = apt.duration * 60;
                const left = `calc(80px + ${apt.day} * ((100% - 80px) / 6))`;
                const width = `calc((100% - 80px) / 6 - 4px)`;
                return (
                  <div
                    key={i}
                    className="absolute rounded px-1.5 py-1 text-xs text-white overflow-hidden"
                    style={{
                      top: `${top}px`,
                      left,
                      width,
                      height: `${height - 2}px`,
                      backgroundColor: apt.color,
                      marginLeft: "2px",
                      opacity: 0.9,
                    }}
                  >
                    <div className="font-medium truncate">{apt.client}</div>
                    <div className="truncate opacity-80">{apt.service}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>
      {/* Legend */}
      <div className="flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "#2dd4bf" }} />
          <span className="text-muted-foreground">Sarah</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "#f59e0b" }} />
          <span className="text-muted-foreground">Alex</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "#8b5cf6" }} />
          <span className="text-muted-foreground">Maya</span>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page: Appointments
// ---------------------------------------------------------------------------

function AppointmentsPage() {
  const columns: DataTableColumn<(typeof upcomingAppointments)[number]>[] = [
    { key: "id", header: "ID" },
    { key: "date", header: "Date" },
    { key: "time", header: "Time" },
    { key: "client", header: "Client" },
    { key: "service", header: "Service" },
    { key: "staff", header: "Staff" },
    {
      key: "status",
      header: "Status",
      render: (row) => (
        <Badge
          variant="secondary"
          className={appointmentStatusClass[row.status] ?? ""}
        >
          {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
        </Badge>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Appointments</h2>
        <Badge variant="secondary">{upcomingAppointments.length} upcoming</Badge>
      </div>
      <DemoDataTable columns={columns} data={upcomingAppointments} />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page: Services
// ---------------------------------------------------------------------------

function ServicesPage() {
  const columns: DataTableColumn<(typeof servicesList)[number]>[] = [
    { key: "name", header: "Service Name" },
    {
      key: "duration",
      header: "Duration (min)",
      render: (row) => `${row.duration} min`,
    },
    { key: "price", header: "Price" },
    {
      key: "category",
      header: "Category",
      render: (row) => (
        <Badge
          variant="secondary"
          className={categoryBadgeClass[row.category] ?? ""}
        >
          {row.category}
        </Badge>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Services</h2>
        <Badge variant="secondary">{servicesList.length} services</Badge>
      </div>
      <DemoDataTable columns={columns} data={servicesList} />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page: Placeholder (for pages not yet implemented)
// ---------------------------------------------------------------------------

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </h2>
      <Card>
        <CardContent className="flex items-center justify-center py-16">
          <p className="text-muted-foreground">
            This page is available in the full version.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main Booking Demo component
// ---------------------------------------------------------------------------

export default function BookingDemo() {
  const [activePage, setActivePage] = useState("dashboard");

  const breadcrumbs = [
    { label: "Luxe Salon" },
    { label: activePage.charAt(0).toUpperCase() + activePage.slice(1) },
  ];

  return (
    <DemoLayout
      config={bookingSidebarConfig}
      activePage={activePage}
      onNavigate={setActivePage}
      breadcrumbs={breadcrumbs}
      productName="Luxe Salon & Spa"
      accentColor="#8b5cf6"
    >
      {activePage === "dashboard" && <DashboardPage />}
      {activePage === "calendar" && <CalendarPage />}
      {activePage === "appointments" && <AppointmentsPage />}
      {activePage === "services" && <ServicesPage />}
      {!["dashboard", "calendar", "appointments", "services"].includes(activePage) && (
        <PlaceholderPage title={activePage} />
      )}
    </DemoLayout>
  );
}
