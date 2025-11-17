import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CookieBanner from '../components/CookieBanner'
import { LeadForm } from '../components/Forms'

export default function Contact(){
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <main>
        <section className="py-14 bg-gradient-to-b from-white to-blue-50/40 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
            <p className="mt-2 text-gray-700">Munich HQ · Mon–Fri, 9–17 CET · +49 89 123456 · hello@techconnect.systems</p>
          </div>
        </section>
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-2xl font-bold">Request a Demo</h3>
              <p className="mt-2 text-gray-700">Share your context. We respond within one business day.</p>
              <div className="mt-6"><LeadForm/></div>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Office</h3>
              <p className="mt-2 text-gray-700">TechConnect Systems GmbH · Munich, Germany</p>
              <div className="mt-4 aspect-video w-full rounded-xl border overflow-hidden">
                <iframe title="Munich Office Map" className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Munich%2C%20Germany&output=embed"></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
      <CookieBanner/>
    </div>
  )
}
