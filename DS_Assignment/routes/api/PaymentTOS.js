const express = require('express');
const PaymentTOS = require('../../models/PaymentTOS');

const router = express.Router();

//save posts

router.post('/paymentTo/save', (req, res) => {

    let newPost = new PaymentTOS(req.body);

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
router.get('/paymentTo', (req, res) => {
    PaymentTOS.find().exec((err, posts) => {
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
router.get("/paymentTo/:id", (req, res) => {

    let postId = req.params.id;

    PaymentTOS.findById(postId, (err, post) => {
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
router.put('/paymentTo/update/:id', (req, res) => {
    PaymentTOS.findByIdAndUpdate(
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
router.delete('/paymentTo/delete/:id', (req, res) => {
    PaymentTOS.findByIdAndRemove(req.params.id).exec((err, deletedpost) => {
        if (err) return res.status(400).json({
            message: "Delete Unsuccesfull", err
        });
        return res.json({
            message: "Delete Successfull", deletedpost
        });
    });
});

module.exports = router;
