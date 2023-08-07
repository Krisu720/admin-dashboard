// import Template from "@/emails/index";
// import { NextResponse } from "next/server";
// import { Resend } from "resend";
// import { z } from "zod";

// const resend = new Resend(process.env.RESEND_API_KEY as string);

// const validateBody = z.object({
//   content: z.string(),
//   to: z.string(),
//   subject: z.string(),
// });
// export const POST = async (req: Request) => {
//   const body = await req.json();
//   try {
//     const { content, to, subject } = validateBody.parse(body);
//     const data = await resend.sendEmail({
//       from: "onboarding@resend.dev",
//       to: to.toLowerCase(),
//       subject: subject,
//       react: Template({ title: subject, content }),
//     });

//     if (data) {
//       return NextResponse.json({ message: "Email sent to " + to + "." });
//     } else throw new Error("Server didn't send email");
//   } catch (error) {
//     return NextResponse.json({ message: "Error occured." }, { status: 400 });
//   }
// };
