import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport(process.env.SMTP_URL as string);

export default transporter;
