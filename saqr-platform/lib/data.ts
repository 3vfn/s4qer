import type { LucideIcon } from 'lucide-react'
import {
  LayoutDashboard,
  Radio,
  BarChart3,
  Link2,
  Trophy,
  User,
  Settings,
  CreditCard,
  Users,
  Gamepad2,
  Flag,
  ListChecks,
  Home,
  Puzzle,
  Tag,
  HelpCircle,
  Mail,
  DoorOpen,
} from 'lucide-react'

/* ---------------------------------------------------------------------------
 * SAQR Platform — central placeholder data & navigation config.
 * Structured for future integration with Supabase / Cloudflare / GitHub.
 * All data here is mock/placeholder only (no backend).
 * ------------------------------------------------------------------------- */

export type NavItem = {
  title: string
  href: string
  icon: LucideIcon
  badge?: string
}

export const brand = {
  name: 'صقر',
  nameEn: 'SAQR',
  tagline: 'منصة الألعاب التفاعلية المباشرة',
}

export const publicNav: { title: string; href: string }[] = [
  { title: 'الرئيسية', href: '/' },
  { title: 'الألعاب', href: '/games' },
  { title: 'الأسعار', href: '/pricing' },
  { title: 'الأسئلة', href: '/faq' },
  { title: 'تواصل معنا', href: '/contact' },
]

export const publicNavIcons: NavItem[] = [
  { title: 'الرئيسية', href: '/', icon: Home },
  { title: 'الألعاب', href: '/games', icon: Puzzle },
  { title: 'الأسعار', href: '/pricing', icon: Tag },
  { title: 'الأسئلة', href: '/faq', icon: HelpCircle },
  { title: 'تواصل معنا', href: '/contact', icon: Mail },
  { title: 'دخول غرفة', href: '/join', icon: DoorOpen },
]

export const viewerNav: NavItem[] = [
  { title: 'لوحة المشاهد', href: '/viewer', icon: LayoutDashboard },
  { title: 'المتصدرون', href: '/viewer/leaderboard', icon: Trophy },
  { title: 'الملف الشخصي', href: '/viewer/profile', icon: User },
  { title: 'الاشتراك', href: '/viewer/subscription', icon: CreditCard },
  { title: 'الإعدادات', href: '/viewer/settings', icon: Settings },
]

export const creatorNav: NavItem[] = [
  { title: 'لوحة المبدع', href: '/creator', icon: LayoutDashboard },
  { title: 'استوديو البث', href: '/creator/studio', icon: Radio, badge: 'مباشر' },
  { title: 'التحليلات', href: '/creator/analytics', icon: BarChart3 },
  { title: 'ربط تيك توك', href: '/creator/tiktok', icon: Link2 },
  { title: 'الاشتراك', href: '/creator/subscription', icon: CreditCard },
  { title: 'الإعدادات', href: '/creator/settings', icon: Settings },
]

export const adminNav: NavItem[] = [
  { title: 'لوحة التحكم', href: '/admin', icon: LayoutDashboard },
  { title: 'المستخدمون', href: '/admin/users', icon: Users },
  { title: 'الألعاب', href: '/admin/games', icon: Gamepad2 },
  { title: 'البلاغات', href: '/admin/reports', icon: Flag, badge: '4' },
  { title: 'بنك الأسئلة', href: '/admin/questions', icon: ListChecks },
]

/* ------------------------------- Games ---------------------------------- */

export type Game = {
  id: string
  name: string
  desc: string
  players: string
  category: string
  difficulty: 'سهل' | 'متوسط' | 'صعب'
  accent: 'primary' | 'accent' | 'success' | 'chart5'
  status: 'نشط' | 'قريباً'
}

