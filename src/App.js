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

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      <Router>
        {/* Show navbar depending on role */}
        {/* {isAuthenticated ?
          
            <Navbar setIsAuthenticated={setIsAuthenticated}/>:<Navbar />
          } */}

        <Routes>
          {isAuthenticated ? (
            <>
              <Route element={<AuthenticatedLayout />}>
                <Route path="/home" element={<AuthenticatedLanding />} />
                <Route path="/sentiments" element={<SentimentsPage />} />
                <Route path="/about" element={<AboutUs />} />
              </Route>
              <Route path="*" element={<Navigate to="/home" replace />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Landing />} />
              {/* <Route path="/login" element={<Login />}/> */}
              <Route path="/contact" element={<ContactUs />} />
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
