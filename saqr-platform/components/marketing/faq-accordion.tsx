'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { GlassCard } from '@/components/ui/glass-card'
import { cn } from '@/lib/utils'

export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <GlassCard key={item.q} className="overflow-hidden">
            <button
              className="flex w-full items-center justify-between gap-4 p-5 text-start"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-display font-bold text-foreground">{item.q}</span>
              <span
                className={cn(
                  'flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary transition-transform duration-300',
                  isOpen && 'rotate-45',
                )}
              >
                <Plus className="size-4" />
              </span>
            </button>
            <div
              className={cn(
                'grid transition-all duration-300 ease-out',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </div>
            </div>
          </GlassCard>
        )
      })}
    </div>
  )
}
