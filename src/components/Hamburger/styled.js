import styled from "styled-components";

const HamburgerContainer = styled.div `
    @media (min-width:560px){
        display: none;
    }

    width: 25px;
    display: flex;
    flex-direction:column;
    gap: 0.4em;
    position:relative;
    

    .stick {
        background: ${props => props.theme.textColor};
        height:2px;
        transition: .5s ease;
    }

    .stick.last {
        width: 50%;
    }


    &.open {
        
        .stick {
            position: absolute;
        }
        
        .stick.first  {
            transform: rotateZ(45deg);
            width: 100%;
        }
        .stick.last  {
            transform: rotateZ(-45deg);
            width: 100%;
         
        }

    }
`;

export default HamburgerContainer;