
let defaultOwner = { firstName : "마틴", lastName : "파울러" };

let spaceship = {};
spaceship.owner = getDefaultOwner();

// setDefaultOwner({ firstName: "레베카", lastName : "파슨스" });

// 마틴 파울러의 방법
// 게터가 데이터의 복제본을 반환하도록 수정
// 단점 : 원본 데이터를 변경하고자 할 때 사용할 수 없음
function getDefaultOwner() { return Object.assign({}, defaultOwner); }
function setDefaultOwner(arg) { defaultOwner = arg; }

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
	

	it('기본 캡슐화(필드 값 변경됨)', function() {
		owner2.owner.firstName = "레베카";
		chai.expect(owner1.owner.firstName).to.eql(getDefaultOwner().firstName);
	});
});
