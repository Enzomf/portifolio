import styled from "styled-components";

const HeaderContainer = styled.header`

    width: 100%;
    position: sticky;
    top: 0;
    z-index: 9999;
    background-color: rgba(29, 32, 34);

  .header-wrapper {
    width: clamp(200px,80%,1500px);
    padding: 1.4em 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    #logo {
      color: ${(props) => props.theme.hightligth};
    }

}
`;

export { HeaderContainer };
