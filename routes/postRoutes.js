import express from 'express';
import { getAllPosts, 
         createPosts,
         updatePosts,
         deletePosts }  from '../src/controllers/postsController.js'

const router = express.Router();

router.get('/posts', getAllPosts)
router.post('/posts',createPosts)
router.put('/posts/like/:id', updatePosts)
router.delete('/posts/:id', deletePosts)

export default router;