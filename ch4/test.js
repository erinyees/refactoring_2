

// var assert = require('assert');
// describe('Array', function () {
//   describe('#indexOf()', function () {
//     it('should return -1 when the value is not present', function () {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });

// 다른 파일에 있는걸 불러오려면 
const { Province, sampleProvinceData } = require('./Province');
const chai = require('chai');

var assert = require('assert');
describe('province', function() {
	// 이렇게 하면 안된다.
	// 객체가 공유되므로 테스트 작성 순서에 따라 결과가 달라진다.
	// const asia = new Province(sampleProvinceData());
	
	let asia;
	beforeEach(function() {
		asia = new Province(sampleProvinceData());
	});
	
	// 부족물량 계산
	it('shortfall', function() {
		// assert.equal(asia.shortfall, 5); // 검증
		chai.expect(asia.shortfall).equal(5);
	});
		
	// 총 수익 계산
	it('profit', function() {
		chai.expect(asia.profit).equal(230);
	});
	
	///////////////////////////////////////////////////////
	
	// 픽스처 수정하기
	it('change production', function() {
		asia.producers[0].production = 20;
		chai.expect(asia.shortfall).equal(-6);
		chai.expect(asia.profit).equal(292);
	});
	
	// 수요가 없다.
	it ('zero demand', function() {
		asia.demand = 0;
		chai.expect(asia.shortfall).equal(-25);
		chai.expect(asia.profit).equal(0);
	});
	
	// 수요가 마이너스다
	it ('negative demand', function() {
		asia.demand = -1;
		chai.expect(asia.shortfall).equal(-26);
		chai.expect(asia.profit).equal(-10);
	});
	
	// 수요 입력란이 비어 있다.
	it ('empty string demand', function() {
		asia.demand = "";
		chai.expect(asia.shortfall).NaN;
		chai.expect(asia.profit).NaN;
	});
});

// 생산자가 없다
describe('no producers', function() {
	let noProducers;
	beforeEach(function() {
		const data = {
			name: "No producers",
			producers: [],
			demand: 30,
			price: 20
		};
		noProducers = new Province(data);
	});
	
	it ('shortfall', function() {
		chai.expect(noProducers.shortfall).equal(30);
	});
	
	it ('profit', function() {
		chai.expect(noProducers.profit).equal(0);
	});
});

// 생산자 수 필드에 문자열을 대입한다.
describe('string for producers', function(){
	it('', function() {
		const data = {
			name: "String producers",
			producers: [],
			demand: 30,
			price: 20
		};
		const prov = new Province(data);
		// chai.expect(prov.shortfall).equal(0); // 실패
		chai.expect(prov.shortfall).equal(30);
	});
});

