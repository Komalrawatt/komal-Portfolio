import React from 'react';
import { X, FileText, Download, ExternalLink, ShieldCheck, User } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose, resumeUrl = '/resume.pdf', profile = {} }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-zinc-950 border border-neutral-800 rounded-xl shadow-2xl p-6 font-mono">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-neutral-900 border border-neutral-800 rounded-lg text-emerald-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
                <span>Resume / CV</span>
                <span className="text-xs font-normal text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-2 py-0.5 rounded">
                  cmd: resume
                </span>
              </h2>
              <p className="text-xs text-zinc-400 font-serif italic mt-0.5">
                Komal Rawat • Software Engineer & Full-Stack Developer
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
            title="Close [Esc]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action card */}
        <div className="border border-neutral-800 bg-neutral-900/50 p-6 rounded-lg text-center space-y-4">
          <div className="w-14 h-14 mx-auto bg-neutral-800/80 border border-neutral-700 rounded-full flex items-center justify-center text-emerald-400">
            <ShieldCheck className="w-7 h-7" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-zinc-100">{profile.name || 'Komal Rawat'}</h3>
            <p className="text-xs text-emerald-400 font-mono mt-0.5">{profile.email} • {profile.phone}</p>
            <p className="text-xs text-zinc-300 mt-2 font-sans max-w-md mx-auto leading-relaxed">
              Full-Stack Developer specializing in MERN Stack, React.js, Node.js, Firebase & Cloud integrations. Associate Software Engineer Trainee at Accenture & Web Developer Intern at AKVIP Technologies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-black font-semibold px-5 py-2.5 rounded-lg transition-colors text-xs cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open Resume PDF</span>
            </a>

            <a
              href={resumeUrl}
              download="Komal_Rawat_Resume.pdf"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-zinc-200 border border-neutral-700 px-5 py-2.5 rounded-lg transition-colors text-xs cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-6 text-center text-xs text-zinc-600">
          Press <kbd className="bg-neutral-800 text-zinc-300 px-1.5 py-0.5 rounded border border-neutral-700">ESC</kbd> to exit
        </div>

      </div>
    </div>
  );
};

export default ResumeModal;

