// import Image from "next/image";
import {CommetsList} from './CommentsList.jsx';
export default function Post({ params }) {
  const { id } = params;
  return (
    <ul>
      <CommetsList id={id} />
    </ul>
  );
}
