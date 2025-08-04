import HomePage from "./pages/HomePage";
import PageDetails from "./pages/PageDetails";
import { PostContext } from "./contexts/PostContexts";
import { fetchPosts } from "./api/postApi";
import type { Post } from "./types/postTypes";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { useEffect, useState } from "react";



function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  async function fetchAllPosts() {
    try {
      const response = await fetchPosts();

      if (!response.ok) {
        console.log("error fetching");
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAllPosts();
  }, []);

  

  return (
    <PostContext.Provider value={posts}>
      <Router>
        <Routes>
          <Route path="/react-task/" element={<HomePage />} />
          <Route path="/posts/:id" element={<PageDetails />} />
        </Routes>
      </Router>
    </PostContext.Provider>
  );
}

export default App;
