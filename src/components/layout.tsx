import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Menu, MessageSquare, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

const navItems = [
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Expertise", id: "expertise" },
  { label: "Process", id: "process" },
  { label: "Stack", id: "stack" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "contact" },
];

interface LayoutProps {
  children: ReactNode;
  onHomeSection?: (id: string) => void;
}

export function Layout({ children, onHomeSection }: LayoutProps) {
  const [location, setLocation] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (location !== "/") {
      setLocation("/");
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
      return;
    }
    onHomeSection?.(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <header>
        <nav
          aria-label="Main navigation"
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
            isScrolled
              ? "bg-background/90 backdrop-blur-md border-border shadow-sm py-3"
              : "bg-transparent border-transparent py-5"
          }`}
        >
          <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
            <Link href="/" className="flex items-center" aria-label={`${site.name} — Home`}>
              <span className="text-xl md:text-2xl font-black tracking-tighter">
                Code<span className="text-primary">Synergy</span>
                <span className="hidden sm:inline"> Labs</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center space-x-7">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => goToSection(item.id)}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Link
                href="/work"
                className="text-sm font-medium text-primary border border-primary/40 hover:bg-primary/10 transition-colors px-4 py-1.5 rounded-full"
              >
                Work
              </Link>
              <Button
                onClick={() => goToSection("contact")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-6"
              >
                Start a Project
              </Button>
            </div>

            <button
              className="lg:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg py-4 px-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => goToSection(item.id)}
                  className="text-left text-lg font-medium hover:text-primary"
                >
                  {item.label}
                </button>
              ))}
              <Link href="/work" className="text-left text-lg font-medium text-primary" onClick={() => setMobileMenuOpen(false)}>
                Work →
              </Link>
              <Button onClick={() => goToSection("contact")} className="bg-primary text-primary-foreground w-full font-bold">
                Start a Project
              </Button>
            </div>
          )}
        </nav>
      </header>

      {children}

      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="text-2xl font-black tracking-tighter">
              Code<span className="text-primary">Synergy</span> Labs
            </Link>
            <p className="text-muted-foreground text-sm text-center md:text-left max-w-xs">
              Software development studio for AI systems, ERP platforms, and production-grade products.
            </p>
            <address className="not-italic text-xs text-muted-foreground/70">
              {site.city} ·{" "}
              <a href={`mailto:${site.email}`} className="hover:text-primary">
                {site.email}
              </a>
            </address>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => goToSection(item.id)} className="hover:text-primary">
                {item.label}
              </button>
            ))}
            <Link href="/work" className="hover:text-primary">
              Work
            </Link>
          </nav>
        </div>
        <div className="container mx-auto px-4 md:px-6 mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
          <p>
            © {new Date().getFullYear()} Code Synergy Labs. All rights reserved.
          </p>
          <p>Founded by {site.founder}</p>
        </div>
      </footer>

      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
      >
        <span className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-50" />
        <MessageSquare className="w-8 h-8 relative z-10" />
      </a>
    </div>
  );
}
