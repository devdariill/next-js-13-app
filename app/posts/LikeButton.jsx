'use client'

import { useState } from "react";
function LikeButton({id}) {
  //   const handleCLick = () => {
  //     alert("alert");
  //   };
  const [liked, setLiked] = useState(false);
  return (
    <button onClick={() => setLiked(!liked)}>{liked ? "💕" : "♥️"}</button>
  );
}

export default LikeButton;
