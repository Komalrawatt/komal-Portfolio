import React, { useState, useEffect, useCallback } from 'react';

// Glyph map for character scramble decoding
const SCRAMBLE_GLYPHS = 'QGQ i\'Kら0ihXrA a bスZldかXI0123456789%#@$&!?:;<>~';

const DEFAULT_PHRASES = [
  "Hi, I'm Komal, a Web Developer",
  "Hi, I'm a Komal, a Blockchain Developer",
  "Hi, I know how to get things done"
];

const ScrambleText = ({ 
  text, 
  phrases = DEFAULT_PHRASES, 
  intervalMs = 3000, 
  onTrigger 
}) => {
  // Use provided phrases array, or fallback to single text if provided
  const phraseList = Array.isArray(phrases) && phrases.length > 0 
    ? phrases 
    : [text || "Hi, I'm Komal, a Web Developer"];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState([]);
  const [isScrambling, setIsScrambling] = useState(false);

  const phrase = phraseList[currentPhraseIndex % phraseList.length];
  const targetText = /[.!?]$/.test(phrase) ? phrase : `${phrase}.`;

  // Determine font style based on index or position pattern to match serif/mono mix
  const getCharStyle = (char, index) => {
    if (char === ' ') return { char: ' ', fontClass: 'font-mono' };
    
    // Pattern to alternate between serif italic & mono for hyper-aesthetic editorial hacker vibe
    const isSerifItalic = [1, 3, 5, 7, 10, 12, 15, 17, 20, 22, 25, 27, 30].includes(index % 32);
    return {
      char,
      fontClass: isSerifItalic ? 'font-serif italic font-normal' : 'font-mono font-medium'
    };
  };

  const scramble = useCallback((textToScramble) => {
    const currentTarget = textToScramble || targetText;
    setIsScrambling(true);
    let iteration = 0;
    const maxIterations = 25;
    
    const interval = setInterval(() => {
      setDisplayText(() => {
        return currentTarget.split('').map((targetChar, index) => {
          if (targetChar === ' ') {
            return { char: ' ', fontClass: 'font-mono' };
          }
          
          if (iteration >= (index / currentTarget.length) * maxIterations) {
            return getCharStyle(targetChar, index);
          }
          
          const randomGlyph = SCRAMBLE_GLYPHS[Math.floor(Math.random() * SCRAMBLE_GLYPHS.length)];
          const randomFont = Math.random() > 0.5 ? 'font-serif italic' : 'font-mono';
          return { char: randomGlyph, fontClass: randomFont };
        });
      });

      iteration += 1;

      if (iteration > maxIterations) {
        clearInterval(interval);
        setIsScrambling(false);
      }
    }, 40);
  }, [targetText]);

  // Scramble whenever targetText changes
  useEffect(() => {
    scramble(targetText);
  }, [targetText, scramble]);

  // Set up 10-second timer loop for automatic phrase flipping
  useEffect(() => {
    if (phraseList.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phraseList.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [phraseList.length, intervalMs]);

  const handleNext = () => {
    setCurrentPhraseIndex((prev) => (prev + 1) % phraseList.length);
    if (onTrigger) onTrigger();
  };

  return (
    <div 
      className="relative cursor-pointer select-none group py-4"
      onClick={handleNext}
      title="Click to switch to next phrase"
    >
      <h1 
        className="max-w-[90vw] text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide text-neutral-100 transition-all duration-300 group-hover:text-white min-h-[3.5rem] flex items-center justify-center"
        style={{ transform: 'scaleY(1.05)' }}
      >
        <span className="inline-flex flex-wrap justify-center items-center gap-x-[0.05em]">
          {displayText.map((item, idx) => {
            const isSpace = item.char === ' ';
            return (
              <span 
                key={idx} 
                className={`transition-colors duration-150 ${item.fontClass} ${
                  isScrambling ? 'text-emerald-400/90' : ''
                } ${isSpace ? 'inline-block' : ''}`}
                style={isSpace ? { minWidth: '0.4em', display: 'inline-block' } : undefined}
              >
                {item.char}
              </span>
            );
          })}
        </span>
      </h1>
      
      
    </div>
  );
};

export default ScrambleText;
