import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { DemoSidebar, type DemoSidebarConfig } from "./DemoSidebar";
import { DemoTopbar } from "./DemoTopbar";
import { BackToRivendell } from "./BackToRivendell";

interface DemoLayoutProps {
  config: DemoSidebarConfig;
  activePage: string;
  onNavigate: (page: string) => void;
  breadcrumbs: { label: string }[];
  productName: string;
  accentColor: string;
  children: React.ReactNode;
}

export function DemoLayout({
  config,
  activePage,
  onNavigate,
  breadcrumbs,
  productName,
  accentColor,
  children,
}: DemoLayoutProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      <DemoSidebar
        config={config}
        activePage={activePage}
        onNavigate={onNavigate}
        productName={productName}
        accentColor={accentColor}
      />
      <SidebarInset>
        <DemoTopbar breadcrumbs={breadcrumbs} />
        <div className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
          {children}
        </div>
      </SidebarInset>
      <BackToRivendell />
    </SidebarProvider>
  );
}
