import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

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

                    <h1>Bolso<br/>Cheio A.I.</h1>
                </div>
                <div className="menu">
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">Sobre</Link></li>
                        <li><Link href="/contact">Contato</Link></li>
                        <li>
                            <Link href="https://www.instagram.com/bolsocheio.ai" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <hr/>
        </nav>
    )
}