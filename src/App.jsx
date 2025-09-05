import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import Links from './components/Links';
import Work from './components/Work';
import AboutMe from './components/AboutMe';
import Projects from './components/Project';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={
          <div>
            <Hero/>
            <Links/>
            <Work/>
          </div>
          } 
        />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
    </Router>
  )
}

export default App;
