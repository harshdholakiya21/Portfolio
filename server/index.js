import express from 'express'
import cors from 'cors'
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017'
const MONGO_DB = process.env.MONGO_DB || 'portfolio_db'

let contactsColl

// CORS Configuration
const corsOptions = {
  origin: process.env.VITE_APP_URL || 'http://localhost:5173',
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(express.json())

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' })
})

// Get all contacts (for admin use - consider adding authentication)
app.get('/api/contacts', async (req, res) => {
  try {
    const docs = await contactsColl.find({}).sort({ receivedAt: -1 }).toArray()
    res.json(docs)
  } catch (err) {
    console.error('Error fetching contacts:', err)
    res.status(500).json({ error: 'Failed to fetch contacts' })
  }
})

// Get skills data
app.get('/api/skills', async (req, res) => {
  try {
    const db = req.app.locals.db
    const skillsColl = db.collection('skills')
    const skills = await skillsColl.find({}).toArray()
    res.json(skills)
  } catch (err) {
    console.error('Error fetching skills:', err)
    res.status(500).json({ error: 'Failed to fetch skills' })
  }
})

// Get about-me data
app.get('/api/about', async (req, res) => {
  try {
    const db = req.app.locals.db
    const aboutColl = db.collection('about')
    const aboutData = await aboutColl.findOne({})
    res.json(aboutData)
  } catch (err) {
    console.error('Error fetching about data:', err)
    res.status(500).json({ error: 'Failed to fetch about data' })
  }
})

// Submit contact form
app.post('/api/contacts', async (req, res) => {
  try {
    const { name, email, message } = req.body

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields: name, email, message' })
    }

    if (email.length > 254) {
      return res.status(400).json({ error: 'Email is too long' })
    }

    if (message.length > 5000) {
      return res.status(400).json({ error: 'Message is too long' })
    }

    const doc = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      receivedAt: new Date(),
      ip: req.ip,
    }

    const result = await contactsColl.insertOne(doc)
    doc._id = result.insertedId

    res.status(201).json({ ok: true, message: 'Contact saved successfully', contact: doc })
  } catch (err) {
    console.error('Error saving contact:', err)
    res.status(500).json({ error: 'Failed to save contact' })
  }
})

// Connect to MongoDB and start server
async function startServer() {
  try {
    console.log('Connecting to MongoDB...')
    const client = new MongoClient(MONGO_URI)
    await client.connect()
    console.log('Connected to MongoDB')

    const db = client.db(MONGO_DB)
    app.locals.db = db
    contactsColl = db.collection('contacts')

    app.listen(PORT, () => {
      console.log(`\n✅ Server running on http://localhost:${PORT}`)
      console.log(`📧 Contact endpoint: POST http://localhost:${PORT}/api/contacts`)
      console.log(`💾 Database: ${MONGO_DB}`)
    })
  } catch (err) {
    console.error('❌ Server startup error:', err)
    process.exit(1)
  }
}

startServer()
