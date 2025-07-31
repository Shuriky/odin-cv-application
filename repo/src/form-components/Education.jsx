import { useState } from "react";

function EducationComponent({ index, formData, setFormData }) {
    const handleChange = (e, index) => {
        const { id, value } = e.target;
        const field = id.split('-')[0]; // Extract field name (schoolName, degree, etc.)

        // Update the specific field of the education entry at the given index
        setFormData((prev) => ({
            ...prev,
            education: prev.education.map((education, i) =>
                i === index
                    ? { ...education, [field]: value }  // Update only the specific field
                    : education  // Keep other education entries the same
            ),
        }));
    };

    // Handle Delete Education
    const handleDelete = (index) => {
        setFormData((prev) => ({
            ...prev,
            education: prev.education.filter((_, i) => i !== index), // Remove education at index
        }));
    };


    // Ensure formData.education[index] exists to avoid undefined errors
    const education = formData.education[index] || { schoolName: "", degree: "", date: "", location: "" };

    return (
        <div className="form-box">
            <label htmlFor="form-box">Education #{index + 1}</label>
            <div className="text-input">
                <label htmlFor="schoolName">School Name</label>
                <input
                    id={`schoolName-${index}`}
                    value={education.schoolName}
                    onChange={(e) => handleChange(e, index)} // Call handleChange here
                />
            </div>
            <div className="text-input">
                <label htmlFor="degree">Degree</label>
                <input
                    id={`degree-${index}`}
                    value={education.degree}
                    onChange={(e) => handleChange(e, index)} // Call handleChange here
                />
            </div>
            <div className="text-input">
                <label htmlFor="date">Start/End Date</label>
                <input
                    id={`date-${index}`}
                    value={education.date}
                    onChange={(e) => handleChange(e, index)} // Call handleChange here
                />
            </div>
            <div className="text-input">
                <label htmlFor="location">Location</label>
                <input
                    id={`location-${index}`}
                    value={education.location}
                    onChange={(e) => handleChange(e, index)} // Call handleChange here
                />
            </div>
            <div onClick={() => handleDelete(index)} className="deleteButton">
                Delete
            </div>
        </div>
    );
}

export default function Education({ formData, setFormData }) {
    const handleClick = () => {
        setFormData({
            ...formData,
            education: [
                ...formData.education,
                { schoolName: "[School Name]", degree: "[Degree]", date: "[M yyyy - M yyyy]", location: "[Address]" }, // Add new entry
            ],
        });
    };

    return (
        <div className="form" id="personal-info">
            {formData.education.map((educationData, index) => (
                <EducationComponent
                    key={index}
                    index={index}
                    formData={formData} // Passing formData to EducationComponent
                    setFormData={setFormData} // Passing setFormData to EducationComponent
                />
            ))}
            <button
                className="add-section-button"
                id="add-education"
                onClick={handleClick} // Add new education entry
            >
                <label htmlFor="add-education">Add Education</label>
            </button>
        </div>
    );
}
