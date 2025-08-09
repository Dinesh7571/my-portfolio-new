import React, { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { FiExternalLink, FiSun, FiMoon } from 'react-icons/fi'

const socials = [
  {name: 'Email', icon: <FaEnvelope />, url: 'mailto:kannaujiya00000@gmail.com'},
  {name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/Dinesh7571'},
  {name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/dinesh-kannaujiya-985719205'}
]

const projects = [
  {
    name: 'Truecaller Clone',
    desc: 'Caller ID & spam detection app using React Native + Kotlin native modules, Node.js backend.',
    github: 'https://github.com/Dinesh7571/Truecaller-clone-react-native',
    demo: 'https://youtu.be/J-DBm1FjPKU?si=EBFUg7Lj1b3PM0FZ'
  },
  {
    name: 'Baymax',
    desc: 'Personal health companion: water intake, steps, reminders, Gemini API integration, TTS.',
    github: 'https://github.com/Dinesh7571/Baymax',
    demo: 'https://youtu.be/DCYvhKRuVCg?si=vUB6zp7w_SZt-5nA'
  },
  {
    name: 'E-commerce App',
    desc: 'Cross-platform e-commerce app and website with Zod validations and responsive UI.',
    github: 'https://github.com/Dinesh7571/Ecommerce-in-react-native',
    demo: 'https://youtube.com/shorts/snl_MiUqJTw?si=v1C82v0Ig_h9lkrZ'
  },
  {
    name: 'SiteWatch Pro',
    desc: 'Real-time website monitoring (MERN) with cron jobs, keyword checks and alerts.',
    github: 'https://github.com/Dinesh7571/SiteWatch-Mern-',
    demo: 'https://sitewatchpro.vercel.app'
  }
]

const discoColors = [
  'from-purple-900 to-pink-900',
  'from-blue-900 to-cyan-900',
  'from-green-900 to-teal-900',
  'from-red-900 to-orange-900',
  'from-indigo-900 to-purple-900',
  'from-yellow-900 to-red-900',
  'from-pink-900 to-rose-900',
  'from-cyan-900 to-blue-900',
  'from-emerald-900 to-green-900',
  'from-orange-900 to-pink-900'
]

export default function Profile({onSwitch}){
  const [isDark, setIsDark] = useState(true)
  const [isDiscoMode, setIsDiscoMode] = useState(false)
  const [currentColorIndex, setCurrentColorIndex] = useState(0)
  const [currentGradient, setCurrentGradient] = useState(discoColors[0])


  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const toggleDisco = () => {
    setIsDiscoMode(!isDiscoMode)
  }

  useEffect(() => {
    let interval
    if (isDiscoMode) {
      interval = setInterval(() => {
        setCurrentColorIndex((prev) => (prev + 1) % discoColors.length)
      }, 800) // Change color every 800ms
    }
    return () => clearInterval(interval)
  }, [isDiscoMode])

  const getBackgroundClass = () => {
    if (isDiscoMode) {
      return `bg-gradient-to-br ${discoColors[currentColorIndex]} transition-all duration-500`
    }
    return isDark ? 'bg-black' : 'bg-gray-50'
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${getBackgroundClass()} ${
      isDark && !isDiscoMode ? 'text-gray-100' : isDiscoMode ? 'text-white' : 'text-gray-900'
    }`}>
      
      {/* Glass Header */}
      <header
  className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
    isDark || isDiscoMode
      ? 'bg-black/30 border-white/10'
      : 'bg-white/30 border-gray-200/50'
  }`}
>
  <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
    {/* Name */}
    <h1
      className={`text-lg sm:text-xl font-semibold transition-colors duration-300 ${
        isDark || isDiscoMode ? 'text-white' : 'text-gray-900'
      }`}
    >
      Dinesh Kannaujiya
    </h1>

    {/* Buttons */}
    <div className="flex flex-wrap gap-2">
      {/* Disco Button */}
      <button
        onClick={toggleDisco}
        className={`px-3 py-2 rounded-full backdrop-blur-sm border transition-all duration-300 hover:scale-105 text-xs sm:text-sm font-medium ${
          isDiscoMode
            ? 'bg-white/20 border-white/30 text-white shadow-lg animate-pulse'
            : isDark
            ? 'bg-gradient-to-r from-purple-500 to-pink-500 border-white/20 text-white hover:from-purple-400 hover:to-pink-400'
            : 'bg-gradient-to-r from-purple-600 to-pink-600 border-gray-300/50 text-white hover:from-purple-500 hover:to-pink-500'
        }`}
      >
        {isDiscoMode ? '🕺 DISCO ON' : '✨ DISCO'}
      </button>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className={`p-2 sm:p-3 rounded-full backdrop-blur-sm border transition-all duration-300 hover:scale-110 ${
          isDark || isDiscoMode
            ? 'bg-white/10 border-white/20 text-gray-300 hover:text-white hover:bg-white/20'
            : 'bg-black/10 border-gray-300/50 text-gray-600 hover:text-gray-900 hover:bg-black/20'
        }`}
      >
        {isDark ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
      </button>

      {/* Switch to V2 Button */}
      <button
        onClick={onSwitch}
        className="px-3 py-2 rounded-full backdrop-blur-sm border transition-all duration-300 hover:scale-105 text-xs sm:text-sm font-medium"
      >
        Switch to V2
      </button>
    </div>
  </div>
</header>

      <div className="p-4 pt-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Left card */}
          <aside className={`md:col-span-1 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${
            isDark || isDiscoMode
              ? 'bg-white/5 border-white/10' 
              : 'bg-white/60 border-gray-200/50 shadow-lg'
          }`}>
            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 rounded-full backdrop-blur-sm border flex items-center justify-center text-lg font-semibold transition-all duration-300 ${
                isDark || isDiscoMode
                  ? 'text-gray-800 border-white/10' 
                  : 'text-gray-100 border-gray-300/50'
              }`}>
                DK
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Dinesh Kannaujiya</h2>
                <p className={`text-sm transition-colors duration-300 ${
                  isDark || isDiscoMode ? 'text-gray-400' : 'text-gray-600'
                }`}>B.Tech — Computer Science & Engineering</p>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-sm">
              <div>
                <p className={`text-xs uppercase transition-colors duration-300 ${
                  isDark || isDiscoMode ? 'text-gray-500' : 'text-gray-500'
                }`}>Contact</p>
                <div className="flex gap-3 mt-2">
                  {socials.map((s)=>(
                    <a key={s.name} href={s.url} target="_blank" rel="noreferrer" 
                       className={`flex items-center gap-2 transition-colors duration-300 ${
                         isDark || isDiscoMode
                           ? 'text-gray-300 hover:text-white' 
                           : 'text-gray-600 hover:text-gray-900'
                       }`}>
                      <span className="text-lg">{s.icon}</span>
                      <span className="truncate text-xs">{s.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <p className={`text-xs uppercase transition-colors duration-300 ${
                  isDark || isDiscoMode ? 'text-gray-500' : 'text-gray-500'
                }`}>Skills</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {['React Native','React.js','Node.js','Express','MongoDB','Tailwind CSS','Android','Firebase','Git'].map(s=>(
                    <span key={s} className={`text-xs px-2 py-1 rounded backdrop-blur-sm border transition-all duration-300 ${
                      isDark || isDiscoMode
                        ? 'bg-white/5 border-white/10' 
                        : 'bg-white/60 border-gray-200/50'
                    }`}>{s}</span>
                  ))}
                </div>
              </div>

              <div>
                <p className={`text-xs uppercase transition-colors duration-300 ${
                  isDark || isDiscoMode ? 'text-gray-500' : 'text-gray-500'
                }`}>Location</p>
                <p className={`text-sm transition-colors duration-300 ${
                  isDark || isDiscoMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Deoria, Uttar Pradesh, India</p>
              </div>
            </div>
          </aside>

          {/* Right main */}
          <main className="md:col-span-2 flex flex-col gap-6">
            <section className={`backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${
              isDark || isDiscoMode
                ? 'bg-white/5 border-white/10' 
                : 'bg-white/60 border-gray-200/50 shadow-lg'
            }`}>
              <h2 className="text-lg font-medium">About</h2>
              <p className={`mt-3 text-sm leading-relaxed transition-colors duration-300 ${
                isDark || isDiscoMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                I build mobile-first experiences and full-stack products. My primary focus is <strong>React Native app development</strong>, complemented by strong backend skills (Node.js, Express, MongoDB).
                I currently work as a <strong>Frontend Developer at SR EDU Technology Pvt Ltd, Hyderabad</strong> (June 2025 — Present) and also do freelance app projects for international clients.
                I prefer minimalist, performant apps and pragmatic engineering.
              </p>
              <div className={`mt-3 text-xs transition-colors duration-300 ${
                isDark || isDiscoMode ? 'text-gray-500' : 'text-gray-500'
              }`}>
                Interests: Science-fiction movies · Technology · AI tools
              </div>
            </section>

            <section className={`backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${
              isDark || isDiscoMode
                ? 'bg-white/5 border-white/10' 
                : 'bg-white/60 border-gray-200/50 shadow-lg'
            }`}>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium">Selected Projects</h2>
                <span className={`text-xs transition-colors duration-300 ${
                  isDark || isDiscoMode ? 'text-gray-500' : 'text-gray-500'
                }`}>Full-stack · Mobile</span>
              </div>

              <div className="mt-4 space-y-4">
                {projects.map((p, idx)=>(
                  <article key={idx} className={`p-4 rounded-lg backdrop-blur-sm border transition-all duration-300 ${
                    isDark || isDiscoMode
                      ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                      : 'bg-white/60 border-gray-200/50 hover:bg-white/80 shadow-sm'
                  }`}>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">{p.name}</h3>
                        <p className={`text-xs mt-1 transition-colors duration-300 ${
                          isDark || isDiscoMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>{p.desc}</p>
                      </div>
                      <div className="flex gap-3 text-sm">
                        <a href={p.github} target="_blank" rel="noreferrer" 
                           className={`flex items-center gap-2 transition-colors duration-300 ${
                             isDark || isDiscoMode
                               ? 'text-gray-300 hover:text-white' 
                               : 'text-gray-600 hover:text-gray-900'
                           }`}>
                          <FaGithub /> <span>Code</span>
                        </a>
                        <a href={p.demo} target="_blank" rel="noreferrer" 
                           className={`flex items-center gap-2 transition-colors duration-300 ${
                             isDark || isDiscoMode
                               ? 'text-gray-300 hover:text-white' 
                               : 'text-gray-600 hover:text-gray-900'
                           }`}>
                          <FiExternalLink /> <span>Demo</span>
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className={`backdrop-blur-sm rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6 border transition-all duration-300 ${
              isDark || isDiscoMode
                ? 'bg-white/5 border-white/10' 
                : 'bg-white/60 border-gray-200/50 shadow-lg'
            }`}>
              <div>
                <h2 className="text-lg font-medium">Experience</h2>
                <div className={`mt-3 space-y-3 text-sm transition-colors duration-300 ${
                  isDark || isDiscoMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <div>
                    <div className="font-semibold">Frontend Developer — SR EDU Technology Pvt Ltd</div>
                    <div className={`text-xs transition-colors duration-300 ${
                      isDark || isDiscoMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>June 2025 — Present · Hyderabad</div>
                    <div>Building educational web frontends, optimizing performance and UI, collaborating with backend teams.</div>
                  </div>

                  <div>
                    <div className="font-semibold">IT Developer — Gyankosha</div>
                    <div className={`text-xs transition-colors duration-300 ${
                      isDark || isDiscoMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>Feb 2025 — Present · Gorakhpur</div>
                    <div>Developed and maintained e-learning platform web & mobile.</div>
                  </div>

                  <div>
                    <div className="font-semibold">Freelance Mobile App Developer</div>
                    <div className={`text-xs transition-colors duration-300 ${
                      isDark || isDiscoMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>Ongoing</div>
                    <div>Delivered multiple mobile apps to international clients, handling delivery, QA, and deployment.</div>
                  </div>

                  <div>
                    <div className="font-semibold">App Developer Intern — Pinkmoon Technologies</div>
                    <div className={`text-xs transition-colors duration-300 ${
                      isDark || isDiscoMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>Oct 2024 · Hyderabad</div>
                    <div>Translated Figma to pixel-perfect React Native screens and integrated APIs.</div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium">Education & Extras</h2>
                <div className={`mt-3 text-sm transition-colors duration-300 ${
                  isDark || isDiscoMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <div className="font-medium">Institution of Technology and Management, GIDA Gorakhpur</div>
                  <div className={`text-xs transition-colors duration-300 ${
                    isDark || isDiscoMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>B.Tech — Computer Science & Engineering (2021 — 2025)</div>

                  <div className="mt-3">
                    <p className={`text-xs uppercase transition-colors duration-300 ${
                      isDark || isDiscoMode ? 'text-gray-500' : 'text-gray-500'
                    }`}>Extras</p>
                    <ul className={`list-disc list-inside mt-2 space-y-1 text-sm transition-colors duration-300 ${
                      isDark || isDiscoMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <li>Organized coding workshops and managed college events.</li>
                      <li>Participated in hackathons; learned teamwork under stress.</li>
                      <li>Built monitoring tools using node-cron, axios and Mongoose.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className={`backdrop-blur-sm rounded-2xl p-6 flex items-center justify-between border transition-all duration-300 ${
              isDark || isDiscoMode
                ? 'bg-white/5 border-white/10' 
                : 'bg-white/60 border-gray-200/50 shadow-lg'
            }`}>
              <div>
                <p className="text-sm">Want the source code, resume PDF, or a live demo? Email me: <a href="mailto:kannaujiya00000@gmail.com" className="underline">kannaujiya00000@gmail.com</a></p>
              </div>
              <div className={`text-xs transition-colors duration-300 ${
                isDark || isDiscoMode ? 'text-gray-500' : 'text-gray-500'
              }`}>Available for React / React Native roles & freelance</div>
            </section>

          </main>
        </div>
      </div>
    </div>
  )
}