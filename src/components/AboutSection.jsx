import React from 'react';
import { GraduationCap, MapPin, Sparkles, Check, ArrowUpRight, Mail, Code, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profileData } from '../data/profile';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 border-b border-stone-200 dark:border-stone-800 bg-stone-100/40 dark:bg-stone-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 pb-8 border-b border-stone-200 dark:border-stone-800">
          <div className="flex items-center gap-2 font-mono text-xs text-stone-500 uppercase tracking-widest">
            <span>Section // 03</span>
            <span>&bull;</span>
            <span>About Me</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-950 dark:text-stone-50">
            Background & Education
          </h2>
          <p className="text-stone-600 dark:text-stone-400 font-sans max-w-2xl text-sm sm:text-base">
            A little more about who I am, what I study, and what drives my passion for software and web development.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-10 items-start">
          {/* Left Column: Personal Story */}
          <div className="lg:col-span-7 space-y-5 text-stone-700 dark:text-stone-300 font-sans leading-relaxed text-sm sm:text-base">
            <p className="text-xl sm:text-2xl font-serif text-stone-950 dark:text-stone-100 font-normal leading-snug">
              "I love creating digital products that combine clean design with dependable, functional code."
            </p>

            <p>
              I am currently in my final year pursuing a <strong className="text-stone-900 dark:text-stone-100 font-semibold">B.Tech in Computer Science & Engineering (Artificial Intelligence)</strong> at <strong className="text-stone-900 dark:text-stone-100 font-semibold">Parul University, Vadodara</strong>. Throughout my degree, I have focused on building hands-on projects that bridge visual design and backend logic.
            </p>

            <p>
              From creating interactive web applications like <strong className="text-stone-900 dark:text-stone-100 font-medium">HD Bank</strong> and <strong className="text-stone-900 dark:text-stone-100 font-medium">Urban Nest</strong> to automating media workflows with Python and experimenting with modern UI animations, I enjoy exploring new tools and shipping functional, user-friendly software.
            </p>

            {/* Interests Badges */}
            <div className="pt-3 space-y-2.5">
              <h4 className="font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400">
                Core Areas of Interest
              </h4>
              <div className="flex flex-wrap gap-2">
                {profileData.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-stone-50 dark:bg-[#10141d] border border-stone-300 dark:border-stone-800 text-xs font-mono text-stone-800 dark:text-stone-200"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Education & Quick Links */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Card */}
            <div className="p-6 bg-stone-50 dark:bg-[#10141d] border border-stone-300 dark:border-stone-800 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-stone-200 dark:border-stone-800">
                <GraduationCap className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <div>
                  <h3 className="font-serif text-lg text-stone-950 dark:text-stone-50 font-medium">
                    Education
                  </h3>
                  <span className="font-mono text-[11px] text-stone-500">Parul University</span>
                </div>
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div className="p-3 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1">
                  <p className="font-bold text-stone-900 dark:text-stone-100">
                    B.Tech in Computer Science & Engineering (AI)
                  </p>
                  <p className="text-stone-600 dark:text-stone-400">
                    Parul University &bull; Vadodara, Gujarat
                  </p>
                  <div className="pt-1 flex justify-between text-stone-500 text-[11px]">
                    <span>4th Year Student</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">2023 — Present</span>
                  </div>
                </div>

                <div className="p-3 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1">
                  <p className="font-bold text-stone-900 dark:text-stone-100">
                    Higher Secondary Certificate (HSC)
                  </p>
                  <p className="text-stone-600 dark:text-stone-400">
                    VL Gelani Vidhyabhavan
                  </p>
                  <div className="pt-1 flex justify-between text-stone-500 text-[11px]">
                    <span>Science Stream (PCM)</span>
                    <span className="text-stone-600 dark:text-stone-400 font-semibold">2021 — 2023</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links Card */}
            <div className="p-6 bg-stone-50 dark:bg-[#10141d] border border-stone-300 dark:border-stone-800 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-stone-800">
                <span className="uppercase text-stone-500">Connect & Profiles</span>
                <span className="flex items-center gap-1 text-stone-600 dark:text-stone-400">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>{profileData.location}</span>
                </span>
              </div>

              <div className="space-y-2">
                <a
                  href={`mailto:${profileData.email}`}
                  className="p-2.5 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-center justify-between hover:border-stone-400 transition-colors"
                >
                  <span className="flex items-center gap-2 text-stone-700 dark:text-stone-300">
                    <Mail className="w-3.5 h-3.5" />
                    <span>{profileData.email}</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
                </a>

                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-center justify-between hover:border-stone-400 transition-colors"
                >
                  <span className="flex items-center gap-2 text-stone-700 dark:text-stone-300">
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>github.com/{profileData.socials.githubUsername}</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
                </a>

                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-center justify-between hover:border-stone-400 transition-colors"
                >
                  <span className="flex items-center gap-2 text-stone-700 dark:text-stone-300">
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>linkedin.com/in/{profileData.socials.linkedinUsername}</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
