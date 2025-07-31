function PersonalInfoDisplay({ formData, setFormData }) {
    let contactDisplay = formData.personal.contactNumber ? "block" : "none";
    let emailDisplay = formData.personal.email ? "block" : "none";
    let linkDisplay = formData.personal.externalLinks ? "block" : "none";
    console.log(linkDisplay);
    return (
        <div id="personalInfoDisplay">
            <h1>{formData.personal.name.toUpperCase()}</h1>
            <p>{formData.personal.address}</p>
            <div id="contactInfo">
                <p style={{ display: contactDisplay }}>{formData.personal.contactNumber}</p>
                <p style={{ display: emailDisplay }}>{formData.personal.email}</p>
                <p style={{ display: linkDisplay }}>{formData.personal.externalLinks}</p>
            </div>
        </div>
    )
}

export default function Document({ formData, setFormData }) {
    return (
        <div id="document">
            <PersonalInfoDisplay formData={formData} setFormData={setFormData}/>
        </div>
    );
}