import { useMemo, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout";
import { memberInitials, team, type TeamGroup } from "@/data/team";

const filters: Array<"All" | TeamGroup> = ["All", "Leadership", "Board", "AI", "Engineering", "Design", "Marketing"];

export default function Team() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = useMemo(
    () => (filter === "All" ? team : team.filter((member) => member.group === filter)),
    [filter],
  );

  return (
    <Layout>
      <main className="pt-28 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
            <ChevronLeft className="w-4 h-4" />
            Back to home
          </Link>
          <h1 className="text-4xl md:text-6xl font-black mb-4">Team</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-10">
            The people building AI systems, products, and experiences at Code Synergy Labs.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`px-4 py-2 rounded-full text-sm font-bold border transition-colors ${
                  filter === item
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {visible.map((member, i) => (
              <motion.div
                key={`${member.name}-${member.role}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <Card className="h-full bg-card border-border hover:border-primary transition-colors">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 text-primary font-black text-xl flex items-center justify-center mb-5">
                      {memberInitials(member.name)}
                    </div>
                    <h2 className="text-lg font-black mb-1">{member.name}</h2>
                    <p className="text-sm text-primary font-semibold mb-3">{member.role}</p>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{member.group}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
