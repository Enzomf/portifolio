import sepediImage from "../../assets/logo-sepedi 1.svg";
import ProjectCard from "../ProjectCard";
import { ProjectsContainer } from "./styled";

function Projects(){
    return (
        <ProjectsContainer id="projects" >
            <h2 ># Projects</h2>

            <div id="projects-wrapper">
                <ProjectCard image={sepediImage} repoPrivate={true} live={'http://ncloud.dev.br:3001'} />
                <ProjectCard image={sepediImage} repoPrivate={true} live={'http://ncloud.dev.br:3001'} />
                <ProjectCard image={sepediImage} repoPrivate={true} live={'http://ncloud.dev.br:3001'} />
                <ProjectCard image={sepediImage} repoPrivate={true} live={'http://ncloud.dev.br:3001'} />
            </div>
                
        
        </ProjectsContainer>
    )
}

export default Projects;