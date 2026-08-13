import { SiteHeader } from '@/components/marketing/site-header'
import { SiteFooter } from '@/components/marketing/site-footer'

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div className="pointer-events-none fixed inset-0 -z-10 aurora" aria-hidden="true" />
      <div className="pointer-events-none fixed inset-0 -z-10 grid-bg opacity-40" aria-hidden="true" />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  )
}
