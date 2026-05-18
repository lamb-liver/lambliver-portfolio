import { cn } from "@/lib/utils";

export function OpenIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={cn("h-3 w-3 shrink-0", className)}
      aria-hidden
    >
      <path d="M4.5 2.5h5v5M7 5 2.5 9.5" strokeLinecap="square" />
    </svg>
  );
}
