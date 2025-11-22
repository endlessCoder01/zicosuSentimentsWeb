# 📋 Navigation & Error Handling Architecture Guide

## 🎯 Current Folder Structure Analysis

```
src/
├── App.js (Main Router - authentication logic)
├── App.css
├── index.js
├── Assets/ (Images & media)
├── Components/ (UI Components - mixed concerns)
├── Kyc/ (Authentication pages)
├── layouts/ (Layout wrappers)
├── main/ (Page wrappers)
└── services/ (API configuration)
```

---

## 🚨 **CRITICAL ISSUES FOUND**

### **1. Error Handling Problems**
- ❌ No global error boundary
- ❌ No centralized error handling service
- ❌ Errors logged to console only (not user-friendly)
- ❌ No network error retry mechanism
- ❌ No 404/500 error pages
- ❌ API errors not consistently handled

### **2. Navigation Issues**
- ❌ No protected routes (anyone can access `/sentiments`)
- ❌ Manual auth check in each component
- ❌ No loading states during route transitions
- ❌ No breadcrumb/path tracking
- ❌ No scroll-to-top on navigation
- ❌ Sidebar and navigation not synchronized

### **3. State Management Problems**
- ❌ Auth state scattered (localStorage + React state)
- ❌ No centralized error state
- ❌ No loading state management
- ❌ Token not persisted properly

---

## ✅ **RECOMMENDED STRUCTURE**

```
src/
├── App.js
├── App.css
├── index.js
├── Assets/
├── Components/              ← UI components only
│   ├── Common/             ← Shared components
│   │   ├── ErrorBoundary.js
│   │   ├── LoadingSpinner.js
│   │   ├── NavigationBar.js
│   │   └── ProtectedRoute.js
│   ├── Pages/              ← Full page components
│   │   ├── Home.js
│   │   ├── Sentiments.js
│   │   ├── Profile.js
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── NotFound.js
│   │   └── ErrorPage.js
│   ├── Auth/               ← Auth components
│   │   ├── Login.js
│   │   ├── SignUp.js
│   │   └── SignUpTwo.js
│   └── Kyc/ → Move to Components/Auth/
├── contexts/               ← NEW: Global state
│   ├── AuthContext.js
│   └── ErrorContext.js
├── hooks/                  ← NEW: Custom hooks
│   ├── useAuth.js
│   ├── useAPI.js
│   └── useError.js
├── services/               ← API & utilities
│   ├── config.js
│   ├── api.js             ← NEW: Centralized API calls
│   └── errorHandler.js    ← NEW: Error handling
├── utils/                 ← NEW: Helper functions
│   ├── validators.js
│   ├── formatters.js
│   └── constants.js
└── layouts/
    └── AuthenticatedLayout.js
```

---

## 🔧 **IMPLEMENTATION PLAN**

### **STEP 1: Create Error Boundary Component**

```javascript
// src/components/Common/ErrorBoundary.js
import React from 'react';
import Swal from 'sweetalert2';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // Send to logging service
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <h1>Oops! Something went wrong</h1>
          <p>{this.state.error?.message}</p>
          <button onClick={this.handleReset}>Go Home</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

### **STEP 2: Create Auth Context**

```javascript
// src/contexts/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initialize auth on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('activeUser');
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        setUser(parsed.token.userDetails.user);
        setToken(parsed.token.token);
      } catch (err) {
        console.error('Failed to parse auth:', err);
        localStorage.clear();
      }
    }
    setLoading(false);
  }, []);

  const login = (userData, authToken) => {
    setUser(userData);
    setToken(authToken);
    localStorage.setItem('activeUser', JSON.stringify({ token: { userDetails: { user: userData }, token: authToken } }));
    setError(null);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
```

### **STEP 3: Create useAuth Hook**

```javascript
// src/hooks/useAuth.js
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
```

### **STEP 4: Create Protected Route Component**

```javascript
// src/components/Common/ProtectedRoute.js
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import LoadingSpinner from './LoadingSpinner';

export default function ProtectedRoute({ children }) {
  const { token, loading } = useAuth();

  if (loading) return <LoadingSpinner />;
  
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
```

### **STEP 5: Create API Service with Error Handling**

```javascript
// src/services/api.js
import { APIURL } from './config';
import Swal from 'sweetalert2';

class APIService {
  constructor(baseURL = APIURL) {
    this.baseURL = baseURL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const defaultOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    };

    try {
      const response = await fetch(url, defaultOptions);
      const data = await response.json();

      if (!response.ok) {
        throw {
          status: response.status,
          message: data.error || data.message || 'An error occurred',
          data,
        };
      }

      return { success: true, data };
    } catch (error) {
      return this.handleError(error);
    }
  }

  handleError(error) {
    let message = 'An error occurred. Please try again.';
    let errorCode = 'UNKNOWN_ERROR';

    if (error.status) {
      if (error.status === 401) {
        message = 'Unauthorized. Please log in again.';
        errorCode = 'UNAUTHORIZED';
        localStorage.clear();
        window.location.href = '/login';
      } else if (error.status === 403) {
        message = 'Access denied.';
        errorCode = 'FORBIDDEN';
      } else if (error.status === 404) {
        message = 'Resource not found.';
        errorCode = 'NOT_FOUND';
      } else if (error.status === 500) {
        message = 'Server error. Please try later.';
        errorCode = 'SERVER_ERROR';
      } else if (error.status >= 400 && error.status < 500) {
        message = error.message || 'Invalid request.';
        errorCode = 'CLIENT_ERROR';
      }
    } else if (error instanceof TypeError) {
      message = 'Network error. Check your connection.';
      errorCode = 'NETWORK_ERROR';
    }

    return { success: false, message, errorCode, error };
  }

  // Convenience methods
  get(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: 'GET' });
  }

  post(endpoint, body, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  put(endpoint, body, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(body),
    });
  }

  delete(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: 'DELETE' });
  }

  // Add auth token
  withAuth(token, options = {}) {
    return {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      },
    };
  }
}

