import { FC, memo } from 'react';

import { Box } from 'src/components';
import { BoxAs } from 'src/types';

interface CardProps {
  as?: BoxAs;
  className?: string;
  component?: FC;
}

const _Card: FC<CardProps> = ({ children, as, className, component }) => {
  const Component = component || Box;

  return (
    <Component as={as} className={`Card ${className || ''}`}>
      {children}
    </Component>
  );
};

export const Card = memo(_Card) as FC<CardProps>;
