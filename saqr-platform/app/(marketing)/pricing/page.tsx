import type { Metadata } from 'next'
import { Check, Sparkles } from 'lucide-react'
import { SectionHeading } from '@/components/marketing/section-heading'
import { GlassCard } from '@/components/ui/glass-card'
import { Badge } from '@/components/ui/badge'
import { CtaButton } from '@/components/ui/cta-button'
import { plans, faqs } from '@/lib/data'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'الأسعار | منصة صقر',
  description: 'باقات مرنة تناسب المبدعين والفرق — ابدأ مجاناً وارتقِ متى شئت.',
}

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 lg:pt-24">
      <SectionHeading
        eyebrow="الأسعار"
        title="باقات تنمو مع طموحك"
        desc="ابدأ مجاناً، ثم ارتقِ إلى الباقة التي تناسب حجم جمهورك — بدون التزامات خفيّة."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <GlassCard
            key={plan.id}
            strong={plan.highlighted}
            className={cn(
              'relative flex flex-col gap-6 p-8',
              plan.highlighted && 'glow-primary lg:-translate-y-4',
            )}
          >
            {plan.highlighted && (
              <Badge className="absolute -top-3 right-8 gap-1.5 px-3 py-1">
                <Sparkles className="size-3.5" />
                الأكثر شيوعاً
              </Badge>
            )}
            <div className="space-y-2">
              <h3 className="font-display text-xl font-bold text-foreground">{plan.name}</h3>
              <p className="text-sm text-muted-foreground">{plan.desc}</p>
            </div>
            <div className="flex items-end gap-1.5">
              <span className="font-display text-4xl font-black text-foreground">
                {plan.price === 0 ? 'مجاني' : plan.price}
              </span>
              {plan.price > 0 && (
                <span className="mb-1 text-sm text-muted-foreground">ر.س / {plan.period}</span>
              )}
            </div>
            <CtaButton
              href="/creator"
              variant={plan.highlighted ? 'primary' : 'glass'}
              size="md"
              className="w-full"
            >
              {plan.cta}
            </CtaButton>
            <ul className="flex flex-col gap-3 pt-2">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-foreground">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="size-3" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>

      {/* Mini FAQ */}
      <div className="mx-auto mt-24 max-w-3xl">
        <SectionHeading title="أسئلة حول الأسعار" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {faqs.slice(0, 4).map((f) => (
            <GlassCard key={f.q} className="space-y-2 p-6">
              <h3 className="font-display font-bold text-foreground">{f.q}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  )
}
