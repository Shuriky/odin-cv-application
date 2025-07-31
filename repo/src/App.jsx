import Logo from './form-components/Logo.jsx'
import Form from './form-components/Form.jsx'
import Document from './document-components/Document.jsx';
import React, { useState } from "react";

export default function App() {
    const [formData, setFormData] = useState({
        personal: {
            name: "",
            address: "",
            contactNumber: "",
            email: "",
            externalLinks: "",
        },
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