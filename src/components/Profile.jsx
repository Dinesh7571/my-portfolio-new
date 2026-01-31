import React, { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { FiExternalLink, FiSun, FiMoon } from 'react-icons/fi'

const socials = [
  { name: 'Email', icon: <FaEnvelope />, url: 'mailto:kannaujiya00000@gmail.com' },
  { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/Dinesh7571' },
  { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/dinesh-kannaujiya-985719205' }
]

const projects = [
  {
    name: 'Truecaller Clone',
    desc: 'Caller ID & spam detection app using React Native + Kotlin native modules, Node.js backend.',
    github: 'https://github.com/Dinesh7571/Truecaller-clone-react-native',
    demo: 'https://youtu.be/J-DBm1FjPKU?si=EBFUg7Lj1b3PM0FZ',
    accent: 'bg-yellow-300'
  },
  {
    name: 'Baymax',
    desc: 'Personal health companion: water intake, steps, reminders, Gemini API integration, TTS.',
    github: 'https://github.com/Dinesh7571/Baymax',
    demo: 'https://youtu.be/DCYvhKRuVCg?si=vUB6zp7w_SZt-5nA',
    accent: 'bg-cyan-300'
  },
  {
    name: 'E-commerce App',
    desc: 'Cross-platform e-commerce app and website with Zod validations and responsive UI.',
    github: 'https://github.com/Dinesh7571/Ecommerce-in-react-native',
    demo: 'https://youtube.com/shorts/snl_MiUqJTw?si=v1C82v0Ig_h9lkrZ',
    accent: 'bg-green-400'
  },
  {
    name: 'SiteWatch Pro',
    desc: 'Real-time website monitoring (MERN) with cron jobs, keyword checks and alerts.',
    github: 'https://github.com/Dinesh7571/SiteWatch-Mern-',
    demo: 'https://sitewatchpro.vercel.app',
    accent: 'bg-orange-400'
  }
]

// Brutalist Disco Colors (Solid & High Contrast)
const discoBackgrounds = [
  'bg-fuchsia-500', 'bg-yellow-400', 'bg-lime-400', 'bg-orange-500', 'bg-cyan-400', 'bg-red-500'
]

export default function Profile({ onSwitch }) {
  const [isDark, setIsDark] = useState(false)
  const [isDiscoMode, setIsDiscoMode] = useState(false)
  const [currentColorIndex, setCurrentColorIndex] = useState(0)

  const toggleTheme = () => setIsDark(!isDark)
  const toggleDisco = () => setIsDiscoMode(!isDiscoMode)

  useEffect(() => {
    let interval
    if (isDiscoMode) {
      interval = setInterval(() => {
        setCurrentColorIndex((prev) => (prev + 1) % discoBackgrounds.length)
      }, 400) // Faster for brutalist impact
    }
    return () => clearInterval(interval)
  }, [isDiscoMode])

  const getBgColor = () => {
    if (isDiscoMode) return discoBackgrounds[currentColorIndex]
    return isDark ? 'bg-zinc-900' : 'bg-orange-50'
  }

  const brutalShadow = "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
  const brutalBorder = "border-4 border-black"

  return (
    <div className={`min-h-screen font-mono p-4 md:p-8 transition-colors duration-100 ${getBgColor()} ${isDark ? 'text-white' : 'text-black'}`}>
      
      {/* Brutalist Navbar */}
      <header className={`max-w-6xl mx-auto mb-12 p-4 flex flex-col md:flex-row justify-between items-center gap-6 ${brutalBorder} ${isDark ? 'bg-zinc-800' : 'bg-white'} ${brutalShadow}`}>
        <h1 className="text-3xl font-black uppercase tracking-tighter italic">
          Dinesh.dev
        </h1>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={toggleDisco}
            className={`px-6 py-2 font-black uppercase text-sm ${brutalBorder} ${brutalShadow} ${isDiscoMode ? 'bg-white text-black' : 'bg-fuchsia-500 text-white'}`}
          >
            {isDiscoMode ? 'STOOOOP' : 'GO DISCO'}
          </button>
          
          <button 
            onClick={toggleTheme}
            className={`p-3 ${brutalBorder} ${brutalShadow} ${isDark ? 'bg-yellow-400 text-black' : 'bg-zinc-900 text-white'}`}
          >
            {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          <button 
            onClick={onSwitch}
            className={`px-6 py-2 bg-white text-black font-black uppercase text-sm ${brutalBorder} ${brutalShadow}`}
          >
            Switch V2
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Sidebar Info */}
        <aside className="lg:col-span-4 space-y-8">
          <div className={`p-6 ${brutalBorder} ${isDark ? 'bg-zinc-800' : 'bg-white'} ${brutalShadow}`}>
            <div className={`w-24 h-24 mb-4 ${brutalBorder} bg-lime-400 flex items-center justify-center text-4xl font-black`}>
              DK
            </div>
            <h2 className="text-4xl font-black uppercase leading-none mb-2">Dinesh Kannaujiya</h2>
            <p className="font-bold border-b-2 border-black pb-4 mb-4">B.Tech — CSE (2021-25)</p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                {socials.map(s => (
                  <a key={s.name} href={s.url} target="_blank" className={`p-3 ${brutalBorder} bg-white text-black ${brutalShadow}`}>
                    {s.icon}
                  </a>
                ))}
              </div>
              
              <div>
                <p className="font-black uppercase text-xs mb-2">Technical Stack</p>
                <div className="flex flex-wrap gap-2">
                  {['React Native', 'React.js', 'Node.js', 'MongoDB', 'Kotlin', 'Firebase'].map(s => (
                    <span key={s} className={`px-2 py-1 text-xs font-bold border-2 border-black ${isDark ? 'bg-zinc-700' : 'bg-zinc-100'}`}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={`p-6 ${brutalBorder} ${isDark ? 'bg-zinc-800' : 'bg-green-300'} ${brutalShadow}`}>
            <h3 className="text-xl font-black uppercase mb-4 underline">Experience</h3>
            <div className="space-y-6">
              <div>
                <p className="font-black">Frontend Developer</p>
                <p className="text-xs italic">SR EDU Technology (Current)</p>
              </div>
              <div>
                <p className="font-black">Freelance App Dev</p>
                <p className="text-xs italic">International Clients</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-8 space-y-8">
          
          {/* About Section */}
          <section className={`p-8 ${brutalBorder} ${isDark ? 'bg-zinc-800' : 'bg-white'} ${brutalShadow}`}>
            <h2 className="text-3xl font-black uppercase mb-4 bg-yellow-300 text-black inline-block px-2">About me</h2>
            <p className="text-lg font-bold leading-tight">
              I BUILD MOBILE-FIRST EXPERIENCES AND FULL-STACK PRODUCTS. 
              PRIMARY FOCUS: REACT NATIVE. 
              SECONDARY FOCUS: NODE.JS & SCALING BACKENDS.
              BASED IN DEORIA, WORKING GLOBALLY.
            </p>
          </section>

          {/* Project Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((p, idx) => (
              <article key={idx} className={`p-6 ${brutalBorder} ${isDark ? 'bg-zinc-800' : p.accent} ${brutalShadow} group`}>
                <h3 className="text-2xl font-black uppercase mb-2 group-hover:underline">{p.name}</h3>
                <p className="font-bold text-sm mb-6 leading-tight h-12 overflow-hidden">
                  {p.desc}
                </p>
                <div className="flex gap-4">
                  <a href={p.github} target="_blank" className={`flex-1 text-center py-2 font-black border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-colors`}>
                    GITHUB
                  </a>
                  <a href={p.demo} target="_blank" className={`flex-1 text-center py-2 font-black border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-colors`}>
                    DEMO
                  </a>
                </div>
              </article>
            ))}
          </section>

          {/* Footer Card */}
          <footer className={`p-8 ${brutalBorder} bg-black text-white ${brutalShadow} flex flex-col md:flex-row justify-between items-center gap-4`}>
            <div className="text-center md:text-left">
              <p className="text-xl font-black">NEED A MOBILE APP?</p>
              <p className="text-yellow-400 font-bold">kannaujiya00000@gmail.com</p>
            </div>
            <a href="mailto:kannaujiya00000@gmail.com" className="px-8 py-4 bg-white text-black font-black uppercase text-xl border-4 border-white hover:bg-transparent hover:text-white transition-all">
              HIRE ME
            </a>
          </footer>

        </main>
      </div>
    </div>
  )
}