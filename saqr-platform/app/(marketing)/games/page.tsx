import type { Metadata } from 'next'
import { SectionHeading } from '@/components/marketing/section-heading'
import { GameCard } from '@/components/marketing/game-card'
import { CtaButton } from '@/components/ui/cta-button'
import { games } from '@/lib/data'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'الألعاب | منصة صقر',
  description: 'استكشف مكتبة الألعاب التفاعلية المباشرة في منصة صقر.',
}

export default function GamesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 lg:pt-24">
      <SectionHeading
        eyebrow="مكتبة الألعاب"
        title="ألعاب تفاعلية لكل بث"
        desc="اختر من مجموعة متنامية من الألعاب المصمّمة لإشعال تفاعل جمهورك على تيك توك مباشرة."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center gap-4 text-center">
        <p className="text-muted-foreground">هل لديك فكرة لعبة؟ نحن نضيف ألعاباً جديدة كل شهر.</p>
        <CtaButton href="/contact" variant="glass" size="md">
          اقترح لعبة
          <ArrowLeft />
        </CtaButton>
      </div>
    </div>
  )
}
