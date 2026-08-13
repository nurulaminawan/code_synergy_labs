export type ProjectCategory = "AI" | "ERP" | "Mobile" | "Web";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  description: string;
  stack: string[];
  outcomes: string[];
}

export const projects: Project[] = [
  {
    id: "meeting-sense",
    title: "Meeting Sense",
    category: "AI",
    summary: "AI meeting intelligence that captures, structures, and turns conversations into action.",
    description:
      "Meeting Sense transcribes live discussions, extracts decisions and owners, and writes structured notes into a searchable knowledge graph. Teams get follow-ups, risk flags, and a living memory of every meeting.",
    stack: ["Python", "FastAPI", "Neo4j", "Ingestion Layer", "React"],
    outcomes: ["Automatic action items", "Searchable meeting memory", "Multi-speaker insights"],
  },
  {
    id: "voice-agents",
    title: "Voice Agents for Customer Support",
    category: "AI",
    summary: "Multilingual voice agents that handle support calls with human-level fluency.",
    description:
      "Production voice agents for customer support across languages. They authenticate callers, resolve common tickets, escalate with full context, and log every turn into CRM and analytics.",
    stack: ["Python", "FastAPI", "Speech AI", "PostgreSQL", "Auth"],
    outcomes: ["24/7 multilingual coverage", "Lower handle time", "Consistent brand voice"],
  },
  {
    id: "hr-insights",
    title: "Agentic AI with HR Insights",
    category: "AI",
    summary: "An agentic HR copilot that surfaces workforce patterns and recommended actions.",
    description:
      "Agentic workflows that read HR systems, detect attrition risk, staffing gaps, and policy exceptions, then propose next steps to people teams — with audit trails and role-based access.",
    stack: ["Python", "Neo4j", "Machine Learning", "Django", "PostgreSQL"],
    outcomes: ["Attrition early-warning", "Policy-aware recommendations", "Secure HR data access"],
  },
  {
    id: "education-erp",
    title: "Education ERP",
    category: "ERP",
    summary: "Campus operations — admissions, academics, finance, and parent portals — in one system.",
    description:
      "A full education ERP covering student lifecycle, timetable, examinations, fees, payroll, and reporting. Built for schools and universities that need reliable data and role-based portals.",
    stack: ["Laravel", "PHP", "MySQL", "React", "Auth"],
    outcomes: ["Unified student records", "Fee and payroll automation", "Parent and faculty portals"],
  },
  {
    id: "industrial-erp",
    title: "Industrial ERP",
    category: "ERP",
    summary: "Plant-floor ERP for inventory, production, procurement, and quality control.",
    description:
      "Industrial ERP that connects inventory, production orders, procurement, and quality. Real-time stock, shop-floor posting, and financial integration keep operations and accounts in sync.",
    stack: ["Laravel", "PostgreSQL", "React", "SQL", "Auth"],
    outcomes: ["Live inventory", "Production tracking", "Purchase-to-pay flow"],
  },
  {
    id: "erp-core",
    title: "ERP Management System",
    category: "ERP",
    summary: "Modular ERP for accounts, payroll, inventory, sales, and purchasing.",
    description:
      "A scalable ERP core with vouchers, ledgers, payroll from attendance, inventory transfers, and sales/purchase workflows — designed for SMEs that need control without enterprise bloat.",
    stack: ["PHP", "Laravel", "MySQL", "Auth"],
    outcomes: ["Posted vs unposted control", "Linked HR and accounts", "Invoice and returns"],
  },
  {
    id: "appoptimax",
    title: "AppOptimax",
    category: "Web",
    summary: "ASO growth platform for keyword research, competitor tracking, and ranking.",
    description:
      "AppOptimax helps product teams lift app-store visibility with keyword difficulty, competitor rank tracking, and growth dashboards used by marketing and product together.",
    stack: ["React", "Python", "PostgreSQL", "FastAPI"],
    outcomes: ["Keyword intelligence", "Competitor rank watch", "Growth reporting"],
  },
  {
    id: "smart-mirror",
    title: "Smart Mirror & Recorder",
    category: "Mobile",
    summary: "Screen mirroring and HD recording for tutorials, gaming, and presentations.",
    description:
      "A mobile product for mirroring to TV or PC while recording in HD, with a private browser and multitasking so creators can capture without interrupting their workflow.",
    stack: ["Flutter", "Android", "iOS"],
    outcomes: ["HD capture", "Multitasking record", "Cast to display"],
  },
];
