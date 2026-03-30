import { Link } from 'react-router-dom';

declare global {
  interface Window {
    Bayanista?: { experiment: (flagKey: string) => string; [k: string]: any };
  }
}

function Home() {
  // === EXPERIMENT 1: Hero CTA Text ===
  // Control: "Get Started Free" | Test: "Try It Now — Free"
  const heroCta = window.Bayanista?.experiment('hero-cta-text') || 'control';
  const heroButtonText = heroCta === 'test' ? 'Try It Now — Free' : 'Get Started Free';

  // === EXPERIMENT 2: Pro Price ===
  // Control: $49/mo | Test: $39/mo with "Limited launch price"
  const proPricing = window.Bayanista?.experiment('pro-price-test') || 'control';
  const proPrice = proPricing === 'test' ? '$39' : '$49';
  const proPriceSubtext = proPricing === 'test' ? 'Limited launch price' : 'For growing teams';

  // === EXPERIMENT 3: Bottom CTA Text ===
  // Control: "Start Free Trial" | Test: "Start in 60 Seconds"
  const bottomCta = window.Bayanista?.experiment('bottom-cta-text') || 'control';
  const bottomButtonText = bottomCta === 'test' ? 'Start in 60 Seconds' : 'Start Free Trial';
  const bottomSubtext = bottomCta === 'test'
    ? 'No credit card. No setup. Just paste one line of code.'
    : 'Join 2,500+ companies using Bayanista to make better product decisions.';

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <h1>Understand Your Users<br />Without Guessing</h1>
        <p>
          Bayanista auto-captures every user interaction and transforms raw data
          into meaningful insights. Zero configuration, instant intelligence.
        </p>
        <div className="hero-buttons">
          <Link to="/signup" className="btn btn-primary btn-lg">{heroButtonText}</Link>
          <Link to="/product" className="btn btn-outline btn-lg">Learn More</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="section" style={{ background: 'white' }}>
        <div className="section-header">
          <h2>Everything You Need</h2>
          <p>
            From automatic event capture to AI-powered classification,
            Bayanista gives you the complete picture of user behavior.
          </p>
        </div>
        <div className="features-grid">
          <div className="card feature-card card-clickable">
            <div
              className="feature-icon"
              style={{ background: 'linear-gradient(135deg, #6c5ce7, #a29bfe)' }}
            >
              <span style={{ color: 'white' }}>&#9889;</span>
            </div>
            <h3>Auto-Capture Everything</h3>
            <p>
              Clicks, scrolls, form submissions, navigation, errors -- all captured
              automatically with zero manual instrumentation. Install once, track forever.
            </p>
          </div>
          <div className="card feature-card card-clickable">
            <div
              className="feature-icon"
              style={{ background: 'linear-gradient(135deg, #00cec9, #81ecec)' }}
            >
              <span style={{ color: 'white' }}>&#129504;</span>
            </div>
            <h3>AI Classification</h3>
            <p>
              Raw events are transformed into semantic actions like "User clicked Add to Cart"
              or "User submitted signup form." No manual tagging required.
            </p>
          </div>
          <div className="card feature-card card-clickable">
            <div
              className="feature-icon"
              style={{ background: 'linear-gradient(135deg, #fd79a8, #fab1a0)' }}
            >
              <span style={{ color: 'white' }}>&#128202;</span>
            </div>
            <h3>Real-Time Analytics</h3>
            <p>
              See what your users are doing right now. Funnels, heatmaps, and session
              replays give you the full picture of the user journey.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <div>
            <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--primary)', letterSpacing: '-2px' }}>10M+</div>
            <div style={{ color: 'var(--text-light)', fontSize: '0.9rem', fontWeight: 600 }}>Events Captured Daily</div>
          </div>
          <div>
            <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--primary)', letterSpacing: '-2px' }}>99.9%</div>
            <div style={{ color: 'var(--text-light)', fontSize: '0.9rem', fontWeight: 600 }}>Uptime Guarantee</div>
          </div>
          <div>
            <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--primary)', letterSpacing: '-2px' }}>2,500+</div>
            <div style={{ color: 'var(--text-light)', fontSize: '0.9rem', fontWeight: 600 }}>Companies Trust Us</div>
          </div>
          <div>
            <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--primary)', letterSpacing: '-2px' }}>&lt;1ms</div>
            <div style={{ color: 'var(--text-light)', fontSize: '0.9rem', fontWeight: 600 }}>SDK Load Time</div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section" style={{ background: 'white' }}>
        <div className="section-header">
          <h2>Simple, Transparent Pricing</h2>
          <p>
            Start for free. Scale as you grow. No hidden fees, no surprises.
          </p>
        </div>
        <div className="pricing-grid">
          <div className="card pricing-card">
            <h3>Free</h3>
            <p style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>For side projects</p>
            <div className="pricing-price">$0<span>/mo</span></div>
            <ul className="pricing-features">
              <li>1,000 events/month</li>
              <li>1 project</li>
              <li>7-day data retention</li>
              <li>Basic analytics</li>
              <li>Community support</li>
            </ul>
            <button className="btn btn-outline" style={{ width: '100%' }}>Choose Plan</button>
          </div>
          <div className="card pricing-card featured">
            <div className="pricing-badge">Most Popular</div>
            <h3>Pro</h3>
            <p style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>{proPriceSubtext}</p>
            <div className="pricing-price">{proPrice}<span>/mo</span></div>
            <ul className="pricing-features">
              <li>100,000 events/month</li>
              <li>10 projects</li>
              <li>90-day data retention</li>
              <li>Advanced analytics</li>
              <li>AI classification</li>
              <li>Priority support</li>
            </ul>
            <button className="btn btn-primary" style={{ width: '100%' }}>Choose Plan</button>
          </div>
          <div className="card pricing-card">
            <h3>Enterprise</h3>
            <p style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>For large organizations</p>
            <div className="pricing-price">Custom</div>
            <ul className="pricing-features">
              <li>Unlimited events</li>
              <li>Unlimited projects</li>
              <li>Unlimited retention</li>
              <li>Custom AI models</li>
              <li>SSO & SAML</li>
              <li>Dedicated support</li>
              <li>SLA guarantee</li>
            </ul>
            <button className="btn btn-outline" style={{ width: '100%' }}>Contact Sales</button>
          </div>
        </div>
      </section>

      {/* Copyable Text Section */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="section-header">
          <h2>Quick Install</h2>
          <p>Add Bayanista to your site with a single line of code. Copy the snippet below.</p>
        </div>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div className="copyable-text">
            {'<script src="https://cdn.bayanista.ai/sdk.js" data-project="YOUR_PROJECT_ID"></script>'}
          </div>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            Select the text above to copy it. That is all you need to start capturing events.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section" style={{ background: 'white' }}>
        <div className="section-header">
          <h2>Loved by Product Teams</h2>
          <p>
            See what teams around the world say about using Bayanista
            to understand their users.
          </p>
        </div>
        <div className="testimonials-grid">
          <div className="card testimonial-card">
            <p className="testimonial-text">
              "Bayanista replaced three different analytics tools for us. The auto-capture
              is incredible -- we went from instrumenting every button click manually to
              having everything tracked automatically. Our product team saves hours every week."
            </p>
            <div className="testimonial-author">
              <div
                className="testimonial-avatar"
                style={{ background: 'linear-gradient(135deg, #6c5ce7, #a29bfe)' }}
              >
                SK
              </div>
              <div className="testimonial-info">
                <h4>Sarah Kim</h4>
                <p>VP of Product, TechFlow</p>
              </div>
            </div>
          </div>
          <div className="card testimonial-card">
            <p className="testimonial-text">
              "The AI classification feature is a game-changer. Instead of looking at raw
              click data, we see semantic events like 'User explored pricing' or 'User
              abandoned checkout.' It completely changed how we think about user behavior."
            </p>
            <div className="testimonial-author">
              <div
                className="testimonial-avatar"
                style={{ background: 'linear-gradient(135deg, #00cec9, #81ecec)' }}
              >
                MR
              </div>
              <div className="testimonial-info">
                <h4>Marcus Rodriguez</h4>
                <p>Head of Analytics, ScaleUp</p>
              </div>
            </div>
          </div>
          <div className="card testimonial-card">
            <p className="testimonial-text">
              "We deployed Bayanista on our e-commerce platform and within a day we could
              see exactly where users were dropping off. The rage click detection alone
              helped us fix three critical UX issues we did not even know existed."
            </p>
            <div className="testimonial-author">
              <div
                className="testimonial-avatar"
                style={{ background: 'linear-gradient(135deg, #fd79a8, #fab1a0)' }}
              >
                AL
              </div>
              <div className="testimonial-info">
                <h4>Amira Leigh</h4>
                <p>CTO, ShopVerse</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center',
      }}>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 900, marginBottom: '0.75rem' }}>
          Ready to Understand Your Users?
        </h2>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '500px', margin: '0 auto 2rem' }}>
          {bottomSubtext}
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link to="/signup" className="btn btn-lg" style={{ background: 'white', color: 'var(--primary)', fontWeight: 700 }}>
            {bottomButtonText}
          </Link>
          <Link to="/contact" className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white' }}>
            Talk to Sales
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">Bayanista</div>
            <p className="footer-desc">
              Zero-config semantic auto-capture analytics. Install once,
              understand everything about how users interact with your product.
            </p>
          </div>
          <div>
            <h4>Product</h4>
            <ul>
              <li><Link to="/product">Features</Link></li>
              <li><Link to="/">Pricing</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><a href="https://docs.bayanista.ai" target="_blank" rel="noopener noreferrer">Documentation</a></li>
              <li><a href="https://github.com/bayanista" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="#">Press Kit</a></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">GDPR</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2026 Bayanista. All rights reserved. Built with care for the privacy-conscious web.
        </div>
      </footer>
    </>
  );
}

export default Home;
