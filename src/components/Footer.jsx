import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';
import { profileData } from '../data/profile';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 bg-stone-100 dark:bg-[#07090c] text-stone-700 dark:text-stone-300 font-mono text-xs border-t border-stone-300 dark:border-stone-800 pb-24 md:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-stone-200 dark:border-stone-800">
          <div className="space-y-0.5">
            <p className="font-editorial-sans text-base font-bold text-stone-900 dark:text-stone-50">
              {profileData.name}
            </p>
            <p className="text-stone-500 text-[11px]">
              B.Tech Computer Science & Engineering (AI) &bull; Parul University (2023–2027)
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="px-3 py-1.5 bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 flex items-center gap-1.5 transition-colors border border-stone-300 dark:border-stone-700 text-[11px]"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
          <div className="space-y-1.5">
            <span className="uppercase text-[10px] tracking-widest text-stone-400">
              About
            </span>
            <p className="text-stone-600 dark:text-stone-400 font-sans leading-relaxed">
              B.Tech CSE (AI) student at Parul University passionate about building full-stack web applications, Django APIs, and Python automation tools.
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="uppercase text-[10px] tracking-widest text-stone-400">
              GitHub Profile
            </span>
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-900 dark:text-stone-100 hover:underline flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>github.com/{profileData.socials.githubUsername}</span>
            </a>
          </div>

          <div className="space-y-1.5">
            <span className="uppercase text-[10px] tracking-widest text-stone-400">
              LeetCode Profile
            </span>
            <a
              href={profileData.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-900 dark:text-stone-100 hover:underline flex items-center gap-1.5"
            >
              <LeetcodeIcon className="w-3.5 h-3.5" />
              <span>leetcode.com/u/{profileData.socials.leetcodeUsername}</span>
            </a>
          </div>

          <div className="space-y-1.5">
            <span className="uppercase text-[10px] tracking-widest text-stone-400">
              Email
            </span>
            <a
              href={`mailto:${profileData.email}`}
              className="text-stone-900 dark:text-stone-100 hover:underline flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{profileData.email}</span>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-500">
          <span>&copy; {new Date().getFullYear()} Harsh Dholakiya. Built with React & Tailwind CSS.</span>
          <span>Open for Opportunities & Projects</span>
        </div>
      </div>
    </footer>
  );
};
