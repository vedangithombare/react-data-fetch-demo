/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

function HomePage() {
  let { pageNo } = useParams();
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(Number(pageNo) || 1);
  const postsPerPage = 20;

  if (Number(pageNo) !== currentPage) {
    pageNo = String(currentPage);
  }
  const endIndex = currentPage * postsPerPage;
  const indexOfFirstPost = endIndex - postsPerPage;

  const currentPosts = useMemo(() => {
    const currentPosts = posts.slice(indexOfFirstPost, endIndex);
    console.log("inside use memo:", currentPosts);
    return currentPosts;
  }, [currentPage, posts, indexOfFirstPost, endIndex]);

  const numberOfPages = Math.ceil(posts.length / postsPerPage);

  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  const goToNextPage = () => {
    if (currentPage !== numberOfPages) setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log("outside: ", currentPosts);

  async function fetchPosts() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!response.ok) {
        console.log("error fetching");
      }

      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="flex  w-full h-full p-2 bg-gray-300 justify-center gap-4 flex-wrap">
        {currentPosts.map((val) => (
          <div
            key={`${val.id}`}
            className="flex w-1/4 bg-white rounded-lg h-70 flex-col p-2 items-center gap-2 justify-center"
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
