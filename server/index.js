const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Ensure data directory exists
const DATA_DIR = path.join(__dirname, 'data')
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR)
}

const ENQUIRIES_FILE = path.join(DATA_DIR, 'enquiries.json')

// Helper to read/write enquiries
function getEnquiries() {
  if (!fs.existsSync(ENQUIRIES_FILE)) return []
  const data = fs.readFileSync(ENQUIRIES_FILE, 'utf-8')
  return JSON.parse(data)
}

function saveEnquiries(enquiries) {
  fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(enquiries, null, 2))
}

// ─── ROUTES ───────────────────────────────────────────────

// POST /api/contact — receive a new enquiry
app.post('/api/contact', (req, res) => {
  const { name, email, phone, service, message } = req.body

  // Basic validation
  if (!name || !email || !phone || !service || !message) {
    return res.status(400).json({ error: 'All fields are required.' })
  }

  const enquiry = {
    id: Date.now().toString(),
    name,
    email,
    phone,
    service,
    message,
    createdAt: new Date().toISOString(),
  }

  const enquiries = getEnquiries()
  enquiries.push(enquiry)
  saveEnquiries(enquiries)

  console.log(`✅ New enquiry from ${name} (${service})`)

  res.status(201).json({ success: true, message: 'Enquiry received!' })
})

// GET /api/enquiries — list all enquiries (for admin use)
app.get('/api/enquiries', (req, res) => {
  const enquiries = getEnquiries()
  res.json(enquiries)
})

// Serve React build in production
if (process.env.NODE_ENV === 'production') {
  const clientBuild = path.join(__dirname, '..', 'client', 'dist')
  app.use(express.static(clientBuild))
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientBuild, 'index.html'))
  })
}

// Start server
app.listen(PORT, () => {
  console.log(`
  ╔══════════════════════════════════════╗
  ║   Wood Worx MCR — Server Running    ║
  ║   http://localhost:${PORT}              ║
  ╚══════════════════════════════════════╝
  `)
})
