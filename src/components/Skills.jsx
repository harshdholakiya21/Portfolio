import React, { useState, useEffect } from "react"
import SkillsSection from "./SkillsSection"

export default function Skills() {
  const [skillsData, setSkillsData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('/api/skills')
        if (!response.ok) {
          throw new Error('Failed to fetch skills')
        }
        const data = await response.json()
        setSkillsData(data)
      } catch (err) {
        console.error('Error fetching skills:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchSkills()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="text-2xl animate-pulse">Loading Skills...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="text-xl text-red-500">Error: {error}</div>
      </div>
    )
  }

  return (
    <>
      <SkillsSection data={skillsData} />
    </>
  )
}
