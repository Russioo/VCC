export default function Banner() {
  const items = [
    'Free builds',
    'Fees donated',
    'Watch live',
  ]

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex gap-6 animate-marquee whitespace-nowrap text-white/80 text-sm">
          {Array.from({ length: 3 }).map((_, loop) => (
            <div key={loop} className="flex gap-6">
              {items.map((item, idx) => (
                <div key={`${loop}-${idx}`} className="inline-flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-vibe-green" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

