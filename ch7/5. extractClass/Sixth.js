class Person() {
	get name() { return this._name; }
	set name(arg) { this._name = arg; }
	
	get telephoneNumber() { return '(${this._telephoneNumber.telephoneNumber}';)
	set officeAreaCode() { return this._telephoneNumber.areaCode; }
	set officeAreaCode(arg) { this._telephoneNumber.areaCode = arg; }
	get officeNumber() { return this._officeNumber.number; }
	set officeNumber(arg) { this._officeNumber.number = arg; }
}

class TelephoneNumber {
	constructor() {
		this._telephoneNumber = new TelephoneNumber();
	}
	
	
	// 메서드들의 이름을 적절하게 바꿔준다(6.5장 함수 선언 바꾸기)
	get areaCode() { return this._areaCode; }
	set areaCode(arg) { this._areaCode = arg; }	
	get number() { return this._number; }
	set number(arg) { this._number = arg; }
	
	get telephoneNumber() { return '(${this.officeAreaCode}) ${this.officeNumber}';)
} 