import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavBar = ({ dark, isDark }) => {
    return (
        <div className="flex gap-20 p-10 items-center justify-center">
            <div className="ms-10">
                <h3 className="text-3xl font-bold h b">imadityagirawale</h3>
            </div>
            <div className="flex gap-10 ms-80 items-center justify-center">
                <Link to={"/"} className="a hover">
                    Home
                </Link>
                <Link to={"/about"} className="a hover">
                    About
                </Link>
                <Link to={"/skills"} className="a hover">
                    Skills
                </Link>
                <Link to={"/projects"} className="a hover">
                    Projects
                </Link>
                <Link to={"/timeline"} className="a hover">
                    Timeline
                </Link>

                <a
                    href="https://drive.google.com/drive/u/0/my-drive"
                    className="a hover"
                >
                    Resume
                </a>
            </div>
            <div onClick={dark} className="b">
                {isDark ? (
                    <FontAwesomeIcon icon={faSun} />
                ) : (
                    <FontAwesomeIcon icon={faMoon} />
                )}
            </div>
        </div>
    );
};

export default NavBar;
