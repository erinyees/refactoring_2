class Clock {
	constructor(year, month, date) {
		this.year = year;
		this.month = month;
		this.date = date;
	}
	
	getFullYear() {
		return this.year;
	}
	
	getMonth() {
		return this.month;
	}
	
	getDate() {
		return this.date;
	}
	
	static today = new Clock(2020, 08, 31);
}

// 샘플 데이터
function orderData() {
	return {
		quantity : 100,
		itemPrice : 1000,
		basePrice : 3000
	};
}
