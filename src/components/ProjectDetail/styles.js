import styled from "styled-components";

const ProjectDetailContainer = styled.div`
    width: clamp(200px, 80%, 800px);
    height: 70dvh;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: #1c2022;
    border-radius: 6px;
    padding: 2em;
    animation-name: open;
    animation-timing-function: cubic-bezier(0.26, 0.53, 0.74, 1.48);
    animation-duration: 0.5s;
    z-index: 3;
    transition: all .4s ease-in-out;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;

    @media (max-width:800px) {
        height: 80dvh;
        display: flex;
        flex-direction: column;
    }

    &.closed {
        animation-name: close;
        animation-timing-function: cubic-bezier(0.26, 0.53, 0.74, 1.48);
        animation-duration: 0.5s;
    }

    @keyframes open {
        0% {
            opacity: 0;
            transform: scale(0.5, 0.5) translate(-50%,-50%);
            position: fixed;

        }

        100% {
            opacity: 1;
            transform: scale(1, 1) translate(-50%,-50%);
        }
    }

    @keyframes close {
        0% {
            transform: scale(1, 1) translate(-50%,-50%);

        }

        100% {
            transform: scale(0, 0) translate(-50%,-50%);
        }  
    }



`

const BlackBlurBackground = styled.div`
    position: fixed;
    z-index: 2;
    inset: 0;
    height: 100dvh;
    width: 100%;
    background-color: rgba(0,0,0, 0.6);
    backdrop-filter: blur(10px);
    transition: all .5s ease;
    cursor: pointer;
`

const Content = styled.div`


    h1 {
        font-size: 1.4em;
        margin-bottom: 0.5em;
        color: #FFF;
    }
    h2 {
        font-size: 1em;
        margin-bottom: 0.5em;
    }

    p{
        overflow-y: scroll;
        overflow-x: hidden;
        object-fit: scale-down;
        padding-right: 0.2em;
        color: #eaeef0;
        max-height: 80%;
        font-size: 0.85em;



        &::-webkit-scrollbar {
            width: 3px;
        
        
        }
        &::-webkit-scrollbar-thumb {
            width: 3px;
            background-color: rgba(128, 124, 124, 0.6);
            border-radius: 2px;
            
        }
    }


    #close-btn {
        background-color: transparent;
        outline: transparent;
        border: 0;
        float: right;
        cursor: pointer;
        font-size: 1.3rem;
        color: ${(props) => props.theme.textColor};
        opacity: 0.3;

        &:hover {
            opacity: 1;
            transition: .5s;
        }
    }

    .tools {
        margin-bottom: 1em;
        color: ${(props) => props.theme.textColor};
        font-size: 0.85em;

    }

`


export { ProjectDetailContainer, BlackBlurBackground, Content };

