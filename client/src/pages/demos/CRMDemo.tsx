import { useState } from "react";
import { DemoLayout } from "@/components/demo/DemoLayout";
import type { DemoSidebarConfig } from "@/components/demo/DemoSidebar";
import { StatCard } from "@/components/demo/StatCard";
import { DemoDataTable, type DataTableColumn } from "@/components/demo/DemoDataTable";
import {
  crmStats,
  contacts,
  deals,
  activities,
  tasks,
  pipelineStages,
  monthlyRevenue,
  type Contact,
  type Deal,
  type Task,
} from "@/data/demo/crm-data";
import {
  LayoutDashboard,
  Users,
  Handshake,
  KanbanSquare,
  CheckSquare,
  Mail,
  BarChart3,
  Phone,
  Calendar,
  FileText,
  PoundSterling,
  Target,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";

// ---------------------------------------------------------------------------
// Sidebar configuration
// ---------------------------------------------------------------------------

const sidebarConfig: DemoSidebarConfig = {
  groups: [
    {
      label: "Sales",
      items: [
        { label: "Dashboard", icon: LayoutDashboard, page: "dashboard" },
        { label: "Contacts", icon: Users, page: "contacts" },
        { label: "Deals", icon: Handshake, page: "deals" },
        { label: "Pipeline", icon: KanbanSquare, page: "pipeline" },
      ],
    },
    {
      label: "Productivity",
      items: [
        { label: "Tasks", icon: CheckSquare, page: "tasks", badge: "3" },
        { label: "Email", icon: Mail, page: "email" },
        { label: "Reports", icon: BarChart3, page: "reports" },
      ],
    },
  ],
  user: { name: "Emma Roberts", email: "emma@sales.demo", initials: "ER" },
};

// ---------------------------------------------------------------------------
// Chart config
// ---------------------------------------------------------------------------

const revenueChartConfig: ChartConfig = {
  revenue: { label: "Revenue", color: "var(--chart-1)" },
  target: { label: "Target", color: "var(--chart-2)" },
};

// ---------------------------------------------------------------------------
// Helper — stage badge colours
// ---------------------------------------------------------------------------

const stageBadgeClass: Record<string, string> = {
  qualification: "bg-blue-500/10 text-blue-500",
  proposal: "bg-amber-500/10 text-amber-500",
  negotiation: "bg-purple-500/10 text-purple-500",
  "closed-won": "bg-emerald-500/10 text-emerald-500",
  "closed-lost": "bg-red-500/10 text-red-500",
};

const statusBadgeClass: Record<string, string> = {
  lead: "bg-blue-500/10 text-blue-500",
  prospect: "bg-amber-500/10 text-amber-500",
  customer: "bg-emerald-500/10 text-emerald-500",
  churned: "bg-red-500/10 text-red-500",
};

const priorityBadgeClass: Record<string, string> = {
  high: "bg-red-500/10 text-red-500",
  medium: "bg-amber-500/10 text-amber-500",
  low: "bg-blue-500/10 text-blue-500",
};

const activityIcon: Record<string, React.ElementType> = {
  email: Mail,
  call: Phone,
  meeting: Calendar,
  note: FileText,
};

// ---------------------------------------------------------------------------
// Format helpers
// ---------------------------------------------------------------------------

function formatCurrency(value: number): string {
  return `£${value.toLocaleString("en-GB")}`;
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// ---------------------------------------------------------------------------
// Page: Dashboard
// ---------------------------------------------------------------------------

function DashboardPage() {
  const topDealsColumns: DataTableColumn<Deal>[] = [
    { key: "name", header: "Deal Name" },
    { key: "company", header: "Company" },
    {
      key: "value",
      header: "Value",
      render: (row) => formatCurrency(row.value),
    },
    {
      key: "stage",
      header: "Stage",
      render: (row) => (
        <Badge
          variant="secondary"
          className={stageBadgeClass[row.stage] ?? ""}
        >
          {capitalize(row.stage.replace("-", " "))}
        </Badge>
      ),
    },
    {
      key: "probability",
      header: "Probability",
      render: (row) => `${row.probability}%`,
    },
  ];

  const topDeals = deals
    .filter((d) => d.stage !== "closed-won" && d.stage !== "closed-lost")
    .slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Stat Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title={crmStats.totalContacts.label}
          value={crmStats.totalContacts.value}
          change={crmStats.totalContacts.change}
          changeType={crmStats.totalContacts.changeType}
          icon={Users}
        />
        <StatCard
          title={crmStats.openDeals.label}
          value={crmStats.openDeals.value}
          change={crmStats.openDeals.change}
          changeType={crmStats.openDeals.changeType}
          icon={Handshake}
        />
        <StatCard
          title={crmStats.revenueThisMonth.label}
          value={crmStats.revenueThisMonth.value}
          change={crmStats.revenueThisMonth.change}
          changeType={crmStats.revenueThisMonth.changeType}
          icon={PoundSterling}
        />
        <StatCard
          title={crmStats.conversionRate.label}
          value={crmStats.conversionRate.value}
          change={crmStats.conversionRate.change}
          changeType={crmStats.conversionRate.changeType}
          icon={Target}
        />
      </div>

      {/* Revenue Chart + Recent Activities */}
      <div className="grid gap-4 lg:grid-cols-7">
        {/* Revenue vs Target line chart */}
        <Card className="lg:col-span-4">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Revenue vs Target
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={revenueChartConfig} className="h-[280px] w-full">
              <LineChart data={monthlyRevenue} accessibilityLayer>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v: number) => `£${(v / 1000).toFixed(0)}k`}
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      formatter={(value) =>
                        formatCurrency(value as number)
                      }
                    />
                  }
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="var(--color-revenue)"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="target"
                  stroke="var(--color-target)"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ r: 3 }}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="lg:col-span-3">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold">
              Recent Activities
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[320px] px-6 pb-4">
              <div className="space-y-4">
                {activities.map((activity) => {
                  const Icon = activityIcon[activity.type] ?? FileText;
                  return (
                    <div key={activity.id} className="flex gap-3">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted/50">
                        <Icon className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="flex-1 space-y-0.5">
                        <p className="text-sm leading-snug">
                          {activity.description}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {activity.contact} &middot; {activity.time}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      {/* Pipeline Overview */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-semibold">
            Pipeline Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {pipelineStages.map((stage) => (
              <div
                key={stage.name}
                className="flex items-center gap-3 rounded-lg border p-3"
              >
                <div className="flex-1 space-y-0.5">
                  <p className="text-sm font-medium">{stage.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {stage.deals} deals
                  </p>
                </div>
                <p className="text-sm font-semibold">{stage.value}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Deals */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-semibold">Top Deals</CardTitle>
        </CardHeader>
        <CardContent>
          <DemoDataTable columns={topDealsColumns} data={topDeals} />
        </CardContent>
      </Card>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page: Contacts
// ---------------------------------------------------------------------------

function ContactsPage() {
  const columns: DataTableColumn<Contact>[] = [
    { key: "name", header: "Name" },
    { key: "company", header: "Company" },
    { key: "email", header: "Email" },
    {
      key: "status",
      header: "Status",
      render: (row) => (
        <Badge
          variant="secondary"
          className={statusBadgeClass[row.status] ?? ""}
        >
          {capitalize(row.status)}
        </Badge>
      ),
    },
    { key: "lastContact", header: "Last Contact" },
    {
      key: "dealValue",
      header: "Deal Value",
      render: (row) =>
        row.dealValue > 0 ? formatCurrency(row.dealValue) : "—",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Contacts</h2>
        <Badge variant="secondary">{contacts.length} total</Badge>
      </div>
      <DemoDataTable columns={columns} data={contacts} />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page: Pipeline (Kanban)
// ---------------------------------------------------------------------------

function PipelinePage() {
  const stageKeys = [
    "qualification",
    "proposal",
    "negotiation",
    "closed-won",
    "closed-lost",
  ] as const;

  const stageLabels: Record<string, string> = {
    qualification: "Qualification",
    proposal: "Proposal",
    negotiation: "Negotiation",
    "closed-won": "Closed Won",
    "closed-lost": "Closed Lost",
  };

  const dealsByStage = stageKeys.reduce(
    (acc, stage) => {
      acc[stage] = deals.filter((d) => d.stage === stage);
      return acc;
    },
    {} as Record<string, Deal[]>,
  );

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Pipeline</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {stageKeys.map((stage) => {
          const stageDeals = dealsByStage[stage] ?? [];
          const totalValue = stageDeals.reduce((sum, d) => sum + d.value, 0);
          return (
            <div key={stage} className="space-y-3">
              {/* Column header */}
              <div className="rounded-lg border p-3 space-y-1">
                <div className="flex items-center justify-between">
                  <Badge
                    variant="secondary"
                    className={stageBadgeClass[stage] ?? ""}
                  >
                    {stageLabels[stage]}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {stageDeals.length}
                  </span>
                </div>
                <p className="text-sm font-semibold">
                  {formatCurrency(totalValue)}
                </p>
              </div>

              {/* Deal cards */}
              <ScrollArea className="max-h-[calc(100vh-280px)]">
                <div className="space-y-2">
                  {stageDeals.map((deal) => (
                    <Card key={deal.id}>
                      <CardContent className="p-3 space-y-2">
                        <p className="text-sm font-medium leading-snug">
                          {deal.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {deal.company}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold">
                            {formatCurrency(deal.value)}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {deal.probability}%
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{deal.owner}</span>
                          <span>{deal.closeDate}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  {stageDeals.length === 0 && (
                    <p className="text-xs text-center text-muted-foreground py-4">
                      No deals
                    </p>
                  )}
                </div>
              </ScrollArea>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page: Tasks
// ---------------------------------------------------------------------------

function TasksPage() {
  const [taskState, setTaskState] = useState<Task[]>(tasks);

  const toggleTask = (id: string) => {
    setTaskState((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const today = "2026-02-22";

  const renderTaskList = (filtered: Task[]) => (
    <div className="space-y-2">
      {filtered.length === 0 && (
        <p className="text-sm text-muted-foreground text-center py-8">
          No tasks found.
        </p>
      )}
      {filtered.map((task) => (
        <div
          key={task.id}
          className="flex items-center gap-3 rounded-lg border p-3"
        >
          <Checkbox
            checked={task.completed}
            onCheckedChange={() => toggleTask(task.id)}
          />
          <div className="flex-1 min-w-0">
            <p
              className={`text-sm font-medium ${task.completed ? "line-through text-muted-foreground" : ""}`}
            >
              {task.title}
            </p>
            <p className="text-xs text-muted-foreground">
              {task.assignee} &middot; Due {task.dueDate}
            </p>
          </div>
          <Badge
            variant="secondary"
            className={priorityBadgeClass[task.priority] ?? ""}
          >
            {capitalize(task.priority)}
          </Badge>
        </div>
      ))}
    </div>
  );

  const allTasks = taskState;
  const todayTasks = taskState.filter((t) => t.dueDate === today);
  const overdueTasks = taskState.filter(
    (t) => t.dueDate < today && !t.completed,
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Tasks</h2>
        <Badge variant="secondary">
          {taskState.filter((t) => !t.completed).length} remaining
        </Badge>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="overdue">Overdue</TabsTrigger>
        </TabsList>
        <TabsContent value="all">{renderTaskList(allTasks)}</TabsContent>
        <TabsContent value="today">{renderTaskList(todayTasks)}</TabsContent>
        <TabsContent value="overdue">
          {renderTaskList(overdueTasks)}
        </TabsContent>
      </Tabs>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Breadcrumb helper
// ---------------------------------------------------------------------------

const pageTitles: Record<string, string> = {
  dashboard: "Dashboard",
  contacts: "Contacts",
  deals: "Deals",
  pipeline: "Pipeline",
  tasks: "Tasks",
  email: "Email",
  reports: "Reports",
};

// ---------------------------------------------------------------------------
// Main CRM Demo component
// ---------------------------------------------------------------------------

export default function CRMDemo() {
  const [activePage, setActivePage] = useState("dashboard");

  const breadcrumbs = [
    { label: "CRM" },
    { label: pageTitles[activePage] ?? "Dashboard" },
  ];

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <DashboardPage />;
      case "contacts":
        return <ContactsPage />;
      case "pipeline":
        return <PipelinePage />;
      case "tasks":
        return <TasksPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <DemoLayout
      config={sidebarConfig}
      activePage={activePage}
      onNavigate={setActivePage}
      breadcrumbs={breadcrumbs}
      productName="SalesForge CRM"
      accentColor="#6366f1"
    >
      {renderPage()}
    </DemoLayout>
  );
}
