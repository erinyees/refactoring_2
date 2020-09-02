class Person {
	constructor(data) {
		this._lastName = data.lastName;
		this._firstName = data.firstName;
	}
	
	get lastName() { return this._lastName; }
	get firstName() { return this._firstName; }
	// 다른 속성도 이런 식으로 처리한다
}

let defaultOwner = { firstName : "마틴", lastName : "파울러" };

let spaceship = {};
spaceship.owner = defaultOwner;

setDefaultOwner({ firstName: "레베카", lastName : "파슨스" });

// 레코드 캡슐화하기(7.1장)
function getDefaultOwner() { return new Person(defaultOwner); }
function setDefaultOwner(arg) { defaultOwner = arg; }



const chai = require('chai');
describe('ch6-6', function() {
	let defaultOwnerTestValue;
	let spaceship = {};
	beforeEach(function() {
		spaceship.owner = defaultOwner;
	});
	
	it('초기 데이터 비교', function() {
		chai.expect(spaceship.owner).to.eql(getDefaultOwner());
	});
	
	it('캡슐화2(필드 값 변경됨)', function() {
		setDefaultOwner({ firstName: "레베카", lastName : "파슨스" });
		chai.expect(spaceship.owner).to.eql(getDefaultOwner());
	});
});

