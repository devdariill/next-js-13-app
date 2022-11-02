export default async function PostsPage({ params }) {
  const { id } = params;
  return <h1>Post {id}</h1>;
}
