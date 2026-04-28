import React, { createElement } from 'react'

interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'tertiary' | 'success'
  color?: 'default' | 'success' | 'warning' | 'error'

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

const Button: React.FC<IButtonProps> = ({
  variant = 'default',
  color = 'default',
  className,
  children,
  iconOnly = false,
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
    <>
    {!iconOnly && children}
    </> 
  )
}

export default Button
