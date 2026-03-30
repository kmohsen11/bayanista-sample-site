import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  if (isAuthenticated) {
    navigate('/dashboard', { replace: true });
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    const result = login(email, password);
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.error || 'Login failed');
    }
  };

  return (
    <div className="auth-page">
      <div className="card auth-card">
        <h2>Welcome Back</h2>
        <p className="auth-subtitle">Sign in to your Bayanista account</p>

        {error && (
          <div style={{
            background: 'rgba(225, 112, 85, 0.1)',
            border: '1px solid rgba(225, 112, 85, 0.3)',
            borderRadius: 'var(--radius-sm)',
            padding: '0.75rem 1rem',
            marginBottom: '1rem',
            fontSize: '0.85rem',
            color: '#e17055',
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="login-email">Email Address</label>
            <input
              id="login-email"
              className="form-input"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="login-password">Password</label>
            <input
              id="login-password"
              className="form-input"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1.5rem',
          }}>
            <label className="form-checkbox">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>
            <Link to="#" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Sign In
          </button>
        </form>

        <div style={{
          marginTop: '1rem',
          padding: '0.75rem',
          background: 'rgba(108, 92, 231, 0.06)',
          borderRadius: 'var(--radius-sm)',
          fontSize: '0.8rem',
          color: 'var(--text-light)',
          textAlign: 'center',
        }}>
          Demo credentials: <strong>demo@bayanista.com</strong> / <strong>Demo1234!</strong>
        </div>

        <div className="auth-divider">or continue with</div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button className="btn btn-ghost" style={{
            flex: 1,
            border: '1.5px solid var(--border)',
            borderRadius: 'var(--radius-sm)',
          }}>
            Google
          </button>
          <button className="btn btn-ghost" style={{
            flex: 1,
            border: '1.5px solid var(--border)',
            borderRadius: 'var(--radius-sm)',
          }}>
            GitHub
          </button>
        </div>

        <div className="auth-footer">
          Don't have an account?{' '}
          <Link to="/signup" style={{ fontWeight: 600 }}>Sign up for free</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
