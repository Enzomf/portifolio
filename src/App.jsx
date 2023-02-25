import Container from "./components/Container"
import Header from "./components/Header"
import Home from "./components/Home"
import Skills from "./components/Skills"

function App() {

  return (
    <Container>
      <Header />
      <main>
        <Home/>
        <Skills/>
      </main>
    </Container>
  )
}

export default App
