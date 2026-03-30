import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!agreeTerms) {
      setError('Please agree to the terms and conditions');
      return;
    }

    const result = signup(name, email, password);
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.error || 'Signup failed');
    }
  };

  return (
    <div className="auth-page">
      <div className="card auth-card" style={{ maxWidth: '480px' }}>
        <h2>Create Your Account</h2>
        <p className="auth-subtitle">Start your free 14-day trial. No credit card required.</p>

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
            <label className="form-label" htmlFor="signup-name">Full Name</label>
            <input
              id="signup-name"
              className="form-input"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="signup-email">Work Email</label>
            <input
              id="signup-email"
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
            <label className="form-label" htmlFor="signup-role">Your Role</label>
            <select
              id="signup-role"
              className="form-input"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select your role</option>
              <option value="product_manager">Product Manager</option>
              <option value="engineer">Engineer</option>
              <option value="designer">Designer</option>
              <option value="data_analyst">Data Analyst</option>
              <option value="marketing">Marketing</option>
              <option value="founder">Founder / CEO</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="signup-password">Password</label>
            <input
              id="signup-password"
              className="form-input"
              type="password"
              placeholder="At least 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              autoComplete="new-password"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="signup-confirm">Confirm Password</label>
            <input
              id="signup-confirm"
              className="form-input"
              type="password"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={8}
              autoComplete="new-password"
            />
          </div>

          <div className="form-group">
            <label className="form-checkbox">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />
              I agree to the{' '}
              <a href="#" style={{ fontWeight: 600 }}>Terms of Service</a>{' '}
              and{' '}
              <a href="#" style={{ fontWeight: 600 }}>Privacy Policy</a>
            </label>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Create Account
          </button>
        </form>

        <div className="auth-divider">or sign up with</div>

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
          Already have an account?{' '}
          <Link to="/login" style={{ fontWeight: 600 }}>Sign in</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
