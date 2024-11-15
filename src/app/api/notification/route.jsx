import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export default async (req) => {
  const { body } = req;
  const { name, email, message, number } = body;

  const transporter = nodemailer.createTransport({
     host: "smtp.ethereal.email",
         port: 587,
         secure: false,
         auth: {
         user: 'Mothers2001@gmail.com',
         pass: 'jraq dddh icau flau',
         },
  });

  const info = await transporter.sendMail({
    from: "your.email@gmail.com",
    to: "tanwar0210@gmail.com",
    subject: "New Message from Contact Form",
    text: `Name: ${name} \n Email: ${email} \n Number:${number} \n Message: ${message}`,
  });

  return NextResponse.json({ info });
};
