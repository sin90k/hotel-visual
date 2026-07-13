import { NextResponse } from "next/server";

const reviewRecipient = "sohoumin@gmail.com";
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "\"": "&quot;",
  "'": "&#39;",
}[character] || character));

export async function POST(request: Request) {
  const form = await request.formData();
  const email = String(form.get("email") || "").trim();
  const message = String(form.get("message") || "").trim();
  const propertyName = String(form.get("propertyName") || "Photo sample request");
  const websiteUrl = String(form.get("websiteUrl") || "");
  const serviceType = String(form.get("serviceType") || "Room Photo / OTA Assessment");
  const photos = form.getAll("photos").filter((item): item is File => item instanceof File && item.size > 0);
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  if (!message) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }

  if (!resendApiKey) {
    console.error("Review form email delivery is not configured. Missing RESEND_API_KEY.");
    return NextResponse.json({ error: "Email delivery is not configured." }, { status: 503 });
  }

  const attachments = await Promise.all(photos.map(async (photo) => ({
    filename: photo.name,
    content: Buffer.from(await photo.arrayBuffer()).toString("base64"),
  })));

  const emailResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM || "Rakko Stay <onboarding@resend.dev>",
      to: [reviewRecipient],
      reply_to: email,
      subject: `New Rakko Stay request · ${escapeHtml(serviceType)}${propertyName ? `: ${escapeHtml(propertyName)}` : ""}`,
      html: [
        "<h2>New assessment request</h2>",
        `<p><strong>Service:</strong> ${escapeHtml(serviceType)}</p>`,
        `<p><strong>Email:</strong> ${escapeHtml(email)}</p>`,
        `<p><strong>Property:</strong> ${escapeHtml(propertyName || "Not provided")}</p>`,
        `<p><strong>URL:</strong> ${escapeHtml(websiteUrl || "Not provided")}</p>`,
        `<p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>`,
      ].join(""),
      attachments,
    }),
  });

  if (!emailResponse.ok) {
    console.error("Failed to send review email", await emailResponse.text());
    return NextResponse.json({ error: "Email delivery failed." }, { status: 502 });
  }

  console.info("Property review request received", {
    recipient: reviewRecipient,
    serviceType,
    hasPropertyName: Boolean(propertyName),
    hasWebsiteUrl: Boolean(websiteUrl),
    hasPhotos: photos.length > 0,
    photoCount: photos.length,
    emailConfigured: true,
  });

  return NextResponse.json({ ok: true });
}
