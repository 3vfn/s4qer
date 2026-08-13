'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Bell, Search, LogOut, ChevronLeft } from 'lucide-react'
import { Logo } from '@/components/brand/logo'
import { Badge } from '@/components/ui/badge'
import type { NavItem } from '@/lib/data'
import { cn } from '@/lib/utils'

type Role = { label: string; color: 'primary' | 'accent' | 'success' }

export function DashboardShell({
  nav,
  role,
  user,
  children,
}: {
  nav: NavItem[]
  role: Role
  user: { name: string; handle: string; initials: string }
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const SidebarContent = (
    <div className="flex h-full flex-col gap-2 p-4">
      <div className="flex items-center justify-between px-2 py-3">
        <Logo href="/" />
        <button
          className="inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted/60 lg:hidden"
          onClick={() => setOpen(false)}
          aria-label="إغلاق"
        >
          <X className="size-5" />
        </button>
      </div>

      <Badge
        variant={role.color}
        className="mx-2 w-fit"
      >
        {role.label}
      </Badge>

      <nav className="mt-3 flex flex-1 flex-col gap-1" aria-label="التنقل الجانبي">
        {nav.map((item) => {
          const active = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                'group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all',
                active
                  ? 'bg-primary/15 text-primary'
                  : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground',
              )}
            >
              <item.icon className="size-[18px]" />
              <span className="flex-1">{item.title}</span>
              {item.badge && (
                <Badge
                  variant={item.badge === 'مباشر' ? 'destructive' : 'muted'}
                  className="px-1.5 py-0 text-[10px]"
                >
                  {item.badge}
                </Badge>
              )}
              {active && <ChevronLeft className="size-4" />}
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto space-y-2">
        <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-muted/30 p-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-primary-foreground">
            {user.initials}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-foreground">{user.name}</p>
            <p className="truncate text-xs text-muted-foreground" dir="ltr">
              {user.handle}
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted/60 hover:text-destructive"
            aria-label="تسجيل الخروج"
          >
            <LogOut className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  )

  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 -z-10 aurora opacity-60" aria-hidden="true" />

      {/* Desktop sidebar (right side for RTL) */}
      <aside className="fixed inset-y-0 right-0 z-30 hidden w-72 border-l border-border/60 bg-sidebar/70 backdrop-blur-xl lg:block">
        {SidebarContent}
      </aside>

      {/* Mobile drawer */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-background/70 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <aside className="fixed inset-y-0 right-0 z-50 w-72 border-l border-border/60 bg-sidebar animate-rise lg:hidden">
            {SidebarContent}
          </aside>
        </>
      )}

      <div className="lg:mr-72">
        {/* Topbar */}
        <header className="sticky top-0 z-20 border-b border-border/60 bg-background/70 backdrop-blur-xl">
          <div className="flex h-16 items-center gap-3 px-4 sm:px-6">
            <button
              className="inline-flex size-10 items-center justify-center rounded-lg text-foreground hover:bg-muted/60 lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="فتح القائمة"
            >
              <Menu className="size-5" />
            </button>

            <div className="relative hidden max-w-sm flex-1 items-center sm:flex">
              <Search className="pointer-events-none absolute right-3 size-4 text-muted-foreground" />
              <input
                placeholder="ابحث..."
                className="h-10 w-full rounded-xl border border-border bg-muted/30 pr-10 pl-4 text-sm text-foreground outline-none placeholder:text-muted-foreground/70 focus:border-primary/60"
              />
            </div>

            <div className="ms-auto flex items-center gap-2">
              <button
                className="relative inline-flex size-10 items-center justify-center rounded-xl text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                aria-label="الإشعارات"
              >
                <Bell className="size-5" />
                <span className="absolute right-2.5 top-2.5 size-2 rounded-full bg-destructive" />
              </button>
              <span className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-primary-foreground lg:hidden">
                {user.initials}
              </span>
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  )
}
