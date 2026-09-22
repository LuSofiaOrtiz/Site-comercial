import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about.jsx";
import Home from "./pages/home.jsx";
import Services from "./pages/services.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;