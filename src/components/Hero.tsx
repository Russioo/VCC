export default function Hero() {
  return (
    <section className="relative py-28 overflow-hidden neon-grid scanlines">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.15),_transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center fade-up">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-vibe-green rounded-full mb-6 shadow-xl shadow-emerald-500/30 ring-2 ring-emerald-400/30">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Vibe Coding Coin
          </h1>
          
          <p className="text-lg md:text-2xl text-white/70 mb-10 max-w-3xl mx-auto">
            Professional web development for CTOs and blockchain projects with integrated on-chain livestreaming and community fee donations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center fade-up" style={{animationDelay: '120ms'}}>
            <a
              href="#services"
              className="bg-vibe-green text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_0_4px_rgba(16,185,129,0.2)] hover:scale-[1.02] flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Get Started
            </a>
            <a
              href="https://x.com/i/communities/1971948515443069280"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg font-semibold border-2 border-white/15 text-white/80 hover:text-white hover:border-emerald-400/40 transition-all duration-300 hover:shadow-[0_0_0_4px_rgba(16,185,129,0.12)]"
            >
              Join Community
            </a>
          </div>
          <p className="mt-6 text-white/60 text-sm fade-up" style={{animationDelay: '200ms'}}>
            Ideas for features or sites? DM or post in the community.
          </p>
        </div>
      </div>
    </section>
  )
}
