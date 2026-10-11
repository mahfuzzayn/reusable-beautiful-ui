import {
  ArrowLeftRight,
  Banknote,
  Box,
  Building2,
  Calculator,
  Calendar,
  CalendarCheck,
  CalendarDays,
  ChartPie,
  ClipboardList,
  FileText,
  Folder,
  Gauge,
  GraduationCap,
  Inbox,
  LayoutDashboard,
  Layers,
  Megaphone,
  MessageCircle,
  Network,
  Package,
  Settings,
  Shapes,
  StickyNote,
  Ticket,
  TrendingUp,
  User,
  UserPlus,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/* ---------------------------------- nav ---------------------------------- */

export type NavItem = { label: string; icon: LucideIcon; active?: boolean };

export const navItems: NavItem[] = [
  { label: "Dashboard", icon: Gauge, active: true },
  { label: "Customers", icon: Users },
  { label: "Transaction", icon: ArrowLeftRight },
  { label: "Sales", icon: TrendingUp },
  { label: "Task", icon: ClipboardList },
  { label: "Accounting", icon: Calculator },
  { label: "Report", icon: FileText },
  { label: "Attendance", icon: CalendarCheck },
  { label: "Recruitment", icon: UserPlus },
  { label: "payroll", icon: Banknote },
  { label: "Stock", icon: Package },
  { label: "Tickets", icon: Ticket },
  { label: "Utilities", icon: Wrench },
  { label: "Charts", icon: ChartPie },
  { label: "Icons", icon: Shapes },
  { label: "Other page", icon: LayoutDashboard },
  { label: "UI Elements", icon: Layers },
  { label: "settings", icon: Settings },
  { label: "Companies", icon: Building2 },
  { label: "Public Holiday", icon: CalendarDays },
  { label: "User", icon: User },
  { label: "Items", icon: Box },
  { label: "Departments", icon: Network },
  { label: "Documents", icon: Folder },
  { label: "Training", icon: GraduationCap },
  { label: "Calender", icon: Calendar },
  { label: "Notice Board", icon: Megaphone },
  { label: "Chat", icon: MessageCircle },
  { label: "Message", icon: Inbox },
  { label: "Notes", icon: StickyNote },
];

/* --------------------------------- tiles ---------------------------------- */

export type StatTile = {
  label: string;
  value: string;
  icon: LucideIcon;
};

export const statTiles: StatTile[] = [
  { label: "Active Client", value: "8", icon: UserPlus },
  { label: "Active Admin", value: "3", icon: User },
  { label: "Total Expenses", value: "$ 760", icon: Banknote },
  { label: "Running Projects", value: "8", icon: Layers },
];

/* ------------------------------ upcoming events --------------------------- */

export type UpcomingEvent = {
  day: string;
  month: string;
  title: string;
  place: string;
  action: string;
};

export const upcomingEvents: UpcomingEvent[] = [
  { day: "28", month: "MAR", title: "Marketing policy", place: "Green Road - Dhaka.Bangladesh", action: "Email" },
  { day: "2", month: "APR", title: "Accounting policy", place: "Kolkata, India", action: "skype" },
  { day: "17", month: "MAR", title: "Marketing policy", place: "Madrid - spain", action: "phone" },
  { day: "3", month: "JAN", title: "Finance policy", place: "south Australia - Australia", action: "Mobile" },
];

/* ----------------------------- running projects --------------------------- */

export type ProjectRow = {
  name: string;
  status: "Failed" | "progressing" | "Success";
  statusTone: "bad" | "warn" | "ok" | "info";
  progress: number;
};

export const runningProjects: ProjectRow[] = [
  { name: "Wordpress configuration", status: "Failed", statusTone: "bad", progress: 12 },
  { name: "Payroll tool", status: "progressing", statusTone: "warn", progress: 8 },
  { name: "Server configuration", status: "progressing", statusTone: "ok", progress: 33 },
  { name: "Project completion", status: "progressing", statusTone: "info", progress: 65 },
  { name: "Construction", status: "Success", statusTone: "ok", progress: 38 },
];

/* ------------------------------ pending works ----------------------------- */

export type PendingRow = {
  task: string;
  date: string;
  status: "progressing" | "success" | "Failed";
  statusTone: "warn" | "ok" | "bad";
};

export const pendingWorks: PendingRow[] = [
  { task: "Database tools", date: "Jul 25, 2017 for Alimul Alrazy", status: "progressing", statusTone: "warn" },
  { task: "Cabels", date: "Jul 25, 2017 for Alimul", status: "success", statusTone: "ok" },
  { task: "Technological tools", date: "Feb 25, 2017 for Alrazy", status: "Failed", statusTone: "bad" },
  { task: "Transaction", date: "apr 25, 2017 for Mahfuz", status: "progressing", statusTone: "warn" },
  { task: "Training tools", date: "jun 25, 2017 for Alrazy", status: "success", statusTone: "ok" },
];

/* ----------------------------- works deadlines ---------------------------- */

export type DeadlineRow = { name: string; date: string; highlight?: boolean };

export const workDeadlines: DeadlineRow[] = [
  { name: "Alrazy", date: "Feb 25,2017", highlight: true },
  { name: "Jahir", date: "jun 05,2017" },
  { name: "Sayeed", date: "Feb 05,2017" },
  { name: "Shipon", date: "jun 25.2017" },
  { name: "Rafi", date: "jul 15.2017" },
];

/* --------------------------- works announcements -------------------------- */

export type AnnouncementRow = { type: string; worker: string; highlight?: boolean };

export const announcements: AnnouncementRow[] = [
  { type: "Web Design", worker: "Jr. Developer Alrazy", highlight: true },
  { type: "Networking", worker: "Jr. Developer Jahr" },
  { type: "Megento", worker: "Jr. Developer Sayeed" },
  { type: "Php,Laravel", worker: "Jr. Developer Muhim" },
  { type: "Html,css", worker: "Frontend Developer Rafi" },
];

/* ------------------------------ notice board ------------------------------ */

export type NoticeRow = { notice: string; by: string; added: string; highlight?: boolean };

export const noticeBoard: NoticeRow[] = [
  { notice: "new notice", by: "Mr. Alrazy", added: "20th April 2017", highlight: true },
  { notice: "Urgent notice", by: "Mr. Alrazy", added: "20th june 2017" },
  { notice: "Urgent notice", by: "Mr. Jahr", added: "26th june 2017" },
  { notice: "Urgent notice", by: "Mr. leo", added: "3rd june 2017" },
  { notice: "Notice", by: "Mr. Karim", added: "3rd july 2017" },
];

/* --------------------------------- charts --------------------------------- */

/** 0–90 scale, exactly as the reference chart reads. */
export const earningsByMonth: { month: string; earnings: number; expenses: number }[] = [
  { month: "January", earnings: 28, expenses: 12 },
  { month: "February", earnings: 42, expenses: 17 },
  { month: "March", earnings: 12, expenses: 60 },
  { month: "April", earnings: 47, expenses: 32 },
  { month: "May", earnings: 82, expenses: 42 },
  { month: "June", earnings: 32, expenses: 72 },
  { month: "July", earnings: 57, expenses: 47 },
  { month: "August", earnings: 37, expenses: 77 },
  { month: "September", earnings: 62, expenses: 27 },
  { month: "October", earnings: 22, expenses: 52 },
  { month: "November", earnings: 72, expenses: 12 },
  { month: "December", earnings: 47, expenses: 67 },
];

export const weeklyEarnings: { day: string; value: number }[] = [
  { day: "Sun", value: 5 },
  { day: "Mon", value: 10 },
  { day: "Tue", value: 45 },
  { day: "Wed", value: 35 },
  { day: "Thu", value: 80 },
  { day: "Fri", value: 65 },
  { day: "Sat", value: 25 },
];

/* -------------------------------- calendar -------------------------------- */

/** July 2017 — starts on a Saturday; the grid leads with June 25–30. */
export const calendarWeeks: (number | null)[][] = [
  [25, 26, 27, 28, 29, 30, 1],
  [2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20, 21, 22],
  [23, 24, 25, 26, 27, 28, 29],
  [30, 31, null, null, null, null, null],
];

export const calendarEventDays = new Set([17, 18, 20, 21]);
export const calendarToday = 19;
