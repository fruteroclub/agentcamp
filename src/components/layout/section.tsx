import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "container mx-auto px-4 py-8 space-y-4",
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
} 