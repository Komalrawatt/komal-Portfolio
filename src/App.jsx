import React, { useState, useEffect, useCallback } from 'react';
import MatrixRain from './components/MatrixRain';
import Header from './components/Header';
import ScrambleText from './components/ScrambleText';
import SocialCards from './components/SocialCards';
import FooterDock from './components/FooterDock';
import ExperienceModal from './components/ExperienceModal';
import AchievementsModal from './components/AchievementsModal';
import TerminalHelpModal from './components/TerminalHelpModal';
import PortfolioCustomizerModal from './components/PortfolioCustomizerModal';

const DEFAULT_PROFILE = {
  name: 'Komal Rawat',
  handle: 'komalrawat',
  email: 'komal.rawatx@gmail.com',
  phone: '+91-9560349818',
  location: 'Haryana, India',
  heroText: 'i, i build scalable full-stack web applications & edtech solutions.',
  heroPhrases: [
    "Hi, I'm Komal, a Web Developer.",
    "Hi, I'm Komal, a Blockchain Developer.",
    "Hi, I'm Komal, a MERN Stack Developer.",
    "Hi, I'm Komal, a Problem Solver.",
    "Hi, I know how to get things done."
  ],
  resumeUrl: 'https://drive.google.com/file/d/1qM_PwuA--cTHcQ0dnznO_u2J385PYqtp/view?usp=sharing',
  links: {
    github: 'https://github.com/Komalrawatt',
    linkedin: 'https://www.linkedin.com/in/komal-rawat-a60631245',
    leetcode: 'https://leetcode.com/u/__Komal16/',
  },
  experience: [
    {
      title: 'Associate Software Engineer Trainee',
      company: 'Accenture Solutions Pvt. Ltd.',
      period: '23 Feb 2026 – 15 May 2026',
      type: 'Trainee',
      description: 'Completed industry-focused training in Python, MySQL, AWS, Agile, DevOps, MEAN Stack, Node.js, and Microservices. Developed a MEAN Stack project simulation featuring authentication, REST APIs, CRUD operations, and database integration.',
      technologies: ['Python', 'MySQL', 'AWS', 'Agile', 'DevOps', 'MEAN Stack', 'Node.js', 'Express.js', 'MongoDB', 'Microservices'],
    },
    {
      title: 'Web Developer Intern',
      company: 'AKVIP Technologies',
      period: '30 Jan 2026 – 30 Jun 2026',
      type: 'Internship',
      description: 'Worked on real-world web development projects using React.js, building responsive and user-friendly interfaces. Developed and integrated features using Firebase Authentication and Cloud Firestore for secure user management and real-time database operations.',
      technologies: ['React.js', 'Firebase Authentication', 'Cloud Firestore', 'JavaScript', 'HTML/CSS', 'REST APIs'],
    }
  ],
  projects: [
    {
      title: 'StudyNotion – EdTech Platform',
      tag: 'MERN Stack',
      description: 'Full-stack EdTech platform providing students and instructors with a secure environment for creating, managing, and accessing educational content.',
      situation: 'Built a full-stack EdTech platform to provide students and instructors with a secure environment for creating, managing, and accessing educational content.',
      task: 'Designed and developed a scalable learning management system with secure authentication, course management, and cloud-based deployment.',
      action: 'Developed the application using React.js, Node.js, Express.js, and MongoDB; implemented JWT authentication, OTP verification, bcrypt password hashing, role-based access control (RBAC), designed RESTful APIs, and deployed the platform using Vercel, Render/Railway, MongoDB Atlas, and Cloudinary.',
      result: 'Delivered a secure and scalable cloud-based platform enabling seamless course creation, enrollment, content management, and educational content delivery with reliable performance.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'OTP Verification', 'bcrypt', 'RESTful APIs', 'Vercel', 'Render', 'Cloudinary'],
      link: 'https://github.com/komalrawat/studynotion'
    },
    {
      title: 'Research Suite – Academic Research & Reference Management Platform',
      tag: 'React.js & Firebase',
      description: 'Research platform simplifying academic paper discovery, reference management, and access to multiple scholarly repositories through a unified interface.',
      situation: 'Built a research platform to simplify academic paper discovery, reference management, and access to multiple scholarly repositories through a unified interface.',
      task: 'Developed a secure and responsive web application to help researchers search, organize, and manage academic resources efficiently.',
      action: 'Integrated OpenAlex, Crossref, CORE, ArXiv, OSF, and Zotero APIs; built the application using React.js, Vite, Firebase Authentication, and Cloud Firestore; implemented AES-256-GCM encrypted Zotero API token storage using Web Cryptography API.',
      result: 'Delivered a secure research management platform enabling users to search, save, organize, and synchronize academic resources in real time while improving research productivity through seamless API integrations.',
      technologies: ['React.js', 'Vite', 'Firebase Auth', 'Cloud Firestore', 'OpenAlex API', 'Crossref API', 'ArXiv API', 'Zotero API', 'AES-256-GCM', 'Web Cryptography API'],
      link: 'https://github.com/komalrawat/research-suite'
    }
  ],
  education: [
    {
      institution: 'J.C. Bose University of Science and Technology',
      degree: 'Master of Computer Applications (MCA)',
      score: '8.9 / 10 SGPA',
      period: 'July 2024 – June 2026',
      location: 'Haryana, India'
    },
    {
      institution: 'J.C. Bose University of Science and Technology',
      degree: "Bachelor's in Computer Applications (BCA)",
      score: '9.2 / 10 CGPA',
      period: 'July 2021 – June 2024',
      location: 'Haryana, India'
    },
    {
      institution: 'Vidya Niketan School 2-M NIT Faridabad',
      degree: 'Class 12',
      score: '92.6%',
      period: 'July 2020 – June 2021',
      location: 'Haryana, India'
    }
  ],
  skills: {
    languages: ['C++', 'JavaScript', 'SQL', 'Solidity'],
    technical: ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'Firebase', 'AWS', 'MySQL', 'Vite'],
    certifications: ['Python', 'HTML & CSS', 'Blockchain Basics']
  },
  achievements: [
    {
      event: 'Merit Certificate & Trophy',
      prize: 'Academic Excellence Award',
      description: 'Awarded the Merit Certificate and Trophy during the BCA program at J.C. Bose University of Science and Technology for academic excellence (9.2/10 CGPA).',
      link: ''
    }
  ]
};

