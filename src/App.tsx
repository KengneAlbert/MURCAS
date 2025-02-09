import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TopBar } from './components/layout/TopBar';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { NewsPage } from './pages/NewsPage';
import { NewsArticlePage } from './pages/NewsArticlePage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F8F9FA] overflow-x-hidden">
        <TopBar />
        <div className="pt-10">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/news/:id" element={<NewsArticlePage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}