import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faSquarePhone,
    faFile,
    faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";

import {
    faGithub,
    faLinkedin,
    faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Main = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: [
                "I’m A MERN Stack Developer|",
                "I’m A Creative Thinker|",
                "I’m A Problem Solver|",
            ],
            typeSpeed: 50,
            backSpeed: 40,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <div className="flex flex-col items-center">
            <h1 className="mt-20 text-6xl font-bold">
                Hi, I am <span className="h">Aditya Girawale</span>
            </h1>

            <h1 className="mt-16 text-4xl font-medium">
                <span ref={typedRef}></span>
            </h1>

            <p class="mt-15 text-center para">
                A Full Stack Developer who loves solving problems and building
                projects. I am equipped with a
                <br />
                variety of technologies and tools to help me build the best
                possible product.
            </p>
            <div className="mt-10 flex gap-4">
                <a href="https://github.com/Aditya-coder1235" className="hover">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="mailto:adityagirawale@gmail.com" className="hover">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>

                <a href="tel:+918010201551" className="hover">
                    <FontAwesomeIcon icon={faSquarePhone} />
                </a>
                <a
                    href="https://www.linkedin.com/in/aditya-girawale-a72aab385?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    className="hover"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                    href="https://drive.google.com/drive/u/0/my-drive"
                    className="hover"
                >
                    <FontAwesomeIcon icon={faFile} />
                </a>
                <a href="#" className="hover">
                    <FontAwesomeIcon icon={faSquareFacebook} />
                </a>
                <a
                    href="https://www.google.com/maps/place/Ahilyanagar,+Maharashtra/@19.1104663,74.6602698,19876m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bdcb05d46788921:0x6677e92c1a5181b6!8m2!3d19.0948287!4d74.7479789!16zL20vMDFwNjNx?entry=ttu&g_ep=EgoyMDI1MTEwMi4wIKXMDSoASAFQAw%3D%3D"
                    className="hover"
                >
                    <FontAwesomeIcon icon={faEarthAmericas} />
                </a>
            </div>
        </div>
    );
};

export default Main;
