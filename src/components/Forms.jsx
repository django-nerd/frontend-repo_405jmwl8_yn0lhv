import { useState } from 'react'
import { postJSON } from '../utils/api'

export function LeadForm(){
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)
  async function submit(e){
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const data = Object.fromEntries(form)
    setLoading(true)
    setStatus(null)
    try{
      await postJSON('/leads', data)
      setStatus({ok:true, msg:'Thank you — we will reach out shortly.'})
      e.currentTarget.reset()
    }catch(err){
      setStatus({ok:false, msg:'Something went wrong. Please try again.'})
    }finally{
      setLoading(false)
    }
  }
  return (
    <form onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <input name="company" required placeholder="Company" className="border rounded-md px-3 py-2"/>
      <input name="name" required placeholder="Full name" className="border rounded-md px-3 py-2"/>
      <input name="email" required type="email" placeholder="Work email" className="border rounded-md px-3 py-2"/>
      <input name="phone" placeholder="Phone" className="border rounded-md px-3 py-2"/>
      <select name="product" className="border rounded-md px-3 py-2 sm:col-span-2">
        <option value="">Interested in...</option>
        <option>Cloud Migration Suite</option>
        <option>Data Automation Engine</option>
        <option>CyberShield Security Platform</option>
      </select>
      <textarea name="message" placeholder="Your context / goals" rows="4" className="border rounded-md px-3 py-2 sm:col-span-2"></textarea>
      <button disabled={loading} className="sm:col-span-2 inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-6 py-3 text-base font-semibold shadow-sm hover:bg-blue-700 disabled:opacity-60">{loading ? 'Sending...' : 'Request a Demo'}</button>
      {status && <p className={`sm:col-span-2 text-sm ${status.ok? 'text-green-600':'text-red-600'}`}>{status.msg}</p>}
    </form>
  )
}

export function ApplicationForm(){
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)
  async function submit(e){
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const data = Object.fromEntries(form)
    setLoading(true)
    setStatus(null)
    try{
      await postJSON('/applications', data)
      setStatus({ok:true, msg:'Application received — we will get back soon.'})
      e.currentTarget.reset()
    }catch(err){
      setStatus({ok:false, msg:'Something went wrong. Please try again.'})
    }finally{
      setLoading(false)
    }
  }
  return (
    <form onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <input name="role" required placeholder="Position" className="border rounded-md px-3 py-2"/>
      <input name="name" required placeholder="Full name" className="border rounded-md px-3 py-2"/>
      <input name="email" required type="email" placeholder="Email" className="border rounded-md px-3 py-2"/>
      <input name="phone" placeholder="Phone" className="border rounded-md px-3 py-2"/>
      <input name="linkedin" placeholder="LinkedIn URL" className="border rounded-md px-3 py-2 sm:col-span-2"/>
      <input name="portfolio" placeholder="Portfolio / GitHub URL" className="border rounded-md px-3 py-2 sm:col-span-2"/>
      <textarea name="cover_letter" placeholder="Short cover letter" rows="5" className="border rounded-md px-3 py-2 sm:col-span-2"></textarea>
      <button disabled={loading} className="sm:col-span-2 inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-6 py-3 text-base font-semibold shadow-sm hover:bg-blue-700 disabled:opacity-60">{loading ? 'Submitting...' : 'Submit Application'}</button>
      {status && <p className={`sm:col-span-2 text-sm ${status.ok? 'text-green-600':'text-red-600'}`}>{status.msg}</p>}
    </form>
  )
}
