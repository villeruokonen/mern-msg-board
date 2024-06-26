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
  
  const response = await axios.post("api/posts/new", post,
    { headers: { "authorization": `Bearer ${localStorage.getItem("token")}` } });

  return response.data;
};

export const updatePost = async (id: string, title: string, content: string) => {
  const post = { title, content };

  const response = await axios.put(`api/posts/${id}`, post, 
    { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } });

  return response.data;
};

export const deletePost = async (id: string) => {
  const response = await axios.delete(`api/posts/${id}`,
    { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } });
  return response.data;
};