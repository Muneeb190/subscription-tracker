import nodemailer from 'nodemailer';
import { EMAIL_PASSWORD } from './env.js';

export const accountEmail = 'muneebkhan.mk2018@gmail.com';

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465, // secure
  secure: true,
  auth: {
    user: accountEmail,
    pass: EMAIL_PASSWORD, // should be an "App Password", not your Gmail password
  },
});


export default transporter;
