import s from './Resume.module.scss';
import { ReactComponent as FilesIcon } from '../../assets/resume-files.svg';
import { ReactComponent as DownloadIcon } from '../../assets/download.svg';
import { useEffect, useRef, useState } from 'react';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import LinerProgress from '../../components/UIElements/LinerProgress/LinerProgress';
import Button from '../../components/UIElements/Button/Button';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';


// Set PDF.js worker URL dynamically
// Remove this line:
//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// Instead, use the following line to set workerSrc dynamically:
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/browse/pdfjs-dist@2.0.489/build/pdf.worker.min.js`;

// Update with the correct URL to your PDF hosted on GitHub
const resumeLink = 'https://github.com/atokic/atokic.github.io/raw/master/CV_eng_Ante%20Toki%C4%87.pdf';

const Resume = () => {
  const pdfWrapper = useRef(null);
  const [pdfPageWidth, setPdfPageWidth] = useState(null);

  useEffect(() => {
    // Calculate PDF wrapper width
    const updatePdfPageWidth = () => {
      setPdfPageWidth(pdfWrapper.current?.getBoundingClientRect().width || null);
    };
    updatePdfPageWidth(); // Initial calculation

    window.addEventListener('resize', updatePdfPageWidth); // Update on window resize
    return () => window.removeEventListener('resize', updatePdfPageWidth); // Cleanup
  }, []);

  const removeTextLayerOffset = () => {
    // Remove text layer offsets
    const textLayers = document.querySelectorAll('.react-pdf__Page__textContent');
    textLayers.forEach(layer => {
      const { style } = layer;
      style.top = '0';
      style.left = '0';
      style.transform = '';
    });
  };

  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.header}>
          <h1 className={s.title}>
            My <br /> Resume
          </h1>
          <div className={s.filesImg}>
            <FilesIcon />
          </div>
        </div>
        <Button
          style={{ margin: 'auto', width: '15rem' }}
          className="primary"
          href={resumeLink}
          target="_blank"
        >
          <DownloadIcon fill="#fff" />
          <span className={s.downloadText}>download resume</span>
          <span className={s.filename}>CV.pdf</span>
        </Button>
        <div className={s.pdfWrapper} ref={pdfWrapper}>
          <Document
            loading={<LinerProgress />}
            file={{ url: resumeLink  }}
          >
            <Page
              onLoadSuccess={removeTextLayerOffset}
              loading={<LinerProgress />}
              width={pdfPageWidth}
              pageNumber={1} // Adjust pageNumber as needed
            />
          </Document>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Resume;