export const games: Game[] = [
  {
    id: 'trivia-storm',
    name: 'عاصفة المعرفة',
    desc: 'أسئلة سريعة متتالية، من يجيب أولاً يتصدّر. مثالية لإشعال التفاعل في أول دقائق البث.',
    players: '2 - 5000',
    category: 'ثقافة عامة',
    difficulty: 'متوسط',
    accent: 'primary',
    status: 'نشط',
  },
  {
    id: 'guess-word',
    name: 'خمّن الكلمة',
    desc: 'كلمة مخفية تُكشف حرفاً حرفاً، والجمهور يتسابق على التخمين عبر التعليقات.',
    players: '2 - 3000',
    category: 'ألغاز',
    difficulty: 'سهل',
    accent: 'accent',
    status: 'نشط',
  },
  {
    id: 'gift-race',
    name: 'سباق الهدايا',
    desc: 'يتنافس المشاهدون عبر الهدايا لدعم فريقهم والوصول بالمؤشر إلى القمة.',
    players: 'غير محدود',
    category: 'تفاعلي',
    difficulty: 'سهل',
    accent: 'success',
    status: 'نشط',
  },
  {
    id: 'bingo-live',
    name: 'بينغو لايف',
    desc: 'بطاقات بينغو لكل مشاهد وأرقام تُسحب مباشرة على الشاشة أثناء البث.',
    players: '2 - 1000',
    category: 'حظ',
    difficulty: 'سهل',
    accent: 'chart5',
    status: 'نشط',
  },
  {
    id: 'quick-math',
    name: 'الحاسبة السريعة',
    desc: 'معادلات تظهر لثوانٍ، وأسرع إجابة صحيحة تكسب النقاط المضاعفة.',
    players: '2 - 2000',
    category: 'رياضيات',
    difficulty: 'صعب',
    accent: 'primary',
    status: 'نشط',
  },
  {
    id: 'this-or-that',
    name: 'هذا أم ذاك',
    desc: 'تصويت لحظي بين خيارين لقياس رأي الجمهور وإشعال النقاش المباشر.',
    players: 'غير محدود',
    category: 'تصويت',
    difficulty: 'سهل',
    accent: 'accent',
    status: 'قريباً',
  },
]

/* ------------------------------ Pricing --------------------------------- */

export type Plan = {
  id: string
  name: string
  price: number
  period: string
  desc: string
  highlighted?: boolean
  features: string[]
  cta: string
}

export const plans: Plan[] = [
  {
    id: 'free',
    name: 'المجاني',
    price: 0,
    period: 'شهرياً',
    desc: 'ابدأ رحلتك في البث التفاعلي بدون أي تكلفة.',
    features: [
      'حتى 200 مشاهد متزامن',
      '3 ألعاب أساسية',
      'أوفرلاي واحد لـ OBS',
      'تحليلات أساسية',
      'دعم عبر المجتمع',
    ],
    cta: 'ابدأ مجاناً',
  },
  {
    id: 'pro',
    name: 'الاحترافي',
    price: 99,
    period: 'شهرياً',
    desc: 'لصنّاع المحتوى الجادّين الذين يريدون تفاعلاً بلا حدود.',
    highlighted: true,
    features: [
      'مشاهدون غير محدودين',
      'جميع الألعاب (+12 لعبة)',
      'أوفرلايات مخصّصة بالكامل',
      'تحليلات متقدمة ولحظية',
      'بنك أسئلة خاص بك',
      'دعم أولوية 24/7',
    ],
    cta: 'اشترك الآن',
  },
  {
    id: 'studio',
    name: 'الاستوديو',
    price: 249,
    period: 'شهرياً',
    desc: 'للفرق والوكالات التي تدير عدة حسابات وصنّاع.',
    features: [
      'كل مزايا الاحترافي',
      'حتى 10 حسابات مبدعين',
      'علامة تجارية بيضاء',
      'واجهة API للمطورين',
      'مدير حساب مخصّص',
      'تدريب وإعداد كامل',
    ],
    cta: 'تواصل مع المبيعات',
  },
]

/* -------------------------------- FAQ ----------------------------------- */

