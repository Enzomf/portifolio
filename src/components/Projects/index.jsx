import { projects } from '../../data/projects.json';
import ProjectCard from "../ProjectCard";
import { ProjectsContainer } from "./styled";

function Projects(){
    return (
        <ProjectsContainer id="projects" >
            <h2 ># Projects</h2>

            <div id="projects-wrapper">

                {
                    projects.map(project => (
                        <ProjectCard  image={`/portifolio/${project.imagePath}`} repoPrivate={project.private} live={project.liveUrl}  id={project.id} name={project.name}  github={project.repo}/>
                    ))
                }

            </div>
                
        
        </ProjectsContainer>
    )
}

export default Projects;