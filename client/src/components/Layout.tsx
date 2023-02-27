import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Navigaton from './Navigaton'

function Layout() {
  return (
    <>
<<<<<<< HEAD
        <Navigaton />
        <footer className='foote'>
        <Outlet />
=======
        <footer>
          <NavBar />
          <Outlet />
>>>>>>> navbar
        </footer>
    </>
  )
}

export default Layout
