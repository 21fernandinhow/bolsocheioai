import Table from "@/components/Table";
import { getLeads } from "@/utilities/getLeads";
import DeleteItem from "@/components/DeleteItem";

export default async function Leads() {

  const leads = await getLeads()
  const data = leads.map((lead: {_id: string, email: string, __v: number}) => (
    {
      email: lead.email, 
      actions: (
        <span>
          <DeleteItem selector={lead.email} endpoint={`${process.env.NEXT_PUBLIC_LEADS_URL}`} />
        </span>
      )
    }
  ))
  const columns = [{name: 'email', label: 'E-mail'}, {name: 'actions', label: 'Ações'}];


  return (
    <>
      <h1 className="title">Inscritos</h1>
      <Table data={data} columns={columns} />
    </>
  )
}