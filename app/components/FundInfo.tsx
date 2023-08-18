import PDFTable, { ColumnsFuncReturn, TableCell } from './PDFTable';

type TFundInfo = {
  label: string;
  value: string;
}

const columns = (data?: TFundInfo): ColumnsFuncReturn[] => [
  {
    Cell: <TableCell textStyle={{ fontSize: 7, fontWeight: 400, margin: 'unset !important' }} style={{ marginRight: 10 }} width="20%"> {data?.label} </TableCell>,
    Header: '',
  },
  {
    Cell: <TableCell textStyle={{ fontWeight: 700, fontSize: 8, margin: 'unset !important' }} width="80%"> {data?.value} </TableCell>,
    Header: '',
  },
];

const data = [
  {
    label: 'Fund size',
    value: '$225.7m',
  },
  {
    label: 'OCF',
    value: '0.45%',
  },
  {
    label: 'Holdings',
    value: '50',
  },
  {
    label: 'Turn over',
    value: '-',
  },
];

const FundInfo = () => {
  return (
    <PDFTable
      columns={columns}
      data={data}
      rowStyle={{ marginBottom: 5 }}
    />
  );
};

export default FundInfo;
