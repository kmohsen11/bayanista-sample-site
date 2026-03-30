import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => { success: boolean; error?: string };
  signup: (name: string, email: string, password: string) => { success: boolean; error?: string };
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Test credentials for the demo site
const TEST_USERS: Record<string, { password: string; name: string }> = {
  'demo@bayanista.com': { password: 'Demo1234!', name: 'Demo User' },
  'test@example.com': { password: 'TestPassword123!', name: 'Test User' },
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Restore session from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('bayanista_demo_user');
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem('bayanista_demo_user');
      }
    }
  }, []);

  const login = (email: string, password: string) => {
    const testUser = TEST_USERS[email.toLowerCase()];
    if (testUser && testUser.password === password) {
      const u = { email: email.toLowerCase(), name: testUser.name };
      setUser(u);
      localStorage.setItem('bayanista_demo_user', JSON.stringify(u));
      return { success: true };
    }

    // Also accept any signup'd users stored in localStorage
    const signedUp = localStorage.getItem('bayanista_demo_signups');
    if (signedUp) {
      try {
        const users = JSON.parse(signedUp) as Record<string, { password: string; name: string }>;
        const match = users[email.toLowerCase()];
        if (match && match.password === password) {
          const u = { email: email.toLowerCase(), name: match.name };
          setUser(u);
          localStorage.setItem('bayanista_demo_user', JSON.stringify(u));
          return { success: true };
        }
      } catch {}
    }

    return { success: false, error: 'Invalid email or password' };
  };

  const signup = (name: string, email: string, password: string) => {
    const existing = localStorage.getItem('bayanista_demo_signups');
    const users = existing ? JSON.parse(existing) : {};

    if (TEST_USERS[email.toLowerCase()] || users[email.toLowerCase()]) {
      return { success: false, error: 'An account with this email already exists' };
    }

    users[email.toLowerCase()] = { password, name };
    localStorage.setItem('bayanista_demo_signups', JSON.stringify(users));

    const u = { email: email.toLowerCase(), name };
    setUser(u);
    localStorage.setItem('bayanista_demo_user', JSON.stringify(u));
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('bayanista_demo_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
