import React, { useState, useEffect } from "react"

const Projects = () => {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/api/projects')
                if (!response.ok) {
                    throw new Error('Failed to fetch projects')
                }
                const data = await response.json()
                setProjects(data)
            } catch (err) {
                console.error('Error fetching projects:', err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchProjects()
    }, [])

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center text-white">
                <div className="text-2xl animate-pulse">Loading Projects...</div>
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
        <div className="bg-black min-h-screen pt-24 px-10 text-white">
            <h1 className="text-4xl font-bold mb-10 text-center">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all hover:scale-[1.02]">
                        {project.image && <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />}
                        <div className="p-6">
                            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                            <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                            <div className="flex gap-4">
                                {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm font-semibold">GitHub</a>}
                                {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 text-sm font-semibold">Live Demo</a>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
