// 변수를 약간 수정해줘야 하는 경우

function rating(aDriver) {
	return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
}

/*
// dvr 대신 aDriver로 변경
function moreThanFiveLateDeliveries(aDriver) {
	return dvr.numberOfLateDeliveries > 5;
}
*/
