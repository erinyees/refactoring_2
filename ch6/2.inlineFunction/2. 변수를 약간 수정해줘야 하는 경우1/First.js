// 변수를 약간 수정해줘야 하는 경우

function rating(aDriver) {
	return moreThanFiveLateDeliveries(aDriver) ? 2 : 1;
}

// 매개변수가 aDriver가 아니라 dvr이다
function moreThanFiveLateDeliveries(dvr) {
	return dvr.numberOfLateDeliveries > 5;
}
