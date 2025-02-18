import React, { forwardRef, useEffect, useState } from 'react';
import { GenericCheckAlternative } from '@heathmont/moon-icons-tw';
import mergeClassnames from '../private/utils/mergeClassnames';
import type CheckboxProps from './private/types/CheckboxProps';

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      disabled,
      readOnly,
      ariaLabel,
      label,
      id,
      checked = false,
      onChange,
      bgColor = 'bg-piccolo',
      className,
      ...inputProps
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = useState(checked || false);
    useEffect(() => {
      if (typeof checked !== undefined && checked !== isChecked)
        setIsChecked(!checked);
    }, [checked]);
    return (
      <label
        htmlFor={id}
        className={mergeClassnames(
          'relative flex items-center gap-2 text-moon-14 text-bulma cursor-pointer',
          disabled && 'opacity-30 cursor-not-allowed select-none',
          readOnly && 'cursor-not-allowed select-none'
        )}
      >
        <input
          id={id}
          disabled={disabled}
          readOnly={readOnly}
          aria-label={ariaLabel}
          ref={ref}
          className="peer appearance-none h-6 w-6 outline-none align-top select-none"
          {...inputProps}
          type="checkbox"
          aria-checked={isChecked}
          checked={isChecked}
          onClick={(e) => {
            if (disabled || readOnly) {
              e.preventDefault();
              e.stopPropagation();
              return;
            }
            if (inputProps.onClick) inputProps.onClick(e);
            setIsChecked(e?.currentTarget?.checked);
          }}
          onChange={onChange ? onChange : (e) => {}}
        />
        <span
          className={mergeClassnames(
            'absolute top-1 ltr:left-1 rtl:right-1 flex w-4 h-4 items-center justify-center shadow-[0_0_0_1px_inset] transition-colors text-moon-16 rounded-moon-i-xs shadow-trunks peer-checked:shadow-none text-goten',
            isChecked && bgColor,
            className && className
          )}
          aria-hidden="true"
        >
          <GenericCheckAlternative
            className={mergeClassnames(
              'transition-opacity',
              isChecked ? 'opacity-100' : 'opacity-0'
            )}
          />
        </span>
        {label}
      </label>
    );
  }
);

export default Checkbox;
