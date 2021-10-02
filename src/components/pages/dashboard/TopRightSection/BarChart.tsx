import { FC, memo, useMemo } from 'react';

import {
  BarChart as _BarChart,
  Bar,
  // Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

import { useTheme } from '@mui/material';

import S from 'src/styles/pages/dashboard/index.module.scss';
import { Box } from 'src/components';
import { barChartData } from '../data';

const BarChart: FC<{ className?: string; height?: number; width?: number }> = ({
  className,
  height: _height,
  width: _width
}) => {
  const theme = useTheme();
  const width = _width || 680;
  const height = _height || 280;

  const commonAxisProps = {
    stroke: theme.palette.grey[500],
    axisLine: false,
    tickLine: false
  };

  return (
    <Box
      className={`${S.BarChart} ${className || ''} pt-3`}
      style={useMemo(
        () => ({ height, width, maxWidth: '100%', maxHeight: '100%' }),
        [height, width]
      )}>
      <ResponsiveContainer width="100%" height="100%">
        <_BarChart
          width={width}
          height={height}
          data={barChartData}
          margin={useMemo(
            () => ({
              top: 5,
              right: 0,
              left: -30,
              bottom: -10
            }),
            []
          )}>
          <CartesianGrid strokeDasharray="0" stroke={theme.palette.grey[100]} vertical={false} />
          <XAxis dataKey="month" {...commonAxisProps} />
          <YAxis {...commonAxisProps} tickCount={6} />
          <Tooltip
            cursor={useMemo(
              () => ({ fill: theme.palette.grey[100] }),
              //eslint-disable-next-line
              []
            )}
            wrapperClassName={S.BarChartCustomTooltip}
          />
          {/* <Legend /> */}
          <Bar dataKey="received" fill={theme.palette.primary.dark} barSize={6} />
          <Bar dataKey="completed" fill={theme.palette.warning.dark} barSize={6} />
        </_BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default memo(BarChart);
