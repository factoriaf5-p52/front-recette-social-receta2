import { Outlet } from "react-router"
import Header from "./Header"
import { Navbar } from "./Navbar"


export function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Navbar />
    </>
  )
}

export default Layout
