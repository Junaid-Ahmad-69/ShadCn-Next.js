"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";
import "app/globals.css"


const navLinks = [
    {name: "Login", href: "/login"},
    {name: "Register", href: "/register"},
    {name: "Forget Password", href: "/forget-password"}
]


export default function AuthLayout({children}) {
    const pathName = usePathname();

    return (
        <div>
            {navLinks.map((link) => {
                const isActive = pathName.startsWith(link.href)
                return (
                    <Link href={link.href} key={link.name} className={isActive ? "bg-blue-600 font-semibold no-underline m-4 text-white p-2" : " text-slate-800 no-underline m-4 p-2"}>{link.name}</Link>
                )
            })}
            {children}
        </div>
    )
}
