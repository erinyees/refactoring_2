// 단순한 Person 클래스
class Person() {
	get name() { return this._name; }
	set name(arg) { this._name = arg; }
	get telephoneNumber() { return '(${this.officeAreaCode}) ${this.officeNumber}';)
	set officeAreaCode() { return this._officeAreaCode; }
	set officeAreaCode(arg) { this._officeAreaCode = arg; }
	get officeNumber() { return this._officeNumber; }
	set officeNumber(arg) { this._officeNumber = arg; }
}

// 전화번호 관련 동작을 별도 클래스로 추출
// 빈 전화번호를 표현하는 TelephoneNumber 클래스
class TelephoneNumber {
	constructor() {
		this._telephoneNumber = new TelephoneNumber();
	}
	
	get officeAreaCode() { return this._officeAreaCode; }
	set officeAreaCode(arg) { this._officeAreaCode = arg; }
}