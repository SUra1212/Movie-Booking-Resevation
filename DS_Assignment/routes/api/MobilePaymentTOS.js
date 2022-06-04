const express = require('express');
const MobilePaymentTOS = require('../../models/MobilePaymentTOS');

const router = express.Router();

//save posts

router.post('/mobilepaymentTo/save', (req, res) => {

    let newPost = new MobilePaymentTOS(req.body);

    newPost.save((err) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }

        return res.status(200).json({
            success: "Data Saved Successfully"
        });
    });
});


//get posts
router.get('/mobilepaymentTo', (req, res) => {
    MobilePaymentTOS.find().exec((err, posts) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: true,
            existingPosts: posts
        });
    });
});


//get a specific post
router.get("/mobilepaymentTo/:id", (req, res) => {

    let postId = req.params.id;

    MobilePaymentTOS.findById(postId, (err, post) => {
        if (err) {
            return res.status(400).json({ success: false, err });
        }

        return res.status(200).json({
            success: true,
            post
        });

    });

});


//update posts
router.put('/mobilepaymentTo/update/:id', (req, res) => {
    MobilePaymentTOS.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        (err, post) => {
            if (err) {
                return res.status(400).json({ error: err });

            }
            return res.status(200).json({
                success: "Updated Succesfully"
            });
        }
    );
});


//delete post
router.delete('/mobilepaymentTo/delete/:id', (req, res) => {
    MobilePaymentTOS.findByIdAndRemove(req.params.id).exec((err, deletedpost) => {
        if (err) return res.status(400).json({
            message: "Delete Unsuccesfull", err
        });
        return res.json({
            message: "Delete Successfull", deletedpost
        });
    });
});

module.exports = router;
