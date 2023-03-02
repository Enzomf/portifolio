import { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate, useParams } from "react-router-dom";

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { projects } from '../../data/projects.json';
import { BlackBlurBackground, Content, ProjectDetailContainer } from "./styles";

function ProjectDetail(){

    const [details, setDetails] = useState(null)
    const { id } = useParams();
    const navigate = useNavigate();
    const containerRef = useRef(null);

    useEffect(()=> { 
        
        const detail = projects.filter(project => project.id == id)[0];
        disableBodyScroll(document.body);
        setDetails(detail);
    }, [ ])

    function handleClose(){
        
        containerRef.current.classList.add('closed')
        setTimeout(()=> { 
            enableBodyScroll(document.body);
            navigate('/');
        }, 250)
        
    }

    


    if(details) return ( 
        <>
        <BlackBlurBackground onClick={handleClose}/>
        <ProjectDetailContainer ref={containerRef}>
            <div className="demo">

            </div>
            <Content >
                <button id="close-btn" onClick={handleClose}>
                    <AiOutlineClose/>
                </button>
                <h1>{ details.name }</h1>

                <h2>TOOLS</h2>
                <div className="tools">
                    {
                        details.tools.join(',')
                    }
                </div>
                <h2>ABOUT</h2>
                <p>
                    {
                        details.about
                    }
                </p>
            </Content>
        </ProjectDetailContainer>
        </>
    )
}

export default ProjectDetail;