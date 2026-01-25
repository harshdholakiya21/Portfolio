import React from "react"

const SkillsSection = ({
  data = [],
  eyebrow = "A comprehensive overview of my technical expertise",
}) => {
  const SkillBar = ({ label, value }) => {
    const pct = Math.max(0, Math.min(100, value))
    return (
      <div className="space-y-2" aria-label={`${label} ${pct}%`}>
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-gray-100">{label}</span>
          <span className="text-gray-400 text-xs font-semibold">{pct}%</span>
        </div>
        <div className="h-2 w-full rounded-full bg-white/8 overflow-hidden border border-white/10">
          <div
            className="h-full rounded-full bg-linear-to-r from-blue-400 via-cyan-400 to-blue-500 shadow-lg shadow-blue-500/50"
            style={{ width: `${pct}%`, transition: "width 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)" }}
          />
        </div>
      </div>
    )
  }

  const SkillCard = ({ title, items = [] }) => (
    <div className="group bg-white/6 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:border-white/20 hover:bg-white/8 transition-all duration-300 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-6 rounded-full bg-linear-to-b from-blue-400 to-cyan-400 group-hover:h-8 transition-all duration-300"></div>
        <h3 className="text-lg font-semibold text-gray-100 group-hover:text-white transition-colors">{title}</h3>
      </div>
      <div className="flex flex-col gap-5">
        {items.map((item, idx) => (
          <SkillBar key={idx} label={item.label} value={item.value} />
        ))}
      </div>
    </div>
  )

  return (
    <section className="relative overflow-hidden py-20 bg-linear-to-b from-black via-gray-900 to-gray-800 text-white" id="skills">
      <div className="absolute -left-20 bottom-0 w-[55%] h-[90%] transform -rotate-12 bg-linear-to-br from-black via-gray-900 to-gray-700 opacity-50 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-12 pt-12">
          <h2 className="text-4xl font-bold text-white mb-3">Skills & Expertise</h2>
          <p className="text-gray-300 text-lg max-w-2xl">{eyebrow}</p>
          <div className="mt-4 h-1 w-20 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full"></div>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {data.map((section, idx) => (
            <SkillCard key={idx} title={section.title} items={section.items} />
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">These skills represent my hands-on experience across full-stack development, AI/ML, and modern tooling. Always learning and growing!</p>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
