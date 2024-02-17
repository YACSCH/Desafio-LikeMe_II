import { getPosts, 
         createPost,
         updatePost,
         deletePost } from "../models/postModel.js";

const getAllPosts = async (req, res) => {
  try {
    const posts = await getPosts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la solicitud" });
    console.error("Error al procesar la solicitud:", error);
  }
};
const createPosts = async (req, res) => {
  try {
    const post = req.body;
    console.log(post)
    const newPost = await createPost(post);
    res.status(201).json({ post: newPost });
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la solicitud" });
    console.error("Error al procesar la solicitud:", error);
  }
};
const updatePosts = async (req, res) => {
  try {
    const { id } = req.params;
    const like_update = await updatePost(id);
    res.status(200).json({ post: like_update });
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la solicitud" });
    console.error("Error al procesar la solicitud:", error);
  }
};
const deletePosts = async (req, res) => {
  try {
    const { id } = req.params;
    const delete_post = await deletePost(id);
    if (delete_post === 0) {
      return res.status(404).json({ message: "No existe el registro" });
    }
    res.status(200).json({ message: "registro eliminado con exito" });
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la solicitud" });
    console.error("Error al procesar la solicitud:", error);
  }
};

export { getAllPosts, createPosts, updatePosts, deletePosts };
