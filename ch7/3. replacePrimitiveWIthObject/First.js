// 단순한 주문 클래스
class Order {
	constructor(data) {
		this.priority = data.priority;
		// 나머지 초기화 코드 생략
	}
}

// 위 코드를 클라이언트에서 사용하는 예
highPriorityCount = orders.filter(o => "high" === o.priority || "rush" === o.priority).length; 