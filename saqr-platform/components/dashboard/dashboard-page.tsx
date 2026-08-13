type DashboardPageProps = {
  title: string
  description: string
}

export function DashboardPage({
  title,
  description,
}: DashboardPageProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-2 text-muted-foreground">
          {description}
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-8">
        <p className="text-muted-foreground">
          سيتم تطوير هذه الصفحة قريبًا.
        </p>
      </div>
    </div>
  )
}
