class Order {
	constructor(data) {
		this.priority = data.priority;
		// 나머지 초기화 코드 생략
	}
	
	// 게터가 반환하는 값은 우선순위 자체가 아니라 우선순위를 표현하는 문자열이므로 함수 이름을 바꿔준다(6.5장)
	get priorityString() { return this._priority.toString(); }
	set priority(aString) { this._priority = new Priority(aString); }
}

highPriorityCount = orders.filter(o => "high" === o.priorityString || "rush" === o.priorityString).length;


class Priority {
	constructor(value) {
		this._value = value;
	}
	toString() { return this._value; }
}

 