import { Users, Gamepad2 } from 'lucide-react'
import { GlassCard } from '@/components/ui/glass-card'
import { Badge } from '@/components/ui/badge'
import type { Game } from '@/lib/data'
import { cn } from '@/lib/utils'

const accentMap: Record<Game['accent'], string> = {
  primary: 'from-primary/25 text-primary',
  accent: 'from-accent/25 text-accent',
  success: 'from-success/25 text-success',
  chart5: 'from-chart-5/25 text-chart-5',
}

export function GameCard({ game }: { game: Game }) {
  return (
    <GlassCard hover className="group flex flex-col gap-4 p-6">
      <div className="flex items-start justify-between">
        <div
          className={cn(
            'flex size-12 items-center justify-center rounded-xl bg-gradient-to-br to-transparent',
            accentMap[game.accent],
          )}
        >
          <Gamepad2 className="size-6" />
        </div>
        <Badge variant={game.status === 'نشط' ? 'success' : 'muted'}>{game.status}</Badge>
      </div>

      <div className="space-y-1.5">
        <h3 className="font-display text-lg font-bold text-foreground">{game.name}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{game.desc}</p>
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-2 pt-2 text-xs">
        <Badge variant="outline">{game.category}</Badge>
        <Badge variant="outline">{game.difficulty}</Badge>
        <span className="ms-auto inline-flex items-center gap-1 text-muted-foreground">
          <Users className="size-3.5" />
          {game.players}
        </span>
      </div>
    </GlassCard>
  )
}
