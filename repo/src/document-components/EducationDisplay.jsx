export default function EducationDisplay({ formData }) {
    let educationDisplay = formData.education.length ? "block" : "none";

    return (
        <div className="sectionDisplay" id="educationDisplay" style={{ display: educationDisplay }}>
            <h2>Education</h2>
            <div className="horizontalLine"></div>
            {formData.education.length === 0 ? (
                <p>No education data available.</p>
            ) : (
                formData.education.map((educationData, index) => (
                    <div key={index} className="componentDisplay">
                        <div className="smallComponent">
                            <p><strong>{educationData.schoolName}</strong></p>
                            <p><em>{educationData.degree}</em></p>
                        </div>
                        <div className="smallComponent" style={{ textAlign: "end" }}>
                            <p><strong>{educationData.date}</strong></p>
                            <p><em>{educationData.location}</em></p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}