class Book {
	constructor(customer) {
		this.customer = customer;
		this._reservations = customer.reservation;
	}
	
	addReservation(customer) {
		this._reservations.push(customer.reservation);
	}
}
