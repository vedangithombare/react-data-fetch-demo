import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../apis/postApi";
import type { Post } from "../types/postTypes";

function PageDetails() {
  const { id = "" } = useParams();
  const [getPost, setPost] = useState<Post | undefined>();

  async function fetchPost(id: string) {
    try {
      const response = await fetchPostById(id);
      const post = await response.json();
      setPost(post);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (id !== "") {
      fetchPost(id);
    }
  }, [id]);

  return (
    <>
      <div className="flex h-full w-full flex-col justify-center items-center">
        <h1 className="text-xl font-bold">{getPost?.title}</h1>
        <p className="text-lg font-medium  text-red-300">{getPost?.body}</p>
      </div>
    </>
  );
}

export default PageDetails;
