import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Properties from './pages/Properties';
import Developers from './pages/Developers';
import Locations from './pages/Locations';
import AboutUs from './pages/AboutUs';
import Investment from './pages/Investment';
import ContactUs from './pages/ContactUs';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="properties" element={<Properties />} />
          <Route path="developers" element={<Developers />} />
          <Route path="locations" element={<Locations />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="investment" element={<Investment />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  );
}
