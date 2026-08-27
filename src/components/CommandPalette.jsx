import React, { useState, useEffect, useRef } from 'react';
import { Search, X, FolderCode, Sparkles, Layers, User, Mail, Moon, Sun, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { projectsData } from '../data/projects';
import { profileData } from '../data/profile';
import { useToast } from './Toast';

export const CommandPalette = ({ isOpen, onClose, darkMode, setDarkMode }) => {
  const { addToast } = useToast();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const commands = [
    {
      id: 'projects',
      title: 'View Projects',
      category: 'Navigation',
      icon: FolderCode,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'skills',
      title: 'View Skills & Technologies',
      category: 'Navigation',
      icon: Layers,
      action: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'about',
      title: 'About Harsh Dholakiya & Education',
      category: 'Navigation',
      icon: User,
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'contact',
      title: 'Contact & Send Message',
      category: 'Navigation',
      icon: Mail,
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'copy-email',
      title: `Copy Email (${profileData.email})`,
      category: 'Actions',
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText(profileData.email);
        addToast('Email copied: ' + profileData.email, 'copy');
        onClose();
      }
    },
    {
      id: 'view-messages',
      title: 'View Received Contact Messages (Inbox)',
      category: 'Actions',
      icon: Mail,
      action: () => {
        const msgs = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
        if (msgs.length === 0) {
          addToast('No messages in local inbox yet. Send a test message!', 'info');
        } else {
          addToast(`Found ${msgs.length} message(s) in inbox! Latest from: ${msgs[0].name}`, 'info', 5000);
        }
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'toggle-theme',
      title: `Switch Theme to ${darkMode ? 'Light Mode' : 'Dark Mode'}`,
      category: 'Actions',
      icon: darkMode ? Sun : Moon,
      action: () => {
        setDarkMode(!darkMode);
        onClose();
      }
    },
    {
      id: 'github',
      title: `Open GitHub Profile (github.com/${profileData.socials.githubUsername})`,
      category: 'Links',
      icon: GithubIcon,
      action: () => {
        window.open(profileData.socials.github, '_blank');
        onClose();
      }
    },
    {
      id: 'linkedin',
      title: 'Open LinkedIn Profile',
      category: 'Links',
      icon: LinkedinIcon,
      action: () => {
        window.open(profileData.socials.linkedin, '_blank');
        onClose();
      }
    },
    ...projectsData.map((p) => ({
      id: `proj-${p.id}`,
      title: `Project: ${p.title}`,
      category: 'Projects',
      icon: FolderCode,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    }))
  ];

  const filteredCommands = commands.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase()) ||
    c.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredCommands.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % Math.max(1, filteredCommands.length));
      } else if (e.key === 'Enter' && filteredCommands[selectedIndex]) {
        e.preventDefault();
        filteredCommands[selectedIndex].action();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-stone-950/70 dark:bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-stone-50 dark:bg-[#10141d] border border-stone-300 dark:border-stone-800 shadow-2xl overflow-hidden font-mono">
        <div className="flex items-center gap-3 p-4 border-b border-stone-200 dark:border-stone-800 bg-stone-100/90 dark:bg-stone-900/90">
          <Search className="w-4 h-4 text-stone-400" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command, project, or section..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="flex-1 bg-transparent text-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none"
          />
          <kbd className="px-1.5 py-0.5 text-[10px] bg-stone-200 dark:bg-stone-800 text-stone-500 border border-stone-300 dark:border-stone-700">
            ESC
          </kbd>
        </div>

        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-stone-200/50 dark:divide-stone-800/50 text-xs">
          {filteredCommands.length === 0 ? (
            <div className="p-4 text-center text-stone-400">No commands found.</div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const Icon = cmd.icon;
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full p-2.5 flex items-center justify-between transition-colors text-left ${
                    isSelected
                      ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 font-semibold'
                      : 'text-stone-700 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 opacity-70" />
                    <span>{cmd.title}</span>
                  </div>
                  <span className={`text-[10px] uppercase opacity-60 ${isSelected ? 'text-stone-300 dark:text-stone-700' : 'text-stone-400'}`}>
                    {cmd.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        <div className="p-3 border-t border-stone-200 dark:border-stone-800 bg-stone-100/60 dark:bg-stone-900/60 text-[11px] text-stone-400 flex justify-between">
          <span>Use &uarr;&darr; to navigate</span>
          <span>&crarr; to select</span>
        </div>
      </div>
    </div>
  );
};
