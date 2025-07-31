import { useState } from "react";

function EducationComponent({ index }) {
    return (
        <div class="form-box">
            <label htmlFor="form-box">Education #{index}</label>
            <div className="text-input">
                <label htmlFor="schoolName">School Name</label>
                <input id="schoolName"></input>
            </div>
            <div className="text-input">
                <label htmlFor="degree">Degree</label>
                <input id="degree"></input>
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

export default function Education() {
    const [educations, setEducations] = useState([]);

    const handleClick = () => {
    const newIndex = educations.length + 1;
    const newEducation = <EducationComponent key={newIndex} index={newIndex} />;
    setEducations([...educations, newEducation]);
    };
    return (
        
        <div className="form" id="personal-info">
            <div>{educations}</div>
            <button class="add-section-button" id="add-education" onClick={handleClick}>
                <label htmlFor="add-education">Add Education</label>
            </button>
        </div>
    )
}