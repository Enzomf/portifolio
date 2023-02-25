import styled from "styled-components";

const HomeContainer = styled.section`
  height: 90dvh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 7em;

  @media (max-width: 560px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: unset;
  }

  div#home-content {



    .title-wrapper {
      width: 100%;
    }

    h1 {
      color: ${(props) => props.theme.title};
      font-size: 3.1vw;
    
      overflow: hidden;
      
      span {
        color: ${(props) => props.theme.hightligth};
      }


    }


    p {
      color: ${(props) => props.theme.textColor};
      font-size: 1.3vw;
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
  
  
  width: 100%;
  max-height: 150px;
 
  display: flex;
  justify-content: right;
  align-items: center;
  
  

   svg {
    min-width: 110% ;
    
  }
  

}

`;

export { HomeContainer };
