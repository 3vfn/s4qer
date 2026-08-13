'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, DoorOpen } from 'lucide-react'
import { Logo } from '@/components/brand/logo'
import { CtaButton } from '@/components/ui/cta-button'
import { publicNav } from '@/lib/data'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 pt-3">
        <div className="glass-strong flex h-16 items-center justify-between rounded-2xl px-4 sm:px-6">
          <Logo />

          <nav className="hidden items-center gap-1 md:flex" aria-label="التنقل الرئيسي">
            {publicNav.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'rounded-lg px-3.5 py-2 text-sm font-medium transition-colors',
                    active
                      ? 'bg-primary/15 text-primary'
                      : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground',
                  )}
                >
                  {item.title}
                </Link>
              )
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <CtaButton href="/join" variant="ghost" size="sm">
              <DoorOpen />
              دخول غرفة
            </CtaButton>
            <CtaButton href="/creator" variant="primary" size="sm">
              ابدأ الآن
            </CtaButton>
          </div>

          <button
            className="inline-flex size-10 items-center justify-center rounded-lg text-foreground hover:bg-muted/60 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open && (
          <div className="glass-strong mt-2 flex flex-col gap-1 rounded-2xl p-3 md:hidden animate-rise">
            {publicNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                  pathname === item.href
                    ? 'bg-primary/15 text-primary'
                    : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground',
                )}
              >
                {item.title}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <CtaButton href="/join" variant="glass" size="sm" className="w-full">
                دخول غرفة
              </CtaButton>
              <CtaButton href="/creator" variant="primary" size="sm" className="w-full">
                ابدأ الآن
              </CtaButton>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
