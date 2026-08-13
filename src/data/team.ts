export type TeamGroup = "Leadership" | "AI" | "Engineering" | "Design";

export interface TeamMember {
  name: string;
  role: string;
  group: TeamGroup;
}

export const team: TeamMember[] = [
  { name: "Dr. Waheed Aftab Khan", role: "CEO", group: "Leadership" },
  { name: "Rizwan Javeed", role: "CTO", group: "Leadership" },
  { name: "Noor Ul Amin", role: "Sr. AI Team Lead", group: "AI" },
  { name: "Muzammil Saleem", role: "AI Developer", group: "AI" },
  { name: "Azan Shakir", role: "Sr. AI Engineer", group: "AI" },
  { name: "Shan Ali", role: "Sr. AI Engineer", group: "AI" },
  { name: "Fizza Akram", role: "Business Development Head", group: "Leadership" },
  { name: "Mustafa Amir", role: "Senior Video & 3D Graphics Editor", group: "Design" },
  { name: "Muhammad Jamil", role: "Frontend Developer", group: "Engineering" },
  { name: "Faryal", role: "AI Engineer", group: "AI" },
  { name: "Muhammad Yasir", role: "AI Engineer", group: "AI" },
  { name: "Uzair Khan", role: "Senior Frontend Developer", group: "Engineering" },
  { name: "Usmana Zulfiqar", role: "Backend & Web Technologies", group: "Engineering" },
  { name: "Ayesha Khan", role: "Flutter Developer", group: "Engineering" },
  { name: "Usama Khan", role: "Web Development", group: "Engineering" },
  { name: "Zainab Khan", role: "Frontend & Graphics Designer", group: "Design" },
];

export function memberInitials(name: string) {
  const parts = name.replace(/^Dr\.?\s+/i, "").split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}
