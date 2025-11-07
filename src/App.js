import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Landing from "./main/Landing";
import Login from "./Kyc/Login";
import AuthenticatedLanding from "./main/AuthenticatedLanding";
import { useState } from "react";
import SentimentsPage from "./Components/Sentiments";
import ContactUs from "./Components/ContactUs";
import AboutUs from "./Components/AboutUs";
import AuthenticatedLayout from "./layouts/authenticatedLayout";
import SignUpOne from "./Kyc/SignUp";
import SignUpTwo from "./Kyc/SignUpTwo";
import ProfilePage from "./Components/Profile";
import SignOut from "./Kyc/Logout";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
      <Router>
        <Routes>
          {isAuthenticated ? (
            <>
              <Route element={<AuthenticatedLayout />}>
                <Route path="/home" element={<AuthenticatedLanding />} />
                <Route path="/sentiments" element={<SentimentsPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/logout" element={<SignOut onLogout={handleLogout} />} />
              </Route>
              <Route path="*" element={<Navigate to="/home" replace />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Landing />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/signup/one" element={<SignUpOne />} />
              <Route path="/signup/two" element={<SignUpTwo />} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
