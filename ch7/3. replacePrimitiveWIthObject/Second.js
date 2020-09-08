class Order {
	constructor(data) {
		this.priority = data.priority;
		// 나머지 초기화 코드 생략
	}
	
	// 데이터 값을 다루기 전 변수를 캡슐화(6.6장)
	get priority() { return this._priority; }
	set priority(aString) { this._priority = aString; }
}

highPriorityCount = orders.filter(o => "high" === o.priority || "rush" === o.priority).length;


 