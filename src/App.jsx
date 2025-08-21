// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SiteLayout from './components/layout/SiteLayout';
import HomePage from './components/pages/HomePage';
import CorporateBookingPage from './components/pages/services/CorporateBookingPage';
import './index.css'; // Assuming Tailwind CSS is imported here
import ContactUs from './components/pages/ContactUs';
import Blog from './components/pages/Blog';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SiteLayout><HomePage /></SiteLayout>} />
        <Route path="/services/corporate" element={<SiteLayout><CorporateBookingPage /></SiteLayout>} />
        <Route path="/contact" element={<SiteLayout><ContactUs/></SiteLayout>} />
        <Route path="/blog" element={<SiteLayout><Blog/></SiteLayout>} />
      </Routes>
    </Router>
  );
};

export default App;
