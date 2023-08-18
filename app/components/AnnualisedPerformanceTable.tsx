import { StyleSheet } from "@react-pdf/renderer";
import { CellProps, ColumnsFuncReturn, TableCell, TableHeader } from "./PDFTable";
import tableStyles from "./tableStyles";
import { View } from "@react-pdf/renderer";

export type ReturnPercentile = [string, string];

export interface AnnualisedPerformance {
  fundName: string;
  ytd: ReturnPercentile;
  '3mos': ReturnPercentile;
  '6mos': ReturnPercentile;
  '1yr': ReturnPercentile; 
  '3yr': ReturnPercentile; 
  '5yr': ReturnPercentile; 
};

export const mockData: AnnualisedPerformance[] = [
  {
    fundName: '',
    ytd: ['Return', 'Percentile'],
    '3mos': ['Return', 'Percentile'],
    '6mos': ['Return', 'Percentile'],
    '1yr': ['Return', 'Percentile'],
    '3yr': ['Return', 'Percentile'],
    '5yr': ['Return', 'Percentile'],
  },
  {
    fundName: 'ES AllianceBernstein Europe ex UK Equity',
    ytd: ['50%', '75'],
    '3mos': ['50%', '75'],
    '6mos': ['50%', '75'],
    '1yr': ['50%', '75'],
    '3yr': ['50%', '75'],
    '5yr': ['50%', '75'],
  },
  {
    fundName: 'ES AllianceBernstein Europe ex UK Equity',
    ytd: ['50%', '75'],
    '3mos': ['50%', '75'],
    '6mos': ['50%', '75'],
    '1yr': ['50%', '75'],
    '3yr': ['50%', '75'],
    '5yr': ['50%', '75'],
  },
  {
    fundName: 'ES AllianceBernstein Europe ex UK Equity',
    ytd: ['50%', '75'],
    '3mos': ['50%', '75'],
    '6mos': ['50%', '75'],
    '1yr': ['50%', '75'],
    '3yr': ['50%', '75'],
    '5yr': ['50%', '75'],
  },
  {
    fundName: 'ES AllianceBernstein Europe ex UK Equity',
    ytd: ['50%', '75'],
    '3mos': ['50%', '75'],
    '6mos': ['50%', '75'],
    '1yr': ['50%', '75'],
    '3yr': ['50%', '75'],
    '5yr': ['50%', '75'],
  },
];

export const styles = StyleSheet.create({
  returnPercentileContainer: {
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
  },
  noBorder: {
    border: 'unset !important',
  },
});

export const HeaderWrapper = (props: CellProps) => (
  <TableHeader {...props} style={{ backgroundColor: '#F5F5F6' }} />
);

export const ReturnPercentileCell = ({ data, width = '14.16%' }: { data?: [string, string], width?: string }) => {
  const isLabel = data?.every(i => i === 'Return' || i === 'Percentile');
  const stylesx = isLabel ? { ...tableStyles.label, fontWeight: 6 } : styles.noBorder;
  return (
    <View style={[styles.returnPercentileContainer, { width: width || '14.16%' }]}>
      <TableCell width="40%" style={stylesx}>
        {data?.[0]}
      </TableCell>
      <TableCell width="60%" style={stylesx}>
        {data?.[1]}
      </TableCell>
    </View>
  );
};

export const columns = (data?: AnnualisedPerformance): ColumnsFuncReturn[] => [
  {
    Header: <HeaderWrapper width="15%"> Fund name </HeaderWrapper>,
    Cell: <TableCell width="15%"> {data?.fundName} </TableCell>
  },
  {
    Header: <HeaderWrapper width="14.16%"> YTD </HeaderWrapper>,
    Cell: <ReturnPercentileCell data={data?.ytd} />
  },
  {
    Header: <HeaderWrapper width="14.16%"> 3 mos </HeaderWrapper>,
    Cell: <ReturnPercentileCell data={data?.['3mos']} />
  },
  {
    Header: <HeaderWrapper width="14.16%"> 6 mos </HeaderWrapper>,
    Cell: <ReturnPercentileCell data={data?.['6mos']} />
  },
  {
    Header: <HeaderWrapper width="14.16%"> 1 yr </HeaderWrapper>,
    Cell: <ReturnPercentileCell data={data?.['1yr']} />
  },
  {
    Header: <HeaderWrapper width="14.16%"> 3 yr </HeaderWrapper>,
    Cell: <ReturnPercentileCell data={data?.['3yr']} />
  },
  {
    Header: <HeaderWrapper width="14.16%"> 5 yr </HeaderWrapper>,
    Cell: <ReturnPercentileCell data={data?.['5yr']} />
  },
];
