import Header from "@/components/Layout/header/page";
import Footer from "@/components/Layout/footer/page";
import {Metadata} from "next";
import {Inter} from "next/font/google";
import {ThemeProvider} from "@/components/ThemeProvider"
import NavBar from "@/components/Layout/navbar/NavBar";
import {TableDemo} from "@/components/Table";

const inter = Inter({subsets: ['latin']})


export const metadata: Metadata = {
    title: {
        default: "Next.js | ShadCn UI Library",
        template: "%s | Next.js"
    }
}


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <NavBar/>

            <Header/>
            <main className="container">
                {children}
                <TableDemo/>

            </main>
            <Footer/>
        </ThemeProvider>
        </body>
        </html>
    )
}
