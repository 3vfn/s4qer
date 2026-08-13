import type { Metadata } from 'next'
import { Mail, MessageSquare, Clock, MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/marketing/section-heading'
import { ContactForm } from '@/components/marketing/contact-form'
import { GlassCard } from '@/components/ui/glass-card'

export const metadata: Metadata = {
  title: 'تواصل معنا | منصة صقر',
  description: 'تواصل مع فريق منصة صقر لأي استفسار أو دعم.',
}

const infos = [
  { icon: Mail, label: 'البريد الإلكتروني', value: 'support@saqr.gg' },
  { icon: MessageSquare, label: 'الدردشة المباشرة', value: 'متاحة من ٩ص إلى ١٢م' },
  { icon: Clock, label: 'وقت الاستجابة', value: 'خلال ٢٤ ساعة عمل' },
  { icon: MapPin, label: 'المقر', value: 'الرياض، المملكة العربية السعودية' },
]

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-16 pb-8 lg:pt-24">
      <SectionHeading
        eyebrow="تواصل معنا"
        title="نحن هنا لمساعدتك"
        desc="لديك سؤال أو اقتراح؟ فريق صقر جاهز للرد عليك في أسرع وقت."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <div className="flex flex-col gap-4">
          {infos.map((info) => (
            <GlassCard key={info.label} className="flex items-center gap-4 p-5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <info.icon className="size-5" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">{info.label}</p>
                <p className="font-medium text-foreground">{info.value}</p>
              </div>
            </GlassCard>
          ))}
        </div>

        <GlassCard strong className="p-6 sm:p-8">
          <ContactForm />
        </GlassCard>
      </div>
    </div>
  )
}
