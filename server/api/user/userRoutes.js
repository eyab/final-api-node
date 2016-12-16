var router = require('express').Router();
var user = require('./userModel');

router.param('user_id', function (req,res,next){
	user.findOne({'_id': req.params.user_id}, 
		function(err, u){
			if(u){
				req.user_id = req.params.user_id;
				req.theUser = theUser;
				next();
			}else{
				req.user_id = req.params.user_id
				next();
			}
		}
	);
});



router.route('/')
  .get(function(req, res){
    getUsers(res);
  })
  .post(function(req, res){
	
	
	user.create({username: req.body.username, address: req.body.address}, function(err,user){
		if(err) res.send(err);
		user.save(function(err){
			if(err) return res.send();
			res.json({message: 'Added!'});
		});
  	})
  })
  .delete(function(req,res,next){
	var err = new Error('Something Broke');
	next(err);
  })
  .put(function(req,res,next){
	var err = new Error('Something Broke');
	next(err);
  });

router.route('/:user_id')
	.get(function(req,res){
		res.json(req.u);
	})	
	.put(function(req,res){
		user.findOne({'_id': req.user_id}, function (err, theUser){
			u.username = req.body.username;
			u.address = req.body.address;
		})
		getUsers(res);
	});

function getUsers(res){
	user.find(function(err,users){
		if(err) res.send(err);
		res.json(users);
	});
};



module.exports = router;