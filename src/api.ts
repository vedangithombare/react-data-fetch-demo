const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchPosts = async () => {
    return await fetch(`${BASE_URL}/posts`);
}

export const fetchPostById = async (postId: string) => {
    return await fetch(`${BASE_URL}/posts/${postId}`);
}
