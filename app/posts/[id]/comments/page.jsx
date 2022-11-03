const fetchComments = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: { revalidate: 60 },
  }).then(res => res.json()); 
};
export default async function Post({ params }) {
  const { id } = params;
  const commnets = await fetchComments(id);  
  return(
    <ul>
        {commnets.map(comment => (
            <li key={comment.id}>
                <h3>{comment.name}</h3>
                <p>{comment.body}</p>
            </li>
        ))}
    </ul>
  );
}