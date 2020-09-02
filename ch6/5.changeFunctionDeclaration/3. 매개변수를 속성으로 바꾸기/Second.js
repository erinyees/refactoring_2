function inNewEngland(aCustomer) {
	// 코드를 변수로 추출
	const stateCode = aCustomer.address.state;
	return ["MA", "CT", "ME", "VT", "NH", "RI", "YC"].includes(stateCode);
}


