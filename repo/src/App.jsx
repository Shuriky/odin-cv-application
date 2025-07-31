import Logo from './form-components/Logo.jsx'
import Form from './form-components/Form.jsx'
import Document from './document-components/Document.jsx';
export default function App() {

    return (
        <div id="app">
            <div class="form-section">
                <Logo />
                <Form />
            </div>
            <div id="separate-line"></div>
            <div id="document-container">
                <Document />
            </div>
        </div>
    );
}