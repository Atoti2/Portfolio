import {createHashRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'

//pages
import Home from './pages/Home'
import About from './pages/About'

//layouts
import RootLayout from './layouts/RootLayout'
import NotFound from './pages/NotFound'
import Projects from './pages/Projects'

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
function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>

  )
}

export default App
