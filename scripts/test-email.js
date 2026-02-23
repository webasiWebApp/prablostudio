const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(__dirname, '../../.env.local') });

async function testEmail() {
    console.log('Using SMTP Settings:');
    console.log('Host:', process.env.SMTP_HOST || 'smtp-relay.brevo.com');
    console.log('Port:', process.env.SMTP_PORT || 587);
    console.log('User:', process.env.SMTP_USER);

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp-relay.brevo.com',
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {
        console.log('Attempting to send test email...');
        const info = await transporter.sendMail({
            from: `"Prablo Studio Test" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_FORM_TO_EMAIL || "prablo360@gmail.com",
            subject: "Brevo SMTP Test Success",
            text: "The contact form backend is now correctly configured to use Brevo SMTP.",
            html: "<b>The contact form backend is now correctly configured to use Brevo SMTP.</b>",
        });
        console.log('Message sent: %s', info.messageId);
        console.log('Full Response:', info);
    } catch (error) {
        console.error('Error occurred while sending test email:', error);
    }
}

testEmail();
