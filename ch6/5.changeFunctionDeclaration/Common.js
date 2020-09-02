

// 샘플 데이터
function customerData1() {
	return {
		reservation : ["MA", "CT", "ME", "VT", "NH", "RI"],
		address : {
			state : []
		}
	};
}

function customerData2() {
	return {
		reservation : "YC",
		address : {
			state : "YC"
		}
	};
}


module.exports = { customerData1, customerData2 };
