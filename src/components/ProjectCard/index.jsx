import { useRef } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { BsFillLockFill } from 'react-icons/bs';
import Tild from 'react-parallax-tilt';

import { CardContainer } from "./styled";

function ProjectCard({ image, github, live, repoPrivate, details }){

    const cardRef = useRef(null);

   function handleMouseMove(e) {
       const position = cardRef.current.getBoundingClientRect();

       const x = e.clientX - position.left;
       const y = e.clientY - position.top;
       

       cardRef.current.style.setProperty("--mouse-x", `${x}px`);
       cardRef.current.style.setProperty("--mouse-y", `${y}px`);
      
   }


    return (
     <Tild tiltMaxAngleX={5} tiltMaxAngleY={5}>

         <CardContainer ref={cardRef} onMouseMove={handleMouseMove}>
                <img src={image} alt="sepedi-software" style={{margin:'0 auto'}} />

                <div className="actions-wrapper" >
                    <button id='code'>
                       

                        {
                            repoPrivate ? 
                            <>
                                <BsFillLockFill/>
                                <span>
                                    code
                                </span>
                            </>
                            : 
                            <>
                             <AiFillGithub />

                            <a href={github} target="_blank">
                                code
                            </a>

                            </>

                        }

                    
                    </button>
                    <button id='live' title='live'>

                        <AiFillEye/>
                        <a href={live} target='_blank' >
                            live
                        </a>
                    </button>

                    <button id='details'>
                        <span>
                            details 
                        </span>
                    </button>
                </div>
         </CardContainer>
       
     </Tild>
    )
}

export default ProjectCard;