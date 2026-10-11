/* Static content for the Donezo overview dashboard.
   Everything the page renders lives here so the design can be re-skinned
   against real data without touching the markup. */

export type NavItem = {
  label: string;
  icon: string;
  badge?: string;
};

export const menuItems: NavItem[] = [
  { label: "Dashboard", icon: "dashboard" },
  { label: "Tasks", icon: "tasks", badge: "16" },
  { label: "Calendar", icon: "calendar" },
  { label: "Analytics", icon: "analytics" },
  { label: "Team", icon: "team" },
];

export const generalItems: NavItem[] = [
  { label: "Settings", icon: "settings" },
  { label: "Help", icon: "help" },
  { label: "Logout", icon: "logout" },
];

export const stats = [
  {
    heading: "Total Projects",
    value: "24",
    caption: "Increased from last month",
    captionTone: "onGreen" as const,
    tone: "green" as const,
  },
  {
    heading: "Ended Projects",
    value: "10",
    caption: "Increased from last month",
    captionTone: "up" as const,
    tone: "white" as const,
  },
  {
    heading: "Running Projects",
    value: "12",
    caption: "Increased from last month",
    captionTone: "up" as const,
    tone: "white" as const,
  },
  {
    heading: "Pending Project",
    value: "2",
    caption: "On Discuss",
    captionTone: "green" as const,
    tone: "white" as const,
  },
];

/* Tasks overview — grouped bars per day, plus last month's trend. */
export const tasksChart = {
  days: ["M", "T", "W", "T", "F", "S", "S"],
  /** This week's completed tasks (dark green bars). */
  tasks: [60, 40, 80, 55, 90, 70, 35],
  /** Remaining tasks (light green bars). */
  remaining: [30, 50, 20, 40, 15, 25, 45],
  /** Dashed reference line — same days last month. */
  lastMonth: [42, 46, 50, 52, 58, 48, 44],
  ticks: [0, 25, 50, 75, 100],
};

export const reminders = [
  {
    title: "Meeting with Arc Company",
    date: "Dec 2, 2024",
    dot: "#227d52",
    action: "Start Meeting",
  },
  {
    title: "Design Meeting",
    date: "Dec 5, 2024",
    dot: "#f0a435",
  },
  {
    title: "Team Workshop",
    date: "Dec 8, 2024",
    dot: "#a6dfc0",
  },
];

export const projectTasks = [
  {
    title: "Develop API Endpoints",
    due: "Due date: Feb 25, 2024",
    done: true,
  },
  {
    title: "Optimize Page Load",
    due: "Due date: Dec 5, 2024",
    done: false,
  },
  {
    title: "Cross-Browser Testing",
    due: "Due date: Dec 6, 2024",
    done: false,
  },
];

export const projectList = [
  { name: "E-commerce", progress: 80, color: "#227d52" },
  { name: "Healthcare", progress: 40, color: "#f0a435" },
  { name: "Start-up", progress: 65, color: "#41b970" },
  { name: "Education", progress: 30, color: "#a6dfc0" },
];

export const weeklyPlan = {
  center: "74%",
  centerLabel: "Increase in plan",
  segments: [
    { label: "Products", value: "49%", color: "#227d52" },
    { label: "On Hold", value: "25%", color: "#a6dfc0" },
  ],
};

export const teamActivity = [
  {
    name: "Hamzatrusa O.",
    task: "Design cards",
    date: "Dec 4, 2024",
    icon: "file" as const,
    tone: "green" as const,
  },
  {
    name: "Kelly O'Hara",
    task: "Redesign dashboard",
    date: "Dec 8, 2024",
    icon: "calendar" as const,
    tone: "orange" as const,
  },
  {
    name: "Katherina",
    task: "Code refactor",
    date: "Dec 16, 2024",
    icon: "file" as const,
    tone: "teal" as const,
  },
  {
    name: "Anton Hrytsiv",
    task: "Team Meeting",
    date: "Dec 20, 2024",
    icon: "calendar" as const,
    tone: "moss" as const,
  },
];

export const timeTracker = {
  elapsed: "01:24:08",
};

export const profile = {
  name: "Mahfuz Zayn",
  initials: "MZ",
  today: "Wed, 25 Dec",
  greeting: "How are you doing today?",
};
