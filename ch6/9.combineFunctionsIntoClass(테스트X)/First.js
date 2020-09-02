// 측정값(reading)
reading = { customer: "ivan", quantity: 10, month: 5, year: 2017};


// 클라이언트1
const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

// 클라이언트2
const aReading = acquireReading();
const base = (baseRate(aReading.month, aReading.year) * aReading.quantity);
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

// 클라이언트3
const aReading = acquireReading();
const basicChargeAmount = calculateBaseCharge(aReading);

function calculateBaseCharge(aReading) {
	return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

/////////////////////////////////////////////////////////////////////////////

// 1. 레코드를 클래스로 변환하기 위해 캡슐화
class Reading {
	constructor(data) {
		this._customer = data.customer;
		this._quantity = data.quantity;
		this._month = data.month;
		this._year = data.year;
	}
	get customer() { return this._customer; }
	get quantity() { return this._quantity; }
	get month() { return this._month; }
	get year() { return this._year; }
}

/////////////////////////////////////////////////////////////////////////////

// 2. calculateBaseCharge()를 옮김

// 2-1. 새 클래스를 사용하기 위해 데이터를 얻은 뒤 객체로 만듬
// 클라이언트 3
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const basicChargeAmount = calculateBaseCharge(aReading);

// 2-2. calculateBaseCharge()를 새로 만든 클래스로 옮기기(-> 함수 옮기기(8.1장))
class Reading {
	constructor(data) {
		this._customer = data.customer;
		this._quantity = data.quantity;
		this._month = data.month;
		this._year = data.year;
	}
	get customer() { return this._customer; }
	get quantity() { return this._quantity; }
	get month() { return this._month; }
	get year() { return this._year; }
	get calculateBaseCharge() {
		return baseRate(this.month, this.year) * this.quantity;
	}
}

// 클라이언트 3
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const basicChargeAmount = aReading.calculateBaseCharge;

// 함수 이름 바꾸기

// Reading 클래스
get baseCharge() {
	return baseRate(this.month, this.year) * this.quantity;
}

// 클라이언트 3
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const basicChargeAmount = aReading.baseCharge; // 단일 접근 원칙(Uniform Access Principle)


/////////////////////////////////////////////////////////////////////////////

// 3. 세금을 부과할 소비량을 계산하는 코드를 함수로 추출(->6.4장)

function taxableChargeFn(aReading) {
	return Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));
}

// 클라이언트 2
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const taxableCharge = taxableChargeFn(aReading);

// taxableChargeFn를 Reading 클래스로 옮긴다
class Reading {
	constructor(data) {
		this._customer = data.customer;
		this._quantity = data.quantity;
		this._month = data.month;
		this._year = data.year;
	}
	get customer() { return this._customer; }
	get quantity() { return this._quantity; }
	get month() { return this._month; }
	get year() { return this._year; }
	get calculateBaseCharge() {
		return baseRate(this.month, this.year) * this.quantity;
	}
	get taxableChargeFn() {
		return Math.max(0, this.baseCharge - taxThreshold(this.year));
	}
}

// 클라이언트2
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const taxableCharge = aReading.taxableCharge;

