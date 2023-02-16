import { Outlet } from 'react-router-dom'
import Navigaton from './Navigaton'

function Layout() {
  return (
    <>
        <Navigaton />
        <footer>
        <Outlet />
        </footer>
    </>
  )
}

export default Layout
