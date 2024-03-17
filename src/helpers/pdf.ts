// File: lib/pdf.ts

import { jsPDF } from 'jspdf';

export function generatePDF(data: string): string {
  const doc = new jsPDF();
  doc.text(data, 10, 10);
  return doc.output('datauristring');
}
