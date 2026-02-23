// Appointment & Booking Dashboard Demo — Mock Data
// All data is fictional and for demonstration purposes only.

import {
  LayoutDashboard,
  Calendar,
  ClipboardList,
  Users,
  Scissors,
  UserCog,
  Settings,
  BarChart3,
} from "lucide-react";
import type { DemoSidebarConfig } from "@/components/demo/DemoSidebar";

// ---------------------------------------------------------------------------
// Sidebar configuration
// ---------------------------------------------------------------------------

export const bookingSidebarConfig: DemoSidebarConfig = {
  groups: [
    {
      label: "Main",
      items: [
        { label: "Dashboard", icon: LayoutDashboard, page: "dashboard" },
        { label: "Calendar", icon: Calendar, page: "calendar" },
        { label: "Appointments", icon: ClipboardList, page: "appointments", badge: "8" },
        { label: "Clients", icon: Users, page: "clients" },
      ],
    },
    {
      label: "Manage",
      items: [
        { label: "Services", icon: Scissors, page: "services" },
        { label: "Staff", icon: UserCog, page: "staff" },
        { label: "Reports", icon: BarChart3, page: "reports" },
        { label: "Settings", icon: Settings, page: "settings" },
      ],
    },
  ],
  user: { name: "Sarah Chen", email: "sarah@luxesalon.co.uk", initials: "SC" },
};

// ---------------------------------------------------------------------------
// Stats
// ---------------------------------------------------------------------------

export const bookingStats = [
  { title: "Today's Appointments", value: "18", change: "+3", icon: ClipboardList },
  { title: "Weekly Bookings", value: "94", change: "+12.4%", icon: Calendar },
  { title: "No-Show Rate", value: "4.2%", change: "-1.8%", icon: Users },
  { title: "Staff Utilisation", value: "87%", change: "+5.3%", icon: UserCog },
];

// ---------------------------------------------------------------------------
// Today's schedule (time slots from 9 AM to 6 PM)
// ---------------------------------------------------------------------------

export const todaySchedule = [
  { time: "09:00", client: "Emma Wilson", service: "Full Colour & Cut", staff: "Sarah", duration: 120, status: "completed" },
  { time: "09:30", client: "James Brown", service: "Men's Cut & Style", staff: "Alex", duration: 45, status: "completed" },
  { time: "10:00", client: "Priya Patel", service: "Balayage", staff: "Sarah", duration: 180, status: "in-progress" },
  { time: "10:30", client: "Tom Harris", service: "Beard Trim", staff: "Alex", duration: 30, status: "in-progress" },
  { time: "11:00", client: "Lucy Davis", service: "Blowout", staff: "Maya", duration: 45, status: "upcoming" },
  { time: "12:00", client: "Oliver Smith", service: "Men's Cut", staff: "Alex", duration: 30, status: "upcoming" },
  { time: "13:00", client: "Sophie Turner", service: "Highlights & Trim", staff: "Sarah", duration: 150, status: "upcoming" },
  { time: "14:00", client: "Daniel Lee", service: "Hot Towel Shave", staff: "Alex", duration: 45, status: "upcoming" },
  { time: "14:30", client: "Hannah Clarke", service: "Keratin Treatment", staff: "Maya", duration: 120, status: "upcoming" },
  { time: "16:00", client: "Ryan O'Brien", service: "Men's Cut & Colour", staff: "Alex", duration: 60, status: "upcoming" },
];

// ---------------------------------------------------------------------------
// Upcoming appointments (next 7 days)
// ---------------------------------------------------------------------------

export const upcomingAppointments = [
  { id: "APT-101", date: "Today", time: "11:00", client: "Lucy Davis", service: "Blowout", staff: "Maya", status: "confirmed" },
  { id: "APT-102", date: "Today", time: "13:00", client: "Sophie Turner", service: "Highlights", staff: "Sarah", status: "confirmed" },
  { id: "APT-103", date: "Tomorrow", time: "09:00", client: "Isla Morgan", service: "Full Colour", staff: "Sarah", status: "confirmed" },
  { id: "APT-104", date: "Tomorrow", time: "10:30", client: "Chloe Evans", service: "Cut & Style", staff: "Maya", status: "pending" },
  { id: "APT-105", date: "Wed", time: "11:00", client: "Amy Williams", service: "Balayage", staff: "Sarah", status: "confirmed" },
  { id: "APT-106", date: "Wed", time: "14:00", client: "George Taylor", service: "Men's Cut", staff: "Alex", status: "confirmed" },
  { id: "APT-107", date: "Thu", time: "09:30", client: "Megan Jones", service: "Extensions", staff: "Maya", status: "pending" },
  { id: "APT-108", date: "Fri", time: "15:00", client: "Jack Robinson", service: "Cut & Beard", staff: "Alex", status: "confirmed" },
];

// ---------------------------------------------------------------------------
// Revenue by service (for pie/donut chart)
// ---------------------------------------------------------------------------

