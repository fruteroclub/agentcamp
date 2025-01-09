import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "container mx-auto px-4 pt-16 md:pt-24 pb-8",
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
} 