function priceOrder(product, quantity, shippingMethod) {
	const basePrice = product.basePrice * quantity;
	const discount = Math.max(quantity - product.discountThreshold, 0)
						* product.basePrice * product.discountRate;
	const price = applyShipping(basePrice, shippingMethod, quantity, discount); // 함수로 추출
	return price;
}

function applyShipping(basePrice, shippingMethod, quantity, discount) {
	const shippingPerCase = (basePrice > shippingMethod.discountThreshold)
								? shippingMethod.discountedFee
								: shippingMethod.feePerCase;
	const shippingCost = quantity * shippingPerCase;
	const price = basePrice - discount + shippingCost;
	return price;
}



// 중간 데이터 구조를 만든다.
function priceOrder(product, quantity, shippingMethod) {
	const basePrice = product.basePrice * quantity;
	const discount = Math.max(quantity - product.discountThreshold, 0)
						* product.basePrice * product.discountRate;
	const priceData = {};	// 중간 데이터 구조
	const price = applyShipping(priceData, basePrice, shippingMethod, quantity, discount);
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