import { NextResponse } from "next/server";
import { CONTACT } from "@/data/site-config";

/**
 * ============================================================================
 * CONTACT FORM API ROUTE
 * ============================================================================
 * There is currently no email service configured, so this route validates
 * submissions and logs them, but honestly reports `sent: false` rather than
 * pretending a message went anywhere. The contact form (see
 * src/components/contact/contact-form.tsx) shows a distinct "not connected
 * yet" state in that case — never a fake success.
 *
 * TO ACTUALLY SEND EMAILS:
 *   1. Create a free account at https://resend.com (or any provider you prefer).
 *   2. Verify a sending domain and generate an API key.
 *   3. Set RESEND_API_KEY in your Vercel project's environment variables.
 *   4. Set CONTACT.email in src/data/site-config.ts to a real, verified
 *      inbox and flip `verified: true`.
 * Once RESEND_API_KEY is present, the block below sends real emails and the
 * form will show its normal success state — no other code changes needed.
 * ============================================================================
 */

const MAX_LENGTH = { name: 200, email: 320, message: 5000 };

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= MAX_LENGTH.email;
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, message, company } = body as Record<string, unknown>;

  // Honeypot field: real visitors never fill this in. Pretend success so
  // bots don't learn to look elsewhere, but do nothing with the submission.
  if (typeof company === "string" && company.trim() !== "") {
    return NextResponse.json({ sent: false });
  }

  const isValid =
    typeof name === "string" &&
    name.trim().length >= 2 &&
    name.length <= MAX_LENGTH.name &&
    typeof email === "string" &&
    isValidEmail(email.trim()) &&
    typeof message === "string" &&
    message.trim().length >= 10 &&
    message.length <= MAX_LENGTH.message;

  if (!isValid) {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.info("[contact] submission received (no email service configured):", { name, email, message });
    return NextResponse.json({ sent: false });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Seasons Café Website <onboarding@resend.dev>",
      to: CONTACT.email.value,
      reply_to: email,
      subject: `New website message from ${name}`,
      text: message,
    }),
  });

  if (!response.ok) {
    console.error("[contact] email provider error:", response.status, await response.text().catch(() => ""));
    return NextResponse.json({ error: "Failed to send." }, { status: 502 });
  }

  return NextResponse.json({ sent: true });
}
