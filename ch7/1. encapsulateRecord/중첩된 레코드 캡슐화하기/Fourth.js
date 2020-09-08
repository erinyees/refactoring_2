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

class CustomerData {
	constructor(data) {
		this._data = data;
	}
}

function getCustomerData() { return customerData; }
function getRawDataOfCustomers() { return customerData._data; }
function setRawDataOfCustomers(arg) { customerData = new CustomerData(arg); }


// 쓰기 예 코드 복습
getRawDataOfCustomers()[customerID].usages[year][month] = amount;

// 현재 객체에는 이 값을 쓰는 세터가 없어서 데이터 구조 안으로 깊이 들어가서 값을 바꾸고 있다.
// 데이터 구조 안으로 들어가는 코드를 세터로 뽑아내는 작업부터 한다(함수 추출하기(6.1장))
// 새로운 쓰기 예
setUsage(customerID, year, month, amount);

function setUsage(customerID, year, month, amount) {
		getRawDataOfCustomers()[customerID].usages[year][month] = amount;
}

// 위의 함수를 고객 데이터 클래스로 옮긴다(함수 옮기기(8.1장))
getCustomerData().setUsage(customerID, year, month, amount);

class CustomerData {
	constructor(data) {
		this._data = data;
	}
	setUsage(customerID, year, month, amount) {
		this._data[customerID].usages[year][month] = amount;
	}
}
