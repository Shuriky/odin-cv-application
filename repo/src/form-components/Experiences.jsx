import { useState } from "react";

function ExperienceComponent({ index, formData, setFormData }) {
    const handleChange = (e, index) => {
        const { id, value } = e.target;
        const field = id.split('-')[0]; // Extract field name

        // Update specific experience field at given index
        setFormData((prev) => ({
            ...prev,
            experiences: prev.experiences.map((experience, i) =>
                i === index
                    ? { ...experience, [field]: value }
                    : experience
            ),
        }));
    };

    const handleDelete = (index) => {
        setFormData((prev) => ({
            ...prev,
            experiences: prev.experiences.filter((_, i) => i !== index),
        }));
    };

    const experience = formData.experiences[index] || {
        workName: "",
        position: "",
        date: "",
        location: "",
        descriptions: "",
    };

    return (
        <div className="form-box">
            <label htmlFor="form-box">Experience #{index + 1}</label>
            <div className="text-input">
                <label htmlFor="workName">Work Name</label>
                <input
                    id={`workName-${index}`}
                    value={experience.workName}
                    onChange={(e) => handleChange(e, index)}
                />
            </div>
            <div className="text-input">
                <label htmlFor="position">Position</label>
                <input
                    id={`position-${index}`}
                    value={experience.position}
                    onChange={(e) => handleChange(e, index)}
                />
            </div>
            <div className="text-input">
                <label htmlFor="date">Start/End Date</label>
                <input
                    id={`date-${index}`}
                    value={experience.date}
                    onChange={(e) => handleChange(e, index)}
                />
            </div>
            <div className="text-input">
                <label htmlFor="location">Location</label>
                <input
                    id={`location-${index}`}
                    value={experience.location}
                    onChange={(e) => handleChange(e, index)}
                />
            </div>
            <div className="text-input">
                <label htmlFor="descriptions">Descriptions</label>
                <input
                    class="descriptionInput"
                    id={`descriptions-${index}`}
                    value={experience.descriptions}
                    onChange={(e) => {
                        handleChange(e, index);
                    }}
                />
            </div>
            <div onClick={() => handleDelete(index)} className="deleteButton">
                Delete
            </div>
        </div>
    );
}


export default function Experiences({ formData, setFormData }) {
    const handleClick = () => {
        setFormData({
            ...formData,
            experiences: [
                ...formData.experiences,
                {
                    workName: "[Work Name]",
                    position: "[Position]",
                    date: "[M yyyy - M yyyy]",
                    location: "[Address]",
                    descriptions: "[Responsibilities, achievements, etc.]",
                },
            ],
        });
    };

    return (
        <div className="form" id="experiences">
            {formData.experiences.map((_, index) => (
                <ExperienceComponent
                    key={index}
                    index={index}
                    formData={formData}
                    setFormData={setFormData}
                />
            ))}
            <button
                className="add-section-button"
                id="add-experiences"
                onClick={handleClick}
            >
                <label htmlFor="add-experiences">Add Experience</label>
            </button>
        </div>
    );
}
