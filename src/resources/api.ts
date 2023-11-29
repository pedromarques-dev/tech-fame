import { IPost } from "../interfaces/posts.interface";
import api from "../utils/posts.json";

export const getAllPosts = async () => {
    return api.posts;
}

export const createPost = async (post: IPost) => {
    api.posts.push(post);
}
