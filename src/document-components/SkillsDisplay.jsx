function SkillsDisplay({ formData }) {
    const skillDisplay = formData.skills.length ? "block" : "none";

    return (
        <div className="sectionDisplay" id="skillsDisplay" style={{ display: skillDisplay }}>
            <h2>Skills</h2>
            <div className="horizontalLine"></div>
            {formData.skills.length === 0 ? (
                <p>No skill data available.</p>
            ) : (
                formData.skills.map((skill, index) => (
                    <p key={index}>
                        <strong>{skill.category}</strong> {skill.name}
                    </p>
                ))
            )}
        </div>
    );
}

export default SkillsDisplay;
