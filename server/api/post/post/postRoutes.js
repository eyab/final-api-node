var router = require('express').Router();
var post = require('./postModel');




//Using param
router.param('post_id', function(req, res, next){
	post.findOne({'_id': req.params.post_id},
		function(err,thePost){
			if(p){	
				req.post_id = req.params.post_id;
				req.thePost = p;
				next();
			}else{		
				req.post_id = req.params.post_id;
				next();
			}
		})
});




router.route('/')
	.get(function(req,res){
		get(res);
	})
	.post(function(req,res){
		post.create({
			title: req.body.title,
			text: req.body.text,
			author: req.body.author,
			categories: req.body.categories
		},function(err, thePost){
			if(error) res.send(err);
			post.save(function(err){
				if(error) return res.send();
				res.json({message:"Added"});
			});
		})
	});





router.route('/:post_id')
	.get(function(req,res){
		res.json(req.p);
	})
	





	.put(function(req,res){
		post.findOne({'_id':req.post_id}, function(err,thePost){
			p.author = req.body.author;
			p.categories = req.body.categories;
			p.title = req.body.title;
			p.text = req.body.text;
			
		})
	});






function getP(res){
	post.find(function(err,posts){
		if(err) res.send(err);
		res.json(posts);
	})
};



module.exports = router;