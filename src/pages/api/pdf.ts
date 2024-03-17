import { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';

const saveAsPdf = async (url: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: 'networkidle0', timeout: 0 });

  // Tunggu selama 15 detik
  await new Promise((resolve) => setTimeout(resolve, 10000));

  const result = await page.pdf({ format: 'A3' });
  await browser.close();
  return result;
};

const generatePdf = async (req: NextApiRequest, res: NextApiResponse) => {
  const { url } = req.query;
  res.setHeader('Content-Disposition', `attachment; filename="file.pdf"`);
  res.setHeader('Content-Type', 'application/pdf');
  const pdf = await saveAsPdf(url as string);
  return res.send(pdf);
};

export default generatePdf;
