import HomePage from "./pages/HomePage";
import PageDetails from "./pages/PageDetails";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

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

  useEffect(() => {
    fetchPosts();
  }, []);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage posts={posts} />} />
        <Route path="/posts/:id" element={<PageDetails posts={posts} />} />
      </Routes>
    </Router>
  );
}

export default App;
