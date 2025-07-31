import { useState } from "react";

function SkillsComponent({ index }) {
    return (
        <div class="form-box">
            <label htmlFor="form-box">Skill #{index}</label>
            <div className="text-input">
                <label htmlFor="skill-name">Skill Name</label>
                <input id="skill-name"></input>
            </div>
        </div>
    )
}

export default function Skills() {
    const [skills, setSkills] = useState([]);

    const handleClick = () => {
    const newIndex = skills.length + 1;
    const newSkills = <SkillsComponent key={newIndex} index={newIndex} />;
    setSkills([...skills, newSkills]);
    };
    return (
        
        <div className="form" id="personal-info">
            <div>{skills}</div>
            <button class="add-section-button" id="addSkills" onClick={handleClick}>
                <label htmlFor="addSkills">Add Skill</label>
            </button>
        </div>
    )
}