export default new APIService();
```

### **STEP 6: Create useAPI Hook**

```javascript
// src/hooks/useAPI.js
import { useState } from 'react';
import apiService from '../services/api';
import Swal from 'sweetalert2';

export function useAPI() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const callAPI = async (endpoint, method = 'GET', body = null, token = null) => {
    setLoading(true);
    setError(null);

    try {
      const options = {
        method,
        ...(body && { body: JSON.stringify(body) }),
      };

      if (token) {
        options.headers = { Authorization: `Bearer ${token}` };
      }

      const result = await apiService.request(endpoint, options);

      if (!result.success) {
        setError(result.message);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: result.message,
        });
        return null;
      }

      return result.data;
    } catch (err) {
      const errorMsg = err.message || 'An error occurred';
      setError(errorMsg);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { callAPI, loading, error };
}
```

### **STEP 7: Create 404 & Error Pages**

```javascript
// src/components/Pages/NotFound.js
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1 style={{ fontSize: '64px', color: '#fe0d0d' }}>404</h1>
      <p style={{ fontSize: '20px', color: '#666' }}>Page not found</p>
      <button
        onClick={() => navigate('/')}
        style={{
          padding: '10px 30px',
          fontSize: '16px',
          backgroundColor: '#fe0d0d',
          color: 'white',
          border: 'none',
          borderRadius: '25px',
          cursor: 'pointer',
        }}
      >
        Go Home
      </button>
    </div>
  );
}
```

### **STEP 8: Update App.js with New Architecture**

```javascript
// src/App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ErrorBoundary from './components/Common/ErrorBoundary';
import ProtectedRoute from './components/Common/ProtectedRoute';
import Landing from './main/Landing';
import Login from './components/Auth/Login';
import AuthenticatedLanding from './main/AuthenticatedLanding';
import SentimentsPage from './components/Pages/Sentiments';
import ContactUs from './components/Pages/ContactUs';
import AboutUs from './components/Pages/AboutUs';
import AuthenticatedLayout from './layouts/authenticatedLayout';
import SignUpOne from './components/Auth/SignUp';
import SignUpTwo from './components/Auth/SignUpTwo';
import ProfilePage from './components/Pages/Profile';
import SignOut from './components/Auth/Logout';
import NotFound from './components/Pages/NotFound';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Landing />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup/one" element={<SignUpOne />} />
            <Route path="/signup/two" element={<SignUpTwo />} />

            {/* Protected Routes */}
            <Route
              element={
                <ProtectedRoute>
                  <AuthenticatedLayout />
                </ProtectedRoute>
              }
            >
              <Route path="/home" element={<AuthenticatedLanding />} />
              <Route path="/sentiments" element={<SentimentsPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/logout" element={<SignOut />} />
            </Route>

            {/* Fallback Routes */}
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
```

---

## 📊 **Navigation Flow Map**

```
Landing (/)
    ↓
├── /contact → ContactUs
├── /login → Login
├── /signup/one → SignUpOne
└── /signup/two → SignUpTwo
                    ↓
            ProtectedRoute ✅
                    ↓
        AuthenticatedLayout
                    ├─ /home → AuthenticatedLanding
                    ├─ /sentiments → SentimentsPage
                    ├─ /profile → ProfilePage
                    ├─ /about → AboutUs
                    └─ /logout → SignOut
```

---

## 🛡️ **Error Handling Strategy**

### **API Errors:**
- `401` → Redirect to login
- `403` → Show "Access Denied"
- `404` → Show "Not Found"
- `500` → Show "Server Error"
- Network → Show "Connection Error"

### **Form Errors:**
- Validation errors → Toast + Inline feedback
- Submission errors → Alert with retry option

### **Component Errors:**
- Caught by ErrorBoundary
- Fallback UI shown
- Option to return home

---

## 🚀 **Quick Implementation Checklist**

- [ ] Create `contexts/` folder with AuthContext
- [ ] Create `hooks/` folder with useAuth, useAPI
- [ ] Create `components/Common/` with ErrorBoundary, ProtectedRoute, LoadingSpinner
- [ ] Create `services/api.js` with centralized API
- [ ] Create error pages (404, 500)
- [ ] Update App.js with new routing
- [ ] Migrate all API calls to use `useAPI` hook
- [ ] Add error handling to all forms
- [ ] Test protected routes
- [ ] Add scroll-to-top on navigation

---

## 📝 **Key Benefits**

✅ **Better Error Handling:** Centralized, consistent error management
✅ **Cleaner Navigation:** Protected routes, no manual checks
✅ **Reusable Hooks:** DRY principle, less code duplication
✅ **Scalability:** Easy to add new routes/error types
✅ **User Experience:** Better loading states, error messages
✅ **Developer Experience:** Easier debugging, maintenance

