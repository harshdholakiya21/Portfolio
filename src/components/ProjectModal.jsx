import React, { useState } from 'react';
import { X, ExternalLink, Check, Copy, Play, Pause, Volume2, ShieldCheck, Sparkles, Smartphone, Monitor, Bot, Terminal, Cpu, CheckCircle } from 'lucide-react';
import { GithubIcon } from './Icons';
import { useToast } from './Toast';

export const ProjectModal = ({ project, onClose }) => {
  const { addToast } = useToast();
  const [activeTab, setActiveTab] = useState('simulator'); // 'simulator' | 'architecture'

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-stone-950/70 dark:bg-black/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-stone-50 dark:bg-[#0f131a] border border-stone-300 dark:border-stone-800 shadow-2xl my-auto overflow-hidden">
        {/* Modal Top Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-stone-200 dark:border-stone-800 bg-stone-100/90 dark:bg-stone-900/90">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 text-xs font-mono uppercase tracking-wider bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900">
              {project.badge}
            </span>
            <span className="text-xs font-mono text-stone-500">// {project.category}</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center p-0.5 bg-stone-200 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 text-xs font-mono">
              <button
                onClick={() => setActiveTab('simulator')}
                className={`px-3 py-1 transition-all ${
                  activeTab === 'simulator'
                    ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900'
                    : 'text-stone-600 dark:text-stone-400'
                }`}
              >
                Live Interactive UI
              </button>
              <button
                onClick={() => setActiveTab('architecture')}
                className={`px-3 py-1 transition-all ${
                  activeTab === 'architecture'
                    ? 'bg-stone-900 text-stone-50 dark:bg-stone-100 dark:text-stone-900'
                    : 'text-stone-600 dark:text-stone-400'
                }`}
              >
                Architecture & SDE Details
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-500 hover:text-stone-950 dark:hover:text-stone-100 border border-stone-300 dark:border-stone-700 hover:border-stone-500 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Main Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Title & Info */}
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-950 dark:text-stone-50 font-normal">
              {project.title}
            </h2>
            <p className="mt-2 text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
              {project.summary}
            </p>
          </div>

          {activeTab === 'simulator' ? (
            /* Interactive Live UI Playground for the project */
            <div className="border border-stone-300 dark:border-stone-800 bg-stone-100/60 dark:bg-stone-900/40 p-4 sm:p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-stone-800 font-mono text-xs text-stone-500">
                <span>Interactive Software Pipeline Simulation</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">&bull; LIVE RUNTIME</span>
              </div>

              {/* Dynamic Interactive Components based on project type */}
              {project.interactivePreview === 'ai_bot' && <AIBotSimulator />}
              {project.interactivePreview === 'bank' && <BankSimulator />}
              {project.interactivePreview === 'nest' && <ResidentialSimulator />}
              {project.interactivePreview === 'audio' && <AudioPlayerSimulator />}
              {project.interactivePreview === 'editor' && <CodeEditorSimulator />}
              {project.interactivePreview === 'vault' && <PasswordVaultSimulator />}
            </div>
          ) : (
            /* Architecture & Engineering Details */
            <div className="space-y-6">
              <div className="space-y-3">
                <h4 className="font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  Engineering Architecture & Core Logic
                </h4>
                <ul className="space-y-2.5">
                  {project.architecture.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-stone-700 dark:text-stone-300">
                      <span className="w-1.5 h-1.5 mt-2 bg-amber-600 dark:bg-amber-400 rounded-full flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-stone-200 dark:border-stone-800">
                <h4 className="font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3">
                  Technical Stack & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-mono bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Modal Footer Links */}
          <div className="pt-6 border-t border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs font-mono text-stone-500">
              <span>Author: Harsh Dholakiya</span>
              <span>//</span>
              <span>4th Year CSE (AI) Parul University</span>
            </div>

            <div className="flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-mono font-medium border border-stone-300 dark:border-stone-700 hover:border-stone-900 dark:hover:border-stone-100 flex items-center gap-2 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Interactive Sandbox 0: YouTube AI Automation Engine */
const AIBotSimulator = () => {
  const [topic, setTopic] = useState('Top 3 AI Breakthroughs in 2026');
  const [step, setStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const { addToast } = useToast();

  const handleRunPipeline = () => {
    setIsRunning(true);
    setStep(1);

    setTimeout(() => setStep(2), 700);
    setTimeout(() => setStep(3), 1500);
    setTimeout(() => {
      setStep(4);
      setIsRunning(false);
      addToast('AI Video Rendered & Synthesized Successfully!', 'success');
    }, 2200);
  };

  return (
    <div className="p-4 sm:p-5 bg-stone-900 text-stone-100 dark:bg-black border border-stone-700 font-mono space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-stone-800">
        <span className="text-xs text-rose-400 font-semibold flex items-center gap-2">
          <Bot className="w-4 h-4" />
          <span>Python AI Shorts Automation Engine</span>
        </span>
        <span className="text-[10px] text-emerald-400">MoviePy + OpenAI Engine</span>
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter video prompt or topic..."
          className="flex-1 px-3 py-2 bg-stone-800 text-xs border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:border-rose-500"
        />
        <button
          onClick={handleRunPipeline}
          disabled={isRunning}
          className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-stone-950 font-bold text-xs transition-colors disabled:opacity-50 flex items-center justify-center gap-1.5"
        >
          <Cpu className="w-3.5 h-3.5" />
          <span>{isRunning ? 'Synthesizing...' : 'Run Pipeline &rarr;'}</span>
        </button>
      </div>

      {/* Execution Pipeline Logs */}
      <div className="p-3 bg-stone-950 border border-stone-800 space-y-2 text-[11px]">
        <div className="flex items-center gap-2 text-stone-400">
          <Terminal className="w-3.5 h-3.5 text-amber-400" />
          <span>Pipeline Execution Feed:</span>
        </div>

        <div className="space-y-1 pl-2 border-l border-stone-800 font-mono">
          <p className={step >= 1 ? 'text-emerald-400' : 'text-stone-600'}>
            [1/4] LLM Script Generator: Chained 45s viral narrative hook for "{topic}"
          </p>
          <p className={step >= 2 ? 'text-emerald-400' : 'text-stone-600'}>
            [2/4] Neural TTS Engine: Audio synthesized (24kHz WAV, 150 WPM cadence)
          </p>
          <p className={step >= 3 ? 'text-emerald-400' : 'text-stone-600'}>
            [3/4] MoviePy Compositor: 1080x1920 60FPS video rendered with word-timed subtitles
          </p>
          <p className={step >= 4 ? 'text-emerald-300 font-bold' : 'text-stone-600'}>
            [4/4] YouTube Data API: Video scheduled & thumbnail metadata synchronized.
          </p>
        </div>
      </div>
    </div>
  );
};

/* Interactive Sandbox 1: HD Bank */
const BankSimulator = () => {
  const [balance, setBalance] = useState(14850.50);
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [status, setStatus] = useState('');
  const { addToast } = useToast();

  const handleTransfer = (e) => {
    e.preventDefault();
    const val = parseFloat(amount);
    if (!val || val <= 0) {
      setStatus('Please enter a valid amount.');
      return;
    }
    if (val > balance) {
      setStatus('Insufficient account balance.');
      return;
    }
    setBalance((prev) => prev - val);
    setStatus(`Transferred $${val.toFixed(2)} to ${recipient || 'Account #8492'} successfully.`);
    addToast(`Transfer of $${val.toFixed(2)} confirmed!`, 'success');
    setAmount('');
    setRecipient('');
  };

  return (
    <div className="p-4 sm:p-5 bg-stone-900 text-stone-100 dark:bg-black border border-stone-700 font-mono space-y-4">
      <div className="flex justify-between items-center pb-3 border-b border-stone-800">
        <div>
          <span className="text-[11px] text-stone-400">Total Checking Balance</span>
          <p className="text-2xl font-bold text-emerald-400">${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
        </div>
        <span className="px-2 py-1 text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800">HD_BANK_SECURE</span>
      </div>

      <form onSubmit={handleTransfer} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <input
          type="text"
          placeholder="Recipient (e.g. Alex M.)"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          className="px-3 py-2 bg-stone-800 text-xs border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
        />
        <input
          type="number"
          placeholder="Amount ($)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="px-3 py-2 bg-stone-800 text-xs border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-xs transition-colors"
        >
          Send Wire &rarr;
        </button>
      </form>

      {status && (
        <p className="text-xs text-stone-300 bg-stone-800/80 p-2 border-l-2 border-emerald-500">
          {status}
        </p>
      )}
    </div>
  );
};

/* Interactive Sandbox 2: Residential Community */
const ResidentialSimulator = () => {
  const [visitorName, setVisitorName] = useState('');
  const [passes, setPasses] = useState(['Pass #A-402: Delivery Agent (Valid)', 'Pass #B-108: Guest Martin (Valid)']);
  const { addToast } = useToast();

  const handleGenerate = (e) => {
    e.preventDefault();
    if (!visitorName.trim()) return;
    const newPass = `Pass #${Math.floor(Math.random() * 800 + 100)}: ${visitorName} (Approved)`;
    setPasses([newPass, ...passes]);
    setVisitorName('');
    addToast('Digital Visitor Pass Generated!', 'success');
  };

  return (
    <div className="p-4 sm:p-5 bg-stone-900 text-stone-100 dark:bg-black border border-stone-700 font-mono space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-stone-800">
        <span className="text-xs text-sky-400 font-semibold">Urban Nest Society Gateway</span>
        <span className="text-[10px] text-stone-400">Wing A &bull; Unit 402</span>
      </div>

      <form onSubmit={handleGenerate} className="flex gap-2">
        <input
          type="text"
          placeholder="Enter visitor/guest name..."
          value={visitorName}
          onChange={(e) => setVisitorName(e.target.value)}
          className="flex-1 px-3 py-2 bg-stone-800 text-xs border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:border-sky-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-sky-500 hover:bg-sky-400 text-stone-950 font-bold text-xs transition-colors"
        >
          Issue Pass
        </button>
      </form>

      <div className="space-y-1.5">
        <span className="text-[10px] text-stone-400 uppercase tracking-wider">Active Digital Gate Passes</span>
        {passes.slice(0, 3).map((p, idx) => (
          <div key={idx} className="text-xs text-stone-300 bg-stone-800/60 p-2 border-l-2 border-sky-400 flex justify-between">
            <span>{p}</span>
            <span className="text-emerald-400 text-[10px]">QR Active</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* Interactive Sandbox 3: Spotify Web Player */
const AudioPlayerSimulator = () => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(38);
  const [volume, setVolume] = useState(75);

  return (
    <div className="p-4 sm:p-5 bg-stone-900 text-stone-100 dark:bg-black border border-stone-700 font-mono space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-stone-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-700 flex items-center justify-center text-xs font-bold">
            SPOT
          </div>
          <div>
            <p className="text-xs font-semibold text-white">Full-Stack Engineering Session</p>
            <p className="text-[10px] text-stone-400">Harsh Dholakiya &bull; Parul University</p>
          </div>
        </div>

        <button
          onClick={() => setPlaying(!playing)}
          className="w-9 h-9 rounded-full bg-emerald-500 hover:bg-emerald-400 text-stone-950 flex items-center justify-center transition-transform hover:scale-105"
        >
          {playing ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
        </button>
      </div>

      <div className="space-y-1">
        <div className="flex justify-between text-[10px] text-stone-400">
          <span>1:14</span>
          <span>3:28</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={(e) => setProgress(e.target.value)}
          className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-stone-800"
        />
      </div>

      <div className="flex items-center justify-between pt-2 text-[11px] text-stone-400">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <span className={`w-2 h-2 rounded-full ${playing ? 'bg-emerald-400 animate-ping' : 'bg-stone-600'}`}></span>
          {playing ? 'Audio Buffer Streaming (WebAudio API)' : 'Paused'}
        </span>

        <div className="flex items-center gap-2">
          <Volume2 className="w-3.5 h-3.5" />
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            className="w-16 accent-emerald-500 h-1 bg-stone-800 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

/* Interactive Sandbox 4: UltraEdit Code Editor */
const CodeEditorSimulator = () => {
  const [theme, setTheme] = useState('obsidian'); // 'obsidian' | 'paper'
  const codeSnippet = `// SDE Architecture Pattern: Factory & Observer
class SoftwareEngine {
  constructor(config) {
    this.runtime = config.runtime || "Node.js";
    this.aiPipeline = true;
    this.candidate = "Harsh Dholakiya";
  }

  executeTask(task) {
    console.log(\`Executing \${task} with Big-O O(log n) efficiency\`);
  }
}`;

  return (
    <div className={`p-4 border font-mono text-xs space-y-3 ${
      theme === 'obsidian' ? 'bg-[#090c10] text-stone-200 border-stone-700' : 'bg-stone-100 text-stone-900 border-stone-300'
    }`}>
      <div className="flex items-center justify-between pb-2 border-b border-stone-700/60">
        <div className="flex gap-1.5">
          <span className="px-2 py-0.5 bg-stone-800 text-[10px] text-amber-300 border-t-2 border-amber-400">
            engine.js
          </span>
          <span className="px-2 py-0.5 bg-stone-800/40 text-[10px] text-stone-400">
            schema.json
          </span>
        </div>

        <button
          onClick={() => setTheme(theme === 'obsidian' ? 'paper' : 'obsidian')}
          className="text-[10px] underline text-stone-400 hover:text-stone-200"
        >
          Theme: {theme}
        </button>
      </div>

      <pre className="text-[11px] leading-relaxed overflow-x-auto text-amber-200 dark:text-amber-300">
        {codeSnippet}
      </pre>
    </div>
  );
};

/* Interactive Sandbox 5: Password Vault */
const PasswordVaultSimulator = () => {
  const [password, setPassword] = useState('k9#XmP!82wL$');
  const [copied, setCopied] = useState(false);
  const { addToast } = useToast();

  const generatePass = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%^&*';
    let res = '';
    for (let i = 0; i < 14; i++) {
      res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(res);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    addToast('Generated password copied securely!', 'copy');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-4 sm:p-5 bg-stone-900 text-stone-100 dark:bg-black border border-stone-700 font-mono space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs text-purple-400 font-semibold">KeyVault Web Crypto Engine</span>
        <span className="text-[10px] text-emerald-400">Entropy: 128-bit CSPRNG</span>
      </div>

      <div className="flex items-center justify-between p-2.5 bg-stone-800 border border-stone-700">
        <span className="text-sm tracking-widest text-stone-100">{password}</span>
        <button
          onClick={copyToClipboard}
          className="p-1.5 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
          title="Copy password"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>

      <button
        onClick={generatePass}
        className="w-full py-2 bg-purple-600 hover:bg-purple-500 text-stone-950 font-bold text-xs transition-colors"
      >
        Regenerate CSPRNG Entropy Sequence &rarr;
      </button>
    </div>
  );
};
