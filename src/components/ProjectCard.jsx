import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, CheckCircle, Smartphone, Monitor, Layers, Play } from 'lucide-react';
import { GithubIcon } from './Icons';

export const ProjectCard = ({ project, onOpenModal, onSelectPreview }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-stone-100/70 dark:bg-stone-900/60 border border-stone-300 dark:border-stone-800 p-6 flex flex-col justify-between transition-all duration-300 hover:border-stone-900 dark:hover:border-stone-100 hover:shadow-tactile-hover"
    >
      {/* Top Metadata Row */}
      <div>
        <div className="flex items-center justify-between gap-2 pb-4 border-b border-stone-200 dark:border-stone-800">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 text-[11px] font-mono uppercase tracking-wider bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300">
              {project.badge}
            </span>
            <span className="text-xs font-mono text-stone-400 dark:text-stone-500">
              // {project.year}
            </span>
          </div>

          <span className="text-xs font-mono text-stone-500 dark:text-stone-400">
            {project.category}
          </span>
        </div>

        {/* Title & Tagline */}
        <div className="pt-5 space-y-2">
          <h3 className="font-serif text-2xl font-normal text-stone-950 dark:text-stone-50 group-hover:text-amber-800 dark:group-hover:text-amber-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Architectural Highlights */}
        <div className="mt-4 pt-3 space-y-1.5 border-t border-stone-200/60 dark:border-stone-800/60">
          {project.architecture.slice(0, 2).map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs font-mono text-stone-600 dark:text-stone-400">
              <span className="text-amber-600 dark:text-amber-400 font-bold">&bull;</span>
              <span className="line-clamp-1">{item}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Badges */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 text-[11px] font-mono bg-stone-200/70 dark:bg-stone-800/70 text-stone-800 dark:text-stone-200 border border-stone-300/60 dark:border-stone-700/60"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Card Actions / Interactive Exploration */}
      <div className="mt-8 pt-4 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between gap-3">
        {/* Trigger Interactive Simulation / Case Study Modal */}
        <button
          onClick={() => onOpenModal(project)}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-stone-900 dark:text-stone-100 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>Case Study & Simulator</span>
        </button>

        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-50 transition-colors"
              title="View Source on GitHub"
              aria-label="View Source on GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-50 transition-colors"
              title="Open Project"
              aria-label="Open Project"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
