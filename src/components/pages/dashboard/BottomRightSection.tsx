/* eslint-disable @typescript-eslint/no-non-null-assertion */

import S from 'src/styles/pages/dashboard/index.module.scss';
import Card from './Card';
import { Box } from 'src/components';

const BottomRightSection = (): JSX.Element => {
  return (
    <Card as="section" className={`${S.BottomRightSection}`}>
      <Box as="h2" className="h6">
        Team Member Performance
      </Box>
    </Card>
  );
};

export default BottomRightSection;
