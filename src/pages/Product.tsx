import { useState } from 'react';
import { Link } from 'react-router-dom';

const relatedProducts = [
  {
    id: 1,
    name: 'Heatmap Pro',
    price: '$29/mo',
    gradient: 'linear-gradient(135deg, #e17055, #fab1a0)',
    icon: '\u2600',
    description: 'Visual click heatmaps for every page',
  },
  {
    id: 2,
    name: 'Session Replay',
    price: '$39/mo',
    gradient: 'linear-gradient(135deg, #00cec9, #81ecec)',
    icon: '\u25B6',
    description: 'Watch real user sessions frame by frame',
  },
  {
    id: 3,
    name: 'Funnel Analyzer',
    price: '$24/mo',
    gradient: 'linear-gradient(135deg, #fdcb6e, #f39c12)',
    icon: '\u25BD',
    description: 'Identify drop-off points in user flows',
  },
];

function Product() {
  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState<'overview' | 'features' | 'docs'>('overview');

  const handleAddToCart = () => {
    alert(`Added ${quantity} license(s) to cart!`);
    if (window.Bayanista) {
      window.Bayanista.track('add_to_cart', { product: 'Bayanista Pro', quantity });
    }
  };

  return (
    <>
      <div className="product-page">
        <div className="product-layout">
          {/* Product Image */}
          <div
            className="product-image"
            style={{ background: 'linear-gradient(135deg, #6c5ce7, #a29bfe)' }}
          >
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '5rem', marginBottom: '0.5rem' }}>&#9670;</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '2px' }}>BAYANISTA</div>
              <div style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '0.25rem' }}>PRO EDITION</div>
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info">
            <div style={{
              display: 'inline-block',
              background: 'rgba(108, 92, 231, 0.1)',
              color: 'var(--primary)',
              padding: '0.25rem 0.75rem',
              borderRadius: '20px',
              fontSize: '0.78rem',
              fontWeight: 700,
              marginBottom: '0.75rem',
            }}>
              Analytics Platform
            </div>

            <h1>Bayanista Pro</h1>
            <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              By Bayanista Team
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span style={{ color: '#f39c12', letterSpacing: '2px' }}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <span style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>4.9 (2,847 reviews)</span>
            </div>

            <div className="product-price">
              $49<span className="original">$99</span>
            </div>

            <p className="product-description">
              The complete analytics solution for modern product teams. Bayanista Pro includes
              auto-capture, AI-powered event classification, real-time dashboards, session replay,
              heatmaps, and funnel analysis. Everything you need to understand your users and
              make data-driven product decisions.
            </p>
            <p className="product-description">
              With zero-config setup, Bayanista installs in under 60 seconds. Just add one line
              of code and start receiving classified, actionable events immediately. No manual
              instrumentation, no event taxonomies to maintain, no data engineering required.
            </p>

            <div className="product-meta">
              <div>
                <strong>License</strong>
                <span>Per project/month</span>
              </div>
              <div>
                <strong>Events</strong>
                <span>100K/month</span>
              </div>
              <div>
                <strong>Retention</strong>
                <span>90 days</span>
              </div>
              <div>
                <strong>Support</strong>
                <span>Priority</span>
              </div>
            </div>

            <div className="quantity-selector">
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-light)' }}>Licenses:</span>
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>

            <div className="product-actions">
              <button className="btn btn-primary btn-lg" onClick={handleAddToCart}>
                Add to Cart - ${49 * quantity}
              </button>
              <button className="btn btn-outline btn-lg">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem 3rem' }}>
        <div style={{
          display: 'flex',
          gap: '0',
          borderBottom: '2px solid var(--border)',
          marginBottom: '2rem',
        }}>
          {(['overview', 'features', 'docs'] as const).map(tab => (
            <button
              key={tab}
              className="btn btn-ghost"
              style={{
                borderBottom: selectedTab === tab ? '2px solid var(--primary)' : '2px solid transparent',
                borderRadius: 0,
                marginBottom: '-2px',
                color: selectedTab === tab ? 'var(--primary)' : 'var(--text-light)',
                fontWeight: selectedTab === tab ? 700 : 500,
                textTransform: 'capitalize',
              }}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {selectedTab === 'overview' && (
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>Product Overview</h2>
            <p style={{ color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Bayanista Pro is the next generation of product analytics. Traditional analytics tools
              require you to manually define every event, create tracking plans, and coordinate
              between product, engineering, and data teams. This process is slow, error-prone, and
              means you are always missing data you did not think to track.
            </p>
            <p style={{ color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Bayanista takes a fundamentally different approach. Our SDK auto-captures every user
              interaction -- clicks, form submissions, page views, scroll depth, copy/paste actions,
              and more. Then our AI classification engine automatically labels these raw events with
              semantic meaning, turning "click on element at (432, 891)" into "User clicked Add to
              Cart on Product Page."
            </p>
            <p style={{ color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              This means you never miss an important event. You never need to file a ticket asking
              engineering to add tracking. And you always have the data you need to make better
              product decisions.
            </p>

            <div className="copyable-text">
              Quick Start: Install Bayanista Pro in your project by adding a single script tag to
              your HTML. The SDK will automatically begin capturing events and sending them to your
              Bayanista dashboard. No configuration required.
            </div>
          </div>
        )}

        {selectedTab === 'features' && (
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Key Features</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { title: 'Auto-Capture', desc: 'Every click, scroll, form interaction, and navigation event is captured automatically.' },
                { title: 'AI Classification', desc: 'Raw events are classified into semantic actions using machine learning.' },
                { title: 'Rage Click Detection', desc: 'Identify frustrated users who click repeatedly on unresponsive elements.' },
                { title: 'Dead Click Detection', desc: 'Find elements users expect to be interactive but are not.' },
                { title: 'Scroll Depth Tracking', desc: 'Know exactly how far users scroll on every page.' },
                { title: 'Form Analytics', desc: 'Track form starts, field interactions, and submission rates.' },
                { title: 'Network Monitoring', desc: 'Capture API calls and correlate them with user actions.' },
                { title: 'Error Tracking', desc: 'JavaScript errors and unhandled rejections are captured in context.' },
              ].map((feature, i) => (
                <div key={i} className="card" style={{ padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.4rem' }}>{feature.title}</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', lineHeight: 1.6 }}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === 'docs' && (
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>Documentation</h2>
            <p style={{ color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Get started with Bayanista Pro in minutes. Here is how to install and configure the SDK
              for your project.
            </p>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>Installation</h3>
            <div className="copyable-text" style={{ fontFamily: "'SF Mono', 'Fira Code', monospace", fontSize: '0.85rem' }}>
              {'<script src="https://cdn.bayanista.ai/sdk.js" data-project="YOUR_PROJECT_ID"></script>'}
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '1.5rem 0 0.75rem' }}>NPM Installation</h3>
            <div className="copyable-text" style={{ fontFamily: "'SF Mono', 'Fira Code', monospace", fontSize: '0.85rem' }}>
              npm install @bayanista/sdk
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '1.5rem 0 0.75rem' }}>Basic Configuration</h3>
            <div className="copyable-text" style={{ fontFamily: "'SF Mono', 'Fira Code', monospace", fontSize: '0.85rem' }}>
{`import { Bayanista } from '@bayanista/sdk';

Bayanista.init({
  projectId: 'YOUR_PROJECT_ID',
  apiEndpoint: 'https://api.bayanista.ai',
  debug: false,
});

// Track custom events
Bayanista.track('purchase', { amount: 99.99 });

// Identify users
Bayanista.identify('user-123', { plan: 'pro' });`}
            </div>
          </div>
        )}
      </div>

      {/* Related Products */}
      <div className="related-products">
        <h2>Related Products</h2>
        <div className="related-grid">
          {relatedProducts.map(product => (
            <Link to="/product" key={product.id} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="card related-card card-clickable">
                <div className="related-card-image" style={{ background: product.gradient }}>
                  {product.icon}
                </div>
                <h3>{product.name}</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                  {product.description}
                </p>
                <div className="related-price">{product.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Long content for scroll depth */}
      <section className="section" style={{ background: 'white' }}>
        <div className="section-header">
          <h2>What Our Customers Say</h2>
          <p>Join thousands of teams that trust Bayanista for their product analytics needs.</p>
        </div>
        <div className="testimonials-grid">
          <div className="card testimonial-card">
            <p className="testimonial-text">
              "Switching to Bayanista Pro saved our team 20+ hours per month that we used to spend
              maintaining our tracking plan. The auto-capture and AI classification handles everything."
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar" style={{ background: 'linear-gradient(135deg, #6c5ce7, #a29bfe)' }}>JW</div>
              <div className="testimonial-info">
                <h4>James Wilson</h4>
                <p>Engineering Lead, DataStack</p>
              </div>
            </div>
          </div>
          <div className="card testimonial-card">
            <p className="testimonial-text">
              "The rage click detection feature alone was worth the price. We discovered three
              major UX issues in our onboarding flow within the first week of using Bayanista."
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar" style={{ background: 'linear-gradient(135deg, #00cec9, #81ecec)' }}>LP</div>
              <div className="testimonial-info">
                <h4>Lisa Park</h4>
                <p>Product Designer, FlowUI</p>
              </div>
            </div>
          </div>
          <div className="card testimonial-card">
            <p className="testimonial-text">
              "We evaluated Mixpanel, Amplitude, and Heap before choosing Bayanista. The zero-config
              approach and semantic classification put it in a completely different category."
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar" style={{ background: 'linear-gradient(135deg, #fd79a8, #fab1a0)' }}>RK</div>
              <div className="testimonial-info">
                <h4>Raj Kumar</h4>
                <p>VP Analytics, GrowthPulse</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
