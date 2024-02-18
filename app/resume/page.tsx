"use client";

import { Document, Page } from "react-pdf";
import { Footer } from "../components/footer";
import { LinkedParticles } from "../components/linked-particles";
import { pdfjs } from "react-pdf";
import { useWindowSize } from "@uidotdev/usehooks";
import { Title } from "../components/title";
import { OutlinedButton } from "../components/outlined-button";
import { FiDownload } from "react-icons/fi";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function ResumePage() {
  const {width} = useWindowSize();

  const getPageWidth = () => {
    const padding = 24;
    if (!width) return 200;
    if (width < 640) return width - padding * 2;
    if (width < 768) return 640 - padding * 2;
    if (width < 1024) return 768 - padding * 2;
    if (width < 1280) return 1024 - padding * 2;
    return 1280 - padding * 2;
  }

  return (
    <div className="min-h-screen flex flex-col gap-8 items-center justify-between">
      <main className="p-6 w-full max-w-md sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl flex flex-col gap-8 items-center">
        <Title text="Mon CV" />
        <div className="w-full rounded-3xl overflow-hidden">
          <Document 
            file="/cv-arnaud-petit.pdf"
            loading={<div className="w-full aspect-[1/1.41] bg-white/60 animate-pulse"></div>}
          >
            <Page
              pageNumber={1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              width={getPageWidth()}
            />
          </Document>
        </div>
        <a className="w-full" href="/cv-arnaud-petit.pdf">
          <OutlinedButton text="Télecharger" large={true} leftIcon={<FiDownload size={20} />} />
        </a>
      </main>
      <Footer
        name="Arnaud Petit"
        year="2024"
        sourceUrl="https://github.com/DotShark/portfolio"
      />
      <div className="fixed w-screen h-screen bg-dark-gradient -z-10"></div>
      <LinkedParticles />
    </div>
  );
} 