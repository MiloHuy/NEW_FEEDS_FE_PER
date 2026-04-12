import clsx from 'clsx'
import React from 'react'


const BADGE_VARIANT_CLASS = {
  default: "badge-default",
  secondary: "badge-secondary",
  destructive: "badge-destructive",
  outline: "badge-outline",
  warning: "badge-warning",
  success: "badge-success",
} as const

const BADGE_SIZE_CLASS = {
  sm: "badge-sm",
  md: "badge-md",
  lg: "badge-lg",
} as const

type TBadgeVariant = keyof typeof BADGE_VARIANT_CLASS
type TBadgeSize = keyof typeof BADGE_SIZE_CLASS

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: TBadgeVariant,
  size?: TBadgeSize,
}
const Badge : React.FC<BadgeProps> = ({ variant = "default", size = "md", className, ...props }) => {
  return (
    <span
      className={clsx("badge", BADGE_VARIANT_CLASS[variant], BADGE_SIZE_CLASS[size], className)}
      {...props}
    />
  )
}

export default Badge
