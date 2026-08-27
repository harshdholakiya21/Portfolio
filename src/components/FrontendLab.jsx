import React, { useState } from 'react';
import { Sparkles, Sliders, Layers, Volume2, Copy, Check, Terminal, Cpu, Bot, Zap, Activity, Palette } from 'lucide-react';
import { useToast } from './Toast';

export const FrontendLab = () => {
  const { addToast } = useToast();
  
  // Playground 1: AI Prompt & Stream Demo
  const [promptTopic, setPromptTopic] = useState('Full-Stack Web Development');
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiText, setAiText] = useState('Type a topic and click generate to test real-time AI response streaming...');

  // Playground 2: Live UI Color Accent & Token Tester
  const [activeAccent, setActiveAccent] = useState('emerald'); // 'emerald' | 'amber' | 'sky' | 'purple'
  const [blurLevel, setBlurLevel] = useState(16);

  // Playground 3: Audio Frequency Waveform Visualizer
  const [isPlaying, setIsPlaying] = useState(true);

  // Playground 4: Tactile Switch
  const [switchState, setSwitchState] = useState(true);

  const handleGenerateAI = () => {
    setIsGenerating(true);
    setAiText('Processing prompt context...');
    setTimeout(() => {
      setAiText(`Generated Response for "${promptTopic}": Full-stack development connects intuitive user interfaces with robust backend data pipelines, ensuring fast performance and seamless UX.`);
      setIsGenerating(false);
      addToast('AI response generated successfully!', 'success');
    }, 700);
  };

  const accentColors = {
    emerald: { name: 'Emerald', bg: 'bg-emerald-500', text: 'text-emerald-500', border: 'border-emerald-500', rgba: 'rgba(16, 185, 129, 0.15)' },
    amber: { name: 'Amber', bg: 'bg-amber-500', text: 'text-amber-500', border: 'border-amber-500', rgba: 'rgba(245, 158, 11, 0.15)' },
    sky: { name: 'Sky Blue', bg: 'bg-sky-500', text: 'text-sky-500', border: 'border-sky-500', rgba: 'rgba(14, 165, 233, 0.15)' },
    purple: { name: 'Purple', bg: 'bg-purple-500', text: 'text-purple-500', border: 'border-purple-500', rgba: 'rgba(168, 85, 247, 0.15)' },
  };

  return (
    <section id="playground" className="py-20 dot-grid border-b border-stone-200 dark:border-stone-800 bg-stone-100/30 dark:bg-[#0a0d12]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-stone-200 dark:border-stone-800">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-stone-500 uppercase tracking-widest">
              <span>Section // 02</span>
              <span>&bull;</span>
              <span>Interactive Playground</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-950 dark:text-stone-50">
              Interactive Lab & Playground
            </h2>
            <p className="text-stone-600 dark:text-stone-400 font-sans max-w-xl text-sm sm:text-base">
              A collection of mini live experiments — test real-time AI generation, dynamic UI color themes, and interactive micro-widgets.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 bg-stone-200/80 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 font-mono text-xs text-stone-700 dark:text-stone-300">
            <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>Interactive Runtime Active</span>
          </div>
        </div>

        {/* Playground Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-10">
          {/* Experiment 1: AI Prompt & Text Generator */}
          <div className="lg:col-span-6 p-6 bg-stone-50 dark:bg-[#10141d] border border-stone-300 dark:border-stone-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-stone-800">
              <span className="font-mono text-xs uppercase tracking-wider text-stone-500 flex items-center gap-2">
                <Bot className="w-4 h-4 text-rose-500" />
                <span>01 // AI Response Generator</span>
              </span>
              <span className="font-mono text-[10px] text-rose-600 dark:text-rose-400 font-semibold">
                LIVE DEMO
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={promptTopic}
                  onChange={(e) => setPromptTopic(e.target.value)}
                  placeholder="Enter any topic..."
                  className="flex-1 p-2 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none"
                />
                <button
                  onClick={handleGenerateAI}
                  disabled={isGenerating}
                  className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-stone-950 font-bold transition-colors disabled:opacity-50"
                >
                  {isGenerating ? 'Generating...' : 'Run &rarr;'}
                </button>
              </div>

              {/* Output */}
              <div className="p-3 bg-stone-900 text-stone-200 border border-stone-700 space-y-2 min-h-[85px] flex flex-col justify-between">
                <p className="text-[11px] leading-relaxed text-amber-200">
                  {aiText}
                </p>
                <div className="flex justify-between text-[10px] text-stone-400 border-t border-stone-800 pt-1">
                  <span>Latency: ~120ms</span>
                  <span className="text-emerald-400">Stream Ready</span>
                </div>
              </div>
            </div>
          </div>

          {/* Experiment 2: Dynamic UI Theme & Accent Switcher */}
          <div className="lg:col-span-6 p-6 bg-stone-50 dark:bg-[#10141d] border border-stone-300 dark:border-stone-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-stone-800">
              <span className="font-mono text-xs uppercase tracking-wider text-stone-500 flex items-center gap-2">
                <Palette className="w-4 h-4 text-emerald-500" />
                <span>02 // Dynamic UI Accent Tokens</span>
              </span>
              <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                THEME ENGINE
              </span>
            </div>

            {/* Live Color Card */}
            <div
              style={{
                backgroundColor: accentColors[activeAccent].rgba,
                backdropFilter: `blur(${blurLevel}px)`
              }}
              className={`p-4 border ${accentColors[activeAccent].border} transition-all space-y-2`}
            >
              <div className="flex justify-between items-center text-xs font-mono">
                <span className={`font-bold ${accentColors[activeAccent].text}`}>
                  {accentColors[activeAccent].name} Accent Token
                </span>
                <span className="text-stone-600 dark:text-stone-400 text-[10px]">
                  blur({blurLevel}px)
                </span>
              </div>
              <p className="text-xs font-sans text-stone-700 dark:text-stone-300">
                Click an accent color below to test live color palette blending across the interface.
              </p>
            </div>

            {/* Accent Buttons */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-xs font-mono text-stone-500">Pick Palette:</span>
              {Object.keys(accentColors).map((key) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveAccent(key);
                    addToast(`Theme accent changed to ${accentColors[key].name}`, 'info');
                  }}
                  className={`px-2.5 py-1 text-[11px] font-mono capitalize border transition-all ${
                    activeAccent === key
                      ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900 font-bold border-stone-900 dark:border-stone-100'
                      : 'bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400 border-transparent hover:border-stone-400'
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>

          {/* Experiment 3 & 4: Audio Waveform & Tactile Switch */}
          <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Audio Wave Visualizer */}
            <div className="p-5 bg-stone-50 dark:bg-[#10141d] border border-stone-300 dark:border-stone-800 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-stone-800">
                <span className="font-mono text-xs uppercase text-stone-500">
                  03 // Audio Waveform
                </span>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-xs font-mono text-amber-600 dark:text-amber-400 hover:underline"
                >
                  {isPlaying ? 'Pause Wave' : 'Resume Wave'}
                </button>
              </div>

              {/* Waveform Bars */}
              <div className="h-16 bg-stone-100 dark:bg-stone-900/90 border border-stone-200 dark:border-stone-800 flex items-center justify-center gap-1 px-4 overflow-hidden">
                {[15, 35, 60, 90, 75, 45, 80, 100, 65, 40, 70, 85, 95, 50, 30, 65, 85, 40, 70, 90].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      height: isPlaying ? `${Math.max(15, (h * ((i % 3) + 1)) % 100)}%` : `${h * 0.3}%`,
                      transition: `height ${200 + (i * 25)}ms cubic-bezier(0.4, 0, 0.2, 1)`,
                    }}
                    className="flex-1 bg-amber-600 dark:bg-amber-400 min-w-[2px] max-w-[5px]"
                  />
                ))}
              </div>
            </div>

            {/* Tactile Switch */}
            <div className="p-5 bg-stone-50 dark:bg-[#10141d] border border-stone-300 dark:border-stone-800 space-y-3 flex flex-col justify-between">
              <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-stone-800">
                <span className="font-mono text-xs uppercase text-stone-500">
                  04 // Micro-Interactions
                </span>
                <span className="font-mono text-[10px] text-amber-600 dark:text-amber-400 font-semibold">
                  SPRING PHYSICS
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                <div>
                  <h4 className="text-xs font-semibold font-display text-stone-900 dark:text-stone-100">
                    Tactile Mechanical Switch
                  </h4>
                  <p className="text-[10px] text-stone-500 font-mono">
                    {switchState ? 'STATE: ON' : 'STATE: OFF'}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSwitchState(!switchState);
                    addToast(`Switch toggled to ${!switchState ? 'ON' : 'OFF'}`, 'info');
                  }}
                  className={`relative inline-flex h-6 w-12 items-center border transition-all duration-300 ${
                    switchState ? 'bg-amber-600 border-amber-500' : 'bg-stone-300 dark:bg-stone-800 border-stone-400 dark:border-stone-700'
                  }`}
                  aria-label="Toggle mechanical switch"
                >
                  <span
                    className={`inline-block h-4 w-4 transform bg-white dark:bg-stone-100 transition-transform duration-200 ${
                      switchState ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
