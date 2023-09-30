const express= require('express');
const router=express.Router();

const blogController= require("../controllers/blogController")


router.route('/').get(blogController.blogs)
router.route('/').post(blogController.saveBlog)

router.route('/:id').get(blogController.blog)
router.route('/:id').put(blogController.editBlog)
router.route('/:id').delete(blogController.deleteBlog)


module.exports=router;