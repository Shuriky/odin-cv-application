import React, { useState } from 'react';

import userIcon from '../assets/user.png';
import skillsIcon from '../assets/skills.png';
import educationIcon from '../assets/education.png';
import experiencesIcon from '../assets/experiences.png';

import PersonalInfo from './PersonalInfo.jsx';
import Education from './Education.jsx';
import Experiences from './Experiences.jsx';
import Skills from './Skills.jsx';

function FormSection({ section }) {
    let form;

    switch (section) {
        case "personal-info":
            form = <PersonalInfo />;
            break;
        case "education":
            form = <Education />;
            break;
        case "experiences":
            form = <Experiences />;
            break;
        case "skills":
            form = <Skills />;
            break;
        default:
            form = <p>Error!</p>;
    }

    return (
        <div>
            {form}
        </div>
    )
}

export default function Form() {
    const SECTIONS = ["personal-info", "education", "experiences", "skills"];

    const [form, changeForm] = useState(SECTIONS[0]);

    return (
        <div>
            <div id="sections-buttons">
                <button className="button" onClick={() => {changeForm(SECTIONS[0])}}>
                    <img className="icon" src={userIcon}></img>
                </button>
                <button className="button" onClick={() => {changeForm(SECTIONS[1])}}>
                    <img className="icon" src={educationIcon}></img>
                </button>
                <button className="button" onClick={() => {changeForm(SECTIONS[2])}}>
                    <img className="icon" src={experiencesIcon}></img>
                </button>
                <button className="button" onClick={() => {changeForm(SECTIONS[3])}}>
                    <img className="icon" src={skillsIcon}></img>
                </button>
            </div>
            <div id="form">
                <FormSection section={form} />
            </div>
        </div>
    )
}