import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export function BackToRivendell() {
  return (
    <Link href="/products">
      <a className="fixed bottom-4 right-4 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full bg-card/90 backdrop-blur-md border border-[hsl(var(--gold)/0.2)] text-sm text-muted-foreground hover:text-[hsl(var(--gold))] hover:border-[hsl(var(--gold)/0.4)] transition-all shadow-lg group">
        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
        <span className="hidden sm:inline">Back to Rivendell AI</span>
        <span className="sm:hidden">Back</span>
      </a>
    </Link>
  );
}
