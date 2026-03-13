import React from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './src/pages/Home.jsx';
import NotFound from './src/pages/NotFound.jsx';

// Import Sanity Studio components
import { NextStudio } from 'sanity/next-studio';
import config from './sanity.config';

export default function App() {
  return (
    <Theme appearance="inherit" radius="large" scaling="100%">
      <Router>
        <main className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50">
          <Routes>
            {/* Route for Main Website */}
            <Route path="/" element={<Home />} />
            
            {/* Route for Sanity Admin Panel (Studio) */}
            <Route path="/studio/*" element={<NextStudio config={config} />} />
            
            {/* Route for 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <ToastContainer position="top-right" />
      </Router>
    </Theme>
  );
}
