import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from "../active-link/ActiveLink"



const navItems = [
  { text: "About", path: "/about" },
  { text: "Contact", path: "/contact" },
  { text: "Pricing", path: "/pricing" },
]


export const Navbar = () => {
  return (
    <nav className="flex bg-blue-600 p-2 m-2">
      <Link className="flex items-center" href={'/'}>
        <HomeIcon/>
        Home
      </Link>
      <div className="flex flex-1"></div>

      {
        navItems.map((navItem) => (
          <ActiveLink key={navItem.path} {...navItem} />
        ))
      }
    </nav>
  )
}
