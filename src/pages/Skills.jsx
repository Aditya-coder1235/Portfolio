import React from "react";

const Skills = () => {
    const skills = [
        "JavaScript",
        "HTML",
        "CSS",
        "React",
        "Node.js",
        "MongoDB",
        "SQL",
        "Express.js",
        "Bootstrap",
        "TailwindCSS",
        "GitHub",
        "Material UI",
    ];

    return (
        <div className="text-center mt-20 px-4">
            <h2 className="h text-3xl font-bold">SKILLS</h2>

            <div className="ms-10 mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-around">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="skill b flex items-center justify-center gap-10"
                    >
                        <h5 className="c">{skill}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
