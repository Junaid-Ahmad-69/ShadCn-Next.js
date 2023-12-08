import Link from "next/link";
import {DarkModeToggle} from "@/components/DarModeToggle";
import "../../../app/globals.css"
import {SheetDemo} from "@/components/Sheet";


const navLinks = [
    {name: "Home", href: "/"},
    {name: "About", href: "/about"},
    {name: "Profile", href: "/profile"},
    {name: "Product", href: "/product"},
    {name: "Blog", href: "/blog"},
    {name: "Login", href: "/login"},
    {name: "Register", href: "/register"},
]


const NavBar = () => {
    return (
        <nav className="flex items-center justify-between w-full p-4 max-w-7xl mx-auto">
            <ul className="flex items-center justify-between gap-4 text-lg text-cyan-900 dark:text-white">
                {
                    navLinks.map((links) => {
                        return (
                            <li><Link href={links.href} key={links.name}>{links.name}</Link></li>)
                    })
                }
            </ul>
            <div className="flex items-center gap-2">
                <DarkModeToggle/>
                <SheetDemo/>
            </div>

        </nav>
    )
}

export default NavBar
