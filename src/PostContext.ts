import { createContext } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export const PostContext = createContext<Post[]>([]);
