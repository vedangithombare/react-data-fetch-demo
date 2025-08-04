import { createContext } from "react";
import type { Post } from "../App";

export const PostContext = createContext<Post[]>([]);
