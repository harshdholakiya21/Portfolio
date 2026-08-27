import { MongoClient } from 'mongodb';

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase(uri) {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db('portfolio_contacts');

  cachedClient = client;
  cachedDb = db;
  return { client, db };
}

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  // Parse body if needed (Vercel parses automatically for JSON requests)
  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (e) {
      // ignore
    }
  }

  const { name, email, message } = body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Name, email, and message are required' });
  }

  const uri = process.env.MONGODB_URI || process.env.MONGO_URI;

  if (!uri) {
    console.warn('MONGODB_URI environment variable is not defined on Vercel.');
    return res.status(200).json({
      success: true,
      message: 'Message received (Fallback: MONGODB_URI not configured in Vercel environment variables)',
      data: { name, email, message, createdAt: new Date() }
    });
  }

  try {
    const { db } = await connectToDatabase(uri);
    const collection = db.collection('messages');

    const result = await collection.insertOne({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      createdAt: new Date(),
      source: 'harsh_portfolio',
      ip: req.headers['x-forwarded-for'] || req.socket?.remoteAddress || null,
      userAgent: req.headers['user-agent'] || null
    });

    return res.status(200).json({
      success: true,
      message: 'Message saved directly to MongoDB Atlas!',
      insertedId: result.insertedId
    });
  } catch (error) {
    console.error('MongoDB Atlas insertion error:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to save message to MongoDB Atlas',
      details: error.message
    });
  }
}
