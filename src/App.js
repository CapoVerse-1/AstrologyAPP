import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import theme from './theme/theme';
import store from './store/store';

// Layout Components
import Layout from './components/layout/Layout';

// Auth Pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';

// Main Pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Astrologers from './pages/Astrologers';
import AstrologerDetail from './pages/AstrologerDetail';
import Chat from './pages/Chat';
import Call from './pages/Call';
import Horoscope from './pages/Horoscope';
import Panchang from './pages/Panchang';
import Transactions from './pages/Transactions';

// Protected Route Component
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="astrologers" element={<Astrologers />} />
              <Route path="astrologers/:id" element={<AstrologerDetail />} />
              <Route path="horoscope" element={<Horoscope />} />
              <Route path="panchang" element={<Panchang />} />

              {/* Protected Routes */}
              <Route element={<ProtectedRoute />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="profile" element={<Profile />} />
                <Route path="chat/:id?" element={<Chat />} />
                <Route path="call/:id?" element={<Call />} />
                <Route path="transactions" element={<Transactions />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App; 