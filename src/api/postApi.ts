import { BASE_URL } from "../constants/constants";

export const fetchPosts = async () => {
  const posts = await fetch(`${BASE_URL}/posts`);
  return posts;
};

export const fetchPostById = async (postId: string) => {
  const post = await fetch(`${BASE_URL}/posts/${postId}`);

  return post;
};
