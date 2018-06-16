const express = require('express');
const router = express.Router();

const Show = require('../models/shows');
// const Ticket = require('../models/tickets');

// displaying list of show
router.get('/showlist', (req, res, next)=>{
    Show.find(function(err, shows){
        res.json(shows);
    })
});

router.get('/show/:_id', function(req, res) {
    Show.findById(req.params._id, function(err, show){
        res.json(show);
    });
});

// add show in a list
router.post('/show' ,(req, res, next)=>{
       let newShow = new Show({
        // show_id: req.body.show_id,
        show_title: req.body.show_title,
        show_year: req.body.show_year,
        show_description: req.body.show_description,
        show_poster: req.body.show_poster,
        show_trailer: req.body.show_trailer

       });

       newShow.save((err, show)=>{
            if(err)
            {
                res.json({msg: 'failed to add new show'});
            }else{
                res.json({msg: 'added successfully'});
            }
       });

});
//delete show 
router.delete('/show/:id', (req, res, next)=> {
    Show.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
});

//display particular show
// router.get('/show/:id',(req, res)=>{
//    const show = Show.find(c => c.id === parseInt(req.params.id));
// // //    if(!show) res.status(404).send.JSON.stringify('this show details is not available');
// //    res.json(show);
//         res.send(req.params.id);
//         res.send(show);
 
//     });


// router.get('/show/:_id', (req, res, next)=> {
//     Show.find(function(err, shows){
//         res.json(Show);
//     })
// });

module.exports = router;