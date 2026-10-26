import React from 'react';
import { X, Terminal, Zap } from 'lucide-react';

const TerminalHelpModal = ({ isOpen, onClose, onExecuteCommand }) => {
  if (!isOpen) return null;

  const commands = [
    { cmd: 'exp', desc: 'View work experience (Accenture & AKVIP Technologies)', category: 'Portfolio' },
    { cmd: 'projects', desc: 'Explore featured projects (StudyNotion & Research Suite)', category: 'Portfolio' },
    { cmd: 'edu', desc: 'Check education background, MCA, BCA & academic scores', category: 'Portfolio' },
    { cmd: '0x', desc: 'View skills, certifications & academic achievements', category: 'Portfolio' },
    { cmd: 'resume', desc: 'View or download official PDF resume', category: 'Portfolio' },
    { cmd: 'matrix', desc: 'Toggle matrix background color modes (green / cyan / dark)', category: 'Visual' },
    { cmd: 'edit', desc: 'Open portfolio customizer to edit handle, contact & links', category: 'System' },
    { cmd: 'clear', desc: 'Close all open windows & clear terminal buffer', category: 'System' },
    { cmd: 'help', desc: 'Show this CLI command palette', category: 'System' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-zinc-950 border border-neutral-800 rounded-xl shadow-2xl p-5 sm:p-7 font-mono">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-neutral-900 border border-neutral-800 rounded-lg text-emerald-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-zinc-100 flex items-center gap-2">
                <span>CLI Terminal Commands</span>
                <span className="text-xs font-normal text-zinc-400 bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded">
                  cmd: help
                </span>
              </h2>
              <p className="text-xs text-zinc-400 font-serif italic mt-0.5">
                Keyboard shortcuts & interactive terminal tools
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Command list */}
        <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-1">
          {commands.map((c, idx) => (
            <div
              key={idx}
              onClick={() => {
                onExecuteCommand(c.cmd);
                onClose();
              }}
              className="group flex items-center justify-between p-3 border border-neutral-900 hover:border-emerald-500/40 bg-neutral-900/30 hover:bg-neutral-900/80 rounded-lg cursor-pointer transition-all"
            >
              <div className="flex items-center gap-3">
                <kbd className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded group-hover:scale-105 transition-transform">
                  {c.cmd}
                </kbd>
                <span className="text-xs text-zinc-300 font-sans">{c.desc}</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider hidden sm:inline">
                  {c.category}
                </span>
                <Zap className="w-3.5 h-3.5 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-neutral-900 text-center text-xs text-zinc-500">
          Tip: You can type any command directly on your keyboard at any time!
        </div>

      </div>
    </div>
  );
};

export default TerminalHelpModal;