export const faqs: { q: string; a: string }[] = [
  {
    q: 'ما هي منصة صقر؟',
    a: 'صقر منصة SaaS متكاملة تتيح لصنّاع محتوى تيك توك تشغيل ألعاب تفاعلية مباشرة أثناء البث، مع لوحات تحكم للمشاهدين والمبدعين وأدوات تحليل احترافية.',
  },
  {
    q: 'هل أحتاج إلى برامج إضافية؟',
    a: 'تحتاج فقط إلى برنامج بث مثل OBS لإضافة رابط الأوفرلاي الخاص بك. كل شيء آخر يعمل مباشرة من متصفحك.',
  },
  {
    q: 'كيف يتفاعل المشاهدون مع الألعاب؟',
    a: 'يمكن للمشاهدين التفاعل عبر التعليقات والهدايا على تيك توك، أو الدخول إلى غرفة اللعبة مباشرة عبر رمز الغرفة من أي جهاز.',
  },
  {
    q: 'هل يمكنني تجربة المنصة مجاناً؟',
    a: 'نعم، الباقة المجانية تمنحك كل ما تحتاجه للبدء، ويمكنك الترقية في أي وقت دون التزام.',
  },
  {
    q: 'كيف يتم احتساب المتصدرين؟',
    a: 'تُحتسب النقاط بناءً على سرعة الإجابات الصحيحة، والتفاعل، والهدايا المقدّمة خلال البث، وتظهر النتائج فوراً على لوحة المتصدرين.',
  },
  {
    q: 'هل بياناتي آمنة؟',
    a: 'نعم، صُمّمت المنصة مع أفضل ممارسات الأمان والخصوصية، وجاهزة للتكامل مع بنية تحتية موثوقة عند الإطلاق.',
  },
]

/* ---------------------------- Leaderboard ------------------------------- */

export type LeaderRow = {
  rank: number
  name: string
  handle: string
  points: number
  wins: number
  trend: 'up' | 'down' | 'same'
}

export const leaderboard: LeaderRow[] = [
  { rank: 1, name: 'ريان الحربي', handle: '@rayan_gz', points: 48920, wins: 214, trend: 'up' },
  { rank: 2, name: 'ليان', handle: '@layan.play', points: 46110, wins: 198, trend: 'up' },
  { rank: 3, name: 'عبدالله ناصر', handle: '@abdullah_n', points: 44780, wins: 190, trend: 'down' },
  { rank: 4, name: 'سارة', handle: '@sara_live', points: 41230, wins: 176, trend: 'same' },
  { rank: 5, name: 'خالد', handle: '@khaled_9', points: 39980, wins: 168, trend: 'up' },
  { rank: 6, name: 'نورة العتيبي', handle: '@noura_ot', points: 37640, wins: 159, trend: 'down' },
  { rank: 7, name: 'محمد', handle: '@moe_gaming', points: 35200, wins: 150, trend: 'same' },
  { rank: 8, name: 'دانة', handle: '@dana.x', points: 33110, wins: 142, trend: 'up' },
  { rank: 9, name: 'فيصل', handle: '@faisal_7', points: 31450, wins: 133, trend: 'down' },
  { rank: 10, name: 'جود', handle: '@jood_star', points: 29870, wins: 128, trend: 'up' },
]

/* ------------------------------- Admin ---------------------------------- */

export type AdminUser = {
  id: string
  name: string
  handle: string
  role: 'مشاهد' | 'مبدع' | 'مشرف'
  plan: 'مجاني' | 'احترافي' | 'استوديو'
  status: 'نشط' | 'موقوف' | 'قيد المراجعة'
  joined: string
}

export const adminUsers: AdminUser[] = [
  { id: 'u_1042', name: 'ريان الحربي', handle: '@rayan_gz', role: 'مبدع', plan: 'احترافي', status: 'نشط', joined: '2026-01-14' },
  { id: 'u_1043', name: 'ليان', handle: '@layan.play', role: 'مبدع', plan: 'استوديو', status: 'نشط', joined: '2026-02-02' },
  { id: 'u_1044', name: 'سارة', handle: '@sara_live', role: 'مشاهد', plan: 'مجاني', status: 'نشط', joined: '2026-02-10' },
  { id: 'u_1045', name: 'عبدالله ناصر', handle: '@abdullah_n', role: 'مبدع', plan: 'احترافي', status: 'قيد المراجعة', joined: '2026-03-01' },
  { id: 'u_1046', name: 'خالد', handle: '@khaled_9', role: 'مشاهد', plan: 'مجاني', status: 'موقوف', joined: '2026-03-05' },
  { id: 'u_1047', name: 'نورة العتيبي', handle: '@noura_ot', role: 'مشرف', plan: 'استوديو', status: 'نشط', joined: '2025-12-20' },
  { id: 'u_1048', name: 'محمد', handle: '@moe_gaming', role: 'مبدع', plan: 'مجاني', status: 'نشط', joined: '2026-03-11' },
  { id: 'u_1049', name: 'دانة', handle: '@dana.x', role: 'مشاهد', plan: 'احترافي', status: 'نشط', joined: '2026-03-18' },
]

