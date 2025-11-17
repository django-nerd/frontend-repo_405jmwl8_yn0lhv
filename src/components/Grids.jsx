import { motion } from 'framer-motion'
import { Cloud, Database, Shield, Cpu, Zap, Lock } from 'lucide-react'

export function LogoStrip(){
  const logos = ['Helios','Nordwave','Synapse','OctaGrid','Quantica','VoltEdge']
  return (
    <div className="py-10 border-y bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {logos.map((l)=> (
            <div key={l} className="h-12 flex items-center justify-center border rounded-lg text-gray-500 text-sm">{l}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function USPGrid(){
  const items = [
    {icon: Cloud, title: 'Cloud-first Architecture', desc: 'Designs optimized for reliability, scalability, and cost.'},
    {icon: Database, title: 'Data Automation', desc: 'Pipelines with governance, lineage, and observability.'},
    {icon: Shield, title: 'Zero-Trust Security', desc: 'Threat detection, IAM hardening, and continuous compliance.'},
    {icon: Cpu, title: 'SaaS Engineering', desc: 'Multi-tenant platforms with robust APIs and SLAs.'},
  ]
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Why TechConnect?</h2>
          <p className="mt-2 text-gray-600">Practical engineering with measurable outcomes.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i, idx)=> (
            <motion.div key={i.title} initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:idx*0.05}} className="p-6 border rounded-2xl hover:shadow-lg transition-shadow">
              <i.icon className="h-6 w-6 text-blue-600"/>
              <h3 className="mt-3 font-semibold">{i.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{i.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ThreeSolutions(){
  const items = [
    {icon: Cloud, title: 'Cloud Migration Suite', desc: 'Blueprints, landing zones, and automated cutovers.'},
    {icon: Database, title: 'Data Automation Engine', desc: 'Metadata-driven pipelines with governance controls.'},
    {icon: Shield, title: 'CyberShield Platform', desc: 'Continuous security with threat analytics and response.'},
  ]
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((i)=> (
            <motion.div key={i.title} initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="p-6 border rounded-2xl hover:shadow-lg transition">
              <i.icon className="h-6 w-6 text-blue-600"/>
              <h3 className="mt-3 font-semibold">{i.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{i.desc}</p>
              <a href="/solutions" className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700">Learn more →</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTA(){
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border p-8 md:p-10 bg-gradient-to-br from-white to-blue-50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold tracking-tight">Ready to modernize your platform?</h3>
            <p className="mt-2 text-gray-600">Request a demo and see how we engineer outcomes, not presentations.</p>
          </div>
          <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 text-white px-6 py-3 text-base font-semibold shadow-sm hover:bg-blue-700">Request a Demo</a>
        </div>
      </div>
    </section>
  )
}
