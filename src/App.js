import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ErrorBoundary from "./Components/Common/ErrorBoundary";
import ProtectedRoute from "./Components/Common/ProtectedRoute";

// Public pages
import Landing from "./main/Landing";
import Login from "./Kyc/Login";
import SignUpOne from "./Kyc/SignUp";
import SignUpTwo from "./Kyc/SignUpTwo";
import ContactUs from "./Components/ContactUs";

// Protected pages
import AuthenticatedLanding from "./main/AuthenticatedLanding";
import SentimentsPage from "./Components/Sentiments";
import AboutUs from "./Components/AboutUs";
import ProfilePage from "./Components/Profile";
import SignOut from "./Kyc/Logout";

// Layouts
import AuthenticatedLayout from "./layouts/authenticatedLayout";

// Error pages
import NotFound from "./Components/Pages/NotFound";

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
