import styled from "styled-components";

const HomeContainer = styled.section`
  /* min-height: 90dvh;
  max-height: 90dvh; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 11em;

  @media (max-width: 560px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: unset;
  }

  div#home-content {
    max-width: 100%;


    .title-wrapper {
      width: 100%;
    }

    h1 {
      color: ${(props) => props.theme.title};
      font-size:  clamp(1.2rem, 3vw, 5rem);
      white-space:  nowrap;
    
      overflow: hidden;
      
      span {
        color: ${(props) => props.theme.hightligth};
      }


    }


    p {
      color: ${(props) => props.theme.textColor};
      font-size: clamp(0.5rem, 1vw, 5rem);
      margin-top: 1em;

    }


    #social-media-wrapper {
      
      display: flex;
      gap: 2em;
      margin-top: 2em;
      
      svg {
        font-size: 2.3em;
        color: ${ props => props.theme.textColor};
        opacity: 0.6;

        &:hover{
          color: ${props => props.theme.hightligth};
          opacity: 1;
        }
      }
    }
  }

#home-image {
  svg {
    min-height: 100%;
    transform: scale(1.3) !important;
  }


 
  

}

`;

export { HomeContainer };
