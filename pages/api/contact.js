import nodemailer from "nodemailer";

const transporter = {
  host: 'mail.privateemail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'team@codecortex.eu',
    pass: 'G@1@3133'
  }
};

const mailer = nodemailer.createTransport(transporter);

export default async (req, res) => {
  // console.log(req.body)
  const { name, email, number, subject, text } = req.body;
  console.log('Contacting...')
  const data = {
    // Update your email here
    to: "team@codecortex.eu",
    from: "team@codecortex.eu",
    subject: "Website Customer Enquiry",
    text: text,
    html: `
            <b>From:</b> ${name} <br /> 
            <b>Visitor Email:</b> ${email} <br /> 
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
