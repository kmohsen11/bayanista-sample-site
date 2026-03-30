import { useState } from 'react';
import { Link } from 'react-router-dom';

const sampleData = [
  { id: 1, name: 'Homepage Hero CTA', type: 'Click', count: 3482, conversion: '12.4%', status: 'active', trend: '+8.2%' },
  { id: 2, name: 'Signup Form Submit', type: 'Form', count: 1247, conversion: '34.1%', status: 'active', trend: '+15.7%' },
  { id: 3, name: 'Pricing Page View', type: 'Pageview', count: 8921, conversion: '8.7%', status: 'active', trend: '+3.1%' },
  { id: 4, name: 'Add to Cart Button', type: 'Click', count: 2156, conversion: '22.3%', status: 'active', trend: '+11.4%' },
  { id: 5, name: 'Checkout Form', type: 'Form', count: 891, conversion: '67.2%', status: 'pending', trend: '-2.3%' },
  { id: 6, name: 'Settings Navigation', type: 'Navigation', count: 445, conversion: '5.1%', status: 'inactive', trend: '-0.8%' },
  { id: 7, name: 'Search Bar Input', type: 'Input', count: 6723, conversion: '18.9%', status: 'active', trend: '+6.5%' },
  { id: 8, name: 'Contact Form Submit', type: 'Form', count: 312, conversion: '45.6%', status: 'active', trend: '+21.0%' },
  { id: 9, name: 'Product Image Click', type: 'Click', count: 1893, conversion: '9.8%', status: 'pending', trend: '+1.2%' },
  { id: 10, name: 'Footer Link Click', type: 'Click', count: 267, conversion: '2.1%', status: 'inactive', trend: '-4.5%' },
];

