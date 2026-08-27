import React, { useState } from 'react';
import { LayoutGrid, List, Search, Sparkles, Filter, ExternalLink, Play } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData, projectCategories } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const ProjectShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [selectedProjectForModal, setSelectedProjectForModal] = useState(null);

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone-200 dark:border-stone-800">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-stone-500 uppercase tracking-widest">
              <span>Section // 01</span>
              <span>&bull;</span>
              <span>Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-950 dark:text-stone-50">
              Featured Projects
            </h2>
            <p className="text-stone-600 dark:text-stone-400 font-sans max-w-xl text-sm sm:text-base">
              A collection of full-stack web applications, AI automation tools, and interactive software I have built.
            </p>
          </div>

          {/* Controls: Search, Grid/List view */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="Search projects by tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-56 pl-8 pr-3 py-1.5 text-xs font-mono bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 focus:outline-none focus:border-stone-900 dark:focus:border-stone-100 text-stone-900 dark:text-stone-100 placeholder-stone-400"
              />
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center p-1 bg-stone-200/80 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-xs font-mono">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900'
                    : 'text-stone-600 dark:text-stone-400'
                }`}
                title="Grid View"
                aria-label="Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 transition-colors ${
                  viewMode === 'list'
                    ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900'
                    : 'text-stone-600 dark:text-stone-400'
                }`}
                title="List View"
                aria-label="List View"
              >
                <List className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 py-6">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 font-semibold'
                  : 'bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-400 border border-stone-300 dark:border-stone-800 hover:border-stone-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Render Area */}
        {filteredProjects.length === 0 ? (
          <div className="py-16 text-center border border-dashed border-stone-300 dark:border-stone-800 font-mono text-sm text-stone-500">
            No projects matched your query "{searchQuery}".
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={(proj) => setSelectedProjectForModal(proj)}
              />
            ))}
          </div>
        ) : (
          /* List View */
          <div className="divide-y divide-stone-200 dark:divide-stone-800 border-t border-b border-stone-200 dark:border-stone-800">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-stone-100/60 dark:hover:bg-stone-900/40 px-3 transition-colors"
              >
                <div className="space-y-1 md:max-w-xl">
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-xl text-stone-900 dark:text-stone-100">
                      {project.title}
                    </span>
                    <span className="text-xs font-mono text-stone-400">
                      // {project.year}
                    </span>
                  </div>
                  <p className="text-xs font-sans text-stone-600 dark:text-stone-400">
                    {project.tagline}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] font-mono bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedProjectForModal(project)}
                    className="px-3 py-1.5 text-xs font-mono bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 flex items-center gap-1.5"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Demo & Details</span>
                  </button>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
                      title="GitHub Source"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Project Modal */}
        {selectedProjectForModal && (
          <ProjectModal
            project={selectedProjectForModal}
            onClose={() => setSelectedProjectForModal(null)}
          />
        )}
      </div>
    </section>
  );
};
