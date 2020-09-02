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
function customerData() {
	return {
		customer: "CustomerA",
		orders : [{amount : 1000}, {amount : 2000}]
	}; 
}
