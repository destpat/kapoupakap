// MODEL USER
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  user: String,
  password: String
});

var User = {

    model: mongoose.model('User', userSchema),

    create: function(req, res) {
		User.model.create({
      user: req.body.user,
      password: req.body.password
		}, function(){
			res.sendStatus(200);
		})
	},

	findAll: function(req, res) {
		User.model.find(function (err, data) {
			res.send(data);
		});
	},

	update: function(req, res){
		User.model.findByIdAndUpdate(req.params.id, {
      user: req.body.user,
			password: req.body.password
		}, function(){
			res.sendStatus(200);
		})
	},
  
	delete: function(req, res){
		User.model.findByIdAndRemove(req.params.id, function(){
			res.sendStatus(200);
		})
	}
}

module.exports = User;
