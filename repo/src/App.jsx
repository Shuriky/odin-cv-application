import Logo from './form-components/Logo.jsx'
import Form from './form-components/Form.jsx'
import Document from './document-components/Document.jsx';
import React, { useState } from "react";

export default function App() {
    const [formData, setFormData] = useState({
        personal: {
            name: "[Your Name]",
            address: "[Street, State, Postal code]",
            contactNumber: "[Phone number]",
            email: "abc@gmail.com",
            externalLinks: "linkedin/github/others",
        },
        education: [
            { schoolName: "[School Name]", degree: "[Degree]", date: "[M yyyy - M yyyy]", location: "[Address]" },
        ],
    });

    return (
        <div id="app">
            <div className="form-section">
                <Logo />
                <Form formData={formData} setFormData={setFormData}/>
            </div>
            <div id="separate-line"></div>
            <div id="document-container">
                <Document formData={formData} setFormData={setFormData}/>
            </div>
        </div>
    );
}