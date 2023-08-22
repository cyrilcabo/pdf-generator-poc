'use client';
import React, { useState } from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';

import PDFDocument from './components/PDFDocument';
import Chart from './components/Charts';

const App = () => {
  const [chartLink, setChartLink] = useState('');
  const handleImageSet = (link: string) => {
    setChartLink(link);
  };
  return (
    <div className="h-[100vh] w-full flex-col flex items-center justify-center p-20">
      <PDFViewer className="h-full w-full" height={700}>
        <PDFDocument chartLink={chartLink} />
      </PDFViewer>
      <div className="h-[300px] w-[300px] absolute -top-[300px]">
        <Chart onImageSet={handleImageSet} />
      </div>
      <PDFDownloadLink document={<PDFDocument chartLink={chartLink} />} fileName='download-test.pdf'>
        {() => 'Download PDF'}
      </PDFDownloadLink>
    </div>
  );
};

export default App;
