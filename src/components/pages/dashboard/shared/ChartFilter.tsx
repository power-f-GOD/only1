import { useCallback, useState, memo } from 'react';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import S from 'src/styles/pages/dashboard/index.module.scss';

const chartFilter = ['1 week', '1 month', '3 months', '6 months', '1 year'];

const _ChartFilter = (): JSX.Element => {
  const [chartRange, setChartRange] = useState(chartFilter[3]);

  const handleChartFilterChange = useCallback((e) => {
    setChartRange(e.target.value);
  }, []);

  return (
    <TextField
      select
      size="small"
      className={`${S.filterSelect} ms-4`}
      value={chartRange}
      onChange={handleChartFilterChange}
      variant="standard">
      {chartFilter.map(
        useCallback(
          (option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ),
          []
        )
      )}
    </TextField>
  );
};

export const ChartFilter = memo(_ChartFilter);
