function priceOrder(priceData, product, quantity, shippingMethod) {
	const basePrice = product.basePrice * quantity;
	const discount = Math.max(quantity - product.discountThreshold, 0)
						* product.basePrice * product.discountRate;
	const priceData = {};
	const price = applyShipping(basePrice, shippingMethod, quantity, discount);
	return price;
}


function applyShipping(priceData, basePrice, shippingMethod, quantity, discount) {
	const shippingPerCase = (basePrice > shippingMethod.discountThreshold)
								? shippingMethod.discountedFee
								: shippingMethod.feePerCase;
	const shippingCost = quantity * shippingPerCase;
	const price = basePrice - discount + shippingCost;
	return price;
}



// basePrice는 priceOrder에서 만들어지므로 중간 데이터 구조로 옮기고 applyShipping() 함수의 매개변수에서 제거한다.
function priceOrder(product, quantity, shippingMethod) {
	const basePrice = product.basePrice * quantity;
	const discount = Math.max(quantity - product.discountThreshold, 0)
						* product.basePrice * product.discountRate;
	const priceData = {basePrice};	// basePrice:basePrice라고 안해도 basePrice라고만해도 된다. 4주차 스터디 때 영범님께 설명들은 내용
	const price = applyShipping(priceData, shippingMethod, quantity, discount);
	return price;
}


function applyShipping(priceData, shippingMethod, quantity, discount) {
	const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold)
								? shippingMethod.discountedFee
								: shippingMethod.feePerCase;
	const shippingCost = quantity * shippingPerCase;
	const price = priceData.basePrice - discount + shippingCost;
	return price;
}



// quantity는 priceOrder() 함수 내에서 만들어진게 아니지만 이것도 중간 데이터 구조로 옮긴다
function priceOrder(product, quantity, shippingMethod) {
	const basePrice = product.basePrice * quantity;
	const discount = Math.max(quantity - product.discountThreshold, 0)
						* product.basePrice * product.discountRate;
	const priceData = {basePrice, quantity};
	const price = applyShipping(priceData, shippingMethod, discount);
	return price;
}


function applyShipping(priceData, shippingMethod, discount) {
	const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold)
								? shippingMethod.discountedFee
								: shippingMethod.feePerCase;
	const shippingCost = priceData.quantity * shippingPerCase;
	const price = priceData.basePrice - discount + shippingCost;
	return price;
}

// discount도 basePrice처럼 처리한다.
function priceOrder(product, quantity, shippingMethod) {
	const basePrice = product.basePrice * quantity;
	const discount = Math.max(quantity - product.discountThreshold, 0)
						* product.basePrice * product.discountRate;
	const priceData = {basePrice, quantity, discount};
	const price = applyShipping(priceData, shippingMethod);
	return price;
}


function applyShipping(priceData, shippingMethod) {
	const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold)
								? shippingMethod.discountedFee
								: shippingMethod.feePerCase;
	const shippingCost = priceData.quantity * shippingPerCase;
	const price = priceData.basePrice - priceData.discount + shippingCost;
	return price;
}