import React, { useState, useEffect } from 'react';
import { X, Briefcase, Calendar, Code, Layers } from 'lucide-react';

const ExperienceModal = ({ isOpen, onClose, experience = [], projects = [], initialTab = 'experience' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-zinc-950 border border-neutral-800 rounded-xl shadow-2xl p-5 sm:p-8 font-mono">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-neutral-900 border border-neutral-800 rounded-lg text-emerald-400">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
                <span>Work Experience & Projects</span>
                
              </h2>
              
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close experience and projects"
            className="flex items-center gap-2 px-3 py-2 text-xs text-zinc-400 hover:text-white hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors cursor-pointer"
            title="Close [Esc]"
          >
            <X className="w-5 h-5" />
            <span>Close</span>
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-neutral-800 mb-6 gap-2 text-xs">
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-4 py-2 border-b-2 font-semibold transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === 'experience'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work Experience ({experience.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-2 border-b-2 font-semibold transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === 'projects'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Project Work ({projects.length})</span>
          </button>
        </div>

        {/* Tab Content: Work Experience */}
        {activeTab === 'experience' && (
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="group relative border border-neutral-800/80 bg-neutral-900/30 hover:border-neutral-700 p-5 rounded-lg transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-base font-semibold text-zinc-100 flex items-center gap-2">
                    <span>{exp.title}</span>
                    <span className="text-zinc-500">@</span>
                    <span className="text-emerald-400 font-semibold">{exp.company}</span>
                  </h3>
                  
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{exp.period}</span>
                    {exp.type && <span className="text-zinc-500">({exp.type})</span>}
                  </div>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed my-3 font-sans">
                  {exp.description}
                </p>

                {/* Technologies */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-neutral-800/60">
                    <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 mb-2">
                      <Code className="w-3 h-3 text-emerald-500" />
                      <span>Tech Stack:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-mono bg-zinc-900 text-zinc-300 border border-neutral-800 px-2 py-0.5 rounded hover:border-emerald-500/40 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Tab Content: Project Work */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="group relative border border-neutral-800/80 bg-neutral-900/30 hover:border-emerald-500/40 p-5 rounded-lg transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-mono bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded inline-block mb-1.5">
                      {proj.tag || 'Project'}
                    </span>
                    <h3 className="text-base font-semibold text-zinc-100 group-hover:text-emerald-300 transition-colors">
                      {proj.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed my-2 font-sans">
                  {proj.description}
                </p>

                {/* STAR Breakdown */}
                <div className="space-y-2 mt-3 pt-3 border-t border-neutral-800/60 text-xs font-sans">
                  {proj.situation && (
                    <div className="flex items-start gap-2">
                      <span className="text-[10px] font-mono font-bold text-emerald-400 bg-neutral-900 px-1.5 py-0.5 rounded border border-neutral-800 shrink-0 mt-0.5">Situation</span>
                      <span className="text-zinc-300 text-[11px]">{proj.situation}</span>
                    </div>
                  )}
                  {proj.task && (
                    <div className="flex items-start gap-2">
                      <span className="text-[10px] font-mono font-bold text-emerald-400 bg-neutral-900 px-1.5 py-0.5 rounded border border-neutral-800 shrink-0 mt-0.5">Task</span>
                      <span className="text-zinc-300 text-[11px]">{proj.task}</span>
                    </div>
                  )}
                  {proj.action && (
                    <div className="flex items-start gap-2">
                      <span className="text-[10px] font-mono font-bold text-emerald-400 bg-neutral-900 px-1.5 py-0.5 rounded border border-neutral-800 shrink-0 mt-0.5">Action</span>
                      <span className="text-zinc-300 text-[11px]">{proj.action}</span>
                    </div>
                  )}
                  {proj.result && (
                    <div className="flex items-start gap-2">
                      <span className="text-[10px] font-mono font-bold text-emerald-400 bg-neutral-900 px-1.5 py-0.5 rounded border border-neutral-800 shrink-0 mt-0.5">Result</span>
                      <span className="text-zinc-300 text-[11px]">{proj.result}</span>
                    </div>
                  )}
                </div>

                {/* Tech Stack */}
                {proj.technologies && proj.technologies.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-neutral-800/60">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-mono bg-zinc-900 text-zinc-300 border border-neutral-800 px-2 py-0.5 rounded hover:border-emerald-500/40 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

      
      </div>
    </div>
  );
};

export default ExperienceModal;
