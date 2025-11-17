import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CookieBanner from '../components/CookieBanner'
import { ApplicationForm } from '../components/Forms'
import { getJSON } from '../utils/api'
import { useEffect, useState } from 'react'

function JobList(){
  const [jobs, setJobs] = useState([])
  useEffect(()=>{ getJSON('/jobs').then(setJobs).catch(()=>{}) },[])
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {jobs.map(j => (
        <div key={j.id} className="border rounded-xl p-5">
          <h4 className="font-semibold">{j.title}</h4>
          <p className="text-sm text-gray-600">{j.location} · {j.type}</p>
          <a href="#apply" className="mt-3 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700">Apply →</a>
        </div>
      ))}
    </div>
  )
}

export default function Careers(){
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <main>
        <section className="py-14 bg-gradient-to-b from-white to-blue-50/40 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight">Careers</h1>
            <p className="mt-2 text-gray-700">Build critical platforms with a team that values engineering excellence.</p>
          </div>
        </section>

        <section className="py-12 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold">Open Positions</h3>
              <div className="mt-4"><JobList/></div>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Benefits</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>Remote-first across EU</li>
                <li>Education budget</li>
                <li>Hardware of choice</li>
                <li>Flexible hours</li>
                <li>Regular offsites</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="apply" className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold">Apply Now</h3>
            <p className="mt-2 text-gray-700">Tell us about your experience and interests.</p>
            <div className="mt-6">
              <ApplicationForm/>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
      <CookieBanner/>
    </div>
  )
}
