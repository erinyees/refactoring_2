function inNewEngland(aCustomer) {
	const stateCode = aCustomer.address.state;
	return xxNEWinNewEngland(stateCode);
}

// 코드를 함수로 추출
function xxNEWinNewEngland(stateCode) {
	return ["MA", "CT", "ME", "VT", "NH", "RI", "YC"].includes(stateCode);
}



