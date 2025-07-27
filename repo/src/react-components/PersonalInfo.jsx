
export default function PersonalInfo() {

    return (
        
        <div className="form" id="personal-info">
            <div className="text-input">
                <label htmlFor="name">Full Name</label>
                <input id="name"></input>
            </div>
            <div className="text-input">
                <label htmlFor="address">Address</label>
                <input id="address"></input>
            </div>
            <div className="text-input">
                <label htmlFor="contact-number">Contact Number</label>
                <input id="contact-number"></input>
            </div>
            <div className="text-input">
                <label htmlFor="email">Email</label>    
                <input id="email"></input>
            </div>
            <div className="text-input">
                <label htmlFor="external-links">External Links</label>
                <input id="external-links"></input>
            </div>
        </div>
    )
}