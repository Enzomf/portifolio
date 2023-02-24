import styled from "styled-components";

const HomeContainer = styled.section`
  height: 85dvh;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 560px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: unset;
  }

  div#home-content {

    padding-top:7em;

    .title-wrapper {
      width: 100%;
    }

    h1 {
      color: ${(props) => props.theme.title};
      font-size: 2em;
    
      overflow: hidden;
      
      span {
        color: ${(props) => props.theme.hightligth};
      }

      @media (max-width: 560px) {
        font-size: 1.5em;
      }
    }


    p {
      color: ${(props) => props.theme.textColor};
      font-size: 0.8em;
      margin-top: 1em;

      @media (max-width: 560px) {
        font-size: 0.5em;
      }
    }


    #social-media-wrapper {
      
      display: flex;
      gap: 0.4em;
      margin-top: 1em;
      
      svg {
        font-size: 1.3em;
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
  
  display: flex;
  align-items: center;
  /* justify-content:center; */
  
  img {
    width: 100%;
  }

}

`;

export { HomeContainer };