export type Report = {
  id: string
  subject: string
  reporter: string
  type: 'إساءة' | 'غش' | 'محتوى غير لائق' | 'أخرى'
  severity: 'مرتفعة' | 'متوسطة' | 'منخفضة'
  status: 'جديد' | 'قيد المعالجة' | 'مغلق'
  date: string
}

export const reports: Report[] = [
  { id: 'r_501', subject: 'سلوك مسيء في غرفة #A12', reporter: '@sara_live', type: 'إساءة', severity: 'مرتفعة', status: 'جديد', date: '2026-08-12' },
  { id: 'r_502', subject: 'اشتباه باستخدام بوتات', reporter: '@moe_gaming', type: 'غش', severity: 'متوسطة', status: 'قيد المعالجة', date: '2026-08-11' },
  { id: 'r_503', subject: 'صورة ملف غير لائقة', reporter: '@dana.x', type: 'محتوى غير لائق', severity: 'منخفضة', status: 'جديد', date: '2026-08-11' },
  { id: 'r_504', subject: 'خلل في احتساب النقاط', reporter: '@khaled_9', type: 'أخرى', severity: 'متوسطة', status: 'جديد', date: '2026-08-10' },
  { id: 'r_505', subject: 'تكرار رسائل مزعجة', reporter: '@jood_star', type: 'إساءة', severity: 'منخفضة', status: 'مغلق', date: '2026-08-08' },
]

export type Question = {
  id: string
  text: string
  category: string
  difficulty: 'سهل' | 'متوسط' | 'صعب'
  answer: string
}

export const questions: Question[] = [
  { id: 'q_01', text: 'ما هي عاصمة اليابان؟', category: 'جغرافيا', difficulty: 'سهل', answer: 'طوكيو' },
  { id: 'q_02', text: 'كم عدد كواكب المجموعة الشمسية؟', category: 'علوم', difficulty: 'سهل', answer: '8' },
  { id: 'q_03', text: 'من كتب رواية "مئة عام من العزلة"؟', category: 'أدب', difficulty: 'صعب', answer: 'غابرييل غارسيا ماركيز' },
  { id: 'q_04', text: 'ما أطول نهر في العالم؟', category: 'جغرافيا', difficulty: 'متوسط', answer: 'نهر النيل' },
  { id: 'q_05', text: 'في أي عام أقيمت أول بطولة كأس عالم لكرة القدم؟', category: 'رياضة', difficulty: 'متوسط', answer: '1930' },
  { id: 'q_06', text: 'ما العنصر الكيميائي الذي رمزه Au؟', category: 'علوم', difficulty: 'متوسط', answer: 'الذهب' },
]

/* --------------------------- Live chat feed ----------------------------- */

export const liveChat: { user: string; msg: string; gift?: boolean }[] = [
  { user: 'ليان', msg: 'الإجابة طوكيو! 🔥' },
  { user: 'خالد', msg: 'أرسل هدية أسد', gift: true },
  { user: 'دانة', msg: 'يا سلام على السرعة' },
  { user: 'محمد', msg: 'أنا جاهز للجولة الجاية' },
  { user: 'سارة', msg: 'صعبة هذي!' },
  { user: 'فيصل', msg: 'أرسل هدية وردة', gift: true },
  { user: 'جود', msg: 'تصدرت اللوحة أخيراً 🎉' },
]
