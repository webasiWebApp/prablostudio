const nodemailer = require('nodemailer');

const SMTP_HOST = 'smtp-relay.brevo.com';
const SMTP_PORT = 587;
const SMTP_USER = 'a2637e001@smtp-brevo.com';
const SMTP_PASS = 'xsmtpsib-898a7c9043e991645157016d4f35eeda292607736768841825398eb2fbbd4da0-EcyO1ezL6tQFTuCx';
const RECIPIENT = 'prablo360@gmail.com';

async function testEmail() {
    console.log('Using SMTP Settings:');
    console.log('Host:', SMTP_HOST);
    console.log('Port:', SMTP_PORT);
    console.log('User:', SMTP_USER);

    const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: false,
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASS,
        },
    });

    try {
        console.log('Attempting to send test email...');
        const info = await transporter.sendMail({
            from: `"Prablo Studio Test" <${SMTP_USER}>`,
            to: RECIPIENT,
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
