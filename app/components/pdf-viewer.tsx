"use client";

import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

interface PdfViewerProps {
  file: string;
  width: number;
}

export default function PdfViewer({ file, width }: PdfViewerProps) {
  return (
    <Document
      file={file}
      loading={<div className="w-full aspect-[1/1.41] bg-white/60 animate-pulse"></div>}
    >
      <Page
        pageNumber={1}
        renderAnnotationLayer={false}
        renderTextLayer={false}
        width={width}
      />
    </Document>
  );
}
