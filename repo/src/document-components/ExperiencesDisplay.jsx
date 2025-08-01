export default function ExperiencesDisplay({ formData }) {
    let experienceDisplay = formData.experiences.length ? "block" : "none";

    return (
        <div className="sectionDisplay" id="experiencesDisplay" style={{ display: experienceDisplay }}>
            <h2>Experience</h2>
            <div className="horizontalLine"></div>
            {formData.experiences.length === 0 ? (
                <p>No experience data available.</p>
            ) : (
                formData.experiences.map((experienceData, index) => (
                    <div key={index}>
                        <div className="componentDisplay">
                            <div className="smallComponent">
                                <p><strong>{experienceData.workName}</strong></p>
                                <p><em>{experienceData.position}</em></p>
                            </div>
                            <div className="smallComponent" style={{ textAlign: "end" }}>
                                <p><strong>{experienceData.date}</strong></p>
                                <p><em>{experienceData.location}</em></p>
                            </div>
                        </div>
                        <div>
                            <ul className="descriptionDisplay">
                                {experienceData.descriptions
                                    .split('\n')
                                    .filter(line => line.trim() !== '')
                                    .map((line, i) => (
                                        <li key={i}>{line.replace(/^•\s*/, '')}</li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}