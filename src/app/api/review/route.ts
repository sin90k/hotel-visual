import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const form = await request.formData();
  const email = String(form.get("email") || "");
  const propertyName = String(form.get("propertyName") || "Photo sample request");
  const websiteUrl = String(form.get("websiteUrl") || "");
  const photos = form.getAll("photos").filter((item) => item instanceof File && item.size > 0);

  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  // Placeholder integration point for Resend:
  // const resend = getResend();
  // await resend.emails.send({
  //   from: "Rakko Stay <reviews@ottervisual.com>",
  //   to: email,
  //   subject: "Property Review Request Received",
  //   html: confirmationEmail(propertyName),
  //   attachments: photos.map((photo) => ({ filename: photo.name, content: Buffer.from(await photo.arrayBuffer()) })),
  // });
  console.info("Property review request received", { propertyName, websiteUrl, email, photoCount: photos.length });

  return NextResponse.json({ ok: true });
}
