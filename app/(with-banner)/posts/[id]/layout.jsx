import Link from "next/link";

const fetchSinglePost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 },
  }).then(res => res.json()); 
};
export default async function Post({children, params }) {
  const { id } = params; 
  const post = await fetchSinglePost(id);  
  return(
  <>
    <h1>Post {id}</h1>
      <article key={post.id}>
        <h2 style={{ color: "#09f" }}>{post.title}</h2>
        <p>{post.body}</p>
        <Link href={`/posts/${id}/comments`}>Ver Comentarios</Link>
        {children}
    </article>

  </>
  );
}