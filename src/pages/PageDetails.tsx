import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function PageDetails({ posts }: { posts: Post[] }) {
  const id = useParams();
  const [displayPost, setdisplayPost] = useState<Post | undefined>();

  useEffect(() => {
    for (const post of posts) {
      if (post.id == Number(id.id)) {
        setdisplayPost(post);
        console.log(`displaying post of id ${id.id}`, post);
      }
    }
  }, [id.id,posts]);

  return (
    <>
      <div className="flex h-full w-full flex-col justify-center items-center">
        <h1 className="text-xl font-bold">{displayPost?.title}</h1>
        <p className="text-lg font-medium  text-red-300">{displayPost?.body}</p>
      </div>
    </>
  );
}

export default PageDetails;
