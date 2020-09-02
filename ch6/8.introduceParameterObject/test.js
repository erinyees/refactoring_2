const { station, readingsOutsideRange, NumberRange, alerts } = require('./Fourth');
const chai = require('chai');

var assert = require('assert');

function operatingPlan() {
	return {
		temperatureFloor : 50,
		temperatureCeiling : 55
	};
}


describe('ch 6-8', function() {
	let asia;
	beforeEach(function() {
		var range = new NumberRange(operatingPlan().temperatureFloor, operatingPlan().temperatureCeiling);
		var alerts = readingsOutsideRange(station, operatingPlan().temperatureFloor, operatingPlan().temperatureCeiling, range);
	});
	
	// 부족물량 계산
	it('기본 테스트', function() {
		// 자바스크립트 '=>'는 어떻게 테스트해야 하는건가...
		// chai.expect(alerts.min).to.be.below(operatingPlan().temperatureFloor);
	});
});
