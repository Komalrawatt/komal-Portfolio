import React, { useState } from 'react';
import { X, Trophy, GraduationCap, Code2, Award, Flame, Calendar, MapPin, CheckCircle } from 'lucide-react';

const AchievementsModal = ({ isOpen, onClose, achievements = [], education = [], skills = {} }) => {
  const [activeTab, setActiveTab] = useState('education');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-zinc-950 border border-neutral-800 rounded-xl shadow-2xl p-5 sm:p-8 font-mono">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-neutral-900 border border-neutral-800 rounded-lg text-amber-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
                <span>Education, Skills & Achievements</span>
                <span className="text-xs font-normal text-amber-400/90 bg-amber-950/40 border border-amber-500/30 px-2 py-0.5 rounded">
                  cmd: edu / 0x
                </span>
              </h2>
              <p className="text-xs text-zinc-400 font-serif italic mt-0.5">
                Academic record, core technical skillsets & honors
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

        {/* Tab Navigation */}
        <div className="flex border-b border-neutral-800 mb-6 gap-2 text-xs overflow-x-auto pb-1">
          <button
            onClick={() => setActiveTab('education')}
            className={`px-4 py-2 border-b-2 font-semibold transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === 'education'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Education ({education.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('skills')}
            className={`px-4 py-2 border-b-2 font-semibold transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === 'skills'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Skills & Certifications</span>
          </button>

          <button
            onClick={() => setActiveTab('achievements')}
            className={`px-4 py-2 border-b-2 font-semibold transition-colors flex items-center gap-2 cursor-pointer ${
              activeTab === 'achievements'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Achievements ({achievements.length})</span>
          </button>
        </div>

        {/* Tab 1: Education */}
        {activeTab === 'education' && (
          <div className="space-y-4">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="group relative border border-neutral-800 bg-neutral-900/40 hover:border-amber-500/40 p-5 rounded-lg transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <div>
                    <h3 className="text-base font-semibold text-zinc-100 group-hover:text-amber-300 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-xs text-amber-400 font-mono mt-0.5">{edu.institution}</p>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs text-zinc-400 font-mono">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-500" />
                      <span>{edu.period}</span>
                    </div>
                    {edu.location && (
                      <div className="flex items-center gap-1 text-[11px] text-zinc-500 mt-0.5">
                        <MapPin className="w-3 h-3 text-zinc-600" />
                        <span>{edu.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-neutral-800/60 flex items-center gap-2 text-xs">
                  <span className="text-zinc-400">Academic Score:</span>
                  <span className="font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                    {edu.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Skills & Certifications */}
        {activeTab === 'skills' && (
          <div className="space-y-5">
            {/* Languages */}
            <div className="border border-neutral-800 bg-neutral-900/40 p-4 rounded-lg">
              <h3 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-amber-400" />
                <span>Languages</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {(skills.languages || []).map((lang, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono bg-zinc-900 text-zinc-200 border border-neutral-800 px-3 py-1 rounded hover:border-amber-500/50 transition-colors"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="border border-neutral-800 bg-neutral-900/40 p-4 rounded-lg">
              <h3 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                <span>Technical Skills & Frameworks</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {(skills.technical || []).map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono bg-zinc-900 text-zinc-200 border border-neutral-800 px-3 py-1 rounded hover:border-amber-500/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="border border-neutral-800 bg-neutral-900/40 p-4 rounded-lg">
              <h3 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Certifications</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {(skills.certifications || []).map((cert, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono bg-amber-950/40 text-amber-200 border border-amber-500/30 px-3 py-1 rounded"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Achievements */}
        {activeTab === 'achievements' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="group relative border border-neutral-800 bg-neutral-900/40 hover:border-amber-500/40 p-5 rounded-lg transition-all"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-amber-400 font-mono bg-amber-950/60 border border-amber-500/20 px-2 py-0.5 rounded inline-block mb-1.5">
                      {item.prize || 'Award'}
                    </span>
                    <h3 className="text-base font-semibold text-zinc-100 group-hover:text-amber-200 transition-colors">
                      {item.event}
                    </h3>
                  </div>
                  <Award className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed font-sans my-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Footer info */}
        <div className="mt-8 pt-4 border-t border-neutral-900 flex items-center justify-between text-xs text-zinc-600">
          <span className="flex items-center gap-1.5 text-amber-400/90 font-mono text-[11px]">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Komal Rawat • J.C. Bose University MCA & BCA Merit Scholar</span>
          </span>
          <span>Press <kbd className="bg-neutral-800 text-zinc-300 px-1.5 py-0.5 rounded border border-neutral-700">ESC</kbd> to exit</span>
        </div>

      </div>
    </div>
  );
};

export default AchievementsModal;

