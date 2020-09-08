class Constructor() {
	constructor(quantity, item) {
		this._quantity = quantity;
		this._item = item;
	}
	
	get basePrice() {
		return this._quantity * this._item.price;
	}

	// 임시 변수인 basePrice와 discountFactor를 메서드로 바꿔본다.
	get price() {
		// 대입문의 우변을 게터로 추출한다.
		const basePrice = this.basePrice;
		var discountFactor = 0.98;
		
		if (basePrice > 1000) discountFactor -= 0.03;
		
		return basePrice * discountFactor;
	}
}

 