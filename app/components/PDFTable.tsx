import React from 'react';
import ReactPDF, { View, Text, StyleSheet,  } from '@react-pdf/renderer';
import tableStyles from './tableStyles';

export interface ColumnsFuncReturn {
  Cell: React.ReactNode;
  Header: React.ReactNode;
};

type Style = ReactPDF.Styles[0];

export interface CellProps {
  width?: string | number;
  children?: React.ReactNode;
  style?: Style;
  textStyle?: Style;
};

export const TableHeader = ({ width, children, style, textStyle }: CellProps) => (
  <View
    style={[
      tableStyles.column,
      // tableStyles.bordered,
      width ? { width } : {},
      style ? style : {},
    ]}
  >
    <Text
      style={[
        tableStyles.cell,
        tableStyles.label,
        { fontWeight: 500, fontSize: 6, padding: '5px'  },
        textStyle ? textStyle : {},
      ]}>
      {children}
    </Text>
  </View>
);

export const TableCell = ({ width, children, style, textStyle }: CellProps) => (
  <View
    style={[
      tableStyles.column,
      // tableStyles.bordered,
      width ? { width } : {},
      style ? style : {},
    ]}
  >
    <Text
      style={[
        tableStyles.cell,
        { fontWeight: 400, fontSize: 7  },
        textStyle ? textStyle : {},
      ]}>
      {children}
    </Text>
  </View>
);

interface Props <T> {
  columns: (data?: T) => ColumnsFuncReturn[];
  data: T[];
  rootStyle?: Style;
  rowStyle?: Style;
  getRowStyle?: (data: T, idx: number) => Style;
}

const PDFTable = <T, >({ columns, data, rootStyle, rowStyle, getRowStyle }: Props<T>) => (
  <View style={[tableStyles.root, rootStyle ? rootStyle : {}]}>
    <View style={[tableStyles.row, rowStyle ? rowStyle : {}]}>
      {columns().map(c => c.Header)}
    </View>
    {data.map((d, idx) => (
      <View style={[tableStyles.row, rowStyle ? rowStyle : {}, getRowStyle?.(d, idx) || {}]} key={idx}>
        {columns(d).map(({ Cell }) => Cell)}
      </View>
    ))}
  </View>
);

export default PDFTable;
