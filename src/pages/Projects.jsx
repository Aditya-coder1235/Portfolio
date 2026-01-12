import React from "react";

const Projects = () => {
    return (
        <div className="text-center mt-20">
            <h1 className="text-3xl font-bold h">Projects</h1>
            <div className="flex flex-wrap justify-around mt-15">
                <div className="d">
                    <div>
                        <img
                            src="/project.png"
                            alt=""
                            className="rounded-2xl"
                        />
                    </div>
                    <div className="mt-10">
                        <h1 className="text-2xl font-normal">WONDERLUST</h1>
                        <p className="mt-5 font-medium">
                            Wonderlust is a full-stack travel and stay booking
                            web app inspired by Airbnb. Built using HTML, CSS,
                            JavaScript, Node.js, Express.js, MongoDB, and
                            Passport.js. Users can explore, create, and manage
                            listings with authentication and reviews.
                        </p>
                        <br />
                        <a
                            href="https://delta-project-xdn5.onrender.com/listings"
                            className="border pt-2 pb-2 pl-6 pr-6 mt-5 rounded-2xl c"
                        >
                            Go_Live
                        </a>
                    </div>
                </div>

                <div className="d">
                    <div>
                        <img src="/Udemy.png" alt="" className="rounded-2xl" />
                    </div>
                    <div className="mt-5 ">
                        <h1 className="text-2xl font-normal">
                            {" "}
                            Education Platform{" "}
                        </h1>
                        <p className="mt-5 font-medium">
                            A full-stack video learning platform built with
                            MongoDB, Express, React, and Node.js. Features
                            include JWT-based authentication, role-based access
                            control, secure video uploads using Multer, video
                            streaming, and a responsive, modern UI.
                        </p>
                        <br />
                        <a
                            href="https://github.com/Aditya-coder1235/udemy-clone"
                            className="border pt-2 pb-2 pl-6 pr-6 mt-5 rounded-2xl c"
                        >
                            View Code
                        </a>
                    </div>
                </div>

                <div className="d">
                    <div>
                        <img
                            src="/youTube.png"
                            alt=""
                            className="rounded-2xl"
                        />
                    </div>
                    <div className="mt-5 ">
                        <h1 className="text-2xl font-normal">
                            {" "}
                            You Tube Clone{" "}
                        </h1>
                        <p className="mt-5 font-medium">
                            YouTube Clone built using the MERN stack, featuring
                            video upload and streaming, user authentication,
                            likes, comments, and role-based access control.
                            Designed with a responsive UI and secure backend
                            APIs to simulate real-world video platforms.
                        </p>
                        <br />
                        <a
                            href="https://github.com/Aditya-coder1235/mini-youtube-clone"
                            className="border pt-2 pb-2 pl-6 pr-6 mt-5 rounded-2xl c"
                        >
                            View Code
                        </a>
                    </div>
                </div>

                <div className="d">
                    <div>
                        <img
                            src="/zerodha.png"
                            alt=""
                            className="rounded-2xl"
                        />
                    </div>
                    <div className="mt-5 ">
                        <h1 className="text-2xl font-normal"> ZERODHA </h1>
                        <p className="mt-5 font-medium">
                            Zerodha ui Clone is a modern React trading and
                            investment platform inspired by Zerodha. Built using
                            React, Bootstrap, React Routing.
                        </p>
                        <br />
                        <a
                            href="https://github.com/Aditya-coder1235/Zerodha"
                            className="border pt-2 pb-2 pl-6 pr-6 mt-5 rounded-2xl c"
                        >
                            View Code
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
