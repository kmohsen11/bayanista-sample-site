import { useState, useEffect, useCallback } from 'react';

function DebugPanel() {
  const [collapsed, setCollapsed] = useState(false);
  const [sdkReady, setSdkReady] = useState(false);
  const [eventCount, setEventCount] = useState(0);
  const [sessionId, setSessionId] = useState<string>('--');
  const [lastAction, setLastAction] = useState<string>('');

  const checkSdkStatus = useCallback(() => {
    const ready = !!window.Bayanista;
    setSdkReady(ready);

    // Try to read session ID from sessionStorage
    try {
      const sessionData = sessionStorage.getItem('bayanista_session');
      if (sessionData) {
        const parsed = JSON.parse(sessionData);
        setSessionId(parsed.id?.substring(0, 12) + '...' || '--');
      }
    } catch {
      // Session storage might not have data yet
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      checkSdkStatus();
    }, 1000);
    checkSdkStatus();
    return () => clearInterval(interval);
  }, [checkSdkStatus]);

  // Count console events (intercept console.log for debug mode)
  useEffect(() => {
    const originalLog = console.log;
    console.log = (...args: unknown[]) => {
      originalLog.apply(console, args);
      const msg = String(args[0] || '');
      if (msg.includes('[Bayanista]') || msg.includes('bayanista')) {
        setEventCount(prev => prev + 1);
      }
    };
    return () => {
      console.log = originalLog;
    };
  }, []);

  const handleTrackEvent = () => {
    if (window.Bayanista) {
      window.Bayanista.track('test_event', { source: 'debug_panel' });
      setLastAction('Tracked: test_event');
      setTimeout(() => setLastAction(''), 2000);
    }
  };

  const handleIdentify = () => {
    if (window.Bayanista) {
      window.Bayanista.identify('demo-user-123', { name: 'Demo User', plan: 'pro' });
      setLastAction('Identified: demo-user-123');
      setTimeout(() => setLastAction(''), 2000);
    }
  };

  const handleReset = () => {
    if (window.Bayanista) {
      window.Bayanista.reset();
      setEventCount(0);
      setSessionId('--');
      setLastAction('Session reset');
      setTimeout(() => setLastAction(''), 2000);
    }
  };

  return (
    <div className="debug-panel">
      <div
        className="debug-panel-header"
        onClick={() => setCollapsed(!collapsed)}
      >
        <h3>
          <span className={`debug-dot ${sdkReady ? 'green' : 'red'}`}></span>
          SDK Debug
        </h3>
        <button className="debug-toggle">
          {collapsed ? '+' : '-'}
        </button>
      </div>

      {!collapsed && (
        <div className="debug-panel-body">
          <div className="debug-status">
            <span className={`debug-dot ${sdkReady ? 'green' : 'red'}`}></span>
            <span>{sdkReady ? 'SDK Initialized' : 'SDK Not Found'}</span>
          </div>

          <div className="debug-info">
            <div className="debug-info-row">
              <span className="label">Events</span>
              <span className="value">{eventCount}</span>
            </div>
            <div className="debug-info-row">
              <span className="label">Session</span>
              <span className="value">{sessionId}</span>
            </div>
            <div className="debug-info-row">
              <span className="label">Project</span>
              <span className="value">1</span>
            </div>
          </div>

          {lastAction && (
            <div style={{
              background: 'rgba(0, 184, 148, 0.15)',
              color: '#00b894',
              padding: '0.4rem 0.6rem',
              borderRadius: '4px',
              fontSize: '0.75rem',
              marginBottom: '0.5rem',
              textAlign: 'center',
              fontWeight: 600,
            }}>
              {lastAction}
            </div>
          )}

          <div className="debug-actions">
            <button
              className="debug-btn debug-btn-track"
              onClick={handleTrackEvent}
            >
              Track Custom Event
            </button>
            <button
              className="debug-btn debug-btn-identify"
              onClick={handleIdentify}
            >
              Identify User
            </button>
            <button
              className="debug-btn debug-btn-reset"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DebugPanel;
