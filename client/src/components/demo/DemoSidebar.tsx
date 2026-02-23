import type { LucideIcon } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuBadge,
  SidebarSeparator,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export interface SidebarNavItem {
  label: string;
  icon: LucideIcon;
  page: string;
  badge?: string;
}

export interface SidebarNavGroup {
  label?: string;
  items: SidebarNavItem[];
}

export interface DemoSidebarConfig {
  groups: SidebarNavGroup[];
  user: { name: string; email: string; initials: string };
}

interface DemoSidebarProps {
  config: DemoSidebarConfig;
  activePage: string;
  onNavigate: (page: string) => void;
  productName: string;
  accentColor: string;
}

export function DemoSidebar({
  config,
  activePage,
  onNavigate,
  productName,
  accentColor,
}: DemoSidebarProps) {
  return (
    <Sidebar collapsible="icon" variant="sidebar">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm shrink-0"
            style={{ backgroundColor: accentColor }}
          >
            {productName.charAt(0)}
          </div>
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="text-sm font-semibold truncate">{productName}</span>
            <span className="text-xs text-muted-foreground">Demo</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent>
        {config.groups.map((group, gi) => (
          <SidebarGroup key={gi}>
            {group.label && <SidebarGroupLabel>{group.label}</SidebarGroupLabel>}
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.page}>
                    <SidebarMenuButton
                      isActive={activePage === item.page}
                      tooltip={item.label}
                      onClick={() => onNavigate(item.page)}
                    >
                      <item.icon />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                    {item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter>
        <SidebarSeparator />
        <div className="p-3 flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="text-xs">{config.user.initials}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="text-sm font-medium truncate">{config.user.name}</span>
            <span className="text-xs text-muted-foreground truncate">{config.user.email}</span>
          </div>
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
