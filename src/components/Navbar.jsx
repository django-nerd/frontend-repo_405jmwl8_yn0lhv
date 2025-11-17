import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/about', label: 'About Us' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-blue-600"></div>
            <span className="font-semibold tracking-tight">TechConnect Systems GmbH</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={({isActive}) => `text-sm font-medium hover:text-blue-600 transition-colors ${isActive ? 'text-blue-600' : 'text-gray-700'}`}>
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" className="inline-flex items-center rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-blue-700 transition-colors">Request Demo</Link>
          </nav>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((n) => (
              <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)} className={({isActive}) => `block px-2 py-2 rounded-md text-sm ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'}`}>
                {n.label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="block w-full text-center rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-700">Request Demo</Link>
          </div>
        </div>
      )}
    </header>
  )
}
