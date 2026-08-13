import { useMemo, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout";
import { type ProjectCategory, projects } from "@/data/projects";

const filters: Array<"All" | ProjectCategory> = ["All", "AI", "ERP", "Mobile", "Web"];

export default function Work() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
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
          <h1 className="text-4xl md:text-6xl font-black mb-4">Work</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-10">
            AI platforms, ERP systems, and products we have designed, built, and launched.
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

          <div className="grid md:grid-cols-2 gap-8">
            {visible.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="h-full bg-card border-border hover:border-primary transition-colors">
                  <CardContent className="p-8">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                      {project.category}
                    </p>
                    <h2 className="text-2xl font-black mb-3">{project.title}</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                    <ul className="space-y-2 mb-6">
                      {project.outcomes.map((item) => (
                        <li key={item} className="text-sm text-foreground/90">
                          · {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="text-xs border border-border rounded-full px-3 py-1 text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
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
