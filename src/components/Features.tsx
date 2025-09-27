export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-vibe-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Free Website Development",
      description: "Professional websites for CTOs and blockchain projects at no cost. Clean, modern designs that represent your project professionally."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-vibe-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "On-Chain Livestreaming",
      description: "Integrated blockchain livestreaming capabilities for project updates, demos, and community engagement with full transparency."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-vibe-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Fee Donations",
      description: "All service fees are transparently donated back to blockchain projects and open-source initiatives, supporting the ecosystem."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-vibe-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z" />
        </svg>
      ),
      title: "CTO Project Support",
      description: "Specialized support for technical leaders and their projects with enterprise-grade solutions and professional consultation."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-vibe-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Blockchain Integration",
      description: "Seamless integration with blockchain technologies, smart contracts, and decentralized applications for modern web3 projects."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-vibe-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Professional Quality",
      description: "Enterprise-grade security, performance optimization, and professional standards in all deliverables and services."
    }
  ]

  return (
    <section id="services" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional Services
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Comprehensive web development and blockchain integration services designed for modern projects and technical leaders.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl p-6 bg-white/5 border border-white/10 hover:border-emerald-400/40 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_0_0_4px_rgba(16,185,129,0.08)] fade-up"
              style={{animationDelay: `${index * 80}ms`}}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
