import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export type PostToShare = {
    id: string
    title: string,
}

export default function SharePostButtons ({id, title}: PostToShare){

    const postUrl = `https://bolsocheio.ai/posts/${id}`
    const shareMessage = `${title}: ${postUrl}`

    return (
        <div className='share-post'>
            <h3>- <FontAwesomeIcon icon={faShare} />  Compartilhar: </h3>

                <Link 
                    href={`https://wa.me/?text=${encodeURIComponent(shareMessage)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faWhatsapp} />
                </Link>

                <Link 
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent(title)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </Link>

                <Link 
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faXTwitter} />
                </Link>
        </div>
    );
};