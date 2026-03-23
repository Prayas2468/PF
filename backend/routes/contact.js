const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
const Contact = require('../models/Contact')

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT || '465', 10),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER || 'prayas.punia.2205@gmail.com',
    pass: process.env.EMAIL_PASS || '', // Use Gmail App Password (not regular password)
  },
})

// POST /api/contact — Save a contact message and send email notification
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body

    // Manual validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'All fields (name, email, message) are required.',
      })
    }

    const emailRegex = /^\S+@\S+\.\S+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.',
      })
    }

    if (message.trim().length < 10) {
      return res.status(400).json({
        success: false,
        error: 'Message must be at least 10 characters long.',
      })
    }

    try {
      await transporter.sendMail({
        from: `${process.env.EMAIL_USER || 'prayas.punia.2205@gmail.com'}`,
        to: process.env.EMAIL_RECEIVER || 'prayas.punia.2205@gmail.com',
        subject: `Portfolio contact request from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br/>')}</p>`,
      })

      // Optional storage in DB (uncomment if using MongoDB model)
      // await Contact.create({ name: name.trim(), email: email.trim().toLowerCase(), message: message.trim() })

      return res.status(201).json({
        success: true,
        message: 'Your message has been received! I will get back to you soon.',
      })
    } catch (emailErr) {
      console.error('Email send error:', emailErr)
      return res.status(500).json({ success: false, error: 'Unable to send email. Please try again later.' })
    }
  } catch (err) {
    // Mongoose validation errors
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map((e) => e.message)
      return res.status(400).json({ success: false, error: errors[0] })
    }
    console.error('Contact route error:', err)
    return res.status(500).json({ success: false, error: 'Server error. Please try again later.' })
  }
})

// GET /api/contact — Retrieve all messages (protected in production — add auth middleware)
router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 }).limit(50)
    return res.status(200).json({ success: true, count: messages.length, data: messages })
  } catch (err) {
    console.error('Fetch contacts error:', err)
    return res.status(500).json({ success: false, error: 'Server error.' })
  }
})

module.exports = router
