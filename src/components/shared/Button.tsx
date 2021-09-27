/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { FC, memo } from 'react';
import { ButtonProps } from 'src/types';

const _Button: FC<ButtonProps> = ({
  children,
  variant,
  color,
  _type,
  cta,
  className,
  ...props
}): JSX.Element => {
  return (
    <button
      {...props}
      className={`Button ${_type || 'flat-button'} btn--${variant || 'text'} ${
        color || 'primary'
      } ${className || ''} ${cta ? 'cta-btn' : ''}`.replace(/\s+/g, ' ')}>
      {children}
    </button>
  );
};

export const Button = memo(_Button);
