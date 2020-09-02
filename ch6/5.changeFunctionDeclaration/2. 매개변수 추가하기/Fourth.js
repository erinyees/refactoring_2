// https://hyunseob.github.io/2016/05/09/assert-nodejs-test-module/
const assert = require('assert');
class Book {
	constructor(customer) {
		this.customer = customer;
		this._reservations = customer.reservation;
	}
	
	addReservation(customer) {
		this.zz_addReservation(customer, false);
	}
	
	zz_addReservation(customer, isPriority) {
		// 어서션 추가
		assert(isPriority == true || isPriority == false);
		this._reservations.push(customer.reservation);
	}
}

module.exports = { Book };
