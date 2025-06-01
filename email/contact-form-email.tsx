import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html lang="en">
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black font-sans">
          <Container>
            <Section className="bg-white border border-black my-10 px-10 py-6 rounded-md">
              <Heading as="h2" className="text-xl font-bold mb-3 leading-tight">
                New Contact Form Submission
              </Heading>

              <Text className="mb-4 whitespace-pre-line">{message}</Text>

              <Hr className="my-4 border-black" />

              <Text className="text-sm text-gray-700">
                Sender’s Email: <strong>{senderEmail}</strong>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
