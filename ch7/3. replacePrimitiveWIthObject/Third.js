class Order {
	constructor(data) {
		this.priority = data.priority;
		// 나머지 초기화 코드 생략
	}
	
	// 2. Priority 클래스를 사용하도록 접근자들을 수정
	/*
	get priority() { return this._priority; }
	set priority(aString) { this._priority = aString; }
	*/
	get priority() { return this._priority.toString(); }
	set priority(aString) { this._priority = new Priority(aString); }
}

highPriorityCount = orders.filter(o => "high" === o.priority || "rush" === o.priority).length;


// 1. 우선순위 속성을 표현하는 값 클래스 Priority를 만든다.
class Priority {
	constructor(value) {
		this._value = value;
	}
	// 게터(get value()) 보다는 변환 함수(toString())을 선호하기 때문에 
	toString() { return this._value; }
}

 