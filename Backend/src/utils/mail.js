import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendemail = async (option) => {

    // Mailgen setup
    const mailGenerator = new Mailgen({

        theme: "default",

        product: {
            name: "Project Management System",
            link: "http://localhost:3000/",
        },
    });

    // Generate email text version
    const emailText = mailGenerator.generatePlaintext(
        option.mailGenerator
    );

    // Generate email HTML version
    const emailHtml = mailGenerator.generate(
        option.mailGenerator
    );

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({

        host: process.env.MAIL_TRAP_HOST,

        port: process.env.MAIL_TRAP_PORT,

        auth: {
            user: process.env.MAIL_TRAP_USER,
            pass: process.env.MAIL_TRAP_PASS,
        },
    });

    try {

        await transporter.sendMail({

            from: '"Project Management" <test@example.com>',

            to: option.email,

            subject: option.subject,

            text: emailText,

            html: emailHtml,
        });

        console.log("Email sent successfully");

    } catch (error) {

        console.error("Error sending email:", error);
    }
};

// Verify Email Template
const emailGenerate = (username, verify) => {

    return {

        body: {

            name: username,

            intro:
                "Welcome to our service! We're excited to have you on board.",

            action: {

                instructions:
                    "To verify your email, please click the button below:",

                button: {
                    color: "#22BC66",
                    text: "Verify Email",
                    link: verify,
                },
            },

            outro:
                "If you did not sign up for this account, please ignore this email.",
        },
    };
};

// Forgot Password Template
const forgetpasswordverify = (username, passwordreseturl) => {

    return {

        body: {

            name: username,

            intro:
                "We got a request to reset your password. If you did not make this request, please ignore this email.",

            action: {

                instructions:
                    "To reset your password, please click the button below:",

                button: {
                    color: "#22BC66",
                    text: "Reset Password",
                    link: passwordreseturl,
                },
            },

            outro:
                "If you did not request a password reset, please ignore this email.",
        },
    };
};

export {
    sendemail,
    emailGenerate,
    forgetpasswordverify,
};