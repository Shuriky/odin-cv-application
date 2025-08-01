export default function PersonalInfo({ formData, setFormData }) {
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            personal: {
                ...prev.personal,
                [id]: value,
            },
        }));
    };

    return (
        <div className="form" id="personal-info">
            <div className="text-input">
                <label htmlFor="name">Full Name</label>
                <input
                    id="name"
                    value={formData.personal.name}
                    onChange={handleChange}
                />
            </div>
            <div className="text-input">
                <label htmlFor="address">Address</label>
                <input
                    id="address"
                    value={formData.personal.address}
                    onChange={handleChange}
                />
            </div>
            <div className="text-input">
                <label htmlFor="contactNumber">Contact Number</label>
                <input
                    id="contactNumber"
                    value={formData.personal.contactNumber}
                    onChange={handleChange}
                />
            </div>
            <div className="text-input">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    value={formData.personal.email}
                    onChange={handleChange}
                />
            </div>
            <div className="text-input">
                <label htmlFor="externalLinks">External Links</label>
                <input
                    id="externalLinks"
                    value={formData.personal.externalLinks}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}
