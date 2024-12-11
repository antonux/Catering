const nodemailer = require("nodemailer");

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_PORT === "465", // Set to true if using SSL (port 465 for SSL, 587 for TLS)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Define the email route
const sendEmailRoute = (app) => {
  app.post("/api/sendemail", async (req, res) => {
    const { to, subject, text } = req.body;

    // Validate input
    if (!to || !subject || !text) {
      return res.status(400).json({
        message: "Missing required fields",
        success: false,
      });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>${subject}</h2>
          <p>${text}</p>
          <hr />
          <small>Sent from your Event Management System</small>
        </div>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({
        message: "Email sent successfully",
        success: true,
      });
    } catch (error) {
      console.error("Email send error:", error);
      res.status(500).json({
        message: "Failed to send email",
        error: error.toString(),
        success: false,
      });
    }
  });
};

module.exports = sendEmailRoute;
