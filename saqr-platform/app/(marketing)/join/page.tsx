'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { DoorOpen, Gamepad2, Trophy, Users, ArrowLeft } from 'lucide-react'
import { GlassCard } from '@/components/ui/glass-card'
import { Badge } from '@/components/ui/badge'
import { Label, Input } from '@/components/ui/field'
import { CtaButton } from '@/components/ui/cta-button'
import { cn } from '@/lib/utils'

const LEN = 5

export default function JoinRoomPage() {
  const [digits, setDigits] = useState<string[]>(Array(LEN).fill(''))
  const [nickname, setNickname] = useState('')
  const inputs = useRef<(HTMLInputElement | null)[]>([])

  const code = digits.join('')
  const ready = code.length === LEN && nickname.trim().length > 1

  function setDigit(i: number, val: string) {
    const clean = val.replace(/[^A-Za-z0-9]/g, '').toUpperCase().slice(-1)
    setDigits((prev) => {
      const next = [...prev]
      next[i] = clean
      return next
    })
    if (clean && i < LEN - 1) inputs.current[i + 1]?.focus()
  }

  function onKeyDown(i: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Backspace' && !digits[i] && i > 0) inputs.current[i - 1]?.focus()
  }

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-4 pt-20 pb-8 lg:pt-28">
      <Badge variant="accent" className="gap-1.5 px-3 py-1.5">
        <DoorOpen className="size-3.5" />
        دخول كضيف
      </Badge>
      <h1 className="mt-5 text-balance text-center font-display text-3xl font-black text-foreground sm:text-4xl">
        انضم إلى غرفة اللعب
      </h1>
      <p className="mt-3 max-w-md text-center text-muted-foreground">
        أدخل رمز الغرفة الذي يشاركه المبدع أثناء البث، واختر اسماً لتبدأ اللعب فوراً.
      </p>

      <GlassCard strong className="mt-10 w-full space-y-6 p-6 sm:p-8">
        <div className="flex flex-col gap-3">
          <Label>رمز الغرفة</Label>
          <div className="flex justify-center gap-2.5" dir="ltr">
            {digits.map((d, i) => (
              <input
                key={i}
                ref={(el) => {
                  inputs.current[i] = el
                }}
                value={d}
                onChange={(e) => setDigit(i, e.target.value)}
                onKeyDown={(e) => onKeyDown(i, e)}
                inputMode="text"
                aria-label={`الرمز ${i + 1}`}
                className={cn(
                  'size-13 rounded-xl border bg-muted/30 text-center font-mono text-xl font-bold text-foreground outline-none transition-all focus:border-primary/60 focus:ring-3 focus:ring-primary/20',
                  d ? 'border-primary/50' : 'border-border',
                )}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="nick">اسمك في اللعبة</Label>
          <Input
            id="nick"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="مثال: أبو صقر"
            maxLength={20}
          />
        </div>

        <CtaButton
          href={ready ? '/viewer' : undefined}
          size="lg"
          className={cn('w-full', !ready && 'pointer-events-none opacity-50')}
        >
          دخول الغرفة
          <ArrowLeft />
        </CtaButton>

        <p className="text-center text-xs text-muted-foreground">
          بالدخول أنت توافق على{' '}
          <Link href="/faq" className="text-primary hover:underline">
            شروط الاستخدام
          </Link>
        </p>
      </GlassCard>

      <div className="mt-8 grid w-full grid-cols-3 gap-3">
        {[
          { icon: Gamepad2, label: 'ألعاب حيّة' },
          { icon: Trophy, label: 'نقاط ومكافآت' },
          { icon: Users, label: 'بدون تسجيل' },
        ].map((f) => (
          <GlassCard key={f.label} className="flex flex-col items-center gap-2 p-4 text-center">
            <f.icon className="size-5 text-primary" />
            <span className="text-xs text-muted-foreground">{f.label}</span>
          </GlassCard>
        ))}
      </div>
    </div>
  )
}
