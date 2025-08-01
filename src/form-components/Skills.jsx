function SkillsComponent({ index, formData, setFormData }) {
    const handleChange = (e, index) => {
        const { id, value } = e.target;
        const field = id.split('-')[0];

        setFormData((prev) => ({
            ...prev,
            skills: prev.skills.map((skill, i) =>
                i === index
                    ? { ...skill, [field]: value }
                    : skill
            ),
        }));
    };

    const handleDelete = (index) => {
        setFormData((prev) => ({
            ...prev,
            skills: prev.skills.filter((_, i) => i !== index),
        }));
    };

    const skill = formData.skills[index] || { category: "", name: "" };

    return (
        <div className="form-box">
            <div className="text-input">
                <label htmlFor="category">Skill Category</label>
                <input
                    id={`category-${index}`}
                    value={skill.category}
                    onChange={(e) => handleChange(e, index)}
                />
            </div>
            <div className="text-input">
                <label htmlFor="name">Skill Name(s)</label>
                <input
                    id={`name-${index}`}
                    value={skill.name}
                    onChange={(e) => handleChange(e, index)}
                />
            </div>
            <div onClick={() => handleDelete(index)} className="deleteButton">
                Delete
            </div>
        </div>
    );
}

export default function Skills({ formData, setFormData }) {
    const handleClick = () => {
        setFormData({
            ...formData,
            skills: [...formData.skills, { category: "", name: "" }],
        });
    };

    return (
        <div className="form" id="skills">
            {formData.skills.map((_, index) => (
                <SkillsComponent
                    key={index}
                    index={index}
                    formData={formData}
                    setFormData={setFormData}
                />
            ))}
            <button
                className="add-section-button"
                id="addSkills"
                onClick={handleClick}
            >
                <label htmlFor="addSkills">Add Skill</label>
            </button>
        </div>
    );
}
