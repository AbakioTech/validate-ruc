var _ = require('lodash');

var multiply = [5, 4, 3, 2, 7, 6, 5, 4 ,3 , 2];

var allowedStartDigits = ['10', '15', '17', '20'];

module.exports = {

	validateRuc: validateRuc

};

function validateRuc (ruc) {

	var errorMessage = 'Ruc Inválido';

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

		tenDigits.push(parseInt(currentDigit));

	}

	return tenDigits;

}

function multiplyDigitsAndSum (tenDigits) {	

	var numbers = _.zip(tenDigits, multiply);

	var s =  _.sum(numbers, function (number) {		

		return number[0] * number[1];

	});

	return s;
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

		result = 1

	}

	return result === lastRucDigit;

}

function getLastDigit (ruc) {

	return parseInt(ruc.substring(ruc.length, ruc.length - 1));

}