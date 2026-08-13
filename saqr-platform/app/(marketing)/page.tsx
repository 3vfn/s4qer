import Link from 'next/link'
import {
  Sparkles,
  ArrowLeft,
  Radio,
  Trophy,
  BarChart3,
  Link2,
  Zap,
  Shield,
  Layers,
  Gift,
  MessageSquare,
  Play,
  Eye,
  Video,
  ShieldCheck,
} from 'lucide-react'
import { CtaButton } from '@/components/ui/cta-button'
import { GlassCard } from '@/components/ui/glass-card'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from '@/components/marketing/section-heading'
import { GameCard } from '@/components/marketing/game-card'
import { games, liveChat } from '@/lib/data'

const stats = [
  { value: '٣٤,٨٠٠+', label: 'غرفة تم إنشاؤها' },
  { value: '١١,٢٠٠+', label: 'لاعب نشط يومياً' },
  { value: '٤٨+', label: 'لعبة تفاعلية' },
  { value: '٥,٦٠٠+', label: 'مباراة يومية' },
]

const features = [
  {
    icon: Radio,
    title: 'استوديو بث مباشر',
    desc: 'تحكّم كامل بالألعاب والجولات والنتائج من لوحة واحدة أثناء بثك المباشر.',
  },
  {
    icon: Link2,
    title: 'ربط تيك توك',
    desc: 'اربط حسابك بضغطة واحدة والتقط التعليقات والهدايا لحظياً داخل اللعبة.',
  },
  {
    icon: BarChart3,
    title: 'تحليلات احترافية',
    desc: 'قِس التفاعل والنمو والإيرادات برسوم بيانية لحظية وتقارير قابلة للتصدير.',
  },
  {
    icon: Layers,
    title: 'أوفرلاي لـ OBS',
    desc: 'أضف رابط الأوفرلاي إلى OBS واعرض الألعاب فوق بثك بجودة عالية.',
  },
  {
    icon: Trophy,
    title: 'لوحة متصدرين',
    desc: 'حفّز جمهورك بترتيب لحظي ونقاط ومكافآت تُبقيهم متفاعلين حتى النهاية.',
  },
  {
    icon: Shield,
    title: 'إدارة وأمان',
    desc: 'أدوات إشراف وحماية من الغش والإساءة لتجربة نظيفة وآمنة للجميع.',
  },
]

const steps = [
  { n: '٠١', title: 'أنشئ حسابك', desc: 'سجّل كمبدع خلال ثوانٍ واربط حساب تيك توك الخاص بك.' },
  { n: '٠٢', title: 'اختر لعبتك', desc: 'اختر من مكتبة الألعاب التفاعلية وخصّصها كما تريد.' },
  { n: '٠٣', title: 'ابدأ البث', desc: 'أضف الأوفرلاي إلى OBS وأطلق أول جولة أمام جمهورك.' },
  { n: '٠٤', title: 'حلّل ونمِّ', desc: 'راقب أداءك عبر التحليلات وطوّر تفاعلك باستمرار.' },
]

const roles = [
  {
    icon: Eye,
    title: 'للمشاهدين',
    desc: 'العب، اجمع النقاط، وتصدّر لوحة المتصدرين من أي جهاز.',
    href: '/viewer',
    variant: 'accent' as const,
  },
  {
    icon: Video,
    title: 'للمبدعين',
    desc: 'أدر بثك التفاعلي، اربط تيك توك، وحلّل نموّك باحترافية.',
    href: '/creator',
    variant: 'primary' as const,
  },
  {
    icon: ShieldCheck,
    title: 'للإدارة',
    desc: 'تحكّم بالمستخدمين والألعاب والبلاغات من لوحة قوية.',
    href: '/admin',
    variant: 'glass' as const,
  },
  {
    icon: Users,
    title: 'غرف متعددة اللاعبين',
    desc: 'أنشئ غرفاً عامة أو خاصة وشارك رمز الانضمام مع مجتمعك.'
},
{
    icon: Brain,
    title: 'مولد أسئلة بالذكاء الاصطناعي',
    desc: 'أنشئ جولات وأسئلة جديدة خلال ثوانٍ باستخدام الذكاء الاصطناعي.'
}
]

