/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FC, memo } from 'react';

import S from 'src/styles/pages/dashboard/index.module.scss';
import { Box } from 'src/components';
import { Avatar } from 'src/components/shared';
import { GetImage, theme } from 'src/utils';

const TeamMember: FC<{ className?: string; src?: string; index?: number }> = ({
  className,
  index
}): JSX.Element => {
  return (
    <Box
      as="div"
      className={`${S.TeamMember} d-flex align-items-center w-100 ${className || ''}`}
      role="listitem">
      <Avatar
        size="small"
        variant="square"
        src={GetImage.misc((index || 0) % 2 === 0 ? 'lady' : 'guy')}
        className="me-3"
        frameColor={theme.palette.grey[100]}
      />
      <Box className="d-flex align-items-center flex-fill pe-4">
        <Box className="pe-3">
          <Box as="span" className="h6 my-0">
            TeamMember Name
          </Box>
          <Box as="small">Job Description</Box>
        </Box>
        <Box as="strong" className={`${S.rating} ms-auto`}>
          9.1
        </Box>
      </Box>
    </Box>
  );
};

export default memo(TeamMember);
