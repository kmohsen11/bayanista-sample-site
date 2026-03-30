import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './auth';
import Navbar from './components/Navbar';
import DebugPanel from './components/DebugPanel';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Product from './pages/Product';
import Contact from './pages/Contact';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
}

function AppContent() {
  useEffect(() => {
    if (window.Bayanista) {
      const isLocal = window.location.hostname === 'localhost';
      window.Bayanista.init({
        projectId: isLocal ? '1' : '2',
        apiKey: isLocal ? 'bayanista_UtxrY4kJNKCFx82FPeDLmpO4j7MrXHEyrjlJQkksQao' : 'bayanista_Lh4wMKfMUynjKb7PaIrXh0y9ifSJssHPg3mji5Ih-X8',
        apiEndpoint: isLocal ? 'http://localhost:8000' : 'https://bayanista-api-production.up.railway.app',
        debug: true,
      });
    }
    return () => {
      window.Bayanista?.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <DebugPanel />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
