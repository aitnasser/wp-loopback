module.exports = function enableAuthentication(server) {

	var Post = server.models.Post;
	var wpRest = Post.app.dataSources.WordpressService;

	/**
	 * Redéfinition de la methode find()
	 *
	 */

	Post.find = function (filter, cb) {
		wpRest.find(filter, function (err, response) {
			if (filter)
				console.log('>filter =' + filter);
			if (err)
				throw err; //error making request
			if (response.error) {
				console.log('> response error: ' + response.error.stack);
			}
	
			cb(null, response);
			// verify via `curl localhost:3000/api/posts`

		});
	};

	/**
	 * Redéfinition de la methode findById()
	 *
	 */

	Post.findById = function (id,filter, cb) {
		wpRest.findById(id,filter, function (err, response) {
			if (filter)
				console.log('>filter =' + filter);
			if (err)
				throw err; //error making request
			if (response.error) {
				console.log('> response error: ' + response.error.stack);
			}

			cb(null, response);


		});
	};
	
	/**
	 * Redéfinition de la methode deleteById()
	 *
	 */

	Post.deleteById = function (id, cb) {
		var access_token="823bccb3cc9289dfce6089ca9dd0744edf16d3dd";
		wpRest.deleteById(id,access_token, function (err, response) {
	
			if (err)
				throw err; //error making request
			if (response.error) {
				console.log('> response error: ' + response.error.stack);
			}
			
			cb(null, response);
			

		});
	};	
	
	/**
	 * Redéfinition de la methode create()
	 *
	 */
  var data={
  "ID": "33",
  "title": "33",
  "type": "post",
  "status":"publish",
  "content": "contenu 33",
  "id": "45656"
};
	/*Post.create = function (data, cb) {
		var access_token="bef27c82acceb25709c8299d512cffca40b35fdd";	


		wpRest.create(data.ID,data.title,data.type, data.status,data.content,access_token, function (err, response) {
	
			if (err)
				console.log("err = "+err); //error making request
			if (response.error) {
				console.log('> response error: ' + response.error.stack);
			}
			
			console.log("response="+JSON.stringify(response));

			cb(null, response);			

		});
	};	*/
	

};