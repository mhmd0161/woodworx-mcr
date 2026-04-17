// Vercel Serverless Function — GET /api/enquiries
// Placeholder — connect to a database for production use

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // TODO: Fetch from database
  return res.status(200).json([])
}
