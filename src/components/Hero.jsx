import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[70vh] flex items-center">
          <div className="max-w-2xl py-24">
            <motion.h1 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              TechConnect Systems GmbH
            </motion.h1>
            <motion.p initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} transition={{delay:0.1, duration:0.6}} className="mt-4 text-lg text-gray-700">
              Cloud infrastructure, data automation, cybersecurity, and custom enterprise SaaS — engineered in Munich, Germany.
            </motion.p>
            <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} transition={{delay:0.2, duration:0.6}} className="mt-8 flex gap-3">
              <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 text-white px-6 py-3 text-base font-semibold shadow-sm hover:bg-blue-700">Request a Demo</a>
              <a href="/solutions" className="inline-flex items-center rounded-md border px-6 py-3 text-base font-semibold hover:bg-gray-50">Explore Solutions</a>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white"></div>
    </section>
  )
}
