import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const ctaVariants = cva(
  'group inline-flex items-center justify-center gap-2 rounded-xl font-semibold whitespace-nowrap transition-all outline-none focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 active:translate-y-px [&_svg]:size-[1.1em]',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground hover:brightness-110 glow-primary hover:shadow-[0_10px_50px_-8px_color-mix(in_oklch,var(--primary)_65%,transparent)]',
        accent: 'bg-accent text-accent-foreground hover:brightness-105 glow-accent',
        glass: 'glass-strong text-foreground hover:border-primary/50',
        outline: 'border border-border bg-transparent text-foreground hover:bg-muted/50',
        ghost: 'text-foreground hover:bg-muted/60',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-sm',
        lg: 'h-13 px-8 text-base',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

type CtaProps = VariantProps<typeof ctaVariants> & {
  href?: string
  className?: string
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function CtaButton({ href, className, variant, size, children, ...props }: CtaProps) {
  const classes = cn(ctaVariants({ variant, size }), className)
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
