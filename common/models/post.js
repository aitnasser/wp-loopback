module.exports = function (Post) {
	
    /**
	* disable not used Remote  Method
	*
	*/		
	//upsert() ->PUT -> /locations
	Post.disableRemoteMethod('upsert', true);
	
	//create() ->POST -> /locations
    Post.disableRemoteMethod('create', false);

	//deleteById() ->DELETE -> /locations/:id
	Post.disableRemoteMethod('deleteById', false);
	
	//exists() ->GET -> /locations/:id/exists
	Post.disableRemoteMethod('exists', true);
	
	//findById() ->GET -> /locations/:id
	Post.disableRemoteMethod('findById', false);
	
	//find() ->GET -> /locations
	Post.disableRemoteMethod('find', false);
	
	//findOne() ->GET -> /locations/findOne
	Post.disableRemoteMethod('findOne', true);
	
	//count() ->GET -> /locations/count
	Post.disableRemoteMethod('count', true);
	
	//prototype.updateAttributes() ->PUT -> /locations/:id
	Post.disableRemoteMethod('prototype.updateAttributes', true);
	
	
 
	Post.on('dataSourceAttached', function () {
		
			Post.create = function (data,access_token, cb) {
		var access_token="bef27c82acceb25709c8299d512cffca40b35fdd";	
  /*var ID= "44";
  var title= "44";
  var type= "post";
  var status="publish";
  var content= "contenu 33";
  var id= "45656";*/

		wpRest.create(data.ID,data.title,data.type, data.status,data.content,access_token, function (err, response) {
	
			if (err)
				console.log("err = "+err); //error making request
			if (response.error) {
				console.log('> response error: ' + response.error.stack);
			}
			
			console.log("response="+JSON.stringify(response));

			cb(null, response);			

		});
	};	
	
	
		
	}) 
};

