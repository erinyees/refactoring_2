
let defaultOwner = { firstName : "마틴", lastName : "파울러" };

let spaceship = {};
spaceship.owner = getDefaultOwner();

setDefaultOwner({ firstName: "레베카", lastName : "파슨스" });

// 레코드 캡슐화하기(7.1장)
export function getDefaultOwner() { return new Person(defaultOwner); }
export function setDefaultOwner(arg) { defaultOwner = arg; }

class Person {
	constructor(data) {
		this._lastName = data.lastName;
		this._firstName = data.firstName;
	}
	
	get lastName() { return this._lastName; }
	get firstName() { return this._firstName; }
	// 다른 속성도 이런 식으로 처리한다
}

