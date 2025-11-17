import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import About from './pages/About'
import Careers from './pages/Careers'
import Contact from './pages/Contact'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/solutions" element={<Solutions/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/careers" element={<Careers/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  )
}
