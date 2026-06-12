import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("font-code font-bold tracking-tight", className)}>
      <span className="text-gradient">&lt;</span>
      <span className="text-foreground">SF</span>
      <span className="text-gradient">{" />"}</span>
    </span>
  );
}
