import React, { useState } from 'react';

import userIcon from '../assets/user.png';
import skillsIcon from '../assets/skills.png';
import educationIcon from '../assets/education.png';
import experiencesIcon from '../assets/experiences.png';

import PersonalInfo from './PersonalInfo.jsx';
import Education from './Education.jsx';
import Experiences from './Experiences.jsx';
import Skills from './Skills.jsx';

export default function Form({ formData, setFormData }) {
    const SECTIONS = ["personal-info", "education", "experiences", "skills"];
    const [activeSection, setActiveSection] = useState(SECTIONS[0]);

    let personalInfoDisplay = "none";
    let educationDisplay = "none";
    let experiencesDisplay = "none";
    let skillsDisplay = "none";

    if (activeSection === "personal-info") {
        personalInfoDisplay = "block";
    } else if (activeSection === "education") {
        educationDisplay = "block";
    } else if (activeSection === "experiences") {
        experiencesDisplay = "block";
    } else if (activeSection === "skills") {
        skillsDisplay = "block";
    }

    return (
        <div>
            <div id="sections-buttons">
                <button className="button" onClick={() => setActiveSection(SECTIONS[0])}>
                    <img className="icon" src={userIcon} alt="Personal Info" />
                </button>
                <button className="button" onClick={() => setActiveSection(SECTIONS[1])}>
                    <img className="icon" src={educationIcon} alt="Education" />
                </button>
                <button className="button" onClick={() => setActiveSection(SECTIONS[2])}>
                    <img className="icon" src={experiencesIcon} alt="Experiences" />
                </button>
                <button className="button" onClick={() => setActiveSection(SECTIONS[3])}>
                    <img className="icon" src={skillsIcon} alt="Skills" />
                </button>
            </div>

            <div id="form">
                <div style={{ display: personalInfoDisplay }}>
                    <PersonalInfo
                        formData={formData}
                        setFormData={setFormData}
                    />
                </div>
                <div style={{ display: educationDisplay }}>
                    <Education 
                        formData={formData}
                        setFormData={setFormData}
                    />
                </div>
                <div style={{ display: experiencesDisplay }}>
                    <Experiences 
                        formData={formData}
                        setFormData={setFormData}
                    />
                </div>
                <div style={{ display: skillsDisplay }}>
                    <Skills 
                        formData={formData}
                        setFormData={setFormData}
                    />
                </div>
            </div>
        </div>
    );
}
