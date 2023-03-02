import { Route, Routes } from 'react-router-dom';
import ProjectDetail from './components/ProjectDetail';
import IndexPage from './pages';
function App() {

  return (
   <Routes> 
    <Route path='/' element={<IndexPage/>}>
      <Route path='projects/:id' element={<ProjectDetail/>}/>
    </Route>

    <Route path='*' element={<IndexPage/>} />
   </Routes>
  )
}

export default App
