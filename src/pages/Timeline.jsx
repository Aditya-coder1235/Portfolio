import React from "react";

const Timeline = () => {
    const timelineData = [
        {
            title: "Current",
            year: "2026 - Present",
            description:
                "Working on personal growth, learning MERN stack, and building projects.",
        },
        {
            title: "BE. Computer",
            year: "2025",
            description:
                "Complete Bachelor's degree from SPPU and improving technical knowledge.",
        },

        {
            title: "12th Standard",
            year: "2021",
            description:
                "Completed 12th (Science). from SSS Developed interest in coding.",
        },
        {
            title: "10th Standard",
            year: "2019",
            description:
                "Completed 10th grade with strong interest in science and computers.",
        },
    ];

    return (
        <div className="timeline-container">
            <h2 className="timeline-heading">
                My Education <span className="h">Timeline</span>
            </h2>

            <div className="timeline">
                {timelineData.map((item, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-dot" />
                        <div className="timeline-content">
                            <h3>{item.title}</h3>
                            <span className="timeline-year">{item.year}</span>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
