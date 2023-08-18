import { HeaderWrapper } from "./AnnualisedPerformanceTable";
import { ColumnsFuncReturn, TableCell } from "./PDFTable";

interface HoldingsInfo {
  investmentTrust: string;
  fund: string;
  index: string;
  relative: string;
  sector: string;
  country: string;
  firstBought: string;
};

export const mockData: HoldingsInfo[] = [
  {
    investmentTrust: 'LVMH Moet Hennessy Vuitton SE',
    fund: '5%',
    index: '7%',
    relative: '12%',
    sector: 'Consumer',
    country: 'France',
    firstBought: 'Sep 2017',
  },
  {
    investmentTrust: 'LVMH Moet Hennessy Vuitton SE',
    fund: '5%',
    index: '7%',
    relative: '12%',
    sector: 'Consumer',
    country: 'France',
    firstBought: 'Sep 2017',
  },
  {
    investmentTrust: 'LVMH Moet Hennessy Vuitton SE',
    fund: '5%',
    index: '7%',
    relative: '12%',
    sector: 'Consumer',
    country: 'France',
    firstBought: 'Sep 2017',
  },
  {
    investmentTrust: 'LVMH Moet Hennessy Vuitton SE',
    fund: '5%',
    index: '7%',
    relative: '12%',
    sector: 'Consumer',
    country: 'France',
    firstBought: 'Sep 2017',
  },
  {
    investmentTrust: 'LVMH Moet Hennessy Vuitton SE',
    fund: '5%',
    index: '7%',
    relative: '12%',
    sector: 'Consumer',
    country: 'France',
    firstBought: 'Sep 2017',
  },
  {
    investmentTrust: 'LVMH Moet Hennessy Vuitton SE',
    fund: '5%',
    index: '7%',
    relative: '12%',
    sector: 'Consumer',
    country: 'France',
    firstBought: 'Sep 2017',
  },
  {
    investmentTrust: 'LVMH Moet Hennessy Vuitton SE',
    fund: '5%',
    index: '7%',
    relative: '12%',
    sector: 'Consumer',
    country: 'France',
    firstBought: 'Sep 2017',
  },
  {
    investmentTrust: 'LVMH Moet Hennessy Vuitton SE',
    fund: '5%',
    index: '7%',
    relative: '12%',
    sector: 'Consumer',
    country: 'France',
    firstBought: 'Sep 2017',
  },
];

export const columns = (data?: HoldingsInfo): ColumnsFuncReturn[] => [
  {
    Header: <HeaderWrapper width="15%"> Investment trust </HeaderWrapper>,
    Cell: <TableCell width="15%"> {data?.investmentTrust} </TableCell>,
  },
  {
    Header: <HeaderWrapper width="14.16%"> Fund </HeaderWrapper>,
    Cell: <TableCell width="14.16%"> {data?.fund} </TableCell>,
  },
  {
    Header: <HeaderWrapper width="14.16%"> Index </HeaderWrapper>,
    Cell: <TableCell width="14.16%"> {data?.index} </TableCell>,
  },
  {
    Header: <HeaderWrapper width="14.16%"> Relative </HeaderWrapper>,
    Cell: <TableCell width="14.16%"> {data?.relative} </TableCell>,
  },
  {
    Header: <HeaderWrapper width="14.16%"> Sector </HeaderWrapper>,
    Cell: <TableCell width="14.16%"> {data?.sector} </TableCell>,
  },
  {
    Header: <HeaderWrapper width="14.16%"> Country </HeaderWrapper>,
    Cell: <TableCell width="14.16%"> {data?.country} </TableCell>,
  },
  {
    Header: <HeaderWrapper width="14.16%"> First bought </HeaderWrapper>,
    Cell: <TableCell width="14.16%"> {data?.firstBought} </TableCell>,
  },
];
