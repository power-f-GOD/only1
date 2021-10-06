import { FC, memo } from 'react';

import { Box, SVGIcon, ButtonMenu } from 'src/components';
import { CardProps } from 'src/types';

const _Card: FC<CardProps> = ({
  as,
  title,
  header,
  children,
  className,
  options,
  component,
  ...otherProps
}) => {
  const Component = component || Box;

  return (
    <Component as={as} className={`Card ${className || ''}`} {...otherProps}>
      <Box className="d-flex justify-content-between align-items-center m-0 w-100">
        <Box as="h2" className="h6">
          {title}
        </Box>
        {header}
        {options && (
          <ButtonMenu
            buttonType="icon-button"
            buttonClassName="more-button"
            buttonConstantContent={<SVGIcon name="more" fontSize="inherit" />}
            options={options}
          />
        )}
      </Box>
      {children}
    </Component>
  );
};

export const Card = memo(_Card) as FC<CardProps>;
