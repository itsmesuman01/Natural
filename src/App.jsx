import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="app">
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
