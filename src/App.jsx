import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import Links from './components/Links';
import Work from './components/Work';
function App() {

  return (
    <div>
      <Hero/>
      <Links/>
      <Work/>
    </div>
  )
}

export default App
