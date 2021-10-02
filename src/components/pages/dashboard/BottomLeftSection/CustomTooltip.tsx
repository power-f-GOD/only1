import { FC, memo, useCallback } from 'react';

import { AvatarGroup } from '@mui/material';

import S from 'src/styles/pages/dashboard/index.module.scss';
import { Box, Avatar } from 'src/components';
import { GetImage } from 'src/utils';

const _CustomTooltip: FC<{ className?: string }> = ({ className }) => {
  return (
    <Box className={`${S.CustomTooltip} ${className || ''}`}>
      <Box as="span" className="d-block mt-0 mb-2 text-center">
        Project Meeting with
      </Box>
      <AvatarGroup max={4} className="justify-content-center">
        {Array(4)
          .fill('')
          .map(
            useCallback(
              (_, i) => (
                <Avatar
                  size="tiny"
                  key={i}
                  className="MuiAvatar-root"
                  frameWidth={2}
                  alt="Image"
                  variant="circle"
                  src={GetImage.misc(i % 2 === 0 ? 'guy' : 'lady')}
                />
              ),
              []
            )
          )}
      </AvatarGroup>
    </Box>
  );
};

export const CustomTooltip = memo(_CustomTooltip);
