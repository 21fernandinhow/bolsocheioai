export async function DELETE(req: Request){

    const { email } = await req.json()

    const response = await fetch(`${process.env.NEXT_PUBLIC_LEADS_URL}/${email}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
        },
    })

    if(response.ok){
        return new Response('Inscrição removida com sucesso.', {
            status: 200
        })
    } else{
        return new Response('Erro ao remover inscrição. Atualize a página e tente novamente', {
            status: 500
        })
    }
}