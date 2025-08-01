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

    const handleBulletInput = (e, index) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevent default newline

            const textarea = e.target;
            const { selectionStart, selectionEnd, value } = textarea;
            const bullet = "\n";

            const newValue =
                value.substring(0, selectionStart) +
                bullet +
                value.substring(selectionEnd);

            // Update state first
            setFormData((prev) => ({
                ...prev,
                experiences: prev.experiences.map((exp, i) =>
                    i === index
                        ? { ...exp, descriptions: newValue }
                        : exp
                ),
            }));

            // Wait for DOM update, then adjust height
            requestAnimationFrame(() => {
                textarea.value = newValue; // ensure it has the new text
                autoResize(textarea);

                // Restore cursor position after the bullet
                const newCursorPos = selectionStart + bullet.length;
                textarea.setSelectionRange(newCursorPos, newCursorPos);
            });
        }
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
                <textarea
                    className="descriptionInput"
                    id={`descriptions-${index}`}
                    value={experience.descriptions}
                    onChange={(e) => {
                        handleChange(e, index);
                        autoResize(e.target);
                    }}
                    onKeyDown={(e) => {
                        handleBulletInput(e, index);
                    }}
                    rows={1}
                    style={{ overflow: "hidden", resize: "none" }}
                />
            </div>
            <div onClick={() => handleDelete(index)} className="deleteButton">
                Delete
            </div>
        </div>
    );
}

function autoResize(textarea) {
    textarea.style.height = "auto"; // Reset height
    textarea.style.height = `${textarea.scrollHeight}px`; // Set to scroll height
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
                    descriptions: "[Description]",
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
