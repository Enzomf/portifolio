import styled from "styled-components";


const ProjectsContainer = styled.section`
    width: 100%;
    min-height: 100dvh;

    #projects-wrapper {
       display: grid;
       grid-template-columns: repeat(auto-fit, minmax(250px, 350px));
       margin-top: 1em;
       gap: 1.2em;
    }
`;

export { ProjectsContainer };

