


const express= require('express');
const router=express.Router();

const commentControllers= require('../controllers/commentController')


router.route('/').get(commentControllers.comments)
router.route('/').post(commentControllers.saveComment)
router.route('/:id').get(commentControllers.comment)
router.route('/:id').put(commentControllers.editComment)
router.route('/:id').delete(commentControllers.deleteComment)




module.exports=router;
