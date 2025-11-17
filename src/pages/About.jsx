import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CookieBanner from '../components/CookieBanner'

function Timeline(){
  const items = [
    {year:2016, title:'Founded in Munich', desc:'Company inception focused on cloud and data.'},
    {year:2018, title:'First enterprise deployments', desc:'Scaled multi-cloud landing zones and data platforms.'},
    {year:2020, title:'Security practice launch', desc:'Zero-trust and incident response capabilities.'},
    {year:2022, title:'SaaS platforms', desc:'Launched industry-grade multi-tenant products.'},
    {year:2024, title:'EU expansion', desc:'Remote-first teams across the EU.'},
  ]
  return (
    <ol className="relative border-l pl-6 space-y-6">
      {items.map(i => (
        <li key={i.year} className="ml-2">
          <div className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full bg-blue-600"></div>
          <h4 className="font-semibold">{i.year} — {i.title}</h4>
          <p className="text-sm text-gray-600">{i.desc}</p>
        </li>
      ))}
    </ol>
  )
}

function Team(){
  const members = Array.from({length:10}).map((_,i)=> ({name:`Member ${i+1}`, title:['Engineering','Cloud','Data','Security'][i%4] + ' Lead'}))
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {members.map(m => (
        <div key={m.name} className="border rounded-xl p-4 text-center">
          <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-400" aria-label={`${m.name} avatar`}></div>
          <h4 className="mt-3 font-semibold">{m.name}</h4>
          <p className="text-sm text-gray-600">{m.title}</p>
        </div>
      ))}
    </div>
  )
}

export default function About(){
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <main>
        <section className="py-14 bg-gradient-to-b from-white to-blue-50/40 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight">About Us</h1>
            <p className="mt-2 text-gray-700">Engineering-first, outcome-focused. Founded 2016 in Munich.</p>
          </div>
        </section>
        <section className="py-12 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold">Mission</h2>
              <p className="mt-2 text-gray-700">Build resilient, secure platforms that let enterprises move faster with confidence.</p>
              <h2 className="mt-8 text-2xl font-bold">Vision</h2>
              <p className="mt-2 text-gray-700">A European cloud-native ecosystem where security, data, and developer experience are unified.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Timeline</h3>
              <div className="mt-4"><Timeline/></div>
            </div>
          </div>
        </section>
        <section className="py-12 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold">Values</h3>
            <ul className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-700">
              <li className="border rounded-xl p-4">Security by design</li>
              <li className="border rounded-xl p-4">Measure outcomes</li>
              <li className="border rounded-xl p-4">Own the incident</li>
              <li className="border rounded-xl p-4">Automate the routine</li>
              <li className="border rounded-xl p-4">Respect the craft</li>
              <li className="border rounded-xl p-4">Build for longevity</li>
            </ul>
          </div>
        </section>
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold">Team</h3>
            <div className="mt-4"><Team/></div>
          </div>
        </section>
      </main>
      <Footer/>
      <CookieBanner/>
    </div>
  )
}
