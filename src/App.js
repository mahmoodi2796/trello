import "./App.css";
import Home from "./components/home/Home.js";
import About from "./components/About.js";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;
