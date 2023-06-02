import "./App.css";
import Home from "./pages/Home";
import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyWorks from "./pages/MyWorks";
import Products from "./pages/Products";
import About from "./pages/About";
import CmdK from "./components/CmdK/CmdK";

function App() {
  const [open, setOpen] = useState(false);

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  return (
    <div className="App">
      <CmdK open={open} setOpen={setOpen} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myworks" element={<MyWorks />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
