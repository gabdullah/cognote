module.exports = {
	getQuestions(index) {
		var returnVal = [];

		for(var i = 0; i < index; i++) {
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