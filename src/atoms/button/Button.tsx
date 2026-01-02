import React, { createElement } from 'react'

interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'success'
  color?: 'default' | 'success' | 'warning' | 'error'
}

const VARIANT_CLASS = {
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

const Button: React.FC<IButtonProps> = ({
  variant = 'primary',
  color = 'default',
  className,
  children,
  ...rest
}) => {
  const classes = [
    'btn',
    VARIANT_CLASS[variant],
    COLOR_CLASS[color],
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
