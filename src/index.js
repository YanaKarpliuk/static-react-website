import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import "./index.css";
import ReactFacts from './pages/FactsPage';
import MainPage from './pages/MainPage';
import About from './pages/About'

function App(){
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/facts" element={<ReactFacts />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)