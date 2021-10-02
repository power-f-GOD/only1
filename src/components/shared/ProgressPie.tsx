/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FC, memo, useState, useEffect, useMemo } from 'react';

import { useTheme } from '@mui/styles';

import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';

import { Box } from 'src/components';
import { delay } from 'src/utils';
import { SubPaletteColor } from 'src/types';
import { Theme } from '@mui/material/styles/createTheme';

const _ProgressPie: FC<
  Omit<CircularProgressProps, 'color'> & {
    type?: 'A' | 'B';
    color?: SubPaletteColor;
  }
> = ({
  size: _size,
  thickness: _thickness,
  color,
  value: _value,
  type,
  children,
  ...otherProps
}): JSX.Element => {
  const size = _size || 70;
  const theme = useTheme<Theme>();
  const [value, setValue] = useState(0);

  useEffect(() => {
    delay(300, () => setValue(_value || 0));
  }, [_value]);

  return (
    <Box
      dynamic
      className={`ProgressPie type--${type || 'A'}`}
      style={useMemo(
        () => ({
          height: `${size}px`,
          width: `${size}px`,
          color: theme.palette[color || 'primary'].dark
        }),
        //eslint-disable-next-line
        [size, color]
      )}>
      <CircularProgress
        variant="determinate"
        size={size}
        thickness={_thickness}
        {...otherProps}
        sx={useMemo(
          () => ({
            color: theme.palette.grey[100]
          }),
          //eslint-disable-next-line
          [color]
        )}
        value={100}
      />
      <CircularProgress
        variant="determinate"
        size={size}
        thickness={_thickness}
        sx={useMemo(
          () => ({
            color: theme.palette[color || 'primary'].dark
          }),
          //eslint-disable-next-line
          [color]
        )}
        {...otherProps}
        value={value}
      />
      {children || <Box as="strong">{value}%</Box>}
    </Box>
  );
};

export const ProgressPie = memo(_ProgressPie);
