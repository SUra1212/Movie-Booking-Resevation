const express = require('express');
const Booking = require('../../models/Booking');

const router = express.Router();

//save posts

router.post('/booking/save',(req,res)=>{

    let newPost = new Booking(req.body);   

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
router.get('/booking',(req,res) =>{
    Booking.find().exec((err,posts) =>{
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
router.get("/booking/:id",(req,res) =>{

    let postId = req.params.id;
    
    Booking.findById(postId,(err,post) =>{
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
router.put('/booking/update/:id',(req,res)=>{
    Booking.findByIdAndUpdate(
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
router.delete('/booking/delete/:id',(req,res) =>{
    Booking.findByIdAndRemove(req.params.id).exec((err,deletedpost) =>{
        if(err) return res.status(400).json({
            message:"Delete Unsuccesfull",err
        });
        return res.json({
            message:"Delete Successfull",deletedpost
        }); 
    });
});

module.exports = router;
