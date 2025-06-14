import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LyricsPage from './pages/LyricsPage';
import Header from './components/Header';
import Footer from './components/Footer';
import AppLayout from './components/AppLayout';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <AppLayout>
        <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lyrics-app-reactjs" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/lyrics" element={<LyricsPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
      </AppLayout>
    </Router>
  )
}

export default App
