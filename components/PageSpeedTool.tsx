"use client";

import { useState } from "react";
import { Zap, Monitor, Smartphone, ArrowRight, Loader2 } from "lucide-react";

// Types voor PageSpeed API responses
interface LighthouseCategory {
  score: number;
}

interface LighthouseAudit {
  displayValue?: string;
}

interface LighthouseResult {
  categories: {
    performance?: LighthouseCategory;
    accessibility?: LighthouseCategory;
    "best-practices"?: LighthouseCategory;
    seo?: LighthouseCategory;
  };
  audits: {
    "largest-contentful-paint"?: LighthouseAudit;
    "cumulative-layout-shift"?: LighthouseAudit;
    "interaction-to-next-paint"?: LighthouseAudit;
    "first-contentful-paint"?: LighthouseAudit;
    "server-response-time"?: LighthouseAudit;
  };
}

interface PageSpeedResponse {
  lighthouseResult: LighthouseResult;
}

interface ScoresType {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
  lcp: string;
  cls: string;
  inp: string;
  fcp: string;
  ttfb: string;
}

// Helper functions — Google API geeft scores als 0-1, we tonen 0-100
function getScore(cat?: LighthouseCategory): number {
  if (!cat || typeof cat.score !== "number") return 0;
  return Math.round(cat.score * 100);
}

function getAuditValue(audit?: LighthouseAudit): string {
  if (!audit || !audit.displayValue || audit.displayValue === "") return "N/A";
  return audit.displayValue;
}

// Props interfaces
interface ScoreCircleProps {
  score: number;
}

interface ScoreInterpretationProps {
  score: number;
}

export default function PageSpeedTool() {
  const [url, setUrl] = useState<string>("");
  const [strategy, setStrategy] = useState<string>("mobile");
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<PageSpeedResponse | null>(null);
  const [error, setError] = useState<string>("");

  async function handleScan(): Promise<void> {
    if (!url.trim()) {
      setError("Voer een URL in.");
      return;
    }
    setError("");
    setLoading(true);
    setResult(null);

    let scanUrl: string = url.trim();
    if (!/^https?:\/\//i.test(scanUrl)) {
      scanUrl = "https://" + scanUrl;
    }

    try {
      const res = await fetch(
        `/api/pagespeed?url=${encodeURIComponent(scanUrl)}&strategy=${strategy}`
      );
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Scan mislukt. Controleer de URL.");
      }
      const data: PageSpeedResponse = await res.json();
      setResult(data);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Er ging iets mis. Probeer het opnieuw.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (e.key === "Enter") handleScan();
  }

  // Extract scores from normalized API response
  const cats = result?.lighthouseResult?.categories || {};
  const audits = result?.lighthouseResult?.audits || {};

  const scores: ScoresType | null = result
    ? {
        performance: getScore(cats.performance),
        accessibility: getScore(cats.accessibility),
        bestPractices: getScore(cats["best-practices"]),
        seo: getScore(cats.seo),
        lcp: getAuditValue(audits["largest-contentful-paint"]),
        cls: getAuditValue(audits["cumulative-layout-shift"]),
        inp: getAuditValue(audits["interaction-to-next-paint"]),
        fcp: getAuditValue(audits["first-contentful-paint"]),
        ttfb: getAuditValue(audits["server-response-time"]),
      }
    : null;

  return (
    <section className="bg-[#FAFAFA] py-20 sm:py-28 border
