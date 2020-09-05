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

// priceOrder 함수를 처리하는 함수를 추가한다
function priceOrder(product, quantity, shippingMethod) {
	const priceData = calculatePricingData(product, quantity);
	const price = applyShipping(priceData, shippingMethod);
	return price;
}

// priceOrder 함수의 데이터를 처리하는 함수
function calculatePricingData(product, quantity) {
	const basePrice = product.basePrice * quantity;
	const discount = Math.max(quantity - product.discountThreshold, 0)
						* product.basePrice * product.discountRate;
	return {basePrice, quantity, discount};
}


function applyShipping(priceData, shippingMethod) {
	const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold)
								? shippingMethod.discountedFee
								: shippingMethod.feePerCase;
	const shippingCost = priceData.quantity * shippingPerCase;
	const price = priceData.basePrice - priceData.discount + shippingCost;
	return price;
}
