import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
import Cors from "cors";

// Initialize the CORS middleware
const cors = Cors({
  methods: ["GET", "HEAD", "POST"],
});
const transporter = {
  auth: {
    // Update your SendGrid API key here
    api_key: "...",
  },
};

const mailer = nodemailer.createTransport(sgTransport(transporter));
export default async (req, res) => {
  await cors(req, res);
  // console.log(req.body)
  const { name, email, number, subject, text } = req.body;
  console.log("Contacting...");

  const data = {
    // Update your email here
    to: "team@codecortex.eu",
    from: email,
    subject: "Website Customer Enquiry",
    text: text,
    html: `
            <b>From:</b> ${name} <br /> 
            <b>Number:</b> ${number} <br /> 
            <b>Subject:</b> ${subject} <br /> 
            <b>Message:</b> ${text} 
        `,
  };
  try {
    const response = await mailer.sendMail(data);
    console.log(response);
    res.status(200).send("Email send successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error proccessing charge");
  }
};
