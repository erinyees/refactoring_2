function inNewEngland(aCustomer) {
	return ["MA", "CT", "ME", "VT", "NH", "RI", "YC"].includes(aCustomer.address.state);
}

// 호출문
// filter 함수?가 어떻게 사용되는지 모르겠다
const newEnglanders = someCustomers.filter(c => inNewEngland(c));


