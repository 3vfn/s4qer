import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  desc,
  align = 'center',
  className,
}: {
  eyebrow?: string
  title: string
  desc?: string
  align?: 'center' | 'start'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-start',
        className,
      )}
    >
      {eyebrow && (
        <Badge variant="default" className="px-3 py-1">
          {eyebrow}
        </Badge>
      )}
      <h2 className="max-w-2xl text-balance font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {desc && (
        <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {desc}
        </p>
      )}
    </div>
  )
}
