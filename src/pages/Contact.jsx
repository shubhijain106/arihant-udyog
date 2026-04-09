import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, User } from 'lucide-react'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            Get in touch for product enquiries, bulk orders, or custom requirements.
            We would love to hear from you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-cards">
              <div className="contact-card">
                <div className="contact-card-icon">
                  <User size={24} />
                </div>
                <div>
                  <h3>Proprietor</h3>
                  <p>Sanchit Jain</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3>Our Location</h3>
                  <p>Dukheri Road, Ambala Cantt 133001</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon">
                  <Phone size={24} />
                </div>
                <div>
                  <h3>Phone</h3>
                  <p><a href="tel:+918199999270">+91 81999 99270</a></p>
                  <p><a href="tel:+919416094777">+91 94160 94777</a></p>
                  <p><a href="tel:+13528707123">+1 352 870 7123</a></p>
                  <p><a href="tel:+13527455534">+1 352 745 5534</a></p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <h3>Email</h3>
                  <p><a href="mailto:arihant.udyog.pipes@gmail.com">arihant.udyog.pipes@gmail.com</a></p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon">
                  <Clock size={24} />
                </div>
                <div>
                  <h3>Business Hours</h3>
                  <p>Monday - Sunday: 9:00 AM - 6:00 PM</p>
                  <p>Open 7 days a week</p>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{
                    width: '72px', height: '72px', borderRadius: '50%',
                    background: 'var(--accent-fill)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 20px', color: 'var(--green-700)'
                  }}>
                    <Send size={32} />
                  </div>
                  <h2 style={{ color: 'var(--green-900)', marginBottom: '12px' }}>Thank You!</h2>
                  <p style={{ color: 'var(--secondary-text)' }}>
                    Your enquiry has been received. We will get back to you shortly.
                  </p>
                  <button
                    className="btn btn-primary"
                    style={{ marginTop: '24px' }}
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <>
                  <h2>Send Us an Enquiry</h2>
                  <p>Fill in the details and we will get back to you within 24 hours.</p>
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" placeholder="Your name" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" placeholder="Your phone number" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" id="email" placeholder="your@email.com" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="product">Product of Interest</label>
                      <select id="product" required>
                        <option value="">Select a product</option>
                        <option value="lldpe">LLDPE Agricultural Pipe</option>
                        <option value="pvc-garden">PVC Garden Pipe</option>
                        <option value="braided">Braided Hose</option>
                        <option value="suction">Suction Hose</option>
                        <option value="layflat">Lay Flat Hose</option>
                        <option value="other">Other Plastic Products</option>
                        <option value="custom">Custom Requirement</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        placeholder="Tell us about your requirements - quantity, size, specifications, etc."
                        rows="5"
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                      Submit Enquiry <Send size={18} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
