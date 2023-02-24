import Hamburger from "../Hamburger"
import { NavBarContainer } from "./styles"
import { useState } from "react";

function NavBar(){
    const [open, setOpen] = useState(false);

    return(
        <NavBarContainer aria-label="navigation">
            <Hamburger open={open}setOpen={setOpen}/>

            <ul className={open ? 'menu-open' : ''}>
                <li>
                  <a href="#home">#HOME</a>  
                </li>
                <li>
                  <a href="#skills">#SKILLS</a>    
                </li>
                <li>
                   <a href="#projects">#PROJECTS</a>
                </li>
                <li>
                   <a href="#contact">#CONTACT</a>
                </li>
            </ul>
    </NavBarContainer>
    )
}

export default NavBar