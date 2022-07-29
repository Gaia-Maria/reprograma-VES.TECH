require("dotenv-safe").config();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: "gaiamaria.melos@gmail.com",
  from: "gaiamaria.melos@gmail.com",
  subject: "Welcome to VES.TECH",
  text: "Congratulations, you`ve just signed up for the Ves.Tech community. You have just taken a step towards your professional success and we are happy to be a part of it.",
  html: "<strong>Congratulations, you`ve just signed up for the Ves.Tech community. You have just taken a step towards your professional success and we are happy to be a part of it.</strong>",
};
sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error(error);
  });
