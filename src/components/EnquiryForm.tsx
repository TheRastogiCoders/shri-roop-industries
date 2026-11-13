"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { company, materialOptions } from "@/lib/site";

type Fields = {
  name: string;
  phone: string;
  material: string;
  quantity: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = {
  name: "",
  phone: "",
  material: "",
  quantity: "",
  message: "",
};

function oneLine(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function phoneDigits(value: string) {
  return value.replace(/\D/g, "");
}

function buildSlip(values: Fields) {
  return [
    "Enquiry — Shri Roop Industries Pvt. Ltd.",
    `Name: ${oneLine(values.name)}`,
    `Phone: ${oneLine(values.phone)}`,
    `Material: ${oneLine(values.material)}`,
    `Approximate quantity: ${oneLine(values.quantity) || "Not stated"}`,
    `Note: ${values.message.trim() || "—"}`,
  ].join("\n");
}

export function EnquiryForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [slip, setSlip] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const materialRef = useRef<HTMLSelectElement>(null);
  const slipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!copied) {
      return;
    }
    const id = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(id);
  }, [copied]);

  useEffect(() => {
    if (!slip) {
      return;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    slipRef.current?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "nearest",
    });
  }, [slip]);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  function validate(values: Fields) {
    const next: Errors = {};
    if (oneLine(values.name).length < 2) {
      next.name = "Enter your name.";
    }
    const digits = phoneDigits(values.phone);
    if (digits.length < 10 || digits.length > 13) {
      next.phone = "Enter a phone number we can reach you on.";
    }
    if (!values.material) {
      next.material = "Choose a material.";
    }
    if (values.message.trim().length > 1000) {
      next.message = "Keep the note under 1000 characters.";
    }
    return next;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate(fields);
    setErrors(next);
    if (Object.keys(next).length > 0) {
      if (next.name) {
        nameRef.current?.focus();
      } else if (next.phone) {
        phoneRef.current?.focus();
      } else if (next.material) {
        materialRef.current?.focus();
      }
      return;
    }
    setCopied(false);
    setCopyFailed(false);
    setSlip(buildSlip(fields));
  }

  async function copySlip() {
    try {
      await navigator.clipboard.writeText(slip);
      setCopied(true);
      setCopyFailed(false);
    } catch {
      setCopied(false);
      setCopyFailed(true);
    }
  }

  function sendWhatsApp() {
    window.open(
      `https://wa.me/${company.phoneWhatsApp}?text=${encodeURIComponent(slip)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <div className="enquiry">
      <h2>Prepare an enquiry slip</h2>
      <p className="form-note">
        Write what you are bringing. Copy the slip, open it in WhatsApp to{" "}
        {company.phoneDisplay}, or email {company.email}. A rate is confirmed
        only after the metal is seen and weighed at Panipat.
      </p>
      <form onSubmit={onSubmit} noValidate>
        <div className="form-grid">
          <div className={errors.name ? "field has-error" : "field"}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              ref={nameRef}
              name="name"
              autoComplete="name"
              value={fields.name}
              maxLength={80}
              aria-invalid={errors.name ? true : undefined}
              aria-describedby={errors.name ? "name-error" : undefined}
              onChange={(event) => update("name", event.target.value)}
            />
            {errors.name ? (
              <p id="name-error" className="field-error">
                {errors.name}
              </p>
            ) : null}
          </div>
          <div className={errors.phone ? "field has-error" : "field"}>
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              ref={phoneRef}
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="10-digit mobile"
              value={fields.phone}
              maxLength={20}
              aria-invalid={errors.phone ? true : undefined}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              onChange={(event) => update("phone", event.target.value)}
            />
            {errors.phone ? (
              <p id="phone-error" className="field-error">
                {errors.phone}
              </p>
            ) : null}
          </div>
          <div className={errors.material ? "field has-error" : "field"}>
            <label htmlFor="material">Material</label>
            <select
              id="material"
              ref={materialRef}
              name="material"
              value={fields.material}
              aria-invalid={errors.material ? true : undefined}
              aria-describedby={errors.material ? "material-error" : undefined}
              onChange={(event) => update("material", event.target.value)}
            >
              <option value="">Select a material</option>
              {materialOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.material ? (
              <p id="material-error" className="field-error">
                {errors.material}
              </p>
            ) : null}
          </div>
          <div className="field">
            <label htmlFor="quantity">Approximate quantity</label>
            <input
              id="quantity"
              name="quantity"
              placeholder="e.g. 800 kg or one tempo"
              value={fields.quantity}
              maxLength={80}
              onChange={(event) => update("quantity", event.target.value)}
            />
          </div>
          <div className={errors.message ? "field field-span has-error" : "field field-span"}>
            <label htmlFor="message">Note</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={fields.message}
              maxLength={1000}
              placeholder="Form, condition, and whether the lot is already at the yard."
              aria-invalid={errors.message ? true : undefined}
              aria-describedby={errors.message ? "message-error" : undefined}
              onChange={(event) => update("message", event.target.value)}
            />
            {errors.message ? (
              <p id="message-error" className="field-error">
                {errors.message}
              </p>
            ) : null}
          </div>
        </div>
        <div className="actions form-actions">
          <button className="btn btn-copper" type="submit">
            {slip ? "Update slip" : "Prepare enquiry slip"}
          </button>
        </div>
      </form>
      <p className="sr-only" aria-live="polite">
        {copied ? "Enquiry slip copied." : ""}
      </p>
      {slip ? (
        <div className="slip-block" aria-live="polite" ref={slipRef}>
          <p className="kicker kicker-on-dark">Enquiry slip</p>
          <pre>{slip}</pre>
          <div className="actions">
            <button type="button" className="btn btn-copper" onClick={copySlip}>
              {copied ? "Copied" : "Copy slip"}
            </button>
            <button type="button" className="btn btn-ghost" onClick={sendWhatsApp}>
              Open in WhatsApp
            </button>
          </div>
          {copyFailed ? (
            <p className="fine">Select the slip above and copy it from there.</p>
          ) : (
            <p className="fine">
              WhatsApp will ask which chat to use. You can also bring the same
              details to the yard.
            </p>
          )}
        </div>
      ) : null}
    </div>
  );
}
