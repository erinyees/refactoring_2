function rating(aDriver) {
	return aDriver.numberOfLateDeliveries ? 2 : 1;
}

/*
// 함수대신 인라인 코드로 치환
function moreThanFiveLateDeliveries(aDriver) {
	return aDriver.numberOfLateDeliveries > 5;
}
*/
