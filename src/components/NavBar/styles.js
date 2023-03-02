import styled from "styled-components";

const NavBarContainer = styled.nav`
  ul {
    display: flex;
    gap: 1.5em;
    list-style-type: none;
    
    @media (max-width: 560px) {
      position: absolute;
      left: -120%;
      top: 0;
      width: clamp(200px, 40%, 350px);
      border-right: 1px solid ${props => props.theme.hightligth};
      background: ${(props) => props.theme.background};
      height: 100dvh;
      transition: left ease 0.2s;
      display: flex;
      flex-direction: column;
      padding: 1em;
      z-index: auto;
    }
  }

  li {
    cursor: pointer;
    font-size: 0.8em;

    &:hover a {
      color: ${props => props.theme.hightligth};
      transition: color ease .5s;
    }
  }

  a {
    color: ${(props) => props.theme.textColor};
    opacity: 0.9;
  }

  ul.menu-open {
    left: 0;
    top: 0;
    z-index: 999;

  }
`;

export { NavBarContainer };
