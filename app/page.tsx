import Link from "next/link";

export default function Home() {
    return (
        <>
           <h1> Home</h1>
            <Link href="/blog">Blog</Link>
            <Link href="/profile">profile</Link>
            <Link href="/product">Product</Link>
        </>
    )
}