// pages/api/contact.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, phone, select, orderID, message } = req.body;
  console.log(name, email, phone, select, orderID, message )

  const transporter = nodemailer.createTransport({
    service: 'Gmail', // or use SMTP
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const mailBody = `
    📩 New Contact Submission from Sea Fucoidan

    🧑 Name: ${name}
    📧 Email: ${email}
    📱 Phone: ${phone}
    🔘 Inquiry Type: ${select}
    🧾 Order ID: ${orderID}

    📝 Message:
    ${message}
    `.trim();

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: 'Sea Fucoidan Contact Form',
      text: mailBody,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ success: false, error: err });
  }
}
