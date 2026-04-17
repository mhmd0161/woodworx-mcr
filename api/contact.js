// Vercel Serverless Function — POST /api/contact
// In production you'd save to a database (Supabase, MongoDB, etc.)
// For now this returns success and logs the enquiry

export default function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

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

  // Log it (visible in Vercel function logs)
  console.log('✅ New enquiry:', JSON.stringify(enquiry, null, 2))

  // TODO: Save to a database (Supabase, Planetscale, MongoDB, etc.)
  // TODO: Send email notification (Resend, SendGrid, etc.)

  return res.status(201).json({ success: true, message: 'Enquiry received!' })
}
