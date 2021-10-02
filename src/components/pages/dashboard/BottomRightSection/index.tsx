import { useCallback } from 'react';

import S from 'src/styles/pages/dashboard/index.module.scss';
import { Card } from '../shared';
import { Box } from 'src/components';
import TeamMember from './TeamMember';

const BottomRightSection = (): JSX.Element => {
  return (
    <Card as="section" className={`${S.BottomRightSection} pe-0 pb-2`}>
      <Box as="h2" className="h6 pe-3">
        Team Member Performance
      </Box>

      <Box as="section" role="list">
        {Array(4)
          .fill('')
          .map(useCallback((_, i) => <TeamMember index={i} key={i} />, []))}
      </Box>
    </Card>
  );
};

export default BottomRightSection;
