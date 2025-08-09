import React, { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

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

const TypeWriter = ({ text, delay = 50, className = "", onComplete }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, delay)
      return () => clearTimeout(timeout)
    } else if (onComplete) {
      onComplete()
    }
  }, [currentIndex, text, delay, onComplete])

  return (
    <span className={className}>
      {displayText}
      {currentIndex < text.length && (
        <span className="animate-pulse text-green-400">█</span>
      )}
    </span>
  )
}

const TerminalLine = ({ children, prefix = ">" }) => (
  <div className="flex items-start gap-2 mb-2">
    <span className="text-green-400 font-mono shrink-0">{prefix}</span>
    <div className="flex-1">{children}</div>
  </div>
)

export default function MatrixProfile({onSwitch}) {
  const [showContent, setShowContent] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)
  const [matrixRain, setMatrixRain] = useState([])

  useEffect(() => {
    // Matrix rain effect
    const generateRain = () => {
      const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
      const drops = []
      const columns = Math.floor(window.innerWidth / 20)
      
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * window.innerHeight / 20)
      }
      
      setMatrixRain(drops)
    }

    generateRain()
    window.addEventListener('resize', generateRain)
    
    return () => window.removeEventListener('resize', generateRain)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono text-sm sm:text-base relative overflow-hidden">

      {/* Matrix Rain Background */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        {matrixRain.map((drop, i) => (
          <div
            key={i}
            className="absolute text-xs animate-pulse"
            style={{
              left: `${i * 20}px`,
              top: `${drop * 20}px`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {matrixChars[Math.floor(Math.random() * matrixChars.length)]}
          </div>
        ))}
      </div>

      {/* Scanlines Effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-repeating-linear bg-scanlines opacity-20"></div>
      </div>

      <div className="relative z-10 p-6">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-2 ">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>

          {/* Version Toggle */}
          <span
  className="ml-4 font-mono text-green-300 border border-green-500 px-3 py-1 cursor-pointer 
             hover:bg-green-500 hover:text-black transition 
             shadow-[inset_0_0_5px_rgba(0,255,255,0.5),0_0_5px_rgba(0,255,255,0.3)] 
             active:translate-y-[1px] active:shadow-[inset_0_0_8px_rgba(0,255,255,0.8)]
             rounded-sm"
  onClick={onSwitch}
>
  Switch CLASSIC MODE
</span>

        </div>

        {showContent && (
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Profile Header */}
            <div className="border border-green-500 bg-black/80 backdrop-blur-sm p-6">
              <TerminalLine prefix="$">
                <TypeWriter text="cat /home/dinesh/profile.txt" delay={60} />
              </TerminalLine>
              <div className="ml-4 space-y-2">
                <div className="text-green-300 text-xl">
                  <TypeWriter text="DINESH KANNAUJIYA" delay={100} />
                </div>
                <div className="text-green-500">
                  <TypeWriter text="B.Tech — Computer Science & Engineering" delay={50} />
                </div>
                <div className="text-green-400 text-sm">
                  <TypeWriter text="Location: Deoria, Uttar Pradesh, India" delay={30} />
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="border border-green-500 bg-black/80 backdrop-blur-sm p-6">
              <TerminalLine prefix="$">
                <TypeWriter text="whoami" delay={80} />
              </TerminalLine>
              <div className="ml-4 text-green-400 leading-relaxed">
                <TypeWriter 
                  text="I build mobile-first experiences and full-stack products. My primary focus is React Native app development, complemented by strong backend skills (Node.js, Express, MongoDB). I currently work as a Frontend Developer at SR EDU Technology Pvt Ltd, Hyderabad (June 2025 — Present) and also do freelance app projects for international clients. I prefer minimalist, performant apps and pragmatic engineering."
                  delay={20}
                />
              </div>
            </div>

            {/* Skills Section */}
            <div className="border border-green-500 bg-black/80 backdrop-blur-sm p-6">
              <TerminalLine prefix="$">
                <TypeWriter text="ls /skills/" delay={80} />
              </TerminalLine>
              <div className="ml-4 grid grid-cols-3 gap-2 text-green-400">
                {['React Native','React.js','Node.js','Express','MongoDB','Tailwind CSS','Android','Firebase','Git'].map((skill, i) => (
                  <div key={skill} className="flex items-center gap-2">
                    <span className="text-green-500">{`>`}</span>
                    <TypeWriter text={skill} delay={30 + i * 100} />
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Section */}
            <div className="border border-green-500 bg-black/80 backdrop-blur-sm p-6">
              <TerminalLine prefix="$">
                <TypeWriter text="find /projects -type f -name '*.app'" delay={80} />
              </TerminalLine>
              <div className="ml-4 space-y-4">
                {projects.map((project, i) => (
                  <div key={i} className="border-l-2 border-green-500 pl-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-green-300 font-bold">
                        <TypeWriter text={project.name} delay={50 + i * 200} />
                      </span>
                      <div className="flex gap-4 ml-auto">
                        <a href={project.github} target="_blank" rel="noreferrer" 
                           className="text-green-500 hover:text-green-300 transition-colors flex items-center gap-1">
                          <FaGithub /> <span className="text-xs">CODE</span>
                        </a>
                        <a href={project.demo} target="_blank" rel="noreferrer" 
                           className="text-green-500 hover:text-green-300 transition-colors flex items-center gap-1">
                          <FiExternalLink /> <span className="text-xs">DEMO</span>
                        </a>
                      </div>
                    </div>
                    <div className="text-green-400 text-sm">
                      <TypeWriter text={project.desc} delay={20 + i * 100} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div className="border border-green-500 bg-black/80 backdrop-blur-sm p-6">
              <TerminalLine prefix="$">
                <TypeWriter text="history | grep work" delay={80} />
              </TerminalLine>
              <div className="ml-4 space-y-3 text-green-400">
                <div className="border-l-2 border-green-500 pl-4">
                  <div className="text-green-300 font-bold">Frontend Developer — SR EDU Technology Pvt Ltd</div>
                  <div className="text-green-500 text-sm">June 2025 — Present · Hyderabad</div>
                  <div className="text-sm">Building educational web frontends, optimizing performance and UI</div>
                </div>
                <div className="border-l-2 border-green-500 pl-4">
                  <div className="text-green-300 font-bold">IT Developer — Gyankosha</div>
                  <div className="text-green-500 text-sm">Feb 2025 — Jun 2025 · Gorakhpur</div>
                  <div className="text-sm">Developed and maintained e-learning platform web & mobile</div>
                </div>
                <div className="border-l-2 border-green-500 pl-4">
                  <div className="text-green-300 font-bold">Freelance Mobile App Developer</div>
                  <div className="text-green-500 text-sm">Ongoing</div>
                  <div className="text-sm">Delivered multiple mobile apps to international clients</div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
<div className="border border-green-500 bg-black/80 backdrop-blur-sm p-6">
  <TerminalLine prefix="$">
    <TypeWriter text="cat /contact/info.txt" delay={80} />
  </TerminalLine>
  <div className="ml-4 flex gap-4 mt-3">
    {socials.map((social, i) => (
      <a
        key={social.name}
        href={social.url}
        target="_blank"
        rel="noreferrer"
        className="text-green-400 hover:text-green-300 transition-colors text-xl sm:text-2xl"
        style={{ fontSize: "1.2rem" }}
      >
        {social.icon}
      </a>
    ))}
  </div>
</div>


            {/* Footer */}
            <div className="border border-green-500 bg-black/80 backdrop-blur-sm p-4 text-center">
              <div className="text-green-500 text-sm">
                <TypeWriter 
                  text="Available for React / React Native roles & freelance projects" 
                  delay={50}
                />
              </div>
              <div className="mt-2 text-green-400 text-xs">
                <TypeWriter 
                  text="Connection established. End of transmission." 
                  delay={80}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .bg-scanlines {
          background-image: linear-gradient(
            transparent 50%,
            rgba(0, 255, 0, 0.03) 50%
          );
          background-size: 100% 4px;
        }
      `}</style>
    </div>
  )
}