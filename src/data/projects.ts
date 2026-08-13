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
      "Meeting Sense transcribes live discussions, extracts decisions and owners, and writes structured notes into a searchable knowledge graph. LangChain RAG over Neo4j and Qdrant retrieves the right LLM context so teams get follow-ups, risk flags, and a living memory of every meeting.",
    stack: ["Python", "FastAPI", "LLM", "LangChain", "RAG", "Qdrant", "Neo4j", "React"],
    outcomes: ["Automatic action items", "Graph RAG retrieval", "Searchable meeting memory"],
  },
  {
    id: "voice-support",
    title: "AI Voice Customer Support Solution",
    category: "AI",
    summary: "Multilingual AI voice agents that handle customer support calls with human-level fluency.",
    description:
      "An AI voice customer support solution for production call flows. Agentic LLM workflows authenticate callers, resolve common tickets, escalate with full context, and log every turn into CRM and analytics — across languages, with LangChain RAG over Qdrant and Neo4j for grounded answers from your knowledge base.",
    stack: ["Python", "FastAPI", "LLM", "LangChain", "Agentic AI", "RAG", "Qdrant", "Neo4j", "Speech AI", "Auth"],
    outcomes: ["24/7 multilingual coverage", "Grounded answers with RAG", "Lower handle time"],
  },
  {
    id: "hr-insights",
    title: "Agentic AI with HR Insights",
    category: "AI",
    summary: "An agentic HR copilot that surfaces workforce patterns and recommended actions.",
    description:
      "Agentic LLM workflows that read HR systems, detect attrition risk, staffing gaps, and policy exceptions, then propose next steps to people teams. LangChain RAG over Neo4j and Qdrant keeps recommendations tied to policies and org structure, with audit trails and role-based access.",
    stack: ["Python", "Agentic AI", "LLM", "LangChain", "RAG", "Qdrant", "Neo4j", "Django", "PostgreSQL"],
    outcomes: ["Attrition early-warning", "Policy-aware RAG answers", "Secure HR data access"],
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
    id: "school-erp-flutter",
    title: "Flutter School ERP",
    category: "Mobile",
    summary: "School ERP mobile apps for Student, Parent, Admin, and Teacher — built with Flutter.",
    description:
      "A Flutter school ERP with dedicated apps and roles for students, parents, admins, and teachers. Attendance, homework, results, fees, circulars, and messaging stay in sync with the campus backend so each role sees only what they need.",
    stack: ["Flutter", "Dart", "Auth", "REST APIs", "Firebase"],
    outcomes: ["Student app", "Parent app", "Admin app", "Teacher app"],
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
    id: "floor-plan-creator",
    title: "Floor Plan Creator",
    category: "Mobile",
    summary: "House design and architecture app for creating floor plans in minutes.",
    description:
      "Floor Plan Creator helps homeowners, architects, and interior teams draw custom house layouts. Drag-and-drop rooms, set wall dimensions, and iterate floor plans for residential design and architecture work.",
    stack: ["Flutter", "Android", "iOS"],
    outcomes: ["Drag-and-drop rooms", "Accurate wall dimensions", "Residential architecture layouts"],
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
];
