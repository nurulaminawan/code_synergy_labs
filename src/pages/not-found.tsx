import { Link } from "wouter";
import { Layout } from "@/components/layout";

export default function NotFound() {
  return (
    <Layout>
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-primary font-black text-6xl mb-4">404</p>
          <h1 className="text-3xl font-black mb-4">Page not found</h1>
          <p className="text-muted-foreground mb-8">That route does not exist on this site.</p>
          <Link href="/" className="text-primary font-bold hover:underline">
            Return home →
          </Link>
        </div>
      </main>
    </Layout>
  );
}
