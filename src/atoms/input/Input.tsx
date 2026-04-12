import React from 'react'
import clsx from 'clsx'

type IconComponent = React.ComponentType<{
  size?: number
  className?: string
}>

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  secondaryLabel?: string
  helperText?: string

  leftIcon?: IconComponent
  rightIcon?: IconComponent

  state?: 'default' | 'error' | 'warning' | 'success'
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      secondaryLabel,
      helperText,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      state = 'default',
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={clsx(
          'input',
          state !== 'default' && `input--${state}`,
          disabled && 'input--disabled'
        )}
      >
        {(label || secondaryLabel) && (
          <div className="input__label">
            {label && <label>{label}</label>}
            
            {secondaryLabel && (
              <span className="input__secondary">
                {secondaryLabel}
              </span>
            )}
          </div>
        )}

        <div className="input__wrapper">
          {LeftIcon && (
            <span className="input__icon">
              <LeftIcon size={16} />
            </span>
          )}

          <input
            ref={ref}
            disabled={disabled}
            className={clsx('input__field', className)}
            {...props}
          />

          {RightIcon && (
            <span className="input__icon">
              <RightIcon size={16} />
            </span>
          )}
        </div>

        {helperText && (
          <p className="input__helper">{helperText}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
export default Input
