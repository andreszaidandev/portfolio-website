"use client";

import { useState } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import resumePdf from "@/assets/AndresZaidan_Resume_Mar2026.pdf";
import "./resume.css";

export default function ResumeSection() {
  const [pdfError, setPdfError] = useState(false);

  return (
    <section id="resume" className="resume-section">
      <div className="resume-scroll-wrap">
        <ContainerScroll
          titleComponent={
            <>
              <p className="resume-title-eyebrow">
                Resume
              </p>

              <h2 className="resume-title-heading">
                Take my <br />
                <span className="resume-title-highlight">
                  Resume
                </span>
                
                <span/>
              </h2>
            </>
          }
        >
          <div className="resume-viewer-shell">
            {!pdfError ? (
              <>
                <iframe
                  src={`${resumePdf}#toolbar=0&navpanes=0&view=FitH`}
                  title="Andres Zaidan Resume"
                  className="resume-iframe"
                  onError={() => setPdfError(true)}
                />

                <div className="resume-actions">
                  <a
                    href={resumePdf}
                    target="_blank"
                    rel="noreferrer"
                    className="resume-btn resume-btn-viewer"
                  >
                    Open Viewer
                  </a>
                  <a
                    href={resumePdf}
                    download="AndresZaidan_Resume.pdf"
                    className="resume-btn resume-btn-download"
                  >
                    Download
                  </a>
                </div>

                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noreferrer"
                  className="resume-overlay-link"
                  aria-label="Open resume in PDF viewer"
                />
              </>
            ) : (
              <div className="resume-fallback">
                <div className="resume-fallback-content">
                  <p className="resume-fallback-title">
                    Resume preview unavailable
                  </p>
                  <p className="resume-fallback-text">
                    Could not load <code>resume.pdf</code> from your assets folder.
                  </p>
                  <div className="resume-fallback-actions">
                    <a
                      href={resumePdf}
                      target="_blank"
                      rel="noreferrer"
                      className="resume-btn resume-btn-fallback-open"
                    >
                      Open Resume
                    </a>
                    <a
                      href={resumePdf}
                      download="AndresZaidan_Resume.pdf"
                      className="resume-btn resume-btn-fallback-download"
                    >
                      Download Resume
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
}
