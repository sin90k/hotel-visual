import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const form = await request.formData();
  const email = String(form.get("email") || "");
  const propertyName = String(form.get("propertyName") || "");

  if (!email || !propertyName) {
    return NextResponse.json({ error: "Property name and email are required." }, { status: 400 });
  }

  // Placeholder integration point for Resend:
  // const resend = getResend();
  // await resend.emails.send({
  //   from: "Rakko Stay <reviews@ottervisual.com>",
  //   to: email,
  //   subject: "Property Review Request Received",
  //   html: confirmationEmail(propertyName),
  // });
  console.info("Property review request received", { propertyName, email });

  return NextResponse.json({ ok: true });
}
