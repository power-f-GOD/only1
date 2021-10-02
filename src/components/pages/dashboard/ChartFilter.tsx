/* eslint-disable @typescript-eslint/no-non-null-assertion */
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import S from 'src/styles/pages/dashboard/index.module.scss';
import { useCallback, useState } from 'react';

const chartFilter = ['1 week', '1 month', '3 months', '6 months', '1 year'];

const ChartFilter = (): JSX.Element => {
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

export default ChartFilter;
