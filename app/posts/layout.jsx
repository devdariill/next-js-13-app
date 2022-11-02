import { Counter } from "./Counter.jsx";
function PostLayout({ children }) {
  return (
    <>
      <Counter />
      <div>PostLayout</div>
      {children}
    </>
  );
}

export default PostLayout;
