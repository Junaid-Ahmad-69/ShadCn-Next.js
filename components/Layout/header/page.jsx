"use client";
import Image from 'next/image';
import Dragon from "../../../public/images/dragon.jpg"

export default function Header() {
    return (
        <header>
            <div className="w-1/2">
                <Image src={Dragon} alt="dragon" width={0}
                       height={0}
                       sizes="100vw"
                       priority={false}
                       style={{width: '100%'}}/>
            </div>
            <h1 style={{backgroundColor: "lightblue", padding: "1rem", textAlign: "center"}}>Header</h1>

        </header>
    )
}