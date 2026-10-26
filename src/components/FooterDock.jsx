import React from 'react';

const FooterDock = ({ onExecuteCommand, resumeUrl }) => {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-30 p-3 sm:p-5 pointer-events-none">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 pointer-events-auto">
        
        {/* Left shortcut pill */}
        <button
          onClick={() => onExecuteCommand('exp')}
          className="font-mono text-xs text-zinc-500 hover:text-emerald-400 bg-zinc-950/80  px-3 py-1.5 rounded transition-all backdrop-blur-md cursor-pointer group shadow-lg"
          title="Type 'exp' to view Work Experience"
        >
          <span className="text-zinc-600 group-hover:text-emerald-500">[</span>
          <span className="text-zinc-400 group-hover:text-emerald-300">type 'exp'</span>
          <span className="text-zinc-600 group-hover:text-emerald-500">]</span>
        </button>

        {/* Command shortcuts */}
        <div className="flex-1 max-w-md w-full">
          <div className="mt-1 text-center font-serif italic text-[11px] text-zinc-400">
            want my '
           resume
            ' ?  type it...
          </div>
        </div>

        {/* Right shortcut pill */}
        <button
          onClick={() => onExecuteCommand('projects')}
          className="font-mono text-xs text-zinc-500 hover:text-emerald-400 bg-zinc-950/80  px-3 py-1.5 rounded transition-all backdrop-blur-md cursor-pointer group shadow-lg"
          title="Type 'projects' to view Project Work"
        >
          <span className="text-zinc-600 group-hover:text-emerald-500">[</span>
          <span className="text-zinc-400 group-hover:text-emerald-300">type 'projects'</span>
          <span className="text-zinc-600 group-hover:text-emerald-500">]</span>
        </button>

      </div>
    </footer>
  );
};

export default FooterDock;
