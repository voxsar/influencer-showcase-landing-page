import FormSubmissionEmail from "@/emails/form-submission-template";
import { FormSchemaType } from "@/types";
import { render } from "@react-email/components";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendFormSubmissionEmail = async (formData: FormSchemaType) => {
  try {
    const { name, email, company, message } = formData;
    console.log(
      process.env.SMTP_USER,
      process.env.SMTP_PASSWORD,
      process.env.SMTP_HOST
    );
    const emailHtml = await render(
      FormSubmissionEmail({ name, email, storeUrl:company, message })
    );

    const info = await transporter.sendMail({
      from: '"InfluencerShowcase - Contact " <contact@artslabcreatives.com>',
      to: process.env.FORM_SUBMISSION_EMAIL,
      subject: "InfluencerShowcase contact Form Submission",
      html: emailHtml,
    });
    if (info.rejected.length > 0) {
      return { success: false };
    }
    if (info.accepted.length > 0) {
      return { success: true };
    }
    return { success: false };
  } catch (error) {
    return { success: false };
  }
};
