"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

// Ensure API key is provided
const resend = new Resend(process.env.RESEND_API_KEY ?? "");

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail")?.toString();
  const message = formData.get("message")?.toString();

  // ✅ Validate input
  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email." };
  }

  if (!validateString(message, 5000)) {
    return { error: "Invalid message." };
  }

  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "ahsanarsalan41@gmail.com", // ✅ your own email here
      subject: "Message from Portfolio Contact Form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message,
        senderEmail,
      }),
    });

    return { data };
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
};
