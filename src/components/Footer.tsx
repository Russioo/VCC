import { PUMPFUN_URL } from '@/lib/links'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-vibe-green rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="ml-3 text-lg font-semibold text-white">Vibe Coding Coin</h3>
            </div>
            <p className="text-white/60 text-sm">
              Professional web development with blockchain integration and community support.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Free Website Development</li>
              <li>On-Chain Livestreaming</li>
              <li>CTO Project Support</li>
              <li>Fee Donations to Projects</li>
            </ul>
          </div>
          
          <div className="flex md:justify-end gap-3">
            <a
              href="https://x.com/i/communities/1971948515443069280"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X Community"
              className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/10 hover:border-emerald-400/40 hover:shadow-[0_0_0_4px_rgba(16,185,129,0.08)] text-white/70 hover:text-white transition-colors"
              title="X Community"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 4l16 16M20 4L4 20" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </a>
            <a
              href="https://github.com/Russioo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/10 hover:border-emerald-400/40 hover:shadow-[0_0_0_4px_rgba(16,185,129,0.08)] text-white/70 hover:text-white transition-colors"
              title="GitHub"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.9.58.11.8-.25.8-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.26 3.4.96.1-.76.41-1.26.74-1.55-2.55-.29-5.23-1.28-5.23-5.72 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.2 1.18.93-.26 1.93-.39 2.92-.39.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.77.11 3.06.75.81 1.2 1.84 1.2 3.1 0 4.45-2.69 5.43-5.25 5.71.42.36.79 1.07.79 2.16 0 1.56-.01 2.82-.01 3.21 0 .31.21.67.81.56A10.51 10.51 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
              </svg>
            </a>
            <a
              href={PUMPFUN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 h-10 rounded-md bg-vibe-green text-white font-semibold transition-all duration-300 hover:shadow-[0_0_0_4px_rgba(16,185,129,0.2)] hover:scale-[1.02]"
            >
              Buy VCC
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
          <p>&copy; 2025 Vibe Coding Coin. Professional blockchain development services.</p>
        </div>
      </div>
    </footer>
  )
}
