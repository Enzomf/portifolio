import Container from "./components/Container"
import Header from "./components/Header"
import Home from "./components/Home"

function App() {

  return (
    <Container>
      <Header />
      <main>
        <Home/>
      </main>
    </Container>
  )
}

export default App
