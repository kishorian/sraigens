import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
// import Blog from './Blog';
import Contact from './Contact';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// import './App.css';  // Custom styles
import AITrends from './AITrends';
import ERPInsights from './ERPInsights';
import CompanyNews from './CompanyNews';

// Add these components to your routes in your main App component




const App = () => (
  <Router>
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog/ai-trends" element={<AITrends />} />
          <Route path="/blog/erp-insights" element={<ERPInsights />} />
          <Route path="/blog/company-news" element={<CompanyNews />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer Section */}
      <footer className="custom-footer">
        <div className="container">
          <p>Connect with us: <br />
            <a href="https://www.linkedin.com" target="_blank" className="text-white mr-2"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.twitter.com" target="_blank" className="text-white mr-2"><i className="fab fa-twitter"></i></a>
            <a href="https://www.facebook.com" target="_blank" className="text-white mr-2"><i className="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com" target="_blank" className="text-white mr-2"><i className="fab fa-instagram"></i></a>
            <a href="https://www.youtube.com" target="_blank" className="text-white mr-2"><i className="fab fa-youtube"></i></a>
            <a href="https://wa.me/yourwhatsappnumber" target="_blank" className="text-white mr-2"><i className="fab fa-whatsapp"></i></a>
          </p>
          <br />
          <p>&copy; 2025 Sraigen Innovative Technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  </Router>
);

export default App;
