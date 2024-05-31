import DeleteItem from "@/components/DeleteItem";
import EditPost from "@/components/EditPost";
import Table from "@/components/Table";
import { getPosts } from "@/utilities/getPosts";
interface PostData {
  title: string,
  date: string, 
  actions: any
}

export default async function Posts() {

  const posts = await getPosts()
  const data = posts.map((post: {_id: string, title: string, date: string, content: string, __v: number}) => (
    {
      title: post.title,
      date: new Date(post.date).toLocaleDateString('pt-br'), 
      actions: (
        <span>
          <EditPost initialTitle={post.title} initialContent={post.content} selector={post._id}/>
          <DeleteItem selector={post._id} endpoint={`${process.env.NEXT_PUBLIC_POSTS_URL}`} />
        </span>
      )
    }
  )).sort((a: PostData, b: PostData) => {
      const dateA = a.date.split('/').reverse().join('-');
      const dateB = b.date.split('/').reverse().join('-');
      return new Date(dateB).getTime() - new Date(dateA).getTime();
  });

  const columns = [{name: 'title', label: 'Post'}, {name: 'date', label: 'Data'}, {name: 'actions', label: 'Ações'}];

  return (
    <>
      <h1 className="title">Posts</h1>
      <Table data={data} columns={columns} />
    </>
  )
}