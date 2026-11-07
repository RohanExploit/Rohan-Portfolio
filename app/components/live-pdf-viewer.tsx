"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FileText,
  Download,
  ExternalLink,
  ZoomIn,
  ZoomOut,
  Maximize2,
  CheckCircle2,
  Sparkles,
  Layers,
} from "lucide-react";

interface LivePdfViewerProps {
  title?: string;
  pdfUrl?: string;
  pages?: string[];
  initialPage?: number;
  className?: string;
}

export function LivePdfViewer({
  title = "Anthropic Claude for Startups Selection Document",
  pdfUrl = "/claude-for-startups.pdf",
  pages = [
    "/claude-pages/page-1.png",
    "/claude-pages/page-2.png",
    "/claude-pages/page-3.png",
  ],
  className = "",
}: LivePdfViewerProps) {
  const [mode, setMode] = useState<"stream" | "native">("stream");
  const [zoom, setZoom] = useState<number>(100);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 15, 145));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 15, 75));
  };

  const scrollToPage = (pageIdx: number) => {
    setCurrentPage(pageIdx + 1);
    const element = document.getElementById(`doc-page-${pageIdx + 1}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  return (
    <div
      className={`relative rounded-2xl border border-border bg-surface/80 p-3 sm:p-5 shadow-2xl backdrop-blur-xl ${
        isFullscreen
          ? "fixed inset-2 z-50 overflow-y-auto bg-background/95 sm:inset-6"
          : ""
      } ${className}`}
    >
      {/* Top Document Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 bg-surface/90 px-4 py-3 rounded-xl mb-4">
        {/* Document Status & Title */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <div className="hidden sm:block h-4 w-px bg-border" />
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-accent" />
            <span className="font-mono text-xs font-semibold text-text-primary truncate max-w-[200px] sm:max-w-xs md:max-w-sm">
              {title}
            </span>
          </div>
          <span className="hidden md:inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-400">
            <CheckCircle2 className="h-3 w-3" /> Live Rendered
          </span>
        </div>

        {/* View Controls & Actions */}
        <div className="flex items-center gap-2 font-mono text-xs">
          {/* Mode switch */}
          <div className="inline-flex rounded-lg border border-border bg-surface-alt p-0.5">
            <button
              onClick={() => setMode("stream")}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                mode === "stream"
                  ? "bg-accent text-white shadow-sm"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              Page Stream
            </button>
            <button
              onClick={() => setMode("native")}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                mode === "native"
                  ? "bg-accent text-white shadow-sm"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              PDF Frame
            </button>
          </div>

          {/* Zoom controls (for stream mode) */}
          {mode === "stream" && (
            <div className="hidden sm:flex items-center gap-1 rounded-lg border border-border bg-surface-alt px-2 py-1">
              <button
                onClick={handleZoomOut}
                aria-label="Zoom out"
                className="text-text-secondary hover:text-accent transition-colors p-0.5"
              >
                <ZoomOut className="h-3.5 w-3.5" />
              </button>
              <span className="text-[11px] font-medium text-text-tertiary px-1">
                {zoom}%
              </span>
              <button
                onClick={handleZoomIn}
                aria-label="Zoom in"
                className="text-text-secondary hover:text-accent transition-colors p-0.5"
              >
                <ZoomIn className="h-3.5 w-3.5" />
              </button>
            </div>
          )}

          {/* Fullscreen Toggle */}
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            aria-label="Toggle fullscreen view"
            className="hidden sm:inline-flex items-center gap-1 rounded-lg border border-border bg-surface px-2.5 py-1 text-text-secondary hover:border-accent hover:text-accent transition-all"
          >
            <Maximize2 className="h-3.5 w-3.5" />
            <span className="text-[11px]">
              {isFullscreen ? "Exit" : "Expand"}
            </span>
          </button>

          {/* Download Action */}
          <a
            href={pdfUrl}
            download="Claude_for_Startups_Rohan_Gaikwad.pdf"
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1 font-semibold text-white hover:bg-accent-dark transition-all shadow-sm"
          >
            <Download className="h-3.5 w-3.5" />
            <span>PDF</span>
          </a>

          {/* Open New Tab */}
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open PDF in new tab"
            className="inline-flex items-center rounded-lg border border-border bg-surface p-1.5 text-text-secondary hover:border-accent hover:text-accent transition-all"
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Page Navigation Tabs (for Stream mode) */}
      {mode === "stream" && (
        <div className="flex items-center justify-between px-2 pb-3 mb-2 border-b border-border/40 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="text-text-tertiary">Quick Jump:</span>
            {pages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToPage(idx)}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                  currentPage === idx + 1
                    ? "bg-accent/20 border border-accent text-accent"
                    : "bg-surface-alt border border-border/60 text-text-secondary hover:text-text-primary"
                }`}
              >
                Page {idx + 1}
              </button>
            ))}
          </div>
          <span className="text-text-tertiary text-[11px]">
            Scroll down to view all 3 pages
          </span>
        </div>
      )}

      {/* Main Document Body */}
      {mode === "stream" ? (
        <div className="relative max-h-[680px] sm:max-h-[780px] overflow-y-auto overflow-x-hidden rounded-xl border border-neutral-800 bg-neutral-950/90 p-4 sm:p-8 space-y-8 scroll-smooth">
          {pages.map((pageSrc, idx) => (
            <div
              key={idx}
              id={`doc-page-${idx + 1}`}
              className="mx-auto flex flex-col items-center transition-all duration-300"
              style={{ width: `${zoom}%`, maxWidth: "850px" }}
              onMouseEnter={() => setCurrentPage(idx + 1)}
            >
              {/* Page Number Pill */}
              <div className="flex items-center justify-between w-full pb-2 px-1 text-xs font-mono text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Official Page {idx + 1} of {pages.length}
                </span>
                <span className="text-[10px] text-neutral-500 uppercase tracking-widest">
                  Verified In-Browser
                </span>
              </div>

              {/* The Rendered High-DPI Page Frame */}
              <div className="relative w-full overflow-hidden rounded-lg border border-neutral-700 bg-white shadow-2xl transition-all hover:border-accent/60">
                <Image
                  src={pageSrc}
                  alt={`Claude for Startups selection document page ${idx + 1}`}
                  width={1224}
                  height={1584}
                  className="w-full h-auto object-contain block select-none"
                  priority={idx === 0}
                />
              </div>
            </div>
          ))}

          {/* End of Document Badge */}
          <div className="py-4 text-center font-mono text-xs text-neutral-500 flex items-center justify-center gap-2">
            <span className="h-px w-12 bg-neutral-800" />
            <span>End of Official Selection Document</span>
            <span className="h-px w-12 bg-neutral-800" />
          </div>
        </div>
      ) : (
        /* Native PDF Embed Viewer Mode */
        <div className="w-full h-[680px] sm:h-[780px] overflow-hidden rounded-xl bg-neutral-950 border border-neutral-800">
          <object
            data={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
            type="application/pdf"
            className="w-full h-full"
          >
            <iframe
              src={`${pdfUrl}#toolbar=1`}
              className="w-full h-full border-none"
              title="Official Selection PDF"
            >
              <div className="p-8 text-center text-text-secondary">
                <p>Inline PDF frame not directly supported on this browser.</p>
                <a
                  href={pdfUrl}
                  download
                  className="mt-4 inline-block text-accent underline font-semibold"
                >
                  Download Claude for Startups PDF
                </a>
              </div>
            </iframe>
          </object>
        </div>
      )}

      {/* Bottom Verification Strip */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-2 pt-2 border-t border-border/40 font-mono text-xs text-text-tertiary">
        <div className="flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-amber-400" />
          <span>
            Issued to: Rohan Gaikwad (212_2023_cse@yes.edu.in) · Rohan&apos;s
            Individual Org
          </span>
        </div>
        <div className="flex items-center gap-2 text-accent">
          <Layers className="h-3.5 w-3.5" />
          <span>Anthropic Claude for Startups Cohort 2026</span>
        </div>
      </div>
    </div>
  );
}
