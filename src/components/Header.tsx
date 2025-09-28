'use client'
import { COMMUNITY_URL } from '@/lib/links'

export default function Header() {
  return (
    <header className="bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-vibe-green rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="ml-3 text-xl font-bold text-white tracking-tight">Vibe Coding Coin</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-white/60 hover:text-vibe-green transition-colors">About</a>
            <a href="#services" className="text-white/60 hover:text-vibe-green transition-colors">Services</a>
            <a
              href={COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X Community"
              className="text-white/70 hover:text-white transition-colors"
              title="X Community"
            >
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-white/10 hover:border-emerald-400/40 hover:shadow-[0_0_0_4px_rgba(16,185,129,0.08)]">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 4l16 16M20 4L4 20" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </a>
            <a
              href="https://github.com/Russioo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white/70 hover:text-white transition-colors"
              title="GitHub"
            >
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-white/10 hover:border-emerald-400/40 hover:shadow-[0_0_0_4px_rgba(16,185,129,0.08)]">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.9.58.11.8-.25.8-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.26 3.4.96.1-.76.41-1.26.74-1.55-2.55-.29-5.23-1.28-5.23-5.72 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.2 1.18.93-.26 1.93-.39 2.92-.39.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.77.11 3.06.75.81 1.2 1.84 1.2 3.1 0 4.45-2.69 5.43-5.25 5.71.42.36.79 1.07.79 2.16 0 1.56-.01 2.82-.01 3.21 0 .31.21.67.81.56A10.51 10.51 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
                </svg>
              </span>
            </a>
            <button
              className="bg-vibe-green text-white px-4 py-2 rounded-md font-semibold transition-all duration-300 hover:shadow-[0_0_0_4px_rgba(16,185,129,0.2)] hover:scale-[1.02]"
              type="button"
            >
              Buy VCC
            </button>
          </nav>
          
          <div className="md:hidden">
            <button className="text-white/70 hover:text-vibe-green">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
