import { Counter } from "./Counter.jsx";
function PostLayout({ children }) {
  return (
    <>
      <small>Home &bull; Posts</small>
      {children}
      <Counter />
    </>
  );
}

export default PostLayout;
