import React from 'react'
import clsx from 'clsx'

export interface SelectOption {
  label: string
  value: string | number
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  secondaryLabel?: string
  helperText?: string
  options: SelectOption[]
  state?: 'default' | 'error' | 'warning' | 'success'
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      secondaryLabel,
      helperText,
      options,
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
          'select',
          state !== 'default' && `select--${state}`,
          disabled && 'select--disabled'
        )}
      >
        {(label || secondaryLabel) && (
          <div className="select__label">
            {label && <label>{label}</label>}
            
            {secondaryLabel && (
              <span className="select__secondary">
                {secondaryLabel}
              </span>
            )}
          </div>
        )}

        <div className="select__wrapper">
          <select
            ref={ref}
            disabled={disabled}
            className={clsx('select__field', className)}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {helperText && (
          <p className="select__helper">{helperText}</p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'
export default Select
