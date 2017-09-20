
import * as express from "express";
import {getAllPosts, getPostById, createPost, updatePost, deletePost} from "../controllers/PostController";


export default (app) => {

    const apiRoutes = express.Router();
    const postRoutes = express.Router();

    /*************************
     === post routes
     *************************/
    
    // append postRoutes to apiRoutes
    apiRoutes.use('/posts',postRoutes);

    // get all posts
    postRoutes.get('/', getAllPosts);

    // get post by id
    postRoutes.get('/:id',getPostById);

    // create post
    postRoutes.post('/',createPost);

    // update post by id
    postRoutes.put('/:id',updatePost);

    // delete post by id
    postRoutes.delete('/:id',deletePost);
    
    /*************************
     === append route
     *************************/
    app.use('/api',apiRoutes);
}