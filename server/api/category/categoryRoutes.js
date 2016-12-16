var router = require('express').Router();
var category = require('./categoryModel');


router.param('category_id', function(req, res, next){
	category.findOne({'_id': req.params.category_id},
		function(err,c){
			if(c){	
				req.category_id = req.params.category_id;
				req.c = c;
				next();
			}else{		
				req.category_id = req.params.category_id;
				next();
			}
		})
});

router.route('/')
	.get(function(req,res){
		getc(res);
	})


	.post(function(req,res){
		category.create({
			name: req.body.name,
		},function(error, c){
			if(error) res.send(error);
			category.save(function(error){
				if(error) return res.send();
				res.json({message:"Added"});
			});
		})
	});



router.route('/:category_id')
	.get(function(req,res){
		res.json(req.c);
	})




	.put(function(req,res){
		post.findOne({'_id':req.category_id}, function(err,theCate){
			c.name = req.body.name;
		})
	});





function getC(res){
	category.find(function(err,categories){
		if(error) res.send(error);
		res.json(categories);
	})
};


module.exports = router;