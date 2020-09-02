function inNewEngland(aCustomer) {
	// const stateCode = aCustomer.address.state;
	// 변수 인라인하기
	return xxNEWinNewEngland(aCustomer.address.state);
}

function xxNEWinNewEngland(stateCode) {
	return ["MA", "CT", "ME", "VT", "NH", "RI", "YC"].includes(stateCode);
}
