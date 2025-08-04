import { createContext } from "react";
import type { Post } from "../types/postTypes";

export const PostContext = createContext<Post[]>([]);
