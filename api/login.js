export default function handler(req, res) {
  const { email, password } = req.body;

  // These will be stored securely in Vercel
  const VALID_EMAIL = process.env.VALID_EMAIL;
  const VALID_PASSWORD = process.env.VALID_PASSWORD;

  if (email === VALID_EMAIL && password === VALID_PASSWORD) {
    return res.status(200).json({ authenticated: true });
  } else {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
}
