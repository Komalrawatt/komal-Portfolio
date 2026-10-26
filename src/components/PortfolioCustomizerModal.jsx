import React, { useState } from 'react';
import { X, Save, RotateCcw, Settings, User, Link as LinkIcon } from 'lucide-react';

const PortfolioCustomizerModal = ({ isOpen, onClose, profile, onSave, onReset }) => {
  const [formData, setFormData] = useState({ ...profile });
  const [activeTab, setActiveTab] = useState('profile');

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLinkChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      links: { ...prev.links, [key]: value }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-zinc-950 border border-neutral-800 rounded-xl shadow-2xl p-5 sm:p-7 font-mono">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-neutral-900 border border-neutral-800 rounded-lg text-emerald-400">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-zinc-100 flex items-center gap-2">
                <span>Portfolio Customizer</span>
                <span className="text-xs font-normal text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-2 py-0.5 rounded">
                  cmd: edit
                </span>
              </h2>
              <p className="text-xs text-zinc-400 font-serif italic mt-0.5">
                Personalize contact details, bio & social profiles
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

        {/* Tab selector */}
        <div className="flex border-b border-neutral-800 mb-6 gap-2 text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('profile')}
            className={`px-4 py-2 border-b-2 font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'profile'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Profile & Bio</span>
          </button>
          
          <button
            type="button"
            onClick={() => setActiveTab('socials')}
            className={`px-4 py-2 border-b-2 font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'socials'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <LinkIcon className="w-3.5 h-3.5" />
            <span>Social Links</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {activeTab === 'profile' && (
            <>
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name || ''}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-neutral-800 rounded px-3 py-2 text-xs text-zinc-200 focus:border-emerald-500 focus:outline-none"
                  placeholder="e.g. Komal Rawat"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">
                  Handle / Username
                </label>
                <input
                  type="text"
                  name="handle"
                  value={formData.handle || ''}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-neutral-800 rounded px-3 py-2 text-xs text-zinc-200 focus:border-emerald-500 focus:outline-none"
                  placeholder="e.g. komalrawat"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email || ''}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 border border-neutral-800 rounded px-3 py-2 text-xs text-zinc-200 focus:border-emerald-500 focus:outline-none"
                    placeholder="e.g. komal.rawatx@gmail.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone || ''}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 border border-neutral-800 rounded px-3 py-2 text-xs text-zinc-200 focus:border-emerald-500 focus:outline-none"
                    placeholder="e.g. +91-9560349818"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location || ''}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-neutral-800 rounded px-3 py-2 text-xs text-zinc-200 focus:border-emerald-500 focus:outline-none"
                  placeholder="e.g. Haryana, India"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">
                  Hero Headline Text
                </label>
                <input
                  type="text"
                  name="heroText"
                  value={formData.heroText || ''}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-neutral-800 rounded px-3 py-2 text-xs text-zinc-200 focus:border-emerald-500 focus:outline-none"
                  placeholder="e.g. hi, i build scalable full-stack web applications."
                />
              </div>
            </>
          )}

          {activeTab === 'socials' && (
            <>
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">
                  GitHub Profile URL
                </label>
                <input
                  type="text"
                  value={formData.links?.github || ''}
                  onChange={(e) => handleLinkChange('github', e.target.value)}
                  className="w-full bg-zinc-900 border border-neutral-800 rounded px-3 py-2 text-xs text-zinc-200 focus:border-emerald-500 focus:outline-none"
                  placeholder="https://github.com/komalrawat"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">
                  LinkedIn Profile URL
                </label>
                <input
                  type="text"
                  value={formData.links?.linkedin || ''}
                  onChange={(e) => handleLinkChange('linkedin', e.target.value)}
                  className="w-full bg-zinc-900 border border-neutral-800 rounded px-3 py-2 text-xs text-zinc-200 focus:border-emerald-500 focus:outline-none"
                  placeholder="https://linkedin.com/in/komalrawat"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">
                  LeetCode Profile URL
                </label>
                <input
                  type="text"
                  value={formData.links?.leetcode || ''}
                  onChange={(e) => handleLinkChange('leetcode', e.target.value)}
                  className="w-full bg-zinc-900 border border-neutral-800 rounded px-3 py-2 text-xs text-zinc-200 focus:border-emerald-500 focus:outline-none"
                  placeholder="https://leetcode.com/komalrawat"
                />
              </div>
            </>
          )}

          {/* Action buttons */}
          <div className="flex items-center justify-between pt-6 border-t border-neutral-800">
            <button
              type="button"
              onClick={onReset}
              className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-red-400 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              
              <button
                type="submit"
                className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-black font-semibold px-4 py-2 rounded text-xs transition-colors cursor-pointer"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Profile</span>
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
};

export default PortfolioCustomizerModal;

