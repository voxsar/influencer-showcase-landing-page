import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Button,
  Hr,
} from "@react-email/components";

interface FormSubmissionEmailProps {
  name: string;
  email: string;
  storeUrl?: string;
  message: string;
}

export default function FormSubmissionEmail({
  name,
  email,
  storeUrl,
  message,
}: FormSubmissionEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New form submission received from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header with Company Title */}
          <Section style={header}>
            <Heading style={headerTitle}>Influencer Showcase</Heading>
          </Section>

          {/* Intro */}
          <Section style={content}>
            <Heading style={greeting}>New Submission from {name}</Heading>
            <Text style={confirmationText}>
              A new form submission has been received. Please review the details
              below and follow up accordingly.
            </Text>

            {/* Submission Details Card */}
            <Section style={card}>
              <Heading style={cardTitle}>Customer Details</Heading>

              <Section style={detailRow}>
                <Text style={detailLabel}>Name:</Text>
                <Text style={detailValue}>{name}</Text>
              </Section>

              <Section style={detailRow}>
                <Text style={detailLabel}>Email:</Text>
                <Text style={detailValue}>{email}</Text>
              </Section>

              {storeUrl && (
                <Section style={detailRow}>
                  <Text style={detailLabel}>Store URL:</Text>
                  <Text style={detailValue}>{storeUrl}</Text>
                </Section>
              )}
            </Section>

            {/* Message Card */}
            <Section style={card}>
              <Heading style={cardTitle}>Customer Message</Heading>
              <Text style={messageText}>{message}</Text>
            </Section>

            {/* Call to Action */}
            <Section style={ctaSection}>
              <Button style={ctaButton} href={`mailto:${email}`}>
                Reply to Customer
              </Button>
            </Section>

            <Hr style={divider} />

            {/* Footer */}
            <Section style={footer}>
              <Text style={footerText}>
                Automated Notification System
                <br />
                Customer Success Team
              </Text>
              <Text style={footerText}>
                © {new Date().getFullYear()} influencerShowcase.com — All rights
                reserved.
              </Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  margin: "0",
  width: "100%",
  padding: "0",
};

const container = {
  backgroundColor: "#ffffff",
  width: "100%",
  minWidth: "100%",
  margin: "0 auto",
  padding: "0",
};

const header = {
  backgroundColor: "#4B3F84",
  padding: "32px 24px",
  textAlign: "center" as const,
  width: "100%",
};

const headerTitle = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "600",
  margin: "0",
  lineHeight: "1.2",
};

const content = {
  padding: "32px 24px",
};

const greeting = {
  color: "#4b5563",
  fontSize: "28px",
  fontWeight: "600",
  margin: "0 0 16px 0",
  lineHeight: "1.3",
};

const confirmationText = {
  color: "#4b5563",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 32px 0",
};

const card = {
  backgroundColor: "#f9f9f9",
  border: "1px solid #e0e0e0",
  borderRadius: "8px",
  padding: "24px",
  margin: "0 0 24px 0",
};

const cardTitle = {
  color: "#4b5563",
  fontSize: "18px",
  fontWeight: "600",
  margin: "0 0 16px 0",
  lineHeight: "1.3",
};

const detailRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  margin: "0 0 12px 0",
  borderBottom: "1px solid #e0e0e0",
  paddingBottom: "8px",
};

const detailLabel = {
  color: "#6b7280",
  fontSize: "14px",
  fontWeight: "500",
  margin: "0",
  width: "30%",
  lineHeight: "1.4",
};

const detailValue = {
  color: "#4b5563",
  fontSize: "14px",
  fontWeight: "400",
  margin: "0",
  width: "65%",
  lineHeight: "1.4",
  textAlign: "right" as const,
};

const messageText = {
  color: "#4b5563",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};

const ctaSection = {
  textAlign: "center" as const,
  margin: "32px 0",
};

const ctaButton = {
  backgroundColor: "#6366f1",
  borderRadius: "6px",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "12px 24px",
  border: "none",
  cursor: "pointer",
};

const divider = {
  borderColor: "#e0e0e0",
  margin: "32px 0",
};

const footer = {
  textAlign: "center" as const,
};

const footerText = {
  color: "#6b7280",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "0 0 16px 0",
};
