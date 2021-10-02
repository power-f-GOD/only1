import { FC, memo, useMemo } from 'react';

import {
  // Cell,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart as _AreaChart,
  Area,
  YAxis
} from 'recharts';

import { useTheme } from '@mui/material';

import S from 'src/styles/pages/dashboard/index.module.scss';
import { Box } from 'src/components';
import { areaChartData } from '../data';
import { CustomTooltip } from './CustomTooltip';

const AreaChart: FC<{ className?: string; height?: number; width?: number }> = ({
  className,
  height: _height,
  width: _width
}) => {
  const theme = useTheme();
  const width = _width || 680;
  const height = _height || 300;

  return (
    <Box
      className={`${S.AreaChart} ${className || ''} pt-3`}
      style={useMemo(
        () => ({ height, width, minWidth: '100%', minHeight: '90%' }),
        [height, width]
      )}>
      <ResponsiveContainer width="100%" height="100%">
        <_AreaChart width={width} height={height} data={areaChartData}>
          <defs>
            <linearGradient id="act" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={theme.palette.primary.light} stopOpacity={0.8} />
              <stop offset="95%" stopColor={theme.palette.primary.dark} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="month"
            stroke={theme.palette.grey[500]}
            axisLine={false}
            tickLine={false}
            padding={useMemo(() => ({ right: 10, left: 15 }), [])}
          />
          <YAxis tickCount={6} hide />
          <CartesianGrid strokeDasharray="0" stroke={theme.palette.grey[100]} vertical={false} />
          <Tooltip
            cursor={useMemo(
              () => ({ stroke: theme.palette.warning.main }),
              //eslint-disable-next-line
              []
            )}
            isAnimationActive={false}
            content={<CustomTooltip />}
            coordinate={useMemo(() => ({ x: -100, y: -200 }), [])}
            animationEasing="linear"
          />
          <Area
            type="monotone"
            dataKey="act"
            strokeWidth={4}
            stroke={theme.palette.primary.dark}
            activeDot={useMemo(
              () => ({
                stroke: theme.palette.primary.dark,
                fill: 'white',
                strokeWidth: 4,
                r: 7
              }),
              // eslint-disable-next-line
              []
            )}
            fillOpacity={1}
            fill="url(#act)"
          />
        </_AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default memo(AreaChart);
