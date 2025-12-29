import React from "react";

const About = () => {
    return (
        <div className="flex justify-center text-center items-center mt-20">
            <div>
                <h2 className="text-3xl font-bold">
                    ABOUT <span className="h">ME</span>
                </h2>
                <div className="flex mt-15">
                    <div className="img">
                        <img
                            src="/AKG2.jpg"
                            alt=""
                            className="h-60 rounded-2xl w-50"
                        />
                    </div>
                    <div className="text-start ms-10 mt-5 font-medium">
                        <p>
                            Hi Everyone, I am <span>Aditya girawale</span> from{" "}
                            <span>Ahilyanagr</span>. <br /> I have completed my
                            graduation in Bachelor of Engineering
                            <br />
                            from Rajiv Gandhi College, Karjule Harya.
                        </p>
                        <h4 className="mt-5">
                            Some of my interests apart form Coding :
                        </h4>
                        <h4 className="mt-2">
                            <i className="fa-solid fa-circle-arrow-right"></i>{" "}
                            Travelling
                        </h4>
                        <h4 className="arr">
                            <i className="fa-solid fa-circle-arrow-right"></i>{" "}
                            Reading Non Fiction
                        </h4>
                        <h4 className="arr">
                            <i className="fa-solid fa-circle-arrow-right"></i>{" "}
                            Cricket Enthusiast
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
