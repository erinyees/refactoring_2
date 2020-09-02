class Book {
	constructor(customer) {
		this.customer = customer;
		this._reservations = customer.reservation;
	}
	
	addReservation(customer) {
		zz_addReservation(customer, false);
	}
	
	// 매개변수 isPriority 추가
	zz_addReservation(customer, isPriority) {
		this._reservations.push(customer.reservation);
	}
}
