import pool from "../../db/connectionDB.js";

const getPosts = async () => {
    const SQLquery = { text: "SELECT * FROM posts order by id" };
    try {
      const response = await pool.query(SQLquery);
      return response.rows;
    } catch (error) {
      console.log(error);
    }
  };
  
  const createPost = async ({ titulo, img, descripcion }) => {
    const SQLquery = {
      text: "INSERT INTO posts (titulo, img, descripcion, likes ) VALUES ($1, $2, $3, 0) RETURNING *",
      values: [ titulo, img, descripcion ],
    };
    try {
      const response = await pool.query(SQLquery);
      return response.rows;
    } catch (error) {
      console.log(error);
    }
  };
  
  const updatePost = async ( id ) => {
    const SQLquery = {
      text: "UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *",
      values: [id],
    };
    try {
      const response = await pool.query(SQLquery);
      return response.rows[0];
    
    } catch (error) {
      console.log(error);
    }
  }
  const deletePost = async ( id ) => {

    const SQLquery = {
      text: "DELETE FROM posts WHERE id = $1",
      values: [id],
    };
    
    try {
      const response = await pool.query(SQLquery);
      return response.rowCount;
    
    } catch (error) {
      console.log(error);
    }
  }
  
  export { getPosts, createPost, updatePost, deletePost };