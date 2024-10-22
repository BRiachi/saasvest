import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: any) {
  try {
    const { name, email, message } = formData;

    const data = await resend.emails.send({
      from: 'SaasVest <onboarding@resend.dev>',
      to: ['baz@saasvest.com'],
      subject: 'New Form Submission',
      html: `
        <h1>New Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    console.log(data);
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Failed to send email' };
  }
}