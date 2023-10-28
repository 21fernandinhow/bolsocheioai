import Image from "next/image"

export default function Navbar() {
    return(
        <nav>
            <div className="nav-content">
                <div className="brand">
                    <a href="#">
                        <Image src={'/logo.png'}
                            width={120}
                            height={80}
                            alt={"Bol$o Cheio AI"}          
                        />
                    </a>

                    <h1>Bol$o<br/>Cheio A.I.</h1>
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">Sobre</a></li>
                        <li><a href="/contact">Contato</a></li>
                    </ul>
                </div>
            </div>
            <hr/>
        </nav>
    )
}