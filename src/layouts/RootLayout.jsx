import { NavLink, Outlet } from "react-router-dom"
const RootLayout = () => {
    return (
        <>
            <div className="root-layout">
            <header>
        <nav className="flex sm:flex-row flex-col justify-end p-10 font-mono text-xl">
          <div>
            <ul className="flex sm:flex-row flex-col sm:gap-20 gap-5 list-none">
              <li className='navTag'><NavLink to="/">&#60;Kezdőlap/&#62;</NavLink></li>
              <li className='navTag'><NavLink to="about">&#60;Rólam/&#62;</NavLink></li>
              <li className='navTag'><NavLink to="project">&#60;Projektek/&#62;</NavLink></li>
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