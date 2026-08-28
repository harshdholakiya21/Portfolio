import React, { useState } from 'react';
import { Award, ExternalLink, Copy, Check, ChevronDown, ChevronUp, Sparkles, CheckCircle2, ShieldCheck, BookOpen, GraduationCap, Eye, X, ZoomIn } from 'lucide-react';
import { certificationsData, certificationCategories } from '../data/certifications';
import { useToast } from './Toast';

export const CertificationsSection = () => {
  const { addToast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedId, setCopiedId] = useState(null);
  const [activeMLTab, setActiveMLTab] = useState(0); // 0: Spec, 1: Course 1, 2: Course 2, 3: Course 3
  const [lightboxCert, setLightboxCert] = useState(null);

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

  const mlCert = certificationsData.find((c) => c.id === 'ml-specialization');
  const activeMLView = activeMLTab === 0 
    ? { title: mlCert.title, image: mlCert.image, credentialId: mlCert.credentialId, verifyUrl: mlCert.verifyUrl, date: mlCert.date }
    : mlCert.subCourses[activeMLTab - 1];

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

        {/* 1. Featured Spotlight: Stanford Machine Learning Specialization */}
        {(selectedCategory === 'All' || selectedCategory === 'Machine Learning & AI') && mlCert && (
          <div className="mb-10 p-6 sm:p-8 bg-stone-50 dark:bg-[#10141d] border-2 border-amber-600/60 dark:border-amber-500/50 shadow-tactile space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-stone-200 dark:border-stone-800">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 text-xs font-mono uppercase tracking-wider bg-amber-600 text-white dark:bg-amber-500 dark:text-stone-950 font-bold">
                  Featured Specialization
                </span>
                <span className="text-xs font-mono text-stone-500">// {mlCert.date}</span>
              </div>
              <span className="text-xs font-mono text-stone-500 uppercase">3 Courses Completed &bull; Verified</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Visual Preview with Interactive Course Tabs */}
              <div className="lg:col-span-7 space-y-4">
                {/* Visual Certificate Frame */}
                <div
                  onClick={() => setLightboxCert(activeMLView)}
                  className="group relative cursor-pointer aspect-[4/3] sm:aspect-[16/11] bg-stone-200 dark:bg-stone-900 border border-stone-300 dark:border-stone-700 overflow-hidden shadow-sm flex items-center justify-center"
                >
                  <img
                    src={activeMLView.image}
                    alt={activeMLView.title}
                    className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-opacity flex items-center justify-center gap-2 text-stone-100 font-mono text-xs">
                    <ZoomIn className="w-4 h-4" />
                    <span>Click to View Full Certificate</span>
                  </div>

                  {/* Corner Badge */}
                  <div className="absolute top-3 right-3 px-2 py-1 bg-stone-900/90 text-stone-100 text-[10px] font-mono backdrop-blur-sm border border-stone-700">
                    Stanford Online / DeepLearning.AI
                  </div>
                </div>

                {/* Sub-Course Selector Tabs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-[11px]">
                  <button
                    onClick={() => setActiveMLTab(0)}
                    className={`p-2 border transition-all text-left ${
                      activeMLTab === 0
                        ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 border-stone-900 dark:border-stone-100 font-bold'
                        : 'bg-stone-100 dark:bg-stone-900/80 text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-800 hover:border-stone-500'
                    }`}
                  >
                    <span>Specialization</span>
                    <span className="block text-[10px] opacity-70">Complete 3/3</span>
                  </button>

                  {mlCert.subCourses.map((sub, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveMLTab(idx + 1)}
                      className={`p-2 border transition-all text-left ${
                        activeMLTab === idx + 1
                          ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 border-stone-900 dark:border-stone-100 font-bold'
                          : 'bg-stone-100 dark:bg-stone-900/80 text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-800 hover:border-stone-500'
                      }`}
                    >
                      <span>Course 0{idx + 1}</span>
                      <span className="block text-[10px] opacity-70 truncate">{sub.title.split(':')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: Details & Verification */}
              <div className="lg:col-span-5 space-y-5">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl text-stone-950 dark:text-stone-50 font-normal">
                    {activeMLView.title}
                  </h3>
                  <p className="font-mono text-xs text-amber-700 dark:text-amber-400 font-medium flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{mlCert.issuer} &bull; {mlCert.instructor}</span>
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                  {mlCert.summary}
                </p>

                {/* Skills */}
                <div className="space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-stone-500 dark:text-stone-400 block">
                    Validated Competencies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {mlCert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 text-[11px] font-mono bg-stone-200/80 dark:bg-stone-800/80 text-stone-800 dark:text-stone-200 border border-stone-300/60 dark:border-stone-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Credential Action Box */}
                <div className="p-4 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-stone-500 uppercase">Active Credential ID:</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">VERIFIED</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex-1 px-2.5 py-1.5 bg-stone-50 dark:bg-[#0c0f14] border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 overflow-x-auto font-semibold">
                      {activeMLView.credentialId}
                    </div>
                    <button
                      onClick={() => handleCopy(activeMLView.credentialId, activeMLView.credentialId)}
                      className="px-3 py-1.5 bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-stone-700 hover:border-stone-500 transition-colors flex items-center gap-1"
                      title="Copy ID"
                    >
                      {copiedId === activeMLView.credentialId ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedId === activeMLView.credentialId ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>

                  {activeMLView.verifyUrl && (
                    <a
                      href={activeMLView.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 font-medium hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Verify Official Coursera Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. Other Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {filteredCertifications
            .filter((c) => c.id !== 'ml-specialization')
            .map((cert) => (
              <div
                key={cert.id}
                className="p-6 bg-stone-50 dark:bg-[#10141d] border border-stone-300 dark:border-stone-800 shadow-sm space-y-4 flex flex-col justify-between transition-all duration-300 hover:border-stone-600 dark:hover:border-stone-500 hover:shadow-tactile group"
              >
                <div className="space-y-4">
                  {/* Visual Image Preview */}
                  {cert.image && (
                    <div
                      onClick={() => setLightboxCert(cert)}
                      className="relative cursor-pointer aspect-[16/10] bg-stone-200 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 overflow-hidden flex items-center justify-center"
                    >
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-opacity flex items-center justify-center gap-1.5 text-stone-100 font-mono text-xs">
                        <Eye className="w-4 h-4" />
                        <span>View Certificate</span>
                      </div>
                    </div>
                  )}

                  {/* Badge & Date */}
                  <div className="flex items-center justify-between gap-2 pb-2 border-b border-stone-200 dark:border-stone-800">
                    <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 font-medium">
                      {cert.badge}
                    </span>
                    <span className="text-xs font-mono text-stone-400">
                      // {cert.date}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <div className="space-y-1">
                    <h4 className="font-serif text-xl text-stone-950 dark:text-stone-50 font-normal leading-snug group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="font-mono text-xs text-stone-500 dark:text-stone-400">
                      {cert.issuer}
                    </p>
                  </div>

                  <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                    {cert.summary}
                  </p>

                  {cert.score && (
                    <div className="p-2 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-[11px] font-mono text-stone-700 dark:text-stone-300">
                      <span className="font-semibold text-sky-700 dark:text-sky-400">Score: </span>
                      <span>{cert.score}</span>
                    </div>
                  )}

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 text-[10px] font-mono bg-stone-200/70 dark:bg-stone-800/70 text-stone-700 dark:text-stone-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-3 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between gap-2 text-xs font-mono">
                  <button
                    onClick={() => handleCopy(cert.credentialId, cert.credentialId)}
                    className="text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 flex items-center gap-1"
                    title="Copy Credential ID"
                  >
                    {copiedId === cert.credentialId ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === cert.credentialId ? 'Copied' : cert.credentialId.slice(0, 14) + (cert.credentialId.length > 14 ? '...' : '')}</span>
                  </button>

                  {cert.verifyUrl ? (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors flex items-center gap-1.5"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <button
                      onClick={() => setLightboxCert(cert)}
                      className="px-3 py-1.5 border border-stone-300 dark:border-stone-700 hover:border-stone-900 dark:hover:border-stone-100 flex items-center gap-1.5 transition-colors"
                    >
                      <span>View</span>
                      <Eye className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/80 dark:bg-black/90 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-4xl bg-stone-50 dark:bg-[#0f131a] border border-stone-300 dark:border-stone-800 shadow-2xl overflow-hidden my-auto">
            <div className="flex items-center justify-between p-4 border-b border-stone-200 dark:border-stone-800 bg-stone-100/90 dark:bg-stone-900/90">
              <div className="flex items-center gap-2 font-mono text-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="font-semibold text-stone-900 dark:text-stone-100">{lightboxCert.title}</span>
              </div>
              <button
                onClick={() => setLightboxCert(null)}
                className="p-1.5 text-stone-500 hover:text-stone-950 dark:hover:text-stone-100 border border-stone-300 dark:border-stone-700 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 sm:p-6 max-h-[75vh] overflow-y-auto flex flex-col items-center justify-center bg-stone-200/50 dark:bg-black/50">
              <img
                src={lightboxCert.image}
                alt={lightboxCert.title}
                className="max-h-[60vh] w-auto object-contain border border-stone-300 dark:border-stone-800 shadow-lg"
              />
            </div>

            <div className="p-4 border-t border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-3 font-mono text-xs bg-stone-100/90 dark:bg-stone-900/90">
              <div className="flex items-center gap-2">
                <span className="text-stone-500">ID:</span>
                <span className="font-semibold text-stone-800 dark:text-stone-200">{lightboxCert.credentialId}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopy(lightboxCert.credentialId, lightboxCert.credentialId)}
                  className="px-3 py-1.5 border border-stone-300 dark:border-stone-700 hover:border-stone-900 dark:hover:border-stone-100 flex items-center gap-1.5"
                >
                  {copiedId === lightboxCert.credentialId ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === lightboxCert.credentialId ? 'Copied ID' : 'Copy ID'}</span>
                </button>
                {lightboxCert.verifyUrl && (
                  <a
                    href={lightboxCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 font-medium hover:bg-stone-800 dark:hover:bg-stone-200 flex items-center gap-2"
                  >
                    <span>Verify Link</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
