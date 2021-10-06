import { useMemo, memo, FC } from 'react';

// import S from 'src/styles/pages/dashboard/index.module.scss';
import { Card } from '../shared';
import { Box, ProgressPie } from 'src/components/shared';
import { SubPaletteColor, DashboardProps } from 'src/types';

const PieCard: FC<DashboardProps['works'] & { color: SubPaletteColor }> = ({
  title,
  count,
  countText,
  percentage,
  color
}) => {
  return (
    <Card
      key={color}
      title={title}
      options={useMemo(() => [{ value: 'lorem' }, { value: 'ipsum' }, { value: 'dolor' }], [])}>
      <Box className="d-flex justify-content-between align-items-center mt-3">
        <ProgressPie value={percentage} color={color} type="A" />

        <Box as="p" className="d-flex flex-column flex-fill text-end align-items-end m-0">
          <Box as="strong" className="">
            {count}
          </Box>
          <Box as="small" className="theme-tertiary-700">
            {countText}
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default memo(PieCard);
