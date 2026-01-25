import React from 'react'

const AboutMe = () => {
  return (
    <>
      <div className="bg-black pt-16 w-full fixed top-0 z-9">
        <span className='bg-gray-200 min-w-28.25 min-h-7.5 fixed top-5 left-14'></span>
      </div>
      <section className="relative overflow-hidden pt-36 pb-20 bg-linear-to-b from-black via-gray-900 to-gray-800 text-white" id="about">
        <div className="absolute -right-20 top-0 w-[55%] h-[90%] transform rotate-12 bg-linear-to-br from-black via-gray-900 to-gray-700 opacity-50 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left column: image and title */}
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-bold mb-4">About Me</h2>
              <p className="text-gray-300 text-lg">I design and build modern web experiences, blending frontend polish with backend reliability.</p>

              <div className="mt-8 rounded-full overflow-hidden shadow-lg">
                <img
                  src="image/myphoto.png"
                  alt="Harsh Dholakiya"
                  className="w-full h-full object-cover "
                />
              </div>
            </div>

            {/* Right: content cards */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/6 border border-white/10 rounded-xl p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-3">Who I am</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  I'm a passionate developer specializing in full-stack web development with expertise in React, Tailwind CSS, and JavaScript. I build interactive applications with a focus on usability, performance, and clean design.
                </p>
                <p className="mt-4 text-gray-300 leading-relaxed text-lg">
                  I enjoy exploring AI/ML technologies, creating responsive interfaces, and working with modern tools to make applications production-ready.
                </p>
              </div>

              <div className="bg-white/6 border border-white/10 rounded-xl p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
                <div className="space-y-4">
                  <div className="text-gray-300">
                    <div className="font-semibold text-white text-lg">B.Tech in Computer Science & Engineering (AI)</div>
                    <div className="text-gray-400">Parul University, Vadodara — 2023 - Present</div>
                  </div>
                  <hr className="border-gray-700" />
                  <div className="text-gray-300">
                    <div className="font-semibold text-white text-lg">Higher Secondary Certificate (HSC)</div>
                    <div className="text-gray-400">VL Gelani Vidhyabhavan — 2021 - 2023</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/6 border border-white/10 rounded-xl p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Interests & Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Full Stack Development',
                    'AI/ML',
                    'Web Design',
                    'Problem Solving',
                    'Open Source',
                    'Tech Innovation',
                    'Database Design',
                    'Cloud Computing',
                    'API Development'
                  ].map((tag) => (
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
