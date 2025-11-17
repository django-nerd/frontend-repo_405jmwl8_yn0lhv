import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CookieBanner from '../components/CookieBanner'
import SpecTabs from '../components/Tabs'
import { Database, Cloud, Shield, Check } from 'lucide-react'

function Product({icon:Icon, title, description, benefits, image, features}){
  return (
    <section className="py-12 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center"><Icon className="h-6 w-6 text-white"/></div>
            <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          </div>
          <p className="mt-4 text-gray-700">{description}</p>
          <ul className="mt-4 grid sm:grid-cols-2 gap-2">
            {benefits.map(b => (
              <li key={b} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-blue-600"/>{b}</li>
            ))}
          </ul>
          <div className="mt-6">
            <SpecTabs items={features}/>
          </div>
        </div>
        <div>
          <div className="aspect-video rounded-xl border bg-gradient-to-br from-gray-50 to-blue-50" aria-label={`${title} UI screenshot`}></div>
        </div>
      </div>
    </section>
  )
}

export default function Solutions(){
  const products = [
    {
      icon: Cloud,
      title: 'Cloud Migration Suite',
      description: 'Automated landing zones, policy baselines, and orchestrated cutovers that minimize downtime and risk.',
      benefits: ['Blueprinted LZ','Cost controls','IaC pipelines'],
      features: [
        { value: 'architecture', label:'Architecture', content: <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700"><li>Multi-account isolation</li><li>Network segmentation</li><li>Policy-as-code</li></ul> },
        { value: 'operations', label:'Operations', content: <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700"><li>Self-service portals</li><li>FinOps dashboards</li><li>Guardrails</li></ul> },
      ],
    },
    {
      icon: Database,
      title: 'Data Automation Engine',
      description: 'Declarative pipelines with metadata, governance, and end-to-end observability for BI and ML workloads.',
      benefits: ['Lineage','Data contracts','Auto-scaling'],
      features: [
        { value: 'pipelines', label:'Pipelines', content: <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700"><li>CDC and batch</li><li>Quality gates</li><li>Versioned datasets</li></ul> },
        { value: 'governance', label:'Governance', content: <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700"><li>PII tagging</li><li>Access catalogs</li><li>Policy enforcement</li></ul> },
      ],
    },
    {
      icon: Shield,
      title: 'CyberShield Security Platform',
      description: 'Continuous control monitoring, threat detection, and incident response with zero-trust at the core.',
      benefits: ['Threat analytics','Hardening','Compliance'],
      features: [
        { value: 'detect', label:'Detect', content: <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700"><li>Behavioral SIEM</li><li>Asset inventory</li><li>Alert tuning</li></ul> },
        { value: 'respond', label:'Respond', content: <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700"><li>Playbooks</li><li>Forensics</li><li>Audit trails</li></ul> },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <main>
        <section className="py-14 bg-gradient-to-b from-white to-blue-50/40 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight">Solutions</h1>
            <p className="mt-2 text-gray-700">Three platforms designed for scale, security, and speed.</p>
          </div>
        </section>
        {products.map(p => <Product key={p.title} {...p} />)}
      </main>
      <Footer/>
      <CookieBanner/>
    </div>
  )
}
