import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about.jsx";
import Home from "./pages/home.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;