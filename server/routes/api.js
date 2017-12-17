const express= require('express');
const router = express.Router();
const Todo = require('../models/todo');

//get all
router.get('/todos', function(req, res, next){
  Todo.find({}).then(function(result){
    res.send(result);
  }).catch(next);
});

router.post('/todos', function(req, res, next){
  console.log(req.body)
  Todo.create(req.body).then(function(Product){
    res.send(Product);
  }).catch(next)
});

router.put('/todos/:id', function(req, res, next){
  console.log("todos init", req.body)
    Todo.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Todo.findOne({_id: req.params.id}).then(function(ninja){
            res.send(ninja);
        });
    }).catch(next);
});

router.delete('/todos/:id', function(req, res, next){
  Todo.findByIdAndRemove({_id: req.params.id}).then(function(del){
    res.send(del);
  }).catch(next);
})


// can come in handy

router.put('/test_res', function(req, res, next){
 Comments.findOne(
    {
    comments: {$elemMatch: {_id: req.body.comment_id}}
  }
  ).then(function(data){
    var comment_id = req.body.comment_id;
    var response_id = req.body.response_id;
    var modify = req.body.modify;
    data.comments.forEach(function(elem){
      if(elem._id == comment_id){
        if(req.body.response_id === undefined){
          elem.vote = req.body.vote;
          elem.up = req.body.up;
          elem.down = req.body.down
        }else{
          elem.response.forEach(function(response){
            if(response._id == response_id){
              response.vote = req.body.vote
              response.up= req.body.up
              response.down=req.body.down
            }
          })
        }
      }
    })
    data.save()
    res.end()
  }).catch(next)

})
module.exports = router;
