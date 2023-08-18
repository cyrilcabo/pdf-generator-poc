import { HeaderWrapper, ReturnPercentile, ReturnPercentileCell } from './AnnualisedPerformanceTable';
import { ColumnsFuncReturn, TableCell } from './PDFTable';

export interface CalendarYearPerformance {
  fundName: string;
  '2022': ReturnPercentile;
  '2021': ReturnPercentile;
  '2020': ReturnPercentile; 
  '2019': ReturnPercentile; 
  '2018': ReturnPercentile; 
};

export const mockData: CalendarYearPerformance[] = [
  {
    fundName: '',
    '2022': ['Return', 'Percentile'],
    '2021': ['Return', 'Percentile'],
    '2020': ['Return', 'Percentile'],
    '2019': ['Return', 'Percentile'],
    '2018': ['Return', 'Percentile'],
  },
  {
    fundName: 'Morningstar Developed Markets Europe ex-UK NR GBP',
    '2022': ['50%', '75'],
    '2021': ['50%', '75'],
    '2020': ['50%', '75'],
    '2019': ['50%', '75'],
    '2018': ['50%', '75'],
  },
  {
    fundName: 'Morningstar Developed Markets Europe ex-UK NR GBP',
    '2022': ['50%', '75'],
    '2021': ['50%', '75'],
    '2020': ['50%', '75'],
    '2019': ['50%', '75'],
    '2018': ['50%', '75'],
  },
  {
    fundName: 'Morningstar Developed Markets Europe ex-UK NR GBP',
    '2022': ['50%', '75'],
    '2021': ['50%', '75'],
    '2020': ['50%', '75'],
    '2019': ['50%', '75'],
    '2018': ['50%', '75'],
  },
  {
    fundName: 'Morningstar Developed Markets Europe ex-UK NR GBP',
    '2022': ['50%', '75'],
    '2021': ['50%', '75'],
    '2020': ['50%', '75'],
    '2019': ['50%', '75'],
    '2018': ['50%', '75'],
  },
];

export const columns = (data?: CalendarYearPerformance): ColumnsFuncReturn[] => [
  {
    Header: <HeaderWrapper width="20%"> Fund name </HeaderWrapper>,
    Cell: <TableCell width="20%"> {data?.fundName} </TableCell>,
  },
  {
    Header: <HeaderWrapper width="16%"> 2022 </HeaderWrapper>,
    Cell: <ReturnPercentileCell width="16%" data={data?.[2022]} />,
  },
  {
    Header: <HeaderWrapper width="16%"> 2021 </HeaderWrapper>,
    Cell: <ReturnPercentileCell width="16%" data={data?.[2021]} />,
  },
  {
    Header: <HeaderWrapper width="16%"> 2020 </HeaderWrapper>,
    Cell: <ReturnPercentileCell width="16%" data={data?.[2020]} />,
  },
  {
    Header: <HeaderWrapper width="16%"> 2019 </HeaderWrapper>,
    Cell: <ReturnPercentileCell width="16%" data={data?.[2019]} />,
  },
  {
    Header: <HeaderWrapper width="16%"> 2018 </HeaderWrapper>,
    Cell: <ReturnPercentileCell width="16%" data={data?.[2018]} />,
  },
];