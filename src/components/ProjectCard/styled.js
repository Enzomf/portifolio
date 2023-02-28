import styled from "styled-components";

const CardContainer = styled.div`
    width: 350px;
    height: 420px;
    
    padding: 1rem;
    position: relative;
    border-radius: 0.7rem;
    border: solid 1px #363738;
    background-color: rgba(255, 255, 255, 0.06);
    overflow: hidden;



    
    &:hover{
        .actions-wrapper {
            animation: in .5s ease;
            visibility: visible;
        }

        
    }
    


    &::before {
        content: '';
        border-radius: inherit;
        height: 100%;
        left: 0;
        top: 0;
        width: 100%;
        position: absolute;
        background: radial-gradient( 800px circle at  var(--mouse-x) var(--mouse-y) , rgba(255, 255, 255, 0.06), transparent 40% );
    }

    img {
        margin: 0 auto;
        width: 50%;
        
    }

    .actions-wrapper{

        width: 100%;
        display: flex;
        gap: 0.5em;
        justify-content: center;
        position: absolute;
        bottom: 2.5em;
        right: 0;
        visibility: hidden;
        
        animation: out .5s ease;
        
       

        & > button { 
            padding: 0.5em 1em;
            border-radius: 6px;
            display: flex;
            align-items: center;
            gap:0.3em;
            border: 1px solid #363738;
            background-color: #282829;
            color: #FFFF;
            cursor: pointer;
            transition: all .5s ease;

            &:hover {
                background-color: #1c1c1c; 
            }
        }
    }

    @keyframes in {
        from {
            bottom: -2em;
        
        }
        to {
            bottom: 3em;
          
        }
    }
    @keyframes out {
        from {
            bottom: 3em;
        }
        to {
            bottom: -5em;
            
        }
    }

`;

export { CardContainer };

