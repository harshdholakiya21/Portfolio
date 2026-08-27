import React from 'react';
import { FolderCode, Sparkles, Layers, Mail, Sun, Moon, Search } from 'lucide-react';

export const MobileDock = ({ darkMode, setDarkMode, onOpenCommandPalette }) => {
  return (
    <aside
      aria-label="Mobile Navigation Dock"
      className="md:hidden fixed bottom-4 inset-x-4 z-40 flex items-center justify-around p-2 bg-stone-900/90 dark:bg-stone-100/90 text-stone-200 dark:text-stone-800 backdrop-blur-lg border border-stone-700 dark:border-stone-300 shadow-2xl"
    >
      <a
        href="#projects"
        className="p-2 flex flex-col items-center gap-0.5 hover:text-amber-400 dark:hover:text-amber-600 transition-colors"
        aria-label="Projects"
      >
        <FolderCode className="w-4 h-4" />
        <span className="text-[9px] font-mono uppercase">Projects</span>
      </a>

      <a
        href="#skills"
        className="p-2 flex flex-col items-center gap-0.5 hover:text-amber-400 dark:hover:text-amber-600 transition-colors"
        aria-label="Skills"
      >
        <Layers className="w-4 h-4" />
        <span className="text-[9px] font-mono uppercase">Skills</span>
      </a>

      <a
        href="#contact"
        className="p-2 flex flex-col items-center gap-0.5 hover:text-amber-400 dark:hover:text-amber-600 transition-colors"
        aria-label="Contact"
      >
        <Mail className="w-4 h-4" />
        <span className="text-[9px] font-mono uppercase">Contact</span>
      </a>

      <button
        onClick={onOpenCommandPalette}
        className="p-2 flex flex-col items-center gap-0.5 hover:text-amber-400 dark:hover:text-amber-600 transition-colors"
        aria-label="Search"
      >
        <Search className="w-4 h-4" />
        <span className="text-[9px] font-mono uppercase">Find</span>
      </button>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 flex flex-col items-center gap-0.5 text-amber-400 dark:text-amber-600"
        aria-label="Toggle Theme"
      >
        {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        <span className="text-[9px] font-mono uppercase">Mode</span>
      </button>
    </aside>
  );
};
