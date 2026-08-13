import Link from 'next/link'
import { cn } from '@/lib/utils'
import { brand } from '@/lib/data'

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'relative inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent glow-primary',
        className,
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" fill="none" className="size-1/2 text-primary-foreground">
        {/* Geometric falcon / wing mark */}
        <path
          d="M4 6c4 0 7 1.5 8 6 1-4.5 4-6 8-6-1.5 4-4 6-8 7.5C8 12 5.5 10 4 6Z"
          fill="currentColor"
        />
        <path d="M12 12.5V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  )
}

export function Logo({
  href = '/',
  className,
  showText = true,
}: {
  href?: string
  className?: string
  showText?: boolean
}) {
  return (
    <Link href={href} className={cn('group inline-flex items-center gap-2.5', className)}>
      <LogoMark className="size-9 transition-transform group-hover:scale-105" />
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-extrabold tracking-tight text-foreground">
            {brand.name}
          </span>
          <span className="text-[10px] font-medium tracking-[0.25em] text-muted-foreground">
            {brand.nameEn}
          </span>
        </span>
      )}
    </Link>
  )
}
