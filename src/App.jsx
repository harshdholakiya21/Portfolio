import React, { useState, useEffect } from 'react';
import { ToastProvider } from './components/Toast';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ToolkitSection } from './components/ToolkitSection';
import { CertificationsSection } from './components/CertificationsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { MobileDock } from './components/MobileDock';

export function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return true; // Default to Studio Obsidian dark mode
  });

  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Global keyboard shortcut: Cmd+K / Ctrl+K / '/'
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <ToastProvider>
      <div className="min-h-screen bg-stone-50 text-stone-900 dark:bg-[#0c0f14] dark:text-stone-100 antialiased selection:bg-amber-600 selection:text-white transition-colors duration-300">
        {/* Navigation Bar */}
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        />

        {/* Main Content Flow */}
        <main>
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. Featured Projects */}
          <ProjectShowcase />

          {/* 3. Skills & Technologies */}
          <ToolkitSection />

          {/* 4. Verified Certifications & Specializations */}
          <CertificationsSection />

          {/* 5. Background & Education */}
          <AboutSection />

          {/* 6. Contact & Message Form */}
          <ContactSection />
        </main>

        {/* Colophon & Footer */}
        <Footer />

        {/* Mobile-Only Bottom Dock */}
        <MobileDock
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        />

        {/* Global Command Palette */}
        <CommandPalette
          isOpen={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </div>
    </ToastProvider>
  );
}

export default App;
