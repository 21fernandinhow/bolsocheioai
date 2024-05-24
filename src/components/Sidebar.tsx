"use client"

import Image from "next/image"
import Link from "next/link";
import { signOut } from "next-auth/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChartSimple, faHouse, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Sidebar() {

    const [showOnMobile, setShowOnMobile] = useState(false)

    return(

        <>
            <aside id="sidebar" className={showOnMobile ? "" : "invisible-on-mobile"}>

                <div className="brand">
                    <Link href="/">
                        <Image src={'/logo.png'} width={90} height={60} alt={"Bol$o Cheio AI"} />
                        <h1>Bolso Cheio A.I.</h1>
                    </Link>
                </div>

                <nav onClick={() => setShowOnMobile(!showOnMobile)}>    
                    <ul>
                        <Link href="/"><li> <FontAwesomeIcon icon={faHouse} /> Início</li></Link>
                        <Link href="/"><li> <FontAwesomeIcon icon={faChartSimple} /> Inscritos</li></Link>
                        <Link href="/"><li> <FontAwesomeIcon icon={faNewspaper} /> Posts</li></Link>
                    </ul>
                    <button onClick={() => signOut()}> Sair </button>
                </nav>

            </aside>

            <FontAwesomeIcon id="toogle-sidebar" icon={faBars} onClick={() => setShowOnMobile(!showOnMobile)}/>
        </>
        
    )
}