class Person() {
	get name() { return this._name; }
	set name(arg) { this._name = arg; }
	get telephoneNumber() { return '(${this.officeAreaCode}) ${this.officeNumber}';)
	set officeAreaCode() { return this._telephoneNumber._officeAreaCode; }
	set officeAreaCode(arg) { this._telephoneNumber._officeAreaCode = arg; }
	
	// 다른 필드들도 옮긴다
	get officeNumber() { return this._officeNumber.officeNumber; }
	set officeNumber(arg) { this._officeNumber.officeNumber = arg; }
}

class TelephoneNumber {
	constructor() {
		this._telephoneNumber = new TelephoneNumber();
	}
	
	get officeAreaCode() { return this._officeAreaCode; }
	set officeAreaCode(arg) { this._officeAreaCode = arg; }
	
	get officeNumber() { return this._officeNumber; }
	set officeNumber(arg) { this._officeNumber = arg; }
} 