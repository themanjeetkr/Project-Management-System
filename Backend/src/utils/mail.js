import Mailgen from "mailgen";

const emailGenerate = (username, verify) => {
    return {
        body: {
            name: username,

            intro: "Welcome to our service! We're excited to have you on board.",

            action: {
                instructions: "To verify your email, please click the button below:",

                button: {
                    color: "#22BC66",
                    text: "Verify Email",
                    link: verify,
                },
            },

            outro: "If you did not sign up for this account, please ignore this email.",
        },
    };
};
// import Mailgen from "mailgen";

const forgetpasswordverify = (username, passwordreseturl) => {
    return {
        body: {
            name: username,

            intro: "we got a request to reset your password. If you did not make this request, please ignore this email.",

            action: {
                instructions: "To reset your password, please click the button below:",

                button: {
                    color: "#22BC66",
                    text: "Reset Password",
                    link: passwordreseturl,
                },
            },

            outro: "If you did not sign up for this account, please ignore this email.",
        },
    };
};
export { emailGenerate, forgetpasswordverify };