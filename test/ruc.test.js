var assert = require('assert'),
		ruc = require('../ruc');

describe('Ruc Validation', function () {

	var validRucNumber = '20292005483'
			validRucNumber2 = '10441348521',
			validRucNumber3 = '20565449843',
			validRucNumber3 = '20554133470',
			validRucNumber4 = '10082226341';

	it('Should return false if ruc is not present', function () {
		
		assert.equal(false, ruc.validateRuc());

	});

	it('should return false if ruc does not have 11 digits', function () {

		assert.equal(false, ruc.validateRuc('2029200548'));

	});

	it('should return false if ruc does not start with 10, 15, 17, 20', function () {

		assert.equal(false, ruc.validateRuc('11292005483'));
		assert.equal(false, ruc.validateRuc('16292005483'));
		assert.equal(false, ruc.validateRuc('18292005483'));
		assert.equal(false, ruc.validateRuc('21292005483'));

	});

	it('should return true if ruc meet the whole criteria', function () {

		assert.equal(true, ruc.validateRuc(validRucNumber));
		assert.equal(true, ruc.validateRuc(validRucNumber2));
		assert.equal(true, ruc.validateRuc(validRucNumber3));
		assert.equal(true, ruc.validateRuc(validRucNumber4));

	});

});