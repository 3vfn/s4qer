import { cn } from '@/lib/utils'

export function GlassCard({
  className,
  strong,
  hover,
  ...props
}: React.ComponentProps<'div'> & { strong?: boolean; hover?: boolean }) {
  return (
    <div
      className={cn(
        strong ? 'glass-strong' : 'glass',
        'rounded-2xl',
        hover && 'transition-all duration-300 hover:-translate-y-1 hover:border-primary/40',
        className,
      )}
      {...props}
    />
  )
}
