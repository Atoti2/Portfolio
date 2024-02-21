import {Route, Routes, useLocation} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
//pages
import Home from './pages/Home'
import About from './pages/About'

//layouts
import RootLayout from './layouts/RootLayout'
import NotFound from './pages/NotFound'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
function App() {
  const location = useLocation()
  return (
    <>
    <RootLayout/>
    <AnimatePresence mode='wait'>
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/> 
        <Route path="project" element={<Projects/>}/> 
        <Route path="contact" element={<Contact/>}/> 
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </AnimatePresence>
      
    </>

  )
}

export default App
