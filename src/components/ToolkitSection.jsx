import React from 'react';
import { Layers, ShieldCheck, Zap, Smartphone, Code, CheckCircle2 } from 'lucide-react';
import { toolkitData, coreValues } from '../data/toolkit';

export const ToolkitSection = () => {
  return (
    <section id="skills" className="py-20 dot-grid border-b border-stone-200 dark:border-stone-800 bg-stone-100/30 dark:bg-[#0a0d12]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 pb-8 border-b border-stone-200 dark:border-stone-800">
          <div className="flex items-center gap-2 font-mono text-xs text-stone-500 uppercase tracking-widest">
            <span>Section // 02</span>
            <span>&bull;</span>
            <span>Technical Skills</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-950 dark:text-stone-50">
            Skills & Technologies
          </h2>
          <p className="text-stone-600 dark:text-stone-400 font-sans max-w-2xl text-sm sm:text-base">
            Languages, frameworks, and developer tools I work with to build responsive web applications, scripts, and software.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
          {toolkitData.map((category, idx) => (
            <div
              key={idx}
              className="p-6 bg-stone-50 dark:bg-[#10141d] border border-stone-300 dark:border-stone-800 space-y-5 flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-stone-800">
                  <h3 className="font-serif text-2xl text-stone-950 dark:text-stone-50 font-normal">
                    {category.category}
                  </h3>
                  <span className="font-mono text-xs text-amber-700 dark:text-amber-400 font-bold">
                    0{idx + 1}
                  </span>
                </div>
                <p className="text-xs font-sans text-stone-500 dark:text-stone-400 leading-relaxed">
                  {category.tagline}
                </p>

                {/* Skills in Category */}
                <div className="space-y-3.5 pt-3">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <div className="flex items-center justify-between font-mono text-xs">
                        <span className="font-semibold text-stone-900 dark:text-stone-100">
                          {skill.name}
                        </span>
                        <span className="px-2 py-0.5 text-[10px] bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-stone-600 dark:text-stone-400 font-sans leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Development Values */}
        <div className="mt-14 pt-10 border-t border-stone-200 dark:border-stone-800 space-y-6">
          <h3 className="font-serif text-2xl sm:text-3xl text-stone-950 dark:text-stone-50 font-normal">
            How I Approach Development
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-5 bg-stone-50 dark:bg-[#10141d] border border-stone-300 dark:border-stone-800 space-y-2"
              >
                <span className="font-mono text-sm text-amber-700 dark:text-amber-400 font-bold">
                  0{idx + 1}
                </span>
                <h4 className="font-serif text-lg text-stone-900 dark:text-stone-100 font-medium">
                  {val.title}
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
