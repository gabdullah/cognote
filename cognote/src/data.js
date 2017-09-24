module.exports = {
	getQuestions() {
		var returnVal = [];

		for(var i = 0; i < 40; i++) {
			console.log("HEY LISTEN");
			var question = 	{
				'max': '',
              'type': '',
              'word': '',
			  'detail': [],
			  'status': 'none'
          	}

          	returnVal.push(question);
		}

		return returnVal;
	}
}