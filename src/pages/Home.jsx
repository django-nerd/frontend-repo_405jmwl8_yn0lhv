import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CookieBanner from '../components/CookieBanner'
import Hero from '../components/Hero'
import { LogoStrip, USPGrid, ThreeSolutions, CTA } from '../components/Grids'

export default function Home(){
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <ThreeSolutions />
        <USPGrid />
        <CTA />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
