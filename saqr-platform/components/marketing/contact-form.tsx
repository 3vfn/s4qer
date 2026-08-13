'use client'

import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { Label, Input, Textarea, Select } from '@/components/ui/field'
import { CtaButton } from '@/components/ui/cta-button'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-success/15 text-success">
          <CheckCircle2 className="size-8" />
        </span>
        <h3 className="font-display text-xl font-bold text-foreground">تم إرسال رسالتك</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          شكراً لتواصلك مع فريق صقر. سنعود إليك خلال ٢٤ ساعة عمل.
        </p>
        <CtaButton variant="glass" size="sm" onClick={() => setSent(false)}>
          إرسال رسالة أخرى
        </CtaButton>
      </div>
    )
  }

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">الاسم</Label>
          <Input id="name" required placeholder="اسمك الكامل" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">البريد الإلكتروني</Label>
          <Input id="email" type="email" required placeholder="you@example.com" dir="ltr" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="topic">الموضوع</Label>
        <Select id="topic" defaultValue="">
          <option value="" disabled>
            اختر موضوعاً
          </option>
          <option>استفسار عام</option>
          <option>الدعم الفني</option>
          <option>المبيعات والباقات</option>
          <option>اقتراح لعبة</option>
          <option>شراكة</option>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="message">الرسالة</Label>
        <Textarea id="message" required rows={5} placeholder="كيف يمكننا مساعدتك؟" />
      </div>
      <CtaButton size="md" className="w-full sm:w-fit">
        إرسال الرسالة
        <Send />
      </CtaButton>
    </form>
  )
}
