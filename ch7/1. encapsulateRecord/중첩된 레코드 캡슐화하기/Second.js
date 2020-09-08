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

// 중첩 정도가 심할수록 읽거나 쓸 때 데이터 구조 안으로 더 깊숙히 들어가야 한다.
// 변수 캡슐화(6.6장)부터 시작한다.

function getRawDataOfCustomers() { return customerData; }
function setRawDataOfCustomers(arg) { customerData = arg; }

// 쓰기 예
getRawDataOfCustomers()[customerID].usages[year][month] = amount;

// 읽기 예
function compareUsage (customerID, laterYear, month) {
	const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
	const earlier = getRawDataOfCustomers()[customerID].usages[laterYear - 1][month];
	return {laterAmount: later, change:later - earlier};
}

