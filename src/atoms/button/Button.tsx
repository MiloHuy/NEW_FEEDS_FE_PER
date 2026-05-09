import React, { createElement } from 'react'

interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'tertiary' | 'success'
  color?: 'default' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg' | 'xl'

  iconOnly?: boolean
}

const VARIANT_CLASS = {
  default: 'btn-default',
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  tertiary: 'btn-tertiary',
  success: 'btn-success',
} as const

const COLOR_CLASS = {
  default: '',
  success: 'btn-success',
  warning: 'btn-warning',
  error: 'btn-error',
} as const

const SIZE_CLASS = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
  xl: 'btn-xl',
} as const

const Button: React.FC<IButtonProps> = ({
  variant = 'default',
  color = 'default',
  size = 'md',
  className,
  children,
  iconOnly = false,
  ...rest
}) => {
  const classes = [
    'btn',
    VARIANT_CLASS[variant],
    COLOR_CLASS[color],
    SIZE_CLASS[size],
    iconOnly && 'btn-icon',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return createElement(
    'button',
    {
      className: classes,
      ...rest,
    },
    children
  )
}

export default Button
