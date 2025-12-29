import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavBar = ({ dark, isDark }) => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full px-6 py-4 flex justify-between items-center ">
            <h3 className="text-2xl font-bold">imadityagirawale</h3>

            <button
                className="md:hidden text-2xl"
                onClick={() => setOpen(!open)}
            >
                ☰
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-10 items-center">
                <Link to="/" className="a hover">
                    Home
                </Link>
                <Link to="/about" className="a hover">
                    About
                </Link>
                <Link to="/skills" className="a hover">
                    Skills
                </Link>
                <Link to="/projects" className="a hover">
                    Projects
                </Link>
                <Link to="/timeline" className="a hover">
                    Timeline
                </Link>
                <a
                    href="https://drive.google.com/drive/u/0/my-drive"
                    className="a hover"
                >
                    Resume
                </a>

                {/* Dark Mode Toggle */}
                <div onClick={dark} className="cursor-pointer text-xl">
                    {isDark ? (
                        <FontAwesomeIcon icon={faSun} />
                    ) : (
                        <FontAwesomeIcon icon={faMoon} />
                    )}
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {open && (
                <div className="md:hidden flex flex-col gap-5 mt-5 bg-gray-200 dark:bg-gray-800 p-4 rounded-xl w-full text-center">
                    <Link
                        onClick={() => setOpen(false)}
                        to="/"
                        className="a hover"
                    >
                        Home
                    </Link>
                    <Link
                        onClick={() => setOpen(false)}
                        to="/about"
                        className="a hover"
                    >
                        About
                    </Link>
                    <Link
                        onClick={() => setOpen(false)}
                        to="/skills"
                        className="a hover"
                    >
                        Skills
                    </Link>
                    <Link
                        onClick={() => setOpen(false)}
                        to="/projects"
                        className="a hover"
                    >
                        Projects
                    </Link>
                    <Link
                        onClick={() => setOpen(false)}
                        to="/timeline"
                        className="a hover"
                    >
                        Timeline
                    </Link>
                    <a
                        href="https://drive.google.com/drive/u/0/my-drive"
                        className="a hover"
                    >
                        Resume
                    </a>

                    {/* Dark Mode Toggle */}
                    <div onClick={dark} className="cursor-pointer text-xl mt-4">
                        {isDark ? (
                            <FontAwesomeIcon icon={faSun} />
                        ) : (
                            <FontAwesomeIcon icon={faMoon} />
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;

// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

// const NavBar = ({ dark, isDark }) => {
//     return (
//         <div className="flex gap-20 p-10 items-center justify-center">
//             <div className="ms-10">
//                 <h3 className="text-3xl font-bold h b">imadityagirawale</h3>
//             </div>
//             <div className="flex gap-10 ms-80 items-center justify-center">
//                 <Link to={"/"} className="a hover">
//                     Home
//                 </Link>
//                 <Link to={"/about"} className="a hover">
//                     About
//                 </Link>
//                 <Link to={"/skills"} className="a hover">
//                     Skills
//                 </Link>
//                 <Link to={"/projects"} className="a hover">
//                     Projects
//                 </Link>
//                 <Link to={"/timeline"} className="a hover">
//                     Timeline
//                 </Link>

//                 <a
//                     href="https://drive.google.com/drive/u/0/my-drive"
//                     className="a hover"
//                 >
//                     Resume
//                 </a>
//             </div>
//             <div onClick={dark} className="b">
//                 {isDark ? (
//                     <FontAwesomeIcon icon={faSun} />
//                 ) : (
//                     <FontAwesomeIcon icon={faMoon} />
//                 )}
//             </div>
//         </div>
//     );
// };

// export default NavBar;
