async function getNextPosts(){
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_POSTS_URL}/next`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
            }
        });
    
        if (!response.ok) {
            throw new Error('Erro ao buscar leads')
        }
  
        return response.json();
    } catch (error) {
        console.error(error)
    }
}

export default async function NextPosts () {

    const nextPosts = await getNextPosts()

    return(
        <section className="item-box next-posts">
            <h2>Próximos Posts:</h2>
            {nextPosts && nextPosts.map((item: {title: string, keywords: []}, index: number) => (
                <div key={index} className="next-post-item">
                    <h3 key={index}>{item?.title}</h3>
                    <div className="keywords">
                        {item?.keywords.map((keyword, index) => <span key={index}>{keyword}</span>)}
                    </div>
                </div>
            ))}
        </section>
    )
}