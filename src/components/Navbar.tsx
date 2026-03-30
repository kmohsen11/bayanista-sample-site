import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const isActive = (path: string) => location.pathname === path ? 'active' : '';

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <span className="brand-dot"></span>
        Bayanista Demo
      </Link>
      <ul className="navbar-links">
        <li><Link to="/" className={isActive('/')}>Home</Link></li>
        <li><Link to="/product" className={isActive('/product')}>Product</Link></li>
        <li><Link to="/dashboard" className={isActive('/dashboard')}>Dashboard</Link></li>
        <li><Link to="/contact" className={isActive('/contact')}>Contact</Link></li>
        {isAuthenticated ? (
          <>
            <li>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>
                {user?.name}
              </span>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="btn btn-ghost btn-sm"
                style={{ fontSize: '0.85rem' }}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/login" className={isActive('/login')}>Login</Link></li>
            <li><Link to="/signup" className={`btn btn-primary btn-sm ${isActive('/signup')}`}>Sign Up</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
