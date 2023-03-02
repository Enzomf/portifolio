import { useState } from "react";
import NavBar from "../NavBar";
import { HeaderContainer } from "./styled";

function Header() {

    const [stickHeader, setStickHeader] = useState(false);

   

    return (
        <HeaderContainer >
            <div className="header-wrapper">
                <h3 id="logo">Enzomf</h3>
                
                <NavBar/>
            </div>
          
        </HeaderContainer>
    )
}

export default Header;