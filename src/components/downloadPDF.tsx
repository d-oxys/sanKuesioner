// File: components/DownloadPDF.tsx

import { FC, MouseEvent } from 'react';
import { generatePDF } from '@/helpers/pdf';

interface DownloadPDFProps {
  data: string;
}

const DownloadPDF: FC<DownloadPDFProps> = ({ data }) => {
  const handleDownload = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const pdfDataUri = generatePDF(data);
    const link = document.createElement('a');
    link.href = pdfDataUri;
    link.download = 'data.pdf';
    link.click();
  };

  return <button onClick={handleDownload}>Download PDF</button>;
};

export default DownloadPDF;
