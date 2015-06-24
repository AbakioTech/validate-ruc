(function (root) {
	
	'use strict';

	var isCommonJS = typeof module !== 'undefined' && module.exports;	
	var ruc = {validateRuc: validateRuc};

	if (isCommonJS) {
		
		module.exports = ruc;

	}
	else {

		root.ruc = ruc;

	}

	var multiply = [5, 4, 3, 2, 7, 6, 5, 4 ,3 , 2];

	var allowedStartDigits = ['10', '15', '17', '20'];

	function validateRuc (ruc) {

		if (!ruc || typeof ruc !== 'string' || ruc.length < 11) {

			return false;

		}

		if (validateTwoDigits(ruc)) {

			var tenDigits = getFirstTenDigits(ruc);

			var resultSum = multiplyDigitsAndSum(tenDigits);

			var resultDivision = divideAndTakeInteger(resultSum);

			var processRuc = calculateRuc(resultSum, resultDivision, getLastDigit(ruc));

			return processRuc;

		}
		else {

			return false;

		}

	}

	function validateTwoDigits (ruc) {

		var twoDigits = ruc.substring(0, 2);

		return allowedStartDigits.indexOf(twoDigits) > -1;

	}

	function getFirstTenDigits (ruc) {

		var tenDigits = [];

		for (var i = 0; i < 10; i++) {

			var currentDigit = ruc.substring(i, i + 1);

			tenDigits.push(currentDigit);

		}

		return tenDigits.map(Number);

	}

	function multiplyDigitsAndSum (tenDigits) {	

		var numbers = zip([tenDigits, multiply]);

		var sum = numbers.reduce(function (previousValue, actualValue) {

			return previousValue + (actualValue[0] * actualValue[1]);

		}, 0);

		return sum;

	}

	function divideAndTakeInteger (totalSumRucDigits) {

		return parseInt(totalSumRucDigits / 11);

	}

	function calculateRuc (totalSumRucDigits, divideNumber, lastRucDigit) {

		var result = 11 - (totalSumRucDigits - divideNumber * 11);

		if (result === 10) {

			result = 0;

		}

		if (result === 11) {

			result = 1;

		}

		return result === lastRucDigit;

	}

	function getLastDigit (ruc) {

		return parseInt(ruc.substring(ruc.length, ruc.length - 1));

	}

	function zip(arrays) {
    return arrays[0].map(function(_ , i){
        return arrays.map(function(array){return array[i]})
    });
	}


})(this);