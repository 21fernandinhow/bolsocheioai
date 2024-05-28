export async function getLeads() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_LEADS_URL}`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      next: { revalidate: 300 }
    });

    if (!response.ok) {
        throw new Error('Erro ao buscar leads')
    }

    return response.json();
  } catch (error) {
    console.error(error)
  }
};

export default function Leads() {

    return (
      <section>
        <h1>Leads</h1>
      </section>
    )
}