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


getRawDataOfCustomers()[customerID].usages[year][month] = amount;

function compareUsage (customerID, laterYear, month) {
	const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
	const earlier = getRawDataOfCustomers()[customerID].usages[laterYear - 1][month];
	return {laterAmount: later, change:later - earlier};
}

// 전체 데이터 구조를 표현하는 클래스를 정의하고, 이를 반환하는 함수를 새로 만든다.
class CustomerData {
	constructor(data) {
		this._data = data;
	}
}

function getCustomerData() { return customerData; }
function getRawDataOfCustomers() { return customerData._data; }
function setRawDataOfCustomers(arg) { customerData = new CustomerData(arg); }