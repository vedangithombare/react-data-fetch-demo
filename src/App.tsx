import HomePage from "./pages/HomePage";
import PageDetails from "./pages/PageDetails";
import { postContext } from "./Context";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

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

  function PageDetailsWrapper() {
    const id = useParams();
    const post = useMemo(
      () => posts.find((p) => p.id === Number(id.id)),
      [posts, id.id]
    );

    return post ? <PageDetails post={post} /> : <p>Loading post...</p>;
  }

  return (
    <postContext.Provider value={posts}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:id" element={<PageDetailsWrapper />} />
        </Routes>
      </Router>
    </postContext.Provider>
  );
}

export default App;
