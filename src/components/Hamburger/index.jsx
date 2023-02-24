import HamburgerContainer from "./styled";

function Hamburger({setOpen, open}){
    return ( 
        <HamburgerContainer className={open ? 'open' :''} onClick={_ => setOpen(!open)}>
            <div className="stick first"></div>
            <div className="stick last"></div>
        </HamburgerContainer>
    )
}

export default Hamburger;