export default function LandingPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 pt-16 pb-10 lg:grid-cols-[1.05fr_0.95fr] lg:pt-24">
        <div className="flex flex-col items-start gap-6 animate-rise">
          <Badge variant="default" className="gap-1.5 px-3 py-1.5">
            <Sparkles className="size-3.5" />
            منصة الجيل الجديد للبث التفاعلي · ٢٠٢٦
          </Badge>
          <h1 className="text-balance font-display text-4xl font-black leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            حوّل بثك على تيك توك إلى{' '}
            <span className="text-gradient">تجربة ألعاب</span> لا تُنسى
          </h1>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            صقر هي منصة الألعاب التفاعلية المباشرة لصنّاع محتوى تيك توك. اربط جمهورك،
            أطلق ألعاباً حيّة، وحلّل أداءك — كل ذلك من مكان واحد.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CtaButton href="/creator" variant="primary" size="lg">
              ابدأ كمبدع
              <ArrowLeft />
            </CtaButton>
            <CtaButton href="/games" variant="glass" size="lg">
              <Play />
              استكشف الألعاب
            </CtaButton>
          </div>
          <div className="flex items-center gap-6 pt-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Zap className="size-4 text-accent" />
              بدون بطاقة ائتمان
            </span>
            <span className="inline-flex items-center gap-2">
              <Shield className="size-4 text-success" />
              إعداد خلال دقائق
            </span>
          </div>
        </div>

        {/* Live studio preview mock */}
        <div className="relative animate-rise">
          <div className="animate-float-slow">
            <GlassCard strong className="overflow-hidden p-0">
              <div className="flex items-center justify-between border-b border-border/60 px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-destructive/20 px-2.5 py-1 text-xs font-semibold text-destructive">
                    <span className="size-1.5 animate-pulse-ring rounded-full bg-destructive" />
                    بث مباشر
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Eye className="size-3.5" />
                    ١٢,٤٨٠ مشاهد
                  </span>
                </div>
                <span className="font-mono text-xs text-muted-foreground">SAQR · Studio</span>
              </div>

              <div className="grid gap-4 p-5 sm:grid-cols-[1.4fr_1fr]">
                <div className="space-y-4">
                  <div className="rounded-xl border border-border/60 bg-gradient-to-br from-primary/15 to-accent/10 p-5">
                    <p className="text-xs font-medium text-muted-foreground">السؤال الحالي · جولة ٣</p>
                    <p className="mt-2 font-display text-lg font-bold text-foreground">
                      ما هي عاصمة اليابان؟
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                      {['طوكيو', 'أوساكا', 'كيوتو', 'ناغويا'].map((o, i) => (
                        <div
                          key={o}
                          className={
                            'rounded-lg border px-3 py-2 ' +
                            (i === 0
                              ? 'border-success/50 bg-success/15 text-success'
                              : 'border-border/60 bg-muted/40 text-muted-foreground')
                          }
                        >
                          {o}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-border/60 bg-muted/30 px-4 py-3">
                    <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                      <Gift className="size-4 text-accent" />
                      الهدايا هذه الجولة
                    </span>
                    <span className="font-mono font-semibold text-foreground">١,٢٤٠</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 rounded-xl border border-border/60 bg-muted/20 p-3">
                  <span className="inline-flex items-center gap-1.5 px-1 text-xs font-medium text-muted-foreground">
                    <MessageSquare className="size-3.5" />
                    الدردشة المباشرة
                  </span>
                  <div className="flex flex-col gap-2 overflow-hidden">
                    {liveChat.slice(0, 5).map((c, i) => (
                      <div key={i} className="text-xs leading-relaxed">
                        <span className="font-semibold text-primary">{c.user}: </span>
                        <span className={c.gift ? 'text-accent' : 'text-muted-foreground'}>
                          {c.msg}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <GlassCard className="grid grid-cols-2 gap-6 p-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </GlassCard>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeading
          eyebrow="لماذا صقر"
          title="كل ما تحتاجه لبث تفاعلي احترافي"
          desc="أدوات متكاملة صُمّمت خصيصاً لصنّاع محتوى تيك توك لرفع التفاعل وتنمية الجمهور."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <GlassCard key={f.title} hover className="flex flex-col gap-4 p-6">
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <f.icon className="size-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Games preview */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="start"
            eyebrow="مكتبة الألعاب"
            title="ألعاب تُشعل التفاعل"
            desc="مجموعة متنوعة من الألعاب الجاهزة للبث المباشر."
          />
          <CtaButton href="/games" variant="outline" size="sm">
            كل الألعاب
            <ArrowLeft />
          </CtaButton>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {games.slice(0, 3).map((g) => (
            <GameCard key={g.id} game={g} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeading
          eyebrow="كيف تعمل"
          title="من الفكرة إلى البث في أربع خطوات"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <GlassCard key={s.n} className="flex flex-col gap-3 p-6">
              <span className="font-display text-3xl font-black text-primary/40">{s.n}</span>
              <h3 className="font-display text-lg font-bold text-foreground">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Roles */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeading eyebrow="لكل دور تجربته" title="مصمّمة لكل مستخدم" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {roles.map((r) => (
            <GlassCard key={r.title} hover className="flex flex-col gap-4 p-7">
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <r.icon className="size-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">{r.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
              <CtaButton href={r.href} variant={r.variant} size="sm" className="mt-2 w-fit">
                الدخول
                <ArrowLeft />
              </CtaButton>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <GlassCard strong className="relative overflow-hidden p-10 text-center md:p-16">
          <div className="pointer-events-none absolute inset-0 aurora opacity-70" aria-hidden="true" />
          <div className="relative flex flex-col items-center gap-6">
            <h2 className="max-w-2xl text-balance font-display text-3xl font-extrabold text-foreground sm:text-4xl md:text-5xl">
              جاهز لتحويل بثك إلى تجربة لا تُنسى؟
            </h2>
            <p className="max-w-xl text-pretty text-muted-foreground">
              انضم لآلاف المبدعين الذين يستخدمون صقر لبناء مجتمعات أكثر تفاعلاً.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CtaButton href="/creator" variant="primary" size="lg">
                ابدأ مجاناً الآن
                <ArrowLeft />
              </CtaButton>
              <CtaButton href="/pricing" variant="glass" size="lg">
                عرض الأسعار
              </CtaButton>
            </div>
          </div>
        </GlassCard>
      </section>
    </>
  )
}
