import nodemailer from 'nodemailer';

const sendEmail = async (options = {}) => {
    const { email, subject, message, html } = options;
    const smtpUser = process.env.SMTP_MAIL ? process.env.SMTP_MAIL.trim() : '';
    const smtpPass = process.env.SMTP_PASSWORD
        ? process.env.SMTP_PASSWORD.replace(/\s+/g, '')
        : '';

    if (!smtpUser || !smtpPass || !process.env.SMTP_HOST) {
        throw new Error('Missing SMTP configuration (host, mail, or password).');
    }

    const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: smtpPort,
        secure: smtpPort === 465,
        service: process.env.SMTP_SERVICE || undefined,
        auth: {
            user: smtpUser,
            pass: smtpPass,
        },
    });

    const mailOptions = {
        from: smtpUser,
        to: email,
        subject: subject || '',
    };

    if (html) {
        mailOptions.html = html;
        mailOptions.text = message || '';
    } else {
        mailOptions.text = message || '';
    }

    return transporter.sendMail(mailOptions);
};

export default sendEmail;