import userIcon from '../assets/user.png'
import skillsIcon from '../assets/skills.png'
import educationIcon from '../assets/education.png'
import experiencesIcon from '../assets/experiences.png'

export default function SectionsButtons() {

    return (
        <div id="sections-buttons">
            <button class="button">
                <img class="icon" src={userIcon}></img>
            </button>
            <button class="button">
                <img class="icon" src={educationIcon}></img>
            </button>
            <button class="button">
                <img class="icon" src={experiencesIcon}></img>
            </button>
            <button class="button">
                <img class="icon" src={skillsIcon}></img>
            </button>
        </div>
    )
}