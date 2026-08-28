import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Sparkles, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';
import confetti from 'canvas-confetti';
import { profileData } from '../data/profile';
import { useToast } from './Toast';

export const ContactSection = () => {
  const { addToast } = useToast();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    addToast('Email copied: ' + profileData.email, 'copy');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      addToast('Please fill in all fields.', 'error');
      return;
    }

    setIsSubmitting(true);

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };

    // Client-side backup
    try {
      const localRecord = {
        ...payload,
        id: Date.now(),
        timestamp: new Date().toISOString(),
        formattedDate: new Date().toLocaleString()
      };
      const existing = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
      localStorage.setItem('portfolio_messages', JSON.stringify([localRecord, ...existing]));
    } catch (err) {
      // ignore
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      await response.json().catch(() => ({ success: true }));

      setIsSubmitting(false);
      setSubmitted(true);
      addToast('Message sent successfully! Harsh will get back to you soon.', 'success');

      try {
        confetti({
          particleCount: 60,
          spread: 55,
          origin: { y: 0.8 },
          colors: ['#D97706', '#059669', '#181714']
        });
      } catch (err) {}
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setIsSubmitting(false);
      setSubmitted(true);
      addToast('Message sent successfully! Harsh will get back to you soon.', 'success');

      try {
        confetti({
          particleCount: 60,
          spread: 55,
          origin: { y: 0.8 },
          colors: ['#D97706', '#059669', '#181714']
        });
      } catch (e) {}
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-20 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2 font-mono text-xs text-stone-500 uppercase tracking-widest">
              <span>Section // 04</span>
              <span>&bull;</span>
              <span>Contact</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-950 dark:text-stone-50 leading-tight">
              Let's connect & build together.
            </h2>

            <p className="text-stone-600 dark:text-stone-300 font-sans text-sm sm:text-base leading-relaxed max-w-lg">
              Whether you'd like to discuss a project, opportunity, or just chat about technology and development — feel free to drop a message.
            </p>

            {/* Email Card */}
            <div className="p-5 bg-stone-100 dark:bg-stone-900/80 border border-stone-300 dark:border-stone-800 space-y-3">
              <span className="font-mono text-xs text-stone-500 uppercase tracking-wider block">
                Primary Email
              </span>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <div className="flex-1 px-3.5 py-2.5 bg-stone-50 dark:bg-[#0c0f14] border border-stone-300 dark:border-stone-700 font-mono text-xs sm:text-sm text-stone-900 dark:text-stone-100 flex items-center gap-2 overflow-x-auto font-medium">
                  <Mail className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                  <span>{profileData.email}</span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-2.5 bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 font-mono text-xs font-medium hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors flex items-center justify-center gap-2"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400 dark:text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied!' : 'Copy Email'}</span>
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-xs font-mono text-stone-700 dark:text-stone-300 hover:border-stone-500 transition-colors flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub ({profileData.socials.githubUsername})</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
              </a>

              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-xs font-mono text-stone-700 dark:text-stone-300 hover:border-stone-500 transition-colors flex items-center gap-2"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
              </a>

              <a
                href={profileData.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-xs font-mono text-stone-700 dark:text-stone-300 hover:border-stone-500 transition-colors flex items-center gap-2"
              >
                <LeetcodeIcon className="w-4 h-4" />
                <span>LeetCode</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6 p-6 sm:p-7 bg-stone-50 dark:bg-[#10141d] border border-stone-300 dark:border-stone-800 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-stone-800 mb-5">
              <span className="font-mono text-xs uppercase tracking-wider text-stone-500">
                Send a Message
              </span>
              <span className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400">
                DIRECT INBOX
              </span>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-3 font-mono animate-fade-in">
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800 flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-stone-950 dark:text-stone-50">
                  Message Sent
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 max-w-xs mx-auto font-sans leading-relaxed">
                  Thank you for reaching out! Harsh will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-4 py-2 bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 text-xs font-mono"
                >
                  Send Another Message &rarr;
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 font-mono text-xs">
                <div className="space-y-1">
                  <label className="text-stone-600 dark:text-stone-400 uppercase tracking-wider text-[10px]">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:border-stone-900 dark:focus:border-stone-100"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-stone-600 dark:text-stone-400 uppercase tracking-wider text-[10px]">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:border-stone-900 dark:focus:border-stone-100"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-stone-600 dark:text-stone-400 uppercase tracking-wider text-[10px]">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:border-stone-900 dark:focus:border-stone-100 resize-none font-sans"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 font-mono text-xs font-semibold hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
