
import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Menu, 
  X, 
  Globe, 
  MessageSquare, 
  Users, 
  Zap,
  ChevronRight,
  Send,
  Github,
  Monitor,
  Heart,
  Gamepad2,
  Box,
  Sparkles,
  Layout,
  MoreHorizontal,
  ThumbsUp,
  Share2,
  Plus,
  Image as ImageIcon,
  Wand2,
  Lightbulb,
  Video,
  Activity,
  Brain,
  ShieldCheck,
  ExternalLink,
  Navigation,
  Layers,
  Search,
  Rocket,
  Target,
  Eye,
  Crosshair,
  Map as MapIcon,
  MousePointer2,
  Coffee,
  Loader2,
  Hammer
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// --- Utility for smooth scrolling ---
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 100; // Offset for the sticky navbar
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// --- Hero Visual: Precise "Playable Reality" HUD ---

const RealityCanvasShowcase = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[480px] aspect-[4/5] flex items-center justify-center cursor-none overflow-visible group/canvas"
      style={{ perspective: '1500px' }}
    >
      <div 
        className="relative w-full h-full transition-transform duration-300 ease-out flex flex-col"
        style={{ 
          transform: `rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 12}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="absolute inset-0 bg-white border-[4px] border-black rounded-[60px] overflow-hidden shadow-[24px_24px_0px_0px_rgba(0,0,0,1)]">
          <div className="absolute top-0 left-0 right-0 h-11 bg-[#d4ff3f] border-b-[4px] border-black flex items-center justify-between px-6 z-50">
             <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-[#ff0000] rounded-full animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-black">REC ● 00:12:45:01</span>
             </div>
             <span className="text-[10px] font-black text-black/40 tracking-tighter">AR_GLASSES_OS_V2.0</span>
          </div>
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="relative flex-1 flex flex-col items-center justify-start pt-28 pb-10 px-6 h-full">
            <div className="bg-black w-full max-w-[220px] rounded-[40px] overflow-hidden border-[4px] border-black shadow-2xl relative" style={{ transform: 'translateZ(80px)' }}>
              <div className="bg-white p-6 flex items-center justify-center relative">
                 <div className="flex items-center gap-4 w-full">
                    <div className="text-black"><Heart size={24} fill="#d4ff3f" strokeWidth={3} /></div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black uppercase text-gray-400 tracking-widest leading-none mb-1">Health</span>
                      <span className="text-2xl font-black text-black tracking-tighter leading-none">100 / 100</span>
                    </div>
                 </div>
                 <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-12 bg-black rounded-l-full"></div>
              </div>
              <div className="p-4 flex items-center gap-4 bg-black">
                 <div className="w-10 h-10 rounded-full border-2 border-white/10 flex items-center justify-center text-blue-400"><Users size={18} strokeWidth={3} /></div>
                 <div className="flex flex-col">
                   <span className="text-[9px] font-black uppercase text-gray-600 tracking-widest leading-none mb-1">EXP</span>
                   <span className="text-sm font-black text-white tracking-widest">LV. 12</span>
                 </div>
              </div>
            </div>
            <div className="absolute left-6 top-[58%] bg-white border-[4px] border-black p-4 rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center gap-1 -rotate-6" style={{ transform: 'translateZ(100px)' }}>
              <Coffee size={28} className="text-black mb-1" />
              <span className="text-[10px] font-black uppercase text-black">Stamina +20</span>
            </div>
            <div className="absolute right-6 top-[62%] flex flex-col items-end" style={{ transform: 'translateZ(80px)' }}>
               <div className="bg-[#d4ff3f] text-black px-4 py-2 rounded-xl border-[4px] border-black font-black text-[10px] uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">OBJECT: SOFA_STAGE_1</div>
               <div className="mt-4 mr-10"><div className="w-8 h-8 border-4 border-dashed border-black/20 rounded-full animate-spin"></div></div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 bg-black text-white p-6 rounded-[40px] border-[4px] border-black shadow-[12px_12px_0px_0px_rgba(212,255,63,1)]" style={{ transform: 'translateZ(120px)' }}>
               <div className="flex items-center gap-3 mb-2">
                 <Zap size={20} className="text-[#d4ff3f]" fill="currentColor" />
                 <span className="text-xs font-black uppercase tracking-[0.2em] text-[#d4ff3f]">Quest Log</span>
                 <span className="ml-auto text-[10px] font-bold opacity-30 tracking-widest">#248</span>
               </div>
               <div className="mt-4 flex flex-col gap-2">
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden"><div className="w-[68%] h-full bg-[#d4ff3f]"></div></div>
               </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed pointer-events-none z-[100]" style={{ left: `${(mousePos.x + 0.5) * 100}%`, top: `${(mousePos.y + 0.5) * 100}%`, transform: 'translate(-50%, -50%)' }}>
        <Crosshair size={54} className="text-black/40" strokeWidth={1} />
      </div>
    </div>
  );
};

// --- Mock Project Scene Components ---

const DuckIcon = () => (
  <div className="w-12 h-14 bg-yellow-400 border-[3px] border-black rounded-full flex flex-col items-center justify-center relative shadow-sm">
    <div className="flex gap-1.5 mb-1"><div className="w-1.5 h-1.5 bg-black rounded-full"></div><div className="w-1.5 h-1.5 bg-black rounded-full"></div></div>
    <div className="w-4 h-2 bg-orange-500 rounded-full"></div>
  </div>
);

const MockPostCreation = () => (
  <div className="w-full h-full bg-white flex flex-col p-8 items-center justify-center border-b-4 border-black relative overflow-hidden">
    <div className="w-full max-w-xs space-y-4">
      <div className="h-4 w-24 bg-black rounded"></div>
      <div className="h-32 w-full bg-gray-100 border-4 border-dashed border-black rounded-3xl flex items-center justify-center relative">
        <ImageIcon size={40} className="text-gray-300" />
        <div className="absolute top-2 right-2 flex gap-1">
           <div className="w-2 h-2 rounded-full bg-[#d4ff3f]"></div>
           <div className="w-2 h-2 rounded-full bg-black"></div>
        </div>
      </div>
      <div className="h-12 w-full bg-[#d4ff3f] border-4 border-black rounded-xl flex items-center justify-center">
         <span className="font-black text-[10px] uppercase">AI Manifested Content</span>
      </div>
    </div>
  </div>
);

const MockFieldScene = () => (
  <div className="w-full h-full bg-[#2ecc71] flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-[size:40px_40px] bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)]"></div>
    <DuckIcon />
    <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-red-500 border-2 border-black rounded-lg animate-bounce"></div>
  </div>
);

// --- MAIN COMPONENTS ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Projects', id: 'projects' },
    { label: 'AR Vision', id: 'ar-vision' },
    { label: 'Stack', id: 'stack' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${scrolled ? 'glass-nav py-4 shadow-sm border-b-2 border-black/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-8 h-8 bg-[#d4ff3f] rounded-lg border-2 border-black rotate-3 group-hover:rotate-12 transition-transform"></div>
          <span className="text-xl font-extrabold tracking-tight text-black">For Grove</span>
        </div>
        <div className="md:flex hidden items-center gap-8 text-sm font-bold uppercase tracking-widest text-black/70">
           {navItems.map(item => (
             <button key={item.id} onClick={() => scrollToSection(item.id)} className="hover:text-black transition-colors">{item.label}</button>
           ))}
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:flex bg-[#d4ff3f] text-black px-6 py-2.5 rounded-full font-black text-sm border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all translate-y-[-2px] active:translate-y-0"
          >
             Resume <ArrowRight size={16} className="ml-2"/>
          </button>
          <button className="md:hidden text-black p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-white z-[55] p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
           {navItems.map(item => (
             <button key={item.id} onClick={() => { scrollToSection(item.id); setMobileMenuOpen(false); }} className="text-3xl font-black text-left border-b-4 border-black pb-4 uppercase tracking-tighter">{item.label}</button>
           ))}
           <button 
              onClick={() => { scrollToSection('contact'); setMobileMenuOpen(false); }}
              className="mt-4 bg-[#d4ff3f] text-black px-6 py-4 rounded-2xl font-black text-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center"
            >
              Resume
           </button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col pt-24 md:pt-32 px-6 overflow-hidden bg-[#fafafa]">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-12 items-center z-10 relative flex-1">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block bg-black text-white px-6 py-2 rounded-lg text-sm font-black uppercase tracking-widest mb-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(212,255,63,1)]">
            I'M CHOI | AI & AR/XR BUILDER
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] text-black mb-8">
            Reality is my <br />
            <span className="inline-block relative">
              Canvas.
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#d4ff3f] -z-10"></div>
            </span>
          </h1>
          <div className="mb-12">
            <div className="inline-block bg-[#d4ff3f] px-6 py-4 rounded-lg border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-[-1deg] mb-8">
               <p className="text-xl md:text-2xl font-black text-black leading-tight">
                  An AR developer dreaming of transforming physical spaces into immersive game stages.
               </p>
            </div>
            <p className="text-xl text-gray-500 font-bold leading-relaxed max-w-lg mx-auto md:mx-0">
              Drawing from my experience in national digital health projects, I design engaging behavioral changes for a healthier world.
            </p>
          </div>
          <div className="bg-white border-4 border-black p-8 rounded-[40px] shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] max-w-lg relative overflow-hidden mx-auto md:mx-0">
             <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500 border-2 border-black"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400 border-2 border-black"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-black"></div>
             </div>
             <p className="text-xl font-black italic text-black leading-relaxed mb-8">
                "I build bridges between the physical and digital, using AI as the engine and AR as the interface."
             </p>
             <button 
                onClick={() => scrollToSection('projects')}
                className="bg-[#d4ff3f] text-black px-10 py-5 rounded-full font-black text-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
             >
                Explore Projects <ArrowRight size={22} />
             </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center py-12 md:py-0">
           <RealityCanvasShowcase />
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 'whimsyyy',
      title: "whimsyyy SNS",
      description: "A centralized social media hub built with Firebase and Gemini AI. Real-time post updates using Firestore with instant sync across all users.",
      bullets: [
        "Built with 98.7% TypeScript for type-safe, scalable codebase.",
        "AI-powered content generation with Gemini API integration.",
        "Secure admin mode with SHA-256 encrypted PIN authentication."
      ],
      mock: <MockPostCreation />,
      showLovable: true,
      demoUrl: "https://cherr12.github.io/whimsyyy-sns/",
      githubUrl: "https://github.com/cherr12/whimsyyy-sns",
      lovableUrl: "https://whimsyyy.lovable.app"
    },
    {
      id: 'health-adventure',
      title: "Health Adventure",
      description: "Acquiring health knowledge through an immersive 3D world. Players solve reality-based health challenges to level up their digital persona.",
      bullets: [
        "Gamified health literacy through interactive 3D mechanics.",
        "Dynamic health quiz generation using Gemini API.",
        "Cross-platform WebGL support for instant accessibility."
      ],
      mock: <MockFieldScene />,
      showLovable: false,
      demoUrl: "https://health-island-adventure-game.vercel.app/",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-white relative z-10 border-t-4 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
           <h2 className="text-7xl md:text-9xl font-black tracking-tighter text-black mb-4 uppercase">Featured <br/>Work</h2>
           <div className="w-48 h-4 bg-[#d4ff3f] border-2 border-black"></div>
        </div>

        <div className="space-y-48">
          {projects.map((p, idx) => (
            <div key={p.id} className={`flex flex-col lg:flex-row gap-20 items-stretch ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 flex flex-col">
                <div className="relative group flex-1">
                   <div className="absolute inset-0 bg-black rounded-[50px] translate-x-4 translate-y-4"></div>
                   <div className="relative h-full bg-white border-4 border-black rounded-[50px] overflow-hidden flex flex-col">
                      <div className="aspect-[4/3] bg-gray-50 flex items-center justify-center">
                         {p.mock}
                      </div>
                      <div className="p-8 md:p-12 flex-1">
                         <div className="inline-block bg-black text-white px-4 py-1 rounded font-bold uppercase text-xs mb-6 tracking-widest leading-none">MAIN PROJECT</div>
                         <h3 className="text-5xl font-black mb-6 leading-none">{p.title}</h3>
                         <p className="text-xl font-bold text-gray-500 mb-8 leading-relaxed">{p.description}</p>
                         <ul className="space-y-4 mb-12">
                            {p.bullets.map(b => (
                              <li key={b} className="flex gap-4 items-start">
                                 <div className="mt-1.5 w-4 h-4 bg-[#d4ff3f] border-2 border-black shrink-0"></div>
                                 <span className="font-bold text-black">{b}</span>
                              </li>
                            ))}
                         </ul>
                         <div className="flex flex-wrap gap-4 items-center">
                            <a 
                              href={p.demoUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="bg-black text-white px-8 py-4 rounded-full font-black flex items-center gap-3 shadow-[6px_6px_0px_0px_rgba(212,255,63,1)] hover:shadow-none hover:translate-y-1 transition-all"
                            >
                               Live Demo <Monitor size={18} />
                            </a>
                            <a 
                              href={p.githubUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-14 h-14 bg-white border-4 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
                            >
                               <Github size={24}/>
                            </a>
                         </div>
                      </div>
                   </div>
                </div>
                {p.showLovable && (
                  <div className="mt-12 pt-12 border-t-4 border-black border-dashed">
                     <div className="mb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black text-[#d4ff3f] rounded-lg text-xs font-black uppercase tracking-widest">
                           <Zap size={14} fill="currentColor" /> LOVABLE VERSION AVAILABLE
                        </div>
                        <p className="text-sm font-bold text-gray-400 mt-3 max-w-sm">
                           *This build features a unique interface layout optimized for the Lovable platform.
                        </p>
                     </div>
                     <a 
                        href={p.lovableUrl}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#ff4d6d] text-white px-8 py-5 rounded-[32px] border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex items-center gap-4 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group w-fit no-underline"
                      >
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                           <Heart size={28} fill="currentColor" />
                        </div>
                        <div className="text-left">
                           <div className="text-[10px] font-black uppercase tracking-widest opacity-80 leading-none">CHECK ALTERNATIVE UI</div>
                           <div className="text-3xl font-black tracking-tighter uppercase leading-none mt-1">LAUNCH LOVABLE</div>
                        </div>
                        <ExternalLink size={24} className="ml-2" />
                     </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillSet = () => {
  const sections = [
    { 
      title: "CORE TECH", 
      color: "bg-[#fff7ed]", 
      skills: ["Unity (C#)", "AR Foundation", "OpenAI Vision API", "Assistants API", "Chat Completions"],
      bullet: "bg-orange-500"
    },
    { 
      title: "WEB & CLOUD", 
      color: "bg-[#f0f7ff]", 
      skills: ["Next.js", "React", "TypeScript", "Node.js", "Vite", "Firebase", "Tailwind CSS"],
      bullet: "bg-blue-500"
    },
    { 
      title: "INTERESTS", 
      color: "bg-[#faf5ff]", 
      skills: ["Gamification", "Digital Health", "Behavioral Design", "Spatial Computing"],
      bullet: "bg-purple-500"
    }
  ];

  return (
    <section id="stack" className="py-24 px-6 bg-white border-t-4 border-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-7xl md:text-9xl font-black mb-20 text-center tracking-tighter text-black uppercase">My Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map(s => (
            <div key={s.title} className={`${s.color} border-4 border-black rounded-[50px] p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]`}>
              <h3 className="text-3xl font-black mb-10 tracking-widest leading-none">{s.title}</h3>
              <div className="w-24 h-1.5 bg-black mb-10"></div>
              <ul className="space-y-6">
                {s.skills.map(skill => (
                  <li key={skill} className="flex items-center gap-4 group">
                    <div className={`w-3.5 h-3.5 rounded-full border-2 border-black ${s.bullet} group-hover:scale-125 transition-transform`}></div>
                    <span className="text-xl font-black text-black">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ARSection = () => {
  return (
    <section id="ar-vision" className="bg-[#d4ff3f] py-24 px-6 border-y-4 border-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
         <div className="mb-16">
            <h2 className="text-7xl md:text-9xl font-black italic text-black leading-none tracking-tighter mb-4 uppercase">PLAYABLE HEALTH</h2>
            <div className="inline-block bg-black text-[#d4ff3f] px-6 py-2 text-4xl md:text-7xl font-black tracking-tighter italic leading-none">GROVE CHALLENGE</div>
         </div>
         <p className="text-2xl md:text-4xl font-black text-black mb-20 max-w-5xl leading-tight text-center md:text-left">
            "Turning the living room into a dungeon" can actually change health behavior. 
            I build AR experiences that make exercise feel like play, not homework.
         </p>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border-4 border-black p-10 rounded-[40px] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
               <h3 className="text-3xl font-black mb-4 leading-none uppercase">OpenAI Vision Integration</h3>
               <p className="text-xl font-bold text-gray-700 leading-relaxed mt-4">Real-world exercise (squats, meals) recognition via AI.</p>
            </div>
            <div className="bg-white border-4 border-black p-10 rounded-[40px] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
               <h3 className="text-3xl font-black mb-4 leading-none uppercase">Interactive AR Monsters</h3>
               <p className="text-xl font-bold text-gray-700 leading-relaxed mt-4">Unity & AR Foundation based reality-RPG engine.</p>
            </div>
         </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-white pt-24 pb-32 px-6 border-t-4 border-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-8 items-start">
        <div className="flex-1 w-full">
           <h2 className="text-6xl md:text-9xl font-black text-black leading-none mb-12 tracking-tighter uppercase">Let's build <br/>tomorrow.</h2>
           <div className="flex gap-4 mb-8 md:mb-0">
              <a href="https://github.com/cherr12" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-white border-4 border-black rounded-2xl flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-[#d4ff3f] transition-all"><Github /></a>
              <a href="https://cherr12.github.io/whimsyyy-sns/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-white border-4 border-black rounded-2xl flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-[#d4ff3f] transition-all"><Globe /></a>
           </div>
        </div>
        
        <div className="w-full max-w-md mx-auto md:mx-0 p-4">
          <div className="bg-white border-[4px] border-black rounded-[50px] p-8 md:p-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-3xl font-black mb-12 uppercase tracking-widest leading-none">Quick Contact</h3>
            <div className="space-y-10">
                <div>
                  <p className="text-sm font-black text-gray-400 uppercase tracking-widest mb-2">EMAIL</p>
                  <p className="text-xl md:text-2xl font-black break-words">boeuneu@gmail.com</p>
                </div>
                <div>
                  <p className="text-sm font-black text-gray-400 uppercase tracking-widest mb-2">LOCATION</p>
                  <p className="text-xl md:text-2xl font-black leading-tight">Seoul, South Korea <br/><span className="text-lg opacity-60 font-bold">(Available for Travel)</span></p>
                </div>
                <a 
                  href="mailto:boeuneu@gmail.com?subject=Bringing on new talent"
                  className="w-full bg-black text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-[#d4ff3f] hover:text-black transition-all group no-underline"
                >
                  Bringing on new talent <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Portfolio AI Component ---

const PortfolioAI = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `User asks: ${userMsg}`,
        config: { systemInstruction: "Answer about Choi's portfolio. Projects: whimsyyy SNS (Live at https://cherr12.github.io/whimsyyy-sns/), Health Adventure. You are a helpful AI assistant for the portfolio of a Creative Technologist named Choi. Email is boeuneu@gmail.com." }
      });
      setMessages(prev => [...prev, { role: 'model', text: response.text || "Neural lag. Try again." }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', text: "Brain freeze. Check your connection." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="w-[320px] md:w-[380px] h-[500px] md:h-[550px] bg-white rounded-3xl border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
          <div className="bg-[#d4ff3f] p-6 border-b-4 border-black flex justify-between items-center">
            <span className="font-black text-lg uppercase tracking-widest leading-none">Grove Agent</span>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform"><X size={24} /></button>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
            {messages.length === 0 && (
              <p className="text-gray-400 font-bold text-center italic mt-4">Ask me about the projects or technical stack!</p>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl border-2 border-black font-bold text-sm leading-relaxed ${m.role === 'user' ? 'bg-black text-white' : 'bg-white text-black'}`}>{m.text}</div>
              </div>
            ))}
            {isLoading && <div className="flex justify-center"><Loader2 className="animate-spin text-black" size={24} /></div>}
          </div>
          <div className="p-4 bg-white border-t-4 border-black flex gap-2">
            <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendMessage()} placeholder="Ask anything..." className="flex-1 px-4 py-3 border-2 border-black rounded-xl font-bold focus:outline-none focus:bg-[#d4ff3f]/10" />
            <button onClick={sendMessage} className="bg-[#d4ff3f] w-12 h-12 rounded-xl border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all"><Send size={20} /></button>
          </div>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="w-16 h-16 md:w-20 md:h-20 bg-[#d4ff3f] rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"><MessageSquare size={32} /></button>
      )}
    </div>
  );
};

const Brands = () => {
  const tags = ["Unity", "AR Foundation", "OpenAI Vision", "Firebase", "TypeScript", "React", "Next.js", "Gemini AI", "C#", "Spatial Computing", "Health Tech"];
  return (
    <section className="py-12 overflow-hidden border-y-4 border-black bg-white relative z-10">
      <div className="flex animate-marquee">
        {[...tags, ...tags].map((l, i) => (
          <div key={i} className="flex items-center gap-4 px-12 group">
             <div className="w-6 h-6 bg-[#d4ff3f] rounded-md border-2 border-black group-hover:rotate-45 transition-transform"></div>
             <span className="text-4xl font-black tracking-tighter uppercase text-black leading-none">{l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="relative selection:bg-[#d4ff3f] selection:text-black min-h-screen">
      <Navbar />
      <Hero />
      <Brands />
      <Projects />
      <ARSection />
      <SkillSet />
      <Footer />
      <PortfolioAI />
    </div>
  );
}
