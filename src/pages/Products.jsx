import { Link } from 'react-router-dom'
import {
  Check, ArrowRight, CircleDot, Droplets, Waves, Cylinder, Wrench, Box
} from 'lucide-react'

const products = [
  {
    icon: <CircleDot size={56} />,
    name: 'LLDPE Agricultural Pipe',
    desc: 'Linear Low-Density Polyethylene (LLDPE) pipes designed specifically for agricultural applications. These pipes offer excellent flexibility, chemical resistance, and durability for long-term field use.',
    features: [
      'High flexibility and crack resistance',
      'UV stabilized for outdoor use',
      'Chemical and corrosion resistant',
      'Lightweight and easy to install',
      'Available in multiple sizes (16mm to 110mm)',
      'Food-grade material options available',
    ],
    applications: ['Drip Irrigation', 'Sprinkler Systems', 'Water Supply', 'Fertigation'],
  },
  {
    icon: <Droplets size={56} />,
    name: 'PVC Garden Pipe',
    desc: 'Premium quality PVC garden pipes that are lightweight, flexible, and durable. Ideal for domestic gardening, car washing, and light-duty water transfer applications.',
    features: [
      'Smooth inner surface for better flow',
      'Kink resistant and flexible',
      'Non-toxic and odourless',
      'Available in attractive green colour',
      'Various diameters (12mm to 25mm)',
      'Pressure rated for garden use',
    ],
    applications: ['Garden Watering', 'Car Washing', 'Domestic Use', 'Terrace Gardening'],
  },
  {
    icon: <Waves size={56} />,
    name: 'Braided Hose',
    desc: 'Reinforced braided hoses with nylon or polyester braid for enhanced pressure handling. Suitable for high-pressure applications in agriculture, industry, and construction.',
    features: [
      'High burst pressure rating',
      'Nylon/polyester reinforcement',
      'Excellent abrasion resistance',
      'Temperature resistant',
      'Available in 1/2" to 2" sizes',
      'Multiple pressure ratings available',
    ],
    applications: ['Agriculture', 'Industrial', 'Construction', 'Compressed Air'],
  },
  {
    icon: <Cylinder size={56} />,
    name: 'Suction Hose',
    desc: 'Heavy-duty suction hoses with rigid PVC spiral reinforcement designed for suction and delivery of water, slurry, and other fluids. Built to withstand vacuum pressure without collapsing.',
    features: [
      'Rigid PVC spiral reinforcement',
      'Collapse-resistant under vacuum',
      'Smooth bore for unrestricted flow',
      'UV and weather resistant',
      'Available in 1" to 6" sizes',
      'Suitable for pump connections',
    ],
    applications: ['Water Pumping', 'Dewatering', 'Agriculture', 'Industrial Suction'],
  },
  {
    icon: <Waves size={56} />,
    name: 'Lay Flat Hose',
    desc: 'High-quality lay flat discharge hoses that lie flat when not in use for easy storage and transportation. Ideal for water discharge, irrigation, and emergency water supply.',
    features: [
      'Flat design for compact storage',
      'High flow capacity',
      'Lightweight and portable',
      'Abrasion resistant outer cover',
      'Available in 2" to 6" sizes',
      'High working pressure',
    ],
    applications: ['Irrigation', 'Water Discharge', 'Mining', 'Emergency Supply'],
  },
  {
    icon: <Box size={56} />,
    name: 'Other Plastic Products',
    desc: 'A comprehensive range of plastic products including pipe fittings, connectors, couplings, sprinklers, drippers, and other accessories to complement our pipe and hose range.',
    features: [
      'Wide range of fittings and connectors',
      'Compatible with all our pipe sizes',
      'Durable plastic construction',
      'Easy to install and maintain',
      'Bulk quantity available',
      'Custom products on request',
    ],
    applications: ['Fittings', 'Connectors', 'Accessories', 'Custom Products'],
  },
]

function Products() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Our Products</h1>
          <p>
            A complete range of high-quality pipes, hoses, and plastic products
            for agriculture, industry, and home use.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="products-page-grid">
            {products.map((p) => (
              <div className="product-detail-card" key={p.name}>
                <div className="product-detail-image">{p.icon}</div>
                <div className="product-detail-info">
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <ul className="product-features">
                    {p.features.map((f) => (
                      <li key={f}>
                        <Check size={14} /> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="product-applications">
                    {p.applications.map((a) => (
                      <span className="app-tag" key={a}>{a}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <h2 className="section-title">Need a Custom Solution?</h2>
          <p className="section-subtitle">
            We can manufacture pipes and products to your specific requirements.
            Contact us for custom sizes, lengths, and specifications.
          </p>
          <Link to="/contact" className="btn">
            Request Custom Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}

export default Products
