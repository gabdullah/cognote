module.exports = {
	getQuestions() {
		var returnVal = [];

		for(var i = 0; i < 400; i++) {
			// console.log("HEY LISTEN");
			var question = 	{
              'type': '',
              'word': '',
              'detail': []
          	}

          	returnVal.push(question);
		}

		return returnVal;
	}
}