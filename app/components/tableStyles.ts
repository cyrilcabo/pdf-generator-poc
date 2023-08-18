import { StyleSheet } from '@react-pdf/renderer';

const tableStyles = StyleSheet.create({
  root: {
    // display: 'table',
    width: '100%',
  },
  borderedTable: {
    borderStyle: 'solid',
    borderColor: '#EAEBEC', 
    borderWidth: 1, 
    borderRightWidth: 0, 
    borderBottomWidth: 0,
    borderLeftWidth: 0,
  },
  bordered: {
    borderStyle: 'solid',
    borderColor: '#EAEBEC',
    borderWidth: 1,
    borderTopWidth: 0,
  },
  row: {
    // margin: 'auto',
    flexDirection: 'row',
  },
  column: {
    // width: '25%',

  },
  cell: { 
    margin: 'auto',
    // marginTop: 5, 
    fontSize: 10,
    padding: '2px'
  },
  label: {
    color: '#6F707A',
  }
});

export default tableStyles;
