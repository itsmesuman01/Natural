import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Loader from "./components/Loader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [loading, setLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Scroll to Top Button visibility state
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsButtonVisible(true);
    } else {
      setIsButtonVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {showLogin && <Login setShowLogin={setShowLogin} />}
          <div className="flex flex-col min-h-screen">
            <Topbar className="h-16" setShowLogin={setShowLogin} />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
            <Footer className="h-12" />
            {isButtonVisible && (
              <button
                className="fixed bottom-7 right-3 text-yellow-500 rounded-full shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-105 animate-slideIn"
                onClick={scrollToTop}
              >
                <div className="animate-pulse">
                  <FontAwesomeIcon icon={faArrowAltCircleUp} size="2x" />
                </div>
              </button>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
