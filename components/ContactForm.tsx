"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const FALLBACK_ENDPOINT: string = "https://formspree.io/f/mdapzjod";

// Interface voor Field component props
interface FieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  testid: string;
}

interface FormStatus {
  status: "idle" | "loading" | "success" | "error";
  errorMsg: string;
}

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus["status"]>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    const form = e.currentTarget;
    const data = new FormData(form);

    // Log voor debugging (verwijder in productie)
    console.log("Formspree endpoint:", FALLBACK_ENDPOINT);

    try {
      const res = await fetch(FALLBACK_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      // Log response status voor debugging
      console.log("Response status:", res.status, res.statusText);

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        let msg = "Er ging iets mis. Probeer het opnieuw.";
        try {
          const json = await res.json();
          console.log("Error response:", json);
          if (json?.errors?.[0]?.message) {
            msg = json.errors[0].message;
          } else if (json?.error) {
            msg = json.error;
          }
        } catch {
          msg = `Server fout (${res.status}). Probeer het later opnieuw.`;
        }
        setErrorMsg(msg);
        setStatus("error");
      }
    } catch (err: unknown) {
      console.error("Fetch error:", err);
      const errorMessage = err instanceof Error ? err.message : "Netwerkfout. Controleer je verbinding of probeer het later opnieuw.";
      setErrorMsg(errorMessage);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="bg-white border-2 border-black p-8 sm:p-12 shadow-brutal"
        data-testid="contact-form-success"
      >
        <CheckCircle2 size={48} className="text-[#FF4500] mb-4" strokeWidth={2.5} />
        <h3 className="font-heading font-extrabold uppercase text-3xl mb-2">
          Bedankt voor je bericht!
        </h3>
        <p className="text-base text-[#525252] max-w-prose">
          Ik neem binnen 24 uur (werkdagen) contact met je op. Tot snel.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border-2 border-black p-6 sm:p-10 shadow-brutal space-y-5"
      data-testid="contact-form"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Naam *" name="naam" required={true} testid="field-naam" />
        <Field label="Bedrijfsnaam" name="bedrijf" testid="field-bedrijf" />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="E-mail *" name="email" type="email" required={true} testid="field-email" />
        <Field label="Telefoon" name="telefoon" type="tel" testid="field-telefoon" />
      </div>

      <div>
        <label className="block font-heading uppercase text-xs font-bold tracking-widest mb-2">
          Bericht *
        </label>
        <textarea
          name="bericht"
          required
          rows={5}
          className="w-full border-2 border-black p-4 bg-[#FAFAFA] focus:bg-white focus:border-[#FF4500] outline-none transition-colors"
          data-testid="field-bericht"
        />
      </div>

      <div>
        <label className="block font-heading uppercase text-xs font-bold tracking-widest mb-2">
          Hoe heb je mij gevonden?
        </label>
        <select
          name="bron"
          className="w-full border-2 border-black p-4 bg-[#FAFAFA] focus:bg-white focus:border-[#FF4500] outline-none transition-colors"
          data-testid="field-bron"
          defaultValue=""
        >
          <option value="">Maak een keuze</option>
          <option value="Google">Google</option>
          <option value="Vrienden/kennissen">Vrienden / kennissen</option>
          <option value="Eigen netwerk">Eigen netwerk</option>
          <option value="Anders">Anders</option>
        </select>
      </div>

      {status === "error" && (
        <div className="flex items-start gap-2 border-2 border-black bg-[#FFE5DA] p-4" data-testid="contact-form-error">
          <AlertCircle size={20} className="text-[#FF4500] mt-0.5 shrink-0" />
          <p className="text-sm font-medium">{errorMsg}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="group inline-flex items-center gap-2 bg-[#FF4500] text-white font-heading font-bold uppercase tracking-wider border-2 border-black px-8 py-4 hover:bg-black hover:-translate-y-1 hover:shadow-brutal-sm transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        data-testid="contact-form-submit"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="animate-spin" size={18} /> Versturen...
          </>
        ) : (
          <>
            Verstuur aanvraag <Send size={18} className="group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
      <p className="text-xs text-[#525252]">
        Door dit formulier te versturen ga je akkoord met de verwerking van je gegevens
        om contact met je op te nemen.
      </p>
    </form>
  );
}

function Field({ label, name, type = "text", required = false, testid }: FieldProps) {
  return (
    <div>
      <label className="block font-heading uppercase text-xs font-bold tracking-widest mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full border-2 border-black p-4 bg-[#FAFAFA] focus:bg-white focus:border-[#FF4500] outline-none transition-colors"
        data-testid={testid}
      />
    </div>
  );
}
