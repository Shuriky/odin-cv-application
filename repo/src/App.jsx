import Logo from './react-components/Logo.jsx'
import Form from './react-components/Form.jsx'

export default function App() {

    return (
        <div id="app">
            <div class="form-section">
                <Logo />
                <Form />
            </div>
            <div id="separate-line"></div>
            <div id="document-container">
                <div id="document">
                </div>
            </div>
        </div>
    );
}