import { FC, memo } from 'react';

import { Box } from './Box';
import { SVGIcon } from './SVG.Icons';
import { Anchor } from './Link';

const _Logo: FC<{
  variant?: 'on-white' | 'on-black' | 'on-blue';
  className?: string;
  preserveText?: boolean;
}> = ({ className, preserveText }): JSX.Element => {
  return (
    <Box
      className={`Logo top px-0 ${className || ''} ${preserveText ? 'preserve-text' : ''}`.trim()}>
      <Anchor routeLink href="/">
        <SVGIcon name="only1-logo" className="me-2" />
        <Box as="strong">ONLY1</Box>
      </Anchor>
    </Box>
  );
};

export const Logo = memo(_Logo);
