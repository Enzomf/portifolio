import skillsImage from '../../assets/skills-image.png';
import { SkillsContainer } from "./styles";

function Skills(){
    return( 
        <SkillsContainer id="skills">
            <h2 ># Skills</h2>

            <div id="skills-wrapper">
                <div>
                    <h3>Frontend</h3>

                    <div className="icons-wrapper">
                        
                    </div>
                </div>

                <img src={skillsImage} alt="" />
            </div>

        </SkillsContainer>
    )
}

export default Skills;