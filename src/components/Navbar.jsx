import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="navbar-brand">
          <div className="logo-icon">AU</div>
          Arihant Udyog
        </Link>
        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
          <li><Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>Products</Link></li>
          <li><Link to="/contact" className="btn btn-primary">Get Quote</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
