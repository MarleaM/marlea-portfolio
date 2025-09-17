import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import Links from './components/Links';
import Work from './components/Work';
import AboutMe from './components/AboutMe';
import Projects from './components/Project';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

function App() {

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.7 }}
  >
    {children}
  </motion.div>
);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <PageWrapper>
              <Hero/>
              <Links/>
              <Work/>
          </PageWrapper>
          } 
        />
        <Route path="/about-me" element={  <PageWrapper> <AboutMe />   </PageWrapper>} />
        <Route path="/project" element={  <PageWrapper> <Projects />   </PageWrapper>} />
      </Routes>
    </Router>
  )
}

export default App;
