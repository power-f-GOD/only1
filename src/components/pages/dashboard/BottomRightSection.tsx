/* eslint-disable @typescript-eslint/no-non-null-assertion */

import S from 'src/styles/pages/dashboard/index.module.scss';
import Card from './Card';
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
          .map((_, i) => (
            <TeamMember key={i} />
          ))}
      </Box>
    </Card>
  );
};

export default BottomRightSection;
