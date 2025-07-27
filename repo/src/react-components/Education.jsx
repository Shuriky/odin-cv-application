import { useState } from "react";

function EducationComponent({ index }) {
    return (
        <div class="form-box">
            <label htmlFor="form-box">Education #{index}</label>
            <div className="text-input">
                <label htmlFor="name">School Name</label>
                <input id="name"></input>
            </div>
            <div className="text-input">
                <label htmlFor="address">Degree</label>
                <input id="address"></input>
            </div>
            <div className="text-input">
                <label htmlFor="contact-number">Start/End Date</label>
                <input id="contact-number"></input>
            </div>
            <div className="text-input">
                <label htmlFor="email">Location</label>    
                <input id="email"></input>
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