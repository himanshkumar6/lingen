import Link from "next/link";
import Container from "@/components/Layout/Container";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center py-20 animate-in fade-in duration-1000">
      <Container className="text-center space-y-8">
        <div className="space-y-2">
          <h1 className="text-7xl md:text-8xl font-black text-primary tracking-tighter">
            404
          </h1>
          <p className="text-xl md:text-2xl font-medium text-foreground tracking-tight">
            This page does not exist.
          </p>
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            The link might be broken or the page has been moved.
          </p>
        </div>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-bold transition-premium hover:scale-105 hover:shadow-xl hover:shadow-primary/20 active:scale-95"
          >
            <MoveLeft className="w-5 h-5" />
            Return Home
          </Link>
        </div>
      </Container>
    </div>
  );
}
