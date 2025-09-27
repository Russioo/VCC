export default function About() {
  return (
    <section id="about" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 fade-up">
              About Vibe Coding Coin
            </h2>
            <div className="space-y-4 text-white/70 fade-up" style={{animationDelay: '80ms'}}>
              <p className="text-lg">
                Vibe Coding Coin builds clean, high‑quality sites for CTOs and on‑chain projects. Free builds. Real impact.
              </p>
              <p>
                On‑chain livestreaming, transparent fee donations, and enterprise‑grade execution. Simple, fast, professional.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-8 fade-up" style={{animationDelay: '160ms'}}>
              <div>
                <div className="text-2xl font-bold text-vibe-green mb-2">100%</div>
                <div className="text-sm text-white/70">Fee Transparency</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-vibe-green mb-2">24/7</div>
                <div className="text-sm text-white/70">Project Support</div>
              </div>
            </div>
          </div>
          
          <div className="rounded-xl p-8 bg-white/5 border border-white/10 fade-up" style={{animationDelay: '240ms'}}>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-vibe-green rounded-lg flex items-center justify-center mr-4 shadow-lg shadow-emerald-500/30">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Innovation First</h3>
                  <p className="text-white/70 text-sm">Cutting-edge web3 technologies and blockchain integration in every project.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-vibe-green rounded-lg flex items-center justify-center mr-4 shadow-lg shadow-emerald-500/30">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Community Driven</h3>
                  <p className="text-white/70 text-sm">All fees donated back to blockchain projects and open-source initiatives.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-vibe-green rounded-lg flex items-center justifyCenter mr-4 shadow-lg shadow-emerald-500/30">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Professional Standards</h3>
                  <p className="text-white/70 text-sm">Enterprise-grade quality and security in all deliverables and services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
