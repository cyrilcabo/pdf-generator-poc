'use client';
import React, { useState } from 'react';
import { Page, Text, View, Document, StyleSheet, Image, PDFViewer, Font, PDFDownloadLink } from '@react-pdf/renderer';

import PDFTable from './components/PDFTable';
import { columns, mockData } from './components/AnnualisedPerformanceTable';
import * as calendarYearData from './components/CalendarYearPerformanceTable';
import * as holdingsData from './components/HoldingsTable';
import * as sectorGeographyData from './components/SectorGeographyTable';
import Chart from './components/Charts';
import FundInfo from './components/FundInfo';
import tableStyles from './components/tableStyles';

Font.register(
  {
    family: 'Inter',
    fonts: [
      {
        fontWeight: 400,
        src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZg.ttf',
      },
      {
        src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZg.ttf',
        fontWeight: 500,
      },
      {
        src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZg.ttf',
        fontWeight: 600,
      },
      {
        src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZg.ttf',
        fontWeight: 700,
      }
    ],
  }
);

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFFF',
    padding: '40px 32px',
    fontFamily: 'Inter',
  },
  topSection: {
    flexDirection: 'column',
    marginBottom: '16px',
  },
  titleSection: {
    flexDirection: 'column',
  },
  amiLogo: {
    height: 18,
    width: 105,
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 1.6,
    color: '#181920',
  },
  titleInfo: {
    fontSize: 7,
    fontWeight: 400,
    lineHeight: 1.7,
    color: '#6F707A',
  },
  summaryInfoSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  sectionTitle: {
    fontSize: 9,
    fontWeight: 400,
    lineHeight: 1.3,
    textTransform: 'uppercase',
    width: '100%',
    paddingTop: 4,
    borderTop: '1px solid #313341',
    marginBottom: '8px',
    color: '#1D1F27',
  },
  sectionContainer: {
    flexDirection: 'column',
    width: '100%',
    marginBottom: 16,
  },
  sectionBodyText: {
    fontSize: 9,
    fontWeight: 400,
    lineHeight: 1.55,
    color: '#313341'
  },
});

const getAnnualisedTableRowStyle = <T, >(data: T, idx: number) => {
  if (idx > 0 && (idx + 2) % 2 === 0) {
    return {
      backgroundColor: '#EAEBEC',
    };
  }
  return {};
}

// Create Document Component
const MyDocument = ({ chartLink }: { chartLink?: string }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.topSection}>
          <Image style={styles.amiLogo} src="/logo.png" />
          <View style={styles.titleSection}>
            <Text style={styles.title}>
              ES AllianceBernst Europe Ex UK F EUR Inc
            </Text>
            <Text style={styles.titleInfo}>
              Equity Fund Report as of 12 Sep 2021 to 11 Oct 2021
            </Text>
          </View>
        </View>
        <View style={styles.summaryInfoSection}>
          <View style={[styles.sectionContainer, { marginRight: '24px' }]}>
            <Text style={[styles.sectionTitle]}>
              SUMMARY
            </Text>
            <Text style={styles.sectionBodyText}>
              ES AllianceBernstein Europe ex UK Equity is a fund that focuses on investing in European companies,
              {' '} excluding the UK. The fund&lsquo;s investment philosophy is based on a combination of fundamental
              {' '} research and quantitative analysis. Its approach to portfolio management emphasizes diversification, aiming to
              {' '} strike a balance between growth and value stocks. The fund&lsquo;s criteria for selecting investments include
              {' '} identifying companies with strong business models, competitive advantages, and attractive valuations.
              {' '} The investment team also considers macroeconomic factors and industry trends to ensure a well-rounded portfolio.
              {' '} The fund&lsquo;s primary objective is capital appreciation, achieved through a disciplined and research-driven investment process.
            </Text>
          </View>
          <View style={[styles.sectionContainer, { width: '70%' }]}>
            <Text style={styles.sectionTitle}>
              FUND INFORMATION
            </Text>
            <FundInfo />
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            ANNUALISED PERFORMANCE
          </Text>
          <PDFTable
            rowStyle={{ padding: '4px 5px' }}
            data={mockData}
            columns={columns}
            getRowStyle={getAnnualisedTableRowStyle}
          />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            CALENDAR YEAR PERFORMANCE
          </Text>
          <PDFTable
            rowStyle={{ padding: '4px 5px' }}
            data={calendarYearData.mockData}
            columns={calendarYearData.columns}
            getRowStyle={getAnnualisedTableRowStyle}
          />
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            HOLDINGS
          </Text>
          <PDFTable
            rowStyle={tableStyles.borderedTable}
            data={holdingsData.mockData}
            columns={holdingsData.columns}
            rootStyle={tableStyles.bordered}
            getRowStyle={() => ({ paddingVertical: '4px' })}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={[styles.sectionContainer, { width: '48%' }]}>
            <Text style={styles.sectionTitle}>
              SECTOR
            </Text>
            <PDFTable
              rowStyle={tableStyles.borderedTable}
              data={sectorGeographyData.sectorData}
              columns={sectorGeographyData.sectorColumns}
              rootStyle={tableStyles.bordered}
              getRowStyle={() => ({ paddingVertical: '4px' })}
            />
          </View>
          <View style={[styles.sectionContainer, { width: '48%' }]}>
            <Text style={styles.sectionTitle}>
              GEOGRAPHY
            </Text>
            <PDFTable
              rowStyle={tableStyles.borderedTable}
              data={sectorGeographyData.geographyData}
              columns={sectorGeographyData.geographyColumns}
              rootStyle={tableStyles.bordered}
              getRowStyle={() => ({ paddingVertical: '4px' })}
            />
          </View>
        </View>
      </Page>
      <Page style={styles.page} size="A4">
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>
            Chart Sample
          </Text>
          <Image style={{ height: 300, width: 300 }} src={chartLink} />
        </View>
      </Page>
    </Document>
  );
};

const App = () => {
  const [chartLink, setChartLink] = useState('');
  const handleImageSet = (link: string) => {
    setChartLink(link);
  };
  return (
    <div className="h-[100vh] w-full flex-col flex items-center justify-center p-20">
      <PDFViewer className="h-full w-full" height={700}>
        <MyDocument chartLink={chartLink} />
      </PDFViewer>
      <div className="h-[300px] w-[300px] absolute -top-[300px]">
        <Chart onImageSet={handleImageSet} />
      </div>
      <PDFDownloadLink document={<MyDocument chartLink={chartLink} />} fileName='download-test.pdf'>
        {() => 'Download PDF'}
      </PDFDownloadLink>
    </div>
  );
};

export default App;
