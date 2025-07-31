
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
                <label htmlFor="contactNumber">Contact Number</label>
                <input id="contactNumber"></input>
            </div>
            <div className="text-input">
                <label htmlFor="email">Email</label>    
                <input id="email"></input>
            </div>
            <div className="text-input">
                <label htmlFor="externalLinks">External Links</label>
                <input id="externalLinks"></input>
            </div>
        </div>
    )
}