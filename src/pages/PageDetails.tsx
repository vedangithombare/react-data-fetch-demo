
import type { Post } from "../App";


function PageDetails({ post }: { post: Post }) {
 
  return (
    <>
      <div className="flex h-full w-full flex-col justify-center items-center">
        <h1 className="text-xl font-bold">{post?.title}</h1>
        <p className="text-lg font-medium  text-red-300">{post?.body}</p>
      </div>
    </>
  );
}

export default PageDetails;
