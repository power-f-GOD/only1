/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FC } from 'react';

import S from 'src/styles/pages/dashboard/index.module.scss';
import { Box } from 'src/components';
import { BoxAs } from 'src/types';

const Card: FC<{ as?: BoxAs; className?: string }> = ({ children, as, className }): JSX.Element => {
  return (
    <Box as={as} className={`${S.Card} ${className || ''}`}>
      {children}
    </Box>
  );
};

export default Card;
