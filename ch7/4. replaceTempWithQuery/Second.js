class Constructor() {
	constructor(quantity, item) {
		this._quantity = quantity;
		this._item = item;
	}

	// 임시 변수인 basePrice와 discountFactor를 메서드로 바꿔본다.
	get price() {
		// 1. 코드를 const를 붙여 읽기전용으로 만들고 테스트를 해서 못보고 지나친 재대입 코드가 있는지 찾아본다.
		const basePrice = this._quantity * this._item.price;
		var discountFactor = 0.98;
		
		if (basePrice > 1000) discountFactor -= 0.03;
		
		return basePrice * discountFactor;
	}
}

 