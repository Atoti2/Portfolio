import { useState } from "react"
import { NavLink, Outlet } from "react-router-dom"
import {motion} from "framer-motion"
import { AnimatePresence } from 'framer-motion'
const RootLayout = () => {

    const [open, setOpen] = useState(false)
    const links = [
      {
        link : '/',
        title: 'Kezdőlap',
      },
      {
        link : 'about',
        title: 'Rólam',
      },
      {
        link : 'project',
        title: 'Projektek',
      },
      {
        link : 'contact',
        title: 'Elérhetőség',
      }

    ]
  
    return (
        <>
          <div className="root-layout sticky">
        <header className="flex md:flex-row flex-col justify-end ml-auto ">
          <nav className="p-10 font-mono text-xl">
          <div>
            <ul className="hidden md:flex md:flex-row flex-col md:gap-14 gap-10 list-none">
              <li className='navTag'><NavLink to="/">&#60;Kezdőlap/&#62;</NavLink></li>
              <li className='navTag'><NavLink to="about">&#60;Rólam/&#62;</NavLink></li>
              <li className='navTag'><NavLink to="project">&#60;Projektek/&#62;</NavLink></li>
              <li className='navTag'><NavLink to="contact">&#60;Elérhetőség/&#62;</NavLink></li>
            </ul>
            <div className="flex flex-col md:hidden visible gap-5">
              {!open ? (
                <div
                >
                  <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setOpen(!open)} className="w-12 h-12 hover:rotate-2 cursor-pointer transition-all" viewBox="0 0 24 24"><title>menu-open</title><path d="M21,15.61L19.59,17L14.58,12L19.59,7L21,8.39L17.44,12L21,15.61M3,6H16V8H3V6M3,13V11H13V13H3M3,18V16H16V18H3Z" /></svg>
                </div>
                )
                :
                (
                  <div
               
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setOpen(!open)} className="w-12 h-12 hover:rotate-2 cursor-pointer transition-all" viewBox="0 0 24 24"><title>menu-close</title><path d="M3 6H13V8H3V6M3 16H13V18H3V16M3 11H15V13H3V11M16 7L14.58 8.39L18.14 12L14.58 15.61L16 17L21 12L16 7Z" /></svg>

                  </div>
                )
              }
              <AnimatePresence>
              {open && (
                
                <ul className="fixed top-24 backdrop-blur-md rounded-md">
                  {links.map((item, index) => {
                    return(
                      <motion.li
                      key={index}
                      initial={{translateX: -45}}
                      animate= {{translateX: 0}}
                      exit={{translateX: -45}}
                      transition={{duration: `0.0${9 + index}`}}
                      onClick={() => setOpen(!open)} className='navTag'><NavLink to={item.link}>&#60;{item.title}/&#62;</NavLink></motion.li>
                    )
                  })}
              </ul>
            )
          }        
            </AnimatePresence>
            </div>
          </div>
          
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
    </>
    )
}

export default RootLayout