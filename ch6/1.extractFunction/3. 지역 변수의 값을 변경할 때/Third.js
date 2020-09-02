/*
지역 변수의 값을 변경할 때
*/

function printOwing(invoice) {
	printBanner();
	
	let outstanding = calculateOutstanding(invoice);
	
	// 마감일 설정 로직을 함수로 호출
	recordDueDate(invoice);

	// 지역 변수를 매개 변수로 전달
	printDetails(invoice, outstanding);
}

// 새로운 함수로 복사
function calculateOutstanding(invoice) {
	let outstanding = 0;
	// 미해결 채무(outstanding)를 계산한다.
	for (const o of invoice.orders) {
		outstanding += o.amount;
	}
	
	// 수정된 값 반환
	return outstanding;
}

function recordDueDate(invoice) {
	// 마감일(dueDate)을 기록한다.
	const today = Clock.today;
	invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printDetails(invoice, outstanding) {
	// 세부 사항을 출력한다.
	console.log(`고객명 : ${invoice.customer}`);
	console.log(`채무액 : ${outstanding}`);
	console.log(`마감일 : ${invoice.dueDate}`);
	console.log(`마감일 : ${invoice.dueDate.toLocaleDateString()}`);
}

function printBanner() {
	console.log("********************");
	console.log("***** 고객 채무 *****");
	console.log("********************");
}

