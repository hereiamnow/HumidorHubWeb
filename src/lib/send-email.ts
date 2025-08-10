import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendThankYouEmail({ name, email }: { name: string; email: string }) {
    await resend.emails.send({
        from: 'team@humidorhub.com',
        to: email,
        subject: 'Thank you for joining the Humidor Hub Pilot Program!',
        html: `
      <h1>Welcome to the Humidor Hub Pilot Program!</h1>
      <p>Hi ${name},</p>
      <p>Thank you for signing up. We're excited to have you as one of our first testers. Here are your next steps:</p>
      <ol>
        <li>Watch your inbox for onboarding instructions and your Premium access code.</li>
        <li>Download the Humidor Hub app when invited.</li>
        <li>Share your feedback to help us improve!</li>
      </ol>
      <p>We appreciate your support and look forward to your insights.</p>
      <p>— The Humidor Hub Team</p>
    `,
    });
}
