import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import { useState } from 'react'

function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <Router>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
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
      </div>
    </Router>
  );
}

export default App;
