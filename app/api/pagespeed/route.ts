import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  const strategy = searchParams.get("strategy") || "mobile";

  if (!url) {
    return NextResponse.json(
      { error: "URL is verplicht" },
      { status: 400 }
    );
  }

  const apiKey = process.env.PAGESPEED_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "API key niet geconfigureerd. Voeg PAGESPEED_API_KEY toe aan je environment variables." },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=${strategy}&key=${apiKey}&category=performance&category=accessibility&category=best-practices&category=seo`,
      { next: { revalidate: 0 } }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "PageSpeed scan mislukt. Controleer of de URL bereikbaar is." },
        { status: 502 }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Scan mislukt. Controleer de URL en probeer het opnieuw." },
      { status: 500 }
    );
  }
}
