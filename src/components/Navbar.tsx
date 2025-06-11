import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import ThemeButton from "./ThemeButton";

export default function Navbar() {
    return(
        <nav>
            <div className="nav-content">
                <div className="brand">
                    <Link href="/">
                        <Image src={'/logo.png'}
                            width={90}
                            height={60}
                            alt={"Bol$o Cheio AI"}          
                        />
                        <h1>Bolso<br/>Cheio A.I.</h1>
                    </Link>
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
                        <li>
                            <Link href="https://x.com/bolsocheioai" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faXTwitter} />
                            </Link>
                        </li>
                        <li>
                            <ThemeButton/>
                        </li>
                    </ul>
                </div>
            </div>
            <hr/>
        </nav>
    )
}