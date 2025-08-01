import EducationDisplay from "./EducationDisplay.jsx";
import ExperiencesDisplay from "./ExperiencesDisplay.jsx";
import PersonalInfoDisplay from "./PersonalInfoDisplay.jsx";
import SkillsDisplay from "./SkillsDisplay.jsx";

export default function Document({ formData, setFormData }) {
    return (
        <div id="documentContainer">
            <div id="document">
                <PersonalInfoDisplay formData={formData} setFormData={setFormData}/>
                <EducationDisplay formData={formData} setFormData={setFormData} />
                <ExperiencesDisplay formData={formData} setFormData={setFormData} />
                <SkillsDisplay formData={formData} setFormData={setFormData} />
            </div>
        </div>
    );
}