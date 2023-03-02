import { useRef } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { BsFillLockFill } from 'react-icons/bs';
import Tild from 'react-parallax-tilt';
import { Link } from 'react-router-dom';

import { CardContainer } from "./styled";

function ProjectCard({ image, github, live, repoPrivate, name, id }){

    const cardRef = useRef(null);
    

   function handleMouseMove(e) {
       const position = cardRef.current.getBoundingClientRect();

       const x = e.clientX - position.left;
       const y = e.clientY - position.top;
       

       cardRef.current.style.setProperty("--mouse-x", `${x}px`);
       cardRef.current.style.setProperty("--mouse-y", `${y}px`);
      
   }

   function handleDetailClick(){
       cardRef.current.classList.add('active-detail');
   }


    return (
     

      

        
     <Tild tiltMaxAngleX={5} tiltMaxAngleY={5}>
         <CardContainer ref={cardRef} onMouseMove={handleMouseMove}>
                <span className='image-wrapper'>
                <img src={image} alt={name} />
                </span>

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

                    <button id='details' onClick={handleDetailClick}>
                        <Link to={`/projects/${id}`}>details</Link>
                    </button>
                </div>
         </CardContainer>
       
     </Tild>
    
    )
}

export default ProjectCard;