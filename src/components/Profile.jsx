import React, { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaNpm } from 'react-icons/fa'
import { FiExternalLink, FiSun, FiMoon, FiDownload } from 'react-icons/fi'

const socials = [
  { name: 'Email', icon: <FaEnvelope />, url: 'mailto:kannaujiya00000@gmail.com' },
  { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/Dinesh7571' },
  { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/dinesh-kannaujiya-985719205' }
]

const experience = [
  {
    role: 'Frontend Developer',
    company: 'SR Edu Technology Pvt. Ltd.',
    period: 'June 2025 — Present',
    location: 'Hyderabad, India',
    points: [
      'Developed and optimized responsive user interfaces using React.js and Tailwind CSS.',
      'Improved performance and enhanced user experience across web platforms.',
      'Collaborated with backend developers to integrate REST APIs.'
    ],
    accent: 'bg-blue-400'
  },
  {
    role: 'IT Developer',
    company: 'Gyankosha',
    period: 'Feb 2025 — May 2025',
    location: 'Gorakhpur, India',
    points: [
      'Developed and maintained an e-learning platform website and mobile application.',
      'Focused on diversified learning tools and personality development features.'
    ],
    accent: 'bg-purple-400'
  }
]

const projects = [
  {
    name: 'Truecaller Clone',
    desc: 'React Native + Kotlin Native Modules for call detection, spam identification, and background handling.',
    tech: 'React Native, Node.js, MongoDB, Notifee',
    github: 'https://github.com/Dinesh7571/Truecaller-clone-react-native',
    demo: 'https://youtu.be/J-DBm1FjPKU?si=EBFUg7Lj1b3PM0FZ',
    accent: 'bg-yellow-300'
  },
  {
    name: 'Baymax',
    desc: 'Health companion for water intake, step counting, and Gemini AI health tips with a TTS engine.',
    tech: 'React Native, Zustand, Firebase, Gemini API',
    github: 'https://github.com/Dinesh7571/Baymax',
    demo: 'https://youtu.be/DCYvhKRuVCg?si=vUB6zp7w_SZt-5nA',
    accent: 'bg-cyan-300'
  },
  {
    name: 'React-Rabbit',
    desc: 'Android app that identifies if other apps were built with React Native, Flutter, or Native code.',
    tech: 'React Native, Native Module Bridge',
    github: 'https://github.com/Dinesh7571/React-Rabbit',
    demo: 'https://drive.google.com/file/d/1ExS1J_iEZJSqvyxaxWW7uR_qb--Scxlx/view',
    type: 'APK',
    accent: 'bg-green-400'
  },
  {
    name: 'RN Call-Logs NPM',
    desc: 'Library for accessing Android call logs with TypeScript and advanced filtering options.',
    tech: 'TypeScript, Android Native',
    github: 'https://github.com/Dinesh7571/react-native-calllogs-android',
    demo: 'https://www.npmjs.com/package/react-native-calllogs-android',
    type: 'NPM',
    accent: 'bg-orange-400'
  }
]

const discoBackgrounds = ['bg-fuchsia-500', 'bg-yellow-400', 'bg-lime-400', 'bg-orange-500', 'bg-cyan-400', 'bg-red-500']

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false)
  const [isDiscoMode, setIsDiscoMode] = useState(false)
  const [currentColorIndex, setCurrentColorIndex] = useState(0)

  useEffect(() => {
    let interval
    if (isDiscoMode) {
      interval = setInterval(() => {
        setCurrentColorIndex((prev) => (prev + 1) % discoBackgrounds.length)
      }, 400)
    }
    return () => clearInterval(interval)
  }, [isDiscoMode])

  const getBgColor = () => {
    if (isDiscoMode) return discoBackgrounds[currentColorIndex]
    return isDark ? 'bg-zinc-900' : 'bg-orange-50'
  }

  const brutalShadow = "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px]"
  const brutalBorder = "border-4 border-black"

  return (
    <div className={`min-h-screen font-mono transition-colors duration-100 ${getBgColor()} ${isDark ? 'text-white' : 'text-black'}`}>
      
      {/* Header */}
      <header className={`sticky top-0 z-50 ${brutalBorder} border-t-0 border-l-0 border-r-0 ${isDark ? 'bg-zinc-800' : 'bg-white'} ${brutalShadow}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tighter italic leading-none">
                DINESH KANNAUJIYA
              </h1>
              <p className="font-bold mt-1 sm:mt-2 uppercase tracking-widest text-xs sm:text-sm">
                Full Stack & App Developer
              </p>
            </div>
            
            <div className="flex gap-2 sm:gap-4 self-end sm:self-auto">
              <button 
                onClick={() => setIsDiscoMode(!isDiscoMode)}
                className={`px-3 sm:px-6 py-2 font-black uppercase text-xs sm:text-sm ${brutalBorder} ${brutalShadow} ${isDiscoMode ? 'bg-white text-black' : 'bg-fuchsia-500 text-white'} transition-all`}
              >
                {isDiscoMode ? 'STOP' : 'DISCO'}
              </button>
              
              <button 
                onClick={() => setIsDark(!isDark)}
                className={`p-2 sm:p-3 ${brutalBorder} ${brutalShadow} ${isDark ? 'bg-yellow-400 text-black' : 'bg-zinc-900 text-white'} transition-all`}
              >
                {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Profile Sidebar */}
          <aside className="lg:col-span-1 space-y-6 sm:space-y-8">
            
            {/* Contact Card */}
            <div className={`p-4 sm:p-6 ${brutalBorder} ${isDark ? 'bg-zinc-800' : 'bg-white'} ${brutalShadow}`}>
              <div className={`w-20 h-20 sm:w-24 sm:h-24 mb-4 sm:mb-6 ${brutalBorder} bg-lime-400 flex items-center justify-center text-3xl sm:text-4xl font-black shadow-[4px_4px_0px_0px_black]`}>
                DK
              </div>
              <h2 className="text-xl sm:text-2xl font-black uppercase mb-3 sm:mb-4">Contact</h2>
              <div className="space-y-2 sm:space-y-3 font-bold text-sm sm:text-base">
                <p className="flex items-start gap-2 break-all">
                  <FaEnvelope className="mt-1 flex-shrink-0" /> 
                  <span className="underline">kannaujiya00000@gmail.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="flex-shrink-0">📍</span> Deoria, Uttar Pradesh
                </p>
              </div>
              
              <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8">
                {socials.map(s => (
                  <a 
                    key={s.name} 
                    href={s.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className={`p-3 sm:p-4 ${brutalBorder} bg-white text-black ${brutalShadow} hover:bg-yellow-300 transition-colors flex-1 flex items-center justify-center`}
                    aria-label={s.name}
                  >
                    {React.cloneElement(s.icon, { size: window.innerWidth < 640 ? 18 : 20 })}
                  </a>
                ))}
              </div>
            </div>

            {/* Skills Card */}
            <div className={`p-4 sm:p-6 ${brutalBorder} ${isDark ? 'bg-zinc-800' : 'bg-white'} ${brutalShadow}`}>
              <h3 className="text-lg sm:text-xl font-black uppercase mb-3 sm:mb-4 bg-black text-white px-2 py-1 inline-block">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2 font-bold text-xs sm:text-sm">
                {['React Native', 'React.js', 'Kotlin', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Firebase'].map(s => (
                  <span 
                    key={s} 
                    className={`px-2 py-1 border-2 border-black ${isDark ? 'bg-zinc-700' : 'bg-zinc-100'}`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-2 space-y-6 sm:space-y-8 lg:space-y-10">
            
            {/* Work Experience Section */}
            <section className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl font-black uppercase italic">Work Experience</h2>
              {experience.map((exp, idx) => (
                <div 
                  key={idx} 
                  className={`p-4 sm:p-6 ${brutalBorder} ${isDark ? 'bg-zinc-800' : exp.accent} ${brutalShadow}`}
                >
                  <div className="flex flex-col gap-2 mb-3 sm:mb-4 border-b-2 border-black pb-3 sm:pb-4">
                    <h3 className="text-lg sm:text-xl font-black uppercase">{exp.role}</h3>
                    <span className="font-black text-sm sm:text-base">{exp.period}</span>
                  </div>
                  <p className="font-bold text-sm sm:text-lg mb-3 sm:mb-4">
                    {exp.company} — {exp.location}
                  </p>
                  <ul className="space-y-1 sm:space-y-2 font-bold text-xs sm:text-sm">
                    {exp.points.map((p, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="flex-shrink-0">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Projects Section */}
            <section className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl font-black uppercase italic">Featured Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {projects.map((p, idx) => (
                  <article 
                    key={idx} 
                    className={`p-4 sm:p-6 ${brutalBorder} ${isDark ? 'bg-zinc-800' : p.accent} ${brutalShadow} flex flex-col`}
                  >
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-black uppercase mb-2 leading-tight">
                      {p.name}
                    </h3>
                    <p className="font-black text-xs uppercase mb-3 sm:mb-4 opacity-70 tracking-tighter">
                      {p.tech}
                    </p>
                    <p className="font-bold text-xs sm:text-sm mb-4 sm:mb-6 flex-grow leading-snug">
                      {p.desc}
                    </p>
                    <div className="flex gap-2 sm:gap-4">
                      <a 
                        href={p.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex-1 flex items-center justify-center gap-1 sm:gap-2 py-2 sm:py-3 text-xs sm:text-sm font-black border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-colors"
                      >
                        <FaGithub size={16} /> CODE
                      </a>
                      <a 
                        href={p.demo} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex-1 flex items-center justify-center gap-1 sm:gap-2 py-2 sm:py-3 text-xs sm:text-sm font-black border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-colors"
                      >
                        {p.type === 'APK' ? <FiDownload size={16} /> : p.type === 'NPM' ? <FaNpm size={16} /> : <FiExternalLink size={16} />} 
                        {p.type || 'DEMO'}
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Footer CTA */}
            <footer className={`p-6 sm:p-8 ${brutalBorder} bg-black text-white ${brutalShadow}`}>
              <div className="flex flex-col gap-4 sm:gap-6 items-center text-center">
                <p className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tighter">
                  Let's build something wild.
                </p>
                <a 
                  href="mailto:kannaujiya00000@gmail.com" 
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-yellow-400 text-black font-black uppercase text-base sm:text-xl border-4 border-black hover:bg-white transition-all shadow-[4px_4px_0px_0px_white] active:shadow-[2px_2px_0px_0px_white] active:translate-x-[2px] active:translate-y-[2px]"
                >
                  CONTACT ME
                </a>
              </div>
            </footer>

          </main>
        </div>
      </div>
    </div>
  )
}