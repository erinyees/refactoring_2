/*
유효범위를 벗어나는 변수가 없을 때
*/

function printOwing(invoice) {
	let outstanding = 0;
	
	printBanner();
	
	// 미해결 채무(outstanding)를 계산한다.
	for (const o of invoice.orders) {
		outstanding += o.amount;
	}
	
	// 마감일(dueDate)을 기록한다.
	const today = Clock.today;
	invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

	// 지역 변수를 매개 변수로 전달
	printDetails(invoice, outstanding);
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
