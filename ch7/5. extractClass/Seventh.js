class Person() {
	get name() { return this._name; }
	set name(arg) { this._name = arg; }
	
	get telephoneNumber() { return '(${this._telephoneNumber.telephoneNumber}';)
	set officeAreaCode() { return this._telephoneNumber.areaCode; }
	set officeAreaCode(arg) { this._telephoneNumber.areaCode = arg; }
	get officeNumber() { return this._officeNumber.number; }
	set officeNumber(arg) { this._officeNumber.number = arg; }
	
	// 전화번호를 사람이 읽기 좋은 포맷으로 출력하는 역할도 telephoneNumber클래스로 옮긴다.
	toString() { return this._telephoneNumber.toString();}
}

class TelephoneNumber {
	constructor() {
		this._telephoneNumber = new TelephoneNumber();
	}
	
	
	get areaCode() { return this._areaCode; }
	set areaCode(arg) { this._areaCode = arg; }	
	get number() { return this._number; }
	set number(arg) { this._number = arg; }
	
	get telephoneNumber() { return '(${this.officeAreaCode}) ${this.officeNumber}';)
	toString() { return '${this.areaCode}) ${this.number}';} 
}