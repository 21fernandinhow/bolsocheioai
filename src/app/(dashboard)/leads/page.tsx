import Table from "@/components/Table";
import { getLeads } from "@/utilities/getLeads";

export default async function Leads() {

  const leads = await getLeads()
  const data = leads.map((lead: {id: string, email: string, __v: number}) => ({email: lead.email, actions: <span>Actions</span>}))
  const columns = [{name: 'email', label: 'E-mail'}, {name: 'actions', label: 'Ações'}];


  return (
    <>
      <h1 className="title">Inscritos</h1>
      <Table data={data} columns={columns} />
    </>
  )
}