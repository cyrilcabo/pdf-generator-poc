import React from 'react';
import ReactPDF from '@react-pdf/renderer';
import { NextApiRequest, NextApiResponse } from 'next'; 

import PDFDocument from '../../../app/components/PDFDocument';

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const logoSrc = `http://${req.headers.host}/logo.png`;
  const pdfStream = await ReactPDF.renderToStream(<PDFDocument logoSrc={logoSrc} />);
  res.setHeader('Content-Type', 'application/pdf');
  pdfStream.pipe(res);
  pdfStream.on('end', () => console.log('PDF streamed'));
};
