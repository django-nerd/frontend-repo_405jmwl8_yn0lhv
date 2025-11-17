import { useEffect, useState } from 'react'

export default function CookieBanner(){
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({necessary:true, analytics:false, date: new Date().toISOString()}))
    setVisible(false)
  }

  if (!visible) return null
  return (
    <div className="fixed bottom-0 inset-x-0 z-50">
      <div className="max-w-5xl mx-auto m-4 rounded-lg border border-gray-200 bg-white shadow-lg p-4 sm:p-5">
        <div className="sm:flex sm:items-start sm:justify-between gap-4">
          <div className="text-sm text-gray-700">
            <p className="font-semibold mb-1">Cookies</p>
            <p>We use only essential cookies for site functionality. Analytics is opt-in and disabled by default. See our Privacy Policy for details.</p>
          </div>
          <div className="mt-3 sm:mt-0 flex gap-3">
            <button onClick={accept} className="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700">Accept essential</button>
            <a href="/privacy" className="px-4 py-2 rounded-md border text-sm hover:bg-gray-50">Privacy</a>
          </div>
        </div>
      </div>
    </div>
  )
}
