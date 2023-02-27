import { Outlet } from 'react-router-dom'
import Navigaton from './Navigaton'

function Layout() {
  return (
    <>
        <Navigaton />
        <footer className='foote'>
        <Outlet />
        </footer>
    </>
  )
}

export default Layout
