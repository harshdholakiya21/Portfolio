import React, { useState, useEffect } from 'react'

const AboutMe = () => {
  const [aboutData, setAboutData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await fetch('/api/about')
        if (!response.ok) {
          throw new Error('Failed to fetch about data')
        }
        const data = await response.json()
        setAboutData(data)
      } catch (err) {
        console.error('Error fetching about data:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchAbout()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="text-2xl animate-pulse">Loading About...</div>
      </div>
    )
  }

  if (error || !aboutData) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="text-xl text-red-500">Error: {error || 'No data found'}</div>
      </div>
    )
  }

  return (
    <>

      <section className="relative overflow-hidden pt-36 pb-20 bg-linear-to-b from-black via-gray-900 to-gray-800 text-white" id="about">
        <div className="absolute -right-20 top-0 w-[55%] h-[90%] transform rotate-12 bg-linear-to-br from-black via-gray-900 to-gray-700 opacity-50 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left column: image and title */}
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-bold mb-4">About Me</h2>
              <p className="text-gray-300 text-lg">{aboutData.tagline}</p>

              <div className="mt-8 rounded-full overflow-hidden shadow-lg">
                <img
                  src="image/myphoto.png"
                  alt={aboutData.name}
                  className="w-full h-full object-cover "
                />
              </div>
            </div>

            {/* Right: content cards */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/6 border border-white/10 rounded-xl p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-3">Who I am</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {aboutData.description}
                </p>
                {aboutData.secondaryDescription && (
                  <p className="mt-4 text-gray-300 leading-relaxed text-lg">
                    {aboutData.secondaryDescription}
                  </p>
                )}
              </div>

              <div className="bg-white/6 border border-white/10 rounded-xl p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
                <div className="space-y-4">
                  {aboutData.education.map((edu, index) => (
                    <React.Fragment key={index}>
                      <div className="text-gray-300">
                        <div className="font-semibold text-white text-lg">{edu.degree}</div>
                        <div className="text-gray-400">{edu.institution} — {edu.period}</div>
                      </div>
                      {index < aboutData.education.length - 1 && <hr className="border-gray-700" />}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="bg-white/6 border border-white/10 rounded-xl p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Interests & Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  {aboutData.interests.map((tag) => (
                    <span key={tag} className="bg-linear-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 py-2 px-4 rounded-full text-sm border border-cyan-400/30 hover:border-cyan-400 transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutMe

