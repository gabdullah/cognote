module.exports = {
	getQuestions() {
		var returnVal = [];

		for(var i = 0; i < 4; i++) {
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