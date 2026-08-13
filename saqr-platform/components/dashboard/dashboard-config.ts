import {
  adminNav,
  creatorNav,
  viewerNav,
} from "@/lib/data"

export const viewerConfig = {
  nav: viewerNav,
  role: {
    label: "مشاهد",
    color: "primary" as const,
  },
}

export const creatorConfig = {
  nav: creatorNav,
  role: {
    label: "صانع محتوى",
    color: "accent" as const,
  },
}

export const adminConfig = {
  nav: adminNav,
  role: {
    label: "مدير",
    color: "success" as const,
  },
}
