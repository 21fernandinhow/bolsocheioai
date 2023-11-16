export async function POST(req: Request){

    const { name, email } = await req.json()

    const response = await fetch(`${process.env.NEXT_PUBLIC_LEADS_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
        },
        body: JSON.stringify({
          name: name,
          email: email,
        }),
    })

    if(response.ok){
        return new Response('Inscrição realizada com sucesso', {
            status: 200
        })
    } else{
        return new Response('Erro ao efetuar inscrição. Atualize a página e tente novamente', {
            status: 500
        })
    }
}