const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { to_email, from_name, from_email, message, phone, job_title, cover_letter } = JSON.parse(event.body);

    let emailBody;
    let subject;

    if (job_title && cover_letter) {
      subject = 'New Job Application';
      emailBody = `
        New Job Application:
        Name: ${from_name}
        Email: ${from_email}
        Phone: ${phone}
        Job Title: ${job_title}
        Cover Letter: ${cover_letter}
      `;
    } else if (message) {
      subject = 'New Contact Form Submission';
      emailBody = `
        New Contact Form Submission:
        Name: ${from_name}
        Email: ${from_email}
        Message: ${message}
      `;
    } else {
      subject = 'New Valuation Request';
      emailBody = `
        New Valuation Request:
        ${JSON.stringify(JSON.parse(event.body), null, 2)}
      `;
    }

    const data = await resend.emails.send({
      from: 'SaasVest <onboarding@resend.dev>',
      to: [to_email],
      subject: subject,
      text: emailBody,
    });

    console.log('Email sent successfully:', data);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully', data }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error sending email', details: error.message }),
    };
  }
};