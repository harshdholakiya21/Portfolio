import React, { useState } from 'react';
import { ArrowDown, Copy, Check, Sparkles, ExternalLink, GraduationCap, Code2, Globe } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';
import { profileData } from '../data/profile';
import { useToast } from './Toast';

export const Hero = () => {
  const { addToast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    addToast('Email copied: ' + profileData.email, 'copy');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden blueprint-grid border-b border-stone-200 dark:border-stone-800">
      {/* Decorative Blueprint Corner Markers */}
      <div className="hidden lg:block absolute top-24 left-8 font-mono text-[10px] text-stone-400 dark:text-stone-600 select-none">
        POS: [00, 00] // SYS_HOME
      </div>
      <div className="hidden lg:block absolute top-24 right-8 font-mono text-[10px] text-stone-400 dark:text-stone-600 select-none">
        DEV: HARSH_DHOLAKIYA // PARUL_UNIV
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Status Pill */}
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 font-mono text-xs text-stone-700 dark:text-stone-300">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          <span>B.Tech CSE (AI) Student (2023–2027) &bull; Parul University</span>
        </div>

        {/* Hero Grid: Intro Text (Left) & Photo (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (7 cols): Introduction */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight text-stone-950 dark:text-stone-50">
              Building responsive web apps,{' '}
              <span className="italic font-serif text-stone-700 dark:text-stone-300 underline decoration-amber-600/40 dark:decoration-amber-400/40 decoration-1 underline-offset-8">
                RESTful backends
              </span>{' '}
              & automated software.
            </h1>

            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 font-sans max-w-2xl leading-relaxed">
              Hi, I'm <strong className="font-semibold text-stone-900 dark:text-stone-100">{profileData.name}</strong>. {profileData.bio.hero}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 text-xs sm:text-sm font-mono font-medium hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors flex items-center gap-2 group"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              {/* 1-Click Copy Email */}
              <button
                onClick={handleCopyEmail}
                className="px-4 py-3 bg-stone-100 dark:bg-stone-900 text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-stone-700 text-xs sm:text-sm font-mono hover:border-stone-500 dark:hover:border-stone-500 transition-all flex items-center gap-2"
                title="Click to copy email address"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4 text-stone-500" />}
                <span>{copied ? 'Copied!' : profileData.email}</span>
              </button>

              {/* Social Badges */}
              <div className="flex items-center gap-2">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-stone-100 dark:bg-stone-900 text-stone-700 dark:text-stone-300 border border-stone-300 dark:border-stone-800 hover:text-stone-950 dark:hover:text-stone-50 hover:border-stone-400 transition-colors"
                  aria-label="GitHub Profile"
                  title={`GitHub: ${profileData.socials.githubUsername}`}
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-stone-100 dark:bg-stone-900 text-stone-700 dark:text-stone-300 border border-stone-300 dark:border-stone-800 hover:text-stone-950 dark:hover:text-stone-50 hover:border-stone-400 transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={profileData.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-stone-100 dark:bg-stone-900 text-stone-700 dark:text-stone-300 border border-stone-300 dark:border-stone-800 hover:text-stone-950 dark:hover:text-stone-50 hover:border-stone-400 transition-colors"
                  aria-label="LeetCode Profile"
                  title={`LeetCode: ${profileData.socials.leetcodeUsername}`}
                >
                  <LeetcodeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Photo with Clean Blueprint Frame */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] bg-gradient-to-b from-stone-200/80 to-stone-100/30 dark:from-stone-800/60 dark:to-stone-900/30 border border-stone-300 dark:border-stone-800 flex items-end justify-center overflow-hidden shadow-tactile">
              {/* Subtle blueprint grid on photo pedestal */}
              <div className="absolute inset-0 blueprint-grid opacity-60 pointer-events-none"></div>

              {/* Developer Photo */}
              <img
                src={profileData.photo}
                alt="Harsh Dholakiya"
                className="relative z-10 w-full h-full object-contain object-bottom filter drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
              />

              {/* Bottom Photo Nameplate */}
              <div className="absolute bottom-3 inset-x-3 z-20 p-2.5 bg-stone-900/90 dark:bg-stone-950/90 text-stone-100 backdrop-blur-md border border-stone-700/80 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  <span className="font-semibold">{profileData.name}</span>
                </div>
                <span className="text-[10px] text-amber-400 uppercase">Parul Univ '23–'27</span>
              </div>
            </div>

            {/* Subtle Floating Badges */}
            <div className="hidden sm:flex absolute -top-3 -left-3 z-20 items-center gap-2 p-2 bg-stone-50/95 dark:bg-[#10141d]/95 backdrop-blur-md border border-stone-300 dark:border-stone-700 shadow-sm font-mono text-xs text-stone-800 dark:text-stone-200">
              <GraduationCap className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>B.Tech CSE (AI)</span>
            </div>

            <div className="hidden sm:flex absolute -bottom-3 -right-3 z-20 items-center gap-2 p-2 bg-stone-50/95 dark:bg-[#10141d]/95 backdrop-blur-md border border-stone-300 dark:border-stone-700 shadow-sm font-mono text-xs text-stone-800 dark:text-stone-200">
              <Code2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>React & Django</span>
            </div>
          </div>
        </div>

        {/* Quick Highlights Bar */}
        <div className="mt-14 pt-8 border-t border-stone-200 dark:border-stone-800 grid grid-cols-2 md:grid-cols-4 gap-6">
          {profileData.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <span className="font-serif text-xl sm:text-2xl text-stone-950 dark:text-stone-100 font-normal">
                {stat.value}
              </span>
              <p className="font-mono text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
