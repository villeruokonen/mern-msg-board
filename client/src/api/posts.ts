import axios from "axios";

export const fetchPosts = async () => {

  const response = await fetch("api/posts/all");
  const data = await response.json();
  return data;
};

export const fetchPost = async (id: string) => {
  const { data } = await axios.get(`api/posts/${id}`);
  return data;
};

export const createPost = async (title: string, content: string) => {
  const post = { title, content };
  await axios.post("api/posts/new", post);
};

export const updatePost = async (id: string, post: any) => {
  const { data } = await axios.put(`api/posts/${id}`, post);
  return data;
};

export const deletePost = async (id: string) => {
  const { data } = await axios.delete(`api/posts/${id}`);
  return data;
};