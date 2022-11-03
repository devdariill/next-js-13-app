import { Counter } from "./posts/Counter.jsx";
function PostLayout({ children }) {
  return (
    <>
      <small>Home &bull; Posts</small><br />
      <marquee style={{color:'purple'}}>dev-ronaaldll</marquee>
      {children}
      {/* <Counter /> */}
    </>
  );
}

export default PostLayout;
