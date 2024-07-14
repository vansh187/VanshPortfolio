import "../src/styles/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import Sidebar from "./components/Sidebar";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";

function App() {
    return (
        <Router>
            <div className="App">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/Projects" element={<Projects />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Blogs" element={<Blogs />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
