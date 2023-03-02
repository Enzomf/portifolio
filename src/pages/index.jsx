import { Outlet } from "react-router-dom";
import Container from "../components/Container";
import Header from "../components/Header";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

function IndexPage(){ 
    return  (
        <>
        <Header />
        <Container>
          <main>
            <Home/>
            <Projects/>
            <Skills/>
          </main>
        </Container>
        <Outlet/>
        </>
    )
}

export default IndexPage