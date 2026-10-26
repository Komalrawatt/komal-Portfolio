import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const Header = ({ profile}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    if (profile.email) {
      navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <header className=" mt-20 z-30 w-full max-w-4xl items-center justify-between text-sm flex flex-col sm:flex-row gap-3 px-4 py-3 sm:py-6">
      <div className=" self-start flex items-center justify-start border border-neutral-800 bg-zinc-900/50 backdrop-blur-2xl py-1 px-6 sm:py-3 sm:px-6 shadow-2xl transition-all duration-300 hover:border-neutral-700">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 font-mono text-xs sm:text-sm">
          <span
            className="font-serif text-base sm:text-lg tracking-wider text-zinc-100 hover:text-emerald-400 transition-colors cursor-pointer"
            onClick={() => window.open(profile.links?.github || 'https://github.com', '_blank')}
          >
            {profile.name || profile.handle}
          </span>

          <span className="hidden sm:inline text-zinc-600">|</span>

          <button
            onClick={handleCopyEmail}
            className="group flex items-center gap-1.5 min-w-0 max-w-full text-zinc-300 hover:text-emerald-400 transition-all duration-300 cursor-pointer"
            title="Click to copy email address"
          >
            <span className="break-all">{profile.email}</span>
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-400 animate-bounce" />
            ) : (
              <Copy className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-zinc-400 transition-opacity" />
            )}
          </button>
        </div>
      </div>

     
      {/* Toast popup when copied */}
      {copied && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 px-4 py-2 rounded-lg font-mono text-xs shadow-lg backdrop-blur-md animate-fade-in flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>Email copied to clipboard! ({profile.email})</span>
        </div>
      )}
    </header>
  );
};

export default Header;
