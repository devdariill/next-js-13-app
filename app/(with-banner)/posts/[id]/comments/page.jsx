const fetchComments = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  throw new Error("Error en la API");
  // return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
  //   next: { revalidate: 60 },
  // }).then(res => res.json()); 
};
export default async function Post({ params }) {
  const { id } = params;
  const commnets = await fetchComments(id);  
  return(
    <ul style={ { borderRadius:'10px', background:'#444',fontSize:'10px' , }}>
        {commnets.map(comment => (
            <li key={comment.id} style={{padding:'10px 0'}}>
                <h3>{comment.name}</h3>
                <p>{comment.body}</p>
            </li>
        ))}
    </ul>
  );
}