import { useState } from "react";

function ExperiencesComponent({ index }) {
    return (
        <div class="form-box">
            <label htmlFor="form-box">Experience #{index}</label>
            <div className="text-input">
                <label htmlFor="workName">Work Name</label>
                <input id="workName"></input>
            </div>
            <div className="text-input">
                <label htmlFor="position">Position</label>
                <input id="position"></input>
            </div>
            <div className="text-input">
                <label htmlFor="date">Start/End Date</label>
                <input id="date"></input>
            </div>
            <div className="text-input">
                <label htmlFor="location">Location</label>    
                <input id="location"></input>
            </div>
        </div>
    )
}

export default function Experiences() {
    const [experiences, setExperiences] = useState([]);

    const handleClick = () => {
    const newIndex = experiences.length + 1;
    const newExperiences = <ExperiencesComponent key={newIndex} index={newIndex} />;
    setExperiences([...experiences, newExperiences]);
    };
    return (
        
        <div className="form" id="personal-info">
            <div>{experiences}</div>
            <button className="add-section-button" id="add-Experiences" onClick={handleClick}>
                <label htmlFor="add-Experiences">Add Experience</label>
            </button>
        </div>
    )
}
