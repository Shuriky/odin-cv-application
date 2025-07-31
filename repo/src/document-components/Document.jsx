function PersonalInfoDisplay({ formData, setFormData }) {
    let contactDisplay = formData.personal.contactNumber ? "block" : "none";
    let emailDisplay = formData.personal.email ? "block" : "none";
    let linkDisplay = formData.personal.externalLinks ? "block" : "none";
    return (
        <div id="personalInfoDisplay">
            <h1>{formData.personal.name.toUpperCase()}</h1>
            <p>{formData.personal.address}</p>
            <div id="contactInfo">
                <p style={{ display: contactDisplay }}>{formData.personal.contactNumber}</p>
                <p style={{ display: emailDisplay }}>{formData.personal.email}</p>
                <p style={{ display: linkDisplay,  textAlign: "end" }}>{formData.personal.externalLinks}</p>
            </div>
        </div>
    );
}

function EducationDisplay({ formData, setFormData }) {
    let educationDisplay = formData.education.length ? "block" : "none";
    return (
        <div class="sectionDisplay" id="educationDisplay" style={{ display: educationDisplay }}>
            <h2>Education</h2>
            <div class="horizontalLine"></div>
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

export default function Document({ formData, setFormData }) {
    return (
        <div id="documentContainer">
            <div id="document">
                <PersonalInfoDisplay formData={formData} setFormData={setFormData}/>
                <EducationDisplay formData={formData} setFormData={setFormData} />
            </div>
        </div>
    );
}