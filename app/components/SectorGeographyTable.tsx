import { HeaderWrapper } from "./AnnualisedPerformanceTable";
import { ColumnsFuncReturn, TableCell } from "./PDFTable";

interface BaseInfo {
  fund: string;
  index: string;
  relative: string;
}

interface SectorInfo extends BaseInfo {
  sector: string;
}

interface GeographyInfo extends BaseInfo {
  country: string;
}

export const sectorData: SectorInfo[] = [
  {
    sector: 'Financial Services',
    fund: '18.9%',
    index: '7%',
    relative: '12%',
  },
  {
    sector: 'Financial Services',
    fund: '18.9%',
    index: '7%',
    relative: '12%',
  },
  {
    sector: 'Financial Services',
    fund: '18.9%',
    index: '7%',
    relative: '12%',
  },
  {
    sector: 'Financial Services',
    fund: '18.9%',
    index: '7%',
    relative: '12%',
  },
  {
    sector: 'Financial Services',
    fund: '18.9%',
    index: '7%',
    relative: '12%',
  },
  {
    sector: 'Financial Services',
    fund: '18.9%',
    index: '7%',
    relative: '12%',
  },
  {
    sector: 'Financial Services',
    fund: '18.9%',
    index: '7%',
    relative: '12%',
  },
  {
    sector: 'Financial Services',
    fund: '18.9%',
    index: '7%',
    relative: '12%',
  },
  {
    sector: 'Financial Services',
    fund: '18.9%',
    index: '7%',
    relative: '12%',
  }, 
];

export const geographyData: GeographyInfo[] = [
  {
    country: 'France',
    fund: '18.9%',
    index: '7%',
    relative: '12%',
  },
  {
    country: 'France',
    fund: '18.9%',
    index: '7%',
    relative: '12%',
  }, 
  {
    country: 'France',
    fund: '18.9%',
    index: '7%',
    relative: '12%',
  }, 
  {
    country: 'France',
    fund: '18.9%',
    index: '7%',
    relative: '12%',
  }, 
  {
    country: 'France',
    fund: '18.9%',
    index: '7%',
    relative: '12%',
  }, 
  {
    country: 'France',
    fund: '18.9%',
    index: '7%',
    relative: '12%',
  }, 
  {
    country: 'France',
    fund: '18.9%',
    index: '7%',
    relative: '12%',
  }, 
];

const baseColumns = <T extends BaseInfo, >(data?: T): ColumnsFuncReturn[] => [
  {
    Header: <HeaderWrapper width="21.66%"> Fund </HeaderWrapper>,
    Cell: <TableCell width="21.66%"> {data?.fund} </TableCell>,
  },
  {
    Header: <HeaderWrapper width="21.66%"> Index </HeaderWrapper>,
    Cell: <TableCell width="21.66%"> {data?.index} </TableCell>,
  },
  {
    Header: <HeaderWrapper width="21.66%"> Relative </HeaderWrapper>,
    Cell: <TableCell width="21.66%"> {data?.relative} </TableCell>,
  },
];

export const sectorColumns = (data?: SectorInfo): ColumnsFuncReturn[] => [
  {
    Header: <HeaderWrapper width="35%"> Sector </HeaderWrapper>,
    Cell: <TableCell width="35%"> {data?.fund} </TableCell>
  },
  ...baseColumns(data),
];

export const geographyColumns = (data?: GeographyInfo): ColumnsFuncReturn[] => [
  {
    Header: <HeaderWrapper width="35%"> Country </HeaderWrapper>,
    Cell: <TableCell width="35%"> {data?.country} </TableCell>,
  },
  ...baseColumns(data),
];
