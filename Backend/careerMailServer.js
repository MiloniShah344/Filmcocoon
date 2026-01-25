// careerMailServer.js
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import multer from 'multer';
import dotenv from 'dotenv';
import fs from 'fs';
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();
app.use(cors());
app.use(express.json());

// Configure multer for file uploads
const upload = multer({ 
  dest: 'uploads/',
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

// Create nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// Verify transporter configuration on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Transporter configuration error:', error);
  } else {
    console.log('✅ Mail server is ready to send emails');
  }
});

// --- CAREER APPLICATION ROUTE ---
app.post('/api/sendCareerApplication', upload.single('resume'), async (req, res) => {
  const { name, email, phone, message, resumeLink } = req.body;
  const resume = req.file;

  console.log('📧 Received career application from:', name);

  try {
    const mailOptions = {
      from: `"FilmCocoon Careers" <${process.env.GMAIL_SENDER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Career Application - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ea580c; border-bottom: 3px solid #ea580c; padding-bottom: 10px;">
            🎬 New Career Application Received
          </h2>
          <div style="background-color: #f5f5f4; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            ${resumeLink ? `<p><strong>Resume Link:</strong> <a href="${resumeLink}" target="_blank">${resumeLink}</a></p>` : ''}
            ${message ? `<p><strong>Message:</strong></p><p style="background-color: white; padding: 15px; border-left: 4px solid #ea580c; border-radius: 5px;">${message}</p>` : ''}
          </div>
          <p style="color: #78716c; font-size: 12px; margin-top: 30px;">
            — Sent from FilmCocoon Careers Form
          </p>
        </div>
      `,
      attachments: resume
        ? [{ 
            filename: resume.originalname || 'resume.pdf', 
            path: resume.path 
          }]
        : [],
    };

    await transporter.sendMail(mailOptions);
    
    // Clean up uploaded file
    if (resume && fs.existsSync(resume.path)) {
      fs.unlinkSync(resume.path);
    }

    console.log('✅ Career application email sent successfully');
    res.status(200).json({ success: true, message: 'Application sent successfully' });
  } catch (err) {
    console.error('❌ Error sending career application email:', err);
    
    // Clean up file even if email fails
    if (resume && fs.existsSync(resume.path)) {
      fs.unlinkSync(resume.path);
    }
    
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

// --- CONTACT MAIL ROUTE ---
app.post("/send-contact-mail", async (req, res) => {
  const { name, email, phone, message } = req.body;

  console.log('📧 Received contact message from:', name);

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Missing required fields" });
  }

  const mailOptions = {
    from: `"FilmCocoon Contact" <${process.env.GMAIL_SENDER}>`,
    to: process.env.GMAIL_USER,
    replyTo: email,
    subject: `📩 New Message from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #ea580c; border-bottom: 3px solid #ea580c; padding-bottom: 10px;">
          📩 New Contact Message Received
        </h2>
        <div style="background-color: #f5f5f4; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: white; padding: 15px; border-left: 4px solid #ea580c; border-radius: 5px;">
            ${message}
          </p>
        </div>
        <p style="color: #78716c; font-size: 12px; margin-top: 30px;">
          — Sent from FilmCocoon Contact Form
        </p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Contact mail sent successfully");
    res.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending contact mail:", error);
    res.status(500).json({ success: false, error: "Failed to send message" });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Mail server is running' });
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`🚀 Career Mail Server running on http://localhost:${PORT}`);
  console.log(`📧 Emails will be sent to: filmcocoon25@gmail.com`);
});