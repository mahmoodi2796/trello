import "./App.css";
import Main from "./Main.js";
import Header from "./Header";
import Down from "./down.js";
import { Routes, Route, Link } from "react-router-dom";
import Maindown from "./Maindown.js";

function App() {
  return (
    <div className="App">
      {/* 
        <main>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
        </main> */}
      <Header />
      <Main />
      <Maindown />
      <Down />
    </div>
  );
}
export default App;
