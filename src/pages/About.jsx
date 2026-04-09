import { Factory, Target, Users, ThumbsUp, Award, Leaf, Shield, Truck, User } from 'lucide-react'

const values = [
  {
    icon: <Shield size={28} />,
    title: 'Quality First',
    desc: 'Uncompromising quality in every product we manufacture.',
  },
  {
    icon: <Users size={28} />,
    title: 'Customer Focus',
    desc: 'Building lasting relationships through exceptional service.',
  },
  {
    icon: <Leaf size={28} />,
    title: 'Sustainability',
    desc: 'Responsible manufacturing with environment-friendly practices.',
  },
  {
    icon: <Award size={28} />,
    title: 'Innovation',
    desc: 'Continuously improving products with latest technology.',
  },
]

function About() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>About Arihant Udyog</h1>
          <p>
            Over 30 years of trust in manufacturing and supplying high-quality pipes and
            plastic products across India.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-story">
            <div className="about-story-text">
              <h2>Our Story</h2>
              <p>
                With over <strong>30 years of dedicated service</strong>, Arihant Udyog is a
                well-established manufacturer and supplier of a wide range of pipes and
                plastic products. Based in India, we have built a reputation for delivering
                high-quality, durable products that meet the demanding needs of agricultural,
                industrial, and domestic applications.
              </p>
              <p>
                Our product range includes LLDPE agricultural pipes, PVC garden pipes,
                braided hoses, suction hoses, lay flat hoses, and various other plastic
                products. Each product is manufactured using premium raw materials and
                advanced production techniques to ensure superior performance and longevity.
              </p>
              <p>
                Under the leadership of our founder, <strong>Sanchit Jain</strong>, Arihant Udyog
                has grown with a commitment to quality and customer satisfaction. We serve
                a wide network of customers across India, from individual farmers to
                large agricultural enterprises and industrial establishments.
              </p>
            </div>
            <div className="about-image">
              <Factory size={80} />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="features-header">
            <h2 className="section-title">Our Mission &amp; Vision</h2>
            <p className="section-subtitle">
              Driven by a passion for quality and a commitment to serve Indian agriculture and industry.
            </p>
          </div>
          <div className="about-story" style={{ gap: '48px' }}>
            <div className="feature-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="feature-icon"><Target size={28} /></div>
              <h3>Our Mission</h3>
              <p style={{ color: 'var(--secondary-text)', lineHeight: '1.75' }}>
                To provide the highest quality pipes and plastic products at competitive
                prices, empowering Indian farmers and businesses with reliable solutions
                for water management, irrigation, and industrial applications. We strive
                to be the most trusted name in the pipe manufacturing industry.
              </p>
            </div>
            <div className="feature-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="feature-icon"><ThumbsUp size={28} /></div>
              <h3>Our Vision</h3>
              <p style={{ color: 'var(--secondary-text)', lineHeight: '1.75' }}>
                To become India's leading manufacturer of agricultural and industrial pipes,
                recognized for innovation, quality, and sustainable practices. We envision
                a future where every farm and business has access to world-class piping
                solutions that enhance productivity and conserve water resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="features-header">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do at Arihant Udyog.
            </p>
          </div>
          <div className="values-grid">
            {values.map((v) => (
              <div className="value-card" key={v.title}>
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="features-header">
            <h2 className="section-title">Why Work With Us</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><Factory size={28} /></div>
              <h3>In-House Manufacturing</h3>
              <p>Complete control over production quality with our own manufacturing facilities and experienced workforce.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Truck size={28} /></div>
              <h3>Reliable Delivery</h3>
              <p>On-time delivery across India with efficient logistics and distribution management.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Users size={28} /></div>
              <h3>Dedicated Support</h3>
              <p>Responsive customer service team to assist with product selection, orders, and after-sales support.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
