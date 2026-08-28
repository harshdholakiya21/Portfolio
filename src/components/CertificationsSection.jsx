import React, { useState } from 'react';
import { Award, ExternalLink, Copy, Check, ChevronDown, ChevronUp, Sparkles, CheckCircle2, ShieldCheck, BookOpen, GraduationCap } from 'lucide-react';
import { certificationsData, certificationCategories } from '../data/certifications';
import { useToast } from './Toast';

export const CertificationsSection = () => {
  const { addToast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedId, setCopiedId] = useState(null);
  const [expandedSpecialization, setExpandedSpecialization] = useState(true);

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    addToast(`Credential ID copied: ${text}`, 'copy');
    setTimeout(() => setCopiedId(null), 2500);
  };

  const filteredCertifications = certificationsData.filter((cert) => {
    if (selectedCategory === 'All') return true;
    return cert.category === selectedCategory;
  });

  return (
    <section id="certifications" className="py-20 border-b border-stone-200 dark:border-stone-800 bg-stone-100/30 dark:bg-[#0a0d12]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 pb-8 border-b border-stone-200 dark:border-stone-800">
          <div className="flex items-center gap-2 font-mono text-xs text-stone-500 uppercase tracking-widest">
            <span>Section // 03</span>
            <span>&bull;</span>
            <span>Verified Credentials</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-950 dark:text-stone-50">
                Certifications & Specializations
              </h2>
              <p className="text-stone-600 dark:text-stone-400 font-sans max-w-2xl text-sm sm:text-base mt-2">
                Industry-recognized specializations, university-authorized credentials, and verified coursework in AI/ML and Computer Science.
              </p>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 font-mono text-xs text-stone-700 dark:text-stone-300">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Verifiable Online Credentials</span>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 py-6">
          {certificationCategories.map((cat) => (
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

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2 items-start">
          {filteredCertifications.map((cert) => {
            const isMLSpec = cert.id === 'ml-specialization';
            
            return (
              <div
                key={cert.id}
                className={`${
                  isMLSpec ? 'lg:col-span-12' : 'lg:col-span-6'
                } p-6 sm:p-7 bg-stone-50 dark:bg-[#10141d] border border-stone-300 dark:border-stone-800 shadow-sm space-y-5 transition-all duration-300 hover:border-stone-600 dark:hover:border-stone-500 hover:shadow-tactile`}
              >
                {/* Top Badge & Date Row */}
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-stone-200 dark:border-stone-800">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 text-[11px] font-mono uppercase tracking-wider bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 font-medium">
                      {cert.badge}
                    </span>
                    <span className="text-xs font-mono text-stone-500">
                      // {cert.date}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-stone-500 uppercase">
                    {cert.category}
                  </span>
                </div>

                {/* Title & Issuer */}
                <div className="space-y-1.5">
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-stone-950 dark:text-stone-50 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="font-mono text-xs text-amber-700 dark:text-amber-400 font-medium flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{cert.issuer} &bull; {cert.instructor}</span>
                  </p>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                  {cert.summary}
                </p>

                {/* NPTEL Score details if present */}
                {cert.score && (
                  <div className="p-3 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs font-mono text-stone-800 dark:text-stone-200 flex items-center justify-between">
                    <span className="font-bold text-sky-700 dark:text-sky-400">Academic Score:</span>
                    <span>{cert.score}</span>
                  </div>
                )}

                {/* Skills Tags */}
                <div className="space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-stone-500 dark:text-stone-400 block">
                    Validated Competencies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 text-[11px] font-mono bg-stone-200/80 dark:bg-stone-800/80 text-stone-800 dark:text-stone-200 border border-stone-300/60 dark:border-stone-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sub-courses Breakdown for Specialization */}
                {cert.subCourses && (
                  <div className="mt-4 pt-4 border-t border-stone-200 dark:border-stone-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                        <span>Included Specialized Courses (3/3 Completed)</span>
                      </span>
                      <button
                        onClick={() => setExpandedSpecialization(!expandedSpecialization)}
                        className="text-xs font-mono text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 flex items-center gap-1"
                      >
                        <span>{expandedSpecialization ? 'Hide Details' : 'Show Details'}</span>
                        {expandedSpecialization ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    {expandedSpecialization && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                        {cert.subCourses.map((sub, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-3 bg-stone-100/90 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800 text-xs font-mono space-y-2 flex flex-col justify-between"
                          >
                            <div className="space-y-1">
                              <span className="text-[10px] text-amber-600 dark:text-amber-400 font-bold block">
                                Course 0{sIdx + 1} &bull; {sub.date}
                              </span>
                              <p className="font-sans font-medium text-stone-900 dark:text-stone-100 line-clamp-2">
                                {sub.title}
                              </p>
                            </div>

                            <div className="pt-2 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between text-[11px]">
                              <button
                                onClick={() => handleCopy(sub.credentialId, sub.credentialId)}
                                className="text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 flex items-center gap-1"
                                title="Click to copy Course ID"
                              >
                                {copiedId === sub.credentialId ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                                <span>{copiedId === sub.credentialId ? 'Copied' : sub.credentialId}</span>
                              </button>

                              <a
                                href={sub.verifyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1 font-semibold"
                              >
                                <span>Verify</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Bottom Actions: Credential ID & Verify Link */}
                <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="text-stone-500">ID:</span>
                    <button
                      onClick={() => handleCopy(cert.credentialId, cert.credentialId)}
                      className="px-2 py-1 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 hover:border-stone-500 transition-colors flex items-center gap-1.5"
                      title="Click to copy Credential ID"
                    >
                      {copiedId === cert.credentialId ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3 text-stone-400" />}
                      <span>{copiedId === cert.credentialId ? 'Copied ID!' : cert.credentialId}</span>
                    </button>
                  </div>

                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors flex items-center gap-2 font-medium"
                    >
                      <span>Verify Official Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
