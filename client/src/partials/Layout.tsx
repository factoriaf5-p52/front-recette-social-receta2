import { Outlet } from "react-router"
import Header from "./Header"
import { NavBar } from "./NavBar"

export function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <NavBar />
    </>
  )
}

export default Layout
