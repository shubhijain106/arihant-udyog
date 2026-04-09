import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Arihant Udyog</h3>
            <p>
              A trusted manufacturer and supplier of high-quality LLDPE pipes, PVC pipes,
              hoses, and plastic products. Serving the agricultural and industrial sectors
              across India with durable, reliable products.
            </p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Products</h4>
            <ul>
              <li><Link to="/products">LLDPE Agri Pipe</Link></li>
              <li><Link to="/products">PVC Garden Pipe</Link></li>
              <li><Link to="/products">Braided Hose</Link></li>
              <li><Link to="/products">Suction Hose</Link></li>
              <li><Link to="/products">Lay Flat Hose</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact Info</h4>
            <ul>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <MapPin size={16} style={{ marginTop: '4px', flexShrink: 0 }} />
                Dukheri Road, Ambala Cantt 133001
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <Phone size={16} style={{ marginTop: '4px', flexShrink: 0 }} />
                <span>
                  <a href="tel:+918199999270">+91 81999 99270</a><br />
                  <a href="tel:+919416094777">+91 94160 94777</a><br />
                  <a href="tel:+13528707123">+1 352 870 7123</a><br />
                  <a href="tel:+13527455534">+1 352 745 5534</a>
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} style={{ flexShrink: 0 }} />
                <a href="mailto:arihant.udyog.pipes@gmail.com">arihant.udyog.pipes@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Arihant Udyog. All rights reserved.</p>
          <p>Manufactured with pride in India</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
