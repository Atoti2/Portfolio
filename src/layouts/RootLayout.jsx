import { NavLink, Outlet } from "react-router-dom"
const RootLayout = () => {
    return (
        <>
            <div className="root-layout">
            <header className="flex md:flex-row flex-col justify-end ml-auto">
          <nav className="p-10 font-mono text-xl">
          <div>
            <ul className="flex md:flex-row flex-col md:gap-20 gap-10 list-none">
              <li className='navTag'><NavLink to="/">&#60;Kezdőlap/&#62;</NavLink></li>
              <li className='navTag'><NavLink to="about">&#60;Rólam/&#62;</NavLink></li>
              <li className='navTag'><NavLink to="project">&#60;Projektek/&#62;</NavLink></li>
              <li className='navTag'><NavLink to="contact">&#60;Elérhetőség/&#62;</NavLink></li>
            </ul>
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