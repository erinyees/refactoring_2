"1920" : {
	name: "마틴 파울러",
	id: "1920",
	usages: {
		"2016": {
			"1" : 50,
			"2" : 55,
			"3" : 40,
			"4" : 60,
			"5" : 70,
			"6" : 35,
			"7" : 55,
			"8" : 55,
			"9" : 50,
			"10" : 45,
			"11" : 50,
			"12" : 70
		},
		"2015" : {
			"1" : 70,
			"2" : 63,
			"3" : 46,
			"4" : 18,
			"5" : 65,
			"6" : 55,
			"7" : 43,
			"8" : 41,
			"9" : 59,
			"10" : 68,
			"11" : 63,
			"12" : 70
		}
	},
	"38673": {
		name: "닐 포드",
		id: "38673",
		usages: { 
			"2016": {
				"1" : 50,
				"2" : 55,
				"3" : 40,
				"4" : 60,
				"5" : 70,
				"6" : 35,
				"7" : 55,
				"8" : 55,
				"9" : 50,
				"10" : 45,
				"11" : 50,
				"12" : 70
			}
		}
	}
}


function compareUsage (customerID, laterYear, month) {
	const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
	const earlier = getRawDataOfCustomers()[customerID].usages[laterYear - 1][month];
	return {laterAmount: later, change:later - earlier};
}

function getCustomerData() { return customerData; }
function getRawDataOfCustomers() { return customerData._data; }
function setRawDataOfCustomers(arg) { customerData = new CustomerData(arg); }


getRawDataOfCustomers()[customerID].usages[year][month] = amount;

setUsage(customerID, year, month, amount);

function setUsage(customerID, year, month, amount) {
		getRawDataOfCustomers()[customerID].usages[year][month] = amount;
}

getCustomerData().setUsage(customerID, year, month, amount);

class CustomerData {
	constructor(data) {
		this._data = data;
	}
	setUsage(customerID, year, month, amount) {
		this._data[customerID].usages[year][month] = amount;
	}
}

// 가져다 쓰는 부분을 수정한게 빠진게 없는지 확인을 해야 한다.
// 방법 1. getRawDataOfCustomers()에서 데이터를 깊은 복사하여 반환하는 방법
class CustomerData {
	constructor(data) {
		this._data = data;
	}
	setUsage(customerID, year, month, amount) {
		this._data[customerID].usages[year][month] = amount;
	}
	
	get rawData() {
		return _.cloneDeep(this._data);
	}
}

// 읽기 작업을 하는 코드 확인 방법
// 방법 1. 세터 때와 같이 읽는 코드를 모두 독립 함수로 추출한 다음 고객 데이터 클래스로 옮긴다.
class CustomerData {
	constructor(data) {
		this._data = data;
	}
	setUsage(customerID, year, month, amount) {
		this._data[customerID].usages[year][month] = amount;
	}
	
	get rawData() {
		return _.cloneDeep(this._data);
	}
	
	usage(customerID, year, month) {
		return this._data[customerID].usages[year][month];
	}
}

function compareUsage (customerID, laterYear, month) {
	const later = getRawDataOfCustomers().usages(customerID, laterYear, month);
	const earlier = getRawDataOfCustomers().usages(customerID, laterYear - 1, month);
	return {laterAmount: later, change:later - earlier};
}

// 방법 2. 클라이언트가 데이터 구조를 요청할 때 실제 데이터를 제공하는 방법
// 단, 클라이언트가 데이터를 직접 수정하지 못하게 막을 방법이 없어서 '모든 쓰기를 함수 안에서 처리한다'는 캡슐화의 핵심 원칙이 깨진다.