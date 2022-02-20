import express from 'express';
import BlogController from '../controllers/BlogController';

const BlogControllerInstance =  new BlogController();

const router = express.Router();

router.get('/', BlogControllerInstance.getBlogsList );

router.get('/:blogName', BlogControllerInstance.getBlog );

export default router;