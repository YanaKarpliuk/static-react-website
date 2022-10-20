import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import ReactFacts from "./pages/FactsPage";
import MainPage from "./pages/MainPage";
import About from "./pages/About";
import SharedLayout from "./components/SharedLayout";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <SharedLayout toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        }
      >
        <Route index element={<MainPage />} />
        <Route path="/facts" element={<ReactFacts />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
);
