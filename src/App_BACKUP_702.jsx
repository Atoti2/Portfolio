import {createHashRouter, Route, Routes, createRoutesFromElements, RouterProvider } from 'react-router-dom'

//pages
import Home from './pages/Home'
import About from './pages/About'

//layouts
import RootLayout from './layouts/RootLayout'
import NotFound from './pages/NotFound'
import Projects from './pages/Projects'

<<<<<<< HEAD
const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>} >
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/> 
      <Route path="project" element={<Projects/>}/> 
      <Route path='*' element={<NotFound/>}/>
    </Route>
  )
)
=======
>>>>>>> refs/remotes/origin/main
function App() {
  return (
    <>
    <RootLayout/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/> 
        <Route path="project" element={<Projects/>}/> 
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>

  )
}

export default App
