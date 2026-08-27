"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { AlertIcon, CheckCircleIcon } from "@/components/ui/icons";
import { CONTACT } from "@/data/site-config";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "not-configured" | "error";

interface FormValues {
  name: string;
  email: string;
  message: string;
  /** Honeypot — real visitors never see or fill this in. */
  company: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (values.message.trim().length < 10) errors.message = "Please add a short message (at least 10 characters).";
  return errors;
}

function inputClasses(invalid: boolean) {
  return cn(
    "mt-1.5 block w-full rounded-sm border bg-cream-50 px-4 py-2.5 text-base text-charcoal-900 transition-colors placeholder:text-charcoal-400 focus:border-brown-600 focus:outline-none",
    invalid ? "border-red-400" : "border-charcoal-900/15",
  );
}

const initialValues: FormValues = { name: "", email: "", message: "", company: "" };

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  function updateField<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json().catch(() => ({}))) as { sent?: boolean };

      if (!response.ok) {
        setStatus("error");
        return;
      }
      if (data.sent) {
        setStatus("success");
        setValues(initialValues);
      } else {
        // The API understood the request but no email service is configured yet.
        setStatus("not-configured");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex items-start gap-3 rounded-sm border border-olive-600/30 bg-olive-500/10 px-5 py-4 text-olive-700"
      >
        <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
        <p className="text-sm leading-relaxed">
          Thanks — your message has been sent. We&apos;ll get back to you as soon as we can.
        </p>
      </div>
    );
  }

  if (status === "not-configured") {
    return (
      <div
        role="status"
        className="flex items-start gap-3 rounded-sm border border-brown-300 bg-brown-100/50 px-5 py-4 text-brown-800"
      >
        <AlertIcon className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
        <p className="text-sm leading-relaxed">
          Thanks for writing — this form isn&apos;t connected to our email yet, so we won&apos;t see your
          message this way just yet.{" "}
          {CONTACT.phone.verified ? (
            <>
              Please call us on{" "}
              <a className="font-medium underline" href={`tel:${CONTACT.phone.value}`}>
                {CONTACT.phone.value}
              </a>
            </>
          ) : (
            "Please call us"
          )}
          {CONTACT.email.verified ? (
            <>
              {" "}
              or email{" "}
              <a className="font-medium underline" href={`mailto:${CONTACT.email.value}`}>
                {CONTACT.email.value}
              </a>
            </>
          ) : null}{" "}
          in the meantime.
        </p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5">
      {status === "error" ? (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-sm border border-red-300 bg-red-50 px-5 py-4 text-red-800"
        >
          <AlertIcon className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <p className="text-sm leading-relaxed">
            Something went wrong sending your message. Please try again, or contact us directly.
          </p>
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-charcoal-800">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClasses(Boolean(errors.name))}
          />
          {errors.name ? (
            <p id="name-error" className="mt-1.5 text-sm text-red-700">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-charcoal-800">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClasses(Boolean(errors.email))}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1.5 text-sm text-red-700">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-charcoal-800">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={inputClasses(Boolean(errors.message))}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-sm text-red-700">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={(event) => updateField("company", event.target.value)}
        />
      </div>

      <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
