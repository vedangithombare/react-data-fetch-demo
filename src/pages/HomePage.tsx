/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { Post_Per_Page } from "../constants/constants";
import { PostContext } from "../Contexts/PostContexts";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function HomePage() {
  // Used usedsearchparam hook for setting query parameters
  const [searchParam] = useSearchParams();
  const pageNo = searchParam.get("pageNo");
  const posts  = useContext(PostContext);

  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(Number(pageNo) || 1);
  const postsPerPage = Post_Per_Page;

  const endIndex = currentPage * postsPerPage;
  const indexOfFirstPost = endIndex - postsPerPage;

  const currentPosts = useMemo(() => {
    const currentPosts = posts.slice(indexOfFirstPost, endIndex);
    return currentPosts;
  }, [currentPage, posts, indexOfFirstPost, endIndex]);

  const numberOfPages = Math.ceil(posts.length / postsPerPage);

  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  const goToNextPage = () => {
    if (currentPage !== numberOfPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <div className="flex  w-full h-full p-2 bg-gray-300 justify-center gap-4 flex-wrap">
        {currentPosts.map((val: Post) => (
          <div
            key={`${val.id}`}
            onClick={() => navigate(`/posts/${val.id}`)}
            className="flex w-1/4 cursor-pointer bg-white rounded-lg h-70 flex-col p-2 items-center gap-2 justify-center"
          >
            <h1 className="text-xl font-bold">{val?.title}</h1>
            <p>{val?.body}</p>
          </div>
        ))}
      </div>

      <div>
        {" "}
        {currentPage} {numberOfPages}{" "}
      </div>
      <div className="flex flex-row justify-around">
        <button onClick={goToPrevPage} className="text-4xl cursor-pointer ">
          {"<"}
        </button>
        <button onClick={goToNextPage} className="text-4xl cursor-pointer ">
          {">"}
        </button>
      </div>
    </>
  );
}

export default HomePage;