function App() {
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem('komal_portfolio_profile_v2');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (!parsed.heroPhrases) {
          parsed.heroPhrases = DEFAULT_PROFILE.heroPhrases;
        }
        return parsed;
      } catch (e) {
        console.error('Failed to parse saved profile', e);
      }
    }
    return DEFAULT_PROFILE;
  });

  const [activeModal, setActiveModal] = useState(null); // 'exp', '0x', 'help', 'customizer'
  const [initialExpTab, setInitialExpTab] = useState('experience');
  const [matrixColorMode, setMatrixColorMode] = useState('dark'); // 'dark', 'matrix', 'cyan'
  const [typedBuffer, setTypedBuffer] = useState('');

  // Handle command execution
  const executeCommand = useCallback((cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    
    if (trimmed === 'exp' || trimmed === 'experience') {
      setInitialExpTab('experience');
      setActiveModal('exp');
    } else if (trimmed === 'projects' || trimmed === 'project' || trimmed === 'work') {
      setInitialExpTab('projects');
      setActiveModal('exp');
    } else if (trimmed === '0x' || trimmed === 'achievements' || trimmed === 'awards' || trimmed === 'edu' || trimmed === 'education' || trimmed === 'skills') {
      setActiveModal('0x');
    } else if (trimmed === 'resume' || trimmed === 'cv') {
      if (profile.resumeUrl) {
        window.open(profile.resumeUrl, '_blank', 'noopener,noreferrer');
      }
    } else if (trimmed === 'help' || trimmed === '?') {
      setActiveModal('help');
    } else if (trimmed === 'edit' || trimmed === 'config' || trimmed === 'settings') {
      setActiveModal('customizer');
    } else if (trimmed === 'matrix') {
      setMatrixColorMode((prev) => (prev === 'dark' ? 'matrix' : prev === 'matrix' ? 'cyan' : 'dark'));
    } else if (trimmed === 'clear' || trimmed === 'cls') {
      setActiveModal(null);
      setTypedBuffer('');
    }
  }, [profile.resumeUrl]);

  // Global keydown listener for seamless command typing anywhere on page
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't intercept typing inside input/textarea fields or when modifier keys are pressed
      if (
        ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName) ||
        e.ctrlKey || e.altKey || e.metaKey
      ) {
        return;
      }

      if (e.key === 'Escape') {
        setActiveModal(null);
        setTypedBuffer('');
        return;
      }

      if (e.key === 'Enter') {
        if (typedBuffer) {
          executeCommand(typedBuffer);
          setTypedBuffer('');
        }
        return;
      }

      if (e.key === 'Backspace') {
        setTypedBuffer((prev) => prev.slice(0, -1));
        return;
      }

      // Append alphanumeric characters
      if (e.key.length === 1 && /^[a-zA-Z0-9]$/.test(e.key)) {
        const nextBuffer = (typedBuffer + e.key).toLowerCase();
        setTypedBuffer(nextBuffer);

        // Check if current buffer matches key commands directly
        if (nextBuffer.endsWith('exp')) {
          executeCommand('exp');
          setTypedBuffer('');
        } else if (nextBuffer.endsWith('projects')) {
          executeCommand('projects');
          setTypedBuffer('');
        } else if (nextBuffer.endsWith('0x')) {
          executeCommand('0x');
          setTypedBuffer('');
        } else if (nextBuffer.endsWith('resume')) {
          executeCommand('resume');
          setTypedBuffer('');
        } else if (nextBuffer.endsWith('help')) {
          executeCommand('help');
          setTypedBuffer('');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [typedBuffer, executeCommand]);

  const saveProfile = (newProfile) => {
    setProfile(newProfile);
    localStorage.setItem('komal_portfolio_profile_v2', JSON.stringify(newProfile));
  };

  const resetProfile = () => {
    setProfile(DEFAULT_PROFILE);
    localStorage.removeItem('komal_portfolio_profile_v2');
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between overflow-x-hidden selection:bg-neutral-800 selection:text-white">
      {/* Dynamic Canvas Matrix Code Rain */}
      <MatrixRain colorMode={matrixColorMode} />

      {/* Header bar */}
      <Header
        profile={profile}
       
      />

      {/* Main hero section */}
      <main className="z-10 flex-1 flex flex-col items-center w-full px-4 text-center">
        <div className="flex flex-1 items-center justify-center w-full">
          <ScrambleText phrases={profile.heroPhrases || [profile.heroText]} />
        </div>

{/*         
        <div className="mt-2 flex items-center justify-center gap-2 text-xs font-mono text-zinc-400">
          <span className="px-2.5 py-1 bg-zinc-900/80 border border-neutral-800 rounded-full text-emerald-400">
            {profile.name}
          </span>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-400">Accenture ASE Trainee</span>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-400">MERN & Firebase Developer</span>
        </div> */}

   
     
        <SocialCards links={profile.links} />
      </main>

      {/* Footer dock & command input */}
      <FooterDock
        onExecuteCommand={executeCommand}
        resumeUrl={profile.resumeUrl}
      />

      {/* Drawers and Modals */}
      <ExperienceModal
        isOpen={activeModal === 'exp'}
        onClose={() => setActiveModal(null)}
        experience={profile.experience}
        projects={profile.projects}
        initialTab={initialExpTab}
      />

      <AchievementsModal
        isOpen={activeModal === '0x'}
        onClose={() => setActiveModal(null)}
        achievements={profile.achievements}
        education={profile.education}
        skills={profile.skills}
      />

      <TerminalHelpModal
        isOpen={activeModal === 'help'}
        onClose={() => setActiveModal(null)}
        onExecuteCommand={executeCommand}
      />

      <PortfolioCustomizerModal
        isOpen={activeModal === 'customizer'}
        onClose={() => setActiveModal(null)}
        profile={profile}
        onSave={saveProfile}
        onReset={resetProfile}
      />
    </div>
  );
}

export default App;
