/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
};

uploadFile: function (req, res) {
    req.file('avatar').upload({
      adapter: require('skipper-gridfs'),
      uri: 'mongodb://[communito:c0mmun!t0@]ds031812.mongolab.com:31812/communito'
    }, function (err, filesUploaded) {
      if (err) return res.negotiate(err);
      return res.ok();
    });
}

