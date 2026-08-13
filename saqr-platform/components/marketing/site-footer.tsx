import Link from 'next/link'
import { Logo } from '@/components/brand/logo'
import { brand } from '@/lib/data'

const columns = [
  {
    title: 'المنتج',
    links: [
      { title: 'الألعاب', href: '/games' },
      { title: 'الأسعار', href: '/pricing' },
      { title: 'استوديو البث', href: '/creator/studio' },
      { title: 'دخول غرفة', href: '/join' },
    ],
  },
  {
    title: 'الحساب',
    links: [
      { title: 'لوحة المشاهد', href: '/viewer' },
      { title: 'لوحة المبدع', href: '/creator' },
      { title: 'لوحة الإدارة', href: '/admin' },
      { title: 'الاشتراك', href: '/creator/subscription' },
    ],
  },
  {
    title: 'الدعم',
    links: [
      { title: 'الأسئلة الشائعة', href: '/faq' },
      { title: 'تواصل معنا', href: '/contact' },
      { title: 'سياسة الخصوصية', href: '/faq' },
      { title: 'شروط الاستخدام', href: '/faq' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            {brand.name} — {brand.tagline}. حوّل بثك المباشر إلى تجربة ألعاب تفاعلية لا تُنسى.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title} className="space-y-3">
            <h3 className="font-display text-sm font-bold text-foreground">{col.title}</h3>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-muted-foreground sm:flex-row">
          <p>© 2026 {brand.name} — جميع الحقوق محفوظة.</p>
          <p className="font-mono text-xs tracking-wide">SAQR Platform · v1.0</p>
        </div>
      </div>
    </footer>
  )
}
