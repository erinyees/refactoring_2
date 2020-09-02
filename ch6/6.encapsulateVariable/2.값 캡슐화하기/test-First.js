
let defaultOwner = { firstName : "마틴", lastName : "파울러" };

let spaceship = {};
spaceship.owner = getDefaultOwner();

// setDefaultOwner({ firstName: "레베카", lastName : "파슨스" });

function getDefaultOwner() { return defaultOwner; }
function setDefaultOwner(arg) { defaultOwner = arg; }

// 위의 구조로 코드를 캡슐화하면 접근이나 구조 자체를 다시 대입하는 행위는 제어 가능
// 필드 값을 변경하는 일은 제어할 수 없다
const chai = require('chai');
describe('ch6-6', function() {
	let owner1 = {};
	let owner2 = {};
	beforeEach(function() {
		owner1.owner = getDefaultOwner();
		owner2.owner = getDefaultOwner();
	});
	
	it('초기 데이터 비교', function() {
		chai.expect(owner1.owner.firstName).to.eql(getDefaultOwner().firstName);
	});
	
	// 값이 다를 것이라 기대하지만 실제로는 값이 변경되는 문제점
	it('기본 캡슐화(필드 값 변경됨)', function() {
		owner2.owner.firstName = "레베카";
		chai.expect(owner1.owner.firstName).to.not.eql(getDefaultOwner().firstName);
	});
});
