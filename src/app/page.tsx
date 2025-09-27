import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Banner from '@/components/Banner'
import About from '@/components/About'
import Features from '@/components/Features'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Banner />
      <About />
      <Features />
      <Footer />
    </main>
  )
}
