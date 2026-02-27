import React, { useState } from "react"

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", msg: "Please fill out all fields." })
      return
    }

    setStatus({ type: 'loading', msg: 'Sending...' })

    // Replace with your backend API endpoint
    fetch('/api/contacts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
      .then(async (res) => {
        if (!res.ok) {
          const body = await res.json().catch(() => ({}))
          throw new Error(body.error || 'Server error')
        }
        return res.json()
      })
      .then(() => {
        setStatus({ type: 'success', msg: 'Message sent successfully! Thank you!' })
        setForm({ name: '', email: '', message: '' })
      })
      .catch((err) => {
        console.error(err)
        setStatus({ type: 'error', msg: 'Failed to send message. Please try again.' })
      })
  }

  return (
    <>
      <div className="min-w-full min-h-screen bg-linear-to-b from-black via-gray-900 to-gray-800 text-white">


        <section className="pt-36 pb-20 max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Get In Touch</h2>

          <div className="bg-white/6 border border-white/10 rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 hover:border-white/20 hover:shadow-2xl transition-all duration-300">
            {/* Info column */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
              <p className="text-gray-300 mb-8">
                Have a project in mind or want to collaborate? I'd love to hear from you!
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email Address</p>
                  <a href="mailto:contact@example.com" className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-semibold">
                    harshdholakiya2111@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-gray-400 text-sm mb-1">Location</p>
                  <p className="text-white text-lg">Remote</p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm mb-3">Social Links</p>
                  <div className="flex gap-4">
                    <a href="https://github.com/harshdholakiya21" target='_blank' aria-label="GitHub" className="w-12 h-12 rounded-lg bg-white/10 hover:bg-blue-500 flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-white/10">
                      <img src="image/github.svg" alt="github" className='invert rounded-2xl h-9' />
                    </a>
                    <a href="https://www.linkedin.com/in/harshdholakiya/" target='_blank' aria-label="LinkedIn" className="w-12 h-12 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-white/10">
                      <img src="image/linkedln.svg" alt="linkedln" className="invert h-9 " />
                    </a>

                  </div>
                </div>

                <p className="text-gray-500 text-xs pt-4 border-t border-white/10">
                  Prefer privacy? You can always email me directly. Messages are read only by me.
                </p>
              </div>
            </div>

            {/* Form column */}
            <form onSubmit={handleSubmit} className="p-8" aria-label="Contact form">
              <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

              {status && (
                <div className={`mb-4 p-3 rounded-lg text-sm ${status.type === 'success' ? 'bg-green-500/20 text-green-300 border border-green-500/50' :
                  status.type === 'error' ? 'bg-red-500/20 text-red-300 border border-red-500/50' :
                    'bg-blue-500/20 text-blue-300 border border-blue-500/50'
                  }`}>
                  {status.msg}
                </div>
              )}

              <label className="block mb-4">
                <span className="text-sm text-gray-300 font-medium">Your Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-3 border border-white/10 rounded-lg bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  placeholder="Name"
                  required
                  disabled={status?.type === 'loading'}
                />
              </label>

              <label className="block mb-4">
                <span className="text-sm text-gray-300 font-medium">Email Address</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-3 border border-white/10 rounded-lg bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                  required
                  disabled={status?.type === 'loading'}
                />
              </label>

              <label className="block mb-6">
                <span className="text-sm text-gray-300 font-medium">Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-3 border border-white/10 rounded-lg bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all resize-none h-32"
                  placeholder="Your message here..."
                  required
                  disabled={status?.type === 'loading'}
                />
              </label>

              <button
                type="submit"
                disabled={status?.type === 'loading'}
                className="w-full px-6 py-3 bg-linear-to-r from-blue-400 to-cyan-400 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status?.type === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}

// Create a new contact component similar to the existing one
// Ensure all details remain the same

export default Contact
