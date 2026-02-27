import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

const MONGO_URI = process.env.MONGO_URI
const MONGO_DB = process.env.MONGO_DB || 'portfolio_db'

const skillsData = [
    {
        title: "Programming Languages",
        items: [
            { label: "JavaScript", value: 85 },
            { label: "Python", value: 80 },
            { label: "Java", value: 75 },
        ],
    },
    {
        title: "Web Development",
        items: [
            { label: "React", value: 85 },
            { label: "Tailwind CSS", value: 90 },
            { label: "HTML/CSS", value: 90 },
        ],
    },
    {
        title: "Backend & Databases",
        items: [
            { label: "Node.js/Express", value: 80 },
            { label: "MongoDB", value: 75 },
            { label: "REST APIs", value: 85 },
        ],
    },
    {
        title: "Tools & Technologies",
        items: [
            { label: "Git/GitHub", value: 85 },
            { label: "Vite", value: 80 },
            { label: "Responsive Design", value: 90 },
        ],
    },
]

const aboutData = {
    name: "Harsh Dholakiya",
    tagline: "I design and build modern web experiences, blending frontend polish with backend reliability.",
    description: "I'm a passionate developer specializing in full-stack web development with expertise in React, Tailwind CSS, and JavaScript. I build interactive applications with a focus on usability, performance, and clean design.",
    secondaryDescription: "I enjoy exploring AI/ML technologies, creating responsive interfaces, and working with modern tools to make applications production-ready.",
    education: [
        {
            degree: "B.Tech in Computer Science & Engineering (AI)",
            institution: "Parul University, Vadodara",
            period: "2023 - Present"
        },
        {
            degree: "Higher Secondary Certificate (HSC)",
            institution: "VL Gelani Vidhyabhavan",
            period: "2021 - 2023"
        }
    ],
    interests: [
        'Full Stack Development',
        'AI/ML',
        'Web Design',
        'Problem Solving',
        'Open Source',
        'Tech Innovation',
        'Database Design',
        'Cloud Computing',
        'API Development'
    ]
}

async function seed() {
    const client = new MongoClient(MONGO_URI)
    try {
        await client.connect()
        console.log('Connected to MongoDB for seeding...')
        const db = client.db(MONGO_DB)

        // Seed Skills
        const skillsColl = db.collection('skills')
        await skillsColl.deleteMany({}) // Clear existing
        await skillsColl.insertMany(skillsData)
        console.log('✅ Skills seeded successfully')

        // Seed About
        const aboutColl = db.collection('about')
        await aboutColl.deleteMany({}) // Clear existing
        await aboutColl.insertOne(aboutData)
        console.log('✅ About data seeded successfully')

    } catch (err) {
        console.error('❌ Seeding error:', err)
    } finally {
        await client.close()
        process.exit()
    }
}

seed()
