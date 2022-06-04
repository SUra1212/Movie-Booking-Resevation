const express = require('express');
const MovieTOS = require('../../models/MovieTOS');

const router = express.Router();

//save posts

router.post('/movieTo/save',(req,res)=>{

    let newPost = new MovieTOS(req.body);   

    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err 
            });
        }
 
        return res.status(200).json({
            success:"Data Saved Successfully"
        });
    });
});


//get posts
router.get('/movieTo',(req,res) =>{
    MovieTOS.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});


//get a specific post
router.get("/movieTo/:id",(req,res) =>{

    let postId = req.params.id;
    
    MovieTOS.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            post
        });

    });

});


//update posts
router.put('/movieTo/update/:id',(req,res)=>{
    MovieTOS.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});

            }
            return res.status(200).json({
                success:"Updated Succesfully"
            });
        }
    );
});


//delete post
router.delete('/movieTo/delete/:id',(req,res) =>{
    MovieTOS.findByIdAndRemove(req.params.id).exec((err,deletedpost) =>{
        if(err) return res.status(400).json({
            message:"Delete Unsuccesfull",err
        });
        return res.json({
            message:"Delete Successfull",deletedpost
        }); 
    });
});

module.exports = router;
