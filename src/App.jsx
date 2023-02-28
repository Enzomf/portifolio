import Container from "./components/Container"
import Header from "./components/Header"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {

  return (
    <Container>
      <Header />
      <main>
        <Home/>
        <Projects/>
        <Skills/>
      </main>
    </Container>
  )
}

export default App
