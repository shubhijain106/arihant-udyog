import { Link } from 'react-router-dom'
import {
  ArrowRight, Shield, Droplets, Factory, Award, Leaf, Truck,
  CircleDot, Waves, Cylinder
} from 'lucide-react'

const features = [
  {
    icon: <Shield size={28} />,
    title: 'Premium Quality',
    desc: 'Every product undergoes rigorous quality checks to ensure durability, strength, and long-lasting performance in demanding conditions.',
  },
  {
    icon: <Factory size={28} />,
    title: 'Modern Manufacturing',
    desc: 'State-of-the-art production facilities equipped with the latest technology for precision manufacturing and consistent output.',
  },
  {
    icon: <Leaf size={28} />,
    title: 'Agri-Focused Solutions',
    desc: 'Specially designed products for agricultural applications including drip irrigation, water supply, and field drainage systems.',
  },
  {
    icon: <Award size={28} />,
    title: 'Industry Standards',
    desc: 'All products comply with Indian industry standards and specifications, ensuring reliable performance and safety.',
  },
  {
    icon: <Truck size={28} />,
    title: 'Pan-India Supply',
    desc: 'Efficient logistics and distribution network ensuring timely delivery of products across all states in India.',
  },
  {
    icon: <Droplets size={28} />,
    title: 'Custom Solutions',
    desc: 'Tailored pipe and hose solutions designed to meet your specific requirements for size, length, and pressure rating.',
  },
]

const products = [
  {
    icon: <CircleDot size={48} />,
    name: 'LLDPE Agricultural Pipe',
    desc: 'High-density, flexible pipes ideal for drip irrigation and water distribution in agricultural fields.',
    tag: 'Agriculture',
  },
  {
    icon: <Droplets size={48} />,
    name: 'PVC Garden Pipe',
    desc: 'Lightweight, durable garden pipes perfect for domestic watering, gardening, and light-duty applications.',
    tag: 'Gardening',
  },
  {
    icon: <Waves size={48} />,
    name: 'Braided Hose',
    desc: 'Reinforced braided hoses offering high pressure resistance for industrial and agricultural use.',
    tag: 'Industrial',
  },
  {
    icon: <Cylinder size={48} />,
    name: 'Suction Hose',
    desc: 'Heavy-duty suction hoses designed for water pumping, dewatering, and fluid transfer operations.',
    tag: 'Heavy Duty',
  },
  {
    icon: <Waves size={48} />,
    name: 'Lay Flat Hose',
    desc: 'Collapsible lay flat hoses for efficient water discharge, irrigation, and temporary piping needs.',
    tag: 'Irrigation',
  },
  {
    icon: <CircleDot size={48} />,
    name: 'Other Plastic Products',
    desc: 'A wide range of plastic products including fittings, connectors, and accessories for various applications.',
    tag: 'Accessories',
  },
]

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <Factory size={16} /> 30+ Years of Trusted Service
            </div>
            <h1>
              Quality Pipes &amp; <span>Plastic Products</span> for Every Need
            </h1>
            <p>
              Arihant Udyog is a leading manufacturer and supplier of LLDPE agricultural pipes,
              PVC garden pipes, braided hoses, suction hoses, lay flat hoses, and all types
              of plastic products in India.
            </p>
            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary">
                View Products <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get a Quote
              </Link>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <h3>30+</h3>
              <p>Years of Service</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Product Varieties</p>
            </div>
            <div className="stat">
              <h3>1000+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat">
              <h3>Pan India</h3>
              <p>Supply Network</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section features">
        <div className="container">
          <div className="features-header">
            <h2 className="section-title">Why Choose Arihant Udyog</h2>
            <p className="section-subtitle">
              We combine quality materials, modern manufacturing, and dedicated service
              to deliver products you can depend on.
            </p>
          </div>
          <div className="features-grid">
            {features.map((f) => (
              <div className="feature-card" key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section products-section">
        <div className="container">
          <div className="products-header">
            <h2 className="section-title">Our Products</h2>
            <p className="section-subtitle">
              A comprehensive range of pipes, hoses, and plastic products
              designed for agricultural, industrial, and domestic use.
            </p>
          </div>
          <div className="products-grid">
            {products.map((p) => (
              <div className="product-card" key={p.name}>
                <div className="product-image">{p.icon}</div>
                <div className="product-info">
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <span className="product-tag">{p.tag}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/products" className="btn btn-primary">
              View All Products <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <h2 className="section-title">Ready to Place an Order?</h2>
          <p className="section-subtitle">
            Get in touch with us for bulk orders, custom requirements, or product enquiries.
            We are here to help with all your piping needs.
          </p>
          <Link to="/contact" className="btn">
            Contact Us Today <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
