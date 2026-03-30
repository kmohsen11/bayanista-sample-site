import { useState, FormEvent } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`Message sent! We will reply to ${email} shortly.`);
    if (window.Bayanista) {
      window.Bayanista.track('contact_form_submit', { subject, department });
    }
  };

  return (
    <>
      <div className="contact-page">
        <div className="contact-layout">
          {/* Contact Info */}
          <div className="contact-info">
            <h1>Get in Touch</h1>
            <p>
              Have questions about Bayanista? Want to discuss enterprise pricing or custom
              integrations? We would love to hear from you. Our team typically responds
              within 24 hours.
            </p>

            <div className="contact-detail">
              <div className="contact-icon">\u2709</div>
              <div>
                <h3>Email Us</h3>
                <p>hello@bayanista.ai</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">\u260E</div>
              <div>
                <h3>Call Us</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">\u2302</div>
              <div>
                <h3>Visit Us</h3>
                <p>123 Analytics Avenue<br />San Francisco, CA 94105</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">\u23F0</div>
              <div>
                <h3>Office Hours</h3>
                <p>Mon - Fri: 9:00 AM - 6:00 PM PST</p>
              </div>
            </div>

            {/* Map placeholder */}
            <div style={{
              marginTop: '2rem',
              height: '200px',
              background: 'linear-gradient(135deg, #dfe6e9, #b2bec3)',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-light)',
              fontSize: '0.9rem',
              fontWeight: 600,
            }}>
              Map Placeholder
            </div>
          </div>

          {/* Contact Form */}
          <div className="card contact-form-card">
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.25rem' }}>
              Send a Message
            </h2>
            <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              Fill out the form below and we will get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Full Name</label>
                <input
                  id="contact-name"
                  className="form-input"
                  type="text"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  className="form-input"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-department">Department</label>
                <select
                  id="contact-department"
                  className="form-input"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option value="">Select a department</option>
                  <option value="sales">Sales</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing</option>
                  <option value="partnerships">Partnerships</option>
                  <option value="press">Press & Media</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  className="form-input"
                  type="text"
                  placeholder="What is this about?"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  className="form-input"
                  placeholder="Tell us more about your needs, questions, or feedback..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={6}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Section for extra scroll depth */}
      <section className="section" style={{ background: 'white' }}>
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to the most common questions about Bayanista.</p>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {[
            {
              q: 'How does the auto-capture work?',
              a: 'Bayanista\'s SDK listens for DOM events like clicks, form submissions, scroll, and navigation. It captures rich context about each interaction including the element, its semantic role, surrounding content, and user session data. All of this happens automatically with zero manual instrumentation.',
            },
            {
              q: 'Will it slow down my website?',
              a: 'No. The Bayanista SDK is under 15KB gzipped and loads asynchronously. It uses requestIdleCallback and batched event sending to minimize performance impact. Our SDK load time is under 1ms and events are processed in the background.',
            },
            {
              q: 'How does AI classification work?',
              a: 'When raw events are captured, they are sent to our classification engine which uses a combination of rule-based heuristics and machine learning to assign semantic meaning. For example, a click event on a button inside a pricing section might be classified as "User selected pricing plan." The system learns from patterns in your specific application.',
            },
            {
              q: 'Is my data secure?',
              a: 'Absolutely. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We are SOC 2 Type II certified, GDPR compliant, and offer data residency options. Sensitive data like passwords are automatically masked and never captured by the SDK.',
            },
            {
              q: 'Can I use Bayanista with my existing analytics tools?',
              a: 'Yes. Bayanista can export data to any analytics warehouse including BigQuery, Snowflake, and Redshift. We also integrate with tools like Segment, Amplitude, and Mixpanel so you can enrich your existing data with Bayanista\'s semantic events.',
            },
            {
              q: 'What happens if I exceed my event limit?',
              a: 'We will never drop your events. If you approach your limit, we will notify you and offer the option to upgrade. Events beyond your limit are still captured and stored for 7 days, giving you time to decide whether to upgrade or adjust your configuration.',
            },
          ].map((faq, i) => (
            <div key={i} className="card" style={{ marginBottom: '1rem', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text)' }}>
                {faq.q}
              </h3>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.7, fontSize: '0.9rem' }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, #00cec9 0%, #0984e3 100%)',
        color: 'white',
        textAlign: 'center',
      }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.75rem' }}>
          Still Have Questions?
        </h2>
        <p style={{ fontSize: '1.05rem', opacity: 0.9, maxWidth: '500px', margin: '0 auto 1.5rem' }}>
          Schedule a 30-minute demo call with our team. We will walk you through everything
          Bayanista can do for your product.
        </p>
        <button className="btn btn-lg" style={{
          background: 'white',
          color: '#0984e3',
          fontWeight: 700,
        }}>
          Schedule a Demo
        </button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-bottom" style={{ borderTop: 'none' }}>
          &copy; 2026 Bayanista. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Contact;
