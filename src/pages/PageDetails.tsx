import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PageDetails({ posts }) {
  const id = useParams();
  const [displayPost, setdisplayPost] = useState();

  useEffect(() => {
    for (const post of posts) {
      if (post.id == id.id) {
        setdisplayPost(post);
        console.log(`displaying post of id ${id.id}`, post);
      }
    }
  }, [displayPost, id.id]);

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
