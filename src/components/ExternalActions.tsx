import Link from "next/link"

export default function ExternalActions () {
    return (
        <section className="item-box external-actions">
            <h3>Ações Externas</h3>
            <ul>
                <li>
                    <Link 
                        href={"https://analytics.google.com/analytics/web/#/"} 
                        className="btn" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Google Analytics
                    </Link>
                </li>
                <li>
                    <Link 
                        href={"https://business.facebook.com/latest/home?asset_id=181352798396770&business_id=100666814612726&nav_ref=internal_nav"} 
                        className="btn" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Painel Meta
                    </Link>
                </li>
            </ul>
        </section>
    )
}