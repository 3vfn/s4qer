import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import { SectionHeading } from '@/components/marketing/section-heading'
import { FaqAccordion } from '@/components/marketing/faq-accordion'
import { CtaButton } from '@/components/ui/cta-button'
import { faqs } from '@/lib/data'

export const metadata: Metadata = {
  title: 'الأسئلة الشائعة | منصة صقر',
  description: 'إجابات على أكثر الأسئلة شيوعاً حول منصة صقر.',
}

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-16 pb-8 lg:pt-24">
      <SectionHeading
        eyebrow="مركز المساعدة"
        title="الأسئلة الشائعة"
        desc="كل ما تريد معرفته عن منصة صقر في مكان واحد."
      />
      <div className="mt-14">
        <FaqAccordion items={faqs} />
      </div>
      <div className="mt-14 flex flex-col items-center gap-4 text-center">
        <p className="text-muted-foreground">لم تجد إجابتك؟ فريقنا جاهز لمساعدتك.</p>
        <CtaButton href="/contact" variant="primary" size="md">
          تواصل معنا
          <ArrowLeft />
        </CtaButton>
      </div>
    </div>
  )
}
