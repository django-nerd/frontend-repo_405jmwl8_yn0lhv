export default function Footer(){
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="h-8 w-8 rounded-md bg-blue-600"></div>
          <p className="text-sm text-gray-600">Enterprise cloud, data, and security engineering. Munich, Germany.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="/about" className="hover:text-blue-600">About Us</a></li>
            <li><a href="/careers" className="hover:text-blue-600">Careers</a></li>
            <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Solutions</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Cloud Migration Suite</li>
            <li>Data Automation Engine</li>
            <li>CyberShield Security Platform</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Imprint</li>
            <li>Privacy Policy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-gray-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} TechConnect Systems GmbH. All rights reserved.</p>
          <p>Mon–Fri, 9–17 CET · +49 89 123456 · hello@techconnect.systems</p>
        </div>
      </div>
    </footer>
  )
}
