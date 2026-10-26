import React from 'react';

const SocialCards = ({ links = {} }) => {
  const cards = [
    {
      id: 'github',
      title: 'github',
      subtitle: 'the code place',
      url: links.github ,
      ariaLabel: 'Visit my GitHub profile'
    },
    {
      id: 'linkedin',
      title: 'linkedin',
      subtitle: 'the brag place',
      url: links.linkedin ,
      ariaLabel: 'Connect with me on LinkedIn'
    },
    {
      id: 'leetcode',
      title: 'leetcode',
      subtitle: 'the competitive place',
      url: links.leetcode ,
      ariaLabel: 'View my LeetCode profile'
    }
  ];

  return (
    <section className="grid w-full max-w-5xl gap-3 sm:gap-5 grid-cols-1 md:grid-cols-3 z-10 px-4 mt-auto mb-32 sm:mb-24" aria-label="Social links">
      {cards.map((card) => (
        <a
          key={card.id}
          href={card.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={card.ariaLabel}
          className="group relative block border border-neutral-800/80 bg-neutral-900/30 backdrop-blur-sm px-5 py-4 sm:p-6 transition-all duration-300 hover:border-emerald-500/50 hover:bg-neutral-800/40 rounded-lg overflow-hidden shadow-lg"
        >
          {/* Top animated line */}
          <div className="absolute top-0 left-0 h-px w-0 bg-emerald-400/50 transition-all duration-500 group-hover:w-full"></div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-zinc-500 transition-colors duration-300 group-hover:text-emerald-400">
              &gt;_
            </span>
            <h2 className="font-mono text-base font-semibold text-neutral-200 transition-colors duration-300 group-hover:text-white sm:text-xl capitalize">
              {card.title}
            </h2>
            <span className="ml-auto translate-x-2 font-mono text-sm text-transparent transition-all duration-300 group-hover:translate-x-0 group-hover:text-emerald-400">
              -&gt;
            </span>
          </div>

          <div className="mt-1.5 pl-6">
            <p className="font-serif italic text-sm text-neutral-400 transition-colors tracking-wide duration-300 group-hover:text-neutral-200">
              {card.subtitle}
            </p>
          </div>

          {/* Bottom animated line */}
          <div className="absolute bottom-0 right-0 h-px w-0 bg-emerald-400/50 transition-all duration-500 group-hover:w-full"></div>
        </a>
      ))}
    </section>
  );
};

export default SocialCards;
