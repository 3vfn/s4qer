'use client'

import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardPage } from "@/components/dashboard/dashboard-page"
import { viewerConfig } from "@/components/dashboard/dashboard-config"

export default function ViewerPage() {
  return (
    <DashboardShell
      nav={viewerConfig.nav}
      role={viewerConfig.role}
      user={{
        name: "عبدالعزيز",
        handle: "@3vfn",
        initials: "AA",
      }}
    >
      <DashboardPage
        title="لوحة المشاهد"
        description="إدارة حساب المشاهد."
      />
    </DashboardShell>
  )
}
