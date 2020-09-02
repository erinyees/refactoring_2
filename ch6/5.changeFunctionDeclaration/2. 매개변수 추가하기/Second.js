class Book {
	constructor(customer) {
		this.customer = customer;
		this._reservations = customer.reservation;
	}
	
	addReservation(customer) {
		zz_addReservation(customer);
	}
	
	// addReservation을 새로운 함수로 추출
	zz_addReservation(customer) {
		this._reservations.push(customer.reservation);
	}
}
