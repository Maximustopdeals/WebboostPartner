"use client";

import { useState, useEffect } from "react";
import { ArrowUp, X } from "lucide-react";

const PHONE: string = "31642628242";
const PREFILL: string = "WebBoostPartner";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState<boolean>(false);
  const [waOpen, setWaOpen] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = (): void => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waLink: string = `https://wa.me/${PHONE}?text=${encodeURIComponent(PREFILL)}`;

  return (
    <>
      {/* Back to top - bottom left */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Terug naar boven"
        style={{
          position: "fixed",
          bottom: "80px",
          left: "24px",
          zIndex: 9999,
          width: "48px",
          height: "48px",
          display: "grid",
          placeItems: "center",
          backgroundColor: showTop ? "#FF4500" : "#1a1a1a",
          color: "#ffffff",
          border: "2px solid #000000",
          boxShadow: "4px 4px 0 0 #0A0A0A",
          cursor: "pointer",
          opacity: 1,
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => { 
          (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-4px)"; 
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#FF4500"; 
        }}
        onMouseLeave={(e) => { 
          (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; 
          if (!showTop) (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1a1a1a"; 
        }}
      >
        <ArrowUp size={22} strokeWidth={3} />
      </button>

      {/* WhatsApp - bottom right */}
      <div style={{ position: "fixed", bottom: "80px", right: "24px", zIndex: 9999 }}>
        {waOpen && (
          <div style={{
            marginBottom: "16px",
            width: "320px",
            backgroundColor: "#ffffff",
            border: "2px solid #000000",
            boxShadow: "6px 6px 0 0 #0A0A0A",
            animation: "fadeUp 0.25s ease-out",
          }}>
            {/* Header */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 16px",
              borderBottom: "2px solid #000000",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#25D366",
                  display: "grid",
                  placeItems: "center",
                  border: "2px solid #000",
                }}>
                  <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontWeight: 800, fontSize: "14px", textTransform: "uppercase", fontFamily: "var(--font-outfit), sans-serif" }}>
                    WEBBOOSTPARTNER
                  </p>
                  <p style={{ fontSize: "12px", color: "#25D366", fontWeight: 600, display: "flex", alignItems: "center", gap: "4px" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#25D366" }} />
                    Online
                  </p>
                </div>
              </div>
              <button onClick={() => setWaOpen(false)} style={{ background: "none", border: "none", cursor: "pointer" }}>
                <X size={18} strokeWidth={2.5} />
              </button>
            </div>

            {/* Body */}
            <div style={{ padding: "16px", backgroundColor: "#FAFAFA" }}>
              <div style={{ border: "2px solid #000", backgroundColor: "#fff", padding: "12px", fontSize: "14px", lineHeight: 1.6, marginBottom: "16px" }}>
                Hallo! Hoe kan ik u helpen met een snelle, moderne website?
              </div>
              <a href={waLink} target="_blank" rel="noopener noreferrer" style={{
                display: "block",
                width: "100%",
                textAlign: "center",
                backgroundColor: "#25D366",
                color: "#ffffff",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontSize: "14px",
                border: "2px solid #000",
                padding: "12px",
                textDecoration: "none",
                fontFamily: "var(--font-outfit), sans-serif",
              }}>
                START CHAT
              </a>
            </div>
          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setWaOpen(!waOpen)}
          style={{
            width: "56px",
            height: "56px",
            backgroundColor: "#25D366",
            color: "#fff",
            border: "2px solid #000",
            boxShadow: "4px 4px 0 0 #0A0A0A",
            display: "grid",
            placeItems: "center",
            cursor: "pointer",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => { 
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-4px)"; 
          }}
          onMouseLeave={(e) => { 
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; 
          }}
        >
          {waOpen ? <X size={26} strokeWidth={3} /> : (
            <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
