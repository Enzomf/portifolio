import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: 1.4em 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  

  #logo {
    color: ${(props) => props.theme.hightligth};
  }
`;

export { HeaderContainer };
