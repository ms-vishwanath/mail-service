import {NextRequest, NextResponse} from "next/server";
import transporter from "@/helpers/transporter";

export const POST = async (request: NextRequest) => {
  try {
    const formData = await request.formData();
    console.log(formData);
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const text = formData.get("text") as string | null;
    const html = formData.get("html") as string | null;

    if (!email || !subject) {
      return NextResponse.json(
        {error: "Missing required fields: email, subject"},
        {status: 400}
      );
    }

    const files = formData.getAll("attachments") as File[];
    files.forEach(async (file) => {
      const buffer = Buffer.from(await file.arrayBuffer());
      const filename = file.name.replaceAll(" ", "_");
      const filetype = file.type;
      console.log(filename);
      console.log(buffer);
      console.log(filetype);
    });

    const attachments = await Promise.all(
      files.map(async (file) => {
        const buffer = Buffer.from(await file.arrayBuffer());
        return {
          filename: file.name,
          content: buffer,
          contentType: file.type,
        };
      })
    );
    console.log(files);
    console.log(attachments);

    const fromEmail = (transporter.options as any)?.auth?.user;

    await transporter.sendMail({
      from: `VISH MAIL SERVICE <${fromEmail}>`,
      to: email,
      subject,
      text: text || undefined,
      html: html || undefined,
      attachments,
    });

    return NextResponse.json(
      {message: "Email sent with attachments"},
      {status: 200}
    );
  } catch (error: any) {
    console.error("Email error:", error);
    return NextResponse.json(
      {
        error: "Failed to send email",
        details: error.message || error.toString(),
      },
      {status: 500}
    );
  }
};
