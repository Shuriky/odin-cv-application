import Logo from './form-components/Logo.jsx'
import Form from './form-components/Form.jsx'
import Document from './document-components/Document.jsx';
import React, { useState } from "react";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

export default function App() {
    const [formData, setFormData] = useState({
        personal: {
            name: "John Doe",
            address: "Street, State, Postal code",
            contactNumber: "0123456789",
            email: "example@gmail.com",
            externalLinks: "linkedin/github/others",
        },
        education: [],
        experiences: [],
        skills: [],
    });

    const contentRef = useRef(null);
    const reactToPrintFn = useReactToPrint({ contentRef });

    return (
        <div id="app">
            <div className="form-section">
                <Logo />
                <Form formData={formData} setFormData={setFormData}/>
            </div>
            <div id="separate-line"></div>
            <div id="document-container">
                <button id="printButton" onClick={reactToPrintFn}>Export Document</button>
                <div ref={contentRef} className="print-content">
                    <Document formData={formData} setFormData={setFormData}/>
                </div>
            </div>
        </div>
    );
}