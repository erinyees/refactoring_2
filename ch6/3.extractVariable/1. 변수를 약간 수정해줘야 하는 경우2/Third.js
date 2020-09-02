// 수량 할인(quantity discount)

function price(order) {
	const basePrice = order.quantity * order.itemPrice;
	const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
	
	return  basePrice - quantityDiscount + Math.min(basePrice * 0.1, 100);
}
