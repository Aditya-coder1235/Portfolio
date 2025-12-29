import { useState } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Main from "./pages/Main";
import { Routes, Route } from "react-router";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Timeline from "./pages/Timeline";
import Projects from "./pages/Projects";

function App() {
    const [dark, setDark] = useState(false);

    const handleDark = () => {
        setDark(!dark);
    };

    return (
        <body
            className={dark ? "moon" : "sun"}
            // style={{
            //     backgroundColor: dark ? "black" : "white",
            //     color: dark ? "white" : "black",
            // }}
        >
            <NavBar dark={handleDark} isDark={dark} />

            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/skills" element={<Skills />}></Route>
                <Route path="/timeline" element={<Timeline />}></Route>
                <Route path="/projects" element={<Projects />}></Route>
            </Routes>
            <Footer />
        </body>
    );
}

export default App;
