import Logo from './form-components/Logo.jsx'
import Form from './form-components/Form.jsx'
import Document from './document-components/Document.jsx';
import React, { useState } from "react";

export default function App() {
    const [formData, setFormData] = useState({
        personal: {
            name: "John Doe",
            address: "Thanh Hoa 36",
            contactNumber: "0123456789",
            email: "hello@gmail.com",
            externalLinks: "linkedin",
        },
        education: [
            { schoolName: "Truong Doi", degree: "Bachelor of Nem Chua", date: "Marchuary", location: "nowhere" }, // Initial empty education object
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