function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeSidebarItem, setActiveSidebarItem] = useState('overview');

  const filteredData = sampleData.filter(row =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div style={{ padding: '0 1.5rem 1rem', fontSize: '0.85rem', fontWeight: 700, color: 'white' }}>
          Bayanista
        </div>

        <div className="sidebar-section">Analytics</div>
        <ul className="sidebar-nav">
          <li>
            <a
              href="#"
              className={activeSidebarItem === 'overview' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); setActiveSidebarItem('overview'); }}
            >
              <span>&#9632;</span> Overview
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeSidebarItem === 'events' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); setActiveSidebarItem('events'); }}
            >
              <span>&#9673;</span> Events
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeSidebarItem === 'funnels' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); setActiveSidebarItem('funnels'); }}
            >
              <span>&#9698;</span> Funnels
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeSidebarItem === 'sessions' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); setActiveSidebarItem('sessions'); }}
            >
              <span>&#9783;</span> Sessions
            </a>
          </li>
        </ul>

        <div className="sidebar-section">Insights</div>
        <ul className="sidebar-nav">
          <li>
            <a
              href="#"
              className={activeSidebarItem === 'heatmaps' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); setActiveSidebarItem('heatmaps'); }}
            >
              <span>&#9684;</span> Heatmaps
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeSidebarItem === 'recordings' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); setActiveSidebarItem('recordings'); }}
            >
              <span>&#9654;</span> Recordings
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeSidebarItem === 'ai-insights' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); setActiveSidebarItem('ai-insights'); }}
            >
              <span>&#10024;</span> AI Insights
            </a>
          </li>
        </ul>

        <div className="sidebar-section">Settings</div>
        <ul className="sidebar-nav">
          <li>
            <a
              href="#"
              className={activeSidebarItem === 'project' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); setActiveSidebarItem('project'); }}
            >
              <span>&#9881;</span> Project
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeSidebarItem === 'team' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); setActiveSidebarItem('team'); }}
            >
              <span>&#9775;</span> Team
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeSidebarItem === 'integrations' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); setActiveSidebarItem('integrations'); }}
            >
              <span>&#8644;</span> Integrations
            </a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="dashboard-content">
        <div className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
              Project overview for the last 30 days
            </p>
          </div>
          <div className="dashboard-actions">
            <button className="btn btn-ghost btn-sm">
              Export
            </button>
            <button className="btn btn-ghost btn-sm">
              Filter
            </button>
            <div className="dropdown">
              <button
                className="btn btn-ghost btn-sm"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Settings &#9662;
              </button>
              <div className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
                <button className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                  Edit Dashboard
                </button>
                <button className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                  Manage Widgets
                </button>
                <button className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                  Download Report
                </button>
                <button className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                  Share Dashboard
                </button>
                <button
                  className="dropdown-item"
                  style={{ color: 'var(--danger)' }}
                  onClick={() => setDropdownOpen(false)}
                >
                  Reset Layout
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="card stat-card">
            <div className="stat-label">Total Events</div>
            <div className="stat-value" style={{ color: 'var(--primary)' }}>284,521</div>
            <div className="stat-change positive">+12.3% vs last month</div>
          </div>
          <div className="card stat-card">
            <div className="stat-label">Unique Users</div>
            <div className="stat-value" style={{ color: 'var(--secondary)' }}>12,847</div>
            <div className="stat-change positive">+8.7% vs last month</div>
          </div>
          <div className="card stat-card">
            <div className="stat-label">Avg. Session</div>
            <div className="stat-value" style={{ color: 'var(--accent)' }}>4m 32s</div>
            <div className="stat-change negative">-1.2% vs last month</div>
          </div>
          <div className="card stat-card">
            <div className="stat-label">Conversion Rate</div>
            <div className="stat-value" style={{ color: 'var(--success)' }}>3.42%</div>
            <div className="stat-change positive">+0.8% vs last month</div>
          </div>
        </div>

        {/* Chart Placeholder */}
        <div className="card" style={{ marginBottom: '2rem', padding: '2rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>Events Over Time</h3>
          <div style={{
            height: '200px',
            background: 'linear-gradient(180deg, rgba(108, 92, 231, 0.08) 0%, rgba(108, 92, 231, 0.02) 100%)',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-around',
            padding: '1rem',
            gap: '0.3rem',
          }}>
            {[65, 45, 72, 58, 85, 92, 78, 95, 68, 88, 76, 100, 82, 90, 70, 95, 88, 75, 98, 85, 92, 78, 110, 95].map((h, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: `${h}%`,
                  background: `linear-gradient(180deg, var(--primary) 0%, var(--primary-light) 100%)`,
                  borderRadius: '3px 3px 0 0',
                  opacity: 0.6 + (h / 300),
                  transition: 'opacity 0.2s',
                  cursor: 'pointer',
                }}
                title={`${h * 28} events`}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.opacity = '1'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.opacity = String(0.6 + (h / 300)); }}
              />
            ))}
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '0.5rem',
            fontSize: '0.7rem',
            color: 'var(--text-muted)',
          }}>
            <span>Jan 19</span>
            <span>Jan 26</span>
            <span>Feb 2</span>
            <span>Feb 9</span>
            <span>Feb 16</span>
          </div>
        </div>

        {/* Search and Data Table */}
        <div className="card" style={{ padding: '1.5rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.25rem',
          }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>Top Events</h3>
            <Link to="#" style={{ fontSize: '0.85rem', fontWeight: 600 }}>View All</Link>
          </div>

          <div className="search-bar">
            <input
              className="form-input"
              type="search"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-ghost btn-sm">
              Filter
            </button>
          </div>

          <div className="data-table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Event Name</th>
                  <th>Type</th>
                  <th>Count</th>
                  <th>Conversion</th>
                  <th>Trend</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map(row => (
                  <tr key={row.id}>
                    <td style={{ fontWeight: 600 }}>{row.name}</td>
                    <td>
                      <span style={{
                        background: 'rgba(108, 92, 231, 0.08)',
                        color: 'var(--primary)',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '12px',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                      }}>
                        {row.type}
                      </span>
                    </td>
                    <td>{row.count.toLocaleString()}</td>
                    <td>{row.conversion}</td>
                    <td>
                      <span className={`stat-change ${row.trend.startsWith('+') ? 'positive' : 'negative'}`}>
                        {row.trend}
                      </span>
                    </td>
                    <td>
                      <span className={`status-badge ${row.status}`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredData.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '2rem',
              color: 'var(--text-muted)',
              fontSize: '0.9rem',
            }}>
              No events match your search query.
            </div>
          )}
        </div>

        {/* Bottom spacer for scroll tracking */}
        <div style={{ marginTop: '3rem' }}>
          <div className="card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem' }}>
              AI Insights Summary
            </h3>
            <p style={{ color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Based on the last 30 days of data, here are the key patterns identified by
              Bayanista's AI classification engine:
            </p>
            <ul style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}>
              <li style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                padding: '0.75rem',
                background: 'rgba(0, 184, 148, 0.06)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.9rem',
                color: 'var(--text-light)',
              }}>
                <span style={{ color: 'var(--success)', fontWeight: 700 }}>+</span>
                Signup conversion is up 15.7%. The new hero CTA copy appears to be driving more
                signups from organic traffic. Consider A/B testing the CTA button color.
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                padding: '0.75rem',
                background: 'rgba(225, 112, 85, 0.06)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.9rem',
                color: 'var(--text-light)',
              }}>
                <span style={{ color: 'var(--danger)', fontWeight: 700 }}>!</span>
                Rage clicks detected on the checkout page near the payment method selector.
                Users may be confused by the dropdown behavior. Recommend UX review.
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                padding: '0.75rem',
                background: 'rgba(253, 203, 110, 0.1)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.9rem',
                color: 'var(--text-light)',
              }}>
                <span style={{ color: '#e67e22', fontWeight: 700 }}>~</span>
                Footer link engagement is declining steadily. The "About Us" and "Blog" links have
                very low click-through rates. Consider removing or repositioning these links.
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
