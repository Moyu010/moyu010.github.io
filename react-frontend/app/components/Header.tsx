import Link from "next/link"
import Image from "next/image"

// Other components
import ThemeSwitcher from "./ThemeSwitcher"

export default function Header() {
  return (
    <header>
      <div className="header-bar">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/next.svg" alt="logo" width="32" height="32"></Image>
          <p className="font-semibold text-lg">Jiayi Matthew Gu</p>
        </Link>
        {/* <ThemeSwitcher /> */}
        <nav className="nav-bar">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/projects" className="nav-link">
            Recent Projects
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