export const revenueByService = [
  { service: "Colour Services", revenue: 4850, fill: "hsl(var(--chart-1))" },
  { service: "Cuts & Styling", revenue: 3200, fill: "hsl(var(--chart-2))" },
  { service: "Treatments", revenue: 2100, fill: "hsl(var(--chart-3))" },
  { service: "Men's Grooming", revenue: 1800, fill: "hsl(var(--chart-4))" },
  { service: "Extensions", revenue: 1200, fill: "hsl(var(--chart-5))" },
];

// ---------------------------------------------------------------------------
// Weekly calendar data (for Calendar page)
// ---------------------------------------------------------------------------

export const weekCalendar = {
  days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  hours: ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"],
  appointments: [
    { day: 0, startHour: 9, duration: 2, client: "Emma W.", service: "Colour", staff: "Sarah", color: "#2dd4bf" },
    { day: 0, startHour: 9, duration: 1, client: "James B.", service: "Men's Cut", staff: "Alex", color: "#f59e0b" },
    { day: 0, startHour: 11, duration: 1, client: "Lucy D.", service: "Blowout", staff: "Maya", color: "#8b5cf6" },
    { day: 0, startHour: 13, duration: 2.5, client: "Sophie T.", service: "Highlights", staff: "Sarah", color: "#2dd4bf" },
    { day: 0, startHour: 14, duration: 1, client: "Daniel L.", service: "Shave", staff: "Alex", color: "#f59e0b" },
    { day: 0, startHour: 14, duration: 2, client: "Hannah C.", service: "Keratin", staff: "Maya", color: "#8b5cf6" },
    { day: 1, startHour: 9, duration: 2, client: "Isla M.", service: "Full Colour", staff: "Sarah", color: "#2dd4bf" },
    { day: 1, startHour: 10, duration: 1, client: "Chloe E.", service: "Cut & Style", staff: "Maya", color: "#8b5cf6" },
    { day: 1, startHour: 13, duration: 1, client: "Ben K.", service: "Men's Cut", staff: "Alex", color: "#f59e0b" },
    { day: 1, startHour: 15, duration: 1.5, client: "Lisa P.", service: "Blowout", staff: "Maya", color: "#8b5cf6" },
    { day: 2, startHour: 11, duration: 3, client: "Amy W.", service: "Balayage", staff: "Sarah", color: "#2dd4bf" },
    { day: 2, startHour: 14, duration: 0.5, client: "George T.", service: "Men's Cut", staff: "Alex", color: "#f59e0b" },
    { day: 3, startHour: 9, duration: 2.5, client: "Megan J.", service: "Extensions", staff: "Maya", color: "#8b5cf6" },
    { day: 3, startHour: 10, duration: 1, client: "David R.", service: "Cut", staff: "Alex", color: "#f59e0b" },
    { day: 3, startHour: 14, duration: 2, client: "Sarah L.", service: "Colour", staff: "Sarah", color: "#2dd4bf" },
    { day: 4, startHour: 9, duration: 1, client: "Noah C.", service: "Men's Cut", staff: "Alex", color: "#f59e0b" },
    { day: 4, startHour: 11, duration: 2.5, client: "Olivia H.", service: "Highlights", staff: "Sarah", color: "#2dd4bf" },
    { day: 4, startHour: 15, duration: 1, client: "Jack R.", service: "Cut & Beard", staff: "Alex", color: "#f59e0b" },
    { day: 5, startHour: 9, duration: 2, client: "Ruby S.", service: "Full Colour", staff: "Sarah", color: "#2dd4bf" },
    { day: 5, startHour: 9, duration: 1, client: "Ethan M.", service: "Cut & Style", staff: "Alex", color: "#f59e0b" },
    { day: 5, startHour: 11, duration: 1.5, client: "Grace W.", service: "Blowout", staff: "Maya", color: "#8b5cf6" },
    { day: 5, startHour: 14, duration: 2, client: "Zara K.", service: "Balayage", staff: "Sarah", color: "#2dd4bf" },
    { day: 5, startHour: 14, duration: 0.5, client: "Henry J.", service: "Beard Trim", staff: "Alex", color: "#f59e0b" },
  ],
};

// ---------------------------------------------------------------------------
// Services list (for Services page)
// ---------------------------------------------------------------------------

export const servicesList = [
  { name: "Women's Cut & Style", duration: 60, price: "£45", category: "Cuts & Styling" },
  { name: "Men's Cut & Style", duration: 45, price: "£28", category: "Men's Grooming" },
  { name: "Full Colour", duration: 120, price: "£85", category: "Colour Services" },
  { name: "Highlights", duration: 150, price: "£110", category: "Colour Services" },
  { name: "Balayage", duration: 180, price: "£130", category: "Colour Services" },
  { name: "Blowout", duration: 45, price: "£35", category: "Cuts & Styling" },
  { name: "Keratin Treatment", duration: 120, price: "£95", category: "Treatments" },
  { name: "Extensions", duration: 150, price: "£200", category: "Extensions" },
  { name: "Men's Cut", duration: 30, price: "£22", category: "Men's Grooming" },
  { name: "Beard Trim", duration: 30, price: "£15", category: "Men's Grooming" },
  { name: "Hot Towel Shave", duration: 45, price: "£25", category: "Men's Grooming" },
  { name: "Cut & Beard Combo", duration: 60, price: "£38", category: "Men's Grooming" },
];
