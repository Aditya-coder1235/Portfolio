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
                        <img
                            src="/zerodha.png"
                            alt=""
                            className="rounded-2xl"
                        />
                    </div>
                    <div className="mt-5 ">
                        <h1 className="text-2xl font-normal"> ZERODHA </h1>
                        <p className="mt-5 font-medium">
                            Zerodha Clone is a modern full-stack trading and
                            investment platform inspired by Zerodha. Built using
                            React, Bootstrap, MongoDB, and JWT Authentication.
                            Users can register, log in securely, and manage
                            their trading dashboard.